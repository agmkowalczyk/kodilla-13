  function getTimeFormat(time) {

    var printTime = '';

    var hours = Math.floor(time/60/60);
    if (hours >= 1) {
        time = time - (hours*60*60);
        printTime += hours + ' godz. ';
    }
    var minutes = Math.floor(time/60);
    if (minutes >= 1) {
        time = time - (minutes*60);
        printTime += minutes + ' min. ';
    }
    printTime += Math.floor(time) + ' sek ';
    
    return printTime;    
}

exports.print = getTimeFormat;