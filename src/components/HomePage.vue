<template>
  <v-card flat
  >
	<v-toolbar
  	color="primary"
  	dark
  	extended
  	flat
	>
	</v-toolbar>

	<v-card
  	class="mx-auto"
  	max-width="700"
  	style="margin-top: -64px; padding: 5px;"
	>
  	<v-toolbar flat>
    	<v-toolbar-title class="primary--text">
        	<v-btn
            	text
            	color="primary"
            	@click="showFeedback = false"
        	>
            	Picha!
        	</v-btn>
    	</v-toolbar-title>

    	<v-spacer></v-spacer>

    	<v-btn
        	text
        	color="primary"
        	@click="goToGraphic"
    	>
      	Graphic
    	</v-btn>

    	<v-spacer></v-spacer>

    	<v-btn
        	text
        	:color="!showFeedback ? 'primary' : 'orange lighten-2'"
        	@click="showFeedback = !showFeedback"
        	v-text="!showFeedback ? 'Feedback' : 'Back'"
    	>
       	 
    	</v-btn>
   	 
  	</v-toolbar>

  	<v-divider></v-divider>

  	<v-card-text>
    	<div class="d-flex flex-wrap justify-center"
      	v-if="!showFeedback"
    	>
      	<photo-card
        	class="mx-auto"
        	v-for="card in cards"
        	:key="card.id"
        	:card="card"
      	/>
    	</div>
    	<div v-if="showFeedback">
      	<feedback-form></feedback-form>
    	</div>
  	</v-card-text>
	</v-card>
  </v-card>
</template>

<script>
import PhotoCard from './photo/PhotoCard.vue';
import FeedbackForm from './feedback/FeedbackForm.vue';
import Photo from '../services/photos';

export default {
  name: 'HomePage',
  components: {
  	PhotoCard,
  	FeedbackForm,
  },
  mounted() {
	Photo.index().then(response => {
  	this.cards = response.data;
	}).catch((error) => {
  	console.log(error)
	})
  },
  data() {
  	return {
    	cards: [],
    	showFeedback: false,
  	};
  },
  methods: {
	goToGraphic() {
  	this.$router.push({
    	name: 'PhotosPerDate',
  	});
	},
  },
}
</script>

<style>
</style>
