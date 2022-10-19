<template>
  <div class="kotak_login">
    <h4 class="tulisan_login">login</h4>

    <form @submit="login()">
      <label>Username</label>
      <input
        type="text"
        name="username"
        v-model="form.username"
        required
        class="form_login"
        placeholder="Masukan User Name atu Email .."
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        v-model="form.password"
        required
        class="form_login"
        placeholder="Masukan Password.."
      />
      <button type="submit" style="
             background-color: black; 
             display: block;
             margin-left: auto;
             margin-right: auto;
             cursor: pointer;
             padding: 10px;
             border-radius: 18px;
             color: white;
             width:50%">
        Login
      </button>
      <br />
      <br />
      <center>
        <span>Belum Punya Akun</span> <a href="/register">Silahkan Register</a>
      </center>
    </form>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: "",
        password: "",
        useres: {},
      },
    };
  },

  methods: {
    //menjalankan dua fungsi mengambil data pada json dan mencari data yang sama diinputkan
    async getUser() {
      const user = await axios.get("http://localhost:3000/akuns");
      this.useres = user.data;
    },
    //fungsi tombol login
    login() {
      const login = this.useres.find(
        (data) =>
          data.username === this.form.username &&
          data.password === this.form.password
      );
      //kondisi jika akan benar akan langsung masuk ke page home kalo salah muncul allert
      if (login === undefined) {
        alert("Username or password not Found");
      } else {
        var convertToString = JSON.stringify(login);
        sessionStorage.setItem("USER_DATA", convertToString);
        sessionStorage.setItem("role", login.role);
        this.$router.push("/home");
        window.location.reload();
      }
    },
    
  },
  mounted() {
    this.getUser();
    //fungsi toggle pada app vue
    this.$emit("toggleBar")
  },
};
</script>
<style scoped>
  .kotak_login {
    background-image: linear-gradient(skyblue, violet);
  }
</style>
