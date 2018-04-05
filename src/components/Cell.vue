<template>
    <!--<transition-->

            <!--:duration="direction === '' ? '': { enter: 300, leave: 100 }"-->
            <!--name="custom-classes-transition"-->
            <!--enter-active-class="fadeInDown animated"-->
            <!--leave-active-class="direction === 'ArrowDown' ? 'fadeOutDown animated' : ''"-->
            <!--&gt;-->
        <div class="one-cell" :class="value <= 2048 ? 'tile-' + value : 'tile-super'" ref="cellHeight">
            <p class="one-cell-number" :style="{lineHeight: oneCellHeight + 'px', fontSize: textSize + 'px'}">{{this.value}}</p>
        </div>
    <!--</transition>-->
</template>

<script>
    export default {
        data: function () {
            return {
                oneCellHeight: '',
                textSize: ''
            }
        },
        props: [
            "value",
            'direction'
        ],
        methods: {
            changeCellHeight() {
                this.oneCellHeight = this.$refs.cellHeight.clientHeight;
                this.textSize = ( this.oneCellHeight * 35 ) / 100 ;
            }
        },
        mounted: function () {
            this.$nextTick(function () {

                this.changeCellHeight();

                window.addEventListener('resize', this.changeCellHeight);

            });
        }

    }
</script>

<style>
    .one-cell {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    .one-cell-number {
        font-weight: bold;
        text-align: center;
    }

    .tile-2 {
        background: #eee4da;
    }
    .tile-4 {
        background: #ede0c8;
    }
    .tile-8 {
        color: #f9f6f2;
        background: #f2b179; }
    .tile-16 {
        color: #f9f6f2;
        background: #f59563; }
    .tile-32 {
        color: #f9f6f2;
        background: #f67c5f; }
    .tile-64 {
        color: #f9f6f2;
        background: #f65e3b; }
    .tile-128 {
        color: #f9f6f2;
        background: #edcf72;
    }
    .tile-256 {
        color: #f9f6f2;
        background: #edcc61;
    }
    .tile-512 {
        color: #f9f6f2;
        background: #edc850;
    }
    .tile-1024  {
        color: #f9f6f2;
        background: #edc53f;
    }
    .tile-2048  {
        color: #f9f6f2;
        background: #edc22e;
    }
    .tile-super  {
        color: #f9f6f2;
        background: #3c3a32;
    }
</style>

