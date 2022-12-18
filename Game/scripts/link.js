class Link{
    constructor(){
        this.node = new Node();
        this.input = new Node();
        this.state = false;
    }
    setInput(element){
        this.input = element.node;
    }
    update(){
        this.state = this.input.state;
        this.node.state = this.state;
    }
}