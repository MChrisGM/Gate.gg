let circuit;
let t1;
let t2;

function setup(){
    circuit = new Circuit();

    t1 = new Toggle(SWITCH);
    t2 = new Toggle(SWITCH);

    let l1 = new Link();
    let l2 = new Link();
    l1.setInput(t1);
    l2.setInput(t2);

    let gate = new Gate(AND);
    gate.setInput(0, l1);
    gate.setInput(1, l2);

    let l3 = new Link();
    l3.setInput(gate);

    circuit.add([t1,t2,l1,l2,gate,l3]);
    
}

function loop(){
    circuit.update();
}