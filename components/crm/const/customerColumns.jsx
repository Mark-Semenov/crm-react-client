import Link from "next/link";


export const columns = [
    { field: 'id', headerName: 'Id', width: 100, 
     valueGetter: ({row}) => row.id},
    { field: 'firstName', headerName: 'Firstname', width: 100 },
    { field: 'lastName', headerName: 'Lastname', width: 100 },
    { field: 'emails', headerName: 'Email', width: 100 },
    { field: 'phones', headerName: 'Phone', width: 100 },
    { field: 'post', headerName: 'Post', width: 150 },
    { field: 'type', headerName: 'Type', width: 80 },
    { field: 'status', headerName: 'Status', width: 80 },
    { field: 'details', headerName: 'Details', renderCell: (params) => <CustomerInfo params={params} /> },
];



const CustomerInfo = ({ params }) => {
    const id = params.id
    return (
        <Link type="button" href={`/crm/customers/${id}`}>More</Link>
    );
};