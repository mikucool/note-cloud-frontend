<template>
  <section>
    <el-upload
      :auto-upload="confirm"
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="warning">选择上传</el-button>

      <div slot="tip" class="el-upload__tip">
        只能上传md/pdf文件，且不超过500kb
      </div>
    </el-upload>
    <el-button size="small" type="warning">重置选择</el-button>
    <el-button size="small" type="warning" @click="test()">确认上传</el-button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      backendURL: process.env.VUE_APP_SERVER_URL,
      fileList: [],
      confirm: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log("after");
      console.log("file" + file);
      console.log("fileList" + fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files) {
      this.$message.warning(
        `files is limited 3 counts, you choose ${files.length} file`
      );
    },
    beforeRemove(file, fileList) {
      console.log("file");
      console.log(file)
      console.log("fileList");
      console.log(fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
};
</script>