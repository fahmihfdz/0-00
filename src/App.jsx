import dataImage from "./data";
import { listTarot } from "./data";
import { listProyek } from "./data";

function App() {
  return (
    <>
    {/* void */}
      <div className="void grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-3 rounded-2xl">
            <img
              src={dataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"loading="lazy"
            />
            <q>seorang manusia yang kebetulan hidup</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">
            Ruang Belajar Yang Sunyi
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Manusia dilahirkan tanpa petunjuk, dibekali waktu yang tidak bisa
            diulang, dan harus kehilangan, tanpa pernah benar-benar tahu mengapa
            semua itu harus terjadi berulang. Mungkin hidup hanyalah jeda pendek
            di antara dua kekosongan: sebelum dan sesudah kita ada.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-transparent text-amber-600 border border-amber-600 hover:bg-amber-600 hover:text-white px-4 py-2 rounded-md transition"
            >
              Download <i className="ri-download-line"></i>
            </a>
            <a
              href="#"
              className="bg-amber-600 text-white hover:bg-transparent hover:text-amber-600 border border-amber-600 px-4 py-2 rounded-md transition"
            >
              Lihat <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
        <img
          src={dataImage.HeroImage}
          alt="Hero Img"
          className="w-[450px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s" loading="lazy" 
        />
      </div>
    {/* void */}

      {/* senandika */}
      <div className="senandika mt-32 py-10" id="senandika">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration= "1000">
          <img src={dataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:hidden block" loading="lazy"/>
          <p className="text-base/loose mb-10">
            Saat segalanya kembali ke nol, di situlah aku mendengar diriku yang
            paling jelas. Fragmen Diri bukan tentang siapa aku sepenuhnya, tapi
            tentang potongan-potongan kecil yang pernah jatuh, atau sengaja
            kusimpan.Karena pada akhirnya, kita semua hanya teka-teki yang ingin
            diselesaikan, meski belum selesai sepenuhnya.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={dataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden" loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div className="">
                <h1 className="text-4xl mb-1">
                  13 <span className="text-amber-600">≈</span>
                </h1>
                <p>Satu ruang </p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1 <span className="text-amber-600">≈</span>
                </h1>
                <p>Ribuan Makna</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tarot mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration= "1000">Arkana Jiwa & Kata</h1>
          <p className="lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/normal opacity-50" data-aos="fade-up" data-aos-duration= "1000" data-aos-delay= "300">Sebuah seni untuk merenungi perjalanan hidup bukan melalui kepastian, tapi lewat rasa, tafsir, dan imajinasi, mereka hadir bukan sebagai jawaban.</p>
          <div className="tarot-box mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {/* loop tarot */}
            {listTarot.map(tarot => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tarot.id} data-aos="fade-up" data-aos-duration= "1000" data-aos-delay={tarot.dad}>
              <img src={tarot.gambar} alt="Tarot Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
              <div>
                <h4 className="font-bold">{tarot.nama}</h4>
                <p className="opacity-50">{tarot.ket}</p>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
      {/* senandika */}

      {/* ekspresi */}
      <div className="ekspressi mt-32 py-10" id="ekspresi">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration= "1000">Jejak Tanpa Peta</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration= "1000" data-aos-delay="300">Di ruang ini, kata-kata bebas tumbuh tanpa peta. Ia bukan sekadar untaian huruf, melainkan cermin dari gejolak batin, lintasan sunyi, dan bisikan jiwa yang enggan dibungkam.</p>
        <div className="ekspressi-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            
            {/* loop ekspresi */}
            {listProyek.map(proyek => (
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration= "1000" data-aos-delay={proyek.dad}>
                <img src={proyek.gambar} alt="proyek img" className="" loading="lazy"/>
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 opacity-70">
                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-500 rounded-md font-semibold" key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a className="bg-transparent border border-amber-600 text-amber-600 p-2 rounded-lg block hover:bg-amber-600 hover:text-white transition" href="#">{proyek.btn}</a>
                  </div>
                </div>
              </div>
            ))}

        </div>
      </div>
      {/* ekspresi */}

      {/* ruang */}
      <div className="ruang mt-32 sm:p-10 p-0" id="ruang">
        <h1 className="text-4xl font-bold text-center mb-2" data-aos="fade-up" data-aos-duration= "1000">Ruang Interaksi</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration= "1000" data-aos-delay="300">Hubungi Saya</p>
        <form action="https://formsubmit.co/fahmihfdzb@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration= "1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Legkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="bisik" className="font-semibold">Bisik</label>
              <textarea name="pesan" id="bisik" cols="45" rows="7" placeholder="Biarkan Terdengar..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-amber-600 text-white p-2 rounded-lg hover:bg-amber-700 transition cursor-pointer w-full">Tinggalkan</button>
            </div>
          </div>
        </form>
      </div>
      {/* ruang */}
    </>
  );
}

export default App;
