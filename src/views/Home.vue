<template>
  <v-container fluid class="text-center">
    <v-container fluid id="intro" style="height: 100vh;">
      <h1
        class="title-name"
        style="margin-top: 23vh; font-size: 3.3rem; font-weight: 300;"
      >
        Full Stack Web Developer
      </h1>
      <h2 style="letter-spacing: 0.167em; font-weight: 300;">
        2 YEARS EXPERIENCE IN DESIGNING SLEEK APPS
      </h2>
      <h3
        style="
          font-size: 2rem;
          color: #0a122a;
          font-weight: 300;
          margin-top: 2.2rem;
        "
      >
        I build websites that look simple and classy.<br />
        I believe that simplicity is the future of modern technology and trends!
      </h3>
      <v-btn
        href="#gallery"
        depressed
        style="margin: 6.5rem 6px 0 6px; background: #fac748;"
      >
        Read On
        <v-icon style="margin-left: 4px;"
          >mdi-chevron-down-circle-outline</v-icon
        >
      </v-btn>
      <v-btn
        href="/mail"
        depressed
        style="margin: 6.5rem 6px 0 6px; color: #fac748; background: #2c2f33;"
      >
        Mail Me
        <v-icon style="margin-left: 4px;">mdi-mail</v-icon>
      </v-btn>
    </v-container>
    <v-container fluid id="gallery">
      <h1
        class="title-name"
        style="margin: 1rem 0; font-size: 2.5rem; font-weight: 300;"
      >
        My Gallery
      </h1>
      <v-layout wrap>
        <v-flex>
          <v-list-item v-for="(pic, i) in pics" :key="i" two-line>
            <v-list-item-avatar tile size="55%">
              <v-img
                :src="pic.src"
                style="margin: 1rem 0; border-radius: 25px;"
              />
            </v-list-item-avatar>
            <v-list-item-content class="text-left">
              <v-list-item-title
                style="
                  color: #005588;
                  font-size: 2.2rem;
                  font-weight: 400;
                  letter-spacing: 0.15em;
                "
              >
                {{ i + 1 }}. {{ pic.name.toUpperCase() }}
              </v-list-item-title>
              <v-divider style="background-color: #005588; margin: 20px 0;" />
              <div>
                <h2
                  style="
                    font-size: 1.5rem;
                    font-weight: 400;
                    line-height: 2.3rem;
                  "
                >
                  {{ pic.desc }}
                </h2>
                <br />
                <v-btn
                  depressed
                  dark
                  rounded
                  style="background: #005588;"
                  :href="pic.link"
                  >Visit Website</v-btn
                >
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid id="skill">
      <h1
        class="title-name"
        style="margin: 1rem 0; font-size: 2.5rem; font-weight: 300;"
      >
        Skill Set
      </h1>
      <v-layout wrap justify-center>
        <v-card dark max-width="500" style="margin: 5px; background: #2c2f33;">
          <v-card-title class="justify-center">Languages</v-card-title>
          <v-card-text>
            <v-chip
              light
              color="#48b8d0"
              style="margin: 5px;"
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
        style="margin: 1rem 0; font-size: 2.5rem; font-weight: 300;"
      >
        About Me
      </h1>
      <v-layout wrap justify-center align-center>
        <v-avatar size="15%"><v-img src="../assets/Self.png"></v-img></v-avatar>
        <v-card dark max-width="500" style="margin: 1rem; background: #2c2f33;">
          <div class="text-left" style="margin: 0.5rem 1rem;">
            <span class="overline">Hello, I'm</span>
            <br />
            <span style="font-size: 1.8rem; font-weight: 300; color: #48b8d0;"
              >Ratul Saha</span
            >
            <br />
            <div style="font-size: 1.3rem; font-weight: 300; margin: 1rem 0;">
              I am a self-taught full-stack web developer with multiple years of
              experience. I am 17 years old and I am from India. Currently, I am
              looking for internships to further develop my skillset and an
              arsenal of knowledge!
            </div>
          </div>
          <v-card-actions>
            <v-spacer />
            <v-btn href="#contact" text color="#48b8d0">
              Contact Me
            </v-btn>
            <v-btn href="/resume" text color="#48b8d0">
              Download Resume
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
      <div style="margin-top: 3rem;" id="contact">
        <v-list-item-title
          style="margin: 1rem 0; font-size: 2.5rem; font-weight: 300;"
          >Contact Me</v-list-item-title
        >
        <v-btn
          class="text-lowercase"
          href="/mail"
          target="_blank"
          text
          style="margin: 6px; font-size: 1rem;"
        >
          <v-icon style="margin-right: 4px; color: #48b8d0;">mdi-mail</v-icon>
          me@thatanonymous.me
        </v-btn>
        <v-btn
          class="text-capitalize"
          href="https://twitter.com/ThatAnonyG"
          target="_blank"
          text
          style="margin: 6px; font-size: 1rem;"
        >
          <v-icon style="margin-right: 4px; color: #48b8d0;"
            >mdi-twitter</v-icon
          >
          @ThatAnonyG
        </v-btn>
        <v-btn
          class="text-capitalize"
          href="https://dsc.bio/ThatAnonyG"
          target="_blank"
          text
          style="margin: 6px; font-size: 1rem;"
        >
          <v-icon style="margin-right: 4px; color: #48b8d0;"
            >mdi-discord</v-icon
          >
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
    pics: [
      {
        name: "Xenus",
        src: "https://i.imgur.com/9JAHMFR.png",
        link: "https://xenus.xyz",
        desc:
          "Xenus is a multi purpose discord bot which aims to the most configurable one out there. This is the dashboard and homepage of Xenus.",
      },
      {
        name: "VA-Lite",
        src: "https://i.imgur.com/HOpFWPB.png",
        link: "https://valite.tech",
        desc:
          "VA-Lite is a simple, to the point discord bot developed at VorteK Academy. This is the dashboard and homepage of VA-Lite.",
      },
      {
        name: "LavaJS",
        src: "https://i.imgur.com/Lomokqy.png",
        link: "https://lavajs.tech",
        desc:
          "LavaJS is a open-source LavaLink wrapper focused on efficiency and easy of use. This is the documentation for LavaJS.",
      },
    ],
    skills: [
      {
        name: "JavaScript ES6 | HTML5 | CSS3",
        icon: "mdi-web",
      },
      {
        name: "TypeScript",
        icon: "mdi-language-typescript",
      },
      {
        name: "Java",
        icon: "mdi-language-java",
      },
      {
        name: "NodeJS",
        icon: "mdi-nodejs",
      },
      {
        name: "Vuetify",
        icon: "mdi-vuetify",
      },
      {
        name: "VueJS",
        icon: "mdi-vuejs",
      },
      {
        name: "Bootstrap 4",
        icon: "mdi-bootstrap",
      },
      {
        name: "GoLang",
        icon: "mdi-language-go",
      },
    ],
  }),
  mounted() {
    VANTA.WAVES({
      el: "#intro",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });
  },
};
</script>
