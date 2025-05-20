export default function ArtikelDetail() {
  return (
    <div className="article-container">
      <h1 className="article-title">Halo Selamat datang di Artikel</h1>
      <p className="article-intro">Anda mencari artikel menarik?</p>
      <JudulArtikel />
      <img className="article-image" src="img/1.jpg" alt="logo" />
      <Isi />
      <KataMotivasi />
    </div>
  );
}
function JudulArtikel() {
  return (
    <div className="judul-artikel">
      <h2>Joel Purba sang Petinju</h2>
      <p>
        <strong>Oleh Hadin</strong>
      </p>
    </div>
  );
}

function Biografi(props) {
  return (
    <div>
      <hr />
      <h3>Nama: {props.nama}</h3>
      <p>NIM: {props.nim}</p>
      <p>Tanggal: {props.tanggal}</p>
    </div>
  );
}

function Isi() {
  <small className="article-content">
    Joel Purba, seorang pria muda yang penuh semangat dan berjiwa petualang,
    telah menempuh perjalanan yang tidak biasa. Sejak kecil, ia selalu terpesona
    oleh teknologi dan cara dunia digital mengubah segala hal. Meskipun berasal
    dari keluarga yang sederhana di sebuah kota kecil, Joel tidak pernah
    menyerah pada impian-impian besar yang selalu ia simpan di dalam hatinya.
    Bermula dari hobi bermain game, Joel akhirnya menemukan dunia pengembangan
    perangkat lunak. Ia belajar secara otodidak melalui tutorial di internet,
    forum diskusi, dan video YouTube. Meskipun tidak punya banyak sumber daya,
    Joel memanfaatkan semua waktu luangnya untuk mempelajari coding dan
    pengembangan web. Saat banyak teman-temannya lebih memilih jalan biasa,
    seperti kuliah atau bekerja di perusahaan lokal, Joel memilih jalan yang
    penuh tantangan. Suatu hari, setelah bertahun-tahun belajar dan mencoba
    berbagai proyek sampingan, Joel berhasil membangun aplikasi pertama yang
    sukses—sebuah aplikasi manajemen waktu yang membuat hidup orang-orang
    menjadi lebih teratur. Aplikasi tersebut mulai mendapatkan perhatian banyak
    orang dan menjadi sangat populer di kalangan profesional muda yang sibuk.
    Namun, popularitas itu tidak membuat Joel berhenti. Ia tahu bahwa perjalanan
    ini baru saja dimulai. Dengan ketekunan dan semangatnya yang tak kenal
    lelah, ia memutuskan untuk mendirikan sebuah perusahaan rintisan (startup)
    bersama beberapa temannya. Mereka mengembangkan solusi perangkat lunak yang
    membantu bisnis kecil dan menengah mengelola keuangan mereka dengan lebih
    efisien. Bisnis ini tidak hanya mengubah hidup mereka, tetapi juga membuka
    pintu bagi banyak orang yang berjuang untuk menjaga keuangan mereka tetap
    teratur. Di balik kesuksesan ini, ada banyak tantangan yang harus Joel
    hadapi. Ada saat-saat di mana ia merasa lelah, bahkan hampir menyerah.
    Namun, apa yang selalu membuatnya bangkit adalah kenyataan bahwa ia memiliki
    tujuan yang lebih besar: membantu orang lain melalui teknologi. Joel tidak
    hanya berfokus pada keuntungan, tetapi juga pada dampak sosial yang bisa
    diberikan oleh teknologi yang ia kembangkan.
  </small>;
}

function KataMotivasi() {
  const text = "Diam Seperti Mio";
  const text2 = "Bergerak Seperti Petinju ";
  return (
    <div className="motivational-quotes">
      <hr />
      <p>{text.toLowerCase()}</p>
      <p>{text2.toUpperCase()}</p>
    </div>
  );
}
