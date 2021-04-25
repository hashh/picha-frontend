<template>
	<v-container fluid>
    	<v-form
        	ref="form"
        	v-model="valid"
        	lazy-validation
    	>
        	<h2>
            	Feedback
        	</h2>
        	<v-text-field
            	v-model="feedback.email"
            	label="Email"
            	:rules="emailRules"
            	required
        	></v-text-field>
        	<v-textarea
            	v-model="feedback.message"
            	label="Message"
            	cleareble
            	:rules="messageRules"
            	required
        	></v-textarea>

        	<v-btn
            	:disabled="!valid"
            	color="success"
            	class="mr-4"
            	@click="submit"
        	>
            	submit
        	</v-btn>

        	<v-btn
            	color="error"
            	class="mr-4"
            	@click="cancel"
        	>
            	cancel
        	</v-btn>
    	</v-form>
	</v-container>
</template>

<script>

export default {
  name: 'FeedbackForm',
  props: {
  },
  data() {
  	return {
    	feedback: {
        	email: null,
        	message: null,
    	},
    	valid: true,
    	messageRules: [
        	v => !!v || 'Message is required',
    	],
    	emailRules: [
        	v => !!v || 'E-mail is required',
        	v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    	],
  	};
  },
  methods: {
  	validate () {
    	this.$refs.form.validate()
  	},
  	reset () {
    	this.$refs.form.reset()
  	},
  	resetValidation () {
    	this.$refs.form.resetValidation()
  	},
  	submit() {
      	this.validate();
  	},
  	cancel() {
      	this.reset();
      	this.resetValidation();
  	},
  },
}
</script>

<style>
</style>
