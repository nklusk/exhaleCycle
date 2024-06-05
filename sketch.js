function setup() {
  createCanvas(2000, 2000);
 // mode(DEGREES);
  let cycleStartDay = 0
  frameRate(40);
}
let currentCycle = 0
let speedVal = 75
let intervalTracker = 0
let cycle
const cycleLengths = [38, 47, 34, 29, 31, 29]
let newRate
// total days of data: 867 days
// total cycles; 30
console.log(cycleLengths.length)
//31, 30, 26, 34, 33, 36, 
function draw() {
  background(0);
  
  if (frameCount<=20){
    rateOfChange = 2
  }else{ 
  noFill()
  circle(725, 500, 550)
  stroke('white');
  
//   for (let i = 0; i < 360; i++) {
//      degreeNumber = frameCount
//     x = 100*(1-sq(cos(degreeNumber)))
//     y = 100*(1-sq(sin(degreeNumber)))
//     point(x, y)
// }
    
   // let speedVal = 75
  for (var i = 0; i < cycleLengths.length; i++) {
    
    
      
      degreeValue = frameCount/(100)
      //if (frameCount < (46.55172*90)){
      //  x = 700 + 200*(cos(degreeValue))
       // y = 450 + 200*(sin(degreeValue))
        
      x = ((sin((10*degreeValue)/10)+4)/4)*(700 + 200*(cos(degreeValue)))
      y = ((sin((10*degreeValue)/10)+4)/4)*(450 + 200*(sin(degreeValue)))
      
    
    nextX = ((sin((10*((frameCount+1)/(150)))/10)+4)/4)*(700 + 200*(cos(((frameCount+1)/(150)))))
    nextY = ((sin((10*((frameCount+1)/(150)))/10)+4)/4)*(450 + 200*(sin(((frameCount+1)/(150)))))
    rateOfChange = (nextY-y)/(nextX-x)
    
    if(rateOfChange < 0.032 && rateOfChange >0.01){
      
      intervalTracker += 1
      //console.log(intervalTracker)
    if(intervalTracker%58==0){
      //currentCycle += 1
     // console.log("switch")
      currentCycle+=1
      speedVal =(cycleLengths[currentCycle])*2.5
      //console.log(cycleLengths[currentCycle])
      //console.log(speedVal)
      
      newRate = 40+((30-cycleLengths[currentCycle])*10)
      
      cycle = cycleLengths[currentCycle]
      frameRate(60-cycle+10)
      console.log(frameRate())
      console.log(cycleLengths[currentCycle])
    }

    if (currentCycle>=7){
      rect(2000, 2000)
    }
    
    
    
    }
    
  }
    
    //console.log(rateOfChange)
       //fill('white')
        circle(x,y, 40)
        
      
  

    // }
}
}