<template>
   <v-toolbar height="50" class="kayanKapsayıcı">
        <strong class="kayanyazi">
            <span>
            Black Friday sales have started!! 20% discount on all products...
            Black Friday sales have started. 20% discount on all products.. Black
            Friday sales have started. 20% discount on all products..
            </span>
        </strong>
    </v-toolbar>

</template>

<style scoped>
.kayanKapsayıcı{
    background-color: rgb(192, 174, 150);
}
.kayanyazi {
  background-color: rgb(192, 174, 150);
  color: white;
  height: 35px;
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  font-size: large;
}
.kayanyazi span {
  display: inline-block;
  padding-left: 100%;
  text-indent: 0;
  animation: marquee 35s linear infinite;
}
.kayanyazi span:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>