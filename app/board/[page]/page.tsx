
"use client";

import { useParams, useSearchParams } from 'next/navigation';
import Pagination from '../pagenation';
import { MainNoticeList } from '@/components/config/MainNoticeList';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie, tokenheaders } from '@/config/cookie/cookie';
import { IP } from '@/config/site';
import { useCookies } from 'react-cookie';
export default function ProductPage() {
  const searchParams_ = useSearchParams();
    const search_params = searchParams_.get("search") || ""; // 기본값으로 빈 문자열 사용const [pageList, setpageList] = useState([{id:"",title:"",date:""}])
const [noticelist, setnoticelist] = useState([{id:1,title:"없음",date:"",admin:"",count:"",description:""}])
const [keyword, setkeyword] = useState({sampletext:search_params,search:search_params})
const [login_state, setlogin_state] = useState(false)
const page  = String((useParams()).page);
const totalBooks = 8
const [cookies,setCookie, removeCookie] = useCookies(['token']);

const [pageConfig, setpageConfig] = useState({total:8,currentPage:"1",pageCount:5,itemCountPerPage:3})
useEffect(() => {
  if(search_params!==""){
    setkeyword((prev)=>{return{...prev,sampletext:search_params,search:search_params}})
  }

  return () => {
    
  }
}, [])

useEffect(() => {
if(keyword.search===""){  
  let headers_default = {headers:tokenheaders(getCookie("token")?.accessToken),params:{limit:10,offset:(Number(page)-1)*10}};
    axios.post(IP+"/notice/total",{},headers_default).then((res)=>{
    setpageConfig((prev)=>{return{...prev,total:res.data}})
  })
  axios.post(IP+"/notice/inquiry",{},headers_default).then((res)=>{
    setnoticelist(()=>res.data)
  })
setpageConfig((prev)=> {return{...prev,currentPage:page}})

}else{
  let headers_default = {headers:tokenheaders(getCookie("token")?.accessToken),params:{limit:10,offset:(Number(page)-1)*10,keyword:keyword.search}};
  axios.post(IP+"/notice/searchtotal",{},headers_default).then((res)=>{
  setpageConfig((prev)=>{return{...prev,total:res.data}})
})
axios.post(IP+"/notice/search",{},headers_default).then((res)=>{
  setnoticelist(()=>res.data)
})
setpageConfig((prev)=> {return{...prev,currentPage:page}})
}
  return () => {
    
  }
}, [keyword])

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


    return(<>
    <div className="mainheaderheight"/>

<div className="site-iu-container">
 <h1 className="site-iu-texttitle">공지사항</h1>
 <div className="site-iu-textbox">
 <div style={{textAlign:"left",marginBottom:"0rem"}} className="site-iu-texttitle">
   
     <div className="site-iu-relative-form site-iu-search-form"> 
     <div style={{width:"100%"}}>
      <input onChange={(e)=>setkeyword((prev)=>{return{...prev,sampletext:e.target.value}})} className="site-iu-search-inputtext" type="text"  />
     <button onClick={()=>setkeyword((prev)=>{return{...prev,search:keyword.sampletext}})} className="site-iu-search-button">검색</button>
     </div>
     
 {login_state?(<>
 <Link  className='site-iu-absolute-form' href={`/board/create`}><button style={{borderRadius:"5px",minWidth:"5rem",minHeight:"2rem"}} className="site-iu-search-button">등록</button></Link>
 
 </>):(<></>)}
     </div>
   <p className="site-iu-underline"/> 
   </div>
<ul className="site-iu-table">
<li><span style={{fontWeight:"400"}}>NO. </span><span style={{fontWeight:"400"}}>제목</span><span style={{fontWeight:"400"}}>등록일</span></li>
  {noticelist?.map((item,index)=>(<><Link className="site-iu-table" href={`/board/${page}/${item.id}`}><li><span style={{fontWeight:"300"}}>{item.id}</span><span style={{fontWeight:"400"}}>{item.title}</span><span style={{fontWeight:"300"}}>{item.date}</span></li></Link></>))}

</ul>





  </div>
  <div className="wrapper">
      
      <div className="list-wrapper">
  
  <Pagination
          totalItems={pageConfig.total}
          currentPage={page && parseInt(page) > 0 ? parseInt(page) : 1}
          pageCount={5}
          itemCountPerPage={10}
          search={keyword.search}
        /></div> 
        <div className="mainheaderheight"/>
        </div>

    </div>
  </>)
}

