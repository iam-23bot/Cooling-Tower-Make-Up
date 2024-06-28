document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const circulationRate = parseFloat(document.getElementById('circulation-rate').value);
    const deltaT = parseFloat(document.getElementById('delta-t').value);
    const cyclesOfConcentration = parseFloat(document.getElementById('cycles-of-concentration').value);
    const driftRate = parseFloat(document.getElementById('drift-rate').value) / 100;

    // Calculate evaporation (m³/hr)
    const evaporation = circulationRate * deltaT * 0.001;

    // Calculate blowdown (m³/hr)
    const blowdown = evaporation / (cyclesOfConcentration - 1);

    // Calculate drift loss (m³/hr)
    const driftLoss = circulationRate * driftRate;

    // Calculate make-up water requirement (m³/hr)
    const makeUpWater = evaporation + blowdown + driftLoss;
    
    document.getElementById('result').textContent = 
        `Evaporation: ${evaporation.toFixed(2)} m³/hr\n` +
        `Blowdown: ${blowdown.toFixed(2)} m³/hr\n` +
        `Drift Loss: ${driftLoss.toFixed(2)} m³/hr\n` +
        `Make-Up Water Requirement: ${makeUpWater.toFixed(2)} m³/hr`;
});
