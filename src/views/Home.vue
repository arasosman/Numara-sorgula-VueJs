<template>
  <div class="home">
    <home-search-bar></home-search-bar>
    <last-seen></last-seen>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSearchBar from '@/components/home/HomeSearchBar.vue';
import LastSeen from '@/components/home/LastSeen.vue';
import NumberService from '../services/number.service'
import ApiService from '../services/api.service'

export default {
  name: 'home',
  data(){
    return {
      yorumlananNumaralar: {},
      sonEklenenNumaralar: {}
    }
  },
  components: {
    HomeSearchBar,
    LastSeen
  },
  created() {
    this.GetCommentNumbers()
  },
  methods: {
    GetCommentNumbers(){
      this.yorumlananNumaralar = {};
      NumberService.GetNumbers().then((res) => {
        console.log(res)
      })
    }
  }

}
</script>

<style>

</style>
