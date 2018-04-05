<template>
    <div class="row" id="header">

        <div class=" col-lg-6 text-center shadow">
            <span data-shadow-text="Text-Shadow">2048</span>
        </div>

        <div class=" col-lg-2 text-center score-panel">
            <p>Best score</p>
            <h4>{{score}}</h4>
        </div>

        <div class=" col-lg-2 text-center score-panel">
            <p>Score</p>
            <h4>{{score}}</h4>
        </div>

    </div>

</template>

<script>
    export default {
        props: ['score']
    }
</script>

<style scoped>

    #header {
        padding-top: 5%;
        padding-bottom: 2%;
    }

    .score-panel {
        background: #bbada0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;
        color: white;
        margin-right: 10px;
        width: auto;
    }



    span, span:after {
        font-weight: 900;
        color: black;
        white-space: nowrap;
        letter-spacing: .1em;
        padding: .2em 0 .25em 0;
    }

    span {
        font-size: 4em;
        z-index: 100;
        text-shadow: .04em .04em 0 #9cb8b3;
    }

    span:after {
        content: attr(data-shadow-text);
        color: rgba(0,0,0,.35);
        text-shadow: none;
        position: absolute;
        left: .0875em;
        top: .0875em;
        z-index: -1;
        -webkit-mask-image: url(https://f.cl.ly/items/1t1C0W3y040g1J172r3h/mask.png);
    }
</style>