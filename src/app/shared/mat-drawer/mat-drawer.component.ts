import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import { SocialMedial } from 'src/app/socialmedia';

@Component({
  selector: 'app-mat-drawer',
  templateUrl: './mat-drawer.component.html',
  styleUrls: ['./mat-drawer.component.scss']
})
export class MatDrawerComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<MatDrawerComponent>,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    for(let item of this.data){
      console.table(item.title)
    }
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
