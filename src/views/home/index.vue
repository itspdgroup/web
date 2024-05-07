<script setup>
import "./../../../public/css/swiper-bundle.min.css";
import "./../../../public/js/swiper-bundle.min.js";
import image from "./../../../public/img/assets/satu.jpg";
import image2 from "./../../../public/img/assets/dua.jpg";
import image3 from "./../../../public/img/assets/tiga.jpg";
import image4 from "./../../../public/img/assets/empat.jpg";
import image5 from "./../../../public/img/assets/lima.jpg";
import image6 from "./../../../public/img/assets/enam.jpg";
import gedung from "./../../../public/img/assets/gedung.jpg";
import kerja from "./../../../public/img/assets/kerja-laptop.jpg";
import portofolio from "./../../../public/img/assets/portofolio.jpg";
import profile1 from "./../../../public/img/profile1.jpg";
import profile2 from "./../../../public/img/profile2.jpg";
import profile3 from "./../../../public/img/profile3.jpg";
import profile4 from "./../../../public/img/profile4.jpg";
import profile5 from "./../../../public/img/profile5.jpg";
import profile6 from "./../../../public/img/profile6.jpg";
import profile7 from "./../../../public/img/profile7.jpg";
import profile8 from "./../../../public/img/profile8.jpg";
import profile9 from "./../../../public/img/profile9.jpg";
import logo_spd from "./../../../public/img/logo/spd.png";
import logo_ssi from "./../../../public/img/logo/ssi.png";
import logo_aii from "./../../../public/img/logo/aii.png";
import logo_swatt from "./../../../public/img/logo/swatt.png";
import logo_pusdiklat from "./../../../public/img/logo/pusdiklat.png";
import logo_pusdiklat_swatt from "./../../../public/img/logo/pusdiklat_swatt.png";

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
              <h1 class="text-white">LOYAL HANDAL MELAYANI</h1>
              <p class="text-white">
                Tetap setia, tanggap, dan profesional dalam melayani kebutuhan
                Anda dengan kehandalan terpercaya.
              </p>
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
          <span style="font-size: 33px">SELAMAT DATANG DI </span> <br />
          <span style="color: red; font-weight: 800">SPD</span>
          <span style="font-weight: 800"> GROUP</span>
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

    <div class="container">
      <div
        class="row flex-lg-row-reverse mt-5 pb-4"
        style="margin: 0; padding: 0; width: 100%; height: 100%"
      >
        <div class="col-md-6">
          <div class="container">
            <h2 class="mt-3">WHY CHOSE SPD GROUP</h2>
            <div class="border-judul-2"></div>
            <div class="row mt-5">
              <div class="col-2">
                <i class="fa-solid fa-rocket fa-2x" style="color: red"></i>
              </div>
              <div class="col-10">
                <h5>MADE FOR PEOPLE</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, eius deserunt placeat incidunt sunt excepturi!
                </p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-2">
                <i class="fa-solid fa-list-check fa-2x" style="color: red"></i>
              </div>
              <div class="col-10">
                <h5>ADVANCED UI KIT</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, eius deserunt placeat incidunt sunt excepturi!
                </p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-2">
                <i
                  class="fa-solid fa-square-caret-down fa-2x"
                  style="color: red"
                ></i>
              </div>
              <div class="col-10">
                <h5>RESPONSIVE & RETINA READY</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, eius deserunt placeat incidunt sunt excepturi!
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

  <!-- Kinten 3 -->
  <div class="konten-3">
    <div class="container">
      <div class="row m-0 pt-5 pb-5">
        <div class="col-md-10">
          <div class="text-k3">
            <h3 class="text-white">
              <b>SPD GROUP</b>
            </h3>
            <h3 class="text-white">
              IS A PERFECT WEB DESIGN SOLUTION FOR EVERYBODY
            </h3>
            <p class="mt-3 text-white">
              Become the owner of the best solution for creating your own
              website!
            </p>
          </div>
        </div>
        <div class="col-md-2 d-flex justify-content-center align-items-center">
          <div>
            <button class="btn btn-outline-light rounded-0">ORDER NOW</button>
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
              <img :src="portofolio" class="card-img-top" alt="portofolio" />
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
              <img :src="portofolio" class="card-img-top" alt="portofolio" />
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
              <img :src="portofolio" class="card-img-top" alt="portofolio" />
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
              <img :src="portofolio" class="card-img-top" alt="portofolio" />
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

  <!-- Konten 4 -->
  <!-- <div class="konten-4">
    <div class="container">
      <div class="d-flex justify-content-center mb-4">
        <div class="col-lg-6">
          <h2 class="judul-2">PORTFOLIO</h2>
          <div class="border-judul"></div>
        </div>
      </div>
      <div class="row justify-content-center pt-4">
        <div class="col-md-4 mb-3">
          <div class="d-flex justify-content-center">
            <div
              class="link-card d-flex justify-content-center align-items-center"
            >
              <button class="btn btn-outline-light rounded-0">Link</button>
            </div>
            <div class="card-dua">
              <img :src="portofolio" class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="d-flex justify-content-center">
            <div
              class="link-card d-flex justify-content-center align-items-center"
            >
              <button class="btn btn-outline-light rounded-0">Link</button>
            </div>
            <div class="card-dua">
              <img :src="portofolio" class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="d-flex justify-content-center">
            <div
              class="link-card d-flex justify-content-center align-items-center"
            >
              <button class="btn btn-outline-light rounded-0">Link</button>
            </div>
            <div class="card-dua">
              <img :src="portofolio" class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="d-flex justify-content-center">
            <div
              class="link-card d-flex justify-content-center align-items-center"
            >
              <button class="btn btn-outline-light rounded-0">Link</button>
            </div>
            <div class="card-dua">
              <img :src="portofolio" class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="d-flex justify-content-center">
            <div
              class="link-card d-flex justify-content-center align-items-center"
            >
              <button class="btn btn-outline-light rounded-0">Link</button>
            </div>
            <div class="card-dua">
              <img :src="portofolio" class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- Konten 6 -->
  <div class="konten-6">
    <div class="container">
      <div class="row m-0 pt-5 pb-5">
        <div class="col-md-10">
          <div class="text-k3">
            <h3 class="text-white">
              <b>SPD GROUP</b>
            </h3>
            <h3 class="text-white">
              IS A PERFECT WEB DESIGN SOLUTION FOR EVERYBODY
            </h3>
            <p class="mt-3 text-white">
              Become the owner of the best solution for creating your own
              website!
            </p>
          </div>
        </div>
        <div class="col-md-2 d-flex justify-content-center align-items-center">
          <div>
            <button class="btn btn-outline-light rounded-0">ORDER NOW</button>
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
          <h2 class="judul-2">News & Blog</h2>
          <div class="border-judul"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row m-0 p-0">
        <div class="col-md-6">
          <div style="width: 100%; height: 100vh"></div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3 rounded-2" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <div style="width: 100%; height: 100%">
                  <img
                    :src="portofolio"
                    class="img-blog rounded-1"
                    alt="..."
                  />
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
                  <img
                    :src="logo_spd"
                    class="img-blog rounded-1"
                    alt="..."
                  />
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
                  <img
                    :src="portofolio"
                    class="img-blog rounded-1"
                    alt="..."
                  />
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
  <!-- Card -->
  <!-- <div class="body">
    <div class="slide-container swiper">
      <div class="slide-content">
        <div class="card-wrapper swiper-wrapper">
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img :src="profile1" alt="" class="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">David Dell</h2>
              <p class="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>

              <button class="button">View More</button>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img :src="profile2" alt="" class="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">David Dell</h2>
              <p class="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>

              <button class="button">View More</button>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img :src="profile3" alt="" class="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">David Dell</h2>
              <p class="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>

              <button class="button">View More</button>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img :src="profile4" alt="" class="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">David Dell</h2>
              <p class="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>

              <button class="button">View More</button>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img :src="profile5" alt="" class="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">David Dell</h2>
              <p class="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>

              <button class="button">View More</button>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img :src="profile6" alt="" class="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">David Dell</h2>
              <p class="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>

              <button class="button">View More</button>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img :src="profile7" alt="" class="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">David Dell</h2>
              <p class="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>

              <button class="button">View More</button>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img :src="profile8" alt="" class="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">David Dell</h2>
              <p class="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>

              <button class="button">View More</button>
            </div>
          </div>
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img :src="profile9" alt="" class="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h2 class="name">David Dell</h2>
              <p class="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>

              <button class="button">View More</button>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-button-next swiper-navBtn"></div>
      <div class="swiper-button-prev swiper-navBtn"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div> -->

  <div class="mt-5"></div>
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

@media (min-width: 992px) {
  .gedung {
    width: 100%;
    height: 85vh;
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
