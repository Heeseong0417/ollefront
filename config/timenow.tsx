
import moment from "moment-timezone"
export const timenow=()=>{
    
      var m = moment().tz("Asia/Seoul"); // ← 이곳이 포인트
      return m.format("YYYY-MM-DD HH:mm:ss");
    
}