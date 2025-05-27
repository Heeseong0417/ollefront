import { DataSetHeader } from "./common"

export const tsDataSetHeader: DataSetHeader[] = [
  {
    title: "번호",
    name: "number",
  },
  {
    title: "관광지1",
    name: "tourist_attraction_1",
  },
  {
    title: "관광지2",
    name: "tourist_attraction_2",
  },
  {
    title: "관광지3",
    name: "tourist_attraction_3",
  },
  {
    title: "관광지4",
    name: "tourist_attraction_4",
  },
  {
    title: "관광지5 ",
    name: "tourist_attraction_5",
  },
  {
    title: "관광지6",
    name: "tourist_attraction_6",
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

export interface TsDataSet {
  number: number
  tourist_attraction_1: string
  tourist_attraction_2: string
  tourist_attraction_3: string
  tourist_attraction_4: string
  tourist_attraction_5: string
  tourist_attraction_6: string
  labeling_1: string
  labeling_2: string
  labeling_3: string
}

export const tsDataSet: TsDataSet[] = [
  {
    number: 1,
    tourist_attraction_1: "치유의 숲",
    tourist_attraction_2: "감귤박물관",
    tourist_attraction_3: "제주 월드컵경기장",
    tourist_attraction_4: "효돈목기",
    tourist_attraction_5: "중정로",
    tourist_attraction_6: "관음사 탐방로",
    labeling_1: "",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 2,
    tourist_attraction_1: "신산리",
    tourist_attraction_2: "월대천",
    tourist_attraction_3: "우평로",
    tourist_attraction_4: "용두암",
    tourist_attraction_5: "노형동",
    tourist_attraction_6: "김경숙 해바라기 농장",
    labeling_1: "",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 3,
    tourist_attraction_1: "온평리",
    tourist_attraction_2: "해안동",
    tourist_attraction_3: "연삼로",
    tourist_attraction_4: "용담계곡",
    tourist_attraction_5: "신대로",
    tourist_attraction_6: "테라로사",
    labeling_1: "",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 4,
    tourist_attraction_1: "감귤연구소",
    tourist_attraction_2: "우평로",
    tourist_attraction_3: "열안지 오름",
    tourist_attraction_4: "용남길",
    tourist_attraction_5: "제주 종합경기장",
    tourist_attraction_6: "매촌동길",
    labeling_1: "",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 5,
    tourist_attraction_1: "수망리 마흐니 숲길",
    tourist_attraction_2: "스페이스닷원",
    tourist_attraction_3: "제주 종합경기장",
    tourist_attraction_4: "관덕정",
    tourist_attraction_5: "아라동",
    tourist_attraction_6: "효돈목기",
    labeling_1: "",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 6,
    tourist_attraction_1: "오름목장",
    tourist_attraction_2: "마방목지",
    tourist_attraction_3: "아봉로",
    tourist_attraction_4: "전농로",
    tourist_attraction_5: "번영로",
    tourist_attraction_6: "용두암",
    labeling_1: "",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 7,
    tourist_attraction_1: "태신로",
    tourist_attraction_2: "관음사 탐방로",
    tourist_attraction_3: "관음사",
    tourist_attraction_4: "제주도서관",
    tourist_attraction_5: "삼양검은모래해변",
    tourist_attraction_6: "용담계곡",
    labeling_1: "",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 8,
    tourist_attraction_1: "남원",
    tourist_attraction_2: "김경숙 해바라기 농장",
    tourist_attraction_3: "삼양3동 방파제",
    tourist_attraction_4: "제주신산근린공원",
    tourist_attraction_5: "화북동",
    tourist_attraction_6: "용남길",
    labeling_1: "",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 9,
    tourist_attraction_1: "가시오름",
    tourist_attraction_2: "테라로사",
    tourist_attraction_3: "삼양동",
    tourist_attraction_4: "삼성로",
    tourist_attraction_5: "김만덕 기념관",
    tourist_attraction_6: "감귤연구소",
    labeling_1: "",
    labeling_2: "",
    labeling_3: "",
  },
  {
    number: 10,
    tourist_attraction_1: "신평",
    tourist_attraction_2: "매촌동길",
    tourist_attraction_3: "문강사",
    tourist_attraction_4: "탑동",
    tourist_attraction_5: "용담계곡",
    tourist_attraction_6: "수망리 마흐니 숲길",
    labeling_1: "",
    labeling_2: "",
    labeling_3: "",
  },
]
