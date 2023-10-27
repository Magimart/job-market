<template >
    <div class="imageWraper h-16 w-16">
       <img
           id="profileImg" 
           :src="imageUrl" alt="userProfileImage"
           class="profileImage h-full w-full"
       />
    </div>
</template>


<script lang="ts" setup>
import { ref}  from "vue";

const imageUrl = ref("https://res.cloudinary.com/magimaart/image/upload/v1639649492/portfolioApp/painting/yjzy2thjj2bxwuecv2ca.jpg")
       

</script>

