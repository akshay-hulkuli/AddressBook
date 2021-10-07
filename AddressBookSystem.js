class Contact {
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get address(){
        return this._address;
    }
    get city() {
        return this._city;
    }
    get state() {
        return this._state;
    }
    get zip() {
        return this._zip;
    }
    get phone() {
        return this._phone;
    }
    get email() {
        return this._email;
    }

    validate(regex, string) {
        let regexValidator  = RegExp(regex);
        return regexValidator.test(string);
    }
    
    set firstName(firstName) {
        if(this.validate('^[A-Z]{1}[a-z]{2,}$',firstName))
            this._firstName = firstName;
        else throw 'firstName is Incorrect! please enter correct one';
    }
    set lastName(lastName) {
        if(this.validate('^[A-Z]{1}[a-z]{2,}$',lastName))
            this._lastName = lastName;
        else throw 'lastName is Incorrect! please enter correct one';
    }
    set address(address) {
        if(this.validate('[A-Za-z]{4,}',address))
            this._address = address;
        else throw 'Address is not valid'
    }
    set city(city) {
        if(this.validate('[A-Za-z]{4,}',city))
            this._city = city;
        else throw 'city is not valid'
    }
    set state(state) {
        if(this.validate('[A-Za-z]{4,}',state))
            this._state = state;
        else throw 'State is not valid'
    }
    set zip(zip) {
        if(this.validate('(^[0-9]{3})([\s]?)([0-9]{3}$)',zip))
            this._zip = zip;
        else throw 'zip is not valid'
    }
    set phone(phone) {
        if(this.validate('[1-9][0-9][\\s][1-9][0-9]{9}',phone))
            this._phone = phone;
        else throw 'phone number is not valid'
    }
    set email(email) {
        if(this.validate('([a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9])(([+_.-][a-zA-Z0-9]*)?)(@[a-zA-Z0-9]+)([.])([a-z]{2,})(([.][a-z]{2,})?)',email))
            this._email = email;
        else throw 'email is not valid'
    }
    
    
    toString() {
        return "firstName=" +this.firstName+ ", lastName=" +this.lastName+ ", address=" +this.address+ ", city=" +this.address+ ", state=" 
                +this.state+ ", zip=" +this.zip+ ", phone=" +this.phone+ ", email=" +this.email;
    }
}


let contactArray = new Array();
contactArray.push(new Contact("Akshay","Hulkuli","Hulkuli","Thirthahalli","Karnataka",577415,"91 1234567891","akshay@gmail.com"));
contactArray.push(new Contact("Ankith","Kumar","Padmanabha Nagar","Bengaluru","Karnataka",560080,"91 9874567891","ankith@gmail.com.in"));
console.log(contactArray);