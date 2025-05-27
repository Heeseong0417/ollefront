"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles

import Image from 'next/image';
import search from "@/assets/icons/search.png"
import searchmarket from "@/assets/images/searchstore/fish.jpg"
import searchitems from "@/assets/images/searchstore/shoppingbag.jpg"
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Home=()=>{

  const [search_category, setsearch_category] = useState([{title:"약/치킨",sub:"먹거리"},{title:"농산물",sub:"먹거리"},{title:"정육",sub:"먹거리"},{title:"식사 및 음료",sub:"먹거리"},{title:"젓갈/김치",sub:"먹거리"},{title:"수산",sub:"먹거리"},{title:"생활잡화",sub:"상품"},{title:"상회/특산물",sub:"상품"}])
  const [keyword, setkeyword] = useState({sampletext:"",search:""})
const router = useRouter()

  const click_search=()=>{
console.log(keyword.sampletext)

    setkeyword((prev)=>{return{...prev, keyword:keyword.sampletext}})
    let data =keyword.sampletext
    return router.push(`/search/${data.replace("/","&")}`)
  }
   return(<>

 <div className="mainheaderheight"/>
 <main className="mainview">
 <div className='search-input-form'>
  <input value={keyword.sampletext} onChange={(e)=>setkeyword((prev)=>{return{...prev, sampletext:e.target.value}})} className='search-input-border' type='text'/>

  <Image onClick={(e)=>click_search()} className='search-input-icon' src={search} sizes='100vh' alt={''}/>

 </div>
 </main>
 <div className="mainheaderheight"/>
 <div style={{position:"relative"}} className='serach-main-img'>
 <Image className='search-main-img filter-grayscale' src={searchmarket} sizes='100vh' alt={''}/>
<div className='search-main-title'><p className='search-main-subtitle'>다양한 먹거리와 볼거리가 가득한</p>올레시장 상점검색</div>
 </div>
 <Link href={"/"} style={{position:"relative", backgroundColor:"lightgray"}} className='search-sub-img'>
 <Image  className='search-sub-img ' src={searchitems} sizes='100vh' alt={''}/>
<div style={{color:"#444444",width:"90%"}} className='search-main-bottomtitle'><span style={{color:"#444444"}} className='search-main-subtitle'>쇼핑하러 가기 {">"}</span><span style={{fontWeight:"400", flexDirection:"row",display:"flex", width:"auto"}}>이제는 온라인에서도 <span style={{fontWeight:"700",paddingLeft:"0.5rem",width:"auto"}}> 올레시장을 만나보세요.</span></span> </div>
 </Link>
 <div className="mainheaderheight"/>
 <main className="mainview">
 <div className='search-main-between'>

  <div className='search-main-between-container-col'>
<span style={{}} className='search-main-between-title'># OllE Keyword</span>
<span className='search-main-between-subtitle' >올레시장 상점검색 서비스를 이용해보세요.</span>
  </div>
  <div className='search-main-between-container-col'>
  <div style={{marginBottom:"2rem"}} className='search-main-between'>

    <span style={{textWrap:"nowrap",height:"100%",width:""}} className=''>올레시장 먹을거리</span>
    <div className='search-main-between-container-harf'>{search_category.map((item,index)=>(<>{item.sub==="먹거리"?(<>
    <Link className='seartch-dark-button' href={`/search/${(item.title).replace("/","&")}`}>#{item.title}</Link>
    </>):(<>
    
    </>)}
    </>))}</div>
    
  </div>

  <div className='search-main-between'>

    <span style={{textWrap:"nowrap",alignItems:"flex-start",height:"100%"}} className=''>다양한 제품들</span>
    <div className='search-main-between-container-harf'>{search_category.map((item,index)=>(<>{item.sub==="상품"?(<>
    <Link className='seartch-dark-button' href={`/search/${(item.title).replace("/","&")}`}>#{item.title}</Link>
    </>):(<>
    
    </>)}</>))}</div>
    
  </div>
</div>
 </div>
 </main>
    </>)
}

export default Home