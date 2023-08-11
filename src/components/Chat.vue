<script setup lang="ts">
</script>
<template>
  <div class="d-flex justify-content-center">
    <div class="chatbox border m-auto">
      <!-- header -->
      <div class="boxheader d-flex justify-content-center align-items-center">
        <p class="mb-0 fw-bold">聊天室</p>
      </div>

      <!-- content -->
      <div class="boxcontent">
        <!-- card list -->
        <div class="row g-0 px-2 mt-2">
          <div class="col-3 d-flex flex-column justify-content-center align-items-center">
            <div class="imgwrap">
              <img src="https://img.6tu.com/2021/11/20211110071406673.jpg" alt="" />
            </div>
            <p class="mb-0">Peter</p>
          </div>
          <div class="col-9 d-flex align-items-center">
            <p class="mb-0">Hello! 你好嗎?</p>
          </div>
        </div>
        <!-- user content -->
        <div class="row g-0 px-2 mt-2">
          <!-- <div class="col-3 d-flex flex-column justify-content-center align-items-center">
              <div class="imgwrap">
                <img src="https://img.6tu.com/2021/11/20211110071406673.jpg" alt="">
              </div>
              <p class="mb-0">Peter</p>
            </div> -->
          <div class="col-12 d-flex align-items-center justify-content-end">
            <p class="mb-0">Hello! 你好嗎?</p>
          </div>
        </div>
      </div>

      <!-- footer -->
      <div class="boxfooter d-flex justify-content-center align-items-center">
        <form action="" class="row w-100">
          <div class="col-9">
            <input class="w-100 border-0 contentipt" type="text" placeholder="輸入聊天訊息" />
          </div>
          <div class="col-3 my-auto">
            <button class="w-100 submitbtn border-0 rounded fw-bold">送出</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.chatbox {
  width: 350px;
  height: 100vh;
}
.boxheader {
  height: 50px;
  background-color: rgb(208 255 255);
}
.boxcontent {
  height: calc(100% - 100px);
}
.imgwrap {
  width: 30px;
  height: 30px;
}
.imgwrap img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.boxfooter {
  /* height: 50px; */
  /* background-color: rgb(236, 236, 236); */
}
.contentipt {
  height: 40px;
  background-color: rgb(247 247 247);
}
.contentipt:focus-visible {
  outline: transparent;
}
.submitbtn {
  min-width: 55px;
  background-color: rgb(236, 236, 236);
  height: 35px;
}
.submitbtn:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transition: 0.5s;
}
</style>