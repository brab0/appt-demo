import { ApptComponent } from '@appt/core';
import { MongooseParse } from '@appt/mongoose';

@ApptComponent({
   inject: ['UserModel']
})
export class UserController {
   constructor(model){
      this.model = model;
   }

   getAll(){
      return this.model.find({})
   };

   getById(_id){
      return this.model.find({ _id: MongooseParse.ObjectId(_id)});
   }

   create(newUser){
      return this.model.create(newUser);
   }

   update(user) {
      return this.model.update({
         _id: MongooseParse.ObjectId(user._id)
      }, { 
         $set: user 
      });
   }
   
   delete(_id) {
      return this.model.delete(req.params.id);
   }
   
}