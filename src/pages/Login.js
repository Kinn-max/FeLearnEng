import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  loginApi } from '../api/UserApi'
import ShowNotification from '../Utils/Notification'
import { jwtDecode } from 'jwt-decode'


export default function Login() {
    const [passWord,setPassWord] = useState("")
    const [email,setEmail] = useState("")
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data ={
            email:email,
            password:passWord,
        }
       if(email.length > 0 && passWord.length > 0){

           try {
               const response = await loginApi(data)
               if (response) {
                const token = localStorage.getItem('jwtToken');
                if (token) {
                    const userData = jwtDecode(token);
                    if (userData && userData.role) {
                        console.log(userData.role)
                        if (userData.role === 'ADMIN'|| userData.role === "STAFF") {
                            setTimeout(() => {
                                window.location.href = '/admin/home'; 
                            }, 2000); 
                        }else{
                            setTimeout(() => {
                                window.location.href = '/home'; 
                            }, 2000); 
                        }
                    }
                }
               }
             } catch (error) {
               console.error("Error submitting the form", error);
             }
       }else{
        ShowNotification("error", "Thất bại",  "Vui lòng nhập đủ tên đăng nhập và mật khẩu" ); 
       }
    }
  return (
    <div class="container-fluid custom-page">
        <div class="row bg-white">
        <div class="col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-primary-transparent-3">
            <div class="row w-100 mx-auto text-center">
                <div class="col-md-12 col-lg-12 col-xl-12 my-auto mx-auto w-100">
                    <img src="https://images.pexels.com/photos/16890650/pexels-photo-16890650/free-photo-of-colorful-texts-on-directional-boards.jpeg?auto=compress&cs=tinysrgb&w=600" class="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo"/>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-5 bg-white py-4">
            <div class="login d-flex align-items-center py-2">
                <div class="container p-0">
                    <div class="row">
                        <div class="col-md-10 col-lg-10 col-xl-9 mx-auto">
                            <div class="card-sigin">
                                <div class="mb-5 d-flex">
                                    <a href="/home" class="header-logo"><img src="../assets/images/logo.png" class="desktop-logo ht-40" alt="logo"/>
                                        <img src="../assets/images/brand-logos/desktop-white.png" class="desktop-white ht-40" alt="logo"/>
                                    </a>
                                </div>
                                <div class="card-sigin text-start">
                                    <div class="main-signup-header">
                                        <h3>Welcome back!</h3>
                                        <h6 class="fw-medium mb-4 fs-17">Please sign in to continue.</h6>
                                        <form  onSubmit={handleSubmit}>
                                             <div class="form-group mb-3">
                                                    <label class="form-label">Email</label>
                                                     <input class="form-control" placeholder="Enter your email" type="text"
                                                             value={email}
                                                             onChange={(e)=>setEmail(e.target.value)}
                                                     />
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="form-label">Password</label>
                                                     <input class="form-control" placeholder="Enter your password" type="password"
                                                      value={passWord}
                                                      onChange={(e)=>setPassWord(e.target.value)}
                                                     />
                                            </div>
                                            <button type='submit' class="btn btn-primary btn-block w-100">Sign In</button>
                                            <div class="row mt-3">
                                                <div class="col-sm-6">
                                                    <button class="btn btn-block w-100 btn-facebook"><i class="fab fa-facebook-f me-2"></i> Signup with
                                                        Facebook</button>
                                                </div>
                                                <div class="col-sm-6 mt-2 mt-sm-0">
                                                    <button class="btn btn-info btn-block w-100"><i class="fab fa-twitter me-2"></i> Signup with
                                                        Twitter</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="main-signin-footer mt-5">
                                            <p class="mb-1"><a href="forgot.html">Forgot password?</a></p>
                                            <p>Don't have an account? <Link to={"/register"}>Create an
                                                    Account</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}