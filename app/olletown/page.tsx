"use client"
import { useEffect, useRef, useState } from "react"
import {Unity,useUnityContext} from "react-unity-webgl"


const Home=()=>{
    
   const  {unityProvider,isLoaded,loadingProgression,requestFullscreen} = useUnityContext({
    
    loaderUrl: "build/TEST9.loader.js",
    dataUrl: "build/TEST9.data",
    frameworkUrl: "build/TEST9.framework.js",
    codeUrl: "build/TEST9.wasm",
    streamingAssetsUrl:"/StreamingAssets"

  })

  const fullscreenRef = useRef<any>(null);
    const canvasRef = useRef<any>(null);

    const [screen_toggle, setscreen_toggle] = useState(false)
     
    const fullScreen=()=>{
      requestFullscreen(!screen_toggle)
      setscreen_toggle(()=>!screen_toggle)
    }

    useEffect(() => {
      if (canvasRef.current) {
          canvasRef.current.tabIndex = 1; // tabIndex를 설정하여 포커스를 받을 수 있도록 함
          canvasRef.current.focus(); // 캔버스에 포커스를 설정
      }
     
  }, []);

    const enterFullscreen = () => {
        setscreen_toggle(()=>!screen_toggle)
        if (fullscreenRef.current) {
          if (fullscreenRef.current.requestFullscreen) {
            fullscreenRef.current.requestFullscreen();
          } else if (fullscreenRef.current.mozRequestFullScreen) {
            fullscreenRef.current.mozRequestFullScreen();
          } else if (fullscreenRef.current.webkitRequestFullscreen) {
            fullscreenRef.current.webkitRequestFullscreen();
          } else if (fullscreenRef.current.msRequestFullscreen) {
            fullscreenRef.current.msRequestFullscreen();
          }
        }
      
      };
    return (
    <>
    {Math.round(loadingProgression * 100)===100?(<>
    
    
    </>):(<>
      <video style={{width:"100%",height:"100%"}} autoPlay loop muted>
    <source src={"https://youtu.be/zTGqxUA79Sg"} type='video/webm' />
 </video>
      <div style={{alignItems:"center",justifyContent:"center",textAlign:"center", position:"absolute",width:"100%",height:"100%",borderRadius:"5px",padding:"10px",color:"white",backgroundColor:"black"}}>
      <p style={{backgroundColor:"black",position:"absolute",top:"50%",left:"50%"}}>Loading...{Math.round(loadingProgression * 100)}%</p>
      </div>
      
    </>)}

 <div className="mainheaderheight"/>
   <div className="metamainform">
<section className="metaform">
<Unity style={{width:"100%",height:"100%"}} ref={canvasRef} unityProvider={unityProvider} />   
</section>
<input style={{zIndex:30,position:"absolute",bottom:"4%",right:"0%",borderRadius:"5px",padding:"10px",color:"white",backgroundColor:"black"}} value="전체화면" type="button" onClick={()=>fullScreen()}></input>


</div>

<div>
    </div> 
    </>
);
}


export default Home