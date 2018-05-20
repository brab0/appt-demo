import { ApptComponent } from '@appt/core';
import { TSchema } from '@appt/mongoose';

@ApptComponent({
   extend: {
      type: TSchema
   }
})
export class ContactSchema {
   constructor(){
      this.name = {
         type: String,
         default: ""
      }

      this.email = {
         type: String,
         default: ""
      }
   }
}