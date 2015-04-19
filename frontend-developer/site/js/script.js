(function () {
    "use strict";
    /*jslint browser: true */
    
    /* Countdown Timer Widget */
    var targetDate = new Date(2015, 3, 25),
        dateHtmlElements = {
            elementDays: document.getElementsByClassName('counter--days'),
            elementHours: document.getElementsByClassName('counter--hours'),
            elementMinutes: document.getElementsByClassName('counter--minutes'),
            elementSeconds: document.getElementsByClassName('counter--seconds')
        };

    function countdownTimer() {
        
        //For simplicity, getting client-side date. A server-side date would be a better option.
        var currentDateNow = new Date(),
            remainingTime = targetDate.valueOf() - currentDateNow.valueOf();
        
        //Returning if counter reach 0.
        if (remainingTime < 1000) { return; }
        
        var timeToTarget = {
                daysLeft: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
                hoursLeft: Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
                minutesLeft: Math.floor((remainingTime / (1000 * 60)) % 60),
                secondsLeft: Math.floor((remainingTime / (1000)) % 60)
            };
        
        dateHtmlElements.elementDays[0].innerHTML = timeToTarget.daysLeft < 10 ? '0' + timeToTarget.daysLeft : timeToTarget.daysLeft;
        dateHtmlElements.elementHours[0].innerHTML = timeToTarget.hoursLeft < 10 ? '0' + timeToTarget.hoursLeft : timeToTarget.hoursLeft;
        dateHtmlElements.elementMinutes[0].innerHTML = timeToTarget.minutesLeft < 10 ? '0' + timeToTarget.minutesLeft : timeToTarget.minutesLeft;
        dateHtmlElements.elementSeconds[0].innerHTML = timeToTarget.secondsLeft < 10 ? '0' + timeToTarget.secondsLeft : timeToTarget.secondsLeft;
    }
    
    setInterval(countdownTimer, 100);
    
    
    /* Nav Behavior */
    var navDrawerIcon = document.getElementsByClassName('header--icon--mobile-nav'),
        navDrawer = document.getElementsByClassName('header--main--nav');
    
    function toggleDrawer() {
        if (navDrawerIcon[0].className === "header--icon--mobile-nav") {
            navDrawer[0].style.marginLeft = "0px";
            navDrawerIcon[0].className = "header--icon--mobile-nav active";
        } else {
            navDrawer[0].style.marginLeft = "-175px";
            navDrawerIcon[0].className = "header--icon--mobile-nav";
        }
    }
    
    navDrawerIcon[0].addEventListener('click', toggleDrawer, false);
    
})();
