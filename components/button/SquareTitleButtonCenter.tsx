import Image from "next/image"
import Link from "next/link"


const SquareTitleButtonCenter=({title,subtitle,img,link}:any)=>{

    

    return(<>
    <Link className="main-grid-button shdow-1" href={link}>
     
            <div style={{backgroundColor:"lightgray",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}className="grid-image2">
            <Image  className="grid-image2" src={img}  sizes="80vh" alt=""/>
<div className="button-grid-white-img-title">{title}</div>
            </div>
            
            <div style={{flexDirection:"column",justifyContent:"center",textAlign:"left"}} className=" main-grid-container" >
                <p className="main-grid-title">{subtitle}</p>
                <p style={{textAlign:"left"}} className="main-grid-subtitle"> 바로가기 {">"}</p>
            </div>
       
    </Link>

    </>)
}
export default SquareTitleButtonCenter