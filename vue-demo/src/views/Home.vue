<template>
  <div class="home">
    <NavList></NavList>
    <div id="subRouterView">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavList from '@/views/nav/nav.vue';
export default {
  name: 'home',
  components: {
      NavList
  }
}
</script>
<style scoped lang="less">
  #subRouterView{
    display: inline-block;
    height: auto;
  }
</style>
