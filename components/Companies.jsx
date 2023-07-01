'use client';

import Table from './crm/Table'
import { columns } from './crm/const/companyColumns';
import { Suspense } from "react";
import { Typography } from "@mui/material";


export const Companies = ({ companies, children }) => {


    return (
        <>
            <Suspense fallback={<Typography variant="h3">Loading...</Typography>} >
                <Table
                    columns={columns}
                    rows={companies}
                />
            </Suspense>
            {children}
        </>

    )
}

export default Companies
