import logo from './logo.svg';
import './App.css';

function App() {

  // 실무에선 DB연결해서 사용
  let postTitle = '포스트 제목'; 

  // html id와 class에도 변수사용 가능
  let htmlId = 'postTitle';
  let htmlClass = 'black-nav';

  // html에 style 적용시 중괄호 사용해서 object형태로 넣어줘야한다.
  // font-size와 같은 css는 카멜케이스로 수정해서 사용해야한다.
  
  return (
    <div className="App">
      <div className={htmlClass}>
        <h4 style={ {color:'yellow', fontSize:'16px'} }>React-blog</h4>
      </div>
      <h4 id={htmlId}>{postTitle}</h4>
    </div>
  );
}

export default App;
