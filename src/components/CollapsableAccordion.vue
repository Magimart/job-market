<template>
    <div 
        class=" h-f flex flex-row w-full flex-wrap space-y-1  bg-gray-100 hover:bg-slate-50 "
    >
        <div        
            role="button"
            @click="openBox" 
         class="flex flex-row justify-between w-full ">
            <div class="w-full  h-full p-3 text-lg font-semibold">
                  <h3> {{header}}</h3>
            </div>
            <div class="h-hull w-12 flex items-center justify-center  p-1  hover:bg-slate-50">
                <!-- {{ isOpen? "+": "x" }} -->
                <font-awesome-icon :icon="fasAngle"/>
            </div>
        </div>
        <div 
           v-if="isOpen"
           class="w-full h-auto"
        >
            <slot class="">
                <p>if no data is provided then the defalt will render</p>
            </slot>
        </div>
    </div>

</template>





<script>
export default{

    name: "CollapsableAccordion",
    props:{
        header:{
            type: String,
            required: true
        }
    },
    data(){
       return {
           isOpen: false
        }
    },

    computed:{
      fasAngle(){
        return this.isOpen? ["fas", "angle-up"] : ["fas", "angle-down"];
      }
    },

    methods:{
        openBox(){
            console.log("this button is been clicked")
           this.isOpen = !this.isOpen
        }
    },


}

</script>