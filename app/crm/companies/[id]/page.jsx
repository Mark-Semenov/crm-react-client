'use client'

import { getCompanyById } from "@/lib/getCompanyById";

export default async function  Company ({ params: { id } }){
    
    const company = await getCompanyById(id);
    
    return (
    <>
        <h1>{company.title}</h1>
    </>
  )
}
