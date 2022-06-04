const netPieces = document.getElementsByClassName('net_item');
const winner = document.querySelector('.winner');
const restart = document.querySelector('.restart');
const piece = document.getElementsByClassName('net_item');

let clickNum = 0;
const tic = `X`;
const toe = `O`;

var player = ''; 


for (const piece of netPieces) {
    
    piece.addEventListener("click", function clickOn() {
         
        if (piece.contains == (tic || toe)) {
            piece.removeEventListener("click", clickOn);   

        } else if (player == '' && clickNum >= 9) {
            piece.removeEventListener("click", clickOn);
            winner.innerHTML = 'Its a draw!'; 

        } else if (player == `Xs` || player == `Os`) {
            piece.removeEventListener("click", clickOn);
             
        
        } else  {
            if (clickNum%2 == 0) {
                piece.append(tic);
                piece.classList.add('red');
                clickNum++;
                piece.removeEventListener("click", clickOn);
                check();
                winner.innerHTML = 'Os moves';
                if (player == `Xs`) {
                    piece.removeEventListener("click", clickOn);
                    winner.innerHTML = `Winner is ${player} `; 
                    
                } else if (player == '' && clickNum >= 9) {
                    piece.removeEventListener("click", clickOn);
                    winner.innerHTML = 'Its a draw!';
                
                }
    
            } else if (clickNum%2 != 0) {
                piece.append(toe);
                piece.classList.add('blue');
                clickNum++;
                piece.removeEventListener("click", clickOn);
                check();
                winner.innerHTML = 'Xs moves';
                if (player == `Os`) {
                    piece.removeEventListener("click", clickOn);
                    winner.innerHTML = `Winner is ${player} `; 
                } else if (player == '' && clickNum >= 9) {
                    piece.removeEventListener("click", clickOn);
                    winner.innerHTML = 'Its a draw!'; 
                } 
            };
        };
    });
}    


const check = () => {
    
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(i=0; i<arr.length; i++) {
        if(piece[arr[i][0]].innerHTML == 'X' && piece[arr[i][1]].innerHTML == 'X' && piece[arr[i][2]].innerHTML == 'X') {
            player = `Xs`;
            winner.innerHTML = `Winner is ${player} `; 
            

        } else if (piece[arr[i][0]].innerHTML == 'O' && piece[arr[i][1]].innerHTML == 'O' && piece[arr[i][2]].innerHTML == 'O') {
            player = `Os`;
            winner.innerHTML = `Winner is ${player} `; 
            
            
        } 
    }
}


   
restart.addEventListener("click", function() {
    location.reload();
});

    /*if (piece.textContent == tic || piece.textContent == toe) {
        piece.textContent.remove();
    } */
