window.onload = function(){
    main();
}

function main(){
    setup();
    setInterval(function(){
        loop();
    },1);
}