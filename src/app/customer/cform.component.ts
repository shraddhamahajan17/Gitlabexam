import {Component, Input,SimpleChanges,Output,EventEmitter} from '@angular/core'
import { Customer } from '../customer.model';
import{CustomerService} from '../customer.service';

@Component({
   selector:"cform",
   templateUrl:"./cform.component.html",
   styleUrls:["./cform.component.css"]
})
export class CformComponent{
  
    constructor(private service:CustomerService){

    }
    cid:number;
    cname:string;
    aadhar:number;
    age:number;
    @Input("upcust") cust:Customer;
    @Output() myevent=new EventEmitter();
    ngOnChanges(change:SimpleChanges){
        console.log(change);
          if(change["cust"].currentValue!=change["cust"].previousValue){
              //this will display data in the form
              this.cid=this.cust.cid;
              this.cname=this.cust.cname;
              this.aadhar=this.cust.aadhar;
              this.age=this.cust.age;

          }
        }
        addCustomer()
        {
            let c=new Customer(this.cid,this.cname,this.aadhar,this.age);
            console.log(c);
            this.service.addCustomer(c);
            this.cid=0;
            this.cname="";
            this.aadhar=0;
            this.age=0;
            this.myevent.emit(false);
        }
        updateCustomer()
        {
            let c=new Customer(this.cid,this.cname,this.aadhar,this.age);
            console.log(c);
            this.service.updateCustomer(c);
            this.cid=0;
            this.cname="";
            this.aadhar=0;
            this.age=0;
            this.myevent.emit(false);
        }
   
}