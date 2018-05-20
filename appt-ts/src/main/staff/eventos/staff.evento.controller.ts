import { ApptComponent } from '@appt/core';

@ApptComponent({
  inject: [
    'EventoModel'
  ]
})
export class StaffEventoController {  
  constructor(private evento){}

  getAll(){
    return this.evento.getAll()
  }

  getById(id){
    return this.evento.getById(id)
  }
}