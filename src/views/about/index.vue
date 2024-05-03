<script setup></script>

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
  <div class="mt-5 mb-5"></div>
</template>

<style></style>
