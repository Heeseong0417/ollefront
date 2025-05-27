"use client"
import Link from "next/link";
import Image from "next/image"
import logo from "@/assets/images/logo.svg"
import { useParams ,useRouter} from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { IP, tokenheaders } from "@/config/site";
import { getCookie } from "@/config/cookie/cookie";
import axios from "axios";
import { timenow } from "@/config/timenow";
import noimage from "@/assets/images/noimage.jpeg"

const Create=()=>{
  const num  =parseInt(String(useParams().num));
  const page = useParams().page
const router = useRouter()
  const [file, setfile] = useState<any>(null)
  const [image, setimage] = useState<any>(null)
  const [pageList, setpageList] = useState({
    id: 1,
    shopname: "없음",
    ceo: "없음",
    gate:"1",
    phonenumber: "없음",
    address: "없음",
    ollehnum: 0,
    homepage: "없음",
    info: "없음",
    item: "없음",
    imageUrl: "없음",
    tag: "없음",
    shoppage:"없음"
  })
/** 
  useEffect(() => {
let headers_default = {headers:tokenheaders(getCookie("token").accessToken),params:{id:Number(num)}};
  axios.post(IP+"/market/inquiry_id",{},headers_default).then((res)=>{
    console.log("res : ",res.data)
    setpageList(()=>res.data[0])
  }
)
return () => {
}
}, [])
**/
const handleFileChange = (event:any) => {
  const file = event.target.files?.[0]
  if(event.target.files[0]){
  setimage(()=>file)  

  }
  
    const reader = new FileReader();
reader.readAsDataURL(file); 
    reader.onloadend = (e) => {
      console.log("gogogog : ",e.target?.result)
        if(typeof e.target?.result==="string"){
          setfile(e.target?.result)
        }
      };
      

  console.log(event.target.files[0])

};
const edit_notice =()=>{
  let sam = {...pageList}
  sam.id = num
  //sam.admin = getCookie("token").userId;
  //sam.date = String(timenow())
  

  let headers_default = {headers:tokenheaders(getCookie("token").accessToken)};
  headers_default.headers["Content-Type"]="multipart/form-data"
  const formData = new FormData();

  formData.append('photo', image);
  
  axios.post(IP+"/file/uploadprofile",formData,headers_default).then((res)=>{
    console.log("res : ",res.data)
    const sample ={...pageList}
    sample.imageUrl = IP+"/file/images/"+res.data
    setpageList((prev)=>{return{...prev,imageUrl:res.data}})

    console.log("sample : ",sample)
    axios.post(IP+"/market/save",sample,{headers:tokenheaders(getCookie("token").accessToken)}).then((res)=>{
      alert("res : "+JSON.stringify(res.data))
      setpageList((prev)=>{return{...prev,imageUrl:res.data}})
      alert("저장이 완료되었습니다!")
    }
     
      ) 
  }
    ).catch((err)=>
    
   {
    const sample ={...pageList}
    console.log("sample : ",sample)
    axios.post(IP+"/market/save",sample,{headers:tokenheaders(getCookie("token").accessToken)}).then((res)=>{
      console.log("res : ",res.data)
      setpageList((prev)=>{return{...prev,imageUrl:res.data}})}
      ) 
    alert("저장이 완료되었습니다!") 
    }
    ).catch((err)=>alert("에러가 발생했습니다. 다시 실행해 주세요!"))
  router.push(`/store/1`)
  router.refresh()

}
return(<>
<div className="mainheaderheight"/>
<div className="site-iu-container">
 <h1 className="site-iu-texttitle">상점정보수정</h1>
 <div className="site-iu-textbox">
    <h1 style={{textAlign:"left",marginBottom:"0rem"}} className="site-iu-texttitle">정보 입력
      <p className="site-iu-textsub">필수입력 정보는 반드시 입력해 주세요.</p>
    <p className="site-iu-underline"/> 
    </h1>
 
    <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">태그</p>
    <input value={pageList.tag}  onChange={(e)=>setpageList((prev)=>{return {...prev,tag:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="입력" />
  </span>

  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">상점 명</p>
    <input value={pageList.shopname}  onChange={(e)=>setpageList((prev)=>{return {...prev,shopname:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="입력" />
  </span>
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">상점주</p>
    <input value={pageList.ceo}  onChange={(e)=>setpageList((prev)=>{return {...prev,ceo:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="입력" />
  </span>
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">게이트</p>
    <input value={pageList.gate}  onChange={(e)=>setpageList((prev)=>{return {...prev,gate:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="입력" />
  </span>

  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">연락처</p>
    <input value={pageList.phonenumber}  onChange={(e)=>setpageList((prev)=>{return {...prev,phonenumber:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="입력" />
  </span>
  
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">주소</p>
    <input value={pageList.address}  onChange={(e)=>setpageList((prev)=>{return {...prev,address:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="입력" />
  </span>

  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">상점 번호</p>
    <input value={pageList.ollehnum}  onChange={(e)=>setpageList((prev)=>{return {...prev,ollehnum:Number(e.target.value)}})} className="site-iu-inputtext" type="number" placeholder="입력" />
  </span>

  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">상점 홈페이지 주소</p>
    <input value={pageList.homepage}  onChange={(e)=>setpageList((prev)=>{return {...prev,homepage:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="입력" />
  </span>
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">상점 쇼핑몰 주소</p>
    <input value={pageList.shoppage}  onChange={(e)=>setpageList((prev)=>{return {...prev,shoppage:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="입력" />
  </span>
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">아이템</p>
    <input value={pageList.item}  onChange={(e)=>setpageList((prev)=>{return {...prev,item:e.target.value}})} className="site-iu-inputtext" type="text" placeholder="입력" />
  </span>


  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">내용</p>
    <textarea value={pageList.info} onChange={(e)=>setpageList((prev)=>{return {...prev,info:e.target.value}})} style={{minHeight:"20rem"}} className="site-iu-inputtext" placeholder="내용" />
  </span>
  <span className="site-iu-inputtext-form">
    <p className="site-iu-inputtext-left">상점 사진</p>
   <div className="imageandfileform">
 <div className="input_file_container">

<input  className=""  type="file" accept="image/*" onChange={handleFileChange} />


 

 </div>     
    
<Image style={{overflow:"hidden"}} className="input_file_container" src={file?file:noimage} width={200} height={150} alt={'이미지가 없습니다.'} />
    </div>

  </span>

  <div onClick={()=>edit_notice()} style={{marginTop:"5%"}} className="site-iu-button"><button  className="site-iu-button" type="submit">등록</button></div>
 </div>
 <div className="mainheaderheight"/>

    </div>
</>)
}

export default Create;
