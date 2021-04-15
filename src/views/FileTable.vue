<template>
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
</template>

<script>
export default {
  name: "FileTable"
}
</script>

<style scoped>

</style>
