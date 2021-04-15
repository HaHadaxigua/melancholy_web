<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box">
      <div class="content">
        <v-tags></v-tags>
        <div class="content">
          <router-view v-slot="{ Component }">
            <transition name="move" mode="out-in">
              <keep-alive :include="tagList">
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
          <!-- <el-backtop target=".content"></el-backtop> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import vHeader from "../components/Header.vue"
import vSidebar from "../components/Sidebar.vue"
import vTags from "../components/Tags.vue"

import {getCurrentInstance} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "Home",
  components: {
    vHeader,
    vSidebar,
    vTags
  },
  computed: {
    tagList() {
      return this.$store.state.tagsList.map(item => item.name);
    },
  },
  setup(props: any) {
    const {ctx} = getCurrentInstance();
    const router = useRouter();
  },
  data() {
    const fileListItem = {
      name: 'Download',
      date: '2016-05-02',
      size: '5.6G'
    };
    const fileList = [
      fileListItem,
    ]
    const multipleSelection = []
    return {
      fileList,
      // fileList: Array(10).fill(fileListItem),
      multipleSelection
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
<style scoped>
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left .3s ease-in-out;
  transition: left .3s ease-in-out;
}

.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>>
