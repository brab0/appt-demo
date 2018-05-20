import { ApptComponent } from '@appt/core';
import { TSchema, property } from '@appt/mongoose';

@ApptComponent({
  extend: {
    type: TSchema
  }
})
export class EventoSchema {
   @property({required: true})
   private nome = "Rodrigo";

   @property({required: true})
   private sobrenome = "Brabo";
}