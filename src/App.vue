<template>
  <div class="wrapper">
    <mainHeader />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <mainFooter />
  </div>

</template>

<script>
import mainHeader from './components/mainHeader.vue';
import mainFooter from './components/mainFooter.vue';

export default {
  components: {mainHeader, mainFooter},
};
</script>

<style lang="scss"></style>
