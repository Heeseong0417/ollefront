"use client"
import { useEffect, useRef, useState } from "react"
import {Unity,useUnityContext} from "react-unity-webgl"
import RP from "react-player"
import v1 from "../../assets/videos/intro1.mp4"
import v2 from "../../assets/videos/intro2.mp4"
import v3 from "../../assets/videos/intro3.mp4"
import { Line, Circle } from 'rc-progress';
import { usePathname, useRouter } from "next/navigation"




const Home=()=>{
 
let videoList = [v1,v2,v3]  
const [random, setrandom] = useState(0)
  const exampleVideo = require('../../assets/videos/intro1.mp4'); 
  const router = useRouter()
     const  {unityProvider,isLoaded,unload,loadingProgression,requestFullscreen} = useUnityContext({
   
    loaderUrl: "https://olleassets.s3.ap-northeast-2.amazonaws.com/download/webgl/Build/webgl.loader.js",
    dataUrl: "https://olleassets.s3.ap-northeast-2.amazonaws.com/download/webgl/Build/webgl.data",
    frameworkUrl: "https://olleassets.s3.ap-northeast-2.amazonaws.com/download/webgl/Build/webgl.framework.js",
    codeUrl: "https://olleassets.s3.ap-northeast-2.amazonaws.com/download/webgl/Build/webgl.wasm",
    streamingAssetsUrl:"https://olleassets.s3.ap-northeast-2.amazonaws.com/download/webgl/StreamingAssets"

  })
 // 현재 재생 중인 동영상의 인덱스를 관리하는 상태

  const fullscreenRef = useRef<any>(null);
    const canvasRef = useRef<any>(null);
const [toggle, settoggle] = useState(false)

    const [screen_toggle, setscreen_toggle] = useState(false) 
    const getRandomIndex = () => Math.floor(Math.random() * videoList.length);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(getRandomIndex());
    const handleEnded = () => {
      // 다음 동영상 인덱스를 계산합니다.
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
    };

    useEffect(() => {
      if (canvasRef.current) {
          canvasRef.current.tabIndex = 1; // tabIndex를 설정하여 포커스를 받을 수 있도록 함
          canvasRef.current.focus(); // 캔버스에 포커스를 설정
      }
       setrandom(()=>Math.floor(Math.random()*3))
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
<div className={`z-10 absolute metaform w-full h-full my-5 ${toggle ? "hidden" : ""}`}>
  <section className="relative flex flex-col w-full h-full min-w-screen min-h-full bg-gray-50">
    <RP
      url={videoList[currentVideoIndex]} // "https://www.youtube.com/watch?v=wZvC7A4aJXo"
      width='100%'
      height='100%'
      playing={true}
      muted={true}
      onEnded={handleEnded}
      controls={false}
      loop={false}
    />
  </section>
</div>

<div className={`absolute metaform w-full h-full my-5`}>
  <section className="relative flex flex-col items-center justify-center w-full h-full">
    <div className={`z-[12] absolute bottom-2 flex items-center left-[10%] w-[80%] py-2 bg-[#272C32] px-4 opacity-85 text-white rounded-xl justify-between ${Math.round(loadingProgression * 100) === 100&&toggle ? "hidden" : ""}`}>
      <div className={`w-full relative flex flex-col items-end justify-end`}>
        <div className={`flex flex-row justify-center items-center right-0`}>{Math.round(loadingProgression * 100)} %</div>
        <Line className={`rounded-3xl w-full`} percent={Math.round(loadingProgression * 100)} strokeWidth={1} strokeColor="white" />
      </div>
      <input
        onClick={() => settoggle(() => true)}
        type="submit"
        value={"게임시작"}
        className={`z-10 absolute right-0 bottom-14 py-2 px-5 bg-[#272C32] rounded-xl opacity-85 text-white ${Math.round(loadingProgression * 100) === 100 ? "" : "hidden"} ${toggle ? "hidden" : ""}`}
      />
    </div>

    {/* Unity WebGL 화면 */}
    <div style={{ position: "relative", width: "90%", paddingTop: "46.25%" }}>
      <Unity
        className={`${toggle ? "z-[12]" : "hidden"}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgb(249 250 251 / var(--tw-bg-opacity))"
        }}
        ref={canvasRef}
        unityProvider={unityProvider}
      />
    </div>
  </section>
  <div className="mainheaderheight" />
</div>
    </>
);
}


export default Home