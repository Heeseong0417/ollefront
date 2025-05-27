
import Image from 'next/image';
import Link from 'next/link';
import icon1 from "@/assets/icons/menu.png"
import icon2 from "@/assets/icons/person.png"
const SquareButton=({title,image,link, size,color}:any)=>{



    return (<>
            <Link href={{ pathname:link,query:{}}}>
        <div className='shadow-1' style={{position:"relative",alignItems:"center",display:"flex",justifyItems:"center",backgroundColor:color,width:String(size*5)+"px",height:String(size*4)+"px"}}>
        <Image src={image} alt={"올레시장 이미지"} width={size*4} height={size*5} style={{position:"absolute", top:"40%",left:"50%",transform:"translate(-50%, -50%)"}}/>
            <span className='textshadow' style={{position:"absolute",bottom:"10%",width:"100%",textAlign:'center',fontWeight:"400",alignItems:"center",justifyContent:"center",color:"white",fontSize:String(size/2)+"px"}}
            >{title}
            </span>
            </div>         
       </Link>
    </>)
}

export default SquareButton