<template>
  <div id="produk">
    <Navbar />
    <br />
    <table>
      <tr>
        <th>Nomor</th>
        <th>Nama</th>
        <th>Bermuatan</th>
        <th>Tempuh</th>
      </tr>
      <tr v-for="(pesawat, index) in pesawats" :key="pesawat.id" class="pt">
        <td>{{ index + 1 }}</td>
        <td>{{ pesawat.nama }}</td>
        <td>{{ pesawat.bermuatan }}</td>
        <td>{{ pesawat.tempuh }}</td>
      </tr>
    </table>

    <br />

    <table>
      <tr>
        <th>Nomor</th>
        <th>Nama</th>
        <th>tinggi</th>
        <th>kapasitas</th>
      </tr>
      <tr v-for="(but, index) in buts" :key="but.id" class="pt">
        <td>{{ index + 1 }}</td>
        <td>{{ but.nama }}</td>
        <td>{{ but.tinggi }}</td>
        <td>{{ but.kapasitas }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
  name: "ProdukPage",
  components: {
    Navbar,
  },
  data() {
    return {
      formPesawat: {
        id: "",
        nama: "",
        bermuatan: "",
        tempuh: "",
      },
      pesawats: "",
      updateSubmitPesawat: false,
      formButs: {
        id: "",
        nama: "",
        tinggi: "",
        kapasitas: "",
      },
      buts: "",
      updateSubmitBut: false,
    };
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
    this.loadPesawat();
    this.loadButs();
  },
  methods: {
    loadPesawat() {
      axios
        .get("http://localhost:3000/pesawats")
        .then((res) => {
          this.pesawats = res.data; //respon dari rest api dimasukan ke mobils
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadButs() {
      axios
        .get("http://localhost:3000/buts")
        .then((res) => {
          this.buts = res.data; //respon dari rest api dimasukan ke mobils
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
table,
tr {
  border: 1px solid;
}
table {
  margin-left: 5%;
  width: 90%;
  height: 100%;
}
th {
  background-color: black;
  color: white;
}
</style>
