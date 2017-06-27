
$(document).ready(function(){
    // $('.load').animate({'opacity': '0', 'z-index': '0'}, 1000);
    Player = {
            init  : function(audio, pp, time, volicon, vbar, stname){this.audio = audio;this.ppcontrol = pp;this.volicon = volicon;this.timebox = time;this.vbar = vbar;this.stname = stname;this.updVol();},
            vol   : function(i){this.audio.volume = i/100;this.updVol();},
            updVol: function(){i = this.audio.volume;this.volicon.className = this.audio.muted ? 'muted' : (i > 0.3 ? (i > 0.6 ? 'high' : 'medium') : 'low');},
            track : function(e){t = e.getAttribute('data-uri');n = e.getAttribute('data-title');this.audio.src = t;this.stname.innerHTML = "<span>" + e.innerHTML + "</span><span>" + n + "...</span>";this.play();},
            play  : function(){if(this.audio.src == ''){this.stname.innerHTML = '<span>Пожалуйста, выберите станцию!</span>';} else {this.audio.play();this.ppcontrol.className = 'pause';this.time();}},
            pause : function(){this.audio.pause();this.ppcontrol.className = 'play';clearTimeout(this.timer);},
            time  : function(){t = this.audio.currentTime;h = parseInt(t/3600); hh = h > 0 ? h+' : ' : '';m = parseInt((t-h*3600)/60); mm = m > 9 ? m :'0'+m;s = parseInt(t-h*3600-m*60); ss = s > 9 ? s : '0'+s;this.timebox.innerHTML = hh+mm+' : '+ss;this.timer = setTimeout(function(){Player.time();}, 500);},
            pp    : function(){if(this.audio.paused){this.play();} else {this.pause();}},
            mute  : function(){this.audio.muted = !this.audio.muted;this.updVol();}
        };function $1(e){return document.getElementById(e);}
        Player.init($1('audio'), $1('pp'), $1('time'), $1('volicon'), $1('vbar'), $1('stationname'));


    $('.radious a').click(function(){
        $('.radious a').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    var slide_move = function(next, item, slide){
        var slides = $('.slide');
        if(next){
            slides.eq(slides.length-1).after(slides.eq(0));
        } else {
            slides.eq(0).before(slides.eq(slides.length-1));
        }
        slides = $('.slide');
        slides.each(function(i, j){
            if('#'+$(this).attr('id') == slide){
                item = i;
            }
        });
        slides.removeClass('current next prev');
        slides.eq(item).addClass('current');
        slides.eq((item+1)%slides.length).addClass('next');
        slides.eq(item-1).addClass('prev');
    }
    $('.controls a').click(function(){
        $('.controls a').removeClass('active');
        $(this).addClass('active');
        var slide = $(this).attr('href');
        var item;
        var slides = $('.slide');
        slides.each(function(i, j){
            if('#'+$(this).attr('id') == slide){
                item = i;
            }
        });
        if(!slides.eq(item).hasClass('current')){
            var next = true;
            if(slides.eq(item).hasClass('prev')){
                next = false;
            }
            slide_move(next, item, slide);
        }
        return false;
    });
    $('.arrow-prev').click(function(){
        var item;
        var controls = $('.controls a');
        controls.each(function(i,j){
            if($(this).hasClass('active')){
                item = i-1;
            }
        });
        controls.removeClass('active');
        controls.eq(item).addClass('active');
        var slide = controls.eq(item).attr('href');
        slide_move(false, item, slide);
    });
    $('.arrow-next').click(function(){
        var item;
        var controls = $('.controls a');
        controls.each(function(i,j){
            if($(this).hasClass('active')){
                item = (i+1)%controls.length;
            }
        });
        controls.removeClass('active');
        controls.eq(item).addClass('active');
        var slide = controls.eq(item).attr('href');
        slide_move(true, item, slide);
    });
});


