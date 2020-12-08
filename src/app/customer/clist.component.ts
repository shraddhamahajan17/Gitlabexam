import { Component } from '@angular/core';
import{Customer} from '../customer.model';
import{CustomerService} from '../customer.service';
@Component({
    selector:"clist",
    templateUrl:"./clist.component.html",
    styleUrls:["./clist.component.css"]
})
export class ClistComponent{
carr:Customer[];
    constructor(private service:CustomerService)
    {

    }
    ngOnInit()
    {
        this.carr=this.service.getAllCustomer();
    }


}