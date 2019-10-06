<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
      <v-list>
        <v-list-item v-for="(item) in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="brown darken-4" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn to="/login">SIGN IN</v-btn>
        <v-btn color="brown lighten-3" to="/register">REGISTER</v-btn>
      </div>
      <div v-else>
        <v-btn outlined color="white" @click="logout">Logout</v-btn>
      </div>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'Buy-Something',
      drawer: false,
      items: [{ title: 'Menu' }, { title: 'Sign In' }, { title: 'Register' }]
      //isAuthenticated: false
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/userSignOut');
    }
  }
};
</script>

<style scoped>
</style>