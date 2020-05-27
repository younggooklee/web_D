function menu() {
    $('ul', this).stop().slideToggle(300)
}
function slide(){
    var pos=0;  //현재 슬라이드 위치
    function play(){
        pos=(pos+1)%3  // 0,1,2가 들어감

        $('.slide ul') // 애니메이션 실행
        .animate({
            marginTop: -300*pos+"px"  // 위에서 아래로 -0px, -300px, -600px이 들어감
        }, 500)  // 0.5초간 애니메이션 진행
    }
    setInterval(play,2000)   // 2초마다 슬라이드 애니메이션 실행
}
function layerToggle(){
    $('.layer')     // 레이어 팝업이
    .toggle()       // 열린상태에서 닫힌상태로 그리고 또 반대로 전환된다.
}

$(document)
.on('ready', slide)
.on('mouseenter mouseleave', '.gnb>ul>li', menu) // gnb>ul이면 submeun전체가 나타난다.
.on('click', '.notice li:eq(0), .layer__close', layerToggle) // 공지사항의 첫번째 게시물을 클릭하면, 레이어 팝업이 실행되고 닫기 버튼을 누르면 닫힌다. 
 
