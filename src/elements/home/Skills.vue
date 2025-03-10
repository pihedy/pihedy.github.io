<script setup lang="ts">

import { LightbulbIcon } from 'lucide-vue-next';

</script>

<template>
    <section id="skills" class="card">

        <div class="flex items-center gap-2 mb-6">
            <LightbulbIcon class="w-5 h-5" />
            <h2 class="text-lg font-bold">Technical Skills</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">

            <div>
                <h3 class="text-slate-400 mb-2">Languages</h3>
                <p class="text-sm">PHP, TypeScript, JavaScript, Ruby, C++</p>
            </div>

            <div>
                <h3 class="text-slate-400 mb-2">Frameworks</h3>
                <p class="text-sm">Laravel, Symfony, Slim, PHPUnit, Express, VueJS, Bootstrap</p>
            </div>

            <div>
                <h3 class="text-slate-400 mb-2">Databases</h3>
                <p class="text-sm">PostgreSQL, MongoDB, Redis, MySQL, SQLite</p>
            </div>

            <div>
                <h3 class="text-slate-400 mb-2">Tools</h3>
                <p class="text-sm">Vagrant, Docker, Git, Bitbucket Pipelines</p>
            </div>

        </div>
    </section>
</template>
