<script>
import axios from 'axios'
export default {
  name : 'MySearch',
  data(){
    return {
      cityName : '',

    }
  },
  methods : {
    search(){
      if (this.cityName.trim() === '') return;
      const API_KEY = '5ff38e0820f2cbf46b5e9fff26540165';

      // 获取经纬度
      axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&appid=${API_KEY}`)
      .then(res => {
        // 纬度
        const lon = res.data[0].lon;
        // 经度
        const lat = res.data[0].lat;
        // console.log(lon, lat)

        // 获取天气信息
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        .then(res => {
          console.log(res.data);
          //
          const weather_data = {
            icon_url : `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
            temp : res.data.main.temp,
            humidity : res.data.main.humidity,
            wind : res.data.wind.speed,
            city : this.cityName,
            is_show : true
          };
          // 挂载事件
          this.$bus.$emit('updateWeather', weather_data);

        })
      })
      .catch(err => {
        console.log(err);
        alert("请检查你的输入");
      });
    }
  }
}
</script>

<template>
  <div class="search">
    <form @submit.prevent="search" class="form">
      <input type="text" placeholder="请输入城市名字" spellcheck="false" v-model="cityName">
      <button><img src="../images/search.png" alt="100%"></button>
    </form>

  </div>
</template>

<style scoped>
.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search form input {
  border: 0;
  outline: 0;
  background: #ebfffc;
  color: #555;
  padding: 10px 25px;
  height: 60px;
  border-radius: 30px;
  flex: 1;
  margin-right: 16px;
  font-size: 18px;
}

.search form button{
  border: 0;
  outline: 0;
  background: #ebfffc;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.search form button img {
  width: 16px;
}

</style>