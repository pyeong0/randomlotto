import { useState, useEffect } from 'react'
import "./App07.css"
import React from 'react';

function getLottoColorClass(num) {
    if (num >= 1 && num <= 10) return "yellow";
    if (num >= 11 && num <= 20) return "blue";
    if (num >= 21 && num <= 30) return "red";
    if (num >= 31 && num <= 40) return "black";
    if (num >= 41 && num <= 45) return "green";
    return "";
  }
  

function App(){
  
  const [lottoNumbers, setLottoNumbers] = useState([])
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const year = currentTime.getFullYear();
  const month = currentTime.getMonth() + 1;
  const date = currentTime.getDate();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  const now = `${year}년 ${month}월 ${date}일 `;
  const nowtime = `현재시간: ${hour}시 ${minute}분 ${second}초`;

  return <div className="container">
    <div className="lotto">
    <h7 className="nowtime-color">{nowtime}</h7>
      <h3><span>{now}</span>로또 번호 추첨</h3>
      <div className="numbers">
        {lottoNumbers.map((num, idx) => {
          return  <div className={`eachnum ${getLottoColorClass(num)}`} key={idx}>{num}</div>
        })}
      </div>
      <button onClick={() => {
        const lottoNumbers = []
        while(lottoNumbers.length < 6){
          let ran = Math.floor(Math.random() * 45) + 1
          if(lottoNumbers.indexOf(ran) === -1){
            lottoNumbers.push(ran)
          }
        }
        setLottoNumbers(lottoNumbers)
      }}>추첨</button>
      <button onClick={() => {
        setLottoNumbers([])
      }}>다시</button>
    </div>
</div>
}

export default App;