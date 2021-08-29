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
  PRODUCTS = [
  {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
  {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
  {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
  {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];
 num:number=3
day(){
  return this.num
}







}