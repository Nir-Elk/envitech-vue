<template>
  <div class="container">

    <span class="text title">{{ getSelectedMonitor.Name }}</span>
    <span class="text subtitle">{{ getSelectedMonitor.Desc }}</span>

    <div class="divider"/>
    <span class="text bold">AQI[level]</span>
    <div v-for="(tag,index) in getLegend.tags" :key="index" class="row">
      <div :style="{'background-color': tag.Color}" class="color-content"></div>
      {{ tag.Label }}
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "MainContent",
  computed: {
    colorStyle() {
      return {
        "background-color": this.bgColor,
        height: `${this.height}px`
      };
    }
    , ...mapGetters(['getLegend', 'getSelectedMonitor'])
  }
};
</script>

<style scoped>

.container{
  height: 100%;
  width: 100%;
  margin: 10px;
  align-content: center;
}

.color-content {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

.title {
  font-size: 1.6rem;
}

.subtitle{
  font-size: 1rem;
  margin-left: 6px;
}

.bold{
  font-size: 1rem;
  font-weight: bold;
}

.divider{
  height: 10px;
}

</style>
