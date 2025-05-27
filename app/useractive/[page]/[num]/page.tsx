
"use client";

import { useParams, useRouter } from 'next/navigation';

import { MainNoticeList } from '@/components/config/MainNoticeList';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCookie, tokenheaders } from '@/config/cookie/cookie';
import axios from 'axios';
import { IP, headers } from '@/config/site';
import { useCookies } from 'react-cookie';
import Image from 'next/image';
export default function ProductPage() {
    const num  =parseInt(String(useParams().num));
    const page = useParams().page
    const router =useRouter()
    const [noticelist, setnoticelist] = useState([{id:1,title:"없음",date:"",admin:"",count:"",description:""}])
const [pageList, setpageList] = useState({
  id: 1,
  shopname: "",
  ceo: "",
  gate:"",
  phonenumber: "",
  address: "",
  ollehnum: "",
  homepage: "",
  info: "",
  item: "",
  imageUrl: "",
  tag: "",
  shoppage:""
})
const [login_state, setlogin_state] = useState(false)
const [cookies,setCookie, removeCookie] = useCookies(['token']);
useEffect(() => {
  let headers_default = {headers:tokenheaders(getCookie("token")?.accessToken),params:{id:Number(num)}};
    axios.post(IP+"/market/inquiry_id",{},headers_default).then((res)=>{
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

  axios.post(IP+"/market/delete",{},{headers:tokenheaders(getCookie("token")?.accessToken),params:{id:(pageList.id)}}).then(()=>
  {router.push("/market/1")
  alert("삭제가 완료되었습니다!")}
  )
  
}
    return(<>
    <div className="mainheaderheight"/>

<div className="site-iu-container">
 <h1 className="site-iu-texttitle">상점정보</h1>
 <div className="site-iu-textbox">
    <div style={{textAlign:"left",marginBottom:"0rem"}} className="site-iu-texttitle">
   <div style={{justifyContent:"space-between"}} className='site-iu-inputtext-form'>

    <Link href={`/store/${page}`}><button style={{maxWidth:"5rem",minWidth:"4rem"}} className='site-iu-button f1'>이전</button></Link>
    {login_state?(<>
    <div style={{flexDirection:"row",display:"flex"}}>
      <Link style={{paddingRight:"1rem"}} href={`/store/${page}/${num}/edit`}><button style={{maxWidth:"5rem",minWidth:"4rem"}} className='site-iu-button f1'>수정</button></Link>
      <button onClick={()=>{
        delete_notice()
      }} style={{maxWidth:"5rem",minWidth:"4rem"}} className='site-iu-button f1'>삭제</button>

      </div>
    </>):(<></>)}
    </div>
    <p className="site-iu-underline"/> 
    </div>
    
<ul className="site-iu-table">
  <li><span style={{fontWeight:"300"}}>상점</span><span style={{fontWeight:"400"}}>{pageList.shopname}</span><span style={{fontWeight:"300"}}>{pageList.tag}</span></li>
<div style={{alignItems:"flex-start"}} className='metamainform'>
<div className='mainlisttitle'>INFORMATION</div>
<br/>
  <div style={{width:"100%",justifyContent:"space-between"}}><span style={{fontWeight:"300"}}>상점이름  </span><span>{pageList.shopname}</span></div>
  <div style={{width:"100%",justifyContent:"space-between"}}><span style={{fontWeight:"300"}}>판매상품  </span><span>{pageList.item}</span></div>
  <div style={{width:"100%",justifyContent:"space-between"}}><span style={{fontWeight:"300"}}>태그  </span><span>{pageList.tag}</span></div>
  <div style={{width:"100%",justifyContent:"space-between"}}><span style={{fontWeight:"300"}}>게이트  </span><span>{pageList.gate}</span></div>
  <div style={{width:"100%",justifyContent:"space-between"}}><span style={{fontWeight:"300"}}>CEO  </span><span>{pageList.ceo}</span></div>
 <div style={{width:"100%",justifyContent:"space-between"}}><span style={{fontWeight:"300"}}>연락처  </span><span>{pageList.phonenumber}</span></div>
 <div style={{width:"100%",justifyContent:"space-between"}}><span style={{fontWeight:"300"}}>주소  </span><span>{pageList.address}</span></div>
 <div style={{width:"100%",justifyContent:"space-between"}}><span style={{fontWeight:"300"}}>시장번호  </span><span>{pageList.ollehnum}</span></div>
 <div style={{width:"100%",justifyContent:"space-between"}}><span style={{fontWeight:"300"}}>연락처  </span><span>{pageList.item}</span></div>
 <div className='mainlisttitle'>INTRODUCTION</div>
 <br/>
 <div style={{width:"100%",justifyContent:"space-between"}}><span style={{fontWeight:"300"}}></span><span>{pageList.info}</span></div>
 <div className='mainlisttitle'>MARKET IMAGE</div>
 <br/>

 <Image src={pageList.imageUrl} width={300 } height={300} sizes='100vh' alt={''} />
 
   </div>
 


<li style={{marginBottom:"3rem"}}></li>

</ul>




  </div>


    </div>
  </>)
}

