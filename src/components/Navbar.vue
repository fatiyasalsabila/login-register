<template>
  <!-- Bagian Navbar -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="adminAccess ">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item" v-if="adminAccess ">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item" v-if="adminAccess ">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item" v-if="adminAccess">
            <router-link class="nav-link" to="/produk">Produk</router-link>
          </li>
          <li class="nav-item" v-if="adminAccess">
            <router-link class="nav-link" to="/detail">Detail</router-link>
          </li>
        </ul>
        <!-- Tombol Logout -->
        <a
          @click="out"
          href="/"
          style="
            border: 1px solid;
            padding: 10px;
            border-radius: 10px;
          "
        >
          <i class="fas fa-sign-out-alt"></i> Logout</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarPage",
  computed: {
    adminAccess() {
      return sessionStorage.getItem("role") === "admin";
    },
  },
  methods: {
    out() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
