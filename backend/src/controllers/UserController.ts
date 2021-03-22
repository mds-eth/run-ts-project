import  { Request, Response } from 'express';

import EmailService from '../services/EmailService';

const users = [{name: 'Michael',email: 'michael@gmail.com'},{name: 'Ciclano',ameil: 'ciclado@gmail.com'}];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
                to: {
                    name: 'Michael', 
                    email: 'michael@gmail.com'
                },
                message: {
                    subject: 'Welcome system', 
                    body: 'Seja bem vindo'
                }
            });
            
            return res.send('Success');
    }
}