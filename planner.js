$(document).ready(function() {

      var NowMoment = moment().format('LLL');

      var eDisplayMoment = document.getElementById('displayMoment');
      eDisplayMoment.innerHTML = NowMoment;

      var currentTime = (moment().format('LT'))
      var endTime = moment('09:00 AM', "HH:mm a").format('LT')

      console.log(currentTime)
      console.log(endTime)

      if (currentTime > endTime) {
        ;
      }
      
    });


