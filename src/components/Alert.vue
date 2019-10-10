<template>
  <div>
    <v-alert
      v-model="alert"
      dismissible
      :color="messageColor"
      border="left"
      elevation="2"
      colored-border
      dense
      icon="mdi-firework"
    >{{currentMessage}}</v-alert>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      alert: true
    };
  },
  computed: {
    ...mapGetters( ['getMessage']),
    messageColor() {
      return this.getMessage.messageColor;
    },

    currentMessage() {
      return this.getMessage.message;
    }
  },
  methods: {
    ...mapActions(['clearMessage']),
    closeMessageBar() {
      this.clearMessage();
    }
  }
};
</script>