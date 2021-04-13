<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
  </div>
</template>
<script lang="ts">
import vHeader from "../components/Header.vue"
import vSidebar from "../components/Sidebar.vue"

export default {
  name: "Home",
  components: {
    vHeader,
    vSidebar
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
};
</script>
<style scoped>
</style>>
