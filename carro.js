let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,152,210,270,305];
let velocidadeCarros = [5,4.5,5.3,3.5,6.3,4.3];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }


}

function posicaoInicialDoCarro(){
  
  for(let i = 0; i < imagemCarros.length; i++){
      if(passouTodaATela(xCarros[i])){
       xCarros[i] = 600;
       }
    }
}


function passouTodaATela(xCarros){
  return xCarros < -50
}