

    // 시작 엘럿칭: 모니터 사용권장
    // alert("1920 이상의 모니터 사용을 권장드립니다.");
        

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

