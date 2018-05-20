import { ApptComponent } from '@appt/core';
import { TRouter } from '@appt/api';

@ApptComponent({
  extend: {
    type: TRouter,    
    config: { 
      path: '/staff'
    },
    use: [
      'StaffEventoRouter'
    ]
  }  
})
export class StaffRouter {}