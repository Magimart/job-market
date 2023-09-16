<template>
    <div 
        class="h-auto flex flex-row w-full   "
    >
      <HeaderContainer>
        <!-- <template v-slot:default> works if name is not specified in the child -->
        <!-- <template v-slot:title>  Note # is shor hand for v-slot:default  -->
        <template #:default>
            <h2 class="w-full text-4xl font-normal">Teams</h2> 
        </template>
        <template v-slot:subTitle>
            <h2 class="w-full text-xl font-light">
                It is amazing working here!
            </h2>
        </template>
      </HeaderContainer>

    </div>
</template>





<script>
import HeaderContainer from '../components/HeaderContainer.vue';

export default{
    name: "Teamspage",
    components: { HeaderContainer }
}

</script>