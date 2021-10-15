<template>
  <div>
    <span
      class="tab"
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectedTab = tab"
    >
      {{ tab }}
    </span>

    <div v-show="selectedTab === 'Reviews'">
      <h2>Reviews</h2>
      <p v-if="!reviews.length">There are no reviews yet</p>
      <!--Only shows this message when the reviews array is empty-->
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          <ul>
            <li>{{ review.name }}</li>
            <li>{{ review.review }}</li>
            <li>{{ review.rating }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <product-review v-show="selectedTab === 'Make a Review'" />
  </div>
</template>

<script>
import ProductReview from "./ProductReview.vue"
export default {
  components: { ProductReview },
  name: "ProductTabs",
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tabs: ["Reviews", "Make a Review"],
      selectedTab: "Reviews",
    }
  },
}
</script>

<style></style>
