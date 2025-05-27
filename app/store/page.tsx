"use client"
import Link from "next/link";
import Pagination from "./pagenation";
import {MainNoticeList } from "@/components/config/MainNoticeList"

const board=()=>{


    const totalBooks = 8
    let page = "1"
    return(<>  
    <div className="mainheaderheight"/>

<div className="site-iu-container">
 <h1 className="site-iu-texttitle">공지사항</h1>
 <div className="site-iu-textbox">
    <div style={{textAlign:"left",marginBottom:"0rem"}} className="site-iu-texttitle">
     
      <div style={{position:"relative"}} className="site-iu-search-form"> 
      <input className="site-iu-search-inputtext" type="text"  />
      <button className="site-iu-search-button">검색</button>
  
  <Link  style={{position:"absolute",top:0,right:"0%"}} href={`/board/${2}/`}><button style={{borderRadius:"5px",minWidth:"6rem"}} className="site-iu-search-button">등록</button></Link>
      </div>
    <p className="site-iu-underline"/> 
    </div>
<ul className="site-iu-table">
<li><span style={{fontWeight:"400"}}>NO. </span><span style={{fontWeight:"400"}}>제목</span><span style={{fontWeight:"400"}}>등록일</span></li>
  {MainNoticeList.map((item,index)=>(<><Link className="site-iu-table" href={`/board/${2}`}><li><span style={{fontWeight:"300"}}>{item.id}</span><span style={{fontWeight:"400"}}>{item.title}</span><span style={{fontWeight:"300"}}>{item.date}</span></li></Link></>))}

</ul>





  </div>


    </div>
 
    </>)
}

export default board;