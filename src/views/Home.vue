<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box">
      <div class="content">

        <el-container>
          <el-main>
            <!--    主要表单区域        -->
            <el-row>
              <el-button type="primary" round>上传</el-button>
              <el-button type="primary" round>新建文件夹</el-button>
              <el-button type="primary" round>新建在线文档</el-button>
            </el-row>
            <div style="margin-top: 10px">
              <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
            <el-table ref="multipleTable"
                      :data="fileList"
                      @selection-change="handleSelectionChange"
                      tooltip-effect="dark"
                      style="width: 100%">
              <el-table-column type="selection" width="120">
              </el-table-column>
              <el-table-column prop="name" label="文件名" width="120">
              </el-table-column>
              <el-table-column prop="date" label="修改时间" width="120">
              </el-table-column>
              <el-table-column prop="size" label="大小">
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </div>
    </div>
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
