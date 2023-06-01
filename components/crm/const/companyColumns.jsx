
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";


export const columns = [
    { field: 'title', headerName: 'Title', editable: true, width: 200 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'emails', headerName: 'Email', width: 150 },
    { field: 'phones', headerName: 'Phone', width: 150 },
    { field: 'websites', headerName: 'Website', width: 150 },
    { renderCell: (params) => <CompanyInfo params={params} /> },
];



const CompanyInfo = ({ params }) => {
    const router = useRouter()
    return (
        <Button onClick={() => router.push(`/crm/companies/${params.id}`)}>More</Button>
    );
};