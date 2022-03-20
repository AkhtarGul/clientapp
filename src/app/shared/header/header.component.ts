import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isFavorite:boolean=false;
  ngOnInit(): void {
  }
  colorCode:string=''
  favorite(){
    //  this.isFavorite=true;
    this.colorCode = this.colorCode;
    if(this.colorCode=='black'){
      this.colorCode='red'
    this.colorCode?this.colorCode='red':this.colorCode='black';
  }
  else{
    // this.colorCode='black'
    this.colorCode?this.colorCode='black':this.colorCode='red';
  }
    // if()
    // this.colorCode="red";
  }
  // favorite() {

  //   this.colorCode = String(this.colorCode);
    
  //   }
}
