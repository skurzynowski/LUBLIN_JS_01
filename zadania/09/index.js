class User{}

class Admin extends User {
  constructor( access ){
    super();
    this.access = access;
  }
  static test(){
    console.log('test');
  }
}

const obj = new Admin(5);

console.log(obj);
