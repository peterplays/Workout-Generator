let upperBody = ['Bench press (grip: narrow, med, wide)(var: dumbbell, barbell)', 'Incline bench press (grip: narrow, med, wide)(var: dumbbell, barbell)', 'Overhead press (var: wall)', 'Pull-ups (grip: sup, pro, neutral)', 'Push ups (var: angle, weighted)', 'Dips (var: weighted)', 'One-arm rows (var: landmine, dumbbell)', 'Corner rows (grip: bar, handle)', 'Muscle-up',];
let lowerBody = ['Front squat (var: box)', 'Back squat (var: box)', 'Lunges (var: walking, split, vest, barbell, dumbbell)', 'Jump squat (var: vest, goblet)', 'Landmine squat', 'Deadlift (var: sumo, conventional, stiff-legged)', 'Rack pull (var: pin height)', 'Step Up (var: barbell, dumbell, vest)', 'Bulgarian split squat (var: dumbell, barbell, vest)'];
let conditioning = ['Burpees', 'Jump-rope', 'Air squats', 'Boxing/MMA', 'Sprint/walk', 'Wall-ball shots', 'Box jumps']
let btn1 = document.querySelector('.upper button');
let btn2 = document.querySelector('.lower button');
let btn3 = document.querySelector('.conditioning button');
let randomUpper = document.querySelector('.upper p');
let randomLower = document.querySelector('.lower p');
let randomConditioning = document.querySelector('.conditioning p');


btn1.onclick = function() {
  let upperExercise = upperBody[Math.floor(upperBody.length * Math.random())];
  randomUpper.textContent = upperExercise;
};

btn2.onclick = function() {
  let lowerExercise = lowerBody[Math.floor(lowerBody.length * Math.random())];
  randomLower.textContent = lowerExercise;
};

btn3.onclick = function() {
  let conditioningExercise = conditioning[Math.floor(conditioning.length * Math.random())];
  randomConditioning.textContent = conditioningExercise;
};



