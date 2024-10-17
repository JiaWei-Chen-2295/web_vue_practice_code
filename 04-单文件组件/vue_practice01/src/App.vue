<!-- 
    实战小项目 
    天气预报卡片
  `
    个人 API KEY : 5ff38e0820f2cbf46b5e9fff26540165
    接口地址：
    获取天气情况
    https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid={API key}
    获取经纬度
    http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    icon
    https://openweathermap.org/img/wn/10d@2x.png
-->
<template>
  <div id="app">
    <div class="card">
      <my-search></my-search>
      <my-weather></my-weather>
    </div>
    </div>

</template>

<script>
import MySearch from "@/components/MySearch.vue";
import MyWeather from "@/components/MyWeather.vue";

export default {
  name: 'App',
  components: {
    MySearch, MyWeather
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

body {
  background : #222;
}

.card {
  width: 70%;
  max-width: 470px;
  background: linear-gradient(135deg, #00feba, #5b548a);
  color: #fff;
  margin: 100px auto 0;
  border-radius: 20px;
  padding: 40px 35px;
  text-align: center;
}
</style>
