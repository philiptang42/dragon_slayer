slaying = true;
youHit = Math.floor(Math.random() * 2);
damageThisround = Math.floor(Math.random() * 5 + 1);
totalDamage = 0;

while(slaying) {
  if (youHit) {
    console.log("You hit the dragon!");
  } else {
    console.log("You missed! Big mistake.");
  }
  slaying = false;
}
