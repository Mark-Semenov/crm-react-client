
'use client'
import Panel from "@/components/crm/Panel"
import { Suspense } from "react"
import Table from "@/components/crm/Table"
import { getCompanies } from "@/lib/getCompanies"
import { columns } from "@/components/crm/const/companyColumns"

export default async function Company () {

  const companies = await getCompanies()

  return (
    <>
      <Panel />
      <Suspense fallback={<div>Loading...</div>}>
          <Table
            columns={columns}
            rows={companies}
          />
        </Suspense>
    </>
    
  )
}

