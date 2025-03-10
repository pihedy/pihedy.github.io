<script setup lang="ts">

import { Pickaxe } from 'lucide-vue-next';
import { MoveRight } from 'lucide-vue-next';

</script>

<template>
    <section id="projects-list" class="space-y-6">

        <div class="flex items-center justify-between">

            <div class="flex items-center gap-2">
                <Pickaxe />
                <h2 class="text-lg font-bold">Featured Projects</h2>
            </div>

            <a href="#" class="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                View all 
                <MoveRight class="w-4 h-4" />
            </a>

        </div>

        <div class="grid md:grid-cols-2 gap-6">
            asdasdasd
        </div>
    </section>
</template>
