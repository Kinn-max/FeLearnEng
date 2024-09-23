
import React, { useEffect, useState } from 'react'
import AdminHeader from '../../layouts/admin/AdminHeader'
import Menu from '../../layouts/admin/Menu'
import Content from './Content'
import { jwtDecode } from 'jwt-decode';
import ShowNotification from '../../Utils/Notification';


export default function AdminHome() {
  const [role,setRole] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const userData = jwtDecode(token);
      if (userData && userData.role) {
        setRole(userData.role);
        console.log(userData.role)
        if (userData.role !== 'ADMIN') {
          ShowNotification("error","You do not have permission to access this page!","")
        }
      }
    }
  }, []);
  return (
    <>
      {role === 'ADMIN' ? (
        <>
          <AdminHeader />
          <div className='row text-start mt-3 px-3'>
            <Menu />
            <Content />
          </div>
        </>
      ) : (
        <div className=' py-5 text-center'>Bạn không có quyền truy cập vào trang này!!</div>
      )}
    </>
  );
}