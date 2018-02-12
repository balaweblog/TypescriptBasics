import { Address} from './Address';

export class Customer {
     name: string;
     public age: number;
     address: Address;
    validate(input:number): boolean {
        this.age = input;
        if (input >10) {
            throw "exeption nae is required";
        }
        alert(input +'i am in validate function');
        return true;
    }

}

class NewCustomer extends Customer {
    validate(input: number): boolean{
        alert(input+ 'new boy' );
        return true;
    }
}