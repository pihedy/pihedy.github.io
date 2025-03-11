<script setup lang="ts">

import { computed, PropType } from 'vue';

import { Github, SquareArrowOutUpRight } from 'lucide-vue-next';


import { Project } from '@/types/Project';

const props = defineProps({
    projects: {
        type: Array as PropType<Project[]>,
        required: true
    },
    onlyFeatured: {
        type: Boolean,
        default: false
    }
});

const projects = computed(() => {
    if (props.onlyFeatured) {
        return props.projects.filter(project => project.featured);
    }

    return props.projects;
});

</script>

<template>

    <div class="grid md:grid-cols-2 gap-6">
        <a :href="project.link" class="card" v-for="project, key in projects" target="_blank" rel="noopener noreferrer" :key="key">

            <div class="flex justify-between items-center gap-4">
                <h3 class="font-bold text-lg text-slate-100 group-hover:text-green-400 transition-colors">
                    {{ project.name }}
                </h3>

                <div class="flex items-center gap-2 text-slate-400">
                    <Github class="w-4 h-4" />
                    <SquareArrowOutUpRight class="w-4 h-4" />
                </div>
            </div>

            <p class="text-sm text-slate-400 line-clamp-2 leading-relaxed pt-4">
                {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 pt-6">
                <span 
                    class="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
                    v-for="tag in project.tags"
                >{{ tag }}</span>
            </div>
        </a>
    </div>

</template>
