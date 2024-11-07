import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { activationAccount } from '../api/UserApi';
import ShowNotification from '../Utils/Notification';

export default function ConfirmAccount() {
    const {id} = useParams();
    const [code,setCode] = useState(null)
    
    
    const handleSubmit = async (e)=>{
        try {
            if(code){
               const response =  await activationAccount(id,code)
               if(response){
                ShowNotification("success", "Thành công", "Vui lòng đăng nhập để vào")
                setTimeout(() => {
                    window.location.href = "/login";
                }, 2000); 
               }
            }
        } catch (error) {
            
        }
    }
  return (
    <div class="text-start container-fluid custom-page">
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
                                <div class="card-sigin">
                                    <div class="main-signup-header">
                                        <h3>Confirm Account!</h3>
                                        <h6 class="fw-medium mb-4 fs-17">Please enter the code from the email you just registered.</h6>
                                        <label class="form-label">Email</label> <input class="form-control" placeholder="Enter your email" type="number"
                                                    value={code}
                                                    onChange={(e)=>setCode(e.target.value)}
                                                />
                                            <button  class="btn btn-primary btn-block w-100 my-3"
                                                onClick={handleSubmit}>Send</button>
                                        <div class="main-signin-footer mt-3">
                                            <p>Forget it, <a href="#"> Send me back</a> to the sign in screen.</p>
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
