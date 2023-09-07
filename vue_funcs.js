// > Search (input)
/* 
// input
<v-text-field v-model="searchText" placeholder="Search"></v-text-field>
// method
if (this.searchText) {
    var s = this.searchText;
    let returnData = _.filter(users, function (value) {
    if (value) {
        return (
            value.first_name && value.first_name.toLowerCase().indexOf(s.toLowerCase()) > -1 ||
            value.last_name && value.last_name.toLowerCase().indexOf(s.toLowerCase()) > -1 ||
            value.nick_name && value.nick_name.toLowerCase().indexOf(s.toLowerCase()) > -1 
        );
    }
    });
    this.selectedUser = returnData[0];
    return returnData;
} 
*/


// > Filter (dropdown menu)
/*
// filter dropdown menu
<v-select :items="['All', 'My Team', 'Company', 'Department']" v-model="selectedFilter"></v-select>
// data
<v-col cols="3" v-for="(data, index) in visibleUsers" :key="index">
    <v-card>
        // data goes here ...
    </v-card>
</v-col>
// method
visibleUsers(){
    return _.orderBy(this.filterText, ['first_name'],['asc'])
},
filterText() {
    let users = this.users
    let depts = this.depts
    
    if (this.selectedFilter == "ALL") {
        users = this.users
    }
    else if (this.selectedFilter == "My Team") {
        users = this.users.filter(a => a.reporting.team == this.user.reporting.team)
        console.log('users:', this.users);
    }
    else if (this.selectedFilter == "Department" ){
        users = this.users.filter(a => a.reporting.department == this.user.reporting.department)
    }
    else if (this.selectedFilter == "Company") {
        users = this.users.filter(a => a.company_ID == this.user.company_ID )
    }else if (this.selectedFilter == "My Favorites" ){
        let favorites = []
        for(let x = 0; x < this.user.my_favorites.length; x++){
            favorites.push(this.user.my_favorites[x])
        }
        users = this.users.filter(a => favorites.some(fav => fav === a._id))
    }
    if (this.searchText) {
        var s = this.searchText;
        let returnData = _.filter(users, function (value) {
            if(value){
            return (
                value.first_name && value.first_name.toLowerCase().indexOf(s.toLowerCase()) > -1 ||
                value.last_name && value.last_name.toLowerCase().indexOf(s.toLowerCase()) > -1 ||
                // value.personal && value.personal.designation && value.personal.designation.toLowerCase().indexOf(s.toLowerCase()) > -1 ||
                // value.personal && value.personal.phone && value.personal.phone.toLowerCase().indexOf(s.toLowerCase()) > -1 ||
                // value.reporting && value.reporting.department && value.reporting.department.toLowerCase().indexOf(s.toLowerCase()) > -1 ||
                // value.reporting && value.reporting.team && value.reporting.team.toLowerCase().indexOf(s.toLowerCase()) > -1 ||
                // value.email && value.email.toLowerCase().indexOf(s.toLowerCase()) > -1 ||
                // value.emp_id && value.emp_id.toLowerCase().indexOf(s.toLowerCase()) > -1
                value.nick_name && value.nick_name.toLowerCase().indexOf(s.toLowerCase()) > -1
            )
            }
        })
        this.selectedUser = returnData[0]
        console.log('search result: ', this.selectedUser);
        return returnData
    }
    else {
        return users
    }
},
*/



















// Favorites (list)
/* 
// icon
<v-btn text small max-width="fit-content" height="fit-content" class="mr-2" contain>
    <v-img :src="getFavoriteColor(data)" @click="addFavorite(data._id)"></v-img>
</v-btn >
// method
addFavorite(id){
    const token =  this.$store.getters.getToken
    const AuthStr = 'Bearer '.concat(token)

    let abc = this.user

    if(abc.hasOwnProperty('my_favorites') == false){
        abc.my_favorites = []
        abc.my_favorites.push(id)
        abc.my_favorites = _.uniq(abc.my_favorites) // removing duplicates from array
    } else {
        if( !abc.my_favorites.includes(id)){
            abc.my_favorites.push(id)
            abc.my_favorites = _.uniq(abc.my_favorites) // removing duplicates from array
        } else {
            abc.my_favorites = _.without(abc.my_favorites, id) // removing user from favorites
        }
    }
    let arr = [];
    arr.push(abc);
    this.$axios.$put('users/update/'+ abc._id, arr, {headers: { Authorization: AuthStr }})
    .then(res => {
        // do nothing for now
    }).catch(res =>{})
},
getFavoriteColor(val){
    let abc = this.user.my_favorites.filter(a => a == val._id)
    if(abc.length > 0) return this.fvrsrc = '/spotlight/star-filled.svg'
    else return '/spotlight/star.svg'
},
 */

// show user info
/* 
getImage(val){
    let image = 'https://nathanhroperations.s3.amazonaws.com/profile_pics/Sahiba_T/avatar-7.png'
    if(this.users.length > 0){
        let abc = this.users.filter(a => a._id == val)
        if(abc.length > 0){
            if(abc[0].hasOwnProperty('image_url')){
                if(abc[0].image_url != '') image = abc[0].image_url
            }
        }
    }
    return image
},
getUserInfo() {
    const token =  this.$store.getters.getToken
    const AuthStr = 'Bearer '.concat(token);

    this.user = this.$store.getters.getUser
    this.currentYear = new Date().toISOString().substr(0,10)

    let abc = this.$axios.$get("/wfh/today/all", {headers: { Authorization: AuthStr }})
    .then(res =>{
        for(let i = 0;i<res.length;i++){
            this.todayWfh.push(res[i].user_id)
        }
        
        // this.todayWfh = res
    }).catch()

    let leaveReq = this.$axios.$get("/leaves/today/all", {headers: { Authorization: AuthStr }})
    .then(res =>{
        for(let i = 0;i<res.length;i++){
            this.todayLeave.push(res[i].user_id)
        }
        // this.todayWfh = res
    }).catch()
},
getTodayStatus(){

},
onloadUser(){
    this.selectedUser = this.users[0]
},
        
*/

// > online/offline mark
/* 
// badge
<v-badge :color="getTodaysAttendance(data._id)">
    <v-avatar><v-img aspect-ratio="1" :src="getImage(data._id)" alt="user profile pic"></v-img></v-avatar>
</v-badge>
// method
getOnlineUsersList(id) {
    let onlineUsersNow = this.onlineUsersNow.includes(id) 
    if (onlineUsersNow) {
        return 'green'
    } else {
        return 'red'
    }
},
*/


// Map Tracker ( from (point A) to (point B) )
// Map.vue
/*
<template lang="">
    <div>
      <GmapMap
        ref="mapRef"
        :center="position"
        :zoom="13"
        map-type-id="terrain"
        style="width: 100%; height: 300px"
      >
        <GmapMarker
          :key="index"
          ref='marker_ref'
          :position="position"
          :clickable="true"
          :draggable="true"
          :shape="shape"
          @click="emitClicked"
          @drag="emitClicked"
        />
      </GmapMap>
    </div>
  </template>
  <script>
  import { Ref } from 'vue'
  export default {
    props:{
position:{
  type:[Object]
}
    },
    mounted() {
      // At this point, the child GmapMap has been mounted, but
      // its map has not been initialized.
      // Therefore we need to write mapRef.$mapPromise.then(() => ...)
  
      this.$refs.mapRef.$mapPromise.then((map) => {
        map.panTo({ lat: 25.1972, lng: 55.2744 })
      })
    },
    data() {
      return {
      //  position:{
        
      //  },
         shape: {
          coords: [25.2016, 55.2453, 25.1972, 55.2744],
          type: 'poly'
        },
      }
    },
    methods:{
      emitClicked(e){
        console.log(e,"e")

       let marker = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        this.$emit("clickedMarker",marker)
      }
    }
  }
  </script>
  <style lang="scss"></style>
  
*/

// Direction.vue
/* 
<template lang="">
  <div>
    <gmap-map
      ref="mapRef"
      :center="{ lat: 25.2048, lng: 55.2708 }"
      :zoom="20"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
    >
      <GmapMarker
        :position="markers[0].position"
        :clickable="true"
        :draggable="true"
        :shape="shape"
        @click="center = m.position"
      />
      <GmapMarker
        :position="markers[1].position"
        :clickable="true"
        :draggable="true"
        :shape="shape"
        @click="center = m.position"
      />
      <DirectionsRenderer
        travelMode="DRIVING"
        :origin="`${markers[0].position.lat}, ${markers[0].position.lng}`"
        :destination="`${markers[1].position.lat}, ${markers[1].position.lng}`"
      />
    </gmap-map>
  </div>
</template>
<script>
import DirectionsRenderer from '@/components/Map/DirectionRenderer.js'
export default {
  props: {
    location: {
      type: Object,
    },
    destination: {
      type: Object,
    },
  },
  components: {
    DirectionsRenderer,
  },
  mounted() {
    this.getPoints()
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({
        lat: newVal.location.latitude,
        lng: newVal.location.longitude,
      })
      this.map = map
    })
  },
  watch: {
    location: {
      deep: true,
      handler(newVal) {
        this.markers[1].position.lat = newVal.location.latitude
        this.markers[1].position.lng = newVal.location.longitude
        this.directionsOptions.route.origin = this.markers[1].position
        this.directionsOptions.route.destination = this.markers[0].position

        console.log(newVal, this.markers[1].position)
        this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({
        lat: newVal.location.latitude,
        lng: newVal.location.longitude,
      })
      this.map = map
    })
      },
    },
  },
  data() {
    return {
      markers: [
        {
          position: {
            lat: 25.1972,
            lng: 55.2744,
          },
        },
        {
          position: {
            lat: 25.1972,
            lng: 55.2744,
          },
        },
      ],
      shape: {
        coords: [25.2016, 55.2453, 25.1972, 55.2744],
        type: 'poly',
      },
      directionsOptions: {
        route: {
          origin: {
            lat: 25.2016,
            lng: 55.2453,
          }, // Starting point
          destination: {
            lat: 25.1972,
            lng: 55.2744,
          }, // Ending point
        },
      },
      path: [
        { lat: 25.2016, lng: 55.2453 },
        { lat: 25.1972, lng: 55.2744 },
        { lat: 25.1972, lng: 55.2744 },
        {
          lat: 25.0758214,
          lng: 55.1406285,
        },
        {
          lat: 25.072998,
          lng: 55.1582587,
        },
      ],
      polylineOptions: {
        strokeColor: '#FF0000', // Color, of the polyline (red in this example)
        strokeOpacity: 1.0, // Opacity of the polyline (1.0 is fully opaque)
        strokeWeight: 2, // Width of the polyline
      },
      map: undefined,
    }
  },
  methods: {
    async getPoints() {
      try {
        const resp = await this.$axios.$post(
          'https://maps.googleapis.com/maps/api/directions/json?origin=25.075926, 55.140349&destination=25.073088,55.158502&key=AIzaSyCcjGKv6shjDFenjaJ4TovJ0qg_Hi7jCgg&mode=driving',
          {
            headers: {
              mode: 'no-cors',
            },
          }
        )
        console.log(resp)
      } catch {}
    },
  },
}
</script>
*/

// DirectionRenderer.js
/* 
import { MapElementFactory } from "vue2-google-maps";
export default MapElementFactory({
  name: "directionsRenderer",
  ctr() {
    return window.google.maps.DirectionsRenderer;
  },
  events: [],
  mappedProps: {},
  props: {
    origin: { type: Object },
    destination: { type: Object },
    travelMode: { type: String }
  },

  afterCreate(directionsRenderer) {
    let directionsService = new window.google.maps.DirectionsService();
    this.$watch(
      () => [this.origin, this.destination, this.travelMode],
      () => {
        let { origin, destination, travelMode } = this;
        if (!origin || !destination || !travelMode) return;
        directionsService.route(
          {
            origin,
            destination,
            travelMode
          },
          (response, status) => {
            if (status !== "OK") return;
            directionsRenderer.setDirections(response);
          }
        );
      }
    );
  }
});
*/













































