/*
* @Author: Marte
* @Date:   2017-07-24 14:27:49
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-14 00:28:55
*/

window.onload = function(){
    $('.h1-blur').css({
        'animation':'y 2s',
        'animation-fill-mode':'fowards'
        });
    $('.h1-blur1').css('animation-delay','.8s');
    $('.h1-blur2').css('animation-delay','1.8s');
}

// $(document).ready(function(){
//     /** 按钮动画 **/
//     $('.cd-timeline-content a').mouseenter(function(){
//         $(this).addClass('animated tada');
//     });
//     $('.cd-timeline-content a').mouseleave(function(){
//         $(this).removeClass('animated tada');
//     });

//     $('.top-three').click(function(){
//         $('#cd-timeline .cd-timeline-block:nth-of-type(-n+3)').slideToggle(600);
//     });
// });