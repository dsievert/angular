import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'filterByBreweryName'})
export class FilterByNamePipe implements PipeTransform {

    transform(nameList : any, name: string): any[] {
        if (nameList) {
            return nameList.filter((listing: any) => listing.name.startsWith(name));
        }
    }
}