import{Component} from '@angular/core';
import { Customer } from '../customer.model';
import{CustomerService} from '../customer.service';

@Component({
    selector:"ctab",
    templateUrl:"./ctab.component.html",
    styleUrls:["./ctab.component.css"]
})

export class CtabComponent{
    carr:Customer[];
    cust:Customer;
    flag=false;
    constructor(private service:CustomerService)
    {

    }
    ngOnInit()
    {
        this.carr=this.service.getAllCustomer();
    }
    displayForm(){
        this.flag=true;
    }
    updateCustomer(ob:Customer)
    {
       this.flag=true;
       this.cust=ob;

    }
    deleteCustomer(ob:Customer)
    {
        this.service.deleteCustomer(ob);
    }

 }