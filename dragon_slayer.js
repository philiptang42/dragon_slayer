slaying = true;
youHit = Math.floor(Math.random() * 2);
damageThisRound = Math.floor(Math.random() * 5 + 1);
totalDamage = 0;

while(slaying) {
  if(youHit) {
    console.log("You hit the dragon!");
      totalDamage += damageThisRound;
      if(totalDamage >= 4) {
        console.log("You have slain the dragon!");
        slaying = false;
      } else {
        youHit = Math.floor(Math.random() * 2);
      }
  } else {
    console.log("You missed! Big mistake.");
  }
  slaying = false
}
