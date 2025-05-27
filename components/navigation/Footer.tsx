import logo from "../../assets/images/메인로고-w.png" 
const footer =()=>{


    return(<>
    <footer className="haederview" style={{position:"relative",backgroundColor:"#444444",paddingTop:"3rem",paddingBottom:"3rem"}}>
        <section  className="search-main-between-container">
       <div className="footerlayout">
        <h1 style={{color:"white",display:"flex",alignItems:"end",justifyContent:"end"}} className="">
        주소 : 서귀포시 중앙로 62번길 18    연락처 : 064-762-1949 ｜ (+82) 0507-1353-1949
<br/>이용시간 : [하절기] 07:00 - 21:00 / [동절기] 07:00 - 20:00 (연중무휴)       편의시설 : 공용주차장/화장실
        </h1>
       <img style={{width:"150px"}} className="logosize" alt="logo" src={logo.src}/>
       </div>
       <h1 style={{position:"absolute",color:"gray",bottom:10,left:10,zIndex:30}}>Copyright 2024. VALIANTDATA Co. All rights reserved.</h1>
        </section>
        </footer>
        </>)
}
export default footer