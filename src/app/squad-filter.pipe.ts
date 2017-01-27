import { Pipe, PipeTransform } from '@angular/core';
import {Member} from './member.model';

@Pipe({
  name: 'squadFilter'
})
export class SquadFilterPipe implements PipeTransform {

  transform(input: any[], squad: string): any {
    var output: Member[] = [];
    if (input != null){
      if(squad != ""){
        for (var i=0; i<input.length; i++){
          if(input[i].squad === squad){
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
    return input;
  }

}
