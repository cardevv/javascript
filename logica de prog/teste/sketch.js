let xBola =300;
let yBola = 200;
let DBola= 15;
let raio = DBola / 2;

let velocidadeYbola = 6;
let velocidadeXbola = 6;


let xRaquete =5;
let yRaquete =150;
let wRaquete = 10; 
let hRaquete = 90;



function setup() {
  createCanvas(600,400);
  
  
}

function draw() {
  background(0);
  criaBola ();
  movBola();
  colisaoBola();
  criaRaquete();
  
  
  
  
  
    

  
  
}


function criaRaquete () {
  rect (xRaquete,yRaquete,wRaquete,hRaquete)
}

function criaBola () {
  circle (xBola , yBola , DBola);
}

function movBola () {
  xBola += velocidadeXbola ;  
  yBola += velocidadeYbola ; 

}

function colisaoBola () {
  if (xBola + raio > width || xBola - raio <0   ) {
    velocidadeXbola *= -1;
  }

  if (yBola + raio > height || yBola - raio <0   ) {
    velocidadeYbola *= -1;
  }
}