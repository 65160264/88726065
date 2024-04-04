<template lang="">
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="search.html">Search</a></li>
        </ul>
    </nav>
</template>
<script>
export default {

}
</script>
<style scoped>
nav {
    background-color: #F8FAE5;
    padding: 10px;
    text-align: left;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    display: inline;
    margin-right: 10px;
}

ul li a {
    text-decoration: none;
    color: #333;
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

ul li a:hover {
    background-color: #76453B;
    color: #fff;
}
</style>