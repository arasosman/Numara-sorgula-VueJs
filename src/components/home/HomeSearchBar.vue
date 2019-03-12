<template>
  <div class="search-bar">
    <section class="i4-header">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="dir-ho-tl">
              <ul>
                <li>
                  <router-link to="/"> </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="dir-ho-tr">
              <ul>
                <li><router-link to="/register">Kayıt</router-link> </li>
                <li><router-link to="/login">Giriş</router-link> </li>
                <li><router-link to="/numara-ekle"><i class="fa fa-plus" aria-hidden="true"></i> Numara Ekle</router-link> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container dir-ho-t-sp">
        <div class="row">
          <div class="dir-hr1 dir-cat-search">
            <div class="dir-ho-t-tit">
              <h1>Ücretsiz Numara Sorgula</h1>
              <p>Sizi arayan numara Dolandırıcı mı? kolayca öğren,<br> Aradığınız numara kimin üzerine kayıtlı kolayca görebilirsiniz.</p>
            </div>
            <form class="cate-search-form" @submit.prevent="onSubmit">
              <div class="input-field">
                <input type="text" id="select-category" v-model="category" class="autocomplete auto-category">
                <label for="select-category">Kategori Seç</label>
              </div>
              <div class="input-field">
                <input type="text" id="select-search" v-model="searchKey" class="autocomplete">
                <label for="select-search">Ne aramak istersiniz?</label>
              </div>
              <div class="input-field">
                <input type="submit" value="search" class="waves-effect waves-light tourz-sear-btn"> </div>
            </form>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
import HomeFindService from './HomeFindService';

export default {
  comments: [HomeFindService],
  name: 'HomeSearchBar',
  props: {
    searchKey:"",
    category:"",
  },
  methods: {
    onSubmit(){
      alert(this.searchKey);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
