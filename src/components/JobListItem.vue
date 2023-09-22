<template>
    <div 
         class="dataWraper flex flex-row space-y-4 border-b
              py-3 border-black hover:bg-orange-300 px-4
              cursor
         "
    >
        <router-link :to="jobPageHref">
            <h1 class="font-bold text-xl">
             {{ el.title  }}
             <span class="font-thin "> 
                 , {{ el.organization }}, {{ el.degree }}.
             </span>
        
            </h1> 
            <div class="qualificationWrapper">
                <ul class="text-base font-normal">
                    <li class="list">Bac

                    </li>               
                </ul>
            </div>
        </router-link>

            <div>
                <button class="bg-yellow-00 text-orange-400 w-max flex h-8 items-center px-3">
                    expand
                </button>
           </div>

    </div>
</template>

<script>
export default {
 name: "JobListItem",
 props:{  
       el:{
        type: Object,
        required: true,
       }
 },
 computed:{
     jobPageHref(){
         return `/jobs/results/${this.el.id}`
     }
 }
  
}
</script>