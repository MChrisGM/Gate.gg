class Gate{
    constructor(type){
        this.type = type || AND;
        this.inputs = {}
        this.node = new Node();
        this.state = this.node.state;
    }
    setInput(lbl, element){
        this.inputs[lbl] = element.node;
    }
    update(){
        let vals = Object.values(this.inputs).map(node => node.state);
        if(this.type == AND){
            this.state = false;
            for(let i=0; i<vals.length; i++){
                this.state = this.state & vals[i];
            }
        }
        else if(this.type == OR){
            this.state = false;
            for(let i=0; i<vals.length; i++){
                this.state = this.state | vals[i];
            }
        }
        else if(this.type == NOT){
            if(vals.length == 1){
                this.state = !vals[0];
            }
        }

        this.state = !!this.state;
        this.node.state = this.state;
    }

}