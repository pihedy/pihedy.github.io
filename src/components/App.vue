<script setup lang="ts">

import Header from '@/elements/global/Header.vue';
import Footer from '@/elements/global/Footer.vue';

</script>

<template>

    <div class="max-w-4xl mx-auto space-y-8">
        
        <Header />

        <router-view></router-view>

        <Footer />
    </div>

</template>
