document.getElementById('hydrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    const waterIntake = calculateHydration(weight, age, gender);
    document.getElementById('result').innerText = `Votre apport hydrique quotidien recommandé est de ${waterIntake} litres.`;
});

function calculateHydration(weight, age, gender) {
    let base = weight * 0.035;
    if (age > 50) base *= 1.05;
    if (gender === 'female') base *= 0.9;
    return base.toFixed(2);
}
