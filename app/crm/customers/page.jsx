
'use client'

import Panel from "@/components/crm/Panel";
import Table from "@/components/crm/Table";
import { columns } from "@/components/crm/const/customerColumns";
import { getCustomers } from "@lib/getCustomers";
import { Suspense } from "react";

export default async function Customers() {

  const customers = await getCustomers()

  return (
    <>
      <Panel />
      <Suspense fallback={<div>Loading...</div>}>
        <Table
          columns={columns}
          rows={customers}
        />
      </Suspense>
    </>



  )
}


