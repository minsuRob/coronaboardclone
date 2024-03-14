import React from 'react';
import { Slide } from '../components/slide';

export default function SinglePage({ pageContext }) {
    const {dataSource} = pageContext;
    // const {thirdSlideTitle} = dataSource;
    // const {countryByCc, globalStats} = dataSource;

    // console.log(countryByCc);
    // console.log(globalStats);
    return (
        <div>
            <h1>야로나!!보드</h1>
            <p>made by createPage</p>
            <Slide title="국가 별 상황"> 국가별 현황</Slide>
  <Slide title={"국가 별 상황"}> 국가별 현황1 오호</Slide>
    {/* <Slide title={thirdSlideTitle}> 국가별 현황</Slide> */}
        </div>
    )
}