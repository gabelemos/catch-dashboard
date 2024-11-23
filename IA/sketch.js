let classifier;
let img;
let label = "waiting...";


function preload() {
  document.getElementById('sending').onclick = function() {
    const userInput = document.getElementById('preview').src;
    console.log(userInput);
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-YtOjj8wt/");
    
    img = loadImage(userInput);
    classifier.classify(img, gotResults);
  };
} 

function gotResults(results) {
  console.log(results);
  label = results[0].label;
  console.log(label)
  document.getElementById('result2').innerText = "Seu resultado é: "
  document.getElementById('result').innerText = label
  
}

function setup() {
  createCanvas(400, 400);
}

//function draw() {
//  background(225);
//  image(img, 0, 0, width, height);
//  
//  rectMode(CENTER);
//  fill(225, 225, 150);
//  rect(200, 200, 400, 50);
//  textSize(32);
//  fill(0);
//  textAlign(CENTER, CENTER);
//  noStroke();
//  text(label, 200, 200)
//}

