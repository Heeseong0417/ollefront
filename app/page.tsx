"use client"
import CircularButton from "@/components/button/CircularButton";
import MainSlide from "@/components/main/MainSlide";
import Image from "next/image";
import {CircularButtonList} from "@/components/config/MainButtonList"
import SquareButton from "@/components/button/SquareButton";
import MainWelcome from "@/components/main/MainWelcome";
import metaimg from "@/assets/images/metaimage.png"
import map1 from "@/assets/images/map1.png"
import MainNotice from "@/components/main/MainNotice";
import MainIntroduction from "@/components/main/MainIntroduction";
import ColorButton from "@/components/button/ColorButton";
import MainButton from "@/components/button/MainButton";
import meta from "@/assets/images/metaimage.png"
import meta2 from "@/assets/images/meta.png"
import { useEffect, useState } from "react";
import SquareTitleButton from "@/components/button/SquareTitleButton";
import pic from "@/assets/images/시장이미지2.jpg"
import chart from "@/assets/images/mainpage/ollemarketdata.jpg"
import apple from "@/assets/images/mainpage/searchstore.jpg"
import sign from "@/assets/images/mainpage/signage.jpg"
import MainExitLink from "@/components/main/MainExitLink";
import map from "@/assets/images/mainpage/map.jpg"
import 'react-toastify/dist/ReactToastify.css';
import {CookiesProvider} from 'react-cookie';
import { getCookie } from "@/config/cookie/cookie";
import map_original from "@/assets/images/mainpage/map_original.png"
import Link from "next/link";
import car from "../assets/images/signage/smartparking.png"
import ping from "../assets/icons/ping.png"
import {useRouter} from "next/navigation"
import Map from "../components/map/Map";
export default function Home() {
  
  useEffect(() => {
   
  
    return () => {
      
    }
  }, [])

  const router =useRouter()
  const [coords, setCoords] = useState<any>(null);
  const RECT_WIDTH = 100;  // 직사각형의 너비
  const RECT_HEIGHT = 100; // 직사각형의 높이
  const handleClick = (event:any) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // 직사각형의 좌상단과 우하단 좌표 계산
    const x1 = x - RECT_WIDTH / 2;
    const y1 = y - RECT_HEIGHT / 2;
    const x2 = x + RECT_WIDTH / 2;
    const y2 = y + RECT_HEIGHT / 2;

    setCoords({ x1, y1, x2, y2 });
  };
  return (<>

   <div className="mainheaderheight"/>
   <div style={{overflowX:"hidden",overflowY:"auto"}}><MainSlide/></div>
       <main className="mainview">
 <div className="mainheaderheight"/>
      
  <main className="mainview" style={{overflowX:"hidden",overflowY:"auto"}}>
   
    <div style={{paddingTop:10,width:"100%",height:"100%", alignItems:"center",justifyContent:"center"}}/>
{

}
<h1 className="main-grid-main-title">올레마켓 서비스 안내</h1>
<main className="main-grid-form">
<div className="main-grid-1">
  <SquareTitleButton title={"올레마켓 접속자 통계"} img={chart}link={"/"}/>
</div>
<div className="main-grid-2">
<SquareTitleButton title={"스마트 주차"} img={car}link={"/link/smartparking"}/>
</div>
<div className="main-grid-3">
<SquareTitleButton title={"디지털 사이니지"} img={sign}link={"/link/signage"}/>
</div>
<div className="main-grid-4">
<MainNotice/>
</div>
</main>

  <div className="mainheaderheight"/>
<section style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
  <h1 style={{marginBottom:"2rem"}} className="main-gird-main-title-center">OLLE TOWN에서 올레시장을 만나보세요!</h1>
   <MainExitLink/>
  </section> 
  <div className="mainheaderheight"/>
  <section style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
  <h1 style={{marginBottom:"2rem",textAlign:"left", fontWeight:"700"}} className="main-gird-main-title-center">올레시장을 소개합니다</h1>
   <MainIntroduction/>
  </section> 
  <div className="mainheaderheight"/>
<Map/>
{/**<div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
<h1 style={{marginBottom:"2rem"}} className="main-gird-main-title-center">OLLE MARKET MAP</h1>
  <p style={{fontSize:"1rem",textAlign:"right", paddingRight:"2rem",fontWeight:"300"}} className="main-gird-main-title-center">상점 찾아보기 {">"}</p>
  <div className="map-container">

  <img
    onClick={handleClick}
    className="map-image"
    src={map_original.src}
    useMap="#image-map"
  />
 

  <div className="pingtooltip">
 <div className="">
  <img
    src={ping.src}
    onClick={() => router.push(`/search/약&치킨?gate=${1}`)}
    className="ping ping-1"
  />
<div className="  tooltip">1번 게이트</div>
  </div>
   
  </div>

  <div className="pingtooltip">
  <img
    src={ping.src}
    onClick={() => router.push(`/search/약&치킨?gate=${2}`)}
    className="ping ping-2"
  />
     <div className="  tooltip">2번 게이트</div>
  </div>

  <div className="pingtooltip">
  <img
    src={ping.src}
    onClick={() => router.push(`/search/약&치킨?gate=${3}`)}
    className="ping ping-3"
  />
     <div className="  tooltip">3번 게이트</div>
  </div>

  <div className="pingtooltip">
  <img
    src={ping.src}
    onClick={() => router.push(`/search/약&치킨?gate=${4}`)}
    className="ping ping-4"
  />
     <div className="  tooltip">4번 게이트</div>
  </div>


  <div className="pingtooltip">
  <img
    src={ping.src}
    onClick={() => router.push(`/search/약&치킨?gate=${5}`)}
    className="ping ping-5"
  />
     <div className="  tooltip">5번 게이트</div>
  </div>

  <div className="pingtooltip">
  <img
    src={ping.src}
    onClick={() => router.push(`/search/약&치킨?gate=${6}`)}
    className="ping ping-6"
  />
     <div className="  tooltip">6번 게이트</div>
  </div>

  <div className="pingtooltip">
  <img
    src={ping.src}
    onClick={() => router.push(`/search/약&치킨?gate=${7}`)}
    className="ping ping-7"
  />
     <div className="  tooltip">7번 게이트</div>
  </div>
</div>
{coords && (
        <p>Coords: {coords.x1},{coords.y1},{coords.x2},{coords.y2}</p>
)}</div>
**/}
  <div className="mainheaderheight"/>
  </main>
   </main>
  </>);
}
