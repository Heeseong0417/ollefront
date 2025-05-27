import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import {mainslidelist}from "../config/MainSlideList" 
import { CircularButtonList } from "../config/MainButtonList";
import SquareButton from "../button/SquareButton";

const MainSlide=()=>{
    const settings = {

        next:"<input type={'button'} value={'클릭'}/>",
        prev:"<input type={'button'} value={'클릭'}/>",
        //dots: true,
        autoplay:true,
        autoplaySpeed : 2000,
        centerMode: true,//양옆에 보일지
        infinite: true,
        centerPadding: '150px',
        slidesToShow: 1,
        slidesToScroll: 2,
        swipeToSlide: true,
        
        
        
	dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
	draggable : true,	//드래그 가능 여부 ,
  responsive: [
    {
      breakpoint: 1025, // 모바일 기기의 뷰포트 크기
      settings: {
        centerMode: false, // 모바일에서는 centerMode 비활성화
      },
    },
  ],
      };
   

    const ViewPage = ({key,len,title,sub,color,link, position}:any)=>{


        return(<>

        <div className="relative mainslider" >
            {/**<p className="mainimagesub" style={position==="center"?{top:"50%",left:"50%"}:position==="left"?{top:"80%",left:"10%"}:position==="right"?{top:"80%",right:"10%"}:position==="lefttop"?{top:"10%",left:"24%"}:{}}>{sub}</p>**/}
            <p className="mainimagetitle" style={position==="center"?{top:"60%",left:"50%"}:position==="left"?{top:"90%",left:"10%"}:position==="right"?{top:"90%",right:"10%"}:position==="lefttop"?{top:"20%",left:"10%"}:"leftbottom"?{bottom:"15%",left:"3%"}:{}}><br/>{title}</p>
            <p className="mainimagesub" style={position==="center"?{top:"60%",left:"50%"}:position==="left"?{top:"90%",left:"10%"}:position==="right"?{top:"90%",right:"10%"}:position==="lefttop"?{top:"20%",left:"10%"}:"leftbottom"?{bottom:"10%",left:"3%"}:{}}><br/>{sub}</p>
         
        <Image src={link} alt={"올레시장 이미지"} width={0} height={0} sizes="100vh" className="mainimage sahdow-hover"/>
        <div className="sc-GKYbw mdbtn banner-pagination">

            <p className="font-bold text-white mr-1">{color+1}</p>
            / 
            <p className="ml-1">{len}</p>
                <div className="bg-gray-600 w-[10px] h-full mx-2"/><p className="w-full h-full">{">"}</p>
                <button className="v2-button button-md button-text-icon is-icon-button z-[1001]" type="button">
                    <i className="button-content-icon ic-player-fill !text-white !text-ic-sm"></i>
                    </button>
                    </div>

           </div>
        </>)
    }
    return(<>
    <div className="relative">
        <Slider {...settings}>
          {mainslidelist.map((value,index) => (
          <> 
          
       <ViewPage key={index} len={mainslidelist.length} title={value.title} sub={value.sub} link={value.link} color={index} position={value.position}/>
       </>
        ))}
        
        </Slider>
       {/** <div className="" style={{position:"absolute",display:"flex",top:"100%",left:"50%",transform: "translate(-50%, -50%)"}}>
        {CircularButtonList.map((item,value)=><>
      <SquareButton {...item} size={30}/>
      
      </>)}</div> */}
      </div>
    </>)
}


export default MainSlide;