(function(e){function t(t){for(var n,o,s=t[0],u=t[1],l=t[2],v=0,d=[];v<s.length;v++)o=s[v],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"cart"},[r("p",[e._v("Cart ("+e._s(e.cart.length)+")")])]),r("product",{attrs:{premium:e.premium},on:{"add-to-cart":e.updateCart,"remove-from-cart":e.removeFromCart}})],1)},i=[],o=(r("a434"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"product"},[r("div",{staticClass:"product-image"},[r("img",{attrs:{src:e.image,alt:e.description}})]),r("div",{staticClass:"product-info"},[r("h1",[e._v(e._s(e.title))]),e.inStock?r("p",[e._v("In Stock")]):r("p",{class:{line:!e.inStock}},[e._v("Out of Stock")]),r("p",[e._v(e._s(e.sale))]),r("p",[e._v(e._s(e.shipping))]),r("detail",{attrs:{details:e.details}}),e._l(e.variants,(function(t,n){return r("div",{key:t.variantId,staticClass:"color-box",style:{backgroundColor:t.variantColor},on:{mouseover:function(t){return e.updateImage(n)}}})})),r("button",{class:{disabledButton:!e.inStock},attrs:{disabled:!e.inStock},on:{click:e.addToCart}},[e._v(" Add to Cart ")]),r("button",{class:{disabledButton:!e.inStock},attrs:{disabled:!e.inStock},on:{click:e.removeFromCart}},[e._v(" Empty Cart ")]),r("product-tabs",{attrs:{reviews:e.reviews}})],2)])}),s=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._l(e.tabs,(function(t,n){return r("span",{key:n,staticClass:"tab",class:{activeTab:e.selectedTab===t},on:{click:function(r){e.selectedTab=t}}},[e._v(" "+e._s(t)+" ")])})),r("div",{directives:[{name:"show",rawName:"v-show",value:"Reviews"===e.selectedTab,expression:"selectedTab === 'Reviews'"}]},[r("h2",[e._v("Reviews")]),e.reviews.length?e._e():r("p",[e._v("There are no reviews yet")]),r("ul",e._l(e.reviews,(function(t,n){return r("li",{key:n},[r("ul",[r("li",[e._v(e._s(t.name))]),r("li",[e._v(e._s(t.review))]),r("li",[e._v(e._s(t.rating))])])])})),0)]),r("product-review",{directives:[{name:"show",rawName:"v-show",value:"Make a Review"===e.selectedTab,expression:"selectedTab === 'Make a Review'"}]})],2)},l=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"review-form",on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e.errors.length?r("div",[r("b",[e._v("Please correct the following error(s):")]),e._l(e.errors,(function(t){return r("p",{key:t},[e._v(e._s(t))])}))],2):e._e(),r("div",[r("label",{attrs:{for:"name"}},[e._v(" Name: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("div",[r("label",{attrs:{for:"review"}},[e._v(" Review: ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],attrs:{id:"review"},domProps:{value:e.review},on:{input:function(t){t.target.composing||(e.review=t.target.value)}}})]),r("div",[r("label",{attrs:{for:"rating"}},[e._v("Rating")]),r("select",{directives:[{name:"model",rawName:"v-model.number",value:e.rating,expression:"rating",modifiers:{number:!0}}],attrs:{id:"rating"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(t){var r="_value"in t?t._value:t.value;return e._n(r)}));e.rating=t.target.multiple?r:r[0]}}},[r("option",[e._v("5")]),r("option",[e._v("4")]),r("option",[e._v("3")]),r("option",[e._v("2")]),r("option",[e._v("1")])])]),e._m(0)])},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{attrs:{type:"submit",value:"submit"}})])}],d=(r("b0c0"),new n["a"]);console.log(d);var p={name:"ProductReview",props:{},data:function(){return{name:null,review:null,rating:null,errors:[]}},methods:{onSubmit:function(){if(this.name&&this.review&&this.rating){var e={name:this.name,review:this.review,rating:this.rating};d.$emit("review-submitted",e),this.name="",this.review="",this.rating="",this.errors=[]}else this.name||this.errors.push("Name required"),this.review||this.errors.push("Review required"),this.rating||this.errors.push("Rating required")}}},m=p,f=r("2877"),h=Object(f["a"])(m,c,v,!1,null,null,null),b=h.exports,w={components:{ProductReview:b},name:"ProductTabs",props:{reviews:{type:Array,required:!0}},data:function(){return{tabs:["Reviews","Make a Review"],selectedTab:"Reviews"}}},g=w,_=Object(f["a"])(g,u,l,!1,null,null,null),y=_.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",e._l(e.details,(function(t){return r("li",{key:t},[e._v(e._s(t))])})),0)},S=[],C={name:"Detail",props:{details:{type:Array,required:!0}}},x=C,O=Object(f["a"])(x,k,S,!1,null,null,null),j=O.exports;console.log(d);var P={components:{ProductTabs:y,Detail:j},name:"Product",props:{premium:{type:Boolean,required:!0}},data:function(){return{brand:"Jommy",product:"Socks",onSale:!0,description:"Socks",selectedVariant:0,details:["80% cotton","20% polyester","Gender-neutral"],variants:[{variantId:2234,variantColor:"green",variantImage:"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",variantQuantity:0},{variantId:2236,variantColor:"blue",variantImage:"https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",variantQuantity:10}],reviews:[]}},methods:{addToCart:function(){this.$emit("add-to-cart",this.variants[this.selectedVariant].variantId)},removeFromCart:function(){this.$emit("remove-from-cart",this.variants[this.selectedVariant].variantId)},updateImage:function(e){this.selectedVariant=e}},computed:{title:function(){return this.brand+" "+this.product},image:function(){return this.variants[this.selectedVariant].variantImage},inStock:function(){return this.variants[this.selectedVariant].variantQuantity},sale:function(){return this.onSale?this.brand+" "+this.product+" on sale!":this.brand+" "+this.product+" not on sale!"},shipping:function(){return this.premium?"Free Shipping":"Shipping: $2.99"}},mounted:function(){var e=this;d.$on("review-submitted",(function(t){e.reviews.push(t)}))}},T=P,R=Object(f["a"])(T,o,s,!1,null,null,null),$=R.exports,I={components:{Product:$},data:function(){return{premium:!1,cart:[]}},methods:{updateCart:function(e){this.cart.push(e)},removeFromCart:function(e){for(var t=this.cart.length-1;t>=0;t--)this.cart[t]===e&&this.cart.splice(t,1)}}},E=I,M=(r("034f"),Object(f["a"])(E,a,i,!1,null,null,null)),N=M.exports,q=r("8c4f");n["a"].use(q["a"]);var V=[],F=new q["a"]({mode:"hash",base:"/",routes:V}),A=F,B=r("2f62");n["a"].use(B["a"]);var D=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:A,store:D,render:function(e){return e(N)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.d5446cf4.js.map