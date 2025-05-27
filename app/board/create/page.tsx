"use client"
import Link from "next/link";
import Image from "next/image"
import logo from "@/assets/images/logo.svg"
import { useParams,useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookie, tokenheaders } from "@/config/cookie/cookie";
import axios from "axios";
import { IP } from "@/config/site";
import {timenow} from "@/config/timenow"
const Create=()=>{
  const num  =parseInt(String(useParams().num));
    const page = useParams().page
    const [noticelist, setnoticelist] = useState([{id:1,title:"없음",date:"",admin:"",count:"",description:""}])
const [pageList, setpageList] = useState({title:"없음",date:"",admin:"",count:"",description:""})
const router = useRouter()
const save_notice=()=>{
  let sam = {...pageList}
  sam.admin = getCookie("token").userId;
  sam.date = String(timenow())
  

  let headers_default = {headers:tokenheaders(getCookie("token").accessToken)};
    axios.post(IP+"/notice/save",sam,headers_default).then((res)=>{
      console.log("res : ",res.data)
      setpageList(()=>res.data[0])
      alert("생성이 완료되었습니다!")
    router.push(`/board/1`)
    
    }
      
  ).catch((err)=>alert("에러가 발생했습니다. 다시시도해주세요!"))
}
useEffect(() => {
 

  return () => {
    
  }
}, [])

return(<>
<div className="mainheaderheight"/>
<div className="site-iu-container">
 <h1 className="site-iu-texttitle">공지등록</h1>
 <div className="site-iu-textbox">
    <h1 style={{textAlign:"left",marginBottom:"0rem"}} className="site-iu-texttitle">공지 입력 
      <p className="site-iu-textsub">필수입력 정보는 반드시 입력해 주세요.</p>
    <p className="site-iu-underline"/> 
    </h1>
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">제목</p>
    <input onChange={(e)=>setpageList((prev)=>{return {...prev,title:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="제목" />
  </span>


 <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">내용</p>
    <textarea onChange={(e)=>setpageList((prev)=>{return {...prev,description:e.target.value}})} style={{minHeight:"20rem"}} className="site-iu-inputtext" placeholder="내용" />
  </span>
 

  <div onClick={()=>save_notice()} style={{marginTop:"5%"}} className="site-iu-button"><button  className="site-iu-button" type="submit">등록</button></div>
 </div>
 <div className="mainheaderheight"/>

    </div>
</>)
}

export default Create;
