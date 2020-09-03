import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   public data = { };
   public formDataList = [];
    
    addItem($item){
       this.formDataList.push($item)
       this.data = {};
    }

     removeItem($item){
       this.formDataList.splice( this.formDataList.indexOf($item),1)
       
    }
}
