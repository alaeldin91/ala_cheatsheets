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







/************************************************************************************ Examples *************************************************************************************/

// npm package for phoneNumber with country code :
// 1. vue-tel-input-vuetify
// 2.vue-phone-number-input


// Input filed for phone number with option to select the country code with the flag
<template>
    <v-container>
    <v-row>
        <v-col cols="3">
        <v-select
            v-model="selectedCountryCode"
            :items="countryCodes"
            label="Country Code"
            item-value="code"
            item-text="name"
            @change="onCountryCodeChanged"
        >
            <template v-slot:prepend-item="{ item }">
            <v-list-item>
                <v-list-item-avatar>
                <v-img :src="item.flag" />
                </v-list-item-avatar>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.code }}</v-list-item-subtitle>
            </v-list-item>
            </template>
        </v-select>
        </v-col>
        <v-col cols="9">
        <v-text-field
            v-model="phoneNumber"
            label="Phone Number"
            type="tel"
        ></v-text-field>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
    return {
        selectedCountryCode: '',
        countryCodes: [],
        phoneNumber: '',
    };
    },
    mounted() {
    this.loadCountryCodes();
    },
    methods: {
    async loadCountryCodes() {
        try {
            const response = await this.$axios.$get('https://example.com/api/country-codes')
            .then(res => {
                const data = res.json()
                this.countryCodes = data.map((item) => ({
                    code: item.code,
                    name: item.name,
                    flag: `https://example.com${item.flagUrl}`,
                }))
                this.selectedCountryCode = this.countryCodes[0].code;
            })
            .catch(err => console.log(err))
        } catch (error) {
            console.error(error);
        }
    },
    onCountryCodeChanged() {
        // do something when the selected country code changes
    },
    },
};
</script>

// Phone Number + Country Code + Country Flag using npm vue-phone-number-input package
<template>
<div>
    <label for="phone">Phone Number</label>
    <PhoneNumberInput
    id="phone"
    v-model="phoneNumber"
    />
</div>
</template>


<script>
import PhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default {
components: {
    PhoneNumberInput,
},
data() {
    return {
    phoneNumber: '',
    };
},
}

</script>



// Uploading pdf/ex/etc files to the DB

// Backend code (to get the file URL)
/** Upload files in AWS */  
router.post('/upload-file', validateToken, async (req, res) => {
  try {
      const s3 = new AWS.S3({
          accessKeyId: ID,
          secretAccessKey: SECRET
      });
      const fileContent = fs.readFileSync(req.files.a.tempFilePath);

      const params = {
          Bucket: BUCKET_NAME + '/' + req.body.folder,
          Key: req.body.b,
          Body: fileContent,
          ACL: 'public-read',
          ContentType: req.files.a.mimetype
      };

      // Uploading files to the bucket
      s3.upload(params, function (err, data) {
          if (err) {
              throw err;
          }
          else {
              // console.log(res)
              res.json({ name: params.Key, url: data.Location })
          }
          console.log(`File uploaded successfully. ${data.Location}`);
      });
  } catch (error) {
      console.log("#log", error);
      res.status(400).json({ message: error.message })
  }
})

// Frontend (use the file URL)
let upload_meta = {
  file: this.uploadFiles[i],
  filename: this.uploadFiles[i].name,
};
await this.uploadFile(upload_meta);
async uploadFile(val) {
     const token = this.$store.getters.getToken;
     const AuthStr = "Bearer ".concat(token);

     const fd = new FormData();
     fd.append("a", val.file, val.name);
     fd.append("b", this.selectedEmp._id + Date.now() + val.file.name);
     fd.append("folder", "claims");

     await this.$axios
       .$post("/requests/upload-file", fd, {
         headers: { Authorization: AuthStr },
       })
       .then((res) => {
         this.link_url = res.url;
         this.link_filename = res.name;
       })
       .catch((e) => console.log(e));
  },