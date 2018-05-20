import { ApptComponent } from '@appt/core';
import { TRouter } from '@appt/api';
import { Get } from '@appt/api/router';

@ApptComponent({
  extend: {
    type: TRouter,
    config: {
      path: '/evento'
    }
  },
  inject: [
    'StaffEventoController'
  ]
})
export class StaffEventoRouter{ 
  constructor(private staffEventoController){}

  @Get('/')
  getAll(req, res){    
    this.staffEventoController.getAll()
      .then(data => res.status(200).send(data));    
  }

  @Get('/:id')
  getById(req, res){
    this.staffEventoController.getById(req.params.id)
      .then(data => res.status(200).send(data));    
  }
}