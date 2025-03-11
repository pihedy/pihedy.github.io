<script setup lang="ts">

import ProjectList from '@/elements/global/ProjectList.vue';

import projects from '@/data/projects.json';

</script>

<template>
    <ProjectList :projects="projects" :featured="false" />
</template>
