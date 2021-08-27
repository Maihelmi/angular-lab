import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  isTrue:boolean =true 
  pageTitle(){
    return this.isheader?'this is home':'this is about'
  }
 email="mai@gmail.com";
 emailMethed(){
   return "this is email"
 }
 headerClass='bold header italic '
 isheader:boolean=true
 headerMethod(){
   return {
    header:!this.isheader,
    bold:this.isheader,
    italic:this.isheader
   }
 }
 multiStyle(){
   return{
    color:!this.isheader?'red':'orange', 
    textDecoration:this.isheader?'overline':'underline',
    fontSize:this.isheader?'50px':'100px'
   }
 }
 extraStyle={
  color:this.isheader?'red':'orange', 
  textDecoration:!this.isheader?'overline':'underline',
  margin:this.isheader?'20px':'50px'
 }
 toggle(){
   return this.isheader=!this.isheader
 }
}
