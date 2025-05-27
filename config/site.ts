export type SiteConfig = typeof siteConfig
//export const IP="http://valiantdata.iptime.org:8092"
export const IP="https://seogwipo-maeilollemarket.com"
export const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
export const tokenheaders=(token:any)=>{
  return {'Content-Type': 'application/json',
  "authorization":"Bearer " +token,
  'Accept': 'application/json'
}
}
export const siteConfig = {
  name: "안전관리시스템",
  description: "관광 AI 학습용 데이터 생성 라벨링 도구",
  mainNav: [
    {
      title: "행동기반 안전관리 IOT데이터 모듈",
      href: "/",
    },
    {
      title: "데이터셋 라벨링",
      href: "/",
    },
    {
      title: "AI 학습용 데이터 변환",
      href: "/",
    },
    {
      title: "품질 검증",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com"
    
  }

}
