import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false  // caution: performence issues ! all time recalculating on each calling components change
})
export class FilterPipe implements PipeTransform {

    /*  
        value: array of objects to filter
        filterString: string that will filter array
        propName: property that will be focusend for filtering inside array 
    */
    transform(value: any, filterString: string, propName: string): any {
        let resultArray = [];
        
        // if list is empty or user entered nothing
        if(value.length === 0 || filterString === '') {
            return value;
        }        
        
        for(const item of value) {
            if(item[propName] === filterString) {
                resultArray.push(item);
            }
        }

        return resultArray.length > 0 ? resultArray : value;
    }

}
