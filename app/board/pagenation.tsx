"use client"
import { useState, useEffect } from "react";
import  Link  from "next/link";


interface Props {
    totalItems: number; // 데이터의 총 개수
    itemCountPerPage: number; // 페이지 당 보여줄 데이터 개수
    pageCount: number; // 보여줄 페이지 개수
    currentPage: number; // 현재 페이지
    search:string;
  }

export default function Pagination({ totalItems, itemCountPerPage, pageCount, currentPage,search }: Props) {
    const totalPages = Math.ceil(totalItems / itemCountPerPage); // 총 페이지 개수
    const [start, setStart] = useState(1); // 시작 페이지
    const noPrev = start === 1; // 이전 페이지가 없는 경우
    const noNext = start + pageCount - 1 >= totalPages; // 다음 페이지가 없는 경우

  useEffect(() => {
    if (currentPage < start) {
      setStart(Math.ceil(currentPage / pageCount) * pageCount - pageCount + 1);
    }

    // 현재 페이지가 시작 페이지 + 페이지 개수보다 크면 시작 페이지 업데이트
    if (currentPage >= start + pageCount) {
      setStart(Math.ceil(currentPage / pageCount) * pageCount - pageCount + 1);
    }
  }, [currentPage, pageCount, start]);

  return (
    <div className={"pagewrapper"}>

      <ul className="pageul">
        <li className={`${"move"} ${noPrev && "invisible"} pageli`}>
          <Link href={{pathname:`${start - 1}`,query:{search}}}>이전</Link>
        </li>
        {[...Array(pageCount)].map((a, i) => (
          <>

            {start + i <= totalPages && (
              <li className="pageli" key={i}>
                <Link className={`${"page"} ${currentPage === start + i && "active"}`}
                  href={{pathname:`${start + i}`,query:{search}}}>
                  {start + i}
                </Link>
              </li>
            )}
          </>
        ))}
        <li className={`${"move"} ${noNext && "invisible"} pageli`}>
          <Link href={{pathname:`${start + pageCount}`,query:{search}}}>다음</Link>
        </li>
      </ul>
    </div>
  );
}