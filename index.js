var portImg = document.querySelectorAll('.portfolioImg');
portImg.forEach((pImg)=> pImg.addEventListener('mouseenter', function(){
    
    for (var i =0; i <= portImg.length; i++){
        (portImg[i]).classList.remove('active');
        this.classList.add("active");
    }
}))

portImg.forEach((pImg) =>
  pImg.addEventListener("mouseleave", function () {
    if (this.classList.contains("active")){
        this.classList.remove('active')
    }
  })
);


 