function menu() {
 // .gnb 클래스에 마우스가 진입하거나 벗어났을 때
 // ul과 this의 상태가
 // 열려있으면 닫고
 // 닫혀있으면 연다.
 // 이때, 애니메이션이 진행 중일 때
 // 이벤트가 발동되면 속성값을 고정시키고
 // 현재 속성에서 그대로 진행한다.
 // stop이 있을 때
 // height: 10px => 20px => 이벤트 발동 => 10px => 0
 // stop이 없을 때
 // height: 20px - 10px - 이벤트 발동 - 0px - 10px - 20px
  $('ul', this).stop().slideToggle(300)
}
function slide () {
/** 수도코드
*  3초마다
*  슬라이드가 아래에서 위로
*  애니메이션 된다.
*  마지막 슬라이드에서 첫번째 슬라이드로 이동한다.
*/
  var pos = 0;                      // 현재 슬라이드 위치
  function play () {
                                    // 마지막 슬라이드에서 처음 슬라이드로
                                    // 0 + 1 = 1 % 3 => 1
                                    // 1 + 1 = 2 % 3 => 2
                                    // 2 + 1 = 3 % 3 => 0
  pos = (pos + 1) % 3               // 0, 1, 2가 들어감
                                    // 애니메이션 실행
  $('.slide ul')                    // 슬라이드(대상)
  .animate({                        // 애니메이션(기능, 명령)
                                    // 아래에서 위로
                                    // -0px, -300px, -600px이 들어감
    marginTop: -300 * pos + "px"
  }, 500)                           // 0.5초간 애니메이션 진행
}
                                    // 2초마다 슬라이드 애니메이션 실행
  setInterval(play, 2000)
}


function layerToggle () {
  $('.layer')                       // 레이어팝업이
  .toggle()                         // 열린상태 => 닫힌상태, 닫힌상태 => 열린상태로 토글한다.
}


$(document)
  .on('ready', slide)
  .on('mouseenter mouseleave', '.gnb>ul>li', menu) //gnb>ul이면 submenu전체 gnb>ul>li이면 한줄만
  .on('click', '.notice li:eq(0), .layer__close', layerToggle)
  // 공지사항의 첫번째 게시물을 클릭하면, 레이어팝업에 있는 닫기버튼을 누르면
  