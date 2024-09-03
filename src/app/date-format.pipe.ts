import { DatePipe } from '@angular/common';
import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, format:string = "dd/MM/yyyy"): unknown {
    var datePipe = new DatePipe("en-US");
    return datePipe.transform(value, format);
  }

}
