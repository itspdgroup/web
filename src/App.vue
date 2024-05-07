<script setup>
import imageA from "./../public/img/assets/satu.jpg";
import imageB from "./../public/img/assets/dua.jpg";
import imageC from "./../public/img/assets/tiga.jpg";
import imageD from "./../public/img/assets/empat.jpg";
import imageE from "./../public/img/assets/lima.jpg";
import imageF from "./../public/img/assets/enam.jpg";
import Gedung from "./../public/img/assets/gedung.jpg";
import Kerja from "./../public/img/assets/kerja-laptop.jpg";
import Portofolio from "./../public/img/assets/portofolio.jpg";
const image = imageA;
const image2 = imageB;
const image3 = imageC;
const image4 = imageD;
const image5 = imageE;
const image6 = imageF;
const gedung = Gedung;
const kerja = Kerja;
const portofolio = Portofolio;

import { ref, onMounted, onUnmounted } from "vue";

const animatedLeft = ref(false);

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
  // const options = {
  //   threshold: 1, // Sesuaikan threshold sesuai kebutuhan
  // };

  // const observer = new IntersectionObserver(handleIntersection, options);
  // const judul = document.querySelector(".judul");
  // observer.observe(judul);
});
</script>

<template>
  <!-- <navbarapp></navbarapp> -->
  <router-view></router-view>
</template>

<style></style>
