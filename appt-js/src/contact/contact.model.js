import { ApptComponent } from '@appt/core';
import { TModel } from '@appt/mongoose';

@ApptComponent({
   extend: {
      type: TModel,
      use: ['ContactSchema']
   }
})
export class ContactModel {}