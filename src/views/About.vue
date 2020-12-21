<template>
  <v-container fluid class="text-center" style="margin: 5rem 0">
    <v-container fluid id="bio">
      <h1 class="title-name" style="font-size: 2.5rem; font-weight: 300">
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
              I am a full-stack self-taught web developer from India. I am 17
              years old and till date I have worked on various projects to build
              my knowledge and experience. Currently, I am looking for
              internships to further develop my skill-set and experience!
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
    <v-container style="margin-top: 3rem" id="contact">
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
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data: () => ({
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
