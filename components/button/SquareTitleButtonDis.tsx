import Image from "next/image"
import Link from "next/link"


const SquareTitleButtonDis=({title,subtitle,img,link}:any)=>{

    

    return(<>
    <Link className="main-grid-button shdow-1" href={link} target="blank">
     
            <div style={{backgroundColor:"lightgray",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}className="grid-image2">
            <Image  className="grid-image2" src={img} width={300} height={300}  sizes="80vh" alt=""/>
<div className="button-grid-white-img-title">{}</div>
            </div>
            
            <div style={{flexDirection:"column",justifyContent:"center",textAlign:"left"}} className=" main-grid-container" >
                <p className="main-grid-title">{title}</p>
                <p style={{textAlign:"left"}} className="main-grid-subtitle"> {subtitle}</p>
            </div>
       
    </Link>

    </>)
}
export default SquareTitleButtonDis