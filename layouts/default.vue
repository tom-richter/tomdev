<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <v-btn text rounded to="/">Home</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text rounded v-bind="attrs" v-on="on">Geocaching</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-btn text to="/geocaching/gpx-builder">GPX-Builder</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text to="/">Mehrfach-Peilung</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text rounded v-bind="attrs" v-on="on">Diverses</v-btn>
        </template>
        <v-list>
          <v-btn text to="/major-trainer">Major System Trainer</v-btn>
        </v-list>
      </v-menu>
      <v-btn text rounded to="/contact">Kontakt</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer padless class="font-weight-medium">
      <v-col class="text-center" cols="12"> Impressum | Datenschutz </v-col>
    </v-footer>
  </v-app>
</template>
