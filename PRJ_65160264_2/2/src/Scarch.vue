<script setup>
import Header from './components/Header.vue';
import ManuBar from './components/ManuBar.vue';
import MainSearch from './components/MainSearch.vue';
</script>

<template>
    <body>
        <Header />
        <ManuBar />
        <div class="main">
            <MainSearch />
        </div>
    </body>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #F8FAE5;
}

.main {
    padding: 10px;
    display: 20px 10px;
}

.main h2 {
    margin: 0;
    font-size: large;
}
</style>
