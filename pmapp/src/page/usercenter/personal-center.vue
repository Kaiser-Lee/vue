<template>
    <div>
        <center>这是个人中心</center>
        <div class="back" @click="back">返回</div>
    </div>
</template>
<script>
export default{
  name: 'personalcenter',
  data () {
    return {}
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>
