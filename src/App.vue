<template>
  <div>
    <div class="alert first-nav">
      <div class="row text-center">
        <div class="col-lg-4 col-sm-12">
          <span class="nav-info">
            <i class="fas fa-phone-alt"></i> 01156716527
          </span>
        </div>
        <div class="col-lg-4 col-sm-12">
          <span class="nav-info">
            <i class="fas fa-envelope"></i> kira2000united@gmail.com
          </span>
        </div>
        <div class="col-lg-4 col-sm-12">
          <span class="nav-info">
            <i class="fab fa-facebook-square"></i> facebook
          </span>
          <span class="nav-info">
            <i class="fab fa-instagram"></i> instagram
          </span>
        </div>
      </div>
    </div>
    <!-- ---------------------------------------------------- -->
    <div class="container">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="three-nav p-2">
          <!-- ----------------------- -->
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/Add/Rules" active-class="active-main" exact>
                  اضافة حكمة
                  <i class="fas fa-plus-square"></i>
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/Add/Poetrys" active-class="active-main" exact>
                  اضافة شعر
                  <i class="fas fa-plus-square"></i>
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/Add/Storys" active-class="active-main" exact>
                  اضافة قصة
                  <i class="fas fa-plus-square"></i>
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/Add/Quotes" active-class="active-main" exact>
                  اضافة اقتباس
                  <i class="fas fa-plus-square"></i>
                </router-link>
              </a>
            </li>
          </ul>
          <!-- -------------------------- -->
        </div>
      </div>
      <nav class="navbar navbar-light second-nav">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbartogglericon">
            اضافة
            <i class="fas fa-plus-square"></i>
          </span>
        </button>
        <ul class="nav d-flex justify-content-center">
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/Rules" active-class="active-main" exact>حكم</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/Poetrys" active-class="active-main" exact>شعر</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/Storys" active-class="active-main" exact>قصص</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/Quotes" active-class="active-main">اقتباسات</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/" active-class="active-main" exact>الرئيسية</router-link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- ------------------------------------------------------- -->
    <router-view />
    <!-- -------------------------------------------------------- -->
    <section class="footer">
      <marquee direction="right">
        <span v-for="oneinfo in information" :key="oneinfo.key">
          <i class='fab fa-artstation mar'></i>
          {{ oneinfo.text }}
        </span>
      </marquee>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <p class="header">تواصل معانا</p>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">بريدك الالكتروني</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">نص رسالتك</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="button" class="btn btn-primary btn-lg btn-block">ارسال</button>
            </form>
          </div>
          <div class="col-md-4">
            <p class="header">موقع حروفي</p>
            <img
              class="img-thumbnail"
              src="../public/images/cm2.jpg"
              width="150"
              height="100"
              alt="Image 01"
            />
            <img
              class="img-thumbnail"
              src="../public/images/cm2.jpg"
              width="150"
              height="100"
              alt="Image 01"
            />
            <img
              class="img-thumbnail"
              src="../public/images/cm2.jpg"
              width="150"
              height="100"
              alt="Image 01"
            />
            <img
              class="img-thumbnail"
              src="../public/images/cm2.jpg"
              width="150"
              height="100"
              alt="Image 01"
            />
            <img
              class="img-thumbnail"
              src="../public/images/cm2.jpg"
              width="150"
              height="100"
              alt="Image 01"
            />
            <img
              class="img-thumbnail"
              src="../public/images/cm2.jpg"
              width="150"
              height="100"
              alt="Image 01"
            />
          </div>

          <div class="col-md-4">
            <p class="header">من نكون</p>
            <p class="who-us">
              تم تصميم الموقع من قبل تيم ديث كود و يتم حاليا تطويره و نشره ليشمل جميع دول العالم والهدف
              الرئيسي منه هو تجميع اكبر قدر من الجمل و العبارات الهادفة والاقسام الموجودة حاليا هي
            </p>
            <ul>
              <li>الاقتباسات</li>
              <li>القصص</li>
              <li>الشعر</li>
              <li>الحكم</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright text-center">تم تصميم الموقع بواسطة المبرمج محمد جلال</div>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      info: {
        text: ""
      },
      information: []
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
  }
};
</script>


<style>
body {
  background-image: url(../public/images/4.jpg);
  background-attachment: fixed;
  background-size: cover;
}
* {
  font-family: "Changa", sans-serif;
}
::placeholder {
  text-align: right;
}
.form-control {
  text-align: end;
}
.footer {
  background-color: #d4b35dd6;
  color: white;
  text-align: right;
  margin-top: 20px;
  border-top: 2px solid black;
  padding: 20px 0px;
  color: #000000;
}
.footer .header {
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid;
  padding-bottom: 8px;
  text-align: center;
}
.footer .copyright {
  margin-top: 20px;
  border-top: 2px solid black;
  padding-top: 10px;
  font-size: 17px;
  font-weight: 700;
}
.first-nav {
  background-color: #d4b35dd6;
  color: white;
  font-size: 16px;
  font-weight: 600;
}
.first-nav i {
  color: #000000;
  margin-right: 3px;
  font-size: 19px;
}
.first-nav .nav-info {
  margin-right: 10px;
  padding: 0px 6px;
  border-radius: 7px;
  letter-spacing: 1px;
}
.second-nav {
  background-color: #d4b35dd6;
  color: white;
  font-size: 16px;
  font-weight: 600;
}
.second-nav li a {
  text-decoration: none;
  color: white;
}
.active-main {
  color: #000000 !important;
  border-bottom: 3px solid;
}
.three-nav {
  background-color: #d4b35dd6;
  border-bottom: 1px solid;
}
.three-nav li a {
  text-decoration: none;
  color: white;
  font-weight: 600;
}
.navbartogglericon {
  color: black;
  font-size: 15px;
  font-weight: 600;
}
marquee {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding: 5px 0px;
  background-color: #a0833b;
  color: wheat;
  font-weight: 700;
}
.mar{
  color:black;
  font-size:18px;
  margin: 0px 4px;
}

</style>
