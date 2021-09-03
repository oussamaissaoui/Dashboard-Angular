import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit  {


  sidebarOpen=true;

  mouseX:any
  mouseY:any


  constructor() { }

 


  ngOnInit(): void {

   /* document.addEventListener("mousemove", () => {
      let mousex = event.clientX; // Gets Mouse X
      let mousey = event.clientY; // Gets Mouse Y
      console.log([mousex, mousey]); // Prints data
    });*/
    document.addEventListener( 'mousemove', this.nDocumentMouseMove );

    
  }
  sidebarmouse(){
    this.sidebarOpen=true
  }

                          nDocumentMouseMove( event ) {

                            //console.log (event.clientX)

                            if (event.clientX<23) {console.log('HEYYYY');
                            this.sidebarOpen=true;
                          
                          //console.log(this.sidebarOpen)
                          }
                          
                            this. mouseY = event.clientY 
                          }

                          
  sidebarTogglerFunct($event){
    this.sidebarOpen=!this.sidebarOpen
  }


  

  sidebarmouse2(){
    this.sidebarOpen=true
  }
}
