<template>
    <!-- :class="{primary: false}"
     :class="{primary: primary}"
     -->
     <div class="singinBtnWrapper bg-black h-12 w-max m-2">
        <button 
            @click=handleClick()
            :class="buttonClass"

        > 
          {{ text}}
        </button>
     </div>
</template>


<script>

export default{
    name: "ActionBtn",
//    props:["text", "type"],
    props : {
        text: {
            type: String, require:true 
        },
        type: {
            type: String, 
            require:false, 
            default: "primary", 
            validator(value){
                return ["primary", "secondary"].includes(value)
            }

        },
    },

   computed:{
        buttonClass(){
            return {
                primary: this.type === "primary", 
                secondary: this.type === "secondary"
            }
        }
   },
   methods: {
    handleClick() {
        console.log("i have been clicked xxx", this);
    }
},
}

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



