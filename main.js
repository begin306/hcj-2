document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}

function yellow() {
  document.body.style.backgroundColor = 'yellow'
}

function linen() {
  document.body.style.backgroundColor = 'linen'
}

function showhtml() {
  document.getElemnetById('fig').src = 'img/html5.jpg'
  document.getElemnetById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}

function showcss() {
  document.getElemnetById('fig').src = 'img/css3.jpg'
  document.getElemnetById('desc').innerHTML =
    '<b>css3</b>는HTML문서의 스타일을 지정하기 위한 언어이다.'
}

function showjs() {
  document.getElemnetById('fig').src = 'img/javascript.jpg'
  document.getElemnetById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행 할수 있게한다.'
}

function hide() {
  document.getElemnetById('fig').src = ''
  document.getElemnetById('desc').innerHTML = ''
}
