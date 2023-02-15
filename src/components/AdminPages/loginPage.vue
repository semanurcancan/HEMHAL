<template>
  <v-col cols="12">
    <v-row class=" mt-16 " align="center" justify="center">
      <v-card variant="elevated">
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
                        <v-img
                          src="/public/assets/icons8-facebook.svg"
                          alt="HEMHAL"
                          height="60"
                        >
                        </v-img>
                      </v-col>
                      <v-col>
                        <v-img
                          src="/public/assets/icons8-google-plus.svg"
                          alt="HEMHAL"
                          height="60"
                        >
                        </v-img>
                      </v-col>
                      <v-col>
                        <v-img
                          src="/public/assets/icons8-linkedin.svg"
                          alt="HEMHAL"
                          height="60"
                        >
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
                      <v-text-field
                        v-model="email"
                        label="email"
                        name="email"
                        prepend-icon="mdi-email"
                        type="text"
                        variant="underlined"
                        class="text-brown-lighten-3 font-weight-light"
                      >
                      </v-text-field>

                      <v-text-field
                        v-model="password"
                        label="password"
                        id="password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        variant="underlined"
                        class="text-brown-lighten-3"
                      ></v-text-field>
                    </v-form>
                  </v-col>

                  <v-col>
                    <h3 class="text-center my-4 text-disabled">
                      Forget Your Password
                    </h3>
                  </v-col>

                  <v-col>
                    <v-row class="d-flex justify-center">
                      <v-btn
                        rounded
                        variant="text"
                        type="submit"
                        class="mt-2 bg-lime-darken-1"
                        @click="registerAlreadyUser()" 
                        >SING IN</v-btn
                      >
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
                    <v-btn
                      rounded
                      variant="text"
                      @click="step++"
                      class="ma-6 bg-lime-darken-1"
                      >SING UP</v-btn
                    >
                  </v-row>
                </v-col>
              </v-col>
            </v-row>
          </v-window-item>

          <!-- -----------------------pencere 2------------------------ -->
          <v-window-item :value="2">
            <v-row class="fill-height" style="width: 100vh">
              <v-col class="color1">
                <v-card-text class="mt-12 text-center">
                  <h1 class="text-h3">Welcome Back !</h1>
                  <h5 class="text-center text-h7">
                    To Keep Connected With Us Please Login With Ypur Personnel
                    İnfo
                  </h5>
                </v-card-text>
                <v-col>
                  <v-row class="d-flex justify-center">
                    <v-btn rounded @click="step--" class="color2"
                      >SING IN</v-btn
                    >
                  </v-row>
                </v-col>
              </v-col>

              <v-col cols="12" md="8" class="bg-lime-lighten-5">
                <v-card-text class="mt-12">
                  <h1 class="text-center text-lime-darken-3">CREATE ACCOUNT</h1>
                  <v-col>
                    <v-row class="text-center mt-4">
                      <v-col>
                        <v-img
                          src="/public/assets/icons8-facebook.svg"
                          alt="HEMHAL"
                          height="60"
                        >
                        </v-img>
                      </v-col>
                      <v-col>
                        <v-img
                          src="/public/assets/icons8-google-plus.svg"
                          alt="HEMHAL"
                          height="60"
                        >
                        </v-img>
                      </v-col>
                      <v-col>
                        <v-img
                          src="/public/assets/icons8-linkedin.svg"
                          alt="HEMHAL"
                          height="60"
                        >
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
                    <v-form>
                      <v-text-field
                        label="email"
                        name="email"
                        prepend-icon="mdi-email"
                        type="text"
                        variant="underlined"
                        class="text-lime-darken-3"
                      >
                      </v-text-field>
                      <v-text-field
                        label="password"
                        id="password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        variant="underlined"
                        class="text-lime-darken-3"
                      ></v-text-field>
                      <v-text-field
                        label="passwordcheck"
                        id="passwordcheck"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        variant="underlined"
                        class="text-lime-darken-3"
                      ></v-text-field>
                    </v-form>
                  </v-col>

                  <v-col>
                    <v-row class="d-flex justify-center">
                      <v-btn rounded type="submit" class="mt-2 bg-lime-darken-1"
                      @click="registerNewUser()"
                        >SING UP</v-btn
                      >
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
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../../store/useProductStore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";

export default defineComponent({
  name: "loginpage",
  props: {
    source: String,
  },
  data() {
    return {
      step: 1,
      email: null as any,
      name: null as any,
      password: null as any,
      passwordcheck: null as any
    };
  },
  mounted(){
  },
 
  methods: {
    registerAlreadyUser(){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password).then((res:any) =>{
        // console.log(res, "RES FİRE BASE");
        //    let token:string = res.user.ma;
        //  let userId:string = res.user.uid;
        //  localStorage.setItem('token', token);
        //  localStorage.setItem('userId', userId);
         this.$router.push('/');
        const user = res.user
      }).catch((error:any)=> {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        console.log(errorMessage)

      })
    },
    registerNewUser() {
      const auth = getAuth();
      console.log("girdi")
      createUserWithEmailAndPassword(auth, this.email, this.password).then((res:any) =>{
        console.log(res, "RES FİRE BASE");
        //    let token:string = res.user.ma;
        //  let userId:string = res.user.uid;
        //  localStorage.setItem('token', token);
        //  localStorage.setItem('userId', userId);
         this.$router.push('/dashboard');
        const user = res.user
      }).catch((error:any)=> {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        console.log(errorMessage)

      })
      // firebase.auth.cre(this.email, this.password).then((res:any) =>{
      //     console.log(res, "RES FİRE BASE");
      //     let token:string = res.user.ma;
      //     let userId:string = res.user.uid;

      //     localStorage.setItem('token', token);
      //     localStorage.setItem('userId', userId);
      //     this.$router.push('/dashboard');

      //   })
      //   .catch(function (error) {
      //     const errorcode = error.code;
      //     const errormessage = error.message;
      //     alert(errormessage)
      //   });
    },
    // ...mapActions(useProductStore, ["getAdminCheck","getAdminName","getAdminEmail","getAdminPassword"]),

    // submit(){
    //   this.getAdminCheck(this.name, this.password)
    //   console.log(this.getAdminName, "STORE NAME")
    //   console.log(this.name, "NAME")
    //   if(this.password != this.getAdminPassword && this.name != this.getAdminName){
    //     this.$router.push({ name: "dashboard", path: "/dashboard" });
    //     console.log(this.email && this.getAdminName, "WWWWW")
    //   }
    // }
  },
  computed: {
    //pinia da mapgetters yok o yuzden getter verisi olan getProduct ...mapstate ile cagırılıyor.
    //...mapState(useProductStore, ["getAdminName", "getAdminPassword"]),
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
