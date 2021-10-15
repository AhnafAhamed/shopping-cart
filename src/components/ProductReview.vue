<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <p v-for="error in errors" :key="error">{{ error }}</p>
    </div>
    <div>
      <label for="name"> Name: </label>
      <input id="name" v-model="name" />
    </div>

    <div>
      <label for="review"> Review: </label>
      <textarea id="review" v-model="review"></textarea>
    </div>

    <div>
      <label for="rating">Rating</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </div>

    <div>
      <input type="submit" value="submit" />
    </div>
  </form>
</template>

<script>
import { eventBus } from "../utils/eventBus"
console.log(eventBus)
export default {
  name: "ProductReview",
  props: {},
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: [],
    }
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
        }
        eventBus.$emit("review-submitted", productReview)
        //we are emitting the productReview object when onSubmit is clicked
        this.name = ""
        this.review = ""
        this.rating = ""
        this.errors = []
      } else {
        if (!this.name) this.errors.push("Name required")
        if (!this.review) this.errors.push("Review required")
        if (!this.rating) this.errors.push("Rating required")
      }
    },
  },
}
</script>

<style></style>
