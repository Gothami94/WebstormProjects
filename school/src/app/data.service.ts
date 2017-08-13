import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  members=['Nihara','Mishari','Poorna','Namal'];

  memberData(){
    return "This is the students's data you look!!"
  }

}
