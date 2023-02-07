<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card>
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center text-lime-darken-3">
                          SING IN HEMHAL
                        </h1>
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

                        <v-row>
                          <v-col>
                             <h4 class="text-center  ">
                            Ensure Your Email For Registiration
                          </h4>
                          </v-col>
                         
                        </v-row>
                        <v-col>
                          <v-form fast-fail @submit.prevent>
                            <v-text-field label="email" name ="email" class="text-lime-darken-3">
                           
                            </v-text-field>

                            <v-text-field label="password" class="text-lime-darken-3"></v-text-field>

                            <v-btn type="submit" block class="mt-2"
                              >Submit</v-btn
                            >
                          </v-form>
                        </v-col>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item :value="2"> </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
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
.leftLogin {
  background-color: rgb(192, 174, 150);
}
.rightLogin {
  background-color: rgb(236, 218, 193);
}
</style>
