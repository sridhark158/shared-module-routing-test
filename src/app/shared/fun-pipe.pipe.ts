import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'funPipe'
})
export class FunPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('fun');
    return 'Fun';
    
  }

}