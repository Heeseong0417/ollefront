"use client"
import plus from "@/assets/icons/+.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import {MainNoticeList} from"@/components/config/MainNoticeList"
import ColorButton from "../button/ColorButton"
import Link from "next/link"
import axios from "axios"
import { IP, headers } from "@/config/site"

const MainNotice=()=>{

const [noticelist, setnoticelist] = useState([{id:"",date:"sam",title:"sam",admin:"",count:"",description:""}])
    useEffect(() => {
        axios.post(IP+"/notice/smallinquiry",{},{headers:headers}).then((res)=>
        setnoticelist(()=>res.data)
        )
 
      return () => {
        
      }
    }, [])
    
    return(<>
<div className="main-grid-notice-title">
    <span>공지사항</span>
 
    <Link href={`/board/${1}`} className="main-grid-notice-plus">

        <Image src={plus} sizes="100vh" alt={"dfdf"} />
        
        </Link>

        </div>
<div className="main-grid-notice-form">


        {noticelist?.map((item,index)=>
        <>
{index<5?(
<Link href={`/board/${1}/${item.id}`} className="main-grid-notice-form-list">
<div style={{fontWeight:"500"}}>
    {item.title}
    </div>
    <div style={{fontWeight:"100"}} className="main-grid-notice-subtitle">
    {item.date}
    </div>
        </Link>):((<></>)) }
        </>
        )}    

</div>

    </>)
}

export default MainNotice