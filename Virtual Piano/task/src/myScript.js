document.addEventListener("keypress", function (event) {
    // if(event.code == "KeyA"){
    //     console.log("The 'A' key is Pressed.");
    // }
    switch (event.code){
        case "KeyA":
            let audioA = new Audio("C://Users/SANTOSH/Downloads/audio/A.mp3");
            audioA.play();
            break;
        case "KeyS":
            let audioS = new Audio("C://Users/SANTOSH/Downloads/audio/S.mp3");
            audioS.play();
            break;
        case "KeyD":
            let audioD = new Audio("C://Users/SANTOSH/Downloads/audio/D.mp3");
            audioD.play();
            break;
        case "KeyF":
            let audioF = new Audio("C://Users/SANTOSH/Downloads/audio/F.mp3");
            audioF.play();
            break;
        case "KeyG":
            let audioG = new Audio("C://Users/SANTOSH/Downloads/audio/G.mp3");
            audioG.play();
            break;
        case "KeyH":
            let audioH = new Audio("C://Users/SANTOSH/Downloads/audio/H.mp3");
            audioH.play();
            break;
        case "KeyJ":
            let audioJ = new Audio("C://Users/SANTOSH/Downloads/audio/J.mp3");
            audioJ.play();
            break;
        case "KeyW":
            let audioW = new Audio("C://Users/SANTOSH/Downloads/audio/W.mp3");
            audioW.play();
            break;
        case "KeyE":
            let audioE = new Audio("C://Users/SANTOSH/Downloads/audio/E.mp3");
            audioE.play();
            break;
        case "KeyT":
            let audioT = new Audio("C://Users/SANTOSH/Downloads/audio/T.mp3");
            audioT.play();
            break;
        case "KeyY":
            let audioY = new Audio("C://Users/SANTOSH/Downloads/audio/Y.mp3");
            audioY.play();
            break;
        case "KeyU":
            let audioU = new Audio("C://Users/SANTOSH/Downloads/audio/U.mp3");
            audioU.play();
            break;
        default:
            console.log("Sorry! Invalid Key.")
    }

});