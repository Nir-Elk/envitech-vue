<template>
  <div class="row two-columns inherit-width center">
    <Logo/>
    <div class="row center">


      <md-menu v-for="(monitorType,indexMT) in getMonitorTypes" :key="indexMT" class="margin-left" md-align-trigger>
        <md-button md-menu-trigger>{{ monitorType.Name }}</md-button>
        <md-menu-content class="white-background">
          <md-menu-item v-for="(monitor,indexM) in getMonitors(monitorType.Id)" :key="indexM" @click="setMonitor(monitor.Id)" class="md-clickable">{{monitor.Name}}</md-menu-item>
        </md-menu-content>
      </md-menu>


    </div>
  </div>
</template>

<script>
import Logo from "../assets/vue-logo.svg";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Header",
  components: {
    Logo,
  },
  methods: mapActions(['setMonitor']),
  computed: mapGetters(['getMonitorTypes', 'getMonitors']),
};
</script>

<style scoped>

.margin-left{
  margin-left: 4px;
}

.white-background{
  background-color: white;
}



</style>
