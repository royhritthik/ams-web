// @ts-nocheck
'use client'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const page = () => {
  const [students, setStudents] = React.useState([])

  React.useEffect(() => {
    fetch('/api/student')
      .then(res => res.json())
      .then(data => {
        setStudents(data.data)
      })
  }, [])

  return (
    <div className='flex justify-center items-center'>
      <div className='max-w-screen-lg mx-auto'>
        <h1 className='text-4xl font-bold text-center'>View Students</h1>
        <div className='mt-8 space-y-6'>
          <DataGrid
            style={{
              width: '100%'

              // text white
            }}
            rows={students}
            columns={[
              { field: 'id', headerName: 'ID', width: 90 },
              { field: 'name', headerName: 'Name', width: 200 },
              { field: 'email', headerName: 'Email', width: 200 },
              { field: 'phone', headerName: 'Phone', width: 200 },
              { field: 'regNo', headerName: 'Registration No', width: 200 }
            ]}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            className='w-full text-white'
          />
        </div>
      </div>
    </div>
  )
}

export default page
