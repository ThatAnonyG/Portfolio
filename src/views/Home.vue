<template>
  <v-container fluid class="text-center" style="margin-top: 23vh">
    <v-container fluid id="intro">
      <h1 class="title-name" style="font-size: 3.3rem; font-weight: 300">
        Full Stack Web Developer
      </h1>
      <h2 style="letter-spacing: 0.167em; font-weight: 300">
        2+ YEARS EXPERIENCE IN WEB DEVELOPMENT
      </h2>
      <h3
        style="
          font-size: 2rem;
          color: #0a122a;
          font-weight: 300;
          margin-top: 2.2rem;
        "
      >
        I love designing minimal and simple yet classy apps and websites.<br />
        Simplicity and minimalism is my style and I believe that it will be the
        future norm too.
      </h3>
      <v-btn
        href="#gallery"
        depressed
        style="margin: 6.5rem 6px 0 6px; background: #fac748"
      >
        Gallery
        <v-icon style="margin-left: 4px"
          >mdi-chevron-down-circle-outline</v-icon
        >
      </v-btn>
      <v-btn
        href="/api/mail"
        depressed
        style="margin: 6.5rem 6px 0 6px; color: #fac748; background: #2c2f33"
      >
        Mail Me
        <v-icon style="margin-left: 4px">mdi-mail</v-icon>
      </v-btn>
    </v-container>
    <v-container fluid id="gallery" style="margin: 10rem 0">
      <h1 class="title-name" style="font-size: 2.5rem; font-weight: 300">
        My Gallery
      </h1>
      <v-carousel
        cycle
        hide-delimiter-background
        :show-arrows="false"
        height="auto"
        delimiter-icon="mdi-circle-medium"
        next-icon="mdi-arrow-right-circle-outline"
        prev-icon="mdi-arrow-left-circle-outline"
        style="margin-top: 3rem"
      >
        <v-carousel-item v-for="(project, i) in projects" :key="i">
          <v-layout justify-center align-center>
            <div id="project--wrapper">
              <v-img :src="project.img" />
              <div id="project--name">
                <h1
                  style="
                    font-weight: 300;
                    font-size: 1.8rem;
                    font-family: Raleway;
                  "
                >
                  {{ project.name }}
                </h1>
              </div>
              <div class="text-left" id="project--overlay">
                <div
                  style="
                    font-family: Raleway;
                    font-size: 1.2rem;
                    width: 70%;
                    margin: 3rem 0 0 3rem;
                  "
                >
                  {{ project.desc }}
                </div>
                <v-btn depressed text style="margin: 2rem; color: #fac748"
                  >Visit Project</v-btn
                >
                Tags:
                <v-chip
                  v-for="(tag, i) in project.tags"
                  :key="i"
                  style="background: #48b8d0; margin: 5px; color: black"
                  >{{ tag }}</v-chip
                >
              </div>
            </div>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    projects: [
      {
        name: "Xenus",
        img: "https://i.imgur.com/BERM2yU.png",
        link: "https://github.com/ThatAnonymousG/Xenus",
        desc:
          "Xenus is a chatbot developed for the Discord platform using their API. Discord is a chat service similar to Slack. It was first developed in Javascript and Typescript but the last revision uses Java.",
        tags: ["Java", "Bot", "Discord", "JS/TS"],
      },
      {
        name: "Vortek Academy",
        img: "https://i.imgur.com/ePogrOk.png",
        link: "https://vortekacademy.com",
        desc:
          "VorteK Academy is an independent tournament organizer and gaming community working in partnership with other figureheads of the Asian Rocket League scene, aiming to spotlight the many talented players across the Asian subcontinent. Our aim and primary goal are to showcase the best of Rocket League.",
        tags: ["Website", "Vuetify", "NodeJS", "Nginx"],
      },
      {
        name: "ActuallyMC",
        img: "https://i.imgur.com/bELvjNZ.png",
        link: "https://actuallymc.live",
        desc:
          "Actually MC is a community of Minecraft players where you can have fun, make friends, chill out or do anything that makes you happy. We are a BE server but every Minecraft player is welcome here. In AMC we want to make sure that the you are entertained and having fun, all while maintaining a friendly environment without toxicity or bullying. As a community we make sure that the user safety is always our top priority.",
        tags: ["Website", "Vuetify", "Nginx"],
      },
      {
        name: "LavaJS",
        img: "https://i.imgur.com/Lomokqy.png",
        link: "https://lavajs.tech",
        desc:
          "LavaJS is a open-source wrapper for the Lavalink API focused on efficiency and easy of use. Lavalink is a standalone audio sending node based on Lavaplayer (Discord audio library).",
        tags: ["Website", "NodeJS", "Nginx", "NPM", "API"],
      },
    ],
  }),
};
</script>

<style scoped>
#project--wrapper {
  height: 70%;
  width: 70%;
}

#project--overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: inherit;
  height: 100%;
  display: none;
  background: #000000;
  opacity: 0.8;
}

#project--name {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  width: inherit;
  height: 30%;
  display: none;

  display: block;
  background: linear-gradient(to top, black, transparent);
}
#project--name h1 {
  bottom: 20%;
  left: 5%;
  position: absolute;
}

#project--wrapper:hover #project--overlay {
  display: block;
}
#project--wrapper:hover #project--name {
  display: none;
}
</style>
