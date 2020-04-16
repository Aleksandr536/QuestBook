<template>
  <div id="app">
      <component :is="result">

      </component>
    <div class="left_bar">
      <img src="./assets/image/logo.png" alt="">
      <router-link to="/" exact tag="p">Гостевая книга</router-link>
        <Menu/>
        <h1>{{date | date('datetime')}}</h1>
    </div>
    <div class="right_bar">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Menu from "./components/Menu"
  import Home from "./views/Home"
  import MainLayout from "./layouts/MainLayout"
  import InfoLayout from "./layouts/InfoLayout";
  import CheckinLayout from "./layouts/CheckinLayout";
  import QuestsLayout from "./layouts/QuestsLayout";
  import CheckoutLayout from "./layouts/CheckoutLayout";
  import Comment from "./views/Comment.vue"

  export default {
      data(){
        return{
            date:new Date(),
            interval:null,
        }
      },
      mounted(){
          this.interval =  setInterval(() => {
            this.date = new Date()
          },1000)
      },
      beforeDestroy(){
        clearInterval(this.interval)
      },
    computed:{
        result(){
          return this.$route.meta.layout;
        },
    },
    components:{
        Menu,Home,MainLayout,InfoLayout,CheckinLayout,QuestsLayout,CheckoutLayout,Comment
    }
  }
</script>
<style lang="less" scoped>
  #app{
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
      h1{
          color:white;
          font-size: 30px;
          position: absolute;
          bottom: 5vh;
      }
    .left_bar{
      position: absolute;
      top: 0;
      left: 0;
      width: 20%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      img{
        position: fixed;
        top:5vh;
        left:42%;
        z-index:999;
      }
      p{
        cursor: pointer;
        margin-top: 7vh;
          margin-left: 2%;
        font-size: 40px;
        margin-bottom: 5vh;
        padding: 5px;
        color:white;
        font-style: italic;
        &:hover{
          animation: header  2s infinite ease-in-out;
        }
      }
    }
    @keyframes header {
      from {text-shadow: 0 0 10px white;}
      50% {text-shadow: 0 0 50px white;}
      to {text-shadow: 0 0 10px white;}
    }
  .right_bar{
      position: absolute;
      right: 0;
      top: 0;
      width: 80%;
      height: 100vh;
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

</style>