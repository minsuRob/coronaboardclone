import React from "react"
import { Slide } from "../components/slide";

export default function Home() {
  const thirdSlideTitle = '예방 해동 수칙';
  return (<div>
    <h1>야로나보드</h1>
    <Slide title="국가 별 상황"> 국가별 현황</Slide>
  <Slide title={"국가 별 상황"}> 국가별 현황</Slide>
    <Slide title={thirdSlideTitle}> 국가별 현황</Slide>
  </div>)
}
