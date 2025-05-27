"use client"
import Link from "next/link";
import Image from "next/image"
import logo from "@/assets/images/logo.svg"
import { useState } from "react";
import axios from "axios"
import { IP } from "@/config/site";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment-timezone";
import { useRouter } from 'next/navigation';

const SiteUp=()=>{
  const timenow=()=>{
    var m = moment().tz("Asia/Seoul"); // ← 이곳이 포인트
    return m.format("YYYY-MM-DD HH:mm:ss");
  }
const [users_table, setusers_table] = useState({userId:"",name:"", password:"",passwordre:"",emailf:"",emaill:"",created_at:timenow() })
const [overlapped_, setoverlapped_] = useState(false)
const idRegex = /^(?=.*[a-zA-Z])[a-zA-Z\d]{6,}$/;
const otherRegex = /^[가-힣]{2,}|[a-zA-Z]{2,}$/;
const passwordRegex =/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const router = useRouter();
const headers = {
  'Content-Type': 'application/json'
}

const validateFormData=(obj:any)=> {

  const details = {
      userId: idRegex.test(obj.userId),
      name: otherRegex.test(obj.name),
      password: passwordRegex.test(obj.password),
      passwordre: passwordRegex.test(obj.passwordre),
      emailRegex: emailRegex.test(obj.emailf+"@"+obj.emaill),
  };

  // 검증 결과를 확인하여 result 값 설정
  let result = Object.values(details).every(value => value === true);

  if(obj.password!==obj.passwordre){
 
    result= false
}
if(!overlapped_){
  result = false
}
return result
}

const validateFormDataLast=(obj:any)=> {

  // 각 필드별로 정규표현식을 검증하여 결과 객체에 저장

      let userId= idRegex.test(obj.userId)
      userId?"":toast("입력한 아이디를 확인해 주세요.")
      overlapped_?"":toast("아이디 중복확인을 진행해 주세요.")
      let name= otherRegex.test(obj.name)
      name?"":toast("입력한 이름을 확인해 주세요.")
      let password= passwordRegex.test(obj.password)
      let passwordre= passwordRegex.test(obj.passwordre)
      password===passwordre&&passwordre&&password?"":toast("비밀번호가 조건에 맞는지 또는 일치하는지 확인해주세요.")
      let email= emailRegex.test(obj.emailf+"@"+obj.emaill)
      email?"":toast("입력 이메일을 확인해 주세요.")

}
const overlapped = (id:String)=>{

  axios.post(IP+"/users/overlapped",{},{headers:headers,params:{userId:id}})
 
  .then(response => {
      console.log('POST 성공:', response.data);
      if(!response.data){
        setoverlapped_(()=>true)
        toast("사용하실 수 있는 아이디 입니다.")  
      }else{
        toast("이미 존재하는 아이디 입니다. 다시 입력해 주세요!") 
      }
    
  })
  .catch(error => {
      console.error('POST 실패:', error);
      toast("잠시후 다시 시도해주세요.")
  });
  

}
const siteUp=()=>{
  const details = {
    userId: (users_table.userId),
    name: (users_table.name),
    password: (users_table.password),
    email: (users_table.emailf+"@"+users_table.emaill),
    role:"ADMIN",
    created_at: users_table.created_at,
    last_login:"",
    status:"inactive"
};

  axios.post(IP+"/users/site_up",details,{headers:headers})
 
  .then(response => {
      console.log('POST 성공:', response.data);
     
        setoverlapped_(()=>true)
        toast("가입완료했습니다. 관리자 승인이 될때까지 기다려주세요!")  
        alert("가입완료했습니다. 관리자 승인이 될때까지 기다려주세요!")
        router.push('/sitein'); 
    
  })
  .catch(error => {
      console.error('POST 실패:', error);
      toast("가입에 실패했습니다! 다시 시도해주세요.")
  });
}

return(<>
 <ToastContainer />
<div className="mainheaderheight"/>
<div className="site-iu-container">
 <h1 className="site-iu-texttitle">회원가입</h1>
 <div className="site-iu-textbox2">
    <h1 style={{textAlign:"left",marginBottom:"0rem"}} className="site-iu-texttitle">필수 입력 정보
      <p className="site-iu-textsub">필수입력 정보는 반드시 입력해 주세요.</p>
    <p className="site-iu-underline"/> 
    </h1>
    
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">이름</p>
    <input onChange={(e)=>{
      setusers_table((prev)=>{return{...prev,name:e.target.value}})
    }} className="site-iu-inputtext" type="text" placeholder="이름" />
  </span>
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">아이디</p>
    <span className="site-iu-inputtext-right">
    <input onChange={(e)=>{
      setusers_table((prev)=>{return{...prev,userId:e.target.value}})
    }} className="site-iu-inputtext" type="text" placeholder="아이디" />

    <button onClick={(e)=>overlapped(users_table.userId)} className="site-iu-button-navy">중복확인</button>    
    </span>
    
  </span>
  {idRegex.test(users_table.userId)?(<></>):(<><p style={{color:"red"}}>아이디는 영문 6자 이상</p></>)}
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">비밀번호</p>
    <input onChange={(e)=>{
      setusers_table((prev)=>{return{...prev,password:e.target.value}})
    }}className="site-iu-inputtext" type="password" placeholder="비밀번호" />
  </span>
  {passwordRegex.test(users_table.password)?(<></>):(<><p style={{color:"red"}}>비밀번호는 영문 8자 이상, 숫자, 특수문자 하나이상</p></>)}
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">비밀번호 확인</p>
    <input onChange={(e)=>{
      setusers_table((prev)=>{return{...prev,passwordre:e.target.value}})
    }} className="site-iu-inputtext" type="password" placeholder="비밀번호 확인" />
  </span>
  {users_table.password===users_table.passwordre?(<><p style={{color:"green"}}>일치</p></>):(<><p style={{color:"red"}}>불일치</p></>)}
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">이메일</p>
    <span className="site-iu-inputtext-right">
    <input onChange={(e)=>{
      setusers_table((prev)=>{return{...prev,emailf:e.target.value}})
    }} className="site-iu-inputtext" type="text" placeholder="이메일" />
    <span style={{marginLeft:"2.5%",marginRight:"2.5%"}}>   @   </span>
    <input onChange={(e)=>{
      setusers_table((prev)=>{return{...prev,emaill:e.target.value}})
    }} className="site-iu-inputtext" type="text" placeholder="입력" />
    
    </span>
  </span>

{
validateFormData(users_table)?(  
<div style={{marginTop:"5%"}} className="site-iu-button" >
    <button onClick={()=>siteUp()} className="site-iu-button" type="submit">회원가입 </button>
    </div>
    ):(
      <div onClick={()=>validateFormDataLast(users_table)} style={{marginTop:"5%",backgroundColor:"lightgray",color:"white"}} className="site-iu-button" >
    <button  className="site-iu-button" type="submit">회원가입 </button>
    </div>
    )}
 </div>
 <div className="mainheaderheight"/>

    </div>
</>)
}

export default SiteUp;
