<template>
    <div class="app">


    </div>
</template>

<script>
    export default {
        name: "Comment"
    }
</script>

<style scoped lang ="less">
    ::-webkit-scrollbar-button {
        background-image:url('');
        background-repeat:no-repeat;
        width:6px;
        height:0px
    }

    ::-webkit-scrollbar-track {
        background-color:#32312e;
        box-shadow:0px 0px 3px #000 inset;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 5px;
        border-radius: 0px;
        background-color:#ffcb17;
        box-shadow:0px 1px 1px #fff inset;
        background-image:url('https://yraaa.ru/_pu/24/59610063.png');
        background-position:center;
        background-repeat:no-repeat;
    }

    ::-webkit-resizer{
        background-image:url('');
        background-repeat:no-repeat;
        width:7px;
        height:0px
    }

    ::-webkit-scrollbar{
        width: 11px;
    }
    .app{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "Courier New";
        color:white;
        padding: 0 100px 0 100px;
        margin-top: 100px;
        overflow: auto;
        width: 90%;
        height: 75vh;
    }
</style>