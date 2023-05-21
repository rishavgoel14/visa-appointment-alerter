// ==UserScript==
// @name         Visa Interview Alerter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ais.usvisa-info.com/en-ca/niv/schedule/49316424/payment
// @icon         https://www.google.com/s2/favicons?sz=64&domain=usvisa-info.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

document.addEventListener("DOMContentLoaded", function(event) {
    'use strict';
    var refreshCount = parseInt(sessionStorage.getItem("refreshCount")) || 0;
    console.log("This works!" + refreshCount);
    var beepAudio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    setInterval(
        function(){
            window.location.reload();
        }, 2*60*1000
    );

    sessionStorage.setItem("refreshCount",
           refreshCount + 1);

    var usefulTable = window.document.getElementsByClassName("for-layout");
    for (var i = 0,row; row = usefulTable[0].rows[i]; i++){
        var location = row.cells[0].innerText;
        var appointmentDate = parseAppointmentDate(row.cells[1].innerText);
        if (appointmentDate != "Invalid Date" && appointmentDate != sessionStorage.getItem(location)) {
            console.log(location + ":" + appointmentDate);
            beepAudio.play();
        }
        if (["Vancouver","Calgary"].includes(location) && appointmentDate.getMonth() > 6 && appointmentDate.getMonth() < 9) {
            setInterval(
                function(){
                    beepAudio.play();
                }, 1*1000
            );
        }
        sessionStorage.setItem(location, appointmentDate);
    };
    //if (refreshCount % 51 == 0) beepAudio.play();
    sessionStorage.setItem("lastRefreshTime", new Date());
});

var parseAppointmentDate = function(inputDate) {
    inputDate = inputDate.replace(",","");
    const formattedDate = new Date(inputDate);
    return formattedDate;
}