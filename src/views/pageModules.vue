<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <p class="title">Make Note</p>
          <p class="subtitle">What is up?</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-warning">
          <p class="title">Upload</p>
          <p class="subtitle">
          <upload-note></upload-note>
          </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Download</p>
          <p class="subtitle">With some content</p>
        </article>
      </div>
    </div>

    
  </div>
</template>

<script>
import uploadNote from './load/uploadNote.vue';

export default {
  components: {uploadNote}
};
</script>

<style>
</style>