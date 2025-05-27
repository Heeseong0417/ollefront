import { useState } from "react";
import SquareTitleButtonCenter from "../button/SquareTitleButtonCenter";
import Image from "next/image";
import 시장소개 from "@/assets/images/mainpage/intromarket.jpg"
import 상인협회 from "@/assets/images/mainpage/handshake.jpg"
import 올레시장 from "@/assets/images/mainpage/ollemarket.jpg"

const MainIntroduction=()=>{

    const [notice, setnotice] = useState([
        {title:"Introduction",subtitle:"시장소개",img:시장소개,discription:"서귀포매일올레시장은 서귀포시 내에서 가장 크고 오래된 상설시장으로 365일 제주도민들과 여행객들로 문전성시를 이루며 경제 활성화에도 큰 역할을 하는 곳입니다.",},
    {title:"Association Merchants",subtitle:"상인협회",img:상인협회,discription:"제주특별자치도상인연합회는제주도내 전통시장의 안정적인 경영여건을 조성과 시장상인의 지위향상 및 권익보호에 힘쓰고 있으며,활력있는 제주경제를 만드는데에 앞장서고 있습니다."},
    {title:"OLLE MARKET",subtitle:"올레시장 상점",img:올레시장,discription:"제주의 특산물인 오메기떡, 감귤, 한라봉, 옥돔, 은갈치, 흑돼지 등을 만나볼 수 있으며, 그 외에도 다양한 볼거리와 먹거리가 있는 전통시장 상점들을 알아보세요."}])

    return(<>
    <div className="main-grid-form-3views">
    {notice.map((item,index)=>(<>
    
        <div className="button-grid-container">
        <div className="main-grid-button shdow-1">
     
     <div style={{position:"relative",backgroundColor:"lightgray",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}className="">
     <Image  className="grid-image3 filter-grayscale" src={item.img}  sizes="100vh" alt=""/>
<div className="button-grid-white-img-title">{item.title}</div>
     </div>
     
     <div style={{flexDirection:"column",justifyContent:"center",textAlign:"left",paddingTop:"0.7rem"}} className="main-grid-button" >
         <p className="main-grid-title">{item.subtitle}</p>
         <p style={{textAlign:"left",fontWeight:300}} className="">{item.discription}</p>
     </div>

</div>
        
        </div>
        </>))}      
    </div>
    </>)
}

export default MainIntroduction;