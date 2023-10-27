<template>
    <div 
        class="h-auto flex flex-row w-full   "
    >
        <div 
           class="w-full "
        >           
            <slot>
                 Sample title
            </slot>
            <slot name="subTitle">
                 Sample subTitle
            </slot>
        </div>
    </div>
</template>


<!-- <script lang="ts" setup>
import {ref} from "vue";
const name = ref("HeaderContainer")

</script> -->