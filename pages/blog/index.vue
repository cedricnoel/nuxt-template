<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Blog post</h1>
                <p>Bienvenu {{ currentUser.username }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <ul>
                    <li v-for="post in posts" :key="post.id">
                        {{ post.title }} - 
                        <button class="btn btn-xs btn-primary" @click="toPost(post.id)">Go</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="post-number">Post number</label>
                    <input type="text" id="post-number" v-model="Bid" name="post-number">
                </div>
                <div class="form-group">
                    <button @click="onClickPost">Go</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Bid: '',
            currentUser: this.$store.state.users
        }
    },
    methods: {
        onClickPost() {
            this.$router.push('/blog/' + this.Bid)
        }, 
        toPost(id) {
            this.$router.push('/blog/' + id)
        }
    },
    async asyncData({ $axios }) {
        const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
        return { posts }
    }
}
</script>

