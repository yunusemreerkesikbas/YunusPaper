import { Pipe, PipeTransform } from '@angular/core';
import {News} from "@models/newsModel";

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  // inputtan girilen harfleri(filterText) önce küçük harfe çevir, daha sonra bu harfin haberler(value) içinde olup olmadığını bul
  // haber arama pipe
  transform(value: News[], filterText: string): News[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value.filter((p: News) => p.title.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
