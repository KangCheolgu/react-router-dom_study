import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {
  return(
    <div>
      <h1>안녕 리액트라우터돔</h1>
      <Home></Home>
      <Topics></Topics>
      <Contact></Contact>
    </div>
  );
}

function Home() {
  return(
    <div>
      <h1>홈</h1>
      홈..
    </div>

  );
}

function Topics() {
  return(
    <div>
      <h1>토픽</h1>
     토픽..
    </div>

  );
}
function Contact() {
  return(
    <div>
      <h1>콘텍트</h1>
     콘텍트...
    </div>

  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
