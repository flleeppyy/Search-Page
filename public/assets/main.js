let backgrounds = ['1.jpg','10.jpg','11.jpg','12.jpg','13.png','14.jpg','2.jpg','3.png','4.png','5.jpeg','6.png', '7.jpg','8.png',  '9.png']

var randbackground = '/backgrounds/' + backgrounds[Math.floor(Math.random() * backgrounds.length)];


$(function() {
    $('#bg').attr("style", `background-image: url(${randbackground});`);
    console.log($('body').attr("style"))
 });
