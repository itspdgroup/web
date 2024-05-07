<script setup>
import imageA from "./../../../public/img/assets/satu.jpg";
import imageB from "./../../../public/img/assets/dua.jpg";
import imageC from "./../../../public/img/assets/tiga.jpg";
import imageD from "./../../../public/img/assets/empat.jpg";
import imageE from "./../../../public/img/assets/lima.jpg";
import imageF from "./../../../public/img/assets/enam.jpg";
import Gedung from "./../../../public/img/assets/gedung.jpg";
import Kerja from "./../../../public/img/assets/kerja-laptop.jpg";
import Portofolio from "./../../../public/img/assets/portofolio.jpg";
const image = imageA;
const image2 = imageB;
const image3 = imageC;
const image4 = imageD;
const image5 = imageE;
const image6 = imageF;
const gedung = Gedung;
const kerja = Kerja;
const portofolio = Portofolio;

import { onMounted } from "vue";

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const judul = document.querySelector(".judul");
      judul.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
};

onMounted(() => {
  const options = {
    threshold: 1, // Sesuaikan threshold sesuai kebutuhan
  };

  const observer = new IntersectionObserver(handleIntersection, options);
  const judul = document.querySelector(".judul");
  observer.observe(judul);
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
            <div class="isi-kotak container col-sm-6 text-center">
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

  <!-- Konten 1 -->
  <div class="container">
    <div class="d-flex justify-content-center mb-4">
      <div class="col-lg-6">
        <h1 class="judul">
          <span style="font-size: 33px">SELAMAT DATANG DI </span> <br />
          <span style="color: red; font-weight: 800">SPD</span>
          <span style="font-weight: 800">GROUP</span>
        </h1>
        <div class="border-judul"></div>
        <p class="text-judul">
          Kami adalah Perusahaan BUJP, sebuah entitas yang berdedikasi dalam
          menyediakan solusi keamanan yang inovatif dan andal. Dengan fokus pada
          keunggulan teknologi dan pelayanan pelanggan, kami memprioritaskan
          keamanan Anda.
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-4 mb-4">
        <div class="d-flex justify-content-center">
          <div class="card-satu">
            <img :src="image4" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div style="width: 95%">
            <h4 class="mt-3">BOOTSTRAP FRAMEWORK</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              est.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 mb-4">
        <div class="d-flex justify-content-center">
          <div class="card-satu">
            <img :src="image5" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div style="width: 95%">
            <h4 class="mt-3">BOOTSTRAP FRAMEWORK</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              est.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 mb-4">
        <div class="d-flex justify-content-center">
          <div class="card-satu">
            <img :src="image6" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div style="width: 95%">
            <h4 class="mt-3">BOOTSTRAP FRAMEWORK</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              est.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Konten 2 -->
  <!-- <div class="konten-2 mt-5">
    <div style="margin: 0; padding: 0; position: absolute; width: 100%">
      <div class="container mt-5">
        <div class="container">
          <div class="col-sm-5">
            <h2>ABOUT US</h2>
            <div class="border-judul-2"></div>
            <p>
              Aurona boasts clean and crispy design, bulletproof layout
              consistency and intuitive navigation. The template was created by
              top industry leaders in web design and user experience. Improve
              your audience engagement and loyalty with simple and user friendly
              tools offered by our template.
            </p>
            <div class="mt-4">
              <div class="row">
                <div class="col-sm-6 mt-4">
                  <div class="row">
                    <div class="col-2">
                      <i class="fa-solid fa-award fa-2x" style="color: red"></i>
                    </div>
                    <div class="col-9">
                      <h5>AWARD-WINNING DESIGNS</h5>
                      <p>
                        We are a team of dedicated interior design and
                        remodeling professionals.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-4">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fa-solid fa-user-group fa-xl"
                        style="color: red"
                      ></i>
                    </div>
                    <div class="col-9">
                      <h5>EXPERT TEAM</h5>
                      <p>
                        We are a team of dedicated interior design and
                        remodeling professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-sm-12 d-flex justify-content-between">
                  <p class="mb-0">Dedication</p>
                  <span class="ms-auto">100%</span>
                </div>
                <div class="col-sm-12">
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-label="Basic example"
                      style="width: 100%"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="mt-3 col-sm-12 d-flex justify-content-between">
                  <p class="mb-0">Knowledge</p>
                  <span class="ms-auto">90%</span>
                </div>
                <div class="col-sm-12">
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-label="Basic example"
                      style="width: 90%"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="mt-3 col-sm-12 d-flex justify-content-between">
                  <p class="mb-0">Experience</p>
                  <span class="ms-auto">80%</span>
                </div>
                <div class="col-sm-12">
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-label="Basic example"
                      style="width: 80%"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6" style="height: 120vh"></div>
        <div class="col-sm-6 p-0">
          <img :src="gedung" alt="" class="gedung" />
        </div>
      </div>
    </div>
    <div
      class="row flex-lg-row-reverse mt-5 pb-4"
      style="margin: 0; padding: 0; width: 100%; height: 100%"
    >
      <div class="col-sm-6">
        <div class="container">
          <h2 class="mt-3">WHY CHOOSE SPD GROUP</h2>
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
        class="col-sm-6 mt-4 mb-4 d-flex justify-content-center align-items-center"
      >
        <img :src="kerja" alt="" width="80%" />
      </div>
    </div>
  </div> -->

  <div class="konten-2 mt-5">
    <div class="row m-0 p-0">
      <div class="col-sm-6 py-5">
        <div class="container-hp">
          <div>
            <h2>ABOUT US</h2>
            <div class="border-judul-2"></div>
            <p>
              Aurona boasts clean and crispy design, bulletproof layout
              consistency and intuitive navigation. The template was created by
              top industry leaders in web design and user experience. Improve
              your audience engagement and loyalty with simple and user friendly
              tools offered by our template.
            </p>
            <div class="mt-4">
              <div class="row">
                <div class="col-sm-6 mt-4">
                  <div class="row">
                    <div class="col-2">
                      <i class="fa-solid fa-award fa-2x" style="color: red"></i>
                    </div>
                    <div class="col-9">
                      <h5>AWARD-WINNING DESIGNS</h5>
                      <p>
                        We are a team of dedicated interior design and
                        remodeling professionals.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-4">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fa-solid fa-user-group fa-xl"
                        style="color: red"
                      ></i>
                    </div>
                    <div class="col-9">
                      <h5>EXPERT TEAM</h5>
                      <p>
                        We are a team of dedicated interior design and
                        remodeling professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-sm-12 d-flex justify-content-between">
                  <p class="mb-0">Dedication</p>
                  <span class="ms-auto">100%</span>
                </div>
                <div class="col-sm-12">
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-label="Basic example"
                      style="width: 100%"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="mt-3 col-sm-12 d-flex justify-content-between">
                  <p class="mb-0">Knowledge</p>
                  <span class="ms-auto">90%</span>
                </div>
                <div class="col-sm-12">
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-label="Basic example"
                      style="width: 90%"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="mt-3 col-sm-12 d-flex justify-content-between">
                  <p class="mb-0">Experience</p>
                  <span class="ms-auto">80%</span>
                </div>
                <div class="col-sm-12">
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-label="Basic example"
                      style="width: 80%"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 m-0 p-0">
        <img :src="gedung" alt="" class="gedung" />
      </div>
    </div>

    <div class="container">
      <div
        class="row flex-lg-row-reverse mt-5 pb-4"
        style="margin: 0; padding: 0; width: 100%; height: 100%"
      >
        <div class="col-sm-6">
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
          class="col-sm-6 mt-4 mb-4 d-flex justify-content-center align-items-center"
        >
          <img :src="kerja" alt="" width="100%" />
        </div>
      </div>
    </div>
  </div>

  <!-- Kinten 3 -->
  <div class="konten-3">
    <div class="container">
      <div class="row m-0 pt-5 pb-5">
        <div class="col-sm-10">
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
        <div class="col-sm-2 d-flex justify-content-center align-items-center">
          <div>
            <button class="btn btn-outline-light rounded-0">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Konten 4 -->
  <div class="konten-4">
    <div class="container">
      <div class="d-flex justify-content-center mb-4">
        <div class="col-lg-6">
          <h2 class="judul-2">PORTFOLIO</h2>
          <div class="border-judul"></div>
        </div>
      </div>
      <div class="row justify-content-center pt-4">
        <div class="col-sm-4 mb-3">
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
        <div class="col-sm-4 mb-3">
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
        <div class="col-sm-4 mb-3">
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
        <div class="col-sm-4 mb-3">
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
        <div class="col-sm-4 mb-3">
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
  </div>
  <!-- Konten 5 -->
  <div class="konten-2 mt-2 pb-4">
    <div class="container">
      <div class="d-flex justify-content-center mb-4">
        <div class="col-lg-6">
          <h2 class="judul-2">OUR WORKING PROCESS</h2>
          <div class="border-judul"></div>
        </div>
      </div>
    </div>
    <div
      class="row mt-2 pb-4"
      style="margin: 0; padding: 0; width: 100%; height: 100%"
    >
      <div
        class="col-sm-6 mt-4 mb-4 d-flex justify-content-center align-items-center"
      >
        <img :src="kerja" alt="" width="90%" />
      </div>
      <div class="col-sm-6">
        <div class="container">
          <div class="row mt-4">
            <div class="col-3">
              <button
                class="btn btn-danger btl-lg rounded-circle"
                style="width: 5rem; height: 5rem"
              >
                <i class="fa-solid fa-rocket fa-2x"></i>
              </button>
            </div>
            <div class="col-9">
              <h5>MADE FOR PEOPLE</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, eius deserunt placeat incidunt sunt excepturi!
              </p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-3">
              <button
                class="btn btn-danger btl-lg rounded-circle"
                style="width: 5rem; height: 5rem"
              >
                <i class="fa-solid fa-list-check fa-2x"></i>
              </button>
            </div>
            <div class="col-9">
              <h5>ADVANCED UI KIT</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, eius deserunt placeat incidunt sunt excepturi!
              </p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-3">
              <button
                class="btn btn-danger btl-lg rounded-circle"
                style="width: 5rem; height: 5rem"
              >
                <i class="fa-solid fa-square-caret-down fa-2x"></i>
              </button>
            </div>
            <div class="col-9">
              <h5>RESPONSIVE & RETINA READY</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, eius deserunt placeat incidunt sunt excepturi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Konten 6 -->
  <div class="konten-6">
    <div class="container">
      <div class="row m-0 pt-5 pb-5">
        <div class="col-sm-10">
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
        <div class="col-sm-2 d-flex justify-content-center align-items-center">
          <div>
            <button class="btn btn-outline-light rounded-0">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Konten 7 -->
  <div class="konten-2 mt-2 pb-4">
    <div class="container">
      <div class="d-flex justify-content-center mb-4">
        <div class="col-lg-6">
          <h2 class="judul-2">OUR SERVICE</h2>
          <div class="border-judul"></div>
        </div>
      </div>
    </div>
  </div>
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
    height: 120vh;
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
</style>
