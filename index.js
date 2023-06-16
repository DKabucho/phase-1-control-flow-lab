function scuberGreetingForFeet(depth){
  if(depth <=400 ){
    scuberGreetingForFeet="This one is on me!"
  }
  else(scuberGreetingForFeet="I will gladly take your thirty bucks.")
  if(depth>=2500){
    scuberGreetingForFeet ="No can do."
  }
  return scuberGreetingForFeet
}

function ternaryCheckCity(city){
  if(city === "NYC") {
    return ("Ok, sounds good.")
  }
  else {
    return ("No go.")
  }
 
}

function switchOnCharmFromTip(tips){
  if(tips==="generous") {
    return("Thank you so much.")
  }
  if (tips==="not as generous") {
    return("Thank you.")
  } else {
    return("Bye.")
  }
}