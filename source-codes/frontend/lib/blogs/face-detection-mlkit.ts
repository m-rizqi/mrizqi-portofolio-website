import type { Post } from "../data";

const faceDetectionMlkit: Post = {
  slug: "face-detection-mlkit",
  title: "Building a Face Detection App with MLKit: A Step-by-Step Guide",
  tag: "Android",
  date: "May 2023",
  readTime: "12 min read",
  excerpt:
    "Face detection is an increasingly popular feature in mobile applications. From social media filters to security and authentication systems, face detection is used in a variety of applications.",
  cover: "/assets/blog/face-detection-mlkit/cover.webp",
  link: "https://medium.com/@mrizqi070502/building-a-face-detection-app-with-mlkit-a-step-by-step-guide-b729429119ec",
  body: [
    { type: "image", src: "/assets/blog/face-detection-mlkit/cover.webp" },
    {
      type: "paragraph",
      text: "Face detection is an increasingly popular feature in mobile applications. From social media filters to security and authentication systems, face detection is used in a variety of applications. Fortunately, implementing face detection in your app doesn't have to be a complex task. With the help of MLKit, a machine learning framework by Google, you can easily add face detection functionality to your Android or iOS app. In this blog post, we'll walk you through the steps to implement face detection in your android app using MLKit and explore the various features and capabilities of the framework.",
    },
    { type: "heading", text: "\u{1F4F7}Set Up The Camera" },
    {
      type: "paragraph",
      text: "The first thing we should do is set up the camera. We will use CameraX API because it's a Jetpack library and make the developing process easier along with many features.",
    },
    { type: "heading", text: "✅Declare CameraX Dependency" },
    {
      type: "paragraph",
      text: "Well, we will be using some CameraX libraries. Add these 3 dependencies into your `app/build.gradle`",
    },
    { type: "code", code: "dependencies {\n    // Other dependencies in your project\n    // ...\n    // CameraX core library using the camera2 implementation\n    def camerax_version = \"1.3.0-alpha06\"\n    implementation \"androidx.camera:camera-camera2:${camerax_version}\"\n    // If you want to additionally use the CameraX Lifecycle library\n    implementation \"androidx.camera:camera-lifecycle:${camerax_version}\"\n    // If you want to additionally add CameraX ML Kit Vision Integration\n    implementation \"androidx.camera:camera-mlkit-vision:${camerax_version}\"\n}" },
    { type: "heading", text: "✅Implement The Preview" },
    {
      type: "paragraph",
      text: "Of course, users want to see their faces on the screen so we implement a preview use case. CameraX comes with a view named `PreviewView`. Add that view to your activity layout. After that, inflate the view either manually inflate it or use view binding.",
    },
    { type: "code", code: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<androidx.constraintlayout.widget.ConstraintLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    tools:context=\".MainActivity\">\n    <androidx.camera.view.PreviewView\n        android:id=\"@+id/previewView\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"match_parent\" />\n    <TextView\n              android:id=\"@+id/textView\"\n              android:layout_width=\"wrap_content\"\n              android:layout_height=\"wrap_content\"\n              app:layout_constraintStart_toStartOf=\"parent\"\n              app:layout_constraintEnd_toEndOf=\"parent\"\n              app:layout_constraintBottom_toBottomOf=\"parent\"\n              tools:text=\"Face : Smile\\\\nRotation : Left\"\n              android:textColor=\"@color/white\"\n              android:layout_marginBottom=\"16dp\"\n              android:padding=\"8dp\"\n              android:background=\"@color/black\"\n              />\n\n</androidx.constraintlayout.widget.ConstraintLayout>" },
    {
      type: "paragraph",
      text: "In the activity class, we need to configure several things. We start by requesting camera permission if it's not granted.",
    },
    { type: "code", code: "class MainActivity : AppCompatActivity() {\n    private lateinit var previewView: PreviewView\n    private lateinit var textView: TextView\n    val permissionLauncher = registerForActivityResult(ActivityResultContracts.RequestPermission()){\n      // Do your own thing whether it succeeds or not\n    }\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        previewView = findViewById(R.id.previewView)\n        textView = findViewById(R.id.textView)\n        if (\n            ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED\n        ) {\n            permissionLauncher.launch(Manifest.permission.CAMERA)\n            return\n        }\n    }\n}" },
    {
      type: "paragraph",
      text: "Then, we get `ProcessCameraProvider` by adding code like this.",
    },
    { type: "code", code: "class MainActivity : AppCompatActivity() {\n\n    ...\n    private lateinit var cameraProviderFuture : ListenableFuture<ProcessCameraProvider>\n    override fun onCreate(savedInstanceState: Bundle?) {\n\n        ...\n\tcameraProviderFuture = ProcessCameraProvider.getInstance(this)\n        cameraProviderFuture.addListener({\n            val cameraProvider = cameraProviderFuture.get()\n            bindPreview(cameraProvider)\n        }, ContextCompat.getMainExecutor(this))\n    }\n}" },
    {
      type: "paragraph",
      text: "Here comes the part to configure the preview. Notice that there is `bindPreview()` function in the camera provider listener. Create the function and we will code inside it.",
    },
    {
      type: "paragraph",
      text: "The first is to build a `Preview` object and a `CameraSelector`. Using the `CameraSelector`, we can define which part of the camera we want to use. Whether rear or front camera, commonly is the front camera.",
    },
    { type: "code", code: "private fun bindPreview(cameraProvider: ProcessCameraProvider) {\n        val preview : Preview = Preview.Builder().build()\n        val cameraSelector : CameraSelector = CameraSelector.Builder()\n            .requireLensFacing(CameraSelector.LENS_FACING_FRONT)\n            .build()\n        preview.setSurfaceProvider(previewView.surfaceProvider)\n        var camera = cameraProvider.bindToLifecycle(this as LifecycleOwner, cameraSelector, imageAnalysis, preview)\n    }" },
    {
      type: "paragraph",
      text: "Woohoo\u{1F929}, we're halfway there. run the app and you can see the camera preview.",
    },
    { type: "heading", text: "\u{1F9D1}Face Detection Part" },
    { type: "heading", text: "✅Declare MLKit Dependency" },
    {
      type: "paragraph",
      text: "MLKit Face Detection comes with two options of model, unbundled and bundled model.",
    },
    {
      type: "paragraph",
      text: "For Unbundled, the model is dynamically downloaded via Google Play Services when the user installs the app. It keeps the app size from increasing a lot. However, the user has to wait to download the model the first time the application is used. For this option, you have to declare this dependency.",
    },
    { type: "code", code: "dependencies {\n\t// Other dependencies\n  // ...\n  implementation 'com.google.android.gms:play-services-mlkit-face-detection:17.1.0'\n}" },
    {
      type: "paragraph",
      text: "For Bundled, the model is linked to the app at build time. This makes the app size increase a lot but users don't have to wait to download the model. Declare this dependency if you want to use this option.",
    },
    { type: "code", code: "dependencies {\n  // Other dependencies\n\t// ...\n  implementation 'com.google.mlkit:face-detection:16.1.5'\n}" },
    { type: "heading", text: "✅Set Up Face Detector" },
    {
      type: "paragraph",
      text: "First thing to do is create `FaceDetectorOptions`. This object allows us to set several modes. There are performance, landmark, contour, and classification mode.",
    },
    {
      type: "paragraph",
      text: "Performance mode has two types, `PERFORMANCE_MODE_FAST` and `PERFORMANCE_MODE_ACCURATE`.",
    },
    {
      type: "paragraph",
      text: "Landmark mode used two identity face parts like ears, eyes, mouth, and so on. It also has two types, `LANDMARK_MODE_NONE` and `LANDMARK_MODE_ALL`.",
    },
    {
      type: "paragraph",
      text: "Contour mode used the detect contours of facial features. It also has two types, `CONTOUR_MODE_NONE` and `CONTOUR_MODE_ALL`.",
    },
    {
      type: "paragraph",
      text: "Classification used to determine face, is it smiling, is the eyes open. It also has two type `CLASSIFICATION_MODE_NONE` and `CLASSIFICATION_MODE_ALL`.",
    },
    { type: "code", code: "class MainActivity : AppCompatActivity() {\n\n\t\t...\n    val faceDetectorOptions = FaceDetectorOptions.Builder()\n        .setPerformanceMode(FaceDetectorOptions.PERFORMANCE_MODE_FAST)\n        .setLandmarkMode(FaceDetectorOptions.LANDMARK_MODE_ALL)\n        .setClassificationMode(FaceDetectorOptions.CLASSIFICATION_MODE_ALL)\n        .setContourMode(FaceDetectorOptions.CONTOUR_MODE_ALL)\n        .enableTracking()\n        .build()\n    val detector = FaceDetection.getClient(faceDetectorOptions)\n    override fun onCreate(savedInstanceState: Bundle?) {\n\n        ...\n    }\n}" },
    { type: "heading", text: "✅Create an Image Analyzer" },
    {
      type: "paragraph",
      text: "For this part, we create an analyzer by inheriting from `ImageAnalysis.Analyzer` interface. In that class, we can get the image from the image proxy.",
    },
    { type: "code", code: "@ExperimentalGetImage\nclass MainActivity : AppCompatActivity() {\n\n\t\t...\n        val faceDetectionAnalyzer = ImageAnalysis.Analyzer { imageProxy ->\n          val mediaImage = imageProxy.image\n          if (mediaImage != null){\n              val image = InputImage.fromMediaImage(mediaImage, imageProxy.imageInfo.rotationDegrees)\n          }\n        }\n     override fun onCreate(savedInstanceState: Bundle?) {\n\n        ...\n    }\n}" },
    {
      type: "paragraph",
      text: "In the `bindPreview()` function, we have to create `ImageAnalysis` and we set its analyzer with the analyzer we create before.",
    },
    { type: "code", code: "private fun bindPreview(cameraProvider: ProcessCameraProvider) {\n        val imageAnalysis = ImageAnalysis.Builder()\n            .setResolutionSelector(\n                ResolutionSelector.Builder()\n                    .setResolutionStrategy(ResolutionStrategy.HIGHEST_AVAILABLE_STRATEGY)\n                    .build()\n            )\n            .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)\n            .build()\n        val executor: ExecutorService = Executors.newSingleThreadExecutor()\n        imageAnalysis.setAnalyzer(executor, faceDetectionAnalyzer)\n        val preview : Preview = Preview.Builder().build()\n        val cameraSelector : CameraSelector = CameraSelector.Builder()\n            .requireLensFacing(CameraSelector.LENS_FACING_FRONT)\n            .build()\n        preview.setSurfaceProvider(previewView.surfaceProvider)\n        var camera = cameraProvider.bindToLifecycle(this as LifecycleOwner, cameraSelector, imageAnalysis, preview)  // Don't forget to pass the imageAnalysis into parameter\n    }" },
    { type: "heading", text: "✅Extract Face Information" },
    {
      type: "paragraph",
      text: "Note, the face detection feature detects face information, not recognizing a person. So, the information we will extract is about the face position, landmark position, and so on.",
    },
    {
      type: "paragraph",
      text: "We get those information by processing the image using the detector. We will get a list of faces from the listener. Once you get the `Face` object, you can get much information. Just playing around with it.",
    },
    { type: "code", code: "val faceDetectionAnalyzer = ImageAnalysis.Analyzer { imageProxy ->\n        val mediaImage = imageProxy.image\n        if (mediaImage != null){\n            val image = InputImage.fromMediaImage(mediaImage, imageProxy.imageInfo.rotationDegrees)\n            detector.process(image)\n                .addOnSuccessListener { faces ->\n                    textView.text = \"\"\n                    faces.forEachIndexed { index, face ->\n                        var faceInfoString = \"Face $index\"\t\t\t\t\t\t\t\t\t\t\t\t// Face area in rectangle\n                        val bounds = face.boundingBox\n                        // Face is facing upward\n                        val rotX = face.headEulerAngleX\n                        faceInfoString += \"\\\\nRotation X: $rotX (${if (rotX >= 0) \"Facing Upward\" else \"Facing Down\"})\"\n                        // Face is facing to the right of the camera\n                        val rotY = face.headEulerAngleY\n                        faceInfoString += \"\\\\nRotation Y: $rotY (${if (rotY >= 0) \"Facing Right\" else \"Facing Left\"})\"\n                        // Face is rotated counter-clockwise relative to the camera\n                        val rotZ = face.headEulerAngleZ\n                        faceInfoString += \"\\\\nRotation Z: $rotZ (${if (rotZ >= 0) \"Rotation Counter-Clockwise\" else \"Facing Rotation Clockwise\"})\"\n                        // Landmark\n                        face.getLandmark(FaceLandmark.LEFT_EAR)?.let {}\n                        // Contour\n                        face.getContour(FaceContour.FACE)?.points?.let {}\n                        // Classification\n                        if (face.smilingProbability != null){\n                            val smileProb = face.smilingProbability\n                            faceInfoString += \"\\\\nSmiling Probability: ${smileProb}\"\n                        }\n                        if (face.leftEyeOpenProbability != null){\n                            val leftEyeOpenProb = face.leftEyeOpenProbability\n                            faceInfoString += \"\\\\nLeft Eye Open Probability: ${leftEyeOpenProb}\"\n                        }\n                        if (face.rightEyeOpenProbability != null){\n                            val rightEyeOpenProb = face.rightEyeOpenProbability\n                            faceInfoString += \"\\\\nRight Eye Open Probability: ${rightEyeOpenProb}\"\n                        }\n                        if (face.trackingId != null){\n                            val id = face.trackingId\n                        }\n                        textView.text = faceInfoString\n                    }\n                    imageProxy.close()\n                }\n                .addOnFailureListener { e ->\n                    Toast.makeText(this, e.message, Toast.LENGTH_SHORT).show()\n                }\n        }\n    }" },
    {
      type: "paragraph",
      text: "`FaceLandmark` has many landmark types, there are `LEFT_EAR`, `RIGHT_EAR`, `LEFT_EYE`, and so on. You can get the list of it here: https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceLandmark",
    },
    {
      type: "paragraph",
      text: "`FaceContour` also has many types, you can get the list here: https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceContour",
    },
    { type: "heading", text: "✅Draw Rectangle Around The Face" },
    {
      type: "paragraph",
      text: "To draw a rectangle around the face, we're using the create a new view approach. Create a new class named `FaceBoundingBox` and make it inherit from `View`. In that class, define `boundingBox` variable in a type of `RectF` and a `Paint` variable. `PaintF` is used to define the color and the style of the rectangle. Override `onDraw()` function and using the canvas, draw the `boundingBox`. Also, create `setBoundingBox()` function.",
    },
    { type: "code", code: "class FaceBoundingBoxView(context: Context, attrs: AttributeSet?) : View(context, attrs) {\n    private var boundingBox: RectF? = null\n    private val paint = Paint().apply {\n        color = Color.RED\n        style = Paint.Style.STROKE\n        strokeWidth = 10f\n    }\n    fun setBoundingBox(rect: Rect, imageWidth: Int, imageHeight: Int) {\n        val viewWidth = width\n        val viewHeight = height\n        val scaleFactorX = viewWidth.toFloat() / imageHeight.toFloat()\n        val scaleFactorY = viewHeight.toFloat() / imageWidth.toFloat()\n        boundingBox = RectF(\n            rect.left * scaleFactorX,\n            rect.top * scaleFactorY,\n            rect.right * scaleFactorX,\n            rect.bottom * scaleFactorY\n        )\n        invalidate()\n    }\n    override fun onDraw(canvas: Canvas?) {\n        super.onDraw(canvas)\n        boundingBox?.let {\n            canvas?.drawRect(it, paint)\n        }\n    }\n}" },
    {
      type: "paragraph",
      text: "In `setBoundingBox()` we calculate the scale factor of the image width and height to the view width and height. Then we set the `boundingBox` by the new scaled coordinate. Invalidate it so the view is recreated.",
    },
    { type: "paragraph", text: "Next, in the activity layout, add the custom view." },
    { type: "code", code: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<androidx.constraintlayout.widget.ConstraintLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    tools:context=\".MainActivity\">\n    <androidx.camera.view.PreviewView\n        android:id=\"@+id/previewView\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"match_parent\" />\n    <com.rizqi.facedetection.FaceBoundingBoxView\n        android:id=\"@+id/face_bounding_box_view\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"match_parent\" />\n    <TextView\n        android:id=\"@+id/textView\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        app:layout_constraintStart_toStartOf=\"parent\"\n        app:layout_constraintEnd_toEndOf=\"parent\"\n        app:layout_constraintBottom_toBottomOf=\"parent\"\n        tools:text=\"Face : Smile\\\\nRotation : Left\"\n        android:textColor=\"@color/white\"\n        android:layout_marginBottom=\"16dp\"\n        android:padding=\"8dp\"\n        android:background=\"@color/black\"\n        />\n</androidx.constraintlayout.widget.ConstraintLayout>" },
    {
      type: "paragraph",
      text: "In the activity class, inflate the view. Then, call the `setBoudingBox()` function when we get the face area in the image analyzer.",
    },
    { type: "code", code: "val faceDetectionAnalyzer = ImageAnalysis.Analyzer { imageProxy ->\n        val mediaImage = imageProxy.image\n        if (mediaImage != null){\n            val image = InputImage.fromMediaImage(mediaImage, imageProxy.imageInfo.rotationDegrees)\n            detector.process(image)\n                .addOnSuccessListener { faces ->\n                    textView.text = \"\"\n                    faces.forEachIndexed { index, face ->\n                        var faceInfoString = \"Face $index\"\n                        val bounds = face.boundingBox\n                        faceBoundingBoxView.setBoundingBox(bounds, imageProxy.width, imageProxy.height)  // Set the new bounding box so the rectangle recreated\n                        ...\n                }\n                .addOnFailureListener { e ->\n                    Toast.makeText(this, e.message, Toast.LENGTH_SHORT).show()\n                }\n        }\n    }" },
    { type: "heading", text: "Full Code \u{1F468}‍\u{1F4BB}" },
    { type: "paragraph", text: "MainActivity.kt" },
    { type: "code", code: "package com.rizqi.facedetection\nimport android.Manifest\nimport android.content.pm.PackageManager\nimport androidx.appcompat.app.AppCompatActivity\nimport android.os.Bundle\nimport android.widget.TextView\nimport android.widget.Toast\nimport androidx.activity.result.contract.ActivityResultContracts\nimport androidx.camera.core.*\nimport androidx.camera.core.resolutionselector.ResolutionSelector\nimport androidx.camera.core.resolutionselector.ResolutionStrategy\nimport androidx.camera.lifecycle.ProcessCameraProvider\nimport androidx.camera.view.PreviewView\nimport androidx.core.content.ContextCompat\nimport androidx.lifecycle.LifecycleOwner\nimport com.google.common.util.concurrent.ListenableFuture\nimport com.google.mlkit.vision.common.InputImage\nimport com.google.mlkit.vision.face.FaceContour\nimport com.google.mlkit.vision.face.FaceDetection\nimport com.google.mlkit.vision.face.FaceDetectorOptions\nimport com.google.mlkit.vision.face.FaceLandmark\nimport java.util.concurrent.ExecutorService\nimport java.util.concurrent.Executors\n\n@ExperimentalGetImage\nclass MainActivity : AppCompatActivity() {\n    private lateinit var cameraProviderFuture : ListenableFuture<ProcessCameraProvider>\n    private lateinit var previewView: PreviewView\n    private lateinit var textView: TextView\n    private lateinit var faceBoundingBoxView: FaceBoundingBoxView\n    private val permissionLauncher = registerForActivityResult(ActivityResultContracts.RequestPermission()){\n        // Do your own thing whether it success or not\n    }\n    val faceDetectorOptions = FaceDetectorOptions.Builder()\n        .setPerformanceMode(FaceDetectorOptions.PERFORMANCE_MODE_FAST)\n        .setLandmarkMode(FaceDetectorOptions.LANDMARK_MODE_ALL)\n        .setClassificationMode(FaceDetectorOptions.CLASSIFICATION_MODE_ALL)\n        .setContourMode(FaceDetectorOptions.CONTOUR_MODE_ALL)\n        .enableTracking()\n        .build()\n    val detector = FaceDetection.getClient(faceDetectorOptions)\n    val faceDetectionAnalyzer = ImageAnalysis.Analyzer { imageProxy ->\n        val mediaImage = imageProxy.image\n        if (mediaImage != null){\n            val image = InputImage.fromMediaImage(mediaImage, imageProxy.imageInfo.rotationDegrees)\n            detector.process(image)\n                .addOnSuccessListener { faces ->\n                    textView.text = \"\"\n                    faces.forEachIndexed { index, face ->\n                        var faceInfoString = \"Face $index\"\n                        val bounds = face.boundingBox\n                        faceBoundingBoxView.setBoundingBox(bounds, imageProxy.width, imageProxy.height)\n                        // Face is facing upward\n                        val rotX = face.headEulerAngleX\n                        faceInfoString += \"\\\\nRotation X: $rotX (${if (rotX >= 0) \"Facing Upward\" else \"Facing Down\"})\"\n                        // Face is facing to the right of the camera\n                        val rotY = face.headEulerAngleY\n                        faceInfoString += \"\\\\nRotation Y: $rotY (${if (rotY >= 0) \"Facing Right\" else \"Facing Left\"})\"\n                        // Face is rotated counter-clockwise relative to the camera\n                        val rotZ = face.headEulerAngleZ\n                        faceInfoString += \"\\\\nRotation Z: $rotZ (${if (rotZ >= 0) \"Rotation Counter-Clockwise\" else \"Facing Rotation Clockwise\"})\"\n                        // Landmark\n                        face.getLandmark(FaceLandmark.LEFT_EAR)?.let {}\n                        // Contour\n                        face.getContour(FaceContour.FACE)?.points?.let {}\n                        // Classification\n                        if (face.smilingProbability != null){\n                            val smileProb = face.smilingProbability\n                            faceInfoString += \"\\\\nSmiling Probability: ${smileProb}\"\n                        }\n                        if (face.leftEyeOpenProbability != null){\n                            val leftEyeOpenProb = face.leftEyeOpenProbability\n                            faceInfoString += \"\\\\nLeft Eye Open Probability: ${leftEyeOpenProb}\"\n                        }\n                        if (face.rightEyeOpenProbability != null){\n                            val rightEyeOpenProb = face.rightEyeOpenProbability\n                            faceInfoString += \"\\\\nRight Eye Open Probability: ${rightEyeOpenProb}\"\n                        }\n                        if (face.trackingId != null){\n                            val id = face.trackingId\n                        }\n                        textView.text = faceInfoString\n                    }\n                    imageProxy.close()\n                }\n                .addOnFailureListener { e ->\n                    Toast.makeText(this, e.message, Toast.LENGTH_SHORT).show()\n                }\n        }\n    }\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        previewView = findViewById(R.id.previewView)\n        textView = findViewById(R.id.textView)\n        faceBoundingBoxView = findViewById(R.id.face_bounding_box_view)\n        if (\n            ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED\n        ) {\n            permissionLauncher.launch(Manifest.permission.CAMERA)\n            return\n        }\n        cameraProviderFuture = ProcessCameraProvider.getInstance(this)\n        cameraProviderFuture.addListener({\n            val cameraProvider = cameraProviderFuture.get()\n            bindPreview(cameraProvider)\n        }, ContextCompat.getMainExecutor(this))\n    }\n    private fun bindPreview(cameraProvider: ProcessCameraProvider) {\n        val preview : Preview = Preview.Builder().build()\n        val cameraSelector : CameraSelector = CameraSelector.Builder()\n            .requireLensFacing(CameraSelector.LENS_FACING_FRONT)\n            .build()\n        val imageAnalysis = ImageAnalysis.Builder()\n            .setResolutionSelector(\n                ResolutionSelector.Builder()\n                    .setResolutionStrategy(ResolutionStrategy.HIGHEST_AVAILABLE_STRATEGY)\n                    .build()\n            )\n            .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)\n            .build()\n        val executor: ExecutorService = Executors.newSingleThreadExecutor()\n        imageAnalysis.setAnalyzer(executor, faceDetectionAnalyzer)\n        preview.setSurfaceProvider(previewView.surfaceProvider)\n        var camera = cameraProvider.bindToLifecycle(this as LifecycleOwner, cameraSelector, imageAnalysis, preview)\n    }\n}" },
    { type: "paragraph", text: "FaceBounding.kt" },
    { type: "code", code: "package com.rizqi.facedetection\nimport android.content.Context\nimport android.graphics.*\nimport android.util.AttributeSet\nimport android.view.View\nclass FaceBoundingBoxView(context: Context, attrs: AttributeSet?) : View(context, attrs) {\n    private var boundingBox: RectF? = null\n    private val paint = Paint().apply {\n        color = Color.RED\n        style = Paint.Style.STROKE\n        strokeWidth = 10f\n    }\n    fun setBoundingBox(rect: Rect, imageWidth: Int, imageHeight: Int) {\n        val viewWidth = width\n        val viewHeight = height\n        val scaleFactorX = viewWidth.toFloat() / imageHeight.toFloat()\n        val scaleFactorY = viewHeight.toFloat() / imageWidth.toFloat()\n        boundingBox = RectF(\n            rect.left * scaleFactorX,\n            rect.top * scaleFactorY,\n            rect.right * scaleFactorX,\n            rect.bottom * scaleFactorY\n        )\n        invalidate()\n    }\n    override fun onDraw(canvas: Canvas?) {\n        super.onDraw(canvas)\n        boundingBox?.let {\n            canvas?.drawRect(it, paint)\n        }\n    }\n}" },
    { type: "paragraph", text: "activity_main.xml" },
    { type: "code", code: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<androidx.constraintlayout.widget.ConstraintLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    tools:context=\".MainActivity\">\n    <androidx.camera.view.PreviewView\n        android:id=\"@+id/previewView\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"match_parent\" />\n    <com.rizqi.facedetection.FaceBoundingBoxView\n        android:id=\"@+id/face_bounding_box_view\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"match_parent\" />\n    <TextView\n        android:id=\"@+id/textView\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        app:layout_constraintStart_toStartOf=\"parent\"\n        app:layout_constraintEnd_toEndOf=\"parent\"\n        app:layout_constraintBottom_toBottomOf=\"parent\"\n        tools:text=\"Face : Smile\\\\nRotation : Left\"\n        android:textColor=\"@color/white\"\n        android:layout_marginBottom=\"16dp\"\n        android:padding=\"8dp\"\n        android:background=\"@color/black\"\n        />\n</androidx.constraintlayout.widget.ConstraintLayout>" },
    { type: "heading", text: "Result \u{1F4F1}" },
    { type: "image", src: "/assets/blog/face-detection-mlkit/result.gif" },
    {
      type: "paragraph",
      text: "Yay \u{1F389}, we just learn how to implement Face Detection in Android App using MLKit Library. Let's resume what we learn so far. First, we use CameraX to show a preview and analyze the image. Then, using the Face Detection, we set up the options and create the detector. Using the detector we can extract information about the face. And to make it more interesting, we create a rectangle around the face based on the information we got. Waw, that's quite a lot for a single blog, but it's okay.",
    },
    {
      type: "paragraph",
      text: "Hope you like this blog Thanks for following this far. Follow me to get more about Android Development posts. Let's connect on LinkedIn and Instagram. See ya \u{1F44B}",
    },
    { type: "heading", text: "\u{1F4DA}Resource" },
    {
      type: "links",
      items: [
        { label: "Face detection | ML Kit | Google Developers", href: "https://developers.google.com/ml-kit/vision/face-detection" },
        { label: "CameraX overview | Android Developers", href: "https://developer.android.com/training/camerax?authuser=2" },
        { label: "Implement a preview | Android Developers", href: "https://developer.android.com/training/camerax/preview?authuser=2" },
        { label: "Image analysis | Android Developers", href: "https://developer.android.com/training/camerax/analyze?authuser=2" },
        { label: "FaceLandmark | ML Kit | Google Developers", href: "https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceLandmark" },
        { label: "FaceContour | ML Kit | Google Developers", href: "https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceContour" },
      ],
    },
  ],
};

export default faceDetectionMlkit;
