<script setup lang="ts">

import { Pickaxe } from 'lucide-vue-next';

import ProjectList from '@/elements/global/ProjectList.vue';

import projects from '@/data/projects.json';

</script>

<template>
    <header class="space-y-4">
        <h1 class="text-2xl font-bold flex items-center gap-3">
            <Pickaxe class="w-6 h-6" />
            Projects
        </h1>

        <p class="text-slate-400 max-w-2xl">I work on my leisure projects using new technologies. Check out my <a href="https://github.com/pihedy" class="text-slate-50 font-bold">GitHub</a>.</p>
    </header>

    <ProjectList :projects="projects" :featured="false" />
</template>
