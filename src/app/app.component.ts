import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './services/apiservice.service';
import {ServerJson} from './server.js'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(private apiSrv:ApiserviceService){}
  // response:any[]=[];
  ngOnInit(): void {
   fetch('/api/reminders');
   ServerJson();
    // fetch("/api/movies");
    // throw new Error('Method not implemented.');
    // this.apiSrv.getAllTodo().subscribe(res=>{
    //   this.response=res;
    //   console.log(this.response);
    // })
  }
  // title = 'clientapp';
  // Test(event:any){
  //   console.log("click by user",event);
  // }


  
}
