<template>
  <div class="NameStore">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NameStore',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
</style>
