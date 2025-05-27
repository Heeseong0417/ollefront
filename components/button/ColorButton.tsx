import Link from "next/link"
import Image from "next/image"
const ColorButton=({bgcolor,textcolor,title,subtitle,image,go,link}:any)=>{


    return(<>
 
    <Link href={link}>
    <div style={{width:"100%",backgroundColor:bgcolor,color:textcolor,position:"relative"}} className="slide-grid-btn1">
       
        <span style={{fontWeight:"500"}} className="colorbtn-title">{title}</span>
        
        <span style={{fontWeight:"500"}}  className="colorbtn-subtitle">{subtitle}</span>
        {image!==""?(<><Image src={image} width={0} height={0} sizes={"100vh"} alt={""}/></>):(<></>)}
        <span className="colorbtn-next">{go?"바로가기 >":""}</span>

    </div></Link>
    </>)
}

export default ColorButton