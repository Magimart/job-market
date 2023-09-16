import axios  from "axios";

const fetchJobs = async()=>{

        const isBaseUrl = import.meta.env.VITE_APP_API;
        const isUrl = `${isBaseUrl}/jobs`;
        const isRes = await axios.get(isUrl);
    return isRes.data;
}
export default fetchJobs;


