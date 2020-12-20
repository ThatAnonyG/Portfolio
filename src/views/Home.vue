<template>
  <v-container fluid class="text-center">
    <v-container fluid id="intro" style="height: 100vh">
      <h1
        class="title-name"
        style="margin-top: 23vh; font-size: 3.3rem; font-weight: 300"
      >
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
        Read On
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
    <v-container fluid id="gallery">
      <h1
        class="title-name"
        style="margin: 1rem 0; font-size: 2.5rem; font-weight: 300"
      >
        My Gallery
      </h1>
      <v-carousel
        cycle
        hide-delimiter-background
        :show-arrows="false"
        delimiter-icon="mdi-circle-medium"
        next-icon="mdi-arrow-right-circle-outline"
        prev-icon="mdi-arrow-left-circle-outline"
        height="auto"
      >
        <v-carousel-item v-for="(project, i) in projects" :key="i">
          <v-layout justify-center align-center>
            <v-img :src="project.img" max-height="70%" max-width="70%" />
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container fluid id="skill">
      <h1
        class="title-name"
        style="margin: 1rem 0; font-size: 2.5rem; font-weight: 300"
      >
        Skill Set
      </h1>
      <v-layout wrap justify-center>
        <v-card dark max-width="500" style="margin: 5px; background: #2c2f33">
          <v-card-title class="justify-center">Languages</v-card-title>
          <v-card-text>
            <v-chip
              light
              color="#48b8d0"
              style="margin: 5px"
              v-for="x in skills"
              :key="x.name"
            >
              <v-avatar left>
                <v-icon>{{ x.icon }}</v-icon>
              </v-avatar>
              {{ x.name }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
    <v-container fluid id="bio">
      <h1
        class="title-name"
        style="margin: 1rem 0; font-size: 2.5rem; font-weight: 300"
      >
        About Me
      </h1>
      <v-layout wrap justify-center align-center>
        <v-avatar size="15%"
          ><v-img src="https://i.imgur.com/BHrS4DY.png"></v-img
        ></v-avatar>
        <v-card dark max-width="500" style="margin: 1rem; background: #2c2f33">
          <div class="text-left" style="margin: 0.5rem 1rem">
            <span class="overline">Hello, I'm</span>
            <br />
            <span style="font-size: 1.8rem; font-weight: 300; color: #48b8d0"
              >Ratul Saha</span
            >
            <br />
            <div style="font-size: 1.3rem; font-weight: 300; margin: 1rem 0">
              I am a self-taught full-stack web developer with multiple years of
              experience. I am 17 years old and I am from India. Till date I
              have worked on more than 12 projects. Currently, I am looking for
              internships to further develop my skill-set and build an arsenal
              of knowledge!
            </div>
          </div>
          <v-card-actions>
            <v-spacer />
            <v-btn href="#contact" text color="#48b8d0"> Contact Me </v-btn>
            <v-btn href="/api/resume" text color="#48b8d0">
              Download Resume
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
      <div style="margin-top: 3rem" id="contact">
        <v-list-item-title
          style="margin: 1rem 0; font-size: 2.5rem; font-weight: 300"
          >Contact Me</v-list-item-title
        >
        <v-btn
          class="text-lowercase"
          href="/api/mail"
          target="_blank"
          text
          style="margin: 6px; font-size: 1rem"
        >
          <v-icon style="margin-right: 4px; color: #48b8d0">mdi-mail</v-icon>
          me@thatanonymous.me
        </v-btn>
        <v-btn
          class="text-capitalize"
          href="https://twitter.com/ThatAnonyG"
          target="_blank"
          text
          style="margin: 6px; font-size: 1rem"
        >
          <v-icon style="margin-right: 4px; color: #48b8d0">mdi-twitter</v-icon>
          @ThatAnonyG
        </v-btn>
        <v-btn
          class="text-capitalize"
          href="https://dsc.bio/ThatAnonyG"
          target="_blank"
          text
          style="margin: 6px; font-size: 1rem"
        >
          <v-icon style="margin-right: 4px; color: #48b8d0">mdi-discord</v-icon>
          Anonymous Guy#8444
        </v-btn>
      </div>
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
      },
      {
        name: "Vortek Academy",
        img: "https://i.imgur.com/ePogrOk.png",
        link: "https://vortekacademy.com",
        desc:
          "VorteK Academy is a gaming community for like minded gamers. This website is the official homepage of VA where one can find all their info.",
      },
      {
        name: "ActuallyMC",
        img: "https://i.imgur.com/bELvjNZ.png",
        link: "https://actuallymc.live",
        desc: "",
      },
      {
        name: "LavaJS",
        img: "https://i.imgur.com/Lomokqy.png",
        link: "https://lavajs.tech",
        desc:
          "LavaJS is a open-source LavaLink wrapper focused on efficiency and easy of use. This is the documentation for LavaJS.",
      },
    ],
    skills: [
      {
        name: "JavaScript",
        icon: "mdi-language-javascript",
      },
      {
        name: "Python",
        icon: "mdi-language-python",
      },
      {
        name: "Java",
        icon: "mdi-language-java",
      },
      {
        name: "HTML5 | CSS3",
        icon: "mdi-web",
      },
      {
        name: "TypeScript",
        icon: "mdi-language-typescript",
      },
      {
        name: "NodeJS",
        icon: "mdi-nodejs",
      },
      {
        name: "Go",
        icon: "mdi-language-go",
      },
    ],
  }),
};
</script>
