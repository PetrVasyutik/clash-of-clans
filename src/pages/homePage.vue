<template>
    <carousel :itemsToShow="2" :wrapAround="true" :snapAlign="center" :breakpoints="breakpoints">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <mainCard
          :name="`${item.lvl} lvl`"
          :title="item.title"
          :imgUrl="item.img"
          :link="`/${item.alias}`"
          :dscr="item.dscr"
        >
          <template v-slot:body>
            {{ item.dscr }}
          </template>
          <template v-slot:footer>
            <cardStats />
          </template>
        </mainCard>
      </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>
<script>
import mainCard from '../components/UI/mainCard.vue';
import items from '../seeders/items.js';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import cardStats from '@/components/UI/cardStats.vue';

export default {
  components: {
    mainCard,
    Carousel,
    Slide,
    Navigation,
    cardStats,
  },
  data() {
    return {
      items: items,
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 2,
        }
      }
    }
  }
}
</script>

