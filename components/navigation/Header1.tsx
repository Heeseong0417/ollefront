"use client"
import Image from 'next/image';
import logo from "../../assets/images/logo.svg"
import person from "@/assets/icons/person.png"
import line3 from "@/assets/icons/menu.png"
import { useState } from 'react';

const Header=()=>{

const [isActive, setIsActive] = useState(false);
const [menubtn, setmenubtn] = useState(false)
const menu =[
    {state:false,title:"올레메타버스",link:"",value:"",sub:true,submenu:[{title:"메뉴1",link:"",value:"",sub:true,state:false,submenu:[{title:"서브메뉴1",link:"",value:""}]},{title:"메뉴2",link:"",value:"",sub:true,state:false,submenu:[{title:"서브메뉴2",link:"",value:""}]}]},
    {state:false,title:"상점검색",link:"",value:"",sub:false,submenu:[]},
    {state:false,title:"상점/공지관리",link:"",value:"",sub:false,submenu:[]},
    {state:false,title:"스마트주차",link:"",value:"",sub:false,submenu:[]},
    {state:false,title:"사이니지",link:"",value:"",sub:true,submenu:[{title:"메뉴1",link:"",value:"",sub:true,state:false,submenu:[{title:"서브메뉴1",link:"",value:""}]},{title:"메뉴2",link:"",value:"",sub:true,state:false,submenu:[{title:"서브메뉴2",link:"",value:""}]}]}
]
const [menustate, setmenustate] = useState(menu)


    return(<>
   
        <nav className="nav bg-cyan-700">
<div className='w50'>
   <Image className='logo' objectFit="cover" src={logo} alt={'로고'}/>           
</div>


           
<div className='view'>

<ul className={`navul ${isActive?"":"disnone"}`}>
    {menu.map((item,index)=>
       item.sub?(<>
       <li onMouseLeave={()=>setmenustate(()=>menu)} onMouseEnter={(e)=>{
        let menu_copy= [...menustate]
        menu_copy[index].state = true;
        setmenustate(()=>menu_copy)
        }}  className={`navli`}>
           {item.title}
                <ul  className={`${menustate[index].state ?"accordion-start":"accordion-end"}`}>
                {item.submenu.map((subitem,subindex)=>(<>
                    <li className='accordion-start' onClick={()=>{
        let menu_copy= [...menustate]
        menustate[index]["submenu"][subindex].state = !menustate[index]["submenu"][subindex].state
        setmenustate(()=>menu_copy)

                    }}>{
                    
                    subitem.sub?(<>
                    {subitem.title}
                    {subitem.submenu.map((sub2item,sub2index)=>
                    (<><li className={`${menustate[index]["submenu"][subindex].state ?"accordion-start":"accordion-end"}`}>{sub2item.title}</li></>)
                    )}
                    
                    </>):(<>{subitem.title}</>)
                    }
                   
                    </li>
                </>))}
                </ul>
            </li>
       </>):(<>
        <li className='navli'>
            {item.title}
            </li >
       </>) 
    )}
</ul>
        {/** <ul className='navul'>
            <li onClick={(e)=>setIsActive(()=>!isActive)} className={`navli`}>
            올레메타버스{String(isActive)}
                <ul  className={`${isActive ?"accordion-start":"disnone"}`}>
                  <li className='accordion-start'>서브메뉴1</li>
                  <li className='accordion-start'>서브메뉴2</li>    
                  <li className='accordion-start'>서브메뉴3</li>  
                  <li className='accordion-start'>서브메뉴4</li>  
                </ul>
            </li>
            <li className='navli'>
            상점검색
            </li >
            <li className='navli'>
            상점/공지관리          
            </li>
            <li className='navli'>
            스마트주차
            </li>
            <li className='navli'>
            사이니지
            </li>
        </ul> */}
</div> 

<div style={{display:"flex",alignItems:"center",justifyItems:"center",width:"100px"}}>

<Image style={{zIndex:30}} onClick={(e)=>setIsActive(()=>!isActive)} className={`iconmenu`} objectFit="cover" src={line3} alt={'로고'}/>  
<Image  className='iconbtn' src={person} alt={'로고'}/>          
</div>

        </nav>
       {JSON.stringify(menustate)}
    
    </>)
}

export default Header;