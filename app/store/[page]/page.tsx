
"use client";

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Pagination from '../pagenation';
import { MainNoticeList } from '@/components/config/MainNoticeList';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie, tokenheaders } from '@/config/cookie/cookie';
import { IP } from '@/config/site';
import { useCookies } from 'react-cookie';
import Image from 'next/image';
export default function ProductPage() {

const  params = useSearchParams()
const search_params= params.get("search")===null?"":String(params.get("search"))
const [noticelist, setnoticelist] = useState<any>([{id:1,shopname:"없음",tag:"",date:"",admin:"",count:"",description:""}])
const [keyword, setkeyword] = useState({sampletext:search_params,search:search_params})
const [login_state, setlogin_state] = useState(false)
const page  = String((useParams()).page);
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
    axios.post(IP+"/market/total",{},headers_default).then((res)=>{
    setpageConfig((prev)=>{return{...prev,total:res.data}})
  })
  axios.post(IP+"/market/inquiry",{},headers_default).then((res)=>{
    setnoticelist(()=>res.data)
  })
setpageConfig((prev)=> {return{...prev,currentPage:page}})

}else{
  let headers_default = {headers:tokenheaders(getCookie("token")?.accessToken),params:{limit:10,offset:(Number(page)-1)*10,keyword:keyword.search}};
  axios.post(IP+"/market/searchtotal",{},headers_default).then((res)=>{
  setpageConfig((prev)=>{return{...prev,total:res.data}})
})
axios.post(IP+"/market/search",{},headers_default).then((res)=>{
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
 <h1 className="site-iu-texttitle">상점관리</h1>
 <div style={{width:"95%",marginLeft:"2.5%",marginRight:"2.5%"}} className=" site-iu-container">{/**site-iu-textbox**/}
 <div style={{textAlign:"left",marginBottom:"0rem"}} className="site-iu-texttitle">

     <div className="site-iu-relative-form site-iu-search-form"> 
     <div style={{width:"100%"}}>
      <input value={keyword.sampletext} onChange={(e)=>setkeyword((prev)=>{return{...prev,sampletext:e.target.value}})} className="site-iu-search-inputtext" type="text"  />
     <button onClick={()=>setkeyword((prev)=>{return{...prev,search:keyword.sampletext}})} className="site-iu-search-button">검색</button>
     </div>
     
 {login_state?(<>
 <Link  className='site-iu-absolute-form' href={`/store/create`}><button style={{borderRadius:"5px",minWidth:"5rem",minHeight:"2rem"}} className="site-iu-search-button">등록</button></Link>
 
 </>):(<></>)}
     </div>
   <p className="site-iu-underline"/> 
   </div>
<ul className="site-iu-table">
<li style={{gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"}}>

  <span style={{fontWeight:"400"}}>NO. </span>
  <span style={{fontWeight:"400"}}>상점이름 </span>
  <span style={{fontWeight:"400"}}>판매상품 </span>
  <span style={{fontWeight:"400"}}>태그 </span>
  <span style={{fontWeight:"400"}}>CEO </span>
  <span style={{fontWeight:"400"}}>게이트 </span>
  <span style={{fontWeight:"400"}}>연락처 </span>
  <span style={{fontWeight:"400"}}>주소 </span>
  <span style={{fontWeight:"400"}}>시장번호 </span>
  <span style={{fontWeight:"400"}}>상점설명 </span>


</li>
 {/** 
  * <li><span style={{fontWeight:"400"}}>NO. </span><span style={{fontWeight:"400"}}>상점이름</span><span style={{fontWeight:"400"}}>태그</span></li>
 
  noticelist?.map((item,index)=>(<>
  <Link className="site-iu-table" href={`/store/${page}/${item.id}`}><li><span style={{fontWeight:"300"}}>{item.id}</span><span style={{fontWeight:"400"}}>{item.shopname}</span><span style={{fontWeight:"300"}}>{item.tag}</span></li></Link>
  
  </>))
  */}
{
noticelist?.map((item: { id?: any; },index: string | number)=>(<>{/**JSON.stringify(noticelist[index])**/}
  <Link className="site-iu-table" href={`/store/${page}/${item.id}`}>
    <li style={{gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"}}>

      <span className='ellipsis' style={{fontWeight:"300"}}>{noticelist[index].id}</span>
      <span className='ellipsis' style={{fontWeight:"300"}}>{noticelist[index].shopname}</span>
      <span className='ellipsis' style={{fontWeight:"300"}}>{noticelist[index].item}</span>
      <span className='ellipsis' style={{fontWeight:"300"}}>{noticelist[index].tag}</span>
      <span className='ellipsis' style={{fontWeight:"300"}}>{noticelist[index].ceo}</span>
      <span className='ellipsis' style={{fontWeight:"300"}}>{noticelist[index].gate}</span>
      <span className='ellipsis' style={{fontWeight:"300"}}>{noticelist[index].phonenumber}</span>
      <span className='ellipsis' style={{fontWeight:"300"}}>{noticelist[index].address}</span>
      <span className='ellipsis' style={{fontWeight:"300"}}>{noticelist[index].ollehnum}</span>
      <span className='ellipsis' style={{fontWeight:"300"}}>{noticelist[index].info}</span>
      
      </li>
    </Link>
  
  </>))
}
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

