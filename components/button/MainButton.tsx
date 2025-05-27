import Link from "next/link"
import Image from "next/image"
const MainButton=({bgcolor,textcolor,title,subtitle,image,go,link}:any)=>{


    return(<>
  <div style={{backgroundColor:bgcolor,height:"100%"}} className="slide-grid-btn1 shadow-1" > 
    <Link style={{width:"100%",height:"100%"}} href={link}>
    <div style={{color:textcolor,position:"relative",height:"100%",width:"100%"}} className="grid-element">
    <div className="grid-img1">
    {image===""?(<></>):(<Image  src={image} alt={"올레시장 이미지"} fill className="grid-img1"/>)}
    </div>
    <span className="slide-grid-subtext">{subtitle}</span>
  <span className="slide-grid-text">{title}</span>
  <span className="slide-grid-go">{go?"바로가기 >":""}</span>
  </div>
  
   </Link></div>
    </>)
}

export default MainButton