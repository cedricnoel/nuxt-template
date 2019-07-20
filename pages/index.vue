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
                <div>
                    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

                    <b-modal id="modal-1" title="BootstrapVue">
                        <p class="my-4">Hello from modal!</p>
                    </b-modal>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="text-primary">Loading content...</p>
                </div>
                <div class="col-md-12">
                    <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
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
import axios from 'axios'

export default {
    components: {
        Logo,
        Footer,
        Navigation
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
