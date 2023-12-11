<template>
  <vue-recaptcha v-show="showRecaptcha" sitekey="6LdN_yopAAAAAAyQ3GEmrWTe4Sqh6d2Gy2PjclWk"
		 size="normal" 
		 theme="light"
		 hl="es-419"
		 :loading-timeout="loadingTimeout"
		 @verify="recaptchaVerified"
		 @expire="recaptchaExpired"
		 @fail="recaptchaFailed"
		 @error="recaptchaError"
		 ref="vueRecaptcha">
  </vue-recaptcha>
</template>

<script>
import vueRecaptcha from 'vue3-recaptcha2';

export default {
  name: 'app',
  components: {
	vueRecaptcha
  },
  data() {
	return {
		showRecaptcha: true,
		loadingTimeout: 10000, // 30 
		valid:false
	}
  },
  methods: {
	recaptchaVerified(response) {
		this.valid=true;
	},
	recaptchaExpired() {
	  this.$refs.vueRecaptcha.reset();
	  this.valid=false;
	},
	recaptchaFailed() {
		this.valid=false;
	},
	recaptchaError(reason) {
		this.valid=false;
	}
  }
};
</script>