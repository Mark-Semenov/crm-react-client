
'use client'
import { getCustomerById } from "@/lib/getCustomerById";
import { DtoCard } from "@/components/crm/DtoCard";
import { Suspense } from "react";


export default async function Customer({ params: { id } }) {

    const customer = await getCustomerById(id)

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <DtoCard customer={customer}></DtoCard>    
            </Suspense>


        </>

    )
}


