<template>
    <ul>
        <router-link tag = "li" to="/info"><a>Информация о гостиннице</a></router-link>
        <router-link tag = "li" to="/guests"><a>Просмотр гостей</a></router-link>
        <router-link tag = "li" to="/writeReview"><a>Написать отзыв</a></router-link>
        <router-link tag = "li" to="/checkIn"><a>Заезд гостя</a></router-link>
        <router-link tag = "li" to="/checkOut"><a>Выезд гостя</a></router-link>
        <router-link tag = "li" to="/bookReview"><a>Книга отзывов</a></router-link>
    </ul>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style lang ="less">
    ul{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 0;
        padding-left: 0;
        li{
            list-style: none;
            padding: 10px 5px 10px 5px;
            a{
                font-size: 20px;
                text-decoration: none;
                color:white;
                padding: 10px 5px 10px 5px;
                border-radius: 20px;
                &:hover{
                    color:white;
                    animation: header  2s infinite ease-in-out;
                }
            }
        }
    }
    @keyframes header {
        from {text-shadow: 0 0 10px white;}
        50% {text-shadow: 0 0 50px white;}
        to {text-shadow: 0 0 10px white;}
    }
    a.router-link-active, li.router-link-active>a {
        border:2px solid white;
    }
</style>