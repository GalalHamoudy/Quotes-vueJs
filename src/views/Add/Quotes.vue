<template>
  <div class="container">
    <vue-progress-bar></vue-progress-bar>
    <div class="form-add animate__animated animate__flash">
      <p class="main-header">اضافة اقتباس</p>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">اسمك الشخصي</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
             required
            v-model="info.name"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">النوع الاقتباس</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="info.type">
            <option>حزن و فراق</option>
            <option>اسلامية</option>
            <option>حب و غرام</option>
            <option>شوق وحنين</option>
            <option>اعتذار</option>
            <option>عتاب</option>
          </select>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">محتوي النص</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
            v-model="info.text"
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          @click="submit"
        >اضافة الاقتباس</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      info: {
        name: "",
        type: "",
        text: ""
      }
    };
  },
  methods: {
    submit() {
      this.$Progress.start();
      this.$http.post('https://vuegalal.firebaseio.com/Quotes.json',this.info)
        .then(
          response => {
            console.log(response);
             this.$swal.fire({
              title: "تمت الاضافة بنجاح",
              confirmButtonText: 'حسنا',
              showClass: {
                popup: "animate__animated animate__fadeInDown"
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp"
              }
            });
            this.$Progress.finish();
          },
          error => {
            console.log(error);
            this.$swal.fire({
              title: "هناك مشكلة في الاضافة يرجي التجريب في وقت لاحق",
              confirmButtonText: 'حسنا',
              showClass: {
                popup: "animate__animated animate__fadeInDown"
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp"
              }
            });
          }
        
        );
    }
  }
};
</script>


<style>
.form-add {
  background-color: #d4b35dd6;
  margin: 5px 0px;
  padding: 20px 10px;
  border: 1px solid;
  text-align: end;
  font-weight: 600;
  color: antiquewhite;
}
.main-header {
  text-align: center;
  color: white;
  font-size: 20px;
  border-right: 3px solid black;
  border-left: 3px solid black;
  background-color: #a0833b;
  padding: 6px 0px;
}
</style>