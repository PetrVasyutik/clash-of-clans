<template>
  <div class="wrapper">
    <mainHeader />
    <div class="wrapper-content">
      <section>
        <div class="container">
          <div class="view-sm isCenter">
            <router-view />
          </div>
        </div>
      </section>
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
