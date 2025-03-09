<script setup lang="ts"></script>

<template>

    <nav class="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between border-b border-slate-800 pb-4">

        <a href="/" class="flex items-center gap-2">
            <span class="text-xl">
                >_
            </span>
            <span class="font-bold">pihedy@github:~$</span>
        </a>

        <div class="flex gap-4 sm:gap-6 text-sm sm:text-base">
            <router-link to="/">~/home</router-link>
            <router-link to="/blog">~/blog</router-link>
        </div>

    </nav>

</template>
