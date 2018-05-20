import { 
   ApptModule, 
   ApptBootstrap 
} from '@appt/core';

@ApptModule({
   import: [
      'ContactModule',
      'UserModule'
   ],
   declare: [      
      'MainDatabase',
      'MainRouter',
      'MainServer'
   ]
})
export class MainModule {}

ApptBootstrap.module('MainModule');