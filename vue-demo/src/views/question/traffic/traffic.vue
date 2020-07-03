<template>
    <div id="box"></div>
</template>

<script>
    /*
    *
    *
    * */
    export default {
        name: "traffic",
        mounted() {
            /*
           *题目 async 和await 处理一个红绿灯
           * 1. 首先展示绿灯
           * 2.3s后 展示红灯
           * 3.2s后 展示黄灯
           * 4.1s后展示 绿灯
           * 5.重复上述步骤
           * */

            // 设置定时器
            const sleep = async (delay) => {
                return new Promise((resolve) => {
                    setTimeout(resolve, delay);
                });
            }

            const changeColor = (color) => {
                if(document.getElementById('box')){
                    document.getElementById('box').style.background = color;
                }
            }

            const main = async () => {
                // while (true) {
                    changeColor('green');
                    await sleep(3000);
                    changeColor('red');
                    await sleep(2000);
                    changeColor('yellow');
                    await sleep(1000);
                // }
            }
            main();
        }
    }
</script>

<style scoped lang="less">
#box{
    width: 300px;
    height: 300px;
    -webkit-border-radius: 25%;
    -moz-border-radius: 25%;
    border-radius: 25%;
    display: inline-block;
}
</style>