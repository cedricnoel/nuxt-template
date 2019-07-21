export const state = () => ({
    username: 'Guest',
    isLoggedIn: false
})

export const mutations = {
    setName(state, newName) {
        state.username = newName
    },
    logIn(state) {
        state.isLoggedIn = true
    }
}