"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles

import Image from 'next/image';
import signagemain from "@/assets/images/signage/signage.png"

import Link from 'next/link';
import { useState } from 'react';


const Home=()=>{

  const [search_category, setsearch_category] = useState([{title:"약/치킨",sub:"먹거리"},{title:"농산물",sub:"먹거리"},{title:"정육",sub:"먹거리"},{title:"식사 및 음료",sub:"먹거리"},{title:"젓갈/김치",sub:"먹거리"},{title:"수산",sub:"먹거리"},{title:"생활잡화",sub:"상품"},{title:"상회/특산물",sub:"상품"}])

   return(<> 
   <div className="mainheaderheight"/>
<div style={{position:"relative"}} className='serach-main-img'>
 <Link href={"/"} style={{position:"relative",backgroundColor:"white"}} className='serach-main-img'>
 <Image style={{objectFit:"fill"}} className='search-main-img filter-grayscale' src={signagemain} sizes='100vh' alt={''}/>
<div style={{position:"absolute",top:"50%",left:"50%"}} className='metatitle'>
  <p className='metasubtitle'>사이니지를 통한 편의, 안전, 홍보 솔루션 제공
  </p>디지털 사이니지
</div>

<div style={{position:"absolute",top:"10%",left:"5%"}} className='metasubtitle'>바로가기 {">"}</div>
 </Link>
 </div>
<div style={{backgroundColor:"#444444",width:"100%",height:"80vh"}}>

 
</div>

    </>)
}

export default Home