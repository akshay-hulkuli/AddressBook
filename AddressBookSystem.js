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
    
    set firstName(firstName) {
        this._firstName = firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    set address(address) {
        this._lastName = lastName;
    }
    set city(city) {
        this._city = city;
    }
    set state(state) {
        this._state = state;
    }
    set zip(zip) {
        this._zip = zip;
    }
    set phone(phone) {
        this._phone = phone;
    }
    set email(email) {
        this._email = email;
    }
    
    toString() {
        return "firstName=" +this.firstName+ ", lastName=" +this.lastName+ ", address=" +this.address+ ", city=" +this.address+ ", state=" 
                +this.state+ ", zip=" +this.zip+ ", phone=" +this.phone+ ", email=" +this.email;
    }
}