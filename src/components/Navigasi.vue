<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

// Event listener untuk mendeteksi scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
  const navbar = document.querySelectorAll(".bg-light");
  const cekNav = document.querySelectorAll(".nav-link");
  const cekBtn = document.querySelectorAll(".icon-spd");
  const cekBtnFlag = document.querySelectorAll(".btn-flag");
  const cekBtnBar = document.querySelectorAll(".btn-bar");
  const cek = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.forEach((nav) => {
      nav.style.setProperty("background-color", "white", "important");
    });
    cekNav.forEach((navLink) => {
      const isActive = navLink.classList.contains("active");
      if (isActive) {
        // Jika elemen memiliki kelas "active", ubah warnanya menjadi merah
        navLink.style.setProperty("color", "red", "important");
      } else {
        // Jika tidak, ubah warnanya menjadi hitam
        navLink.style.setProperty("color", "black", "important");
      }
    });
    cekBtn.forEach((btn) => {
      btn.style.setProperty("color", "black", "important");
    });
    cekBtnBar.forEach((btn) => {
      btn.style.setProperty("color", "black", "important");
    });
    cekBtnFlag.forEach((btn) => {
      btn.style.setProperty("color", "black", "important");
      btn.addEventListener("mouseenter", () => {
        btn.style.setProperty("color", "white", "important");
      });

      // Mengembalikan warna tombol saat tidak di-hover
      btn.addEventListener("mouseleave", () => {
        btn.style.setProperty("color", "black", "important");
      });
    });
    cek.classList.add("bg-light");
    cek.classList.add("shadow-sm");
  } else {
    navbar.forEach((nav) => {
      nav.style.setProperty("background-color", "transparent", "important");
    });
    cekNav.forEach((navLink) => {
      navLink.style.setProperty("color", "white", "important");
    });
    cekBtn.forEach((btn) => {
      btn.style.setProperty("color", "white", "important");
    });
    cekBtnBar.forEach((btn) => {
      btn.style.setProperty("color", "white", "important");
    });
    cekBtnFlag.forEach((btn) => {
      btn.style.setProperty("color", "white", "important");
      // Menambahkan aturan CSS untuk mengubah warna tombol saat hover
      btn.addEventListener("mouseenter", () => {
        btn.style.setProperty("color", "black", "important");
      });

      // Mengembalikan warna tombol saat tidak di-hover
      btn.addEventListener("mouseleave", () => {
        btn.style.setProperty("color", "white", "important");
      });
    });
    cek.classList.remove("shadow-sm");
    cek.classList.remove("bg-white");
  }
};

// Tambahkan event listener saat komponen dimount
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Hapus event listener saat komponen di-unmount
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <div>
    <nav
      class="navbar navbar-expand-lg p-2 p-lg-3 bg-light"
      style="background-color: transparent !important"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <b
            ><span style="color: red; font-weight: 700">SPD</span>
            <span class="icon-spd" style="color: white"> GROUP</span></b
          >
        </a>
        <button
          class="navbar-toggler border-0 rounded-0 shadow-sm"
          style="color: white;"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars btn-bar"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a
                :class="{
                  'active':
                    $route.path === '/',
                }"
                class="nav-link"
                aria-current="page"
                href="/"
                >HOME</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                :class="{ 'active': $route.path === '/about' }"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABOUT US
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark bg-danger rounded-2 border-0 shadow-sm"
                style="background-color: red !important"
              >
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="/about"
                    >SPD</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >SS1</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >SWATT</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >PUSDIKLAT</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >STRUKTUR ORGANISASI</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICE
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark bg-danger rounded-2 border-0 shadow-sm"
                style="background-color: red !important"
              >
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >SPD GROUP</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >SS1</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >SWATT</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >PUSDIKLAT</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >STRUKTUR ORGANISASI</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PRODUCT & SYSTEM
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark bg-danger rounded-2 border-0 shadow-sm"
                style="background-color: red !important"
              >
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >SPD GROUP</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >SS1</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >SWATT</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >PUSDIKLAT</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white"
                    style="font-size: 13px"
                    href="#"
                    >STRUKTUR ORGANISASI</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">NEWS & BLOG</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ALBUM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">JOIN US</a>
            </li>
          </ul>
        </div>
        <div
          class="collapse navbar-collapse ms-auto shadow-sm"
          id="navbarNavDropdown"
          style="max-width: fit-content"
        >
          <div class="dropdown">
            <a
              class="btn-flag btn btn-outline-light border-0 rounded-0 dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
            >
              <svg
                style="width: 20px; height: 12px; margin-top: -2px"
                viewBox="0 0 500 375"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd" font-size="12">
                  <path
                    transform="matrix(1.0023 0 0 .51703 .0027402 -1.4085)"
                    d="m-1.17-2.9163h499.6v377.92h-499.6z"
                    fill="#e70011"
                  />
                  <path
                    transform="matrix(1.0023 0 0 .49845 .0027402 186.91)"
                    d="m-1.17-2.9163h499.6v377.92h-499.6z"
                    fill="#fff"
                  />
                </g>
              </svg>
              IN
            </a>

            <ul class="dropdown-menu rounded-0" style="min-width: min-content">
              <li>
                <a class="dropdown-item" href="#"
                  ><svg
                    style="width: 20px; height: 12px; margin-top: -2px"
                    viewBox="0 0 500 375"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill-rule="evenodd" font-size="12">
                      <path
                        transform="matrix(1.0023 0 0 .51703 .0027402 -1.4085)"
                        d="m-1.17-2.9163h499.6v377.92h-499.6z"
                        fill="#e70011"
                      />
                      <path
                        transform="matrix(1.0023 0 0 .49845 .0027402 186.91)"
                        d="m-1.17-2.9163h499.6v377.92h-499.6z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  IN</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><svg
                    style="width: 20px; height: 12px; margin-top: -2px"
                    enable-background="new 0 0 341.59 203.057"
                    viewBox="0 0 341.59 203.057"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m0.063 0h341.47v202.17h-341.47z" fill="#fff" />
                    <path d="m.063,12" fill="#ffffbd" />
                    <path d="m36.323 49.445" fill="#f00" />
                    <path d="m.063,20v56.5h96z" fill="#13135f" />
                    <path d="m109.91 76.5h19.652l-129.5-76.5v12z" fill="#f00" />
                    <path d="m37.916 0 109.65 67.486v-67.486z" fill="#12145b" />
                    <path d="m341.56 182v-56h-95z" fill="#13135f" />
                    <path
                      d="m232.72 126h-19.652l128.5 76.125v-12.125z"
                      fill="#f00"
                    />
                    <path
                      d="m304.68 203-109.65-67.486v67.486z"
                      fill="#12145b"
                    />
                    <path d="m341.56 20.513v55.987l-95-0.068z" fill="#13135f" />
                    <path
                      d="m195.06 76.5h22.298l124.2-76.5h-22.554z"
                      fill="#f00"
                    />
                    <path d="m303.75 0-108.69 66.986v-66.986z" fill="#12145b" />
                    <path d="m0.071 182.48v-56.5h96z" fill="#13135f" />
                    <path
                      d="m147.52 125.97h-22.299l-125.22 77.088h22.572z"
                      fill="#f00"
                    />
                    <path
                      d="m37.87 202.97 109.65-67.486v67.486z"
                      fill="#12145b"
                    />
                    <path d="m156.72 0h28.874v203h-28.874z" fill="#f00" />
                    <path
                      d="m0.063 85.252h341.53v32.672h-341.53z"
                      fill="#f00"
                    />
                  </svg>
                  EN</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,500;1,500&display=swap");

.navbar {
  position: fixed;
  width: 100%;
  z-index: 99;
}

.navbar-dark .container .navbar-collapse .navbar-nav .nav-link {
  color: white !important;
}

.bg-light .navbar-nav .nav-link {
  color: white !important;
}

.work-sans {
  font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}

.nav-link {
  font-size: 12px !important;
  margin-right: 5px;
  margin-left: 5px;
}

.btn-nav {
  border-radius: 0px !important;
  font-size: 14px;
  width: 7rem;
  padding: 10px 0;
}

.btn-outline-danger {
  color: black !important;
}

.btn-outline-danger:hover {
  color: white !important;
}

.btn-dark {
  color: white;
}

.btn-light {
  color: black;
}
</style>
