import Link from "next/link";


export const columns = [
    { field: 'id', headerName: 'Id', width: 100, 
     valueGetter: ({row}) => row.id},
    { field: 'title', headerName: 'Title', editable: true, width: 200 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'emails', headerName: 'Email', width: 150 },
    { field: 'phones', headerName: 'Phone', width: 150 },
    { field: 'websites', headerName: 'Website', width: 150 },
    { field: 'details', headerName: 'Details', renderCell: (params) => <CompanyInfo params={params} /> },
];



const CompanyInfo = ({ params }) => {
    const id = params.id
    return (
        <Link href={`/crm/companies/${id}`}>More</Link>
    );
};