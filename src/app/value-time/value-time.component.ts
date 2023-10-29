import { Component,OnInit,AfterViewInit,Renderer2,ElementRef  } from '@angular/core';
import {Doms} from './doms.models';
import {Father} from './father.models';

@Component({
  selector: 'app-value-time',
  templateUrl: './value-time.component.html',
  styleUrls: ['./value-time.component.scss']
})

export class ValueTimeComponent  implements OnInit, AfterViewInit  {

  constructor(private renderer: Renderer2,private el: ElementRef) { }

  doms:Doms={
    "daysTop":0,
    "daysBottom":0,
    "hoursTop":0,
    "hoursBottom":0,
    "minutesTop":0,
    "minutesBottom":0,
    "secondsTop":0,
    "secondsBottom":0,
  };

  father:Father={
    "0":'[data-seconds-tens]',
    "1":'[data-minutes-tens]',
    "2":'[data-hours-tens]',
    "3":'[data-days-tens]',
  }


  countToDate:Date=new Date();

  ngOnInit() {
    this.countToDate=new Date(2023,10,5,23,10,0,0);
  }

  onSetInterval():any{
    setInterval(()=>{
      const currentDate:Date = new Date();
      const timeBetweenDates:number = Math.ceil((this.countToDate.getTime() - currentDate.getTime()) / 1000);
      const diffDays= Math.floor(timeBetweenDates / (60 * 60 * 24));
      const diffHours = Math.floor((timeBetweenDates / (60 * 60))%24);
      const diffMinutes = Math.floor(timeBetweenDates / 60) % 60;
      const diffSeconds = timeBetweenDates % 60;
      this.flip('secondsTop','secondsBottom',diffSeconds,'0');
      this.flip('minutesTop','minutesBottom',diffMinutes,'1');
      this.flip('hoursTop','hoursBottom',diffHours,'1');
      this.flip('daysTop','daysBottom',diffDays,'3');

    },250);
  }

  flip(top:string,bottom:string,newNumber:number,father:string):void{

    if((this.doms[top]!==newNumber && this.doms[bottom]!==newNumber)){

      const topFlip = this.renderer.createElement('div');
      this.renderer.addClass(topFlip,'top-flip');

      const bottomFlip = this.renderer.createElement('div');
      this.renderer.addClass(bottomFlip,'bottom-flip');

      this.renderer.appendChild(topFlip,this.renderer.createText(this.doms[top].toString().padStart(2,'0')));
      this.renderer.appendChild(bottomFlip,this.renderer.createText(newNumber.toString().padStart(2,'0')));

      this.renderer.listen(topFlip,'animationstart',(event)=>{
        this.doms[top]=newNumber;
      })

      this.renderer.listen(topFlip,'animationend',(event)=>{
        this.renderer.removeChild(topFlip.parentNode,topFlip);
      });

      this.renderer.listen(bottomFlip,'animationend',()=>{
        this.doms[bottom]=newNumber;
        this.renderer.removeChild(bottomFlip.parentNode,bottomFlip);
      });


      this.renderer.appendChild(this.el.nativeElement.querySelector(this.father[father]),topFlip);
      this.renderer.appendChild(this.el.nativeElement.querySelector(this.father[father]),bottomFlip);
    }
  }

  ngAfterViewInit(){
    this.onSetInterval();
  }
}
