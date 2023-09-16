<template>
    <input
        type="text"
        :value="modelValue"
        class="relative h-full w-full m-2l flex flex-row bg-slate-100  px-4 border-3 border-orange-500 " 
        placeholder="this is a reusable component"
        @input="handleUserData"
    />
    
</template>

<script>
  export default {
        name:"ReUsableInput",
      
        props:{
            modelValue: {
                type: String,
                required: true
            },  
        }, 
        emits:["update:modelValue"], 
        methods:{
            
            handleUserData($event){              
            this.$emit("update:modelValue", $event.target.value);

            },
        },     
     
  }
</script>


