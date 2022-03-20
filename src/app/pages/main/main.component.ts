import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
const games= new Set('Free fire');
const numbers=[1,2,2,3,4,4,5,6,77];
const names=['ali','khan','john','ali','khan'];
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  constructor(private apiSrv:ApiserviceService){}
  response:any[]=[];
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.apiSrv.getAllTodo().subscribe(res=>{
      this.response=res;
      console.log(this.response);

    })
    console.log(...games);
    const uniqueName=[...new Set(names)];
    const uniqueNumbers=[...new Set(numbers)];
    console.log("uniqueName:",uniqueName);
  }
  title = 'clientapp';
  Test(event:any){
    console.log("click by user",event);
  }
 
}
