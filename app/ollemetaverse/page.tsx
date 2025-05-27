"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles

import Image from 'next/image';
import search from "@/assets/icons/search.png"
import metamain from "@/assets/images/metaverse/metamain.jpg"
import metaimage from "@/assets/images/metaverse/metaimage.png"

import Link from 'next/link';
import { useState } from 'react';
import earth from "@/assets/icons/earth.png"
import game from "@/assets/icons/game.png"
import map from "@/assets/icons/map.png"
import shop from "@/assets/icons/shop.png"
import and from "../../assets/icons/andcon.png"
import win from "../../assets/icons/windows.png"
import InterFace from "../../assets/images/metaverse/interface.png"
const Home=()=>{

  const [search_category, setsearch_category] = useState([{title:"약/치킨",sub:"먹거리"},{title:"농산물",sub:"먹거리"},{title:"정육",sub:"먹거리"},{title:"식사 및 음료",sub:"먹거리"},{title:"젓갈/김치",sub:"먹거리"},{title:"수산",sub:"먹거리"},{title:"생활잡화",sub:"상품"},{title:"상회/특산물",sub:"상품"}])

   return(<>

 <div className="mainheaderheight"/>
 
 <div style={{position:"relative"}} className='serach-main-img'>
 <Image className='search-main-img filter-grayscale' src={metamain} sizes='100vh' alt={''}/>
<div style={{position:"absolute",top:"50%",left:"50%"}} className='metatitle'><div className='metasubtitle'>온라인으로 만나는 서귀포 올레시장</div>Metaverse Platform
<Link className='mteabutton' href={'/myolletown'}>PLAY</Link>
</div>

 </div>
 <main className="mainview">
 <div className="mainheaderheight"/>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}} >
<a style={{
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  color: 'black',
  fontWeight: 'bold',
  paddingTop: '0.5rem', 
  paddingBottom: '0.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem', 
  borderRadius: '0.5rem', 
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}} href="https://olleassets.s3.ap-northeast-2.amazonaws.com/download/ollemarket.exe" download >
  
   <Image className='pr-2 ' src={win} width={30} height={30} alt={''}/>      <span>PC (window) 다운로드  {" >"}</span>
    </a>

    <a style={{
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  color: 'black',
  fontWeight: 'bold',
  paddingTop: '0.5rem', 
  paddingBottom: '0.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem', 
  borderRadius: '0.5rem', 
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}} href="https://olleassets.s3.ap-northeast-2.amazonaws.com/download/ollemarket.apk" download >
  
   <Image className='pr-2 ' src={and} width={30} height={30} alt={''}/>      <span>안드로이드 다운로드  {" >"}</span>
    </a>

</div>

<section className='metaflex'>
  <div className='matacontainer'>
  <div className='metalistbutton'><Image className='metaimage' src={earth} sizes='80vh' alt={''}/>
<span className='mainlisttitle'><p>현실 그대로 반영된</p>
디지털 트윈기술</span>
</div>
</div>

<div className='matacontainer'>
  <div className='metalistbutton'><Image className='metaimage' src={map} sizes='80vh' alt={''}/>
<span className='mainlisttitle'><p>메타버스 실제시장 환경
</p>
로드뷰 인식</span>
</div>
</div>

<div className='matacontainer'>
  <div className='metalistbutton'><Image className='metaimage' src={shop} sizes='80vh' alt={''}/>
<span className='mainlisttitle'><p>올레시장 상품
</p>
온라인 쇼핑몰 구매</span>
</div>

</div>

<div className='matacontainer'>
  <div className='metalistbutton'><Image className='metaimage' src={game} sizes='80vh' alt={''}/>
<span className='mainlisttitle'><p>다운로드 없는
</p>
메타버스 플레이</span>
</div>
</div>

</section>
<div className="mainheaderheight"/>
<Image style={{width:"80%",margin:"10%"}} className='metaimage' src={InterFace} sizes='100vh' alt={''}/>


 <div className="mainheaderheight"/>

</main>
    </>)
}

export default Home