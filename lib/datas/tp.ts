import { DataSetHeader } from "./common"

export const tpDataSetHeader: DataSetHeader[] = [
  {
    title: "번호",
    name: "number",
  },
  {
    title: "여행상품",
    name: "travel_products",
  },
  {
    title: "평점",
    name: "grade",
  },
  {
    title: "나이",
    name: "age",
  },
  {
    title: "일정",
    name: "schedule",
  },
  {
    title: "항공",
    name: "airline",
  },
  {
    title: "호텔",
    name: "hotel",
  },
  {
    title: "식사",
    name: "meal",
  },
  {
    title: "가격",
    name: "price",
  },
  {
    title: "댓글",
    name: "comment",
  },
  {
    title: "라벨링1",
    name: "labeling_1",
  },
  {
    title: "라벨링2",
    name: "labeling_2",
  },
  {
    title: "라벨링3",
    name: "labeling_3",
  },
]

export interface TpDataSet {
  number: number
  travel_products: string
  grade: number
  age: string
  schedule: number
  airline: number
  hotel: number
  meal: number
  price: number
  comment: string
  labeling_1: string
  labeling_2: string
  labeling_3: string
}

export const tpDataSet: TpDataSet[] = [
  {
    number: 1,
    travel_products:
      "제주 3일#금오름#산양큰엉곶#보롬왓#비밀의숲#사려니숲길#노형수퍼마켙#시내호텔",
    grade: 5,
    age: "50대",
    schedule: 5,
    airline: 5,
    hotel: 5,
    meal: 5,
    price: 5,
    comment:
      "20년 동안 함께 운동했던 언니들 7분들과 긴 코로나 시국 이후 처음 떠난 소중한 여행이었습니다 좋은 추억 만들고 예쁜 사진 담느라 3일이 후딱 지나갔어요 저희 팀 8명 단독 투어였기에 3일내내 제주도 멋진 바다 뷰를 선물해주시고 편안하게 가이드해주신 강 병로 기사님께 깊이 감사드립니다",
    labeling_1: "만족(2)",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 2,
    travel_products:
      "제주 3일#노팁&노옵션 #유람선&워터서커스 포함#제주시내호텔",
    grade: 2.6,
    age: "40대",
    schedule: 1,
    airline: 5,
    hotel: 1,
    meal: 3,
    price: 3,
    comment:
      "호텔에 가운도 없고 다리미도 없고 조식 진짜 싸구려돗대기 시장통 식당같고.. 기사님도 좋으시고 다른 일정 다 좋았는데 같이 버스타고 다닌 7명 조선족 할머니들 때매 여행 망쳤어요..살다살다 그런 예의없고 교양 없는 할매들..단1분도 쉬지않고 떠들어대고 뜬그없이 동문시장에 생선사러 가자고 우기면서 기사님께 화내고 소리치고 기사님 설명하나도 안듣고 떠들고 임영웅 노래 안틀어준다고 내내 투덜거리고 마지막은 자기들 저녁먹고 가야된다고 뒤에꺼 보지말고 일찍 공항가자하고 난리도 아님..패키지 여행 많이 다니는데 이런사람들 첨봤어요..7명이...",
    labeling_1: "불만족(0)",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 3,
    travel_products:
      "제주 3일#노팁&노옵션 #가파도 #청보리밭 #워터서커스 포함#제주시내호텔",
    grade: 4.6,
    age: "50대",
    schedule: 5,
    airline: 4,
    hotel: 5,
    meal: 4,
    price: 5,
    comment: "너무 재밌었습니다~~ 담 기회에 또 ㅎㅎ",
    labeling_1: "만족(2)",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 4,
    travel_products:
      "제주 3일 #노팁&노옵션 #유람선&워터서커스 포함#제주시내호텔",
    grade: 5,
    age: "40대",
    schedule: 5,
    airline: 5,
    hotel: 5,
    meal: 5,
    price: 5,
    comment:
      "가족여행으로 추천합니다. 숙소와 음식이 상당히 만족스러웠고, 기사님도 친절하셨습니다. 동행팀과도 함께 잘 다녔고 두루 만족스런 여행이었습니다.",
    labeling_1: "만족(2)",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 5,
    travel_products:
      " 제주 3일#카멜리아힐#산양큰엉곶#오설록 티뮤지엄#비밀의숲#사려니숲길#노형수퍼마켙#시내호텔",
    grade: 5,
    age: "40대",
    schedule: 5,
    airline: 5,
    hotel: 5,
    meal: 5,
    price: 5,
    comment: "즐거운 여행이였습니다",
    labeling_1: "만족(2)",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 6,
    travel_products:
      "제주 3일#보롬왓#산양큰엉곶#수목원야시장#비밀의숲#사려니숲길#제주시내호텔",
    grade: 3.8,
    age: "50대",
    schedule: 3,
    airline: 4,
    hotel: 4,
    meal: 4,
    price: 4,
    comment: "같이 여행하게된 팀과 별 트러블 없이 잘다녔어요",
    labeling_1: "보통(1)",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 7,
    travel_products:
      "제주 3일#보롬왓#산양큰엉곶#수목원야시장#비밀의숲#사려니숲길#시내호텔",
    grade: 5,
    age: "50대",
    schedule: 5,
    airline: 5,
    hotel: 5,
    meal: 5,
    price: 5,
    comment:
      "오랜시간 자연과 함께 걸으며 힐링되었습니다 차량도 편하고 6인이 함께 2박3일간 즐거운 시간 보냈어요 유람선과 공연도 시간가는줄 모르고 즐겼네요 다음에는 가족과 한번 더 가고 싶습니다",
    labeling_1: "만족(2)",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 8,
    travel_products:
      "제주 3일#제주시내 4성급호텔 #노팁&노옵션 #유람선&워터서커스 포함",
    grade: 4.8,
    age: "60대",
    schedule: 5,
    airline: 4,
    hotel: 5,
    meal: 5,
    price: 5,
    comment:
      "집안 행사 여행으로 80세 이상 고령층 3명 포함 총 12명이 편안하고 안락한 일정에 매우 만족하였음. 특히 현지 가이드 현명철기사님 산행이 힘든 가족을 직접 차량에 부축하여 안전하게 모시고 입국하여 출국할때까지 숙소.식사등 모든편이 만족스러운 힐링의 여행이었음",
    labeling_1: "만족(2)",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 9,
    travel_products:
      " 제주 3일#제주시내 4성급호텔 #노팁&노옵션 #유람선&워터서커스 포함",
    grade: 5,
    age: "40데",
    schedule: 5,
    airline: 5,
    hotel: 5,
    meal: 5,
    price: 5,
    comment:
      "전에는 2번 자유여행을 해 보았던지라 이번에는 하나투어 패키지여행으로 제주도를 가보았습니다.아내 생일을 맞아 10살 딸과 7살 아들 이렇게 넷이서 패키지로 요번에는 가 보았습니다. 자유여행과 달리 운전도 안 해도되고 뭘 먹을지 고민 안 해도 되고 좋았습니다.",
    labeling_1: "만족(2)",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 10,
    travel_products:
      "제주 3일 #노형슈퍼마켙 #제주근고기 #수목원야시장 # 옵션ALL포함",
    grade: 4.8,
    age: "20대",
    schedule: 5,
    airline: 5,
    hotel: 4,
    meal: 5,
    price: 5,
    comment:
      "엄마랑 둘이 여행 갔는데 엄마가 대만족 하셨어요 식사코스가 우선 너무너무 만족스러웠고 갔던 코스도 안 가본 곳들로 다양하게 짜져있어서 볼 것도 많았고 제주도여행으로 강추드리고 싶네용 아쉬운 걸 꼽자면? 관광하기에 여러 사람들과 함께 해서 시간이 촉박하다는 점 … !! 그거 빼곤 다 좋았습니다 가이드님 수고하셨어요 :))",
    labeling_1: "만족(2)",
    labeling_2: "",
    labeling_3: "",
  },
]
