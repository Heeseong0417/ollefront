
"use client";

import { useParams, useRouter } from 'next/navigation';

import { MainNoticeList } from '@/components/config/MainNoticeList';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCookie, tokenheaders } from '@/config/cookie/cookie';
import axios from 'axios';
import { IP, headers } from '@/config/site';
import { useCookies } from 'react-cookie';
export default function ProductPage() {
    const num  =parseInt(String(useParams().num));
    const page = useParams().page
    const [noticelist, setnoticelist] = useState([{id:1,title:"없음",date:"",admin:"",count:"",description:""}])
const [pageList, setpageList] = useState({id:1,title:"없음",date:"",admin:"",count:"",description:""})
const [login_state, setlogin_state] = useState(false)
const [cookies,setCookie, removeCookie] = useCookies(['token']);
const router = useRouter()
useEffect(() => {
  let headers_default = {headers:tokenheaders(getCookie("token")?.accessToken),params:{id:Number(num)}};
    axios.post(IP+"/notice/inquiry_id",{},headers_default).then((res)=>{
      console.log("res : ",res.data)
      setpageList(()=>res.data[0])}
  )

  return () => {
    
  }
}, [])

useEffect(() => {
  //setCookie("token",{},{})
  const token = cookies.token;
  
  if(token===undefined){
     
  }else{
      console.log(token)
      if (token.accessToken?.length>0) {
          setlogin_state(true);
      } else {
          setlogin_state(false);
  
      }  
  }
  
  
}, [cookies]);

const delete_notice=()=>{

  axios.post(IP+"/notice/delete",{},{headers:tokenheaders(getCookie("token")?.accessToken),params:{id:(pageList.id)}})
alert("삭제 완료했습니다!")
router.push(`/board/${page}`)

}
    return(<>
    <div className="mainheaderheight"/>

<div className="site-iu-container">
 <h1 className="site-iu-texttitle">공지사항</h1>
 <div className="site-iu-textbox">
    <div style={{textAlign:"left",marginBottom:"0rem"}} className="site-iu-texttitle">
   <div style={{justifyContent:"space-between"}} className='site-iu-inputtext-form'>

    <Link href={`/board/${page}`}><button style={{maxWidth:"5rem",minWidth:"4rem"}} className='site-iu-button f1'>이전</button></Link>
    {login_state?(<>
    <div style={{flexDirection:"row",display:"flex"}}>
      <Link style={{paddingRight:"1rem"}} href={`/board/${page}/${num}/edit`}><button style={{maxWidth:"5rem",minWidth:"4rem"}} className='site-iu-button f1'>수정</button></Link>
      <button onClick={()=>{
        delete_notice()
      }} style={{maxWidth:"5rem",minWidth:"4rem"}} className='site-iu-button f1'>삭제</button>

      </div>
    </>):(<></>)}
    </div>
    <p className="site-iu-underline"/> 
    </div>
    
<ul className="site-iu-table">
  <li><span style={{fontWeight:"300"}}>공지</span><span style={{fontWeight:"400"}}>{pageList.title}</span><span style={{fontWeight:"300"}}>{pageList.date}</span></li>
<div>{pageList.description}</div>
<li style={{marginBottom:"3rem"}}></li>

</ul>




  </div>


    </div>
  </>)
}

