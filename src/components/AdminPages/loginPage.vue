<template>
  <v-col cols="12" sm="8" md="8">
    <v-row align="center" justify="center">
      <v-card variant="elevated">
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-row class="fill-height">
              <v-col cols="12" md="8"  class="bg-brown-lighten-5">
                <v-card-text class="mt-12">
                  <h1 class="text-center text-brown-lighten-3">SING IN HEMHAL</h1>
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
                        label="email"
                        name="email"
                        prepend-icon="mdi-email"
                        type="text"
                        variant="underlined"
                        class="text-brown-lighten-3 font-weight-light"
                      >
                      </v-text-field>

                      <v-text-field
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
                    <h3 class="text-center my-4 text-disabled">Forget Your Password</h3>
                  </v-col>

                  <v-col>
                    <v-row class="d-flex justify-center">
                      <v-btn rounded variant="text" type="submit" class="mt-2 bg-lime-darken-1"
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
            <v-row class="fill-height">
              <v-col  class="color1">
                <v-card-text class="mt-12 text-center">
                  <h1 class="text-h3">Welcome Back !</h1>
                  <h5 class="text-center text-h6">
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
                        label="name"
                        name="name"
                        prepend-icon="mdi-human"
                        type="text"
                        variant="underlined"
                        class="text-lime-darken-3"
                      >
                      </v-text-field>
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
                    </v-form>
                  </v-col>

                  <v-col>
                    <v-row class="d-flex justify-center">
                      <v-btn rounded type="submit" class="mt-2 bg-lime-darken-1"
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

export default defineComponent({
  name: "loginpage",
  data() {
    return {
      step: 1,
      email: null,
    };
  },
  props: {
    source: String,
  },
});
</script>
<style scoped>
.color5{
  background-color: #847577;
}
.color4{
  background-color: #E3D5CA;
}
.color3 {
  background-color: #d6ccc2;
}
.color2 {
  background-color: rgb(236, 218, 193);
}

.color1{
  background-color: rgb(192, 174, 150);
}
</style>
