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


<script lang="ts" setup>
import { ref, computed,  } from 'vue';

defineProps({
    header:{
        type: String,
        required: true
    }
});

const isOpen = ref(false)

const openBox = () => {
    isOpen.value = !isOpen .value
}

const fasAngle = computed(() => {
    return isOpen.value? ["fas", "angle-up"] : ["fas", "angle-down"];
})     


</script>