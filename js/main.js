

    // 시작 엘럿칭: 모니터 사용권장
    // alert("1920 이상의 모니터 사용을 권장드립니다.");

    (function (global, $) {

        var $menu     = $('.mainMenu li.subMenu'),
            $contents = $('.scroll'),
            $doc      = $('html, body');
        $(function () {
            // 해당 섹션으로 스크롤 이동
            $menu.on('click','a', function(e){
                var $target = $(this).parent(),
                    idx     = $target.index(),
                    section = $contents.eq(idx),
                    offsetTop = section.offset().top;
                $doc.stop()
                        .animate({
                            scrollTop :offsetTop
                        }, 800);
                return false;
            });
        });
    
        // menu class 추가
        $(window).scroll(function(){
            var scltop = $(window).scrollTop();
            $.each($contents, function(idx, item){
                var $target   = $contents.eq(idx),
                    i         = $target.index(),
                    targetTop = $target.offset().top;
    
                if (targetTop <= scltop) {
                    $menu.removeClass('on');
                    $menu.eq(idx).addClass('on');
                }
                if (!(200 <= scltop)) {
                    $menu.removeClass('on');
                }
            })
    
        });
    
        // Go to the TOP
        var btnTop = $('.toTheTop');
        btnTop.on('click','a', function(e){
            e.preventDefault();
            $doc.stop()
                    .animate({
                        scrollTop : 0
                    },800)
        });
    
    }(window, window.jQuery));
        

    function showDisplayDefinitionBtn() {

        const definitionEx = document.getElementsByClassName("boxhide")[0];

        if ( definitionEx.style.display !== 'none' ) {
            definitionEx.style.display = 'none';
        } else {
            definitionEx.style.display = 'block';
        }
    }


    // design_sys_04 h1 animation
    const options = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: .5,  // 50%가 viewport에 들어와 있어야 callback 실행
      }
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log(entry.isIntersecting);
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      }, options);
      
      const titleList = document.querySelectorAll('.sys04tit');
      const subTitleList = document.querySelectorAll('.sysSubTltle');
      
      // 반복문을 돌려 모든 DOM에 적용
      titleList.forEach(el => observer.observe(el));
      subTitleList.forEach(el => observer.observe(el));

