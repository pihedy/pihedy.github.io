<script setup lang="ts">
</script>

<template>
    <div id="app">
        <header>
            <nav>
                <router-link to="/">Home</router-link>
            </nav>
        </header>

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped>
    #app {
        font-family: Arial, sans-serif;
        text-align: center;
    }

    nav {
        background: #333;
        padding: 1rem;
    }

    nav a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
    }

    nav a:hover {
        text-decoration: underline;
    }
</style>
