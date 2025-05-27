const menu =[
    {state:false,title:"K-MarketVerse",link:"/ollemetaverse",value:"",sub:false,submenu:[{title:"메뉴1",link:"",value:"",sub:true,state:false,submenu:[{title:"서브메뉴1",link:"",value:""}]},{title:"메뉴2",link:"",value:"",sub:true,state:false,submenu:[{title:"서브메뉴2",link:"",value:""}]}]},
    {state:false,title:"상점검색",link:"/search",value:"",sub:false,submenu:[]},
    {state:false,title:"상점/공지관리",link:"/management",value:"y",sub:false,submenu:[]},
    {state:false,title:"스마트주차",link:"/link/smartparking",value:"",sub:false,submenu:[]},
    {state:false,title:"사이니지",link:"/link/signage",value:"",sub:false,submenu:[{title:"메뉴1",link:"",value:"",sub:true,state:false,submenu:[{title:"서브메뉴1",link:"",value:""}]},{title:"메뉴2",link:"",value:"",sub:true,state:false,submenu:[{title:"서브메뉴2",link:"",value:""}]}]}
]
const userMenuDefault =[
{state:false,title:"회원정보",link:"",value:"",sub:true,submenu:[{title:"회원정보 수정",link:"/siteup/edit",value:"",sub:true,state:false},{title:"관리자 승인",link:"/useractive/1",value:"",sub:true,state:false}]},
{state:false,title:"상점/공지관리",link:"",value:"",sub:true,submenu:[{title:"상점관리",link:"/store/1",value:"y",sub:true,state:false},{title:"공지관리",link:"/board/1",value:"y",sub:true,state:false}]},
]

export {menu,userMenuDefault}