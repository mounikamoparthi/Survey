import { Pipe, PipeTransform } from '@angular/core';
import { Question } from './question';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Question>, searchStr: string): Array<Question> {
    //console.log(value)
    if (value){
    return value.filter(question => {
      return question.question.toLowerCase().includes(searchStr.toLowerCase())

    })
    }
  }

}
