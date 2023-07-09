window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    // console.log(scrollPosition)
    if (scrollPosition > 1500) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  
    const textElement = document.querySelector('.lowerheader');
    const boxd1 = document.querySelector('#boxdesc1');
    const boxd2 = document.querySelector('#boxdesc2');
    const boxd3 = document.querySelector('#boxdesc3');
    const s1img = this.document.querySelector('.setoneimg');
    const s1para = this.document.querySelector('.setonepara');
    const s2img = this.document.querySelector('.settwoimg')
    const s2para = this.document.querySelector('.settwopara')
    const windowHeight = window.innerHeight;
    const triggerPosition1 = 500; // Adjust the scroll trigger position as desired
    const triggerPosition2 = 1000;
    const triggerPosition3= 1300;
    
    if (scrollPosition > triggerPosition1) {
      textElement.style.opacity='1';
      textElement.style.transform='translateY(0)';
    }
    if(scrollPosition > triggerPosition1){
        boxd1.style.opacity='1';
        boxd1.style.transform='translateX(0)'
        boxd2.style.opacity='1';
        boxd2.style.transform='translateX(0)'
        boxd3.style.opacity='1';
        boxd3.style.transform='translateX(0)'
    }
    if(scrollPosition > triggerPosition2){
        s1img.style.opacity='1';
        s1para.style.transform='translateX(0)'
    }
    if(scrollPosition > triggerPosition3){
        s2img.style.opacity='1';
        s2para.style.transform='translateX(0)'
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.getElementById('getStartedbtn');
  
    const loggedInUser = localStorage.getItem('loggedInUser');
  
    if (loggedInUser) {
      
      getStartedButton.addEventListener('click', function() {
        window.location.href = './HirePage/HirePage.html';
      });
    } else {
      
      getStartedButton.addEventListener('click', function() {
        window.location.href = './Loginpage/Login.html';
      });
    }
  });
  
  