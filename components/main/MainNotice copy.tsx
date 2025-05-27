"use client"
import plus from "@/assets/icons/+.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import {MainNoticeList} from"@/components/config/MainNoticeList"
import ColorButton from "../button/ColorButton"
const MainNotice=()=>{

const [noticelist, setnoticelist] = useState([{date:"sam",title:"sam"}])
    useEffect(() => {
      setnoticelist(()=>MainNoticeList)
    
      return () => {
        
      }
    }, [])
    
    return(<>
    <section className="notice-grid">
<div className="notice-grid-a notice-form1">
<div className="notice-form1-title">
    <span>공지사항</span>
 
    <div className="notice-form1-icon">

        <Image src={plus} sizes="100vh" alt={"dfdf"} />
        
        </div>

        </div>

        {noticelist.map((item,index)=>
        <>
<div className="notice-form1-list">
<span style={{fontWeight:"500"}}>
    {item.title}
    </span>
<span style={{fontWeight:"100"}}>
    {item.date}
    </span>
        </div> 
        </>
        )}    

</div>
<div className="notice-grid-b notice-form3">

<ColorButton bgcolor={"#806C61"} textcolor={"white"} title={"접속자 통계"} subtitle={"바로가기 >"} image={""} go={true} link={"/"} />

</div>

<div className="notice-grid-c notice-form2">
<div className="notice-form3">상점검색</div>    
</div>

<div className="notice-grid-c notice-form2">
사이니지
      </div>
</section>
    </>)
}

export default MainNotice