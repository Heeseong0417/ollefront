"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles

import Image from 'next/image';

import parkingmain from "@/assets/images/signage/smartparking.png"

import Link from 'next/link';
import { useState } from 'react';


const Home=()=>{

  const [search_category, setsearch_category] = useState([{title:"약/치킨",sub:"먹거리"},{title:"농산물",sub:"먹거리"},{title:"정육",sub:"먹거리"},{title:"식사 및 음료",sub:"먹거리"},{title:"젓갈/김치",sub:"먹거리"},{title:"수산",sub:"먹거리"},{title:"생활잡화",sub:"상품"},{title:"상회/특산물",sub:"상품"}])

   return(<>
   
  <div className="mainheaderheight"/>  
<div style={{position:"relative"}} className='serach-sub-img'>
 <Link href={"/"} style={{position:"relative",width:"100%"}} className='serach-sub-img'>
 <Image className='search-main-img filter-grayscale' src={parkingmain} sizes='100vh' alt={''}/>

<div style={{position:"absolute",top:"50%",right:"100%",backgroundColor:"red"}} className='metatitle'><div className='metasubtitle'>공공주차장 부족을 해결할 수 있는 솔루션 실용화</div>스마트 주차</div>
<div style={{position:"absolute",top:"10%",left:"5%"}} className='metasubtitle'>바로가기 {">"}</div>
 </Link>
 </div>
<div style={{backgroundColor:"#444444",width:"100%",height:"80vh"}}>

 
</div>

    </>)
}

export default Home