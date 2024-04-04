<template>
    <img :src="currentPlace.image" :alt="currentPlace.name">
    <div class="text">
        <button @click="prev" id="prev">Previous</button>
        <button @click="next" id="next">Next</button>
        <br>
        <h2>{{ currentPlace.name }}</h2>
        <p>{{ currentPlace.description }}</p>
        <p><strong>Category:</strong> {{ currentPlace.category }}</p>
        <p><strong>Location:</strong> {{ currentPlace.location }}</p>
        <a :href="currentPlace.map" target="_blank">View on Google Maps</a>
        </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import placesData from './places.json'; // Importing the data

export default {
    setup() {
        const places = ref(placesData); // Using ref to make it reactive
        const currentIndex = ref(0);
        const currentPlace = ref(places.value[currentIndex.value]);

        const showPlace = (index) => {
            currentIndex.value = (index + places.value.length) % places.value.length;
            currentPlace.value = places.value[currentIndex.value];
        };

        const prev = () => {
            showPlace(currentIndex.value - 1);
        };

        const next = () => {
            showPlace(currentIndex.value + 1);
        };

        onMounted(() => {
            showPlace(currentIndex.value);
        });

        return { currentPlace, prev, next };
    },
};
</script>

<style scoped>
main h2 {
    background: linear-gradient(90deg, #F8FAE5, #f9cf00);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 40px #f5efd1,
        0px 0px 50px #f5efd1,
        0px 0px 60px #f5efd1;
}

main p {
    background: linear-gradient(90deg, #F8FAE5, #f9cf00);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 40px #f5efd1,
        0px 0px 50px #f5efd1,
        0px 0px 60px #f5efd1;
}


#prev,
#next {
    cursor: pointer;
    position: top;
    top: 50%;
    transform: translateY(-50%);
    background-color: #B19470;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px; /* Add border-radius to buttons */
}

#prev {
    left: 0;
}

#next {
    right: 0;
}


img {
    width: 100%;
    border-radius: 10px;
}

#slideshow-container .text {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    color: #F8FAE5;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 0 0 10px 10px;
}
</style>
