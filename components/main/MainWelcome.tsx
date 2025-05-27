import Image from "next/image"
import Link from "next/link"

const MainWelcome=()=>{


    return(<>
    <div className="view-center " style={{backgroundColor:"#CBDEEB",flexDirection:"column",marginTop:100,padding:"100px"}}>

        <span style={{color:"#737373",fontSize:32,opacity:0.9}}>환영합니다!</span>
        <span style={{color:"#737373",fontSize:32,opacity:0.9}}>여기는 <span style={{color:"#279CD1",fontSize:36,fontWeight:"900",opacity:0.9}}>서귀포 매일올레시장</span> 입니다.</span>
    <div className="view-center grid-2" style={{backgroundColor:"#CBDEEB",flexDirection:"column",marginTop:100,padding:"100px",justifyContent:"center"}}>
        <div className="grid-a">
<Link href={"/map"}><Image src={"https://api.cdn.visitjeju.net/photomng/imgpath/202110/27/beab7f6e-3dea-43e1-b3d4-a155f215c276.jpg"} width={0} fill height={0} sizes={"100vh"}alt={""}/></Link></div>

<div className="grid-b">
<Link href={"/map"}>    
<span style={{fontSize:16,width:"100%",color:"white",position:"absolute",bottom:"30%",right:"40%",transform:"translate(50%,50%)"}}>바로가기 {">"}</span>
<span style={{fontSize:22,fontWeight:"700",width:"100%",color:"white",position:"absolute",bottom:"15%",right:"40%",transform:"translate(50%,50%)"}}>메타버스 플랫폼</span></Link>
</div>


<div className="grid-c">
<Link href={"/map"}>    
<span>바로가기 {">"}</span>
<span>접속자 통계</span></Link>
</div>

    </div>
    </div>
    </>)
}

export default MainWelcome