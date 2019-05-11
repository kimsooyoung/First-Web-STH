var Link = {
    set_color : function (color){
        $('a').css('color', color);    
    }
}
var Body = {
    set_color : function (color){
        $('body').css('color', color);
    },
    set_background : function (color){
        $('body').css('backgroundColor', color);
    }
}
function night_day_handler(self) {
    if(self.value === 'night'){
        Body.set_background('black');
        Body.set_color('white');
        Link.set_color('yellow')
        self.value = 'day';
    }else{
        Body.set_background('white');
        Body.set_color('black');
        Link.set_color('black');
        self.value = 'night';
    }
    document.querySelector('#active').style.color = 'red';                
}