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





<script>
export default{

    name: "HeaderContainer", 


}

</script>