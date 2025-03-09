<script setup lang="ts">

import { MapPin, MailIcon, Github, Linkedin } from 'lucide-vue-next';

</script>

<template>

    <section id="about" class="card">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text">
            Hello everyone! I'm Pihedy. 🐐
        </h1>

        <p class="mt-4 text-slate-400 leading-relaxed">
            I'm a full-stack developer who loves contributing to open source with the home projects.
        </p>

        <div class="flex items-center gap-2 mt-4 text-slate-400">
            <MapPin class="w-5 h-5" />
            <span>Kecskemét, Hungary</span>
        </div>

        <div class="flex gap-4 mt-4">
            <a href="mailto:pihedy@gmail.com" target="_blank">
                <MailIcon class="w-5 h-5" />
            </a>
            <a href="https://github.com/pihedy" target="_blank">
                <Github class="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/pihe-edmond-8612798b" target="_blank">
                <Linkedin class="w-5 h-5" />
            </a>
        </div>
    </section>

</template>
