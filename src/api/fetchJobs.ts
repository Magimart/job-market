import axios  from "axios";
// import { Job } from "./types";
// import type {Job} from "@/types";
//import type { Job } from "./types";
// import type { Job } from "@/api/types";
interface Job {
    id: string,
    title: string,
    organization: string,
    degree:string,
    jobType:string,
    locations:string[],
    minimumQualification: string[],
    preferredQualification: string[],
    description: string[],
    dateCreated: string
  }



const fetchJobs = async()=>{

        const isBaseUrl = import.meta.env.VITE_APP_API; // import type derectives on env.d.ts
        const isUrl = `${isBaseUrl}/jobs`;
        const isRes = await axios.get<Job[]>(isUrl);
    return isRes.data;
}
export default fetchJobs;


