<script>
  export default {
    name : 'MyWeather',
    data() {
      return {
          weather_data : {}
      }
    },
    methods : {
      diaplayWeather(weather_data) {

        this.weather_data = weather_data;
        console.log(weather_data);

      }
    },
    mounted() {
      // 绑定事件
      this.$bus.$on('updateWeather', this.diaplayWeather)
    }
  }
</script>

<template>
  <div class="weather" v-show="weather_data.is_show">
    <img :src="weather_data.icon_url" class="weather-icon" alt="100%">
    <h1 class="temp">{{ weather_data.temp }}°c</h1>
    <h2 class="city">{{ weather_data.city }}</h2>
    <div class="details">
      <div class="col">
        <img src="../images/humidity.png" />
        <div>
          <p class="humidity">{{ weather_data.humidity }}%</p>
          <p>湿度</p>
        </div>
      </div>
      <div class="col">
        <img src="../images/wind.png">
        <div>
          <p class="wind">{{ weather_data.wind }} 米/秒</p>
          <p>风力</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-icon {
  width: 170px;
  margin-top: 30px;
}

.weather h1 {
  font-size: 80px;
  font-weight: 500;
}

.weather h2 {
  font-size: 45px;
  font-weight: 400;
  margin-top: -10px;
}

.details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 50px;
}

.col {
  display: flex;
  align-items: center;
  text-align: left;
}

.col img {
  width: 40px;
  margin-right: 10px;
}

.humidity, .wind {
  font-size: 28px;
  margin-top: -6px;
}
</style>