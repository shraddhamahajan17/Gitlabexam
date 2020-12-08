import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"testpipe"
})
export class Mypipe implements PipeTransform{
    transform(nm:string,age:number)
    {
        if(age>30)
        {
            return nm+"--senior--";
        }
        else{
            return nm+"--young--";
        }
    }
}
