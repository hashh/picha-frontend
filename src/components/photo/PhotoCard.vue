<template>
  <v-card
    class="mb-2"
    max-width="215"
    min-width="215"
  >
    <v-img
      :src="card.image_url"
      height="150px"
    ></v-img>

    <v-card-title id="limittext">
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ published }}
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

    <v-expand-transition
    >
      <div v-show="show"
      >
        <v-card-text id="over" v-html="card.description"
        >
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
  computed: {
      published() {
          return new Date(this.card.fulfilled_on).toLocaleDateString('us')
      },
      title() {
          if (this.card.title == " ") return 'No title';
          return this.card.title;
      },
  },
  data() {
      return {
          show: false,
      };
  },
}
</script>

<style>

#limittext {
    white-space: nowrap;
    text-overflow: "...";
    overflow: hidden;
    max-width: 190px;
}

#over {
    overflow-y: hidden;
    padding-left: 5px;
}
#over > img {
    min-width: 100%;
    min-height: 100%;
}

</style>
