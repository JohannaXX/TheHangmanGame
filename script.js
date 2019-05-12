let words = ["CHICKEN", "CHEESE", "RICE", "EGGS", "APPLES", "SOUP", "YOGURT", "BREAD"];

let selWord = words[Math.floor(Math.random()*words.length)];
let hiddenWord = [];
let wrongChars = [];
let imgX = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img1.jpg";
document.getElementById("imgX").href = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img1.jpg";

let yrWins = 0;
document.getElementById("yrWins").innerHTML = yrWins;

let pcWins = 0; 
document.getElementById("pcWins").innerHTML = pcWins;

let remAtt = 11;
document.getElementById("remAtt").innerHTML = remAtt;


window.onload = function () {
    selWord = words[Math.floor(Math.random()*words.length)];
    game();
};


// UNDERSCORES

var game = function(play) {
    
    for (let i = 0; i < selWord.length; i++) {
        hiddenWord[i] = "_";
        document.getElementById("word").innerHTML = hiddenWord.join(" "); 
    }; 


// LETTER MATCH 

    document.onkeyup = function(testMatch) {
        let yrGuess = testMatch.key.toUpperCase();
        
// IF MATCH
        
        for (let i = 0; i<selWord.length; i++) {
            if (yrGuess === selWord[i] && remAtt > 0) {
                hiddenWord[i] = yrGuess;
                document.getElementById("word").innerHTML = hiddenWord.join(" "); 
                
                if (hiddenWord.includes("_") == false) {
                    document.getElementById("message").innerHTML = "Right, the word is:  "+ selWord + ". One point for you!";
                    yrWins += 1;
                    document.getElementById("yrWins").innerHTML = yrWins;
                    remAtt = "";
                }

            }
        }
        
// IF NO MATCH
        
        for (let i = 0; i<selWord.length; i++) {
            if (wrongChars.includes(yrGuess) || selWord.includes(yrGuess)) {
                return;
            } 
            else {
                wrongChars.push(yrGuess);
                document.getElementById("wrongChars").innerHTML = wrongChars.join(" ");
                remAtt -= 1; 
                document.getElementById("remAtt").innerHTML = remAtt;
                switch (remAtt) {
                    case 10:
                        document.getElementById("imgX").href = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img1.JPG";
                        break;
                    case 9:
                        document.getElementById("imgX").href = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img2.JPG";
                        break;
                    case 8:
                        document.getElementById("imgX").src = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img3.JPG";
                        break;
                    case 7:
                        document.getElementById("imgX").src = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img4.JPG";
                        break;
                    case 6:
                        document.getElementById("imgX").src = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img5.JPG";
                        break;
                    case 5:
                        document.getElementById("imgX").src = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img6.JPG";
                        break;
                    case 4:
                        document.getElementById("imgX").src = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img7.JPG";
                        break;
                    case 3:
                        document.getElementById("imgX").src = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img8.JPG";
                        break;
                    case 2:
                        document.getElementById("imgX").src = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img9.JPG";
                        break;
                    case 1:
                        document.getElementById("imgX").src = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img10.JPG";
                        break;
                } 
            }    
            if (remAtt === 0) {
                    document.getElementById("message").innerHTML = "Oh no, you lost! The word was:  "+ selWord;
                    document.getElementById("imgX").src = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img11.JPG";
                    
                    pcWins += 1;
                    document.getElementById("pcWins").innerHTML = pcWins;
                    
            } 
            if (remAtt <= 0) {
                document.getElementById("remAtt").innerHTML = 0;
            }
        }


    }; 
     
};

// PLAY AGAIN BUTTON

document.getElementById("playAgain").onclick = function(playAgain) {
    hiddenWord = [];
    document.getElementById("word").innerHTML = hiddenWord; 
    
    wrongChars = [];
    document.getElementById("wrongChars").innerHTML = wrongChars;
    
    document.getElementById("message").innerHTML = "";
    remAtt = 11;
    document.getElementById("remAtt").innerHTML = remAtt;
    selWord = words[Math.floor(Math.random()*words.length)];
    
    document.getElementById("imgX").src = "https://github.com/JohannaXX/TheHangmanGame/blob/master/images/img0.jpg";
    game();
}
