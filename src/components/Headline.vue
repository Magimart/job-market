<template>
    <div class="flex flex-row items-center justify-center bg-zinc-200 bg-opacity-80 px-5 h-44 w-full">
        <h1 :class="['text-3xl font-semi-bold', welcomeTextCss]" >
           {{ welcomeText }}
        </h1>
    </div>
</template>


<script lang="ts" setup>
 
import { NextHeadLine } from "../utils/timer";
import { ref, computed, onMounted, onBeforeMount }  from "vue";


const welcomeText = ref("never surrender");
const initialInterval = ref<ReturnType<typeof setInterval>>(); // to retrun any or unknown

const welcomeTextCss = computed(()=>{
    return {
        
            "welcometext1": welcomeText.value === "built for proffenssionals",
            "welcometext2": welcomeText.value === "you can fly",
            "welcometext3": welcomeText.value === "divesity is here",
            "welcometext4": welcomeText.value === "show what you gat",
            "welcometext5": welcomeText.value === "never surrender",          
            // [welcomeText.value.toLocaleLowerCase()]: true
    };
})


const changeHeader=()=> {
            initialInterval.value = setInterval(() => {
                const isHeadlines = ["built for proffenssionals", "you can fly", "divesity is here", "show what you gat", "never surrender"];
                welcomeText.value = NextHeadLine(isHeadlines, welcomeText.value);
            }, 4000);

        }

onMounted(changeHeader)
onBeforeMount(()=>clearInterval(initialInterval.value))


</script>

<style scoped>
.welcometext1{
    color: #baea0a;
}
.welcometext2{
    color: #f30842;
}
.welcometext3{
    color: #fad209;
}
.welcometext4{
    color: #f66309;
}
.welcometext5{
    color: #0f248d;
}

</style>












