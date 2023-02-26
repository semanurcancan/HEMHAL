<template>
  <v-col cols="12">
    <v-row class="mt-16" align="center" justify="center">
      <v-card class="fill-height" variant="elevated">
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-row class="fill-height" style="width: 100vh">
              <v-col cols="12" md="8" class="bg-brown-lighten-5">
                <v-card-text class="mt-12">
                  <h1 class="text-center text-brown-lighten-3">
                    SING IN HEMHAL
                  </h1>
                  <v-col>
                    <v-row class="text-center mt-4">
                      <v-col>
                        <v-img src="/public/assets/icons8-facebook.svg" alt="HEMHAL" height="60">
                        </v-img>
                      </v-col>
                      <v-col>
                        <v-img src="/public/assets/icons8-google-plus.svg" alt="HEMHAL" height="60">
                        </v-img>
                      </v-col>
                      <v-col>
                        <v-img src="/public/assets/icons8-linkedin.svg" alt="HEMHAL" height="60">
                        </v-img>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col>
                    <h4 class="text-center font-weight-light">
                      Ensure Your Email For Registiration
                    </h4>
                  </v-col>

                  <v-col>
                    <v-form>
                      <v-text-field :autofocus="true" v-model="user.email" label="email" name="email"
                        prepend-icon="mdi-email" type="text" variant="underlined"
                        class="text-brown-lighten-3 font-weight-light" :error-messages="errorMessageWrongEmail">
                      </v-text-field>

                      <v-text-field v-model="user.password" label="password" id="password" name="password"
                        prepend-icon="mdi-lock" type="password" variant="underlined" class="text-brown-lighten-3"
                        :error-messages="errorMessageWrongPassword"></v-text-field>
                    </v-form>
                  </v-col>

                  <v-col>
                    <h3 class="text-center my-4 text-disabled">
                      Forget Your Password
                    </h3>
                  </v-col>

                  <v-col>
                    <v-row class="d-flex justify-center">
                      <v-btn rounded variant="text" class="mt-2 bg-lime-darken-1" @click="registerAlreadyUser(user)">SING
                        IN</v-btn>
                    </v-row>
                  </v-col>
                </v-card-text>
              </v-col>
              <!-- ------sağ taraff------------- -->
              <v-col class="bg-brown-lighten-4">
                <v-card-text class="text-center mt-12">
                  <h1 class="text-h3">Hello, Friends</h1>
                  <h5 class="text-center text-disabled text-h6">
                    Enter Your Personnel Details and Start Shopping
                  </h5>
                </v-card-text>
                <v-col>
                  <v-row class="d-flex justify-center">
                    <v-btn rounded variant="text" @click="step++" class="ma-6 bg-lime-darken-1">SING UP</v-btn>
                  </v-row>
                </v-col>
              </v-col>
            </v-row>
          </v-window-item>

          <!-- -----------------------pencere 2------------------------ -->
          <v-window-item :value="2">
            <v-row class="" style="width: 100vh">
              <v-col cols="5" class="color1">
                <v-card-text class="mt-12 text-center">
                  <h1 class="text-h3">Welcome Back !</h1>
                  <h5 class="text-center text-h7 ml-4">
                    To Keep Connected With Us Please Login With Ypur Personnel
                    İnfo
                  </h5>
                </v-card-text>
                <v-col>
                  <v-row class="d-flex justify-center">
                    <v-btn rounded @click="step--" class="color2">SING IN</v-btn>
                  </v-row>
                </v-col>
              </v-col>

              <v-col cols="7" class="bg-lime-lighten-5">
                <v-card-text class="mt-12">
                  <h1 class="text-center text-lime-darken-3">CREATE ACCOUNT</h1>
                  <v-col cols="12">
                    <v-row class="text-center mt-4">
                      <v-col>
                        <v-img src="/public/assets/icons8-facebook.svg" alt="HEMHAL" height="50">
                        </v-img>
                      </v-col>
                      <v-col>
                        <v-img src="/public/assets/icons8-google-plus.svg" alt="HEMHAL" height="50">
                        </v-img>
                      </v-col>
                      <v-col>
                        <v-img src="/public/assets/icons8-linkedin.svg" alt="HEMHAL" height="50">
                        </v-img>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col>
                    <h4 class="text-center">
                      Ensure Your Email For Registiration
                    </h4>
                  </v-col>

                  <v-col>
                    <v-text-field density="compact" :autofocus="true" label="fullName" name="fullName"
                      v-model="user.fullName" prepend-icon="mdi-human" type="text" variant="underlined"
                      class="text-lime-darken-3">
                    </v-text-field>
                    <v-text-field density="compact" label="email" name="email" v-model="user.email"
                      prepend-icon="mdi-email" type="text" variant="underlined" class="text-lime-darken-3"
                      :error-messages="errorMessageWrongPassword">
                    </v-text-field>
                    <v-text-field density="compact" v-model="user.password" label="password" id="password" name="password"
                      prepend-icon="mdi-lock" type="password" variant="underlined"
                      class="text-lime-darken-3"></v-text-field>
                    <v-text-field density="compact" label="passwordcheck" v-model="user.passwordcheck" id="passwordcheck"
                      name="password" prepend-icon="mdi-lock" type="password" variant="underlined"
                      class="text-lime-darken-3" :error-messages="errorPasswordCheck"></v-text-field>
                  </v-col>
                  <v-col class="text-red-darken-3 ml-10">
                    {{ msg }}
                  </v-col>
                  <v-col>
                    <v-row class="d-flex justify-center">
                      <v-btn rounded class="mt-2 bg-lime-darken-1" @click="registerNewUser()">SING UP</v-btn>
                    </v-row>
                  </v-col>
                </v-card-text>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-card>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapActions, mapState, storeToRefs } from "pinia";
import { useProductStore } from "../../store/useProductStore";
// import firebase from "firebase/compat/app";
// import { Database } from "firebase/database";

// import {
//   collection,
//   addDoc,
//   doc,
//   getDoc,
//   query,
//   getDocs,
// } from "firebase/firestore";
// import db from "../../firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  updateProfile,
  updateEmail,
} from "firebase/auth";
import { anyTypeAnnotation } from "@babel/types";

export default defineComponent({
  name: "loginpage",
  props: {
    source: String,
  },
  data() {
    return {
      admin: null as any,
      userList: [] as any,
      user: {} as any,
      currentUser: [] as any,
      status: Boolean as any,
      step: 1,
      errorPasswordCheck: "" as any,
      errorMessageWrongEmail: "" as any,
      errorMessageWrongPassword: "" as any,
      errorEmailValidate: "" as any,
      msg: "" as any,
    };
  },
  computed: {
    ...mapState(useProductStore, ["getAdminInfo", "getUserList"]),
  },
  created() {
    //this.createUser();
    this.getAdmin();
  },
  watch: {
    getUserList(newVal, oldVal) {
      console.log(this.getUserList)
      if (newVal) {
        console.log(newVal, oldVal, "WATCH");


      }
    },
  },
  methods: {
    ...mapActions(useProductStore, [
      "createUser",
      "getAdmin",
      "setNewTokenStatus",
      "setNewToken"
    ]),
    registerAlreadyUser(user: any) {
      this.admin = this.getAdminInfo;
      console.log(this.getUserList, "TÜM KULLANICILAR");
      this.currentUser = this.getUserList.filter(
        (x: any) => x.email == user.email
      );
      console.log(this.currentUser, "SUANKİ KULLANICI")
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((res: any) => {
          //LOCAL STORAGE
          let token: string = res.user.ma;
          let userId: string = res.user.uid;
          //let userAdminStatus: any = this.currentUser;
          let adminInfo: string = this.currentUser[0].fullName.toLocaleUpperCase();
          localStorage.setItem("adminInfo", adminInfo);
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          //localStorage.setItem("userAdminStatus", userAdminStatus);
          // this.setNewTokenStatus(true);
          // this.setNewToken(true);
          // localStorage.removeItem("pm2tokenstatus");
          // localStorage.removeItem("pm2token");

          //admin adresini getir:::

          // console.log(this.currentUser.filter((x:any) => x.isAdmin == true).isAdmin, "CURRENT ADMIN")
          // console.log(this.currentUser[0].isAdmin, "ALL")
          // console.log(res, "OOO")

          if (this.currentUser[0].isAdmin == false) {
            this.$router.push("/")
          } else {
            this.status = true;
            localStorage.setItem("getUserTokenStatus", this.status);
            this.$router.push("/dashboard");
          }
        })
        .catch((error: any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (
            errorCode == "auth/user-not-found" &&
            errorCode == "auth/invalid-email"
          ) {
            this.errorMessageWrongEmail = "Lütfen Mailinizi Kontrol Edin !!";
          } else if (errorCode == "auth/wrong-password") {

            this.errorMessageWrongPassword = "Lütfen Şifrenizi Kontrol Edin !!";
          }
          console.log(errorCode);
        });
    },
    registerNewUser() {
      const auth = getAuth();
      if (this.user.password != this.user.passwordcheck) {
        this.errorPasswordCheck =
          "Girdiğiniz şifre uyuşmuyor. Lütfen tekrar deneyin !";
      } else {
        createUserWithEmailAndPassword(
          auth,
          this.user.email,
          this.user.password
        )
          .then((res: any) => {
            console.log(res.user, "NEW USER");
            let token: string = res.user.ma;
            let userId: string = res.user.uid;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            //update 'display name'
            // updateProfile(auth.currentUser, {
            //   displayName: this.user.fullName
            // }).then(() => {
            //   console.log(auth.currentUser?.displayName)
            // })
            this.createUser(this.user);
            this.$router.push("/");
            const user = res.user;
          })
          .catch((error: any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/email-already-in-use") {
              this.msg = "Bu kullanıcıya ait hesap bulunmakta!";
            } else if (errorCode == "auth/invalid-email")
              this.errorMessageWrongPassword =
                "E-mail Doğru Validasyonda Değil ! ";
            console.log(errorCode, "CODE");
          });
      }
    },
  },
});
</script>
<style scoped>
.color5 {
  background-color: #847577;
}

.color4 {
  background-color: #e3d5ca;
}

.color3 {
  background-color: #d6ccc2;
}

.color2 {
  background-color: rgb(236, 218, 193);
}

.color1 {
  background-color: rgb(192, 174, 150);
}
</style>
