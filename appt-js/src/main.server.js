import { ApptComponent } from '@appt/core';
import { TServer } from '@appt/api';

@ApptComponent({
   extend: {
      type: TServer
   }
})
export class MainServer {
   constructor(config){
      console.log(`Server running at ${config.address.host}:${config.address.port}`)
   }
}