const netPieces = document.getElementsByClassName('net_item');
const winner = document.querySelector('.winner');
const stat = document.querySelector('.stat');
const restart = document.querySelector('.restart');
const piece = document.getElementsByClassName('net_item');
const clear = document.querySelector('.clear');

const overlay = document.getElementById('overlay');

let clickNum = 0;
const tic = `X`;
const toe = `O`;

var player = ''; 



var o;
localStorage.getItem('o') != null ? o=localStorage.getItem('o') : o = 0 ;

var x;
localStorage.getItem('x') != null ? x=localStorage.getItem('x') : x = 0 ;



for (const piece of netPieces) {
    winner.innerHTML = 'Xs moves';
    
    piece.addEventListener("click", function clickOn() {
         
        if (piece.contains == (tic || toe)) {
            piece.removeEventListener("click", clickOn);   

        /*} else if (player == '' && clickNum >= 9) {
            piece.removeEventListener("click", clickOn);
            winner.innerHTML = `Its a draw! <p>Xs: ${x}</p>. <p>Os: ${o}.</p>`; 
            //overlay.style.display = 'block'; */

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
                    x++;
                    winner.innerHTML = `Winner is ${player}!`;
                    stat.innerHTML = `Statistics: <p>Xs: ${x}</p><p>Os: ${o}</p>`; 
                    localStorage.setItem('x', x);
                    //overlay.style.display = 'block';
                    
                } else if (player == '' && clickNum >= 9) {
                    piece.removeEventListener("click", clickOn);
                    winner.innerHTML = `It's a draw, try again!`
                    stat.innerHTML = `Statistics: <p>Xs: ${x}</p><p>Os: ${o}</p>`;
                    //overlay.style.display = 'block';
                
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
                    o++;
                    winner.innerHTML = `Winner is ${player}!`;
                    stat.innerHTML = `Statistics: <p>Xs: ${x}</p><p>Os: ${o}</p>`;  
                    localStorage.setItem('o', o);
                    //overlay.style.display = 'block';
                } else if (player == '' && clickNum >= 9) {
                    piece.removeEventListener("click", clickOn);
                    winner.innerHTML = `It's a draw, try again!`
                    stat.innerHTML = `Statistics: <p>Xs: ${x}</p><p>Os: ${o}</p>`;
                    //overlay.style.display = 'block';
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

        } else if (piece[arr[i][0]].innerHTML == 'O' && piece[arr[i][1]].innerHTML == 'O' && piece[arr[i][2]].innerHTML == 'O') {
            player = `Os`;       
        } 
    }
}


clear.addEventListener("click", function(){
    window.localStorage.removeItem('x');
    window.localStorage.removeItem('o');
    location.reload();
})

   
restart.addEventListener("click", function() {
    location.reload();
});

    /*if (piece.textContent == tic || piece.textContent == toe) {
        piece.textContent.remove();
    } */
