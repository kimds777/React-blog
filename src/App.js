/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 실무에선 DB연결해서 사용
  //let postTitle = '포스트 제목'; 
  let postDate = '2월 15일';

  // html id와 class에도 변수사용 가능
  let htmlId = 'postTitle';
  let htmlClass = 'black-nav';

  // html에 style 적용시 중괄호 사용해서 object형태로 넣어줘야한다.
  // font-size와 같은 css는 카멜케이스로 수정해서 사용해야한다.

  // a : state에 보관한 데이터
  // b : state 변경을 도와주는 함수
  // 변수명이 [a,b]인 이유는 Destructuring문법과 연관되어있다.
  // [1,2] 배열에 데이터를 변수로 선언하여 사용하는 문법
  // state를 사용하면 데이터가 변경될때 html을 자동으로 재랜더링 해준다.
  let [a, b] = useState('여자 코트 추천');

  let [postTitle, c] = useState(['여자 코트 추천','강남 우동 맛집','리액트 독학']);
  let [like, d] = useState([0,0,0]);

  function clickLikeCnt(index){
    let copy = [...like];
    copy[index] += 1;
    d(copy);
  }

  function sortTitle(){
    let copy = [...postTitle];
    copy.sort();
    console.log('sortTitle arr ==>',copy);
    c(copy);
  }

  return (
    <div className="App">
      <div className={htmlClass}>
        <h4 style={ {color:'hotpink', fontSize:'16px'} }>React-blog</h4>
      </div>
      <button onClick={() => sortTitle()}>제목 오름차순 정렬</button>
      <div className="list">
        <h4 id={htmlId}>{postTitle[0]} <span onClick={() => clickLikeCnt(0)}>❤️</span>{like[0]}</h4>
        <p>{postDate} 발행</p>
      </div>
      <div className="list">
        <h4 id={htmlId}>{postTitle[1]} <span onClick={() => clickLikeCnt(1)}>❤️</span>{like[1]}</h4>
        <p>{postDate} 발행</p>
      </div>
      <div className="list">
        <h4 id={htmlId}>{postTitle[2]} <span onClick={() => clickLikeCnt(2)}>❤️</span>{like[2]}</h4>
        <p>{postDate} 발행</p>
      </div>
      
    </div>
  );
}

export default App;
