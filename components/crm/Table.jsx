
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

export default function Table({ columns, rows }) {

    return (
        <>
            <DataGrid
                key={rows?.id ? rows.id : 0}
                columns={columns}
                rows={rows}
                slots={{ toolbar: GridToolbar }}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                editMode="row"
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />

        </>
    )
}


