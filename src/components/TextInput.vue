<template>
    <input
        type="text"
        :value="modelValue"
        class="relative h-full w-full m- flex flex-row bg-slate-100  px-4 border-3 border-orange-500 " 
        placeholder=""
        @input="handleUserData"
    />
    
</template>


<script lang="ts" setup>
      
    defineProps({
        modelValue: {
            type: String,
            required: true
        } 
    })
 
  const emit = defineEmits(["update:modelValue"])
            
  const handleUserData = ($event: Event)=>{ 
                const target = $event.target  as HTMLInputElement; 
                // console.log(target, " this is as html input element")          
                emit("update:modelValue", target.value);

  }
         



/**
 * 
 ____________options api

 export default defineComponent({
        name:"ReUsableInput",
      
        props:{
            modelValue: {
                type: String,
                required: true
            },  
        }, 
        emits:["update:modelValue"],
        methods:{
            
            handleUserData($event: Event){ 
              const target = $event.target  as HTMLInputElement; 
              // console.log(target, " this is as html input element")          
              this.$emit("update:modelValue", target.value);

            },
        },     
});

_____________non reusable


  export default {
        name:"TextInput",
      
       props:{
        inputValue: {
                type: String,
                required: true
            },
            
        },
        methods:{
            
            handleUserData($event){
              this.$emit("handleUserData", $event.target.value)
            },
        },
     
  }
 
 */
  
 
</script>


