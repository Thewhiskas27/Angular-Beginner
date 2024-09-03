import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { STATEENUM } from './state-enum';

@Directive({
  selector: '[appColorTasks]'
})
export class ColorTasksDirective implements OnInit{

  constructor(private el:ElementRef) {} 
    
    @Input("appColorTasks") state!:STATEENUM;
    ngOnInit(): void {
        switch(this.state){
          case STATEENUM.A_FAIRE:
            this.color("blue");
            break;
          case STATEENUM.EN_COURS:
            this.color("red");
            break;
          case STATEENUM.TERMINEE:
            this.color("green");
            break;
          default:
            this.color("blue");
            break;
        }
    }

    private color(color: string | null){
      this.el.nativeElement.style.color = color;
    }

}
