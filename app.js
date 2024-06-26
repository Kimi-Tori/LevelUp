const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  var endTime = new Date();
  endTime.setMinutes(endTime.getMinutes() + 30);

  function updateTimer() {
      var currentTime = new Date();
      var timeDiff = endTime - currentTime;

      var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      document.querySelector(".order__timer-hour").innerHTML = minutes;
      document.querySelector(".order__timer-time").innerHTML = seconds;

      if (timeDiff <= 0) {
          clearInterval(timerInterval);
          document.querySelector(".order__timer").innerHTML = 'Время истекло!';
      }
  }

  var timerInterval = setInterval(updateTimer, 1000);

