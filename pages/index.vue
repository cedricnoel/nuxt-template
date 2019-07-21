<template>
    <div class="content">
        <Navigation />
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <logo />
                    <h1 class="title">nuxt-lab</h1>
                    <h2 class="subtitle">My fine Nuxt.js project</h2>
                    <div class="links">
                        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
                        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p>Bonjour {{ currentUser.username }}</p>
                    <div class="form-group">
                        <label for="">New name</label>
                        <input type="text" ref="username">
                        <button @click="changeName">Change name</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p v-if="currentUser.isLoggedIn">Vous ête connecté</p>
                    <p v-else>Vous n'ête pas connecté</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button @click="logIn">Log In</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/global/navigation/index.vue'
import Footer from '~/components/global/footer/index.vue'

export default {
    data() {
        return {
            currentUser: this.$store.state.users
        }
    },
    components: {
        Logo,
        Footer,
        Navigation
    },
    methods: {
        logIn() {
            this.$store.commit('users/logIn')
        },
        changeName() {
            this.$store.commit('users/setName', this.$refs.username.value)
        }
    }
}
</script>

<style>
.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
