import { createRouter, createWebHashHistory  } from "vue-router";
import HomePage from "../views/HomePage.vue";
import JobSearchResultPage from "../views/JobSearchResultPage.vue";
import SingleJobPage from "../views/SingleJobPage.vue";
import TeamsPage from "../views/TeamsPage.vue"
import AddNewJobPage from "../views/AddNewJobPage.vue";


const routes =[

    {
        path: "/",
        name:"home",
        component: HomePage
    },
    
    {
        path: "/jobs/results",
        name:"searchResults",
        component: JobSearchResultPage
    },
    {
        path: "/jobs/results/:id", 
        name: "SingleJobPage",
        component:SingleJobPage
    },
    {
        path: "/add-new-job",
        name:"addNewJob",
        component: AddNewJobPage
    },
    {
        path: "/teams",
        name:"teamsPage",
        component: TeamsPage
    },
]

const router = createRouter({
     history:createWebHashHistory(),
     routes,
     scrollBehavior(){
        return { top:0, left:0, behavior: "smooth"}
     }
})


export default router;






