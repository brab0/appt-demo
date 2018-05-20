import { ApptModule } from '@appt/core';

@ApptModule({
   declare: [      
      'UserRouter',
      'UserController',
      'UserModel',
      'UserSchema'
   ]
})
export class UserModule {}