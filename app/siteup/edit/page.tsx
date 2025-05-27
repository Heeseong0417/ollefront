"use client"
import Link from "next/link";
import Image from "next/image"
import logo from "@/assets/images/logo.svg"
import { useEffect, useState } from "react";
import { IP, headers } from "@/config/site";
import { getCookie, tokenheaders } from "@/config/cookie/cookie";
import axios from "axios";
import moment from "moment-timezone";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
const SiteUpEdit=()=>{
  const timenow=()=>{
    var m = moment().tz("Asia/Seoul"); // ← 이곳이 포인트
    return m.format("YYYY-MM-DD HH:mm:ss");
  }
  const passwordRegex =/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const [userdata, setuserdata] = useState({name:"",userId:"",password:"",passwordn:"",email:"",emailf:"",emaill:""})
  const router = useRouter();
  useEffect(() => {
  console.log( ({headers:tokenheaders(getCookie("token").accessToken),params:{userId:getCookie("token").userId}}))
  axios.post(IP+"/users/finduser",{},{headers:tokenheaders(getCookie("token").accessToken),params:{userId:getCookie("token").userId}}).then((res)=>
  {
    console.log(res.data)
  setuserdata(()=>res.data)
  setuserdata((prev)=>{return{...prev,emailf:prev.email.split("@")[0],emaill:prev.email.split("@")[1]}})
}
  
  )

  

  return () => {
    
  };
}, []);
  const edituser=()=>{
    let password_select = userdata.passwordn?userdata.passwordn:userdata.password
    const details = {
      userId: (userdata.userId),
      name: (userdata.name),
      password: password_select,
      email: (userdata.emailf+"@"+userdata.emaill),
      role:"ADMIN",
      created_at: timenow,
      last_login:"",
      status:"inactive"
  };

if(passwordRegex.test(details.password)&&emailRegex.test(details.email)){    
  axios.post(IP+"/users/update_user",details,{headers:tokenheaders(getCookie("token").accessToken),params:{
    userId: (userdata.userId), password: password_select,email: (userdata.emailf+"@"+userdata.emaill),
  }
}
  )
   
    .then(response => {
        console.log('POST 성공:', response.data);
       
    
         
          alert("가입정보가 수정되었습니다 !")
        router.push("/")
      
    })
    .catch(error => {
        console.error('POST 실패:', error);
        alert("가입에 실패했습니다! 다시 시도해주세요.")
        router.push("/")
    });}else{
      alert("다시입력하세요!")
    }
  }
return(<>
<ToastContainer/>
<div className="mainheaderheight"/>
<div className="site-iu-container">
 <h1 className="site-iu-texttitle">회원정보 수정</h1>
 <div className="site-iu-textbox">
    <h1 style={{textAlign:"left",marginBottom:"0rem"}} className="site-iu-texttitle">필수 입력 정보 수정
      <p className="site-iu-textsub">필수입력 정보는 반드시 입력해 주세요.</p>
    <p className="site-iu-underline"/> 
    </h1>
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">이름</p>
    <input value={userdata?.name} className="site-iu-inputtext" type="text" placeholder="이름" />
  </span>
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">아이디</p>
    <span className="site-iu-inputtext-right">
    <input value={userdata.userId} className="site-iu-inputtext" type="text" placeholder="아이디" />
   
    </span>
    
  </span>
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">비밀번호 변경</p>
    <input onChange={(e)=>setuserdata((prev)=>{return{...prev,passwordn:e.target.value}})} defaultValue={userdata.userId} className="site-iu-inputtext" type="password" placeholder="비밀번호" />
      </span>
{passwordRegex.test(userdata.passwordn)?(<>{userdata.passwordn!==userdata.password?(<></>):(<><p style={{color:"red"}}>이전 비밀번호와 일치합니다. 변경해주세요!</p></>)}</>):(<><p style={{color:"red"}}>비밀번호는 영문 8자 이상, 숫자, 특수문자 하나이상</p></>)}

  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">이메일 변경</p>
    <span className="site-iu-inputtext-right">
    <input defaultValue={userdata.email.split("@")[0]} onChange={(e)=>setuserdata((prev)=>{return{...prev,emailf:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="이메일" />
    <span style={{marginLeft:"2.5%",marginRight:"2.5%"}}>   @   </span>
    <input defaultValue={userdata.email.split("@")[1]} onChange={(e)=>setuserdata((prev)=>{return{...prev,emaill:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="입력" />
    
    </span>
    
  </span>
  {emailRegex.test(userdata.emailf+"@"+userdata.emaill)?(<>{userdata.email!==userdata.emailf+"@"+userdata.emaill?(<></>):(<><p style={{color:"red"}}>이전 이메일과 일치합니다. 변경해주세요!</p></>)}</>):(<><p style={{color:"red"}}>이메일 입력</p></>)}

{}
  <div  style={{marginTop:"5%"}} className="site-iu-button" ><button onClick={()=>{edituser()}}  className="site-iu-button" type="submit">완료 </button></div>
 </div>
 <div className="mainheaderheight"/>

    </div>
</>)
}

export default SiteUpEdit;
