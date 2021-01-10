<template>
  <div class="container">
    <vue-progress-bar></vue-progress-bar>
       <transition-group enter-active-class="animate__animated animate__jackInTheBox" tag="div" class="row">
      <div class="col-md-6 mt-2" v-for="(oneinfo,index) in information" :key="index">
        <div class="card text-center">
          <div class="card-header">{{ oneinfo.name }}</div>
          <div class="card-body">
            <p
              class="card-text"
            >{{ oneinfo.text }}</p>
          </div>
          <div class="card-footer">( {{ index + 1 }} )</div>
        </div>
      </div>
    </transition-group>
  </div>
</template>


<script>
export default {
  data() {
    return {
      info: {
        name: "",
        text: ""
      },
      information:[]
    };
  },
  created(){
    this.$Progress.start();
          this.$http
        .get("https://vuegalal.firebaseio.com/Poetrys.json")
        .then(response=>{
          return response.json();
        })
        .then(data=>{
          const allinfo = [];
          for(let key in data){
            allinfo.push(data[key]);
          }
          this.information = allinfo;
          this.$Progress.finish();
        });
  }

};
</script>


<style>
.card {
  background-color: #ffffff00;
}
.card .card-body {
  background-color: #d4b35dd6;
}
.card .card-header {
  background-color: #a0833b;
  color: wheat;
  font-weight: 700;
}
.card .card-footer {
  background-color: #a0833b;
  color: wheat;
  font-weight: 700;
}
</style>