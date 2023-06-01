
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";


export const columns = [
    { field: 'firstName', headerName: 'Firstname', width: 100 },
    { field: 'lastName', headerName: 'Lastname', width: 100 },
    { field: 'emails', headerName: 'Email', width: 100 },
    { field: 'phones', headerName: 'Phone', width: 100 },
    { field: 'post', headerName: 'Post', width: 150 },
    { field: 'type', headerName: 'Type', width: 80 },
    { field: 'status', headerName: 'Status', width: 80 },
    { renderCell: (params) => <CustomerInfo params={params} /> },
];



const CustomerInfo = ({ params }) => {
    const router = useRouter()
    return (
        <Button onClick={() => router.push(`/crm/customers/${params.id}`)}>More</Button>
    );
};