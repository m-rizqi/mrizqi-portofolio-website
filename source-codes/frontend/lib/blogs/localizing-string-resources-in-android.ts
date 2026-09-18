import type { Post } from "../data";

const localizingStringResourcesInAndroid: Post = {
  slug: "localizing-string-resources-in-android",
  title: "Localizing String Resources in Android",
  tag: "Android",
  date: "Apr 2023",
  readTime: "3 min read",
  excerpt: "As an Android developer, it is essential to ensure that your app can cater to a diverse range of users from different countries and cultures.",
  cover: "/assets/blog/localizing-string-resources-in-android/img-1.png",
  link: "https://medium.com/@mrizqi070502/localizing-string-resources-in-android-b63880511e94",
  body: [
    { type: "paragraph", text: "Android is a widely used mobile operating system, with millions of users across the globe. As an Android developer, it is essential to ensure that your app can cater to a diverse range of users from different countries and cultures. One way to achieve this is by localizing your app’s content, including string resources, into different languages. This ensures that users can understand your app’s content, leading to better user engagement and higher app ratings. In this blog, we will provide a basic tutorial on how to localize string resources in Android, including step-by-step instructions and best practices to help you get started." },
    { type: "heading", text: "Make Sure We Already Have the Default Resource" },
    { type: "paragraph", text: "The default resource for strings is `res/value/strings.xml`. This resource is automatically created when you create a new project. Just make sure you don’t delete or change the name." },
    { type: "paragraph", text: "Why default resources are important?" },
    { type: "paragraph", text: "Because if your app doesn’t provide specific value for a specific locale, your app will load the value from your default resource. Imagine your app needs to load a string named `button_text` and the locale of the app in Indonesia, but you forgot doesn’t provide the value in Indonesia resource. Then, the app will load it from the default. If the default resource still doesn’t have the value, it will get an error." },
    { type: "paragraph", text: "Define your default value. For example like this" },
    { type: "image", src: "/assets/blog/localizing-string-resources-in-android/img-1.png" },
    { type: "heading", text: "Create Localized-Resource" },
    { type: "paragraph", text: "To create a localized resource, right-click on `strings.xml` . Then select `New` → `Value Resource File`" },
    { type: "image", src: "/assets/blog/localizing-string-resources-in-android/img-2.png" },
    { type: "paragraph", text: "Fill the File name with ‘strings’ and select Locale in Available qualifiers." },
    { type: "image", src: "/assets/blog/localizing-string-resources-in-android/img-3.png" },
    { type: "paragraph", text: "Then click the button with `>>` icon in the center of the box. You will be given a list of languages and regions on the right side." },
    { type: "image", src: "/assets/blog/localizing-string-resources-in-android/img-4.png" },
    { type: "paragraph", text: "Choose the language you want to localize and click ok" },
    { type: "image", src: "/assets/blog/localizing-string-resources-in-android/img-5.png" },
    { type: "paragraph", text: "Now, you have a new `strings.xml` file. The new one has a description of the language id behind the file name. For example, (id)" },
    { type: "image", src: "/assets/blog/localizing-string-resources-in-android/img-6.png" },
    { type: "paragraph", text: "Next, define a string with the same name as in the default resource and fill the value according to the language of localization." },
    { type: "image", src: "/assets/blog/localizing-string-resources-in-android/img-7.png" },
    { type: "heading", text: "Load The String In The Project" },
    { type: "paragraph", text: "Load the string, as usual, using the id. The value given will depend on the phone locale" },
    { type: "code", code: "getString(R.string.app_name)" },
    { type: "paragraph", text: "Yay 🎉, we just learn how to localize the resource, especially string resource, in Android. [**Follow me**](https://medium.com/@mrizqi070502/about) to get more about Android Development posts. Let’s connect on [**LinkedIn**](https://www.linkedin.com/in/m-rizqi/) and [**Instagram**](https://www.instagram.com/_riz.qi/)" },
    { type: "heading", text: "Reference" },
    {
      type: "links",
      items: [
        { label: "Localize your app | Android Developers", href: "https://developer.android.com/guide/topics/resources/localization" },
      ],
    },
  ],
};

export default localizingStringResourcesInAndroid;
