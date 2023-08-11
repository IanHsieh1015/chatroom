<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const onLoginClick = async () => {
    router.push('/Chat')
}
</script>
<template>
  <div class="d-flex justify-content-center align-items-center loginBoxWrap">
    <div class="loginBox border d-flex justify-content-center align-items-center">
        <form action="" class="w-100 d-flex flex-column justify-content-center align-items-center px-5">
            <p>請輸入暱稱：</p>
            <div class="w-100 mt-2">
                <input class="w-100 border-1 rounded p-1" type="text" name="" id="">
            </div>
            <div class="mt-3 w-100">
                <button @click="onLoginClick" class="w-100 border-0 rounded py-1">開始聊天</button>
            </div>
        </form>
    </div>
  </div>
</template>
<style scoped>
.loginBoxWrap {
    height: 100vh;
}
.loginBox {
    width: 300px;
    height: 30vh;
}
</style>