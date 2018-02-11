import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], month: string): any[] {
    if(!items) return [];
    if(!month) return items;
    return items.filter( it => {
      return it.toLowerCase().includes(month);
    });
  }
}
