import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

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
  }
  title = 'clientapp';
  Test(event:any){
    console.log("click by user",event);
  }
}
