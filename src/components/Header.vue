<template>
    <div>
        <div id="preloader">
            <div id="status">&nbsp;</div>
        </div>

        <section id="myID" class="bottomMenu hom3-top-menu">
            <div class="container top-search-main">
                <div class="row">
                    <div class="ts-menu i4-top">
                        <!--SECTION: LOGO-->
                        <div class="ts-menu-1">
                            <router-link to="/"><img src="assets/images/aff-logo.png" alt=""> </router-link>
                        </div>
                        <!--SECTION: BROWSE CATEGORY(NOTE:IT'S HIDE ON MOBILE & TABLET VIEW)-->
                        <div class="ts-menu-2"><a href="#" class="t-bb">Menu <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                            <!--SECTION: BROWSE CATEGORY-->
                            <div class="cat-menu cat-menu-1">
                                <div class="dz-menu">
                                    <div class="dz-menu-inn">
                                        <h4>Frontend Pages</h4>
                                    </div>
                                    <div class="dz-menu-inn">
                                        <h4>Frontend Pages</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!--SECTION: SEARCH BOX-->
                        <div class="ts-menu-3">
                            <div class="">
                                <form class="tourz-search-form tourz-top-search-form">
                                    <div class="input-field">

                                    </div>
                                    <div class="input-field">
                                        <input type="text" id="top-select-search" class="autocomplete">
                                        <label for="top-select-search" class="search-hotel-type">Ara</label>
                                    </div>
                                    <div class="input-field">
                                        <input type="submit" value="" class="waves-effect waves-light tourz-top-sear-btn"> </div>
                                </form>
                            </div>
                        </div>
                        <!--SECTION: REGISTER,SIGNIN AND ADD YOUR BUSINESS-->
                        <div class="ts-menu-4">
                            <div class="v3-top-ri">
                                <ul>
                                    <li><router-link to="/login" class="v3-menu-sign"><i class="fa fa-sign-in"></i> Giriş</router-link> </li>
                                    <li><router-link to="/numara-ekle" class="v3-add-bus"><i class="fa fa-plus" aria-hidden="true"></i> Numara Ekle</router-link> </li>
                                </ul>
                            </div>
                        </div>
                        <!--MOBILE MENU ICON:IT'S ONLY SHOW ON MOBILE & TABLET VIEW-->
                        <div class="ts-menu-5"><span><i class="fa fa-bars" aria-hidden="true"></i></span> </div>
                        <!--MOBILE MENU CONTAINER:IT'S ONLY SHOW ON MOBILE & TABLET VIEW-->
                        <div class="mob-right-nav" data-wow-duration="0.5s">
                            <div class="mob-right-nav-close"><i class="fa fa-times" aria-hidden="true"></i> </div>
                            <h5>Numara Sorgula</h5>
                            <ul class="mob-menu-icon">
                                <li><router-link to="numara-ekle">Numara Ekle</router-link> </li>
                                <li><a data-toggle="modal" data-target="#register">Kayıt</a> </li>
                                <li><a data-toggle="modal" data-target="#sign-in">Giriş</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
