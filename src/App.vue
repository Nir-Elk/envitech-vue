<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar>
        <Header />
      </md-app-toolbar>
      <md-app-content class='full-height'>
        <MainContent />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Legends from './assets/Legends.json';
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import {mapActions} from 'vuex';


export default {
  name: 'App',
  components: {
    Header,
    MainContent,
  },
  methods: {...mapActions(["fetchData"])},
  created() {
    this.fetchData(Legends);
  },

}
</script>

<style>

body {
  height: 100%;
  overflow: hidden;
}

.md-app,
.page-container {
  height: 100%;
}

.text {
  font-family: "Roboto", sans-serif !important;
  color: darkslategray;
  font-size: 12px;
  font-weight: 400;
}

.row {
  display: flex;
  flex-direction: row;
}

.two-columns {
  display: flex;
  justify-content: space-between;
}

.inherit-width {
  width: inherit;
}

.center {
  display: flex;
  align-items: center;
}



</style>
