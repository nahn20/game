
    
function startSequence(){
    typingText.typeSpeed = 1;
    typingText('Start Game', 'startGameButton');
    setTimeout(function(){
        typingText('Player 1 Class', 'thisIs1StupidDiv');
        typingText('Player 2 Class', 'thisIs2StupidDiv');
        setTimeout(function(){
            document.getElementById('player1SelectBox').style.display = "inline"; //There might be a better way of doing this, but I couldn't find it
            document.getElementById('player2SelectBox').style.display = "inline";
        }, 1800 / typingText.typeSpeed);
    }, 1400 / typingText.typeSpeed);
    setTimeout(function(){
        typingText('Map Select', 'wowAnotherDiv');
        typingText('Player 1 Controls', 'player1ControlsSelect');
        typingText('Player 2 Controls', 'player2ControlsSelect');
        setTimeout(function(){
            document.getElementById('mapSelectBox').style.display = "inline";
            document.getElementById('player1ControlsSelectBox').style.display = "inline";
            document.getElementById('player2ControlsSelectBox').style.display = "inline";
        }, 1800 / typingText.typeSpeed);
    }, 3800 / typingText.typeSpeed);
}
function typeFaster(){
    typingText('Start Game', 'startGameButton');
    typingText('Player 1 Class', 'thisIs1StupidDiv');
    typingText('Player 2 Class', 'thisIs2StupidDiv');
    typingText('Map Select', 'wowAnotherDiv');
    typingText('Player 1 Controls', 'player1ControlsSelect');
    typingText('Player 2 Controls', 'player2ControlsSelect');
    document.getElementById('player1SelectBox').style.display = "inline";
    document.getElementById('player2SelectBox').style.display = "inline";
    document.getElementById('mapSelectBox').style.display = "inline";
    document.getElementById('player1ControlsSelectBox').style.display = "inline";
    document.getElementById('player2ControlsSelectBox').style.display = "inline";
}
function typingText(dataText, whichBox){
  // type one text in the typwriter
  // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
        //adds next character
     document.getElementById(whichBox).innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      // wait for a while and call this function again for next character
        if(text.substring(i, i+1) == "."){
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 800 / typingText.typeSpeed);
        }
        else if(text.substring(i, i+1) == " "){
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 225 / typingText.typeSpeed);
        }
        else{
           setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 125 / typingText.typeSpeed); 
        }
    }
      else{
          //Is this returning to the function before? Try fixing that
      }
    // text finished, call callback if there is a callback function. Reinclude if you want to make it start again from an event
//    else if (typeof fnCallback == 'function') {
//        document.getElementById("textTriggerButton").addEventListener("click", fnCallback);
//
//    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     // check if dataText exists
    if (i < dataText.length) {
      // text exists! start typewriter animation
     typeWriter(dataText, 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i);
     });
    }
  }
    
  // start the text animation
  StartTextAnimation(0);
}