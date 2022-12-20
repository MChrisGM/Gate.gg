class Circuit{
    constructor(){
        this.elements = {};
        this.componentCounter = {
            [AND]:0,
            [OR]:0,
            [NOT]:0,
            [WIRE]:0,
        };
    }
    createNewID(element){
        this.componentCounter[element.getType()]++;
        return [element.getType(),this.componentCounter[element.getType()]-1].join('');
    }
    add(element){
        let id = this.createNewID(element);
        element.setID(id);
        this.elements[element.getID()] = element;
    }
    get(id){
        return this.elements[id];
    }
}