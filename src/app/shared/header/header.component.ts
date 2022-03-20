import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocialMedial } from 'src/app/socialmedia';
import { MatDrawerComponent } from '../mat-drawer/mat-drawer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bottomSheetRef!:MatBottomSheetRef;
  durationInSeconds=5;
  constructor(private _snackBar: MatSnackBar,private _bottomSheet: MatBottomSheet) { }
  isFavorite:boolean=false;
  ngOnInit(): void {
  this.iniatizationData();
    console.log(this.socialMedia);
  }
  colorCode:string=''
  favorite(){
    //  this.isFavorite=true;
    this.colorCode = this.colorCode;
    if(this.colorCode=='black'){
      this.colorCode='red'
    this.colorCode?this.colorCode='red':this.colorCode='black';
    this._snackBar.open('Like ', 'Undo', {
      duration: 3000,
      panelClass: ['red-snackbar']
    });
    
  }
  else{
    // this.colorCode='black'
    this.colorCode?this.colorCode='black':this.colorCode='red';
    this._snackBar.open('DisLike ', 'Undo', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
    
  }
    // if()
    // this.colorCode="red";
  }
  //bottom sheet implementation
  openBottomSheet(): void {
   const bottomSheetRef= this._bottomSheet.open(MatDrawerComponent, {
     data:this.socialMedia,
     ariaLabel: 'Share on  social medial'
   });
   
  }
  // end
  socialMedia: SocialMedial[] = [];
  iniatizationData(){
    this.socialMedia=[
    {
      id:'facebook',
      title:'Facebook',
      imgSrc:'assets/images/icons8-facebook.svg',
      description:'Facebook is the easist platform for social activity.',
      iconShow:true,
      hrefLink:'https://www.facebook.com'

    },
    {
      id:'twitter',
      title:'Twitter',
      imgSrc:'assets/images/icons8-twitter.svg',
      description:'Twitter is the easist platform for social activity.',
      iconShow:true,
      hrefLink:'https://www.twitter.com'
    },
    {
      id:'google',
      title:'Google',
      imgSrc:'assets/images/icons8-google.svg',
      description:'Google is the easist platform for social activity.',
      iconShow:true,
      hrefLink:'https://www.google.com'
    }
  ]
  // favorite() {
  }
  //   this.colorCode = String(this.colorCode);
    
  //   }
}
