<template>
  <div>
    <div class="cart">
      <p>Cart ({{ cart.length }})</p>
    </div>
    <product
      :premium="premium"
      @add-to-cart="updateCart"
      @remove-from-cart="removeFromCart"
    />
  </div>
</template>

<script>
import Product from "./components/Product.vue"
export default {
  components: { Product },
  data() {
    return {
      premium: false,
      cart: [],
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeFromCart(id) {
      for (let i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1)
        }
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700");

* {
  box-sizing: border-box;
}

body {
  font-family: "IBM Plex Mono", "Helvetica Neue", Tahoma, sans-serif;
  color: #282828;
  margin: 0;
  background: hsl(0, 0%, 98%);
}
.green-bg {
  background-color: green;
}
.blue-bg {
  background-color: blue;
}
.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
}

#app {
  position: relative;
  margin: 30px;
}

.product {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 30px;
}

a {
  color: #1e95ea;
  text-decoration: none;
  font-weight: bold;
}

img {
  display: block;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  max-width: 100%;
  padding: 20px;
  background: #fff;
}

h1 {
  margin: 0.5em 0;
  font-size: 1.75em;
}

.outOfStock {
  text-decoration: line-through;
}

button {
  width: 160px;
  height: 50px;
  margin-bottom: 2em;
  border: none;
  border-radius: 3px;
  background: #1e95ea;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background: darken(#1e95ea, 15%);
}

.disabledButton {
  background-color: #d8d8d8;
}

button,
select {
  font-family: "IBM Plex Mono", "Helvetica Neue", Tahoma, sans-serif;
}
.line {
  text-decoration: line-through;
}
.color-box {
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-right: 0.5em;
  border-radius: 50%;
}

.cart {
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #d8d8d8;
  padding: 1.25em 20px;
  background: #fff;
  border-radius: 3px;
}

.review-form {
  width: 30%;
  padding: 20px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
}

select {
  margin-bottom: 10px;
}

.activeTab {
  color: #1e95ea;
  text-decoration: underline;
}
.tab {
  cursor: pointer;
}
</style>
