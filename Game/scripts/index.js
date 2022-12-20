let circuit;

function setup(){

    circuit = new Circuit();

    let and0 = new Gate(AND);
    circuit.add(and0);

    circuit.get("and0").createUI();

}

function loop(){

}