import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-animationcount',
  templateUrl: './animationcount.component.html',
  styleUrls: ['./animationcount.component.css']
})
export class AnimationcountComponent implements OnInit {

  //this is a variable that hold number
  projectcount:number = 2000;
  //same process
  accuratecount:number = 0;
  clientcount:number = 0;
  customerfeedback:number = 0;

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  projectcountstop:any = setInterval(()=>{
    this.projectcount++;
    //we need to stop this at  particular point; will use if condition
    if(this.projectcount == 2536)
    {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }

  },100) //10 is millisecond you can control it


  accuratecountstop:any = setInterval(()=>{
    this.accuratecount++;
    if(this.accuratecount == 95)
    {

      clearInterval(this.accuratecountstop);
    }
  },10)


  clientcountstop:any = setInterval(()=>{
    this.clientcount++;
    if(this.clientcount == 300)
    {

      clearInterval(this.clientcountstop);
    }
  },100)

  customerfeedbackstop:any = setInterval(()=>{
    this.customerfeedback++;
    if(this.customerfeedback == 100)
    {

      clearInterval(this.customerfeedbackstop);
    }
  },10)

  //conclusion: we have use
  //string interpolation
  //setInterval function
  //()=> arrow function
  //clearInterval
  //creating variable


  constructor() { }

  ngOnInit(): void {

  }

}
