<template>
    <div>
      <page-header/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <page-aside/>
    </div>
</template>

<script>
import pageAside from "../components/layout/pageAside.vue";
import pageHeader from "../components/layout/pageHeader.vue";

export default {
  components: {pageAside, pageHeader},
  data() {
    return {
      
    };
  }
};
</script>

<style>

</style>