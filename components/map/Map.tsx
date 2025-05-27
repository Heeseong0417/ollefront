"use client"
import { useRouter } from "next/navigation";
import ping from "../../assets/icons/ping.png"
import { useEffect, useState } from "react";
import map_original from "@/assets/images/mainpage/map_original.png"
const Map=({gate}:any)=>{
  const gatenum = [1,2,3,4,5,6,7]
    const router =useRouter()
    const [gateSelect, setgateSelect] = useState<any>()
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
useEffect(() => {
  
  setgateSelect(()=>gate)
  return () => {
    
  }
}, [])

    return(<>

{gate==="null"||gate===null||gate===undefined?(<><h1 style={{marginBottom:"2rem"}} className="main-gird-main-title-center">OLLE MARKET MAP</h1>
  <p style={{fontSize:"1rem",textAlign:"right", paddingRight:"2rem",fontWeight:"300"}} className="main-gird-main-title-center">출입구를 클릭하세요!</p></>)
:(<></>)}
  <div className="map-container">


  <img
    onClick={handleClick}
    className="map-image"
    src={map_original.src}

  />
 {gatenum.map((index)=>(<>
 
  <div className="pingtooltip">
 <div className="">
  <img
  
    src={ping.src}
    onClick={() => {
      setgateSelect(()=>index)
      router.push(`/search/약&치킨?gate=${index}`)}}
    style={{filter:`${String(gateSelect)===String(index)?"invert(20%)":""}`}}className={`ping ping-${index} ${String(gateSelect)===String(index)?"pulse":""}`}
  />

<div className="  tooltip">{index}번 게이트</div>
  </div>
   
  </div>
 
 </>))}
</div>

    
    </>)
}

export default Map