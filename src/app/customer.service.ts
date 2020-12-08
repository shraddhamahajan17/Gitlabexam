import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
@Injectable()
export class CustomerService{
    carr=[new Customer(11,'shraddha',1236789023,25),
    new Customer(12,'vaishnavi',1236789023,22),
    new Customer(13,'suyash',1236789023,40)];

    getAllCustomer():Customer[]{

        return this.carr;
    }

    addCustomer(c:Customer)
    {
        this.carr.push(c);
    }
    updateCustomer(c:Customer)
    {
        for(let i=0;i<this.carr.length;i++)
        {
            if(this.carr[i].cid==c.cid)
            {
               this.carr[i].cid=c.cid;
               this.carr[i].cname=c.cname;
               this.carr[i].aadhar=c.aadhar;
               this.carr[i].age=c.age;
            break;

            }
        }
    }
    deleteCustomer(c:Customer)
    {
        for(let i=0;i<this.carr.length;i++)
        {
            if(this.carr[i].cid==c.cid)
            {
               this.carr.splice(i,1);
            break;

            }
        }
    }
}
