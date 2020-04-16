<template>
    <form class="decor" >
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
            <h3>Оставить отзыв</h3>
            <span v-html="input"></span>
            <input type="text" placeholder="*Ваше имя" ref="name">
            <input type="email" placeholder="*Ваша фамилия" ref = "surname">
            <textarea placeholder="Отзыв..." rows="3" ref="area"></textarea>
            <input type="submit" value="Отправить" @click.prevent="submit">
        </div>
    </form>
</template>

<script>
    export default {
        name: "WriteComment",
        data(){
            return{
                token:'',
            }
        },
        methods:{
            submit(){
                let array = {
                    'name':this.$refs.name.value.trim(),
                    'surname':this.$refs.surname.value.trim(),
                    'message':this.$refs.area.value.trim(),
                    '_token':this.token
                }
                array = JSON.stringify(array)

                this.$http.defaults.withCredentials = true;
                this.$http.post('/getToken',array)
                    .then(response => {
                        response = response.data

                        window.location.reload()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        },
        created() {
          this.$http.get('/getToken')
              .then(response => {
                  response = response.data
                  const parser = new DOMParser();
                  const document = parser.parseFromString(response, 'text/html');
                  let token = document.getElementsByName('_token')[0].value
                  this.$cookies.set("CSRF-TOKEN", token,'1h')
                  this.token = token
                  this.$http.defaults.headers['Cookie'] = 'CSRF-TOKEN = '+ token
              })
              .catch(error => {
                console.log(error)
              })
        }
    }
</script>

<style scoped lang = "less">
    .decor {
        position: relative;
        max-width: 400px;
        margin: 50px auto 0;
        background: white;
        border-radius: 30px;
    }
    .form-left-decoration,
    .form-right-decoration {
        content: "";
        position: absolute;
        width: 50px;
        height: 20px;
        background: #ffcb17;
        border-radius: 20px;
    }
    .form-left-decoration {
        bottom: 60px;
        left: -30px;
    }
    .form-right-decoration {
        top: 60px;
        right: -30px;
    }
    .form-left-decoration:before,
    .form-left-decoration:after,
    .form-right-decoration:before,
    .form-right-decoration:after {
        content: "";
        position: absolute;
        width: 50px;
        height: 20px;
        border-radius: 30px;
        background: white;
    }
    .form-left-decoration:before {top: -20px;}
    .form-left-decoration:after {
        top: 20px;
        left: 10px;
    }
    .form-right-decoration:before {
        top: -20px;
        right: 0;
    }
    .form-right-decoration:after {
        top: 20px;
        right: 10px;
    }
    .circle {
        position: absolute;
        bottom: 80px;
        left: -55px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
    }
    .form-inner {padding: 50px;}
    .form-inner input,
    .form-inner textarea {
        display: block;
        width: 100%;
        padding: 0 20px;
        margin-bottom: 10px;
        background: #E9EFF6;
        line-height: 40px;
        border-width: 0;
        border-radius: 20px;
        font-family: 'Roboto', sans-serif;
        outline: none;
    }
    .form-inner input[type="submit"] {
        margin-top: 30px;
        background:#ffcb17;
        border-bottom: 4px solid #d86312;
        color: white;
        font-size: 14px;
        cursor: pointer;
        outline: none;
    }
    .form-inner textarea {resize: none;outline: none;}
    .form-inner h3 {
        margin-top: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 24px;
        color: #707981;
    }
</style>