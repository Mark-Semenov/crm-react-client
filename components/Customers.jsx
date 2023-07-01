'use client'

import Table from './crm/Table'
import { columns } from './crm/const/customerColumns'
import { Suspense } from "react";
import { Typography } from "@mui/material";

export const Customers = ({ customers, children }) => {
    return (
        <>
            <Suspense fallback={<Typography variant="h3">Loading...</Typography>} >
                <Table
                    columns={columns}
                    rows={customers}
                >
                </Table>
            </Suspense>
            {children}
        </>

    )
}
export default Customers
