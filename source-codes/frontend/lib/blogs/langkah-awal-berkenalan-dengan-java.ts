import type { Post } from "../data";

const langkahAwalBerkenalanDenganJava: Post = {
  slug: "langkah-awal-berkenalan-dengan-java",
  title: "Langkah Awal Berkenalan dengan Java",
  tag: "Java",
  date: "Nov 2021",
  readTime: "3 min read",
  excerpt: "Java adalah bahasa pemograman tingkat tinggi yang digunakan untuk banyak kebutuhan seperti Back-End, Aplikasi, dan juga software. Java juga memiliki moto “Write Once, Run Anywhere”",
  cover: "/assets/blog/langkah-awal-berkenalan-dengan-java/img-1.jpeg",
  link: "https://medium.com/@mrizqi070502/langkah-awal-berkenalan-dengan-java-8a47c1ac21e",
  body: [
    { type: "paragraph", text: "Bahasa pemrograman dalam dunia IT bisa diibaratkan sebagai kendaraan yang wajib kita punya dan kuasai agar bisa sampai ke tujuan yang diinginkan. Segala program yang ingin dibuat seperti Machine Learning, aplikasi, website, dan lain sebagainya pasti memerlukan bahasa pemrograman untuk mengimplementasikan ide kita. Nah, pada kali ini, saya akan mencoba membagikan pengetahuan saya mengenai bahasa pemrograman Java." },
    { type: "heading", text: "Pengertian" },
    { type: "paragraph", text: "Java adalah bahasa pemograman tingkat tinggi yang digunakan untuk banyak kebutuhan seperti Back-End, Aplikasi, dan juga software. Java juga memiliki moto **“Write Once, Run Anywhere”** yang berarti kita hanya perlu menulis kode sekali, maka kita bisa menjalankannya di berbagai Operating System (OS) tanpa perlu merubah kodenya sekalipun. Kemampuan ini didapatkan karena Java akan mengompilasi atau mengubah kodenya yang berekstensi (.java) menjadi *k*ode binary(*bytecode*)yang berekstensi (.class). Hanya Kode binary inilah yang dapat dikenali oleh **Java Virtual Machine(JVM)** sehingga program yang dibuat bisa berjalan dimanapun asalkan terdapat JVM. Apa itu JVM ? Pertanyaan itu akan saya jawab di artikel selanjutnya.😁" },
    { type: "heading", text: "Sejarah" },
    { type: "paragraph", text: "Java ditemukan berawal dari sebuah project bernama **The Green Project** yang dilakukan perusahaan Sun Microsystem, perusahaan perangkat lunak asal Amerika. Project tersebut dikembangkan oleh **James Gosling**, **Patrick Naughton**, **Mike Sheridan**, dan **Bill Joy**. Project tersebut dikembangkan menggunakan bahasa C dan C++. Akan tetapi karena merasa kurang bisa memenuhi kebutuhan project, mereka mencoba mengembangkan bahasa pemrograman baru yang bisa memenuhi kebutuhan mereka. Project tersebut berlangsung selama 18 bulan dari 1991 sampai 1992 dan menghasilkan bahasa pemrogaman baru bernama **Oak**. Ya, awal mula namanya adalah Oak. Namun, ternyata nama tersebut sudah ada yang memakainya yaitu sebuah perusahaan bernama Oak Technology. Setelah proses pencarian nama pengganti, didapatkanlah nama **Java**. Nama tersebut diambil dari kopi kesukaan James Gosling yaitu kopi giling langsung dari bijinya yang berasal dari Jawa (Java). Oleh karena itu, logo yang digunakan berupa secangkir kopi panas dengan uap-uapnya. Setelah mendapatkan nama baru, pada 1996, Java versi satu dirilis dan hingga saat ini, Java sudah mencapai versi ke lima belas." },
    { type: "image", src: "/assets/blog/langkah-awal-berkenalan-dengan-java/img-1.jpeg" },
    { type: "paragraph", text: "James Gosling" },
    { type: "heading", text: "Kelebihan" },
    { type: "paragraph", text: "Membahas mengenai Java, tak lengkap jika tidak mengetahui kelebihannya. Sebenarnya, apa sih yang membuat Java sebegitu populernya dikalangan programmer. Berikut beberapa kelebihannya." },
    {
      type: "list",
      items: [
        { title: "", text: "Berorientasi Objek" },
      ],
    },
    { type: "paragraph", text: "Pemrograman berorientasi objek merupakan metode yang merepresentasikan objek dunia nyata ke dalam digital dalam bentuk data. Pemodelan ini memberikan banyak manfaat seperti proses proses pengembangan yang mudah, cepat, fleksibel, dan lebih baik. Java bisa dimasukkan sebagai bahasa awal yang berorientasi objek. Banyak setelah Java bermunculan bahasa-bahasa baru yang mengadopsi ini." },
    {
      type: "list",
      items: [
        { title: "", text: "Multi Platform" },
      ],
    },
    { type: "paragraph", text: "Seperti yang dikatakan diatas, Java bisa berjalan di banyak platform seperti Linux, Windows, Apple, dan Android. Karena hal inilah, banyak framework muncul untuk memudahkan proses pengembangan program." },
    {
      type: "list",
      items: [
        { title: "", text: "Komunitas yang Besar" },
      ],
    },
    { type: "paragraph", text: "Java merupakan bahasa pemrograman yang tergolong tua sehingga komunitasnya sudah besar. Komunitas yang besar membantu kita banyak hal seperti tempat bertanya saat menemui error, belajar dari para ahli, dan lain sebagainya. Kita tidak kesulitan lagi saat ingin mendalami Java." },
    {
      type: "list",
      items: [
        { title: "", text: "Library yang Lengkap" },
      ],
    },
    { type: "paragraph", text: "Tidak semua kebutuhan bisa kita selesaikan sendiri saat pembuatan program. Oleh karena itu, kita butuh bantuan dari orang lain dalam bentuk library. Library merupakan kumpulan kode program yang dibuat oleh orang lain untuk membantu kita saat coding. Dengan lengkap dan berlimpahnya library pada Java, programmer tidak kesulitan lagi dalam pengembangan program." },
    { type: "heading", text: "Kekurangan" },
    { type: "paragraph", text: "Selain kelebihan, Java juga memiliki kekurangan sebagai berikut." },
    {
      type: "list",
      items: [
        { title: "", text: "Penggunaan Memori yang Terlalu Banyak" },
      ],
    },
    { type: "paragraph", text: "Dalam satu project Java, terkadang banyak library yang perlu dimasukkan sehingga akan membuat ukuran file menjadi besar. Tidak hanya itu, saat proses running, Java akan meng-compile library-library yang ada sehingga akan memakan memori dan juga waktu yang besar." },
    {
      type: "list",
      items: [
        { title: "", text: "Dekompilasi yang Mudah" },
      ],
    },
    { type: "paragraph", text: "Proses kompilasi Java menghasilkan sebuah binary file. Akan tetapi, binary file ini mudah dilihat dan dibaca sehingga memungkinkan didekompilasi menjadi kode sumber. Hal ini tentu berbahaya bagi program kita apalagi jika memuat informasi penting." },
    {
      type: "list",
      items: [
        { title: "", text: "Tampilan GUI yang kurang Menarik" },
      ],
    },
    { type: "paragraph", text: "GUI merupakan singkatan dari Graphical User Interface yang berarti tampilan yang berinteraksi dan dilihat langsung oleh pengguna. Jika kita membuat tampilan software seperti Desktop, maka akan sulit untuk membuat tampilan yang menarik dengan Java." },
    { type: "paragraph", text: "Demikian beberapa hal mengenai bahasa pemrograman Java. Semoga bermanfaat dan terima kasih sudah menyempatkan membaca artikel saya😀. Apabila ada kesalahan di artikel ini, bisa dikoreksi melalui komentar atau menghubungi saya. Sekian…" },
    { type: "heading", text: "Referensi" },
    {
      type: "links",
      items: [
        { label: "https://herusulistiono.gitbook.io/java", href: "https://herusulistiono.gitbook.io/java" },
        { label: "https://www.niagahoster.co.id/blog/java-adalah/?amp", href: "https://www.niagahoster.co.id/blog/java-adalah/?amp=" },
        { label: "https://glints.com/id/lowongan/bahasa-pemrograman-java/#.YaIy-7oxU2w", href: "https://glints.com/id/lowongan/bahasa-pemrograman-java/#.YaIy-7oxU2w" },
        { label: "https://badoystudio.com/pemrograman-berorientasi-objek/", href: "https://badoystudio.com/pemrograman-berorientasi-objek/" },
      ],
    },
  ],
};

export default langkahAwalBerkenalanDenganJava;
