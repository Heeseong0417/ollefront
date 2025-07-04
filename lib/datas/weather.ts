import { DataSetHeader } from "./common"

export const weatherDataSetHeader: DataSetHeader[] = [
  {
    title: "지점명",
    name: "branch_name",
  },
  {
    title: "일시",
    name: "date",
  },
  {
    title: "평균 기온(°C)",
    name: "average_temperature",
  },
  {
    title: "최저 기온(°C)",
    name: "lowest_temperature",
  },
  {
    title: "최저 기온 시각(hhmi)",
    name: "minimum_temperature_time",
  },
  {
    title: "최고 기온(°C)",
    name: "highest_temperature",
  },
  {
    title: "최고 기온 시각(hhmi)",
    name: "highest_temperature_time",
  },
  {
    title: "강수 계속시간(hr)",
    name: "precipitation_duration",
  },
  {
    title: "일 강수량(mm)",
    name: "daily_precipitation",
  },
  {
    title: "평균 풍속(m/s)",
    name: "average_wind_speed",
  },
  {
    title: "최다 풍향(16방위)",
    name: "most_wind_direction",
  },
  {
    title: "평균 이슬점 온도(°C)",
    name: "average_dew_point_temperature",
  },
  {
    title: "평균 상대 습도(%)",
    name: "average_relative_humidity",
  },
  {
    title: "평균 전운량(1/10)",
    name: "average_total_cloud_cover",
  },
  {
    title: "평균 중하층 운량(1/10)",
    name: "average_lower_to_mid_level_cloud_cover",
  },
  {
    title: "안개 계속 시간(hr)",
    name: "fog_lasting_time",
  },
  {
    title: "외지인 방문자",
    name: "a_foreign_visitor",
  },
  {
    title: "외국인 방문자",
    name: "foreign_visitors",
  },
  {
    title: "추천지수1",
    name: "recommendation_index_1",
  },
  {
    title: "추천지수2",
    name: "recommendation_index_2",
  },
]

export interface WeatherDataSet {
  branch_name: string
  date: string
  average_temperature: number
  lowest_temperature: number
  minimum_temperature_time: number
  highest_temperature: number
  highest_temperature_time: number
  precipitation_duration?: number
  daily_precipitation?: number
  average_wind_speed: number
  most_wind_direction: number
  average_dew_point_temperature: number
  average_relative_humidity: number
  average_total_cloud_cover: number
  average_lower_to_mid_level_cloud_cover: number
  fog_lasting_time?: number
  a_foreign_visitor: number
  foreign_visitors: number
  recommendation_index_1?: string
  recommendation_index_2?: string
}

export const weatherDataSet: WeatherDataSet[] = [
  {
    branch_name: "제주",
    date: "2022.6.1",
    average_temperature: 21,
    lowest_temperature: 18.2,
    minimum_temperature_time: 529,
    highest_temperature: 24.9,
    highest_temperature_time: 1426,
    average_wind_speed: 1.9,
    most_wind_direction: 20,
    average_dew_point_temperature: 14.8,
    average_relative_humidity: 69,
    average_total_cloud_cover: 6.8,
    average_lower_to_mid_level_cloud_cover: 3.1,
    a_foreign_visitor: 183990,
    foreign_visitors: 1186,
    recommendation_index_1: "상",
  },
  {
    branch_name: "제주",
    date: "2022.6.2",
    average_temperature: 21.7,
    lowest_temperature: 17.8,
    minimum_temperature_time: 243,
    highest_temperature: 25.5,
    highest_temperature_time: 1428,
    average_wind_speed: 2.3,
    most_wind_direction: 340,
    average_dew_point_temperature: 17.5,
    average_relative_humidity: 77.8,
    average_total_cloud_cover: 5.1,
    average_lower_to_mid_level_cloud_cover: 5.1,
    a_foreign_visitor: 183077,
    foreign_visitors: 1094,
    recommendation_index_2: "추천",
  },
  {
    branch_name: "제주",
    date: "2022.6.3",
    average_temperature: 21.2,
    lowest_temperature: 18.6,
    minimum_temperature_time: 433,
    highest_temperature: 23.5,
    highest_temperature_time: 1428,
    average_wind_speed: 2.4,
    most_wind_direction: 50,
    average_dew_point_temperature: 18.1,
    average_relative_humidity: 83.4,
    average_total_cloud_cover: 3.4,
    average_lower_to_mid_level_cloud_cover: 1.3,
    a_foreign_visitor: 202015,
    foreign_visitors: 1053,
  },
  {
    branch_name: "제주",
    date: "2022.6.4",
    average_temperature: 23.5,
    lowest_temperature: 19.8,
    minimum_temperature_time: 122,
    highest_temperature: 26.6,
    highest_temperature_time: 1216,
    precipitation_duration: 1.4,
    daily_precipitation: 0,
    average_wind_speed: 4.5,
    most_wind_direction: 110,
    average_dew_point_temperature: 17.5,
    average_relative_humidity: 70.3,
    average_total_cloud_cover: 6.8,
    average_lower_to_mid_level_cloud_cover: 2.8,
    a_foreign_visitor: 229507,
    foreign_visitors: 1099,
  },
  {
    branch_name: "제주",
    date: "2022.6.5",
    average_temperature: 19.1,
    lowest_temperature: 17.3,
    minimum_temperature_time: 1948,
    highest_temperature: 23,
    highest_temperature_time: 1,
    precipitation_duration: 19.63,
    daily_precipitation: 45,
    average_wind_speed: 4.5,
    most_wind_direction: 90,
    average_dew_point_temperature: 18.1,
    average_relative_humidity: 94.5,
    average_total_cloud_cover: 10,
    average_lower_to_mid_level_cloud_cover: 7.6,
    a_foreign_visitor: 221286,
    foreign_visitors: 1112,
  },
  {
    branch_name: "제주",
    date: "2022.6.6",
    average_temperature: 20.3,
    lowest_temperature: 17.9,
    minimum_temperature_time: 527,
    highest_temperature: 24.1,
    highest_temperature_time: 1436,
    precipitation_duration: 0.73,
    daily_precipitation: 0.8,
    average_wind_speed: 2.7,
    most_wind_direction: 290,
    average_dew_point_temperature: 17.9,
    average_relative_humidity: 86.5,
    average_total_cloud_cover: 6.5,
    average_lower_to_mid_level_cloud_cover: 5.3,
    a_foreign_visitor: 192789,
    foreign_visitors: 1122,
  },
  {
    branch_name: "제주",
    date: "2022.6.7",
    average_temperature: 20.7,
    lowest_temperature: 17.9,
    minimum_temperature_time: 411,
    highest_temperature: 25.6,
    highest_temperature_time: 1605,
    precipitation_duration: 1.52,
    daily_precipitation: 0.7,
    average_wind_speed: 2.1,
    most_wind_direction: 20,
    average_dew_point_temperature: 17.9,
    average_relative_humidity: 84.5,
    average_total_cloud_cover: 7.1,
    average_lower_to_mid_level_cloud_cover: 5.6,
    a_foreign_visitor: 169026,
    foreign_visitors: 1266,
  },
  {
    branch_name: "제주",
    date: "2022.6.8",
    average_temperature: 21.4,
    lowest_temperature: 18.9,
    minimum_temperature_time: 527,
    highest_temperature: 25.3,
    highest_temperature_time: 1319,
    average_wind_speed: 3.5,
    most_wind_direction: 90,
    average_dew_point_temperature: 16.8,
    average_relative_humidity: 76.3,
    average_total_cloud_cover: 4,
    average_lower_to_mid_level_cloud_cover: 3.1,
    a_foreign_visitor: 155618,
    foreign_visitors: 1305,
  },
  {
    branch_name: "제주",
    date: "2022.6.9",
    average_temperature: 21.4,
    lowest_temperature: 18.6,
    minimum_temperature_time: 537,
    highest_temperature: 25.5,
    highest_temperature_time: 1141,
    average_wind_speed: 3.8,
    most_wind_direction: 90,
    average_dew_point_temperature: 17.1,
    average_relative_humidity: 77.3,
    average_total_cloud_cover: 4.5,
    average_lower_to_mid_level_cloud_cover: 1.1,
    a_foreign_visitor: 157846,
    foreign_visitors: 1255,
  },
  {
    branch_name: "제주",
    date: "2022.6.10",
    average_temperature: 23,
    lowest_temperature: 18.2,
    minimum_temperature_time: 516,
    highest_temperature: 27.4,
    highest_temperature_time: 1112,
    average_wind_speed: 1.8,
    most_wind_direction: 50,
    average_dew_point_temperature: 17.7,
    average_relative_humidity: 72.8,
    average_total_cloud_cover: 8.8,
    average_lower_to_mid_level_cloud_cover: 3,
    a_foreign_visitor: 167444,
    foreign_visitors: 1212,
  },
  {
    branch_name: "제주",
    date: "2022.6.11",
    average_temperature: 21.6,
    lowest_temperature: 20,
    minimum_temperature_time: 630,
    highest_temperature: 24.1,
    highest_temperature_time: 1445,
    precipitation_duration: 4.42,
    daily_precipitation: 0.4,
    average_wind_speed: 2.9,
    most_wind_direction: 50,
    average_dew_point_temperature: 18.6,
    average_relative_humidity: 83.5,
    average_total_cloud_cover: 6.5,
    average_lower_to_mid_level_cloud_cover: 4,
    a_foreign_visitor: 172177,
    foreign_visitors: 1172,
  },
  {
    branch_name: "제주",
    date: "2022.6.12",
    average_temperature: 22,
    lowest_temperature: 19.5,
    minimum_temperature_time: 534,
    highest_temperature: 25.9,
    highest_temperature_time: 1415,
    average_wind_speed: 3.5,
    most_wind_direction: 90,
    average_dew_point_temperature: 17.7,
    average_relative_humidity: 77.4,
    average_total_cloud_cover: 7.5,
    average_lower_to_mid_level_cloud_cover: 1.9,
    a_foreign_visitor: 171690,
    foreign_visitors: 1174,
  },
  {
    branch_name: "제주",
    date: "2022.6.13",
    average_temperature: 20.6,
    lowest_temperature: 19.4,
    minimum_temperature_time: 2300,
    highest_temperature: 22.2,
    highest_temperature_time: 1120,
    precipitation_duration: 12.73,
    daily_precipitation: 11.6,
    average_wind_speed: 3.7,
    most_wind_direction: 90,
    average_dew_point_temperature: 18.6,
    average_relative_humidity: 88.9,
    average_total_cloud_cover: 9.9,
    average_lower_to_mid_level_cloud_cover: 7.5,
    a_foreign_visitor: 160009,
    foreign_visitors: 1172,
  },
  {
    branch_name: "제주",
    date: "2022.6.14",
    average_temperature: 19,
    lowest_temperature: 18.7,
    minimum_temperature_time: 235,
    highest_temperature: 19.6,
    highest_temperature_time: 1538,
    precipitation_duration: 18.87,
    daily_precipitation: 13.6,
    average_wind_speed: 3.9,
    most_wind_direction: 70,
    average_dew_point_temperature: 18.6,
    average_relative_humidity: 98.3,
    average_total_cloud_cover: 9.9,
    average_lower_to_mid_level_cloud_cover: 7.6,
    a_foreign_visitor: 153844,
    foreign_visitors: 1241,
  },
  {
    branch_name: "제주",
    date: "2022.6.15",
    average_temperature: 23,
    lowest_temperature: 17.9,
    minimum_temperature_time: 528,
    highest_temperature: 29,
    highest_temperature_time: 1609,
    average_wind_speed: 2.4,
    most_wind_direction: 290,
    average_dew_point_temperature: 19.3,
    average_relative_humidity: 81.1,
    average_total_cloud_cover: 4.1,
    average_lower_to_mid_level_cloud_cover: 2.9,
    a_foreign_visitor: 156306,
    foreign_visitors: 1279,
  },
  {
    branch_name: "제주",
    date: "2022.6.16",
    average_temperature: 22.3,
    lowest_temperature: 19.4,
    minimum_temperature_time: 517,
    highest_temperature: 25.7,
    highest_temperature_time: 1436,
    average_wind_speed: 2.3,
    most_wind_direction: 50,
    average_dew_point_temperature: 19.7,
    average_relative_humidity: 85.8,
    average_total_cloud_cover: 4.8,
    average_lower_to_mid_level_cloud_cover: 4.8,
    a_foreign_visitor: 163425,
    foreign_visitors: 1408,
  },
  {
    branch_name: "제주",
    date: "2022.6.17",
    average_temperature: 22.5,
    lowest_temperature: 20.2,
    minimum_temperature_time: 552,
    highest_temperature: 26,
    highest_temperature_time: 1251,
    average_wind_speed: 2.6,
    most_wind_direction: 50,
    average_dew_point_temperature: 20.5,
    average_relative_humidity: 89.1,
    average_total_cloud_cover: 4.9,
    average_lower_to_mid_level_cloud_cover: 4.8,
    a_foreign_visitor: 170131,
    foreign_visitors: 1291,
  },
  {
    branch_name: "제주",
    date: "2022.6.18",
    average_temperature: 23.9,
    lowest_temperature: 21.7,
    minimum_temperature_time: 2353,
    highest_temperature: 26.9,
    highest_temperature_time: 1226,
    precipitation_duration: 0.08,
    daily_precipitation: 0,
    average_wind_speed: 2.6,
    most_wind_direction: 50,
    average_dew_point_temperature: 21.2,
    average_relative_humidity: 85.4,
    average_total_cloud_cover: 3,
    average_lower_to_mid_level_cloud_cover: 2.6,
    a_foreign_visitor: 173161,
    foreign_visitors: 1348,
  },
  {
    branch_name: "제주",
    date: "2022.6.19",
    average_temperature: 25.1,
    lowest_temperature: 21.5,
    minimum_temperature_time: 27,
    highest_temperature: 30.5,
    highest_temperature_time: 1354,
    average_wind_speed: 2.1,
    most_wind_direction: 320,
    average_dew_point_temperature: 21.8,
    average_relative_humidity: 83.3,
    average_total_cloud_cover: 7.3,
    average_lower_to_mid_level_cloud_cover: 5.1,
    a_foreign_visitor: 168825,
    foreign_visitors: 1314,
  },
  {
    branch_name: "제주",
    date: "2022.6.20",
    average_temperature: 23.7,
    lowest_temperature: 21.3,
    minimum_temperature_time: 610,
    highest_temperature: 27.4,
    highest_temperature_time: 1624,
    average_wind_speed: 2.7,
    most_wind_direction: 50,
    average_dew_point_temperature: 21.5,
    average_relative_humidity: 88.3,
    average_total_cloud_cover: 8.3,
    average_lower_to_mid_level_cloud_cover: 5.3,
    fog_lasting_time: 0.48,
    a_foreign_visitor: 154559,
    foreign_visitors: 1337,
  },
  {
    branch_name: "제주",
    date: "2022.6.21",
    average_temperature: 24,
    lowest_temperature: 21.5,
    minimum_temperature_time: 651,
    highest_temperature: 27.3,
    highest_temperature_time: 1518,
    precipitation_duration: 1.15,
    daily_precipitation: 0.1,
    average_wind_speed: 3.5,
    most_wind_direction: 70,
    average_dew_point_temperature: 22,
    average_relative_humidity: 89.5,
    average_total_cloud_cover: 6.1,
    average_lower_to_mid_level_cloud_cover: 5.4,
    a_foreign_visitor: 146516,
    foreign_visitors: 1455,
  },
  {
    branch_name: "제주",
    date: "2022.6.22",
    average_temperature: 23.7,
    lowest_temperature: 20.7,
    minimum_temperature_time: 651,
    highest_temperature: 26.8,
    highest_temperature_time: 1141,
    average_wind_speed: 2.5,
    most_wind_direction: 50,
    average_dew_point_temperature: 21.7,
    average_relative_humidity: 89.1,
    average_total_cloud_cover: 2,
    average_lower_to_mid_level_cloud_cover: 1.8,
    fog_lasting_time: 0.55,
    a_foreign_visitor: 149529,
    foreign_visitors: 1472,
  },
  {
    branch_name: "제주",
    date: "2022.6.23",
    average_temperature: 28.7,
    lowest_temperature: 23,
    minimum_temperature_time: 354,
    highest_temperature: 33.4,
    highest_temperature_time: 1148,
    average_wind_speed: 5.1,
    most_wind_direction: 230,
    average_dew_point_temperature: 23,
    average_relative_humidity: 72.6,
    average_total_cloud_cover: 6.4,
    average_lower_to_mid_level_cloud_cover: 2.6,
    fog_lasting_time: 0.33,
    a_foreign_visitor: 154767,
    foreign_visitors: 1521,
  },
  {
    branch_name: "제주",
    date: "2022.6.24",
    average_temperature: 26.1,
    lowest_temperature: 23.8,
    minimum_temperature_time: 302,
    highest_temperature: 29.5,
    highest_temperature_time: 1629,
    precipitation_duration: 12.05,
    daily_precipitation: 71.4,
    average_wind_speed: 6,
    most_wind_direction: 250,
    average_dew_point_temperature: 23.8,
    average_relative_humidity: 87.8,
    average_total_cloud_cover: 7.1,
    average_lower_to_mid_level_cloud_cover: 4,
    a_foreign_visitor: 163371,
    foreign_visitors: 1457,
  },
  {
    branch_name: "제주",
    date: "2022.6.25",
    average_temperature: 27.4,
    lowest_temperature: 23.8,
    minimum_temperature_time: 634,
    highest_temperature: 32.3,
    highest_temperature_time: 1422,
    average_wind_speed: 2.6,
    most_wind_direction: 20,
    average_dew_point_temperature: 22.9,
    average_relative_humidity: 77.6,
    average_total_cloud_cover: 5.6,
    average_lower_to_mid_level_cloud_cover: 2.8,
    a_foreign_visitor: 166049,
    foreign_visitors: 1407,
  },
  {
    branch_name: "제주",
    date: "2022.6.26",
    average_temperature: 30,
    lowest_temperature: 25.3,
    minimum_temperature_time: 156,
    highest_temperature: 34.4,
    highest_temperature_time: 1708,
    average_wind_speed: 4.4,
    most_wind_direction: 230,
    average_dew_point_temperature: 23.2,
    average_relative_humidity: 68,
    average_total_cloud_cover: 5.9,
    average_lower_to_mid_level_cloud_cover: 3.3,
    a_foreign_visitor: 166084,
    foreign_visitors: 1373,
  },
  {
    branch_name: "제주",
    date: "2022.6.27",
    average_temperature: 30.5,
    lowest_temperature: 27.8,
    minimum_temperature_time: 1,
    highest_temperature: 33.1,
    highest_temperature_time: 1238,
    precipitation_duration: 2.48,
    daily_precipitation: 0,
    average_wind_speed: 4.2,
    most_wind_direction: 230,
    average_dew_point_temperature: 23.3,
    average_relative_humidity: 66.1,
    average_total_cloud_cover: 8.6,
    average_lower_to_mid_level_cloud_cover: 4.4,
    a_foreign_visitor: 155305,
    foreign_visitors: 1352,
  },
  {
    branch_name: "제주",
    date: "2022.6.28",
    average_temperature: 30.5,
    lowest_temperature: 28.9,
    minimum_temperature_time: 338,
    highest_temperature: 33.3,
    highest_temperature_time: 1439,
    precipitation_duration: 0.55,
    daily_precipitation: 0,
    average_wind_speed: 5,
    most_wind_direction: 230,
    average_dew_point_temperature: 23,
    average_relative_humidity: 64.6,
    average_total_cloud_cover: 7.8,
    average_lower_to_mid_level_cloud_cover: 2.3,
    a_foreign_visitor: 151817,
    foreign_visitors: 1307,
  },
  {
    branch_name: "제주",
    date: "2022.6.29",
    average_temperature: 30.2,
    lowest_temperature: 27.8,
    minimum_temperature_time: 2353,
    highest_temperature: 33.9,
    highest_temperature_time: 1409,
    precipitation_duration: 0.97,
    daily_precipitation: 0,
    average_wind_speed: 5,
    most_wind_direction: 230,
    average_dew_point_temperature: 24.1,
    average_relative_humidity: 70.9,
    average_total_cloud_cover: 6.9,
    average_lower_to_mid_level_cloud_cover: 3.4,
    a_foreign_visitor: 149118,
    foreign_visitors: 1376,
  },
  {
    branch_name: "제주",
    date: "2022.6.30",
    average_temperature: 28.7,
    lowest_temperature: 26.4,
    minimum_temperature_time: 2337,
    highest_temperature: 32.1,
    highest_temperature_time: 1338,
    precipitation_duration: 2.5,
    daily_precipitation: 0,
    average_wind_speed: 2.9,
    most_wind_direction: 50,
    average_dew_point_temperature: 24.1,
    average_relative_humidity: 76.9,
    average_total_cloud_cover: 4.3,
    average_lower_to_mid_level_cloud_cover: 1.5,
    a_foreign_visitor: 151878,
    foreign_visitors: 1394,
  },
]
