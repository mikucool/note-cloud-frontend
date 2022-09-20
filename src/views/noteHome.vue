<template>
  <div>
    <div>
      <page-header />
    </div>
    <!-- 使用 bulma 做出两列的布局 -->
    <div class="columns mt-3 block">
      <div class="column is-one-third">
        <note-list v-if="true" />
      </div>
      <div class="column">
        <page-modules />
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "../components/layout/pageHeader.vue";
import noteList from "./noteList.vue";
import pageModules from "./pageModules.vue";

export default {
  components: { pageHeader, noteList, pageModules },
  data() {
    return {};
  },
};
</script>

<style>
</style>