"use client"
import CircularButton from "@/components/button/CircularButton";
import MainSlide from "@/components/main/MainSlide";
import Image from "next/image";
import {CircularButtonList} from "@/components/config/MainButtonList"

export default function Home() {
  
  
  return (<>
  <main className="mainview">
    <div style={{paddingTop:20}}/>
    <MainSlide/>
    <div style={{marginTop:30}}/>
    <div className="" style={{width:"100%",height:"100%",flexDirection:"row"}}>
      {CircularButtonList.map((item,value)=><>
      <CircularButton {...item} size={30}/>
      
      </>)}
          </div>
          <div>
           
          </div>

  </main>
  </>);
}
