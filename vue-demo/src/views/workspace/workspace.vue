<template>
    <div id="container">
        {{name}} this is the js workspace;
        <div class="title">this is a big title!</div>
    </div>
</template>

<script>
export default {
    name: "workspace.vue",
    components: {
    },
    data: ()=>{
        return {
            name: 'zhangsan'
        }
    },
    mounted(){
        console.log('mounted');

    }
}
</script>

<style scoped lang="less">
    #container{
        >div.title{
            color: skyblue;
        }
    }
</style>