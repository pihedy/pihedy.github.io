<script setup lang="ts">

import { Pickaxe, MoveRight } from 'lucide-vue-next';

import ProjectList from '@/elements/global/ProjectList.vue';

import projects from '@/data/projects.json';

</script>

<template>
    <section id="projects-list" class="space-y-6 pt-4">

        <div class="flex items-center justify-between">

            <div class="flex items-center gap-2">
                <Pickaxe />
                <h2 class="text-lg font-bold">Featured Projects</h2>
            </div>

            <router-link to="/projects" class="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                View all 
                <MoveRight class="w-4 h-4" />
            </router-link>

        </div>

        <ProjectList :projects="projects" :featured="true" />
    </section>
</template>
