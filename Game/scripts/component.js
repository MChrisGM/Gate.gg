class Component{
    constructor(type){
        this.id = null;
        this.type = type;
        this.value = false;
        this.DOM = null;
        this.pos = {x:0,y:0};
    }
    createUI(){
        let elementContainer = document.createElement('div');
        elementContainer.className = "unselectable";

        let element = document.createElement('div');
        element.className = componentType[this.type];
        elementContainer.appendChild(element);

        let title = document.createTextNode(this.type);
        element.appendChild(title);

        let o1 = document.createElement('div');
        o1.className = "io";

        // element.appendChild(o1);
        
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        element.onmousedown = dragMouseDown;

        let p = this.pos;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();

            

            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            p.x = element.offsetLeft - pos1;
            p.y = element.offsetTop - pos2;

            if(p.x>0 && p.y>0 && p.x + element.offsetWidth < window.innerWidth && p.y + element.offsetHeight < window.innerHeight*0.85){
                // set the element's new position:
                element.style.top = p.y + "px";
                element.style.left = p.x + "px";
            }
          }
        
          function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
          }


        this.DOM = elementContainer;
        document.getElementById("frame").appendChild(this.DOM);
    }
    setID(id){this.id = id;}
    getID(){return this.id;}
    getType(){return this.type;}
    

}