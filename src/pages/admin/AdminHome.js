
import React from 'react'
import AdminHeader from '../../layouts/admin/AdminHeader'
import Menu from '../../layouts/admin/Menu'
import Content from './Content'


export default function AdminHome() {
  return (
    <>
        <AdminHeader/>
        <div className='row text-start mt-3 px-3'>
            <Menu/>
            <Content/>
        </div>
    </>
  )
}
