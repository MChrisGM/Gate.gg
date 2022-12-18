class Toggle{
    constructor(type){
        this.type = type || SWITCH;
        this.node = new Node();
        this.state = this.node.state;
    }
    toggle(){
        if(this.state){this.state = false;}
        else{this.state = true;}
    }
    update(){
        this.node.state = this.state;
    }
}