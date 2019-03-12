<template>
    <div id="app">
        <header-component/>
        <router-view/>
        <footer-component/>
    </div>
</template>


<script>
    import FooterComponent from './components/Footer';
    import HeaderComponent from './components/Header';

    export default {
        components: {
            FooterComponent
            , HeaderComponent
        },
        name: 'App'
    }
</script>
<style>

</style>
