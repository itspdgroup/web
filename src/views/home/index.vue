<script setup>
import "./../../../public/css/swiper-bundle.min.css";
import "./../../../public/js/swiper-bundle.min.js";

import icon from "./../../../public/img/logo/icon.png";
import font_hitam from "./../../../public/font/font-hitam.png";
import font_putih from "./../../../public/font/font-putih.png";
import service1 from "./../../../public/img/assets/service1.jpg";
import service2 from "./../../../public/img/assets/service2.jpg";
import service3 from "./../../../public/img/assets/service3.jpg";
import service4 from "./../../../public/img/assets/service4.jpg";
import image from "./../../../public/img/assets/image1.jpg";
import image2 from "./../../../public/img/assets/dua.jpg";
import image3 from "./../../../public/img/assets/image3.jpg";
import image4 from "./../../../public/img/assets/empat.jpg";
import gedung from "./../../../public/img/assets/gedung.jpg";
import portofolio from "./../../../public/img/assets/portofolio.jpg";
import logo_spd from "./../../../public/img/logo/spd.png";
import logo_ssi from "./../../../public/img/logo/ssi.png";
import logo_aii from "./../../../public/img/logo/aii.png";
import logo_swatt from "./../../../public/img/logo/swatt.png";
import logo_pusdiklat from "./../../../public/img/logo/pusdiklat.png";
import logo_pusdiklat_swatt from "./../../../public/img/logo/pusdiklat_swatt.png";

import client1 from "./../../../public/img/client/sakura.png";
import client2 from "./../../../public/img/client/siemens.png";
import client3 from "./../../../public/img/client/siemens_energi.png";
import client4 from "./../../../public/img/client/ccm.png";
import client5 from "./../../../public/img/client/jugleland.jpeg";
import client6 from "./../../../public/img/client/logoSentulKecil.png";
import client7 from "./../../../public/img/client/Pearl-Garden-Logo.png";
import client8 from "./../../../public/img/client/pakuwon.png";

import { onMounted } from "vue";
// import Swiper from "swiper";

onMounted(() => {
  new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      waitForTransition: true,
      enabled: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
});
</script>

<template>
  <navbarapp></navbarapp>
  <div class="test">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="box-shadow d-flex justify-content-center align-items-center px-4"
          >
            <div class="isi-kotak container col-md-6 text-center">
              <h1 class="text-white">LOYAL HANDAL MELAYANI PROFESIONAL DAN BERTANGGUNG JAWAB</h1>
              <div class="mt-4">
                <a
                  href=""
                  class="btn btn-light rounded-2"
                  style="margin-right: 20px; width: 8rem; color: red"
                  >JOIN US</a
                >
                <a
                  href=""
                  style="width: 8rem; background-color: red"
                  class="btn btn-danger rounded-2"
                  >OUR SERVICE</a
                >
              </div>
            </div>
          </div>
          <img :src="image" class="img-carousel" alt="satu" />
        </div>
        <div class="carousel-item">
          <div
            class="box-shadow d-flex justify-content-center align-items-center px-4"
          >
            <div class="isi-kotak container col-lg-6 text-center">
              <h1 class="text-white mb-4">PROFESIONAL DAN BERTANGGUNG JAWAB</h1>
              <p class="text-white">
                Kami adalah tim profesional yang bertanggung jawab, berkomitmen
                untuk memberikan layanan berkualitas tinggi dengan integritas
                yang tak tergoyahkan.
              </p>
            </div>
          </div>
          <img :src="image2" class="img-carousel" alt="dua" />
        </div>
        <div class="carousel-item">
          <div
            class="box-shadow d-flex justify-content-center align-items-center px-4"
          >
            <div class="isi-kotak container col-lg-6 text-center">
              <h1 class="text-white mb-4">SOLUSI KEAMANAN ANDA</h1>
              <p class="text-white">
                Menghadirkan pengawasan yang ketat, dan respon tanggap untuk
                menjaga keamanan Anda selalu terjaga.
              </p>
            </div>
          </div>
          <img :src="image3" class="img-carousel" alt="tiga" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <!-- Card SPD GROPU -->
  <div class="container">
    <div class="d-flex justify-content-center mb-4">
      <div class="col-lg-6">
        <h1 class="judul">
          <span style="font-size: 33px; font-weight: 100"
            >SELAMAT DATANG DI
          </span>
          <br />
          <img
            :src="font_hitam"
            alt="spd-font"
            height="38rem"
            style="margin-top: -1rem"
          />
        </h1>
        <div class="border-judul"></div>
        <p class="text-judul">
          Kami adalah Perusahaan BUJP, sebuah entitas yang berdedikasi dalam
          menyediakan solusi keamanan yang inovatif dan andal.
        </p>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="col-md-4 d-flex justify-content-center mb-4">
        <div class="card rounded-2 p-3 bg-logo border border-opacity-10">
          <div style="position: absolute; bottom: 0; right: 0">
            <a href="#">
              <i
                style="color: red"
                class="fa-solid fa-arrow-right fa-sm p-3"
              ></i>
            </a>
          </div>
          <div class="card-body text-center">
            <div class="d-flex justify-content-center" style="width: 100%">
              <div class="cover-img-logo">
                <img :src="logo_spd" alt="logo_spd" class="img-logo" />
              </div>
            </div>
            <h5 class="card-subtitle mt-3 mb-2 text-body-secondary">
              Security Phisik Dinamika
            </h5>
            <p class="text-logo m-0">
              Merupakan usaha jasa pengamanan dan penyelamatan yang telah
              beroprasi sejak tahun 1998.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-center mb-4">
        <div class="card rounded-2 p-3 bg-logo border border-opacity-10">
          <div style="position: absolute; bottom: 0; right: 0">
            <a href="#">
              <i
                style="color: red"
                class="fa-solid fa-arrow-right fa-sm p-3"
              ></i>
            </a>
          </div>
          <div class="card-body text-center">
            <div class="d-flex justify-content-center" style="width: 100%">
              <div class="cover-img-logo">
                <img :src="logo_swatt" alt="logo_spd" class="img-logo" />
              </div>
            </div>
            <h5 class="card-subtitle mt-3 mb-2 text-body-secondary">
              Setia Waspada Tanggap & Tangguh
            </h5>
            <p class="text-logo m-0">
              Merupakan usaha jasa pengamanan dan penyelamatan yang telah
              beroprasi sejak tahun 1998.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-center mb-4">
        <div class="card rounded-2 p-3 bg-logo border border-opacity-10">
          <div style="position: absolute; bottom: 0; right: 0">
            <a href="#">
              <i
                style="color: red"
                class="fa-solid fa-arrow-right fa-sm p-3"
              ></i>
            </a>
          </div>
          <div class="card-body text-center">
            <div class="d-flex justify-content-center" style="width: 100%">
              <div class="cover-img-logo">
                <img :src="logo_ssi" alt="logo_spd" class="img-logo" />
              </div>
            </div>
            <h5 class="card-subtitle mt-3 mb-2 text-body-secondary">
              Security Sipil Indonesia
            </h5>
            <p class="text-logo m-0">
              Merupakan usaha jasa pengamanan dan penyelamatan yang telah
              beroprasi sejak tahun 1998.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-center mb-4">
        <div class="card rounded-2 p-3 bg-logo border border-opacity-10">
          <div style="position: absolute; bottom: 0; right: 0">
            <a href="#">
              <i
                style="color: red"
                class="fa-solid fa-arrow-right fa-sm p-3"
              ></i>
            </a>
          </div>
          <div class="card-body text-center">
            <div class="d-flex justify-content-center" style="width: 100%">
              <div class="cover-img-logo">
                <img :src="logo_aii" alt="logo_spd" class="img-logo" />
              </div>
            </div>
            <h5 class="card-subtitle mt-3 mb-2 text-body-secondary">
              Acsetama Insan Indonesia
            </h5>
            <p class="text-logo m-0">
              Merupakan usaha jasa pengamanan dan penyelamatan yang telah
              beroprasi sejak tahun 1998.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-center mb-4">
        <div class="card rounded-2 p-3 bg-logo border border-opacity-10">
          <div style="position: absolute; bottom: 0; right: 0">
            <a href="#">
              <i
                style="color: red"
                class="fa-solid fa-arrow-right fa-sm p-3"
              ></i>
            </a>
          </div>
          <div class="card-body text-center">
            <div class="d-flex justify-content-center" style="width: 100%">
              <div class="cover-img-logo">
                <img :src="logo_pusdiklat" alt="logo_spd" class="img-logo" />
              </div>
            </div>
            <h5 class="card-subtitle mt-3 mb-2 text-body-secondary">
              Pusdiklat SPD
            </h5>
            <p class="text-logo m-0">
              Merupakan usaha jasa pengamanan dan penyelamatan yang telah
              beroprasi sejak tahun 1998.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-center mb-4">
        <div class="card rounded-2 p-3 bg-logo border border-opacity-10">
          <div style="position: absolute; bottom: 0; right: 0">
            <a href="#">
              <i
                style="color: red"
                class="fa-solid fa-arrow-right fa-sm p-3"
              ></i>
            </a>
          </div>
          <div class="card-body text-center">
            <div class="d-flex justify-content-center" style="width: 100%">
              <div class="cover-img-logo">
                <img
                  :src="logo_pusdiklat_swatt"
                  alt="logo_spd"
                  class="img-logo"
                />
              </div>
            </div>
            <h5 class="card-subtitle mt-3 mb-2 text-body-secondary">
              Pusdiklat SWATT
            </h5>
            <p class="text-logo m-0">
              Merupakan usaha jasa pengamanan dan penyelamatan yang telah
              beroprasi sejak tahun 1998.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- About Me -->
  <div class="konten-2 mt-5">
    <div class="row m-0 p-0">
      <div class="col-md-6 py-5">
        <div class="container-hp">
          <div>
            <h2>ABOUT US</h2>
            <div class="border-judul-2"></div>
            <p>
              Berawal dari Close Personal Protection (CPP), kini Panglima Ali
              telah menyulap PT SPD menjadi SPD Group yang memiliki beberapa
              anak perusahaan di antaranya PT Security Phisik Dinamika (SPD), PT
              Security Waspada Tanggap dan Tangguh (SWATT) dan PT Security Sipil
              Indonesia (SS1). Di bawah payung SPD Group inilah telah lahir
              ribuan security handal dan profesional.
            </p>
            <div class="mt-4">
              <div class="row">
                <div class="col-md-6 mt-4">
                  <div class="row">
                    <div class="col-2">
                      <i class="fa-solid fa-award fa-2x" style="color: red"></i>
                    </div>
                    <div class="col-9">
                      <h5>PENGHARGAAN</h5>
                      <p>
                        Perusahaan kami bangga dengan banyaknya penghargaan yang
                        kami raih dalam industri.
                        <a href="#" style="color: red; text-decoration: none"
                          >Selengkapnya
                          <i class="fa-solid fa-arrow-right fa-xs"></i
                        ></a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mt-4">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fa-solid fa-user-shield fa-xl"
                        style="color: red"
                      ></i>
                    </div>
                    <div class="col-9">
                      <h5>TIM AHLI</h5>
                      <p>
                        Bertekad melayani pengguna jasa kami secara profesional
                        dan berkesinambungan.
                        <a href="#" style="color: red; text-decoration: none"
                          >Selengkapnya
                          <i class="fa-solid fa-arrow-right fa-xs"></i
                        ></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 m-0 p-0">
        <img :src="gedung" alt="" class="gedung" />
      </div>
    </div>

    <div class="container pb-5">
      <div
        class="row flex-lg-row-reverse mt-5 pb-4"
        style="margin: 0; padding: 0; width: 100%; height: 100%"
      >
        <div class="col-md-6">
          <div class="container">
            <h2 class="mt-3">WHY SPD GROUP</h2>
            <div class="border-judul-2"></div>
            <div class="d-flex">
              <div style="margin: 10px 20px 0 0; width: 25px">
                <i
                  class="fa-solid fa-building-shield fa-xl"
                  style="color: red"
                ></i>
              </div>
              <div>
                <p>
                  Telah berdiri selama 25 tahun lebih dengan sertifikat resmi
                  dari Kepolisian dan Asosiasi BUJP.
                </p>
              </div>
            </div>
            <div class="d-flex">
              <div style="margin: 10px 20px 0 0; width: 25px">
                <i class="fa-solid fa-warehouse fa-xl" style="color: red"></i>
              </div>
              <div>
                <p>
                  Memilik PUSDIKLAT dengan sarana prasarana lengkap yang
                  menunjang kompetensi satpam/security.
                </p>
              </div>
            </div>
            <div class="d-flex">
              <div style="margin: 10px 20px 0 0; width: 25px">
                <i class="fa-solid fa-user-shield fa-xl" style="color: red"></i>
              </div>
              <div>
                <p>
                  pelatih berpengalaman dan bersertifikat di bidang BUJP dengan
                  ribuan anggota aktif.
                </p>
              </div>
            </div>
            <div class="d-flex">
              <div style="margin: 10px 20px 0 0; width: 25px">
                <i
                  class="fa-solid fa-walkie-talkie fa-xl"
                  style="color: red"
                ></i>
              </div>
              <div>
                <p>
                  Peralatan komunikasi antar anggota dan wilayah menggunakan
                  teknologi canggih dan modern seperti HT dengan teknologi POC.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 mt-4 mb-4 d-flex justify-content-center align-items-center"
        >
          <iframe
            class="rounded-2"
            width="90%"
            height="90%"
            src="https://www.youtube.com/embed/EcBqBUjt5Ew"
            title="SPD on Program Soci@lite"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <!-- Konten 3 -->
  <div class="konten-3">
    <div class="container">
      <div class="row m-0 pt-5 pb-5">
        <div class="col-md-7">
          <div class="text-k3">
            <div>
              <img
                :src="font_putih"
                alt="font-spd"
                height="38px"
                style="margin-left: -5px"
              />
            </div>
            <h3
              class="text-white mt-3"
              style="font-weight: 100; font-size: 25px; line-height: 40px"
            >
              LOYAL HANDAL MELAYANI PROFESIONAL DAN BERTANGGUNG JAWAB
            </h3>
          </div>
        </div>
        <div class="col-md-5 d-flex justify-content-center align-items-center">
          <div>
            <a href="" class="text-white m-2 m-md-4">
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
            <a href="" class="text-white m-2 m-md-4">
              <i class="fa-brands fa-youtube fa-xl"></i>
            </a>
            <a href="" class="text-white m-2 m-md-4">
              <i class="fa-brands fa-facebook fa-xl"></i>
            </a>
            <a href="" class="text-white m-2 m-md-4">
              <i class="fa-brands fa-x-twitter fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Our Service -->
  <div class="konten-2 pb-5">
    <!-- Judul -->
    <div class="container">
      <div class="d-flex justify-content-center mb-2">
        <div class="col-lg-6">
          <h2 class="judul-2">OUR SERVICE</h2>
          <div class="border-judul"></div>
        </div>
      </div>
    </div>
    <!-- Isi Konten -->
    <div class="container body">
      <div class="slide-container swiper">
        <div class="slide-content">
          <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide rounded-2">
              <img :src="service1" class="card-img-top" alt="portofolio" />
              <div class="card-body text-center">
                <h5 class="card-title mb-3">Physical Service</h5>
                <p class="card-text mb-3">
                  PT Security Phisik Dinamika merupakan jasa pengamanan dan
                  penyelamatan yang telah memiliki izin usaha operasional resmi.
                </p>
                <a href="#" class="btn btn-danger btn-sm mb-3">Selengkapnya</a>
              </div>
            </div>
            <div class="card swiper-slide rounded-2">
              <img :src="service2" class="card-img-top" alt="portofolio" />
              <div class="card-body text-center">
                <h5 class="card-title mb-3">Close Personal Protection</h5>
                <p class="card-text mb-3">
                  SPD Group di tahun 2011 telah memulai Diklatsus (Pendidikan
                  Latihan Khusus) Executif Protection
                </p>
                <a href="#" class="btn btn-danger btn-sm mb-3">Selengkapnya</a>
              </div>
            </div>
            <div class="card swiper-slide rounded-2">
              <img :src="service3" class="card-img-top" alt="portofolio" />
              <div class="card-body text-center">
                <h5 class="card-title mb-3">Security Investigation</h5>
                <p class="card-text mb-3">
                  PT Security Phisik Dinamika merupakan jasa pengamanan dan
                  penyelamatan yang telah memiliki izin usaha operasional resmi.
                </p>
                <a href="#" class="btn btn-danger btn-sm mb-3">Selengkapnya</a>
              </div>
            </div>
            <div class="card swiper-slide rounded-2">
              <img :src="service4" class="card-img-top" alt="portofolio" />
              <div class="card-body text-center">
                <h5 class="card-title mb-3">Training & Education Service</h5>
                <p class="card-text mb-3">
                  Pusat Pendidikan dan Pelatihan SPD merupakan salah satu
                  lembaga pendidikan di bawah naungan SPD Group.
                </p>
                <a href="#" class="btn btn-danger btn-sm mb-3">Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-button-next swiper-navBtn"></div>
        <div class="swiper-button-prev swiper-navBtn"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>

  <!-- Product & Service -->
  <div class="konten-4" style="margin-bottom: 5px">
    <div class="container">
      <div class="d-flex justify-content-center mb-5">
        <div class="col-lg-6">
          <h2 class="judul-2">PRODUCT & SYSTEM</h2>
          <div class="border-judul"></div>
        </div>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row m-0 p-0">
        <div class="col-md-4 col-6 mb-5 d-flex justify-content-center">
          <div class="card text-center border-0">
            <div
              class="border rounded-circle d-flex justify-content-center align-items-center bg-product text-white"
              style="width: 7rem; height: 7rem"
            >
              <i class="fa-solid fa-square-parking fa-3x"></i>
            </div>
            <h5 class="mt-2">SPD Parking</h5>
          </div>
        </div>
        <div class="col-md-4 col-6 mb-5 d-flex justify-content-center">
          <div class="card text-center border-0">
            <div
              class="border rounded-circle d-flex justify-content-center align-items-center bg-product text-white"
              style="width: 7rem; height: 7rem"
            >
              <i class="fa-solid fa-hand-sparkles fa-3x"></i>
            </div>
            <h5 class="mt-2">SPD Cleaning</h5>
          </div>
        </div>
        <div class="col-md-4 col-6 mb-5 d-flex justify-content-center">
          <div class="card text-center border-0">
            <div
              class="border rounded-circle d-flex justify-content-center align-items-center bg-product text-white"
              style="width: 7rem; height: 7rem"
            >
              <i class="fa-solid fa-walkie-talkie fa-3x"></i>
            </div>
            <h5 class="mt-2">Handy Talkie</h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Konten 6 -->
  <div class="konten-6">
    <div class="container">
      <div class="row m-0 pt-5 pb-5">
        <div class="col-md-7">
          <div class="text-k3">
            <h3 class="text-white">
              <b>SPD GROUP</b>
            </h3>
            <p class="mt-3 text-white">
              Terus maju dan berkomitmen menjadi bagian dari Aset Bangsa dan
              Negara di dalam mengembangkan Mental Manusia sutuhnya khususnya di
              bidang Industri Jasa Pengamanan
            </p>
          </div>
        </div>
        <div class="col-md-5 d-flex justify-content-center align-items-center">
          <div>
            <div>
              <a href="" class="text-white m-2 m-md-4">
                <i class="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a href="" class="text-white m-2 m-md-4">
                <i class="fa-brands fa-youtube fa-xl"></i>
              </a>
              <a href="" class="text-white m-2 m-md-4">
                <i class="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a href="" class="text-white m-2 m-md-4">
                <i class="fa-brands fa-x-twitter fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- News & Blog -->
  <div class="konten-4" style="margin-bottom: 5px">
    <div class="container">
      <div class="d-flex justify-content-center mb-5">
        <div class="col-lg-6">
          <h2 class="judul-2">NEWS & BLOG</h2>
          <div class="border-judul"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row m-0 p-0">
        <div class="col-md-6 mb-3 d-flex align-items-stretch">
          <div class="rounded-2" style="position: relative">
            <div style="position: absolute; bottom: 10px" class="card-news">
              <div class="container">
                <div class="col-md-8">
                  <div class="card rounded-2">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img :src="image4" class="img-news rounded-1" alt="..." />
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3 rounded-2" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <div style="width: 100%; height: 100%">
                  <img :src="portofolio" class="img-blog rounded-1" alt="..." />
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 rounded-2" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <div style="width: 100%; height: 100%">
                  <img :src="portofolio" class="img-blog rounded-1" alt="..." />
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 rounded-2" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <div style="width: 100%; height: 100%">
                  <img :src="portofolio" class="img-blog rounded-1" alt="..." />
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Our Client -->
  <div class="konten-4" style="margin-bottom: 5px">
    <div class="container">
      <div class="d-flex justify-content-center mb-5">
        <div class="col-lg-6">
          <h2 class="judul-2">OUR CLIENT</h2>
          <div class="border-judul"></div>
        </div>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row m-0 p-0">
        <div class="col-6 col-md-3 mb-4">
          <div class="card border-0" style="height: 8rem">
            <div class="p-2" style="width: 100%; height: 100%;">
              <img style="width: 100%; height: 100%; object-fit: contain; object-position: center center;" :src="client1" alt="">
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card border-0" style="height: 8rem">
            <div class="p-2" style="width: 100%; height: 100%;">
              <img style="width: 100%; height: 100%; object-fit: contain; object-position: center center;" :src="client2" alt="">
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card border-0" style="height: 8rem">
            <div class="p-2" style="width: 100%; height: 100%;">
              <img style="width: 100%; height: 100%; object-fit: contain; object-position: center center;" :src="client3" alt="">
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card border-0" style="height: 8rem">
            <div class="p-2" style="width: 100%; height: 100%;">
              <img style="width: 100%; height: 100%; object-fit: contain; object-position: center center;" :src="client4" alt="">
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card border-0" style="height: 8rem">
            <div class="p-2" style="width: 100%; height: 100%;">
              <img style="width: 100%; height: 100%; object-fit: contain; object-position: center center;" :src="client5" alt="">
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card border-0" style="height: 8rem">
            <div class="p-2" style="width: 100%; height: 100%;">
              <img style="width: 100%; height: 100%; object-fit: contain; object-position: center center;" :src="client6" alt="">
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card border-0" style="height: 8rem">
            <div class="p-2" style="width: 100%; height: 100%;">
              <img style="width: 100%; height: 100%; object-fit: contain; object-position: center center;" :src="client7" alt="">
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <div class="card border-0" style="height: 8rem">
            <div class="p-2" style="width: 100%; height: 100%;">
              <img style="width: 100%; height: 100%; object-fit: contain; object-position: center center;" :src="client8" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Us -->
  <div class="konten-2 mt-5">
    <div class="row m-0 p-0">
      <div class="col-md-6 m-0 p-0">
        <img :src="gedung" alt="" class="img-contact" />
      </div>
      <div class="col-md-6 py-5">
        <div class="container">
          <div class="col-12 col-md-10 m-0 ms-md-3">
            <h2>PROTECT YOUR LOCATION</h2>
            <div class="border-judul-2"></div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Name</label
              >
              <input
                type="text"
                class="form-control mb-3"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
              <label for="exampleFormControlInput1" class="form-label"
                >Phone</label
              >
              <input
                type="email"
                class="form-control mb-3"
                id="exampleFormControlInput1"
                placeholder="( ex : +62834xxxxxxx )"
              />
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control mb-3"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Example textarea</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button
              class="btn btn-danger rounded-1 mt-2"
              style="width: 8rem; background-color: red"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div style="background-color: red; width: 100%">
    <div class="container">
      <div class="row m-0 p-0 pt-4 pt-md-5 text-white">
        <div class="col-md-3 mb-3 d-3lex justify-content-md-center">
          <div class="text-center">
            <img :src="icon" alt="spd-group" width="60%" style="margin: 0" />
            <h3 class="mb-1">SPD GROUP</h3>
            <div class="d-flex justify-content-center">
              <h6 style="font-weight: 100; width: 90%">
                Loyal Handal Melayani Profesional dan Bertanggung Jawab
              </h6>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3 p-3 d-flex justify-content-md-center">
          <div>
            <h5>PUSKOTAMA SPD GROUP</h5>
            <h6 style="font-weight: 100">
              Jl. Margasatwa Barat No. 45 Jagakarsa Cilandak - Jakarta Selatan
            </h6>
            <h6>
              <i class="fa-solid fa-phone" style="margin-right: 10px"></i>
              021 7884 4918
            </h6>
            <h5 class="mt-4">MARKAS KOMANDO SPD</h5>
            <h6 style="font-weight: 100">
              Jl. Bina Marga No. 30 Desa Senja Citerup - Bogor
            </h6>
            <h6>
              <i class="fa-solid fa-phone" style="margin-right: 10px"></i>
              021 7884 4918
            </h6>
          </div>
        </div>
        <div class="col-md-3 mb-3 p-3 d-flex justify-content-md-center">
          <div>
            <h5>QUICK LINK</h5>
            <div class="mb-1">
              <a href="" class="text-white" style="text-decoration: none">
                FAQ
              </a>
            </div>
            <div class="mb-1">
              <a href="" class="text-white" style="text-decoration: none">
                Contact Us
              </a>
            </div>
            <div class="mb-1">
              <a href="" class="text-white" style="text-decoration: none">
                Career
              </a>
            </div>
            <div class="mb-1">
              <a href="" class="text-white" style="text-decoration: none">
                Sitemap
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3 p-3 d-flex justify-content-md-center">
          <div>
            <h5>KEEP IN TOUCH</h5>
            <div class="mb-1">
              <a href="" class="text-white" style="text-decoration: none">
                <i class="fa-brands fa-instagram"></i>
                @korpsspd
              </a>
            </div>
            <div class="mb-1">
              <a href="" class="text-white" style="text-decoration: none">
                <i class="fa-brands fa-youtube"></i>
                SPDTV INDONESIA
              </a>
            </div>
            <div class="mb-1">
              <a href="" class="text-white" style="text-decoration: none">
                <i class="fa-brands fa-facebook"></i>
                SPD GROUP
              </a>
            </div>
            <div class="mb-1">
              <a href="" class="text-white" style="text-decoration: none">
                <i class="fa-brands fa-x-twitter"></i>
                SPD GROUP
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          class="rounded-2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6409475383316!2d106.80970437409759!3d-6.310811061756694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee08d4510147%3A0x9826cdf81c4976ca!2sPUSKOTAMA%20SPD%20GROUP%20(PUSAT%20KOMANDO%20UTAMA)!5e0!3m2!1sen!2sid!4v1715154623248!5m2!1sen!2sid"
          width="100%"
          height="250"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="row m-0 p-0 mt-3 text-center text-white">
        <hr style="background-color: white !important; color: white" />
        <p style="font-size: 12px">
          <i class="fa-regular fa-copyright" style="margin-right: 7px"></i>2024
          SPD GROUP
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.container-hp {
  margin-left: 2%;
  margin-right: 2%;
}
@media (min-width: 992px) {
  .container-hp {
    margin-left: 15%;
    margin-right: 5%;
  }
}
p {
  line-height: 1.8 !important;
}
.box {
  width: 100vw;
  height: 100vh;
}

.isi-box {
  width: 100%;
  height: 100%;
}

.test {
  width: 100%;
  height: 100vh;
}

.box-shadow {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
}

.carousel {
  width: 100%;
  height: 100%;
}

.carousel-inner {
  width: 100%;
  height: 100%;
}

.img-carousel {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
}

.isi-kotak h1 {
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  line-height: 1.5;
  word-spacing: 5px;
  text-shadow: 0 0 0 #000, 0 0 5px #000;
}

.isi-kotak p {
  font-size: 20px;
  text-shadow: 0 0 0 #000, 0 0 5px #000;
}

@media (min-width: 992px) {
  .isi-kotak h1 {
    font-size: 45px;
    text-align: center;
    font-weight: 700;
    line-height: 1.2;
    word-spacing: 8px;
  }
}

.isi-kotak {
  opacity: 0; /* Mulai dengan keadaan tidak terlihat */
  animation: jatuh 1s ease forwards; /* Animasi jatuh selama 1 detik */
  animation-delay: 0.5s; /* Jeda 0.5 detik sebelum animasi dimulai */
}

@keyframes jatuh {
  from {
    transform: translateY(-100%); /* Awal posisi dari atas */
    opacity: 0; /* Awal opasitas */
  }
  25% {
    transform: translateY(25%); /* Pantulan */
  }
  50% {
    transform: translateY(-10%); /* Pantulan ke atas lagi */
  }
  to {
    transform: translateY(
      0
    ); /* Akhir posisi, tidak bergeser dari posisi awal */
    opacity: 1; /* Akhir opasitas, menjadi terlihat */
  }
}

.judul {
  font-size: 30px;
  text-align: center;
  margin-top: 4rem;
  line-height: 1.4;
  color: #313131;
}

.judul-2 {
  text-align: center;
  margin-top: 4rem;
  line-height: 1.4;
  color: #313131;
}

.animated {
  opacity: 0;
  transform: translateX(-100%);
  animation: slideFromLeft 1s ease-in-out 0.5s forwards;
}

@keyframes slideFromLeft {
  from {
    transform: translateX(-100%); /* Awal posisi dari atas */
    opacity: 0; /* Awal opasitas */
  }
  50% {
    transform: translateX(5%); /* Pantulan */
  }
  75% {
    transform: translateX(-3%); /* Pantulan ke atas lagi */
  }
  to {
    transform: translateX(
      0
    ); /* Akhir posisi, tidak bergeser dari posisi awal */
    opacity: 1; /* Akhir opasitas, menjadi terlihat */
  }
}

.text-judul {
  text-align: center;
  margin-top: 1rem;
  line-height: 1.6;
  color: #313131;
  font-size: 18px;
}

@media (min-width: 992px) {
  .judul {
    font-size: 40px;
    line-height: 1.3;
  }
}

.border-judul {
  width: 10%;
  border-bottom: solid 1.5px red;
  margin: auto;
  margin-top: 15px;
}

.border-judul-2 {
  width: 10%;
  border-bottom: solid 1.5px red;
  margin-top: 20px;
  margin-bottom: 25px;
}

.card-satu {
  width: 95%;
  height: 18rem;
  transition: box-shadow 0.3s ease;
}

.card-dua {
  width: 95%;
  height: 18rem;
}

.link-card {
  width: 90%;
  height: 15rem;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  opacity: 0;
}

.link-card:hover {
  opacity: 1;
}

@media (min-width: 992px) {
  .link-card {
    width: 24.8rem;
    height: 16.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
  }
}

.card-satu:hover {
  box-shadow: 0 0 40px 2px rgba(15, 15, 15, 0.3); /* Efek blur hitam */
}

.card-satu img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.konten-2 {
  width: 100%;
  background-color: #f8f8f8;
}

.gedung {
  width: 100%;
  height: 40vh;
  object-fit: cover;
  object-position: center center;
}

.img-contact {
  width: 100%;
  height: 40vh;
  object-fit: cover;
  object-position: center center;
}

.img-news {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: center center;
}

.card-news {
  width: 100%;
}

@media (min-width: 992px) {
  .gedung {
    width: 100%;
    height: 85vh;
    object-fit: cover;
    object-position: center center;
  }

  .img-contact {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .img-news {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center center;
  }
}

.konten-3 {
  background-color: #333333;
  width: 100%;
}

.konten-6 {
  background-color: red;
  width: 100%;
}

.text-k3 {
  text-align: center;
  margin-bottom: 3rem;
}

@media (min-width: 992px) {
  .text-k3 {
    text-align: left;
    margin-bottom: 0;
  }
}

/* Card */
.body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.slide-container {
  max-width: 1120px;
  width: 100%;
  padding: 40px 0;
}
.slide-content {
  margin: 0 40px;
  overflow: hidden;
}
.card {
  border-radius: 25px;
  background-color: #fff;
}
.image-content,
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 14px;
}
.image-content {
  position: relative;
  row-gap: 5px;
  padding: 25px 0;
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: red;
  border-radius: 25px 25px 0 25px;
}

.card-image {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #fff;
  padding: 3px;
}
.card-image .card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid red;
}
.name {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}
.description {
  font-size: 14px;
  color: #707070;
  text-align: center;
}
.button {
  border: none;
  font-size: 16px;
  color: #fff;
  padding: 8px 16px;
  background-color: red;
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover {
  background: #265df2;
}

.swiper-navBtn {
  color: red;
  transition: color 0.3s ease;
}
.swiper-navBtn:hover {
  color: red;
}
.swiper-navBtn::before,
.swiper-navBtn::after {
  font-size: 35px;
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev {
  left: 0;
}
.swiper-pagination-bullet {
  background-color: red;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: red;
}

@media screen and (max-width: 768px) {
  .slide-content {
    margin: 0 10px;
  }
  .swiper-navBtn {
    display: none;
  }
}

.cover-img-logo {
  height: 4rem;
  width: 4rem;
}

.img-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.bg-logo {
  background-color: #f8f8f8;
  transition: margin-top 0.5s ease, box-shadow 0.5s ease;
}

.bg-logo:hover {
  background-color: white;
  margin-top: -10px;
  margin-bottom: 10px;
  box-shadow: 0 0 40px 2px rgba(15, 15, 15, 0.2);
}

.bg-product {
  background-color: red;
}

.img-blog {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
