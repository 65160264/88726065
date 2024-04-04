<template>
      <div class="manu">
        <h2>หน้าเว็บนี้จะยกตัวอย่างสถานที่ท่องเที่ยวทางธรรมชาติหรือศาสนาและวัฒนธรรมน่าที่น่าสนใจจากภูมิภาค</h2>
        <hr>
        <p>ค้นหาสถานที่ท่องเที่ยว : <small>ลอง "บางแสน" หรือ "ภาคตะวันออก"</small></p>
        <div>
          <img class="clearbtn" src="./images/remove.png" alt="Clear Search" @click="clearSearch" id="clearButton">
        </div>
        <div class="container-input">
          <input v-model="searchTerm" type="text" class="input" placeholder="Search">
        </div>
      </div>
    <div id="details">
      <div v-if="filteredPlaces.length === 0">
        <h1 style="text-align: center;">NO Result In Data</h1>
      </div>
      <div v-else>
        <div v-for="(place, index) in filteredPlaces" :key="index">
          <br>
          <h2>{{ place.name }}</h2>
          <br>
          <a :href="place.map" target="_blank"><- Google Maps -></a>
          <br>
          <img :src="place.image">
          <p>{{ place.description }}</p>
          <p1>
            Category: {{ place.category }}<br>
            Location: {{ place.location }}
          </p1>
          <br>
          <hr>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import placesData from './places.json';
  
  export default {
    data() {
      return {
        places: placesData,
        searchTerm: ''
      };
    },
    computed: {
      filteredPlaces() {
        return this.places.filter(place => {
          const searchString = `${place.name.toLowerCase()} ${place.location.toLowerCase()} ${place.category.toLowerCase()} ${place.sector.toLowerCase()}`;
          return searchString.includes(this.searchTerm.toLowerCase());
        });
      }
    },
    methods: {
      clearSearch() {
        this.searchTerm = '';
      }
    }
  };
  </script>
  

<style scoped>
.manu {
    padding: 10px;
    display: 20px 10px;
    text-align: center;
    color: #76453B;
}

.container-input {
    position: relative;
    float: right;
}

.input {
    width: 100px;
    padding: 5px 0px 10px 30px;
    border-radius: 9999px;
    border: solid 1px #333;
    transition: all .2s ease-in-out;
    outline: none;
    opacity: 0.8;
}

.input:focus {
    opacity: 1;
    width: 300px;
}

.searchimg {
    margin-left: 10px;
    float: right;
}

.clearbtn {
    margin-left: 10px;
    cursor: pointer;
    float: right;
}


#details {
    text-align: center;
    color: #76453B;
}

#details h2 {
    margin-top: 0;
    text-shadow: 0px 0px 20px #333,
    0px 0px 40px #333,
    0px 0px 60px #333,;
}

#details img {
    border-radius: 10px;
    width: 100%;
    max-width: 300px;
    margin-bottom: 10px;
    overflow: hidden;
    object-fit: cover;
    width: 50%;
    transition: transform .5s ease-in-out;
}

#details img:hover {
    transform: scale(1.0) translate(-10px);
}


#details p {
    text-align: center;
    margin: 0 auto;
    width: 300px;
    height: 100px;
    overflow: scroll;
}

#details a {
    color: #0037ff;
    text-decoration: none;
}

#details a:hover {
    text-decoration: underline;
}
</style>