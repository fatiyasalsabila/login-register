<template>
  <div id="detail">
    <Navbar />
    <div class="label">
      <button
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        class="add"
        style="margin-left: 90%"
        type="submit"
      >
        ADD
      </button>

      <!-- Modal ADD Pesawat -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel" >
                Form <span v-show="!updatesubmitePesawat"> Pesawat</span>
                <span v-show="updateSubmitPesawat">Update</span>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                 @click="close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit="add">
                <input type="hidden" v-model="form.id" required /><br />
                <label for="">nama: </label><br />
                <input type="text" v-model="form.nama" required /><br /><br />
                <label for="">Kapasitas: </label><br />
                <input
                  type="text"
                  v-model="form.bermuatan"
                  required
                /><br /><br />
                <label for="">Jarak Tempuh: </label><br />
                <input type="text" v-model="form.tempuh" required /><br /><br />
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="close"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary" v-show="!updateSubmit">Add</button>
                <button type="button" class="btn-update" v-show="updateSubmit" @click="update(form)">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <table>
        <tr>
          <th>Nomor</th>
          <th>Nama</th>
          <th>Kapasitas</th>
          <th>Jarak jempuh</th>
          <th>Action</th>
        </tr>
        <tr v-for="(pesawat, index) in pesawats" :key="pesawat.id" class="pt">
          <td>{{ index + 1}}</td>
          <td>{{ pesawat.nama }}</td>
          <td>{{ pesawat.bermuatan }}</td>
          <td>{{ pesawat.tempuh }}</td>
          <td style="text-align: center">
            <button
              style="background-color: green; padding: 5%"
              @click="edit(pesawat)" data-bs-toggle="modal"
        data-bs-target="#exampleModal"
            >
              Edit
            </button>
            ||
            <button
              style="background-color: red; padding: 5%"
              @click="del(pesawat)"
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
    <br />
    <!-- BUS -->
    <div class="label">
      <button
        data-bs-toggle="modal"
        data-bs-target="#exampleModalButs"
        class="add"
        style="margin-left: 85%; width:10%"
        type="submit"
      >
        ADD BUS
      </button>
      <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->

      <!-- Modal ADD Buts -->
      <div
        class="modal fade"
        id="exampleModalButs"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel" >
                Form <span v-show="!updatesubmiteButs"> Bus</span>
                <span v-show="updateSubmitButs">Update</span>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-disutiss="modal"
                aria-label="Close"
                 @click="close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit="addButs">
                <input type="hidden" v-model="formButs.id" required /><br />
                <label for="">nama: </label><br />
                <input type="text" v-model="formButs.nama" required /><br /><br />
                <label for="">Tinggi: </label><br />
                <input
                  type="text"
                  v-model="formButs.tinggi"
                  required
                /><br /><br />
                <label for="">Kapasitas: </label><br />
                <input type="text" v-model="formButs.kapasitas" required /><br /><br />
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="close"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary" v-show="!updateSubmitButs">Add</button>
                <button type="button" class="btn-update" v-show="updateSubmitButs" @click="updateButs(formButs)">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <table>
        <tr>
          <th>Nomor</th>
          <th>Nama</th>
          <th>tinggi</th>
          <th>kapasitas</th>
          <th>Action</th>
        </tr>
        <tr v-for="(but, index) in buts" :key="but.id" class="pt">
          <td>{{ index + 1}}</td>
          <td>{{ but.nama }}</td>
          <td>{{ but.tinggi }}</td>
          <td>{{ but.kapasitas }}</td>
          <td style="text-align: center">
            <button
              style="background-color: green; padding: 5%"
              @click="editButs(but)" data-bs-toggle="modal"
        data-bs-target="#exampleModalButs"
            >
              Edit
            </button>
            ||
            <button
              style="background-color: red; padding: 5%"
              @click="delButs(but)"
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  name: "DetailPage",
  components: {
    Navbar,
  },
  data() {
    return {
      form: {
        id: "",
        nama: "",
        bermuatan: "",
        tempuh: "",
      },
      pesawats: "",
      updateSubmit: false,
      formButs: {
        id: "",
        nama: "",
        tinggi: "",
        kapasitas: "",
      },
      buts: "",
      updateSubmitButs: false,
    };
  },
  mounted() {
    this.load();
    this.loadButs();
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/pesawats")
        .then((res) => {
          this.pesawats = res.data; //respon dari rest api dimasukan ke pesawats
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadButs() {
      axios
        .get("http://localhost:3000/buts")
        .then((res) => {
          this.buts = res.data; //respon dari rest api dimasukan ke pesawats
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/pesawats/", this.form).then(() => {
        this.load();
        this.form.nama = "";
        this.form.bermuatan = "";
        this.form.tempuh = "";
      });
      window.location.reload()
    },
    addButs() {
      axios.post("http://localhost:3000/Buts/", this.formButs).then(() => {
        this.load();
        this.formButs.nama = "";
        this.formButs.tinggi = "";
        this.formButs.kapasitas = "";
      });
      window.location.reload()
    },
    edit(pesawat) {
      this.updateSubmit = true;
      this.form.id = pesawat.id;
      this.form.nama = pesawat.nama;
      this.form.bermuatan = pesawat.bermuatan;
      this.form.tempuh = pesawat.tempuh;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/pesawats/" + form.id, {
          nama: this.form.nama,
          bermuatan: this.form.bermuatan,
          tempuh: this.form.tempuh,
        })
        .then(() => {
          this.load();
          this.form.id = "";
          this.form.nama = "";
          this.form.bermuatan = "";
          this.form.tempuh = "";
          this.updateSubmit = false;
          window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editButs(but) {
      this.updateSubmitButs = true;
      this.formButs.id = but.id;
      this.formButs.nama = but.nama;
      this.formButs.tinggi = but.tinggi;
      this.formButs.kapasitas = but.kapasitas;
    },
    updateButs(formButs) {
      return axios
        .put("http://localhost:3000/buts/" + formButs.id, {
          nama: this.formButs.nama,
          tinggi: this.formButs.tinggi,
          kapasitas: this.formButs.kapasitas,
        })
        .then(() => {
          this.loadButs();
          this.formButs.id = "";
          this.formButs.nama = "";
          this.formButs.tinggi = "";
          this.formButs.kapasitas = "";
          this.updateSubmitButs = false;
          window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(pesawat) {
      axios
        .delete("http://localhost:3000/pesawats/" + pesawat.id)
        .then((res) => {
          this.load();
          let index = this.pesawats.indexOf(res.nama);
          this.pesawats.splice(index, 1);
        });
    },
    delButs(but) {
      axios
        .delete("http://localhost:3000/buts/" + but.id)
        .then((res) => {
          this.loadButs();
          let index = this.buts.indexOf(res.nama);
          this.buts.splice(index, 1);
        });
    },
    //Close
    close() {
      window.location.reload();
    }
  },
};
</script>

<style scoped>
table,
td,
th {
  border: 1px solid rgb(46, 26, 26);
  text-align: left;
  padding: 1%;
}
table {
  width: 90%;
  margin-left: 5%;
  margin-top: 1%;
  background-color: black;
  color: white;
}
.add {
  background-color: deepskyblue;
  border: none;
  padding: 9px;
  border-radius: 10px;
  width: 5%;
}
.btn-update {
  background-color: deepskyblue;
  border-radius: 10px;
  border:none;
  padding: 2%;
  margin-left: 5%;
  width: 30%;
}
.btn-update:hover {
  background-color: lightseagreen;
}
.btn_btn-secondary {
  padding: 2%;
  width: 30%;
  border:none;
  border-radius: 10px;
  background-color: lightskyblue;
  transition: 1s;
}
.btn_btn-secondary:hover {
  background-color: lightsteelblue;
}
</style>


