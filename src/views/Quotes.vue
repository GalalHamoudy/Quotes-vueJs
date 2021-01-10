<template>
  <div class="container">
    <vue-progress-bar></vue-progress-bar>
    <div class="row mt-3">
      <div class="col-md-4 mt-1 animate__animated animate__flipInY">
        <router-link
          tag="button"
          class="btn ch-btn btn-block"
          to="/Quotes/sad"
          active-class="ch-btn-active"
        >
          <span class="badge badge-light">{{ count("حزن و فراق") }}</span>
          حزن و فراق
        </router-link>
      </div>
      <div class="col-md-4 mt-1 animate__animated animate__flipInY">
        <router-link
          tag="button"
          class="btn ch-btn btn-block"
          to="/Quotes/islam"
          active-class="ch-btn-active"
        >
          <span class="badge badge-light">{{ count("اسلامية") }}</span>
          اسلامية
        </router-link>
      </div>
      <div class="col-md-4 mt-1 animate__animated animate__flipInY">
        <router-link
          tag="button"
          class="btn ch-btn btn-block"
          to="/Quotes/love"
          active-class="ch-btn-active"
        >
          <span class="badge badge-light">{{ count("حب و غرام") }}</span>
          حب و غرام
        </router-link>
      </div>
      <div class="col-md-4 mt-1 animate__animated animate__flipInY">
        <router-link
          tag="button"
          class="btn ch-btn btn-block"
          to="/Quotes/miss"
          active-class="ch-btn-active"
        >
          <span class="badge badge-light">{{ count("شوق وحنين") }}</span>
          شوق وحنين
        </router-link>
      </div>
      <div class="col-md-4 mt-1 animate__animated animate__flipInY">
        <router-link
          tag="button"
          class="btn ch-btn btn-block"
          to="/Quotes/Apology"
          active-class="ch-btn-active"
        >
          <span class="badge badge-light">{{ count("اعتذار") }}</span>
          اعتذار
        </router-link>
      </div>
      <div class="col-md-4 mt-1 animate__animated animate__flipInY">
        <router-link
          tag="button"
          class="btn ch-btn btn-block"
          to="/Quotes/reproach"
          active-class="ch-btn-active"
        >
          <span class="badge badge-light">{{ count("عتاب") }}</span>
          عتاب
        </router-link>
      </div>
    </div>

    <!-- ------------------------------------------------------- -->
    <br />
    <router-view />
    <!-- -------------------------------------------------------- -->
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
      information: [],
    };
  },
  created() {
    this.$Progress.start();
    this.$http
      .get("https://vuegalal.firebaseio.com/Quotes.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const allinfo = [];
        for (let key in data) {
          allinfo.push(data[key]);
        }
        this.information = allinfo;
        this.$Progress.finish();
      });
  },
  methods: {
    count(typee) {
      var i = 0;
      var cu = 0;

      while(i < this.information.length){
        if(this.information[i].type == typee){
          cu++
        };
        i++;
      };
      return cu;
    }
  }
};
</script>



<style>
.ch-btn {
  background-color: #d4b35dd6;
  border: 1px solid #d4b35dd6;
  font-weight: 700;
}
.ch-btn-active {
  background-color: #a0833b;
  border: 1px solid #fff;
  color: wheat;
  font-weight: 700;
}
</style>