<template>
  <v-card
	class="mb-2"
	max-width="215"
  >
	<v-img
  	:src="card.image_url"
  	height="150px"
	></v-img>

	<v-card-title>
  	{{ card.title }}
	</v-card-title>

	<v-card-subtitle>
  	{{ card.subtitle }}
	</v-card-subtitle>

	<v-card-actions>
  	<v-btn
    	color="orange lighten-2"
    	text
    	:href="card.link"
    	target="_blank"
  	>
    	Explore
  	</v-btn>

  	<v-spacer></v-spacer>

  	<v-btn
    	color="orange lighten-2"
    	text
    	@click="show = !show"
    	v-text="!show ? 'more' : 'less'"
  	>
  	</v-btn>

	</v-card-actions>

	<v-expand-transition>
  	<div v-show="show">
    	<v-divider></v-divider>

    	<v-card-text>
      	{{ card.description }}
    	</v-card-text>
  	</div>
	</v-expand-transition>
  </v-card>
</template>

<script>

export default {
  name: 'PhotoCard',
  props: {
  	card: Object,
  },
  data() {
  	return {
      	show: false,
  	};
  },
}
</script>

<style>
</style>
