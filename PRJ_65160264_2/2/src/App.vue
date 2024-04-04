<script setup>
import Header from './components/Header.vue';
import ManuBar from './components/ManuBar.vue';
import SlideShow  from './components/SlideShow.vue';
</script>

<template>
  <body class="change-on-load">
    <Header />
    <ManuBar />
    <main>
      <h2>Welcome to Travel Destinations!</h2>
      <p>สำรวจสถานที่ท่องเที่ยวแนะนำในประเทศไทย</p>
        <div id="slideshow-container">
          <SlideShow />
        </div>
    </main>
  </body>
</template>

<style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url('https://campus.campus-star.com/app/uploads/2015/10/BUU-11.jpg');
    /* รูปภาพพื้นหลังเริ่มต้น */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 1s ease;
    /* ใช้ transition เพื่อทำให้เกิดการเปลี่ยนแปลงสามารถเห็นได้ */
}

@keyframes changeBackground {
    0% {
        background-image: url('https://campus.campus-star.com/app/uploads/2015/10/BUU-11.jpg');
    }
    25% {
        background-image: url('https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/9/2016/11/08162826/DSC_0854.jpg');
    }
    50% {
        background-image: url('https://www.ktc.co.th/pub/media/Travel-Story/Thailand/bangsaen/bangsaen-beach.webp');
    }
    100% {
        background-image: url('https://campus.campus-star.com/app/uploads/2015/10/BUU-11.jpg');
    }
}

.change-on-load {
    animation: changeBackground 10s infinite;
}

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
#slideshow-container {
    position: relative;
    max-width: 800px;
    margin: auto;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 10px;
}
</style>
