<script setup>
import cover from "./../../../public/img/assets/cover.jpg";
import "./../../../public/swiper-bundle.min.js";
</script>

<template>
  <navbarapp></navbarapp>
  <div class="cover">
    <img :src="cover" class="img-cover" alt="cover" />
  </div>
  <div class="isi-cover d-flex align-items-center">
    <div class="container">
      <div class="container">
        <h1 class="text-white mt-3" style="max-width: fit-content">
          <i class="fa-solid fa-right-from-bracket"></i> ABOUT US
        </h1>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#f2f2f2"
      fill-opacity="1"
      d="M0,224L48,197.3C96,171,192,117,288,101.3C384,85,480,107,576,128C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
  <!-- <div class="mt-5 mb-5"></div> -->
</template>

<style>
.cover {
  width: 100%;
  height: 25vh;
  background-color: black;
  position: absolute;
}

.isi-cover {
  width: 100%;
  height: 25vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
}

.isi-cover h1 {
  font-size: 20px;
  font-weight: 700;
  text-shadow: 0 0 0 #000, 0 0 3px #000;
  overflow: hidden; /* Menghilangkan teks yang keluar dari kotak */
  white-space: nowrap; /* Mencegah teks untuk turun ke baris baru */
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite; /* Animasi mengetik */
}

/* Animasi mengetik */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Animasi kursor berkedip */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

@media (min-width: 992px) {
  .cover {
    width: 100%;
    height: 40vh;
    background-color: black;
    position: absolute;
  }

  .isi-cover {
    width: 100%;
    height: 40vh;
    position: relative;
  }

  .isi-cover h1 {
    font-size: 30px;
    font-weight: 700;
  }
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

</style>
