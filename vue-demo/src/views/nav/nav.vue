<template>
    <div class="list">
        <ul>
            <li v-for="(item, idx) of navList" :key="idx">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavList",
        data: ()=>{
            return {
                navList: [
                    {name: '红绿灯问题(async\\await)', path: 'traffic'},
                    {name: '解决回调问题(promise扁平化处理异步回调函数)', path: 'flatPromise'},
                    {name: '解决回调问题2(async\\await)', path: 'flatAsyncAwait'},
                    {name: '手写一个Promise', path: 'writePromise'}
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .list{
        display: inline-block;
        vertical-align: top;
        width: 600px;
        padding-right: 60px;
        margin-left: 30px;
        >ul{
            list-style: none;
            border: 1px solid #ccc;
            width: 600px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border-bottom: none;
            >li{
                width: 600px;
                height: 30px;
                line-height: 30px;
                text-align: left;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                border-bottom: 1px solid #ccc;
                padding-left: 30px;
            }
        }
    }
</style>