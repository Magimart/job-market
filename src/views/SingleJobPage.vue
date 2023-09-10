<template>
    <div class="">
      <h1> Your Single job Page{{ dynamicRoute }}</h1>
    </div>
</template>

<script>
export default {
 name:"SingleJobPage",
 computed:{
    dynamicRoute(){
      console.log("this key ´word", this)
      return this.$route.params.id;
    }
 }
}
</script>