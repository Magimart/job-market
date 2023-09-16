<template>
    <div class="imageWraper h-16 w-16">
       <img
           id="profileImg" 
          v-bind:src="imageUrl" alt="userProfileImage"
          class="profileImage h-full w-full"
       />
    </div>
</template>

<script>
  
    export default{
          name: "ProfileImage",
          props:{},
          data(){
            return{
                imageUrl:"https://res.cloudinary.com/magimaart/image/upload/v1639649492/portfolioApp/painting/yjzy2thjj2bxwuecv2ca.jpg"
            }
          }
    }
</script>