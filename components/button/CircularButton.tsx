"use client"
import Image from 'next/image';
import Link from 'next/link';
import map from "@/assets/icons/map.png"
import meta from "@/assets/icons/meta.png"
import notice from "@/assets/icons/notice.png"
import peoples from "@/assets/icons/peoples.png"
import store from "@/assets/icons/store.png"
import { useState } from 'react';



const CircularButton=({title,sub,image,link, size,color}:any)=>{

    return (<>
    
            <Link href={{pathname:link,query:{}}}> 
            <div className='shadow-hover cbtn-view' style={{backgroundColor:"#E8E8E8"}}>
           
            <Image className='cbtn-img' src={sub==="map"?map:sub==="meta"?meta:sub==="notice"?notice:sub==="peoples"?peoples:sub==="map"?store:store} alt={"올레시장 이미지"} sizes='100vh' />  
               <span className='cbtn-text'
            >{title}
            </span>  
            </div>
    </Link>
    </>)
}

export default CircularButton