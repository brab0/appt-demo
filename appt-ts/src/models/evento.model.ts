import { ApptComponent } from '@appt/core';
import { TModel } from '@appt/mongoose';

@ApptComponent({
  extend: {
    type: TModel,
    use: ['EventoSchema']
  }
})
export class EventoModel {
  static getAll(){
    return (<any>this).create({
      nome: 'Rodrigo',
      sobrenome: 'Brabo'
    })
  }
    
  static getById(id){
    return (<any>this).findOne({ 
      _id: id
    })
  }
}