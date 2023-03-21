// #API Styles#
// Vue components can be authored in two different API styles: Options API and Composition API.

// 1. Options API
// With Options API, we define a component's logic using an object of options
// object of options such as data, methods, and mounted.
// Properties defined by options are exposed on this inside functions, which points to the component instance:

//<script>
export default {
  // Properties returned from data() becomes reactive state and will be exposed on `this`.
  data() {
    return {
      count: 0,
      showBooks: false,
      books:[{},{},{}]
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++
    },
    showBooks() {
      this.showBooks = true
    },
    addBook(title, author) {
      this.books.push({title, author})
    }
  },

  // Lifecycle hooks are called at different stages of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
//</script>

//<template>
  <button @click="increment">Count is: {{ count }}</button>
//</template>

// 2. Composition API
// With Composition API, we define a component's logic using imported API functions.
// In SFCs, Composition API is typically used with <script setup>
// The setup attribute is a hint that makes Vue perform compile-time transforms that allow us to use Composition API with less boilerplate
// For example, imports and top-level variables / functions declared in <script setup> are directly usable in the template.
//<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
//</script>

//<template>
  <button @click="increment">Count is: {{ count }}</button>
//</template>

// Composition API (New way to write you code and organize it):
// export default {
//   setup() {    
//     # data
//     # method
//     # computed
//     # lifecycle hooks
//   }
// }

// NOTE: Diffrence btween "ROUTE" & "ROUTER"
$route // to get info about the current route.
$router // we use it when we want to do something. (eg: Go Back / Go Forward / Redirect)
// NOTE: with "$router" we use "this.$router.go(-/+ num)".


// *************************************************************************************************************************TODO

// Vuex State Management Pattern ibrary

// Installation
$npm install vuex @next--save

// Core Concepts
// Create a folder "store" inside it make a js file "store.js".
// store.js
import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance
const store = createStore({  
  state() { 
    return {
      // Central Data. (Shared Data)
    }
  },
  getters: {
    // Copy of Changes Data.(Not Traked)
  },
  mutations: {
    // Changes Data.(Changing Data Directly)
    // Cant Commit Sync Data Directly. (Only Throw Actions)
  },
  actions: {
    // Commit Sync Data to Mutaions.
  }
})

// Modals
// Vuex allows us to divide our store into modules. 
// Each module can contain its own state, mutations, actions, getters, and even nested modules.
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> `moduleA`'s state
store.state.b // -> `moduleB`'s state

// Advanced
