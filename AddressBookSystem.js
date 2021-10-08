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

//UC3
let contactArray = new Array();
checkDuplicatedAndAdd(new Contact("Akshay","Hulkuli","Hulkuli","Thirthahalli","Karnataka",577415,"91 1234567891","akshay@gmail.com"));
checkDuplicatedAndAdd(new Contact("Ananth","Nandyala","Hulkuli","Thirthahalli","Karnataka",320415,"91 1234564511","ananth@gmail.com"));
checkDuplicatedAndAdd(new Contact("Ankith","Kumar","Padmanabha Nagar","Bengaluru","Karnataka",560080,"91 9874567891","ankith@gmail.com.in"));
checkDuplicatedAndAdd(new Contact("Srikanth","Khan","BSK II satge","Pune","Maharashtra",787415,"91 1234567823","srikanth@gmail.com"));
console.log("data in addressBook:")
console.log(contactArray);
findByNameAndEdit("Akshay","email","akshay.hp@perfios.com");
console.log("\n after editing data in addressBook:")
console.log(contactArray);


//UC4 search and edit
function findByNameAndEdit(firstName,attribute, value){
    let contact = contactArray.find(contact => contact._firstName == firstName);
    if(contact == null) console.log("name not found");
    switch(attribute){
        case "firstName":
            contact._firstName = value;
            break;
        case "lastName":
            contact._lastName = value;
            break;
        case "address":
            contact._address = value;
            break;
        case "city":
            contact._city = value;
            break;
        case "state":
            contact._state = value;
            break;
        case "zip":
            contact._zip = value;
            break;
        case "phone":
            contact._phone = value;
            break;
        case "email":
            contact._email = value;
            break;
        default:
            console.log("wrong attribute is specified");
    }
}

//UC5 search and delete

function deleteByName(firstName,lastName){
    let index  = contactArray.findIndex(contact => contact._firstName == firstName && contact._lastName == lastName);
    contactArray.splice(index,1);
}

deleteByName("Ananth","Nandyala");
console.log("\n after deleting contact in addressBook:")
console.log(contactArray);

//UC6  getCount

function getCount(){
    let numberOfContacts = contactArray.reduce((numberOfContacts) => numberOfContacts +=1,0);
    return numberOfContacts;
}

console.log("number of contacts : "+getCount());


//UC7 check for duplicate

function checkDuplicatedAndAdd(contact){
    let duplicate = contactArray.find(currentContact => currentContact._firstName == contact._firstName && currentContact._lastName == contact._lastName);
    if(duplicate == null){
        contactArray.push(contact);
    }
    else console.log("the contact already exists");
}

checkDuplicatedAndAdd(new Contact("Ananth","Nandyala","Hulkuli","Thirthahalli","Karnataka",452415,"91 1234564511","ananth@gmail.com"));
checkDuplicatedAndAdd(new Contact("Akshay","Hulkuli","Hulkuli","Thirthahalli","Karnataka",577415,"91 1234567891","akshay@gmail.com"));


//UC8 search person in city or state

function searchInACity(firstName,city){
    let peopleInGivenCity = contactArray.filter(contact => contact._firstName == firstName && contact._city == city);
    if(peopleInGivenCity.length == 0) { 
        console.log("\nno contact named "+ firstName+ " is found in city "+ city);
    }
    else {
        console.log("\nContacts named "+ firstName+" in city "+ city+ " are/is:");
        console.log(peopleInGivenCity);
    }
}
function searchInAState(firstName,state){
    let peopleInGivenState = contactArray.filter(contact => contact._firstName == firstName && contact._state == state);
    if(peopleInGivenState.length == 0) {
        console.log("\nno contact named "+ firstName+ " is found in state "+ state);
    }
    else{
        console.log("\nContacts named "+ firstName+" in state "+ state+ " are/is:");
        console.log(peopleInGivenState);
    }
}

searchInACity("Akshay","Thirthahalli");
searchInACity("Akash","Pune");
searchInAState("Ankith","Karnataka");
searchInAState("Ankith","Kerala");


//UC9 view persons in a city or state
function contactsInCity(city){
    let peopleInGivenCity = contactArray.filter(contact => contact._city == city);
    if(peopleInGivenCity.length == 0) { 
        console.log("\ncity not found");
    }
    else {
        console.log("\nContacts in city "+ city+ " are/is:");
        console.log(peopleInGivenCity);
    }
}

function contactsInState(state){
    let peopleInGivenState = contactArray.filter(contact => contact._state == state);
    if(peopleInGivenState.length == 0) { 
        console.log("\nstate not found");
    }
    else {
        console.log("\nContacts in state "+ state+ " are/is:");
        console.log(peopleInGivenState);
    }
}

contactsInCity("Thirthahalli");
contactsInState("Karnataka");

//UC10 get count by city or state

function getCountByCity(city){
    let numberOfContacts = contactArray.filter(contact => contact._city == city)
                                       .reduce(numberOfContacts => numberOfContacts+1,0);
    return numberOfContacts;
}
function getCountByState(state){
    let numberOfContacts = contactArray.filter(contact => contact._state == state)
                                       .reduce(numberOfContacts => numberOfContacts+1,0);
    return numberOfContacts;
}

console.log("number of persons in thirthahalli:" + getCountByCity("Thirthahalli"));
console.log("number of persons in Karnataka:" + getCountByState("Karnataka"));

//UC11 sort by name

function SortByName(){
    contactArray.sort((contact1,contact2) =>{
        if(contact1._firstName > contact2._firstName)
            return 1;
        else if(contact1._firstName < contact2._firstName)
            return -1;
        else {
            if(contact1._lastName > contact2._lastName)
            return 1;
            else if(contact1._lastName < contact2._lastName)
            return -1;
            else return 0;
        }
    })
}

SortByName();
console.log("sortedArray based on name: ")
console.log(contactArray);


// UC12 sort by zip, state, city
function SortByZip(){
    contactArray.sort((contact1,contact2) =>{
        if(contact1._zip > contact2._zip)
            return 1;
        else if(contact1._zip < contact2._zip)
            return -1;
        else 0;
    })
}

function SortByCity(){
    contactArray.sort((contact1,contact2) =>{
        if(contact1._city > contact2._city)
            return 1;
        else if(contact1._city < contact2._city)
            return -1;
        else 0;
    })
}

function SortByState(){
    contactArray.sort((contact1,contact2) =>{
        if(contact1._state > contact2._state)
            return 1;
        else if(contact1._state < contact2._state)
            return -1;
        else 0;
    })
}

SortByZip();
console.log("sortedArray based on Zip: ")
console.log(contactArray);

SortByCity();
console.log("sortedArray based on City: ")
console.log(contactArray);

SortByState();
console.log("sortedArray based on State: ")
console.log(contactArray);

