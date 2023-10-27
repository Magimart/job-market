<template>
    <!-- <div class="singinBtnWrapper bg-black h-12 w-max m-2"> -->
    <button 
        :class="buttonClass"
    > 
        {{ text}}
    </button>
    <!-- </div> -->
</template>


<script lang="ts" setup>
import {computed, toRefs}  from "vue";


const props = defineProps ({
    text: {
        type: String, 
        require:true 
    },

    type: {
        type: String, 
        require:false, 
        default: "primary", 
        validator(value: string){
            console.log("thisis is value", value)
            return ["primary", "secondary"].includes(value)
        }

    },
});


const {type} = toRefs(props);

const buttonClass = computed(() => {
    return {

        [type.value]: true,
    }
});




</script>

<style scoped>
button {
  @apply  rounded-lg px-4 font-medium  w-full  h-full;
}
.primary{
@apply border-0 bg-blue-500 text-white hover:shadow-black
}
.secondary{
 @apply  bg-transparent text-blue-500 hover:text-white
}
</style>



