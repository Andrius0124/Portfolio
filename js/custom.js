var clicking = true;
var spiningAnimation = false;

function randomJellyEffect() {
    
    var logos = $('.logoSelector');
    var index = Math.floor(Math.random() * logos.length);
    logos.each(function () {
        
        this.classList.remove("jello-horizontal")
    }
    );
    logos[index].classList.add("jello-horizontal");
    
}

$(function (){

    var introHeight = $('#intro').height();
    var introWidth = $('#intro').width();
    var headPos  = $('#head').offset();
    var mayaPos  = $('#maya').offset();
    var cSharpPos  = $('#cSharp').offset();
    var logosDiffX = {top:0 , left: mayaPos.left  - cSharpPos.left };
    var logosDiffY = {top:mayaPos.top - cSharpPos.top   , left: 0 };
    var movePos = {top:headPos.top -mayaPos.top +50 , left:headPos.left - mayaPos.left +150};
    
    document.documentElement.style.setProperty('--headsPosition',"translate3d("+ movePos.left + "px,"+movePos.top + "px,0px)");
    document.documentElement.style.setProperty('--logosDiffX',"translate3d("+ logosDiffX.left + "px,"+logosDiffX.top + "px,0px)");
    document.documentElement.style.setProperty('--logosDiffY',"translate3d("+ logosDiffY.left + "px,"+logosDiffY.top + "px,0px)");
    document.documentElement.style.setProperty('--logosRotateAround',"50% " + -introHeight +"px" );
    document.documentElement.style.setProperty('--logosFloatingBoxX',"translateX("+introWidth*3/2 +"px)");
    document.documentElement.style.setProperty('--logosFloatingBoxY',"translateY("+introHeight*3/2 +"px)");
    document.documentElement.style.setProperty('--logosFloatingBoxXN',"translateX("+ -introWidth*3/2 +"px)");
    document.documentElement.style.setProperty('--logosFloatingBoxYN',"translateY("+ -introHeight*3/1.5 +"px)");
    
    bindLogos();

     setUpFollowSpinAimation();
     setInterval(randomJellyEffect,5000);
    
     setInterval(function () {
         if ($('.logoSelector').length === 0 && $('.logoInHead').length !== 0 ){
             setTimeout(function () {
                     $('#head').addClass("shake-lr");
                     var logos = $('.logoInHead');
                     logos.each(function () {

                         this.querySelector('img').classList.add("shake-lr-logos");

                     });
                 setTimeout(function () {
                     $('#headTop').addClass("bounce-out-top");
                     var logos = $('.logoInHead');
                     var delay = 500;
                     logos.each(function () {
                         var logo = this;

                                 logo.querySelector('img').classList.remove("shake-lr-logos");
                                 setTimeout(function () {
                                     logo.querySelector('img').classList.add("slide-around");
                                 },delay);
                                 logo.classList.remove("logoInHead");

                         delay +=500;

                     });
                 },3000)
             }, 3000)
         }
             
         
     },1);
    
});

function enableSpiningAnimation() {
    spiningAnimation = !spiningAnimation;
}

function getRule(ruleName) {

    var rule;

    var ss = document.styleSheets;

    for (var i = 0; i < ss.length; ++i) {

        // loop through all the rules!

        for (var x = 0; x < ss[i].cssRules.length; x++) {

            rule = ss[i].cssRules[x];

            if (rule.name === ruleName && rule.type

                === CSSRule.KEYFRAMES_RULE) {
                console.log((rule.cssRules[1].cssText).slice(18 , -14));
                 return (rule.cssRules[1].cssText).substr(18, -14);

            }

        }

    }

}

function setUpFollowSpinAimation(e) {
    if (spiningAnimation) {
        
        var x = e.clientX;
        var y = e.clientY;
        var coor = "Coordinates: (" + x + "," + y + ")";
        var logos = $('.logoSelector');
        logos.each(function () {
            document.documentElement.style.setProperty('--logosLastPos',"translate3d("+ this.offsetLeft + "px,"+this.offsetTop + "px,0px)");
            if (!this.classList.contains("follow")) {
                this.classList.add("follow");
            }
            
            
        });
        console.log(coor);
    }
}

function enableClicking() {
    clicking = !clicking;
    var logos = $('.logoSelector');
    logos.each(function () {
        if (this.classList.contains("follow")) {
            this.classList.remove("follow");
        }
    });
    bindLogos();
    
}

function bindLogos() {
    if(clicking) {
        $('#maya').click(function () {
            if ($('.rotate-br').length > 0) {
                var el = $('.rotate-br'),
                    newone = el.clone(true);
                el.before(newone);
                $('.rotate-br').last().remove();
            }
            $('#maya').removeClass("logoSelector");
            $('#maya').addClass("logoInHead");
            $('#maya').removeClass("jello-horizontal");
            $('#maya').addClass("slide-in-top-maya");
            $('#headTop').addClass("rotate-br");
        });
        $('#unity').click(function () {
            if ($('.rotate-br').length > 0) {
                var el = $('.rotate-br'),
                    newone = el.clone(true);
                el.before(newone);
                $('.rotate-br').last().remove();
            } $('#unity').removeClass("logoSelector");
            $('#unity').addClass("logoInHead");
            $('#unity').removeClass("jello-horizontal");
            $('#unity').addClass("slide-in-top-unity");
            $('#headTop').addClass("rotate-br");

        });
        $('#cpp').click(function () {
            if ($('.rotate-br').length > 0) {
                var el = $('.rotate-br'),
                    newone = el.clone(true);
                el.before(newone);
                $('.rotate-br').last().remove();
            }
            $('#cpp').addClass("logoInHead");
            $('#cpp').removeClass("logoSelector");
            $('#cpp').removeClass("jello-horizontal");
            $('#cpp').addClass("slide-in-top-Cpp");
            $('#headTop').addClass("rotate-br");

        });
        $('#cSharp').click(function () {
            if ($('.rotate-br').length > 0) {
                var el = $('.rotate-br'),
                    newone = el.clone(true);
                el.before(newone);
                $('.rotate-br').last().remove();
            }
            $('#cSharp').addClass("logoInHead");
            $('#cSharp').removeClass("logoSelector");
            $('#cSharp').removeClass("jello-horizontal");
            $('#cSharp').addClass("slide-in-top-Csharp");
            $('#headTop').addClass("rotate-br");

        });
        $('#angular').click(function () {
            if ($('.rotate-br').length > 0) {
                var el = $('.rotate-br'),
                    newone = el.clone(true);
                el.before(newone);
                $('.rotate-br').last().remove();
            }
            $('#angular').addClass("logoInHead");
            $('#angular').removeClass("logoSelector");
            $('#angular').removeClass("jello-horizontal");
            $('#angular').addClass("slide-in-top-angular");
            $('#headTop').addClass("rotate-br");

        });
        $('#git').click(function () {
            if ($('.rotate-br').length > 0) {
                var el = $('.rotate-br'),
                    newone = el.clone(true);
                el.before(newone);
                $('.rotate-br').last().remove();
            }
            $('#git').addClass("logoInHead");
            $('#git').removeClass("logoSelector");
            $('#git').removeClass("jello-horizontal");
            $('#git').addClass("slide-in-top-git");
            $('#headTop').addClass("rotate-br");

        });
        
        $('#android').click(function () {
            if ($('.rotate-br').length > 0) {
                var el = $('.rotate-br'),
                    newone = el.clone(true);
                el.before(newone);
                $('.rotate-br').last().remove();
            
            }
            $('#android').addClass("logoInHead");
            $('#android').removeClass("logoSelector");
            $('#android').removeClass("jello-horizontal");
            $('#android').addClass("slide-in-top-android");
            $('#headTop').addClass("rotate-br");

        });
        $('#trinity').click(function () {
            if ($('.rotate-br').length > 0) {
                var el = $('.rotate-br'),
                    newone = el.clone(true);
                el.before(newone);
                $('.rotate-br').last().remove();
            }
            $('#trinity').addClass("logoInHead");
            $('#trinity').removeClass("logoSelector");
            $('#trinity').removeClass("jello-horizontal");
            $('#trinity').addClass("slide-in-top-trinity");
            $('#headTop').addClass("rotate-br");

        });
        $('#sql').click(function () {
            if ($('.rotate-br').length > 0) {
                var el = $('.rotate-br'),
                    newone = el.clone(true);
                el.before(newone);
                $('.rotate-br').last().remove();
            }
            $('#sql').addClass("logoInHead");
            $('#sql').removeClass("logoSelector");
            $('#sql').removeClass("jello-horizontal");
            $('#sql').addClass("slide-in-top-sql");
            $('#headTop').addClass("rotate-br");

        });
        $('#dotnet').click(function () {
            if ($('.rotate-br').length > 0) {
                var el = $('.rotate-br'),
                    newone = el.clone(true);
                el.before(newone);
                $('.rotate-br').last().remove();
            }
            $('#dotnet').addClass("logoInHead");
            $('#dotnet').removeClass("logoSelector");
            $('#dotnet').removeClass("jello-horizontal");
            $('#dotnet').addClass("slide-in-top-dotnet");
            $('#headTop').addClass("rotate-br");

        });
    }
}