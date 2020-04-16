<template>
    <div class="app">
        <h1>Мини-отель «Губерния»</h1>
        <h1>в центре Вологды</h1>
        <p>Мини-отель «Губерния» находится в самом центре г.Вологда,</p>

        <p> в непосредственной близости к Софийскому собору и</p>

        <p>Кремлёвской площади, Музею кружев.</p>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .app{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Courier New";
    }
    p{
        color:white;
        font-size: 20px;
    }
    h1{
        font-size: 55px;
        color:white;
        font-weight: bold;
    }
</style>