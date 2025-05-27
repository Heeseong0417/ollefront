"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles

import Image from 'next/image';
import search from "@/assets/icons/search.png"
import management from "@/assets/images/noticestore/noticemain.jpg"

import Link from 'next/link';
import { useState } from 'react';
import SquareTitleButtonCenter from '@/components/button/SquareTitleButtonCenter';
import notice from "@/assets/images/noticestore/managenotice.jpg"
import store from "@/assets/images/noticestore/managestore.jpg"

const Home=()=>{

  const [search_category, setsearch_category] = useState([{title:"약/치킨",sub:"먹거리"},{title:"농산물",sub:"먹거리"},{title:"정육",sub:"먹거리"},{title:"식사 및 음료",sub:"먹거리"},{title:"젓갈/김치",sub:"먹거리"},{title:"수산",sub:"먹거리"},{title:"생활잡화",sub:"상품"},{title:"상회/특산물",sub:"상품"}])


 
   return(<>

 <div className="mainheaderheight"/>



 <h1 style={{marginBottom:"2rem"}} className="main-gird-main-title-center">상점/공지관리</h1>
    

 <Link href={"/board/1"} style={{position:"relative"}} className='serach-main-img'>
 <Image  className='search-main-img filter-grayscale' src={management} sizes='100vh' alt={''}/>
<div className='search-main-title'><p className='search-main-subtitle'>공지사항 바로가기 {">"}</p>상점/공지관리 이용안내 </div>
 </Link> 
 <main className="mainview">
 <div className="mainheaderheight"/>
 <section className='search-main-between'>
<Link className='search-input-form'  href={'/store/1'} target='blank'>
<Image  className='search-management-button' src={store} sizes='100vh' alt={''}/>
<span className='search-management-title'>OllE Market<span className='search-management-subtitle'>상점관리</span></span>
</Link>
<Link className='search-input-form'  href={'/board/1'} target='blank'>
<Image  className='search-management-button filter-grayscale' src={notice} sizes='100vh' alt={''}/>
<span className='search-management-title'>OllE Market<span className='search-management-subtitle'>공지관리</span></span>
</Link>
 </section>
 <div className="mainheaderheight"/>
 </main>
    </>)
}

export default Home