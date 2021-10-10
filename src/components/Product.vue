<template>
  <div class="product">
    <div class="product-image">
      <img :src="image" :alt="description" />
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else :class="{ line: !inStock }">Out of Stock</p>
      <p>{{ sale }}</p>
      <p>{{ shipping }}</p>
      <detail :details="details" />
      <div
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateImage(index)"
      ></div>
      <button
        :class="{ disabledButton: !inStock }"
        v-on:click="addToCart"
        :disabled="!inStock"
      >
        Add to Cart
      </button>
      <button
        :class="{ disabledButton: !inStock }"
        v-on:click="removeFromCart"
        :disabled="!inStock"
      >
        Empty Cart
      </button>

      <product-tabs :reviews="reviews"></product-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "Vue"

export default {
  name: "Product",
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      brand: "Jommy",
      product: "Socks",
      onSale: true,
      description: "Socks",
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
          variantQuantity: 0,
        },
        {
          variantId: 2236,
          variantColor: "blue",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
          variantQuantity: 10,
        },
      ],
      reviews: [],
    }
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId)
    },
    removeFromCart() {
      this.$emit(
        "remove-from-cart",
        this.variants[this.selectedVariant].variantId
      )
    },
    updateImage: function (index) {
      this.selectedVariant = index
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
      if (this.onSale) {
        return this.brand + " " + this.product + " on sale!"
      } else {
        return this.brand + " " + this.product + " not on sale!"
      }
    },
    shipping() {
      if (this.premium) {
        return "Free Shipping"
      } else {
        return "Shipping: $2.99"
      }
    },
  },
  mounted() {
    var eventBus = new Vue()
    eventBus.$on("review-submitted", (productReview) => {
      this.reviews.push(productReview)
    })
  },
}
</script>

<style></style>
