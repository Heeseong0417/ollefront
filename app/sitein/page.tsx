"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios";
import { IP ,headers} from "@/config/site"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { 
  setCookie, getCookie, removeCookie,tokenheaders
} from '@/config/cookie/cookie';
const SiteIn=()=>{
const [loginform, setloginform] = useState({userId:"",password:""})
const router = useRouter();
const createCookie = async (tokenname:any,token: string) => {

  setCookie(tokenname, token, {
    path: '/',
    secure: false,

    maxAge: 3000
  })


};

    const logIn=()=>{
     
      axios.post(IP+"/users/login",loginform,{headers:headers})
      .then(response => {

          console.log('POST 성공:', response.data);
          if((response.data.accessToken.length>0&&response.data.status==="active")){
            toast("로그인하였습니다!")  
            createCookie("token",response.data)

            router.push("/",response.data.accessToken);
          } else if(response.data.status==="inactive"){
            toast("아직 승인되지 않았습니다. 승인 완료될때까지 기다려 주세요!")
          }else{
            toast("아이디 또는 비밀번호가 일치하지않습니다. 다시시도해주세요!") 
          }
        
      })
      .catch(error => {
          console.error('POST 실패:', error);
          toast("아이디 또는 비밀번호를 다시입력하세요.")
      });

    }

    useEffect(() => {
      
    
      return () => {
       
      }
    }, [])
    

    return(<>
    <ToastContainer/>
<div className="mainheaderheight"/>
<div className="site-iu-container">
 <h1 className="site-iu-texttitle">로그인</h1>
 <div className="site-iu-textbox2">
<div className="site-iu-round-form">
    <p>관리자를 위한 서비스 입니다.</p>
    <p>일반 사용자들은 이용할 수 없습니다.</p>
</div>
  <span style={{flexDirection:"column",marginBottom:"0.5rem"}} className="site-iu-inputtext-form">
    <p style={{width:"100%",marginBottom:"0.5rem"}} className="site-iu-inputtext-left">아이디</p>
    <input onChange={(e)=> setloginform((prev)=> {return{...prev,userId:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="아이디" />
  </span>
  <span style={{flexDirection:"column",marginBottom:"0.5rem"}} className="site-iu-inputtext-form">
    <p style={{width:"100%",marginBottom:"0.5rem"}} className="site-iu-inputtext-left">비밀번호</p>
    <input onChange={(e)=> setloginform((prev)=> {return{...prev,password:e.target.value}})} className="site-iu-inputtext" type="password" placeholder="비밀번호" />
  </span>

  <div onClick={(e)=>logIn()} style={{marginTop:"5%"}} className="site-iu-button cursor-pointer" ><button  className="site-iu-button" type="submit">로그인 </button></div>
  <Link style={{marginTop:"5%"}} className="" href={"/siteup"}><button  className="" type="submit">회원가입</button></Link>
 </div>
 <div className="mainheaderheight"/>

    </div>  
    </>)
}

export default SiteIn