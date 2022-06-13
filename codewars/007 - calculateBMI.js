// Instructions: </br>
// Write function bmi that calculates body mass index (bmi = weight / height2).</br>
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// Could be done using ternary operator  instead or switch case

const bmi = (weight, height) => {
  if (weight / height ** 2 <= 18.5) return "Underweight";
  else if (weight / height ** 2 <= 25.0) return "Normal";
  else if (weight / height ** 2 <= 30.0) return "Overweight";
  else return "Obese";
};
