import { ApptModule } from '@appt/core';

@ApptModule({
   declare: [      
      'ContactRouter',
      'ContactController',
      'ContactModel',
      'ContactSchema'
   ]
})
export class ContactModule {}