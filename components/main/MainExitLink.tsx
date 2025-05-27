"use client"

import SquareTitleButtonCenter from "../button/SquareTitleButtonCenter"
import { MainExitList } from "../config/MainExitList"

const MainExitLink=({}:any)=>{



    return(<>
   
        <div className="button-grid-form">
        {MainExitList.map((item,index)=>(<>
        <div className="button-grid-container">
            <SquareTitleButtonCenter title={item.title}subtitle={item.subtitle} img={item.img}link={item.link}/>
 
           
        </div>
        </>))}</div>

    </>)
}
export default MainExitLink