"use client"
import Image from 'next/image';
//import logo from "../../assets/images/logo.svg"
import person from "@/assets/icons/person.png"
import line3 from "@/assets/icons/menu.png"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {menu,userMenuDefault} from "../config/MainHeaderList"

import { getCookie, setCookie } from '@/config/cookie/cookie';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import logo from "../../assets/images/텍스트 로고.png"
const Header=()=>{
  
const [personBtn, setpersonBtn] = useState(false)
const [isActive, setIsActive] = useState(true);
const [menubtn, setmenubtn] = useState(false);
const router = useRouter()
const name = "이희승"
const [menustate, setmenustate] = useState(menu)
const [userMenu, setuserMenu] = useState(userMenuDefault)
const wrapperRef = useRef<any>(null);
const [cookies,setCookie, removeCookie] = useCookies(['token']);
const [login_state, setlogin_state] = useState(false)

useEffect(() => {

    //setCookie("token",{},{})
    const token = cookies.token;
    
    if(token===undefined){
        console.log("로그인이 만료되었습니다. 다시로그인해주세요!")
    }else{
        //console.log(token)
        if (token.accessToken?.length>0) {
            setlogin_state(true);
        } else {
            setlogin_state(false);
    
        }  
    }
    
    
  }, [cookies]);

function useOutsideClick(ref: any, callback: any ) {
    useEffect(() => {
      function handleClickOutside(event: { target: any; }) {
        // 클릭된 요소가 ref로 지정된 컴포넌트 내부에 포함되지 않는지 확인
        if (ref.current && !ref.current.contains(event.target)) {
          callback(); // 컴포넌트 외부 클릭 시 실행할 함수 호출
        }
      }
  
      // 마우스 클릭 이벤트 리스너 등록
      document.addEventListener('mousedown', handleClickOutside);
  
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, callback]); // ref와 callback이 변경될 때만 effect 재실행
  }
  const handleOutsideClick = () => {
    console.log('You clicked outside of me!');
    setmenubtn(()=>false)
    setpersonBtn(()=>false)
  };
  useOutsideClick(wrapperRef, handleOutsideClick);
    return(<>

        <nav className="nav">
               
<div style={{marginLeft:"1.2rem",whiteSpace:"nowrap",maxHeight:"50px"}} className=''>

<Link style={{height:"100%"}} href={{pathname:"/",query:{}}}>
  <img style={{height:"100%"}} className='logosize'  alt='로고' src={logo.src}/>
{/**<span className='mainlogotitle' style={{fontWeight:"700",alignItems:"center"}}> OLLE MARKET</span>    **/}     
</Link>

</div>
<div className={`haederview`}>
    
    <ul style={{whiteSpace:"nowrap"}} className={`navul navtext ${menubtn?"menu-start":"menu-end"}`}>
    {menu.map((item,index)=>
    
       item.sub?(<>
       <li onMouseLeave={()=>setmenustate(()=>menu)} onMouseEnter={(e)=>{
        let menu_copy= [...menustate]
        menu_copy[index].state = false;
        setmenustate(()=>menu_copy)
        }} style={{textAlign:"right"}}  className={`navli`}>
           {item.title}
                <ul className={`${menustate[index].state ?"accordion-start":"accordion-end"}`}>
                {item.submenu.map((subitem,subindex)=>(<>
                    <li  className='accordion-start' onClick={()=>{
        let menu_copy= [...menustate]
        menustate[index]["submenu"][subindex].state = !menustate[index]["submenu"][subindex].state
        setmenustate(()=>menu_copy)

                    }}>{

                    subitem?.sub?(<>
                    {subitem.title}
                    {subitem.submenu.map((sub2item,sub2index)=>
                    (<><li  className={`${menustate[index]["submenu"][subindex].state ?"accordion-start":"accordion-end"}`}>{sub2item.title}</li></>)
                    )}
                             
                    </>):(<><Link href={subitem.link}><span>{subitem.title}</span></Link></>)
                    }
                   
                    </li>
                </>))}
                {String(personBtn)}
                </ul>
            </li>
       </>):(<>{item.value==="y"&&getCookie("token")===undefined?"":<li  className='navli'>
    
       <button onClick={()=>{item.value==="y"&&getCookie("token")===undefined?alert("관리자만 사용 가능한 기능입니다. 로그인해주세요!"): router.push(item.link)}}>
        
            {item.title}
          </button> 
          </li>} 
       </>) 
    )}
    
</ul>

      


</div>
<div className='headermypage'>
    <div onClick={()=>{
    setmenubtn(()=>false)
    setpersonBtn(()=>!personBtn)
    }} ><span style={{color:"#585858", whiteSpace:"nowarp",width:"100%", cursor:"pointer"}}>{login_state?"마이페이지":"로그인"}</span></div> 
    <div onClick={(e)=> {setmenubtn(()=>!isActive)
setpersonBtn(()=>false)
}} className='iconmenu'> 
<Image onClick={(e)=>setIsActive(()=>!isActive)} sizes='100vh' objectFit="cover" src={line3}   alt={'로고'}/> 
</div> 
</div>





<div ref={wrapperRef} className={`${personBtn?"slide-start":"slide-end"} slide-button shadow-1`}>
<div  className='view-center'>
 <div style={{backgroundColor:"#D9D9D9"}} className='card-round margintop'>

 </div>
</div>

<div className='textcenter'>
   {
   login_state? (<span className='card-title '>{getCookie("token").name}님, <span style={{fontWeight:"300"}}>반갑습니다.</span> <span onClick={()=>{
    removeCookie("token")
    setlogin_state(()=>false)
    //router.push("/")
    router.replace("/")
    
    alert("로그아웃 하였습니다!")
   }} style={{textAlign:"right"}} className='card-title '> 로그아웃</span></span>)
:(<><span className='card-title '><span style={{fontWeight:"300"}}>관리자를 위한 서비스 입니다.
<br/>
일반 사용자들은 이용할 수 없습니다.</span><br/><span onClick={()=>router.push("/sitein")} style={{cursor:"pointer"}} className='card-title'> 로그인</span></span></>)
}
</div>
<div  className='view-center'>
    
 <div className=' card-1'>
 {login_state?userMenu.map((item,index)=>(<>
        {
            (<>
            <div  className=''>
       
                <span className='card-title' style={{}}>{item.title}</span>
                <div style={{display:"flex",flexDirection:"column"}}>
                    {item.submenu.map((subitem,index2)=>(<>
                    <Link href={subitem.link} className='card-subtitle'><span className=''>{subitem.title}</span></Link>
                    </>))}
                </div>
                <span className=''>{item.sub}</span>
                
        </div>
        </>)
        }

        </>)):(<>
    <div style={{display:"flex",flexDirection:"column",textAlign:"center",justifyItems:"center",alignItems:"center",width:"100%"}}>
        
                <div style={{display:"flex",flexDirection:"column"}}>
                   {"로그인이 필요한 서비스 입니다."}
                </div>
                </div>
 </>)}


    </div>   
</div>
</div>


        </nav>
     
    
    </>)
}

export default Header;