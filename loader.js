document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'interactive') {
        
        document.querySelector('.loader').style.display = "block";
        
        
        setTimeout(function() {
            document.querySelector('.loader').style.display = "none";
        }, 2000);
    }
}