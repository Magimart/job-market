<template>
    <div 
        class="h-auto flex flex-row w-full   "
    >
        <div 
           class="w-full "
        >           
            <!-- <slot name="title">  if no name is given then vue renders it as default Note must only b one default or name assigned-->
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