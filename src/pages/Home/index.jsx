import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import "aos/dist/aos.css";
import AOS from "aos";
import Modal from "../../components/Modal";

function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <Layout showModal={showModal} setShowModal={setShowModal}>
      <main className="bg-[#191919]">
        <div id="home" className=" px-10 flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-32 relative ">
            <div className="absolute bg-[#FF8025] w-[300px] h-[300px] rounded-full opacity-50 bg-opacity-30 blur-2xl top-5 z-0 -left-5" />
            <div className="absolute bg-[#EE2F37] w-[300px] h-[300px] rounded-full bg-opacity-30 blur-2xl bottom-5 z-0 right-5" />
            <div className="flex lg:hidden justify-center overflow-hidden relative ">
              <div className=" lg:h-[400px] lg:w-[400px] pb-10">
                <img
                  src="assets/person/image1.png"
                  alt=""
                  className=" h-full w-full lg:scale-125 object-cover "
                />
              </div>
            </div>
            <div className="flex items-center z-999 relative">
              <div className="">
                <h2 className="text-white text-2xl">EAST JAVA</h2>
                <h2 className="bg-gradient-to-r from-[#EE2F37] to-[#FF8025] inline-block text-transparent bg-clip-text text-5xl font-extrabold ">
                  STUDENT LEADER
                </h2>
                <h2 className="text-white text-2xl">SUMMIT</h2>
                <div className="py-10 text-white">
                  <p>
                    East Java Student Leader Summit adalah sebuah program unik
                    yang mengumpulkan 600 pelajar dari seluruh Jawa Timur,
                    dengan tujuan memberikan mereka pelatihan untuk meningkatkan
                    rasa percaya diri, keterampilan kepemimpinan, serta menjalin
                    ikatan kekeluargaan yang erat. Acara ini juga menjadi
                    platform yang sempurna bagi mereka untuk saling berbagi
                    pengalaman, sehingga mereka bisa siap menghadapi perubahan
                    zaman dengan  bijak.
                  </p>
                </div>
                <div>
                  <Link
                    to={
                      "https://www.loket.com/event/east-java-student-leader-summit_Iibc"
                    }
                  >
                    <button
                      // onClick={() => setShowModal(!showModal)}
                      className="btn border-none text-white bg-gradient-to-r from-[#EE2F37] to-[#FF8025]"
                    >
                      Daftar sekarang
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center overflow-hidden relative z-999">
              <div className="lg:h-[400px] ">
                <img
                  src="assets/person/image1.png"
                  alt=""
                  className="h-full scale-125"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" py-20">
          <div className=" bg-gray-50 bg-opacity-5 backdrop-blur-lg py-10">
            <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3">
              <div className="flex flex-col items-center text-white">
                <h2 className="text-2xl font-extrabold">600+</h2>
                <p>Pendaftar</p>
              </div>
              <div className="flex flex-col items-center text-white">
                <h2 className="text-2xl font-extrabold">1000+</h2>
                <p>Osis Jawa Timur</p>
              </div>
              <div className="flex flex-col items-center text-white">
                <h2 className="text-2xl font-extrabold">1500+</h2>
                <p>Pelajar cerdas</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="px-10 py-20  relative">
          <div className="absolute bg-[#FF8025] w-[100px] h-[100px] rounded-full opacity-50 bg-opacity-30 blur-2xl top-22 z-0 left-24" />
          <div className="absolute bg-[#EE2F37] w-[300px] h-[300px] rounded-full bg-opacity-30 blur-2xl bottom-5 z-0 right-5" />
          <div className="absolute bg-white w-[200px] h-[200px] rounded-full bg-opacity-10 blur-2xl bottom-5 z-0 right-5" />
          <div className="flex justify-center py-20">
            <h1 className="text-white font-bold text-2xl">
              East Java Student Leader Summit
            </h1>
          </div>

          <div className="flex justify-center relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
              <div
                className="border border-[#FF8025] p-4 lg:w-[400px] rounded-lg"
                data-aos="fade-right"
                // data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="900"
              >
                <div className="text-white">
                  <h2 className="font-bold text-xl text-center py-4">
                    Bentuk Kegiatan
                  </h2>
                  <ul className="list-disc pl-4">
                    <li>Grand Opening</li>
                    <li>Seminar</li>
                    <li>Campus Tour dan Trial Class</li>
                    <li>Mini Convert</li>
                    <li>Edufair dan Pemeran Karya</li>
                  </ul>
                </div>
              </div>
              <div
                className="border border-[#FF8025] p-4 lg:w-[400px] rounded-lg"
                data-aos="fade-left"
                data-aos-duration="900"
              >
                <div className="text-white">
                  <h2 className="font-bold text-xl text-center py-4">
                    BENEFIT KEGIATAN EAST JAVA STUDENT LEADER SUMMIT
                  </h2>
                  <ul className="list-disc pl-4">
                    <li>
                      E-Certificate untuk point nilai seleksi Beasiswa
                      Indonesian Gold Generation Scholarship khusus Jawa Timur.
                    </li>
                    <li>
                      Berkesempatan mendapatkan voucher pin pendaftaran kuliah
                      di Telkom University
                    </li>
                    <li>
                      Ilmu tips & trick seputar karir dari pembicara nasional
                    </li>
                    <li>Snack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 px-10">
          <div className="flex justify-center">
            <div className="lg:h-[500px] lg:w-[900px] overflow-hidden rounded-xl">
              <img
                src="assets/poster/Poster_Web_4.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="  py-20 text-white">
            <p>
              East Java Student Leader Summit adalah sebuah program unik yang
              mengumpulkan pelajar Se-Jawa Timur seperti yang sebelumnya sudah
              dilakukan di Jawa Barat bersama 1.500 pelajar dari seluruh Jawa
              Barat antara Forum OSIS Jawa Barat x Telkom University, kini hadir
              untuk Pelajar Jawa Timur dengan tujuan memberikan mereka pelatihan
              untuk meningkatkan rasa percaya diri, keterampilan kepemimpinan,
              serta menjalin ikatan kekeluargaan yang erat. Acara ini juga
              menjadi platform yang sempurna bagi mereka untuk saling berbagi
              pengalaman, sehingga mereka bisa siap menghadapi perubahan
              zaman dengan bijak.
            </p>{" "}
            <br />
            <p>
              EJSLS mempersembahkan pemateri-pemateri yang sangat inspiratif,
              mereka telah memiliki pengalaman dan pengetahuan yang mendalam di
              dunia pendidikan. Selain itu, acara ini juga menawarkan beragam
              kegiatan menarik, salah satunya adalah mini konser yang menghibur
              dan talkshow inspiratif yang memberikan wawasan berharga. Dengan
              begitu, EJSLS menjadi wadah ideal bagi para pelajar untuk tumbuh
              dan berkembang dalam suasana yang penuh semangat.
            </p>
          </div>
        </div>

        <div className=" md:px-[80px] py-[80px] px-10 relative">
          <div className="absolute bg-[#FF8025] w-[300px] h-[300px] rounded-full opacity-50 bg-opacity-30 blur-2xl top-5 z-0 -left-5" />
          <div className="absolute bg-[#EE2F37] w-[300px] h-[300px] rounded-full bg-opacity-30 blur-2xl bottom-5 z-0 right-5" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 z-50 relative">
            <div className="flex gap-4 justify-center">
              <div className="flex gap-4 md:h-[464px] md:w-[525px] overflow-hidden">
                <div
                  className="h-[200px] w-auto md:h-[384px] md:w-[162px] mt-[80px] rounded-md overflow-hidden"
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  <img
                    src="/assets/foto/image1.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div
                  className="h-[290px] w-auto md:h-[384px] md:w-[162px] rounded-md overflow-hidden "
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="1000"
                >
                  <img
                    src="/assets/foto/image2.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div
                  className="h-[200px] w-auto md:h-[384px] md:w-[162px] mt-[50px] rounded-md overflow-hidden"
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="900"
                >
                  <img
                    src="/assets/foto/image3.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col gap-[24px] text-white">
                <h1 className="font-extrabold text-[32px] md:text-[48px]">
                  Dapatkan Banyak Manfaat, Relasi, dan Pengalaman
                </h1>
                <p>
                  EJSLS mempersembahkan pemateri yang sangat inspiratif, mereka
                  telah memiliki pengalaman dan pengetahuan yang mendalam di
                  dunia pendidikan. Selain itu, acara ini juga menawarkan
                  beragam kegiatan menarik, salah satunya adalah talkshow
                  inspiratif yang memberikan wawasan berharga, campus tour dan
                  Trial Class Telkom University Surabaya. Dengan begitu, EJSLS
                  menjadi wadah ideal bagi para pelajar untuk tumbuh dan
                  berkembang dalam suasana yang penuh semangat
                </p>
              </div>
              <div className="mt-[24px]">
                <Link
                  to={
                    "https://www.loket.com/event/east-java-student-leader-summit_Iibc"
                  }
                >
                  <button
                    //   onClick={() => setShowModal(!showModal)}
                    className="px-[24px] py-[12px] gap-[24px]btn border-none text-white bg-gradient-to-r from-[#EE2F37] to-[#FF8025] rounded-lg h-auto hover:shadow-[#0284C7] shadow-sm flex justify-between"
                  >
                    <label className="text-white">Ikuti Event</label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 px-10 relative overflow-hidden lg:overflow-visible">
          <div className="absolute bg-[#FF8025] w-[300px] h-[300px] top-[450px] left-[120px] lg:w-[500px] lg:h-[500px] rounded-full  bg-opacity-30 blur-2xl lg:top-[190px] z-0 lg:left-[360px]" />
          <div className="absolute bg-[#EE2F37]  w-[300px] h-[300px] top-[450px] left-[50px] lg:w-[300px] lg:h-[300px] rounded-full  bg-opacity-30 blur-2xl lg:top-[190px] z-0 lg:left-[360px]" />

          <div id="speakers" className="flex justify-center py-20">
            <h1 className="text-white font-bold text-2xl">Featured Speaker</h1>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative ">
                <div className="flex justify-center ">
                  <div className="p-[3px]  lg:p-[2px] bg-gradient-to-r from-[#EE2F37] via-[#FF545E] to-[#FF8025] rounded-lg">
                    <div className=" flex  flex-col gap-2 items-center bg-[#191919] rounded-lg p-5 lg:p-2 relative overflow-hidden ">
                      <div className="absolute bg-[#FF8025] w-[250px] h-[250px] top-[100px] left-[30px] rounded-full  bg-opacity-30 blur-2xl z-0" />
                      <div className="h-[300px]  w-[250px] overflow-hidden rounded-lg relative">
                        <img
                          src="/assets/foto/Highres_Jovial.png"
                          alt=""
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="text-white  w-[250px] text-center">
                        <p>Antonino Infloreska Jovialsra da Lopez</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <div className="p-[3px]  lg:p-[2px] bg-gradient-to-r from-[#EE2F37] via-[#FF545E] to-[#FF8025] rounded-lg">
                    <div className=" flex  flex-col gap-2 items-center bg-[#191919] rounded-lg p-5 lg:p-2 relative ">
                      <div className="absolute bg-[#FF8025] w-[250px] h-[250px] top-[100px] left-[30px] rounded-full  bg-opacity-30 blur-2xl z-0" />

                      <div className="h-[300px] w-[250px] overflow-hidden rounded-lg relative">
                        <img
                          src="/assets/foto/siluet2.png"
                          alt=""
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="text-white w-[250px] text-center">
                        {/* <p>Nadhif Basalamah</p> */}
                        <p>???</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 px-10  relative ">
          <div className="absolute bg-[#FF8025] w-[200px] h-[200px] rounded-full bg-opacity-30 blur-2xl bottom-10 z-0 right-24" />

          <div id="ketentuan" className="flex justify-center py-20">
            <h1 className="text-white font-bold text-2xl">
              Syarat dan ketentuan
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
            <div className="flex justify-center">
              <div className="lg:h-[450px] lg:w-[380px]">
                <img
                  src="assets/person/image3.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center text-white relative">
              <ul className="list-decimal">
                <li>
                  Wajib follow media sosial Instagram <br />
                  <Link to={"https://www.instagram.com/medpel.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} className="hover:text-[#FF8025] cursor-pointer">(@medpel.id)</Link> <br />
                 <Link to={"https://www.instagram.com/iggscholarship?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} className="hover:text-[#FF8025]">(@iggscholarship)</Link> <br />
                  <Link to={"https://www.instagram.com/smbtelkom.surabaya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} className="hover:text-[#FF8025]">(@smbtelkomsurabaya)</Link> <br />
                </li>
                <li>Peserta diwajibkan untuk mengupload twibbon</li>
                <li>Peserta EJSLS 1.0 terbuka untuk Pelajar maupun Umum se-Jawa Timur.</li>
                <li>wajib untuk konfirmasi kehadiran</li>
                <li>Menggunakan PSAS seragam sekolah.</li>
                <li>Peserta tidak di pungut biaya apapun.</li>
                <li>
                  Peserta wajib melakukan pendaftaran tiket melalui link website
                  yang telah di sediakan
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" bg-gray-50 backdrop-blur-md bg-opacity-10 py-20 relative ">
          <div className="absolute bg-[#EE2F37] w-[100px] h-[100px] rounded-full opacity-50 bg-opacity-30 blur-2xl top-28 z-0 left-5" />
          <div className="absolute bg-[#EE2F37] w-[200px] h-[200px] rounded-full bg-opacity-30 blur-2xl bottom-10 z-0 right-80" />
          <div className="flex justify-center py-10">
            <h1 className="text-white font-bold text-center text-2xl">
            Testimoni West Java Student Leader Summit
            </h1>
          </div>

          <div className="flex justify-center ">
            <div className="w-[350px] lg:w-[1100px] flex justify-center overflow-hidden overflow-x-auto hide-scrollbar">
              <Carousel />
            </div>
          </div>
        </div>

        <div id="faq" className="py-20 px-10  ">
          <div className="py-10 ">
            <h1 className="text-white font-bold text-2xl">
              Frequently asked questions
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Manfaat/Benefit EJSL
              </div>
              <div className="collapse-content">
                <ul className="list-disc pl-4">
                  <li>
                    E-Certificate untuk point nilai seleksi Beasiswa Indonesian
                    Gold Generation Scholarship khusus Jawa Timur.
                  </li>
                  <li>
                    Berkesempatan mendapatkan voucher pin pendaftaran kuliah di
                    Telkom University
                  </li>
                  <li>
                    Ilmu tips & trick seputar karir dari pembicara nasional
                  </li>
                  <li>Goodiebag Merchandise</li>
                  <li>Snack</li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Cara beli tiket EJSL
              </div>
              <div className="collapse-content">
                <p>
                  Silahkan klik daftar yang ada di navbar atau klik daftar
                  sekarang yang ada di tampilan awal
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Ketentuan pakian
              </div>
              <div className="collapse-content">
                <ul className="list-disc">
                  <li>Menggunakan PSAS seragam sekolah</li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Lokasi acaranya dimana?
              </div>
              <div className="collapse-content">
                <p> Telkom University Surabaya</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Closing pendaftaran kapan min?
              </div>
              <div className="collapse-content">
                <p>
                  Pendaftaran dapat sewaktu-waktu ditutup jika telah memenuhi
                  kuota.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                HTM nya berapa min?
              </div>
              <div className="collapse-content">
                <p>Free</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
