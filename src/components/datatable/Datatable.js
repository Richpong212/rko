import React, { useState } from 'react'
import './datatable.css'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';



const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(row => row.id !== id));
  }

  const actionColumn = [
    {
      field: '',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{textDecoration: 'none'}}>
              <div className='viewButton'>View</div>
            </Link> 
             <div 
               className='deleteButton'
               onClick={() => handleDelete(params.row.id)}
             >Delete</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className='datatable'>
        <div className='datattable'>
           Add New User
           <Link to='/users/new' className='LinkName'>
             Add New
           </Link>
        </div>
        <DataGrid
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable