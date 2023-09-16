<template>
    <div class="flex flex-row items-center justify-center bg-teal-200 bg-opacity-30 h-44 w-full">
        <h1 :class="['text-3xl font-semi-bold', welcomeTextCss]" >{{ welcomeText }}</h1>
    </div>
</template>


<script>
import { NextHeadLine } from "../utils/timer";



export default {
    name: "HeadLine",
    data() {
        return {
            welcomeText: "built for proffenssionals",
            initialInterval: null
        };
    },
    computed: {
        welcomeTextCss() {
            console.log("this key word ar headline", this.welcomeText);
            return {
                "welcometext1": this.welcomeText === "built for proffenssionals",
                "welcometext2": this.welcomeText === "you can fly",
                "welcometext3": this.welcomeText === "divesity is here",
                "welcometext4": this.welcomeText === "show what you gat",
                "welcometext5": this.welcomeText === "never surrender",
            };
        }
    },
    created() {
        this.changeHeader();
    },
    beforeUnmount() {
        clearInterval(this.initialInterval);
    },
    methods: {
        changeHeader() {
            this.initialInterval = setInterval(() => {
                const isHeadlines = ["built for proffenssionals", "you can fly", "divesity is here", "show what you gat", "never surrender"];
                this.welcomeText = NextHeadLine(isHeadlines, this.welcomeText);
            }, 4000);
        }
    },
}
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












