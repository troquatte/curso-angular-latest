import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone: true,
})
export class CustomStringPipe implements PipeTransform {
  transform(value: string, args?: string) {
    if (args === 'upper') {
      return value.toUpperCase();
    }

    if (args === 'lower') {
      return value.toLowerCase();
    }

    return value;
  }
}
