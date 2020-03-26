<template>
  <div>
		<div class="d-flex justify-center" >
    <v-alert
		:value="showMessageBar"
      dismissible
      :type="messageColor"
      border="left"
      elevation="2"
			dense
      icon="mdi-firework"
    >{{currentMessage}}</v-alert>
		</div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
			alert: true, 
			dismiss:true
    };
  },
  computed: {
    ...mapGetters( ['getMessage']),
    messageColor() {
      return this.getMessage.messageColor;
    },

    currentMessage() {
      return this.getMessage.message;
		},
		
		showMessageBar() {
			console.log(this.getMessage.message.length > 0)
      return this.getMessage.message.length > 0;
    },
  },
  methods: {
    ...mapActions(['clearMessage']),
    closeMessageBar() {
      this.clearMessage();
    }
  }
};
</script>