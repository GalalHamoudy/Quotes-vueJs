<template>
  <div class="container">
    
    <!-- ------------------------ -->
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../public/images/sm1.jpg" class="d-block w-100 s-img" />
          <div class="carousel-caption d-none d-md-block">
            <p>اقرأ كتاباً جيداً ثلاث مرات أنفع لك من أن تقرأ ثلاث كتب جيدة
</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../public/images/sm2.jpg" class="d-block w-100 s-img" />
          <div class="carousel-caption d-none d-md-block">
            <p>إن الكتاب هو الجليس الذي لا ينافق، ولا يمل، ولا يعاتب إذا جفوته ولا يفشي سرك

</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../public/images/sm3.jpg" class="d-block w-100 s-img" />
          <div class="carousel-caption d-none d-md-block">
            <p>إن المكتبة ليست من كماليات الحياة ولا من لوازمها ولا يحق لإنسان أن يربي أولاده بدون أن يحيطهم بالكتب
</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- ------------------------------------------ -->
    <br />

    <div class="row">
      <div class="col-md-6 mb-1">
        <div class="card bg-dark text-white">
          <img src="../../public/images/cm1.jpg" class="card-img c-img" />
          <div class="card-img-overlay">
            <h3 class="card-title">قسم الاقتباسات</h3>
            <p
              class="card-text"
            >ستجد في هذا القسم الكثير من الاقتباسات الرائعة و المقسمة نبعا لنوعها </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-1">
        <div class="card bg-dark text-white">
          <img src="../../public/images/cm1.jpg" class="card-img c-img" />
          <div class="card-img-overlay">
            <h3 class="card-title">قسم القصص</h3>
            <p
              class="card-text"
            >هذا القسم مخصص لاجمل القصص و الروايات الطويلة و القصيرة</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-1">
        <div class="card bg-dark text-white">
          <img src="../../public/images/cm1.jpg" class="card-img c-img" />
          <div class="card-img-overlay">
            <h3 class="card-title">قسم الشعر</h3>
            <p
              class="card-text"
            >من بين جميع الشعراء اخترنا الافضل منهم و من كل اشعارهم اخترنا الافضل لوضعه في هذا القسم</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-1">
        <div class="card bg-dark text-white">
          <img src="../../public/images/cm1.jpg" class="card-img c-img" />
          <div class="card-img-overlay">
            <h3 class="card-title">قسم الحكم</h3>
            <p
              class="card-text"
            >الحكماء هم الذين يضعون القوانين التي لايسير عليها غير الابطال , في هذا القسم ستجد الكثير من الحكم الرائعة</p>
          </div>
        </div>
      </div>
    </div>
    <!-- ---------------------------- -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.s-img{
  height: 600px;
}
.carousel-caption{
  background-color: #d4b35dd6;
      font-size: 22px;
}
.card-img-overlay{
  background-color: #d4b35d85;
  text-align: center;
    font-size: 22px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>