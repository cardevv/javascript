let xBola =300;
let yBola = 200;
let DBola= 15;
let raio = DBola /2;
let velocidadeYbola = 6;
let velocidadeXbola = 6;



function setup() {
  createCanvas(600,400);
  
  
}

function draw() {
  background(0);
  circle (xBola , yBola , DBola);
  
  xBola += velocidadeXbola ;
  

//yBola += velocidadeYbola ; 
  
  
  if (xBola + raio > width || xBola - raio <0   ) {
    velocidadeXbola *= -1;
  }

  if (yBola + raio > height || yBola - raio <0   ) {
    velocidadeYbola *= -1;
  }

}