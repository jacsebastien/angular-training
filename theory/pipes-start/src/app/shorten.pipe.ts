import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any) {
        if(value.length > 10) {
            // return value with only 10 firsts characters
            return value.substr(0, 10) + " ...";
        }

        return value;
        
    }
}