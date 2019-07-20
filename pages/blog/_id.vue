<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Welcome on post {{ $route.params.id }}</h1>
                <h2>{{ post.title }}</h2>
                <p>{{ post.body }}</p>
                <NuxtLink to="/blog">
                    Back to blog page
                </NuxtLink>
            </div>
        </div>
        <div class="row" v-if="!comments">
            <div class="col-md-12">
                <p class="text-primary">Loading content...</p>
            </div>
            <div class="col-md-12">
                <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-md-12">
                <h3>Comments</h3>
            </div>
            <div class="col-md-12">
                <ul>
                    <li v-for="comment in comments" :key="comment.id">
                        <ul>
                            <li>{{ comment.name }}</li>
                            <li>Email: {{ comment.email }}</li>
                            <li>
                                {{ comment.body }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    validate({ params }) {
        // Doit être un nombre
        return /^\d+$/.test(params.id)
    },
    async asyncData({ $axios, params }) {
        const post = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id)
        const comments = await $axios.$get('https://jsonplaceholder.typicode.com/comments?postId=' + params.id)

        return { post, comments }
    }
}
</script>

