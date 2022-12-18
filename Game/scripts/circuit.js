class Circuit{
    constructor(){
        this.elements = [];
    }
    add(elements){
        for(let i=0; i<elements.length; i++){
            this.elements.push(elements[i]);
        }
    }
    update(){
        for(let element of this.elements){
            element.update();
        }
    }
}