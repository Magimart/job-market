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



export const isImportPath = (name: string)=>{
  return name;
}






