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
      :limit="1"
      :on-exceed="handleExceed"
      :on-change="change"
    >
      <el-button size="small" type="warning">选择上传</el-button>

      <div slot="tip" class="el-upload__tip">
        只能上传md/pdf文件，且不超过5000kb
      </div>
    </el-upload>
    <el-button size="small" type="warning">重置选择</el-button>
    <el-button size="small" type="warning" @click="upload()">确认上传</el-button>
  </section>
</template>
<script>
import { uploadNote } from '@/api/note'

export default {
  data() {
    return {
      confirm: false,
      noteFile: {},
    };
  },
  methods: {
    change(file) {
      console.log(file);
      this.noteFile = file;
    },
    upload() {
      console.log(this.noteFile);
      uploadNote(this.noteFile).then((res) => {console.log(res)});

    },
    handleRemove(file, fileList) {
      console.log("after");
      console.log("file" + file);
      console.log("fileList" + fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed() {
      this.$message.warning(
        `files is limited 1 count`
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