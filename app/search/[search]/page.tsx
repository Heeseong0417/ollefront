"use client"

import Image from 'next/image';
import search from "@/assets/icons/search.png"
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useParams, useRouter,useSearchParams } from 'next/navigation';

import storeimg from "@/assets/images/searchstore/fish.jpg"
import SquareTitleButtonDis from '@/components/button/SquareTitleButtonDis';
import { IP, tokenheaders } from '@/config/site';
import { getCookie } from '@/config/cookie/cookie';
import axios from 'axios';
import Map from '../../../components/map/Map';
const Home=()=>{
  const search_params = decodeURIComponent(String(useParams().search))
  const [search_category, setsearch_category] = useState([{title:"약/치킨",sub:"먹거리"},{title:"농산물",sub:"먹거리"},{title:"정육",sub:"먹거리"},{title:"식사 및 음료",sub:"먹거리"},{title:"젓갈/김치",sub:"먹거리"},{title:"수산",sub:"먹거리"},{title:"생활잡화",sub:"상품"},{title:"상회/특산물",sub:"상품"}])
  const [keyword, setkeyword] = useState({sampletext:search_params,search:search_params})
  const [marketlist, setmarketlist] = useState<any>([{}])
  const router = useRouter()
  const gate  = useSearchParams().get("gate")||"null"
  const [toggle, settoggle] = useState(false)
  const click_search=()=>{
    console.log(keyword.sampletext)
    
        setkeyword((prev)=>{return{...prev, keyword:keyword.sampletext}})
        let data =keyword.sampletext
        return router.push(`/search/${data.replace("/","&")}?gate=${gate}`)
      }
useEffect(() => {
  setkeyword((prev)=>{return{...prev,search:search_params.replace("&","/"),sampletext:search_params.replace("&","/")}})

  return () => {
    
  }
}, [])

useEffect(() => {
  let headers_default = {headers:tokenheaders(getCookie("token")?.accessToken),params:{keyword:keyword.search}};

  axios.post(IP+"/market/nolimitsearch",{},headers_default).then((res)=>{
  setmarketlist(()=>res.data)
  
})

  return () => {
    
  }
}, [keyword])

   return(<>

<section className='mainview'>
 <div className="mainheaderheight"/>
 <div className='search-input-form'>
  <input value={keyword.sampletext} onChange={(e)=>setkeyword((prev)=>{return{...prev, sampletext:e.target.value}})} className='search-input-border' type='text'/>

  <Image onClick={(e)=>click_search()} className='search-input-icon' src={search} sizes='100vh' alt={''}/>

 </div>
 
 <div className="mainheaderheight"/>

 <h1 style={{marginBottom:"2rem"}} className="main-gird-main-title-center">상점검색</h1>
 {gate!=="null"&&gate!==""&&gate!==undefined&&
(<>
<button style={{backgroundColor:"white", width:"90%",margin:"5%", color:"#444444",border:"1px solid #444444"}} className={"seartch-dark-button"} onClick={()=>settoggle(()=>!toggle)}>{toggle?"지도 닫기 △":"지도 열기 ▽"}</button>
<div className="mainview" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",transition: "max-height 0.5s ease-in-out",height:"100%" ,maxHeight:`${toggle?"100vh":"0rem"}`}}>
<Map gate={gate}/>
</div>
</>)}
    <div style={{borderBottom:"1px solid #444444",height:"2rem"}}/>
    <div className='search-main-between-container'>
      <h1 style={{height:"100%",textAlign:"center",color:"#444444",fontWeight:"600"}} className='search-main-subtitle'>전체</h1>
      {search_category.map((item,index)=>(<>{item.title.replace("&","/")===search_params.replace("&","/")?(<>
    <Link style={{margin:0,marginTop:"0.5rem",marginBottom:"0.5rem"}} className='seartch-dark-button' href={`/search/${(item.title).replace("/","&")}?gate=${gate}`}>#{item.title}</Link>
    </>):(<>
      <Link style={{margin:0,marginTop:"0.5rem",marginBottom:"0.5rem",backgroundColor:"white",color:"#444444",border:"1px solid #444444"}} className='seartch-dark-button' href={`/search/${(item.title).replace("/","&")}?gate=${gate}`}>#{item.title}</Link>

    </>)}
    </>))}</div>
    <div className="button-grid-form">
    
      {gate!=="null"&&gate!==undefined?marketlist.map((item: {
        [x: string]: any; gate:any; tag: string; shopname: any; info: any; homepage: any; 
},index: any)=>
      item.tag?.replace("/","&")&&item.gate===gate?(<>     
      <div  className="button-grid-container">
        {item.imageurl}
       <SquareTitleButtonDis title={item.shopname}subtitle={item.info} img={item.imageUrl}link={item.shoppage}/>
   </div></>):(<></>)
      ):marketlist.map((item: {
        [x: string]: any; gate:any; tag: string; shopname: any; info: any; homepage: any; 
},index: any)=>
      item.tag?.replace("/","&")&&(<>     
      <div  className="button-grid-container">
        {item.imageurl}
       <SquareTitleButtonDis title={item.shopname}subtitle={item.info} img={item.imageUrl}link={item.shoppage}/>
   </div></>)
      )}
    
    </div></section>
    <div className="mainheaderheight"/>
    </>)
}

export default Home