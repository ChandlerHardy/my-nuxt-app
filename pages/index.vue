<template>
    <div>
        <h1>Welcome to My Nuxt App</h1>
        <p>This is the homepage.</p>
        <nuxt-link to="/about">Go to About Page</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: 'HomePage'
    }
</script>

<style scoped>
    h1 {
        color: #2c3e50;
    }
</style>