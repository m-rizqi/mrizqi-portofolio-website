import type { Post } from "../data";

const kustomisasiDanPenggunaanWarnaPadaAndroidStudio: Post = {
  slug: "kustomisasi-dan-penggunaan-warna-pada-android-studio",
  title: "Kustomisasi dan Penggunaan Warna pada Android Studio",
  tag: "Android",
  date: "Apr 2022",
  readTime: "3 min read",
  excerpt: "Pemilihan warna yang tepat akan membuat design aplikasi android Anda bagus dan menarik. Dalam Android Studio, warna direpresentasikan dalam bentuk angka Hexadesimal. Kode untuk warna diawali dengan tanda pagar (#) kemudian diikuti empat pasang angka hexadesimal.",
  cover: "/assets/blog/kustomisasi-dan-penggunaan-warna-pada-android-studio/img-1.png",
  link: "https://medium.com/@mrizqi070502/kustomisasi-dan-penggunaan-warna-pada-android-studio-ff4860d18783",
  body: [
    { type: "paragraph", text: "Pemilihan warna yang tepat akan membuat design aplikasi android Anda bagus dan menarik. Dalam Android Studio, warna direpresentasikan dalam bentuk angka **Hexadesimal**. Kode untuk warna diawali dengan tanda pagar (#) kemudian diikuti empat pasang angka hexadesimal. Hexadesimal pertama untuk mengatur tingkat transparasi warna, dimulai dari 00 (0% = Transparant) sampai FF (100% = Jelas). Kemudian, kode diikuti oleh tiga hexadesimal lainnya sebagai komponen RGB (Reed Green Blue)." },
    { type: "image", src: "/assets/blog/kustomisasi-dan-penggunaan-warna-pada-android-studio/img-1.png", caption: "sumber : developer.android.com" },
    { type: "paragraph", text: "Ada beberapa cara menggunakan warna pada Android Studio, cara pertama yaitu langsung memasukkan kode hexadesimal ke dalam atribut xml atau kode program. Cara ini terbilang mudah namun tidak cukup efisien apabila Anda menggunakan warna tersebut berulang kali karena perlu mengetikkan kode yang sama tanpa ada fitur autocomplete. Contoh" },
    { type: "code", code: "android:textColor=\"#FFC4C4C4\"" },
    { type: "paragraph", text: "Cara kedua yaitu menambahkan variabel baru untuk warna pada direktori **app > res > values > colors.xml**. Pada file colors.xml, sudah ada beberapa warna default yang disediakan Android Studio, Anda bisa menambahkan warna lainnya sesuai dengan kebutuhan. Untuk menambahkan variabel warna, diperlukan tag pembuka, tag penutup, dan nilai didalamnya seperti berikut." },
    { type: "code", code: "<color name=\"your_color_name\">#FFC4C4C4</color>" },
    { type: "paragraph", text: "Keuntungan menggunakan cara ini adalah, Anda tidak lagi bersusah payah mengingat kode hexadesimal warna tersebut karena cukup memanggil nama variabel warna tersebut (Ditambah fitur autocomplete membuat pemanggilan warna tersebut menjadi semakin mudah). Pada kode xml, cara menggunakan warna dengan metode ini yaitu diawali dengan kalimat **@color/** diikuti nama warna. Contoh" },
    { type: "code", code: "android:textColor=\"@color/your_color_name\"" },
    { type: "paragraph", text: "Sedangkan secara programmatik (Kotlin), Anda perlu menggunakan class R (Kelas yang berisi semua definisi sumber daya pada project). Contoh" },
    { type: "code", code: "mTextView.setTextColor(resources.getColor(R.color.your_color_name))" },
    { type: "paragraph", text: "Sekian dahulu pembahasan mengenai penggunaan dan kustomisasi warna pada Android Studio. Terima kasih sudah menyempatkan membaca dan sampai jumpa. 🖐" },
    { type: "paragraph", text: "Sumber :" },
    {
      type: "links",
      items: [
        { label: "https://developer.android.com/", href: "https://developer.android.com/" },
        { label: "https://www.geeksforgeeks.org/", href: "https://www.geeksforgeeks.org/" },
      ],
    },
  ],
};

export default kustomisasiDanPenggunaanWarnaPadaAndroidStudio;
