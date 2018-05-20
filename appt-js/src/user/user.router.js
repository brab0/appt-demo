import { ApptComponent } from '@appt/core';
import { TRouter } from '@appt/api';
import { Get, Post, Put, Delete } from '@appt/api/router';

@ApptComponent({
   extend: {
      type: TRouter,
      config: {
         path: '/user'         
      }
   },
   inject: ['UserController']
})
export class UserRouter {
   constructor(controller){
      this.controller = controller;
   }

   @Get('/')
   getAll(req, res, next){
      this.controller
         .getAll()
            .then(users => res.status(200).send(users))
            .catch(ex => res.status(500).send(ex));
   }

   @Get('/:id')
   getById(req, res, next){
      this.controller
         .getById(req.params.id)
            .then(user => res.status(200).send(user))
            .catch(ex => res.status(500).send(ex));
   }

   @Post('/')
   create(req, res, next){
      this.controller
         .create(req.body)
            .then(user => res.status(200).send(user))
            .catch(ex => res.status(500).send(ex));
   }

   @Put('/')
   update(req, res, next){
      this.controller
         .update(req.body)
            .then(user => res.status(200).send(user))
            .catch(ex => res.status(500).send(ex));
   }

   @Delete('/:id')
   delete(req, res, next){
      this.controller
         .delete(req.params.id)
            .then(user => res.status(200).send(user))
            .catch(ex => res.status(500).send(ex));
   }
}