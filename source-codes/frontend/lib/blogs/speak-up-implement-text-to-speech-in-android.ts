import type { Post } from "../data";

const speakUpImplementTextToSpeechInAndroid: Post = {
  slug: "speak-up-implement-text-to-speech-in-android",
  title: "Speak Up: Implement Text-to-Speech in Android",
  tag: "Android",
  date: "Apr 2023",
  readTime: "3 min read",
  excerpt: "One useful feature you can add is text-to-speech (TTS) functionality, which allows users to have text read out loud to them. This can be especially helpful for people with visual impairments, learning disabilities, or anyone who prefers an audio interface.",
  cover: undefined,
  link: "https://medium.com/@mrizqi070502/speak-up-implement-text-to-speech-in-android-3ad0f7f2580",
  body: [
    { type: "paragraph", text: "Are you looking for ways to make your Android app more accessible and user-friendly? One useful feature you can add is text-to-speech (TTS) functionality, which allows users to have text read out loud to them. This can be especially helpful for people with visual impairments, learning disabilities, or anyone who prefers an audio interface. In this beginner’s guide, we’ll walk you through the basic steps of implementing TTS in your Android app, using the Android TextToSpeech API. With just a few lines of code, you can enhance your app’s accessibility and provide a better experience for all users." },
    { type: "heading", text: "1️⃣Create TextToSpeech" },
    { type: "paragraph", text: "First, we create the TextToSpeech instance by passing `Context`and `TextToSpeech.OnInitListener` into the constructor. In the listener, we can get the result of whether the initialization is a success or not." },
    { type: "code", code: "class MainActivity : AppCompatActivity() {" },
    { type: "code", code: "    lateinit var startOrPauseButton : Button\n    lateinit var textView : TextView    lateinit var textToSpeech: TextToSpeech    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)        startOrPauseButton = findViewById(R.id.button_start_or_pause)\n        textView = findViewById(R.id.textView)        textToSpeech = TextToSpeech(this) {status ->\n            if (status == TextToSpeech.SUCCESS){\n                Log.d(\"TextToSpeech\", \"Initialization Success\")\n            }else{\n                Log.d(\"TextToSpeech\", \"Initialization Failed\")\n            }\n        }\n    }\n}" },
    { type: "heading", text: "2️⃣Set The Language" },
    { type: "paragraph", text: "Optionally, we can set the language to be used by passing a `Locale`" },
    { type: "code", code: "textToSpeech.language = Locale.US" },
    { type: "heading", text: "3️⃣Start And Stop Speaking" },
    { type: "paragraph", text: "Here comes the main part, to start speaking, call `speak()` method by passing the `String` of the text, queue mode, params, and unique id for the request." },
    { type: "paragraph", text: "There are 2 types of queue mode" },
    {
      type: "list",
      items: [
        { title: "", text: "`TextToSpeech.QUEUE_ADD` → All entries will be replaced by the new one" },
        { title: "", text: "`TextToSpeech.QUEUE_FLUSH` → New entry will be added at the end of the playback" },
      ],
    },
    { type: "code", code: "startOrPauseButton.setOnClickListener {\n            if (textToSpeech.isSpeaking){\n                textToSpeech.stop()\n                startOrPauseButton.text = \"Start\"\n            }else{\n                textToSpeech.speak(textView.text.toString(), TextToSpeech.QUEUE_FLUSH, null, \"unique_id\")\n                startOrPauseButton.text = \"Pause\"\n            }\n        }" },
    { type: "heading", text: "4️⃣Release The Resource" },
    { type: "paragraph", text: "To prevent a lack of resources, we shall call `shutdown()` method when the activity is destroyed." },
    { type: "code", code: "override fun onDestroy() {\n        super.onDestroy()\n        textToSpeech.shutdown()\n    }" },
    { type: "heading", text: "Full Code" },
    { type: "code", code: "package com.rizqi.texttospeech\nimport androidx.appcompat.app.AppCompatActivity\nimport android.os.Bundle\nimport android.speech.tts.TextToSpeech\nimport android.util.Log\nimport android.widget.Button\nimport android.widget.TextView\nimport java.util.*\n\nclass MainActivity : AppCompatActivity() {\n    lateinit var startOrPauseButton : Button\n    lateinit var textView : TextView\n    lateinit var textToSpeech: TextToSpeech\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        startOrPauseButton = findViewById(R.id.button_start_or_pause)\n        textView = findViewById(R.id.textView)\n        textToSpeech = TextToSpeech(this) {status ->\n            if (status == TextToSpeech.SUCCESS){\n                Log.d(\"TextToSpeech\", \"Initialization Success\")\n            }else{\n                Log.d(\"TextToSpeech\", \"Initialization Failed\")\n            }\n        }\n        textToSpeech.language = Locale.US\n        startOrPauseButton.setOnClickListener {\n            if (textToSpeech.isSpeaking){\n                textToSpeech.stop()\n                startOrPauseButton.text = \"Start\"\n            }else{\n                textToSpeech.speak(textView.text.toString(), TextToSpeech.QUEUE_FLUSH, null)\n                startOrPauseButton.text = \"Pause\"\n            }\n        }\n    }\n    override fun onDestroy() {\n        super.onDestroy()\n        textToSpeech.shutdown()\n    }\n}" },
    { type: "heading", text: "Result" },
    {
      type: "links",
      items: [
        { label: "TextToSpeech In AndroidEdit description youtube.com", href: "https://youtube.com/shorts/xGtg4lblL9A?feature=share" },
      ],
    },
    { type: "paragraph", text: "Yay 🎉, we just learn how to use text to speech feature in Android. [**Follow me**](https://medium.com/@mrizqi070502/about) to get more about Android Development posts. Let’s connect on [**LinkedIn**](https://www.linkedin.com/in/m-rizqi/) and [**Instagram**](https://www.instagram.com/_riz.qi/)" },
    { type: "heading", text: "Reference" },
    {
      type: "links",
      items: [
        { label: "TextToSpeech | Android Developers", href: "https://developer.android.com/reference/android/speech/tts/TextToSpeech?authuser=2" },
      ],
    },
  ],
};

export default speakUpImplementTextToSpeechInAndroid;
