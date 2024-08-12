import React from 'react'
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar'

function AdminPackage() {
  return (
    <div className='h-screen w-full flex'>
        <section>
            <AdminNavbar/>
        </section>
        <section className=' p-8 '>
            <h1 className='font-bold text-[3rem]'>hello</h1>
        </section>
    </div>
  )
}

export default AdminPackage