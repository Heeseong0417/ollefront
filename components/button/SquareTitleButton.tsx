import Image from "next/image"
import Link from "next/link"


const SquareTitleButton=({title,img,link}:any)=>{

    

    return(<>

    <Link className="main-grid-button filter-grayscale" href={link}>
        
            <div className={`grid-image`}>
<Image className={`grid-image`} src={img} sizes="80vh" alt=""/>
            </div>
            
            <div className=" main-grid-container" >
                <p className="main-grid-title">{title}</p>
                <p className="main-grid-subtitle"> 바로가기 {">"}</p>
            </div>
        
    </Link>
    </>)
}
export default SquareTitleButton