import React from 'react'
import { LoaderIcon } from "lucide-react";

// * ================= LOADING COMPONENT ================= 
const loading = () => {
  return (
    <div className=' min-h-screen flex justify-center items-center'><LoaderIcon className=" animate-spin size-10"/></div>
  )
}

export default loading