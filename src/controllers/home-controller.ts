//const router = express.Router();


import express, { Request, Response } from 'express';
const router = express.Router();
import * as service from '../services/home-service';


router.get('/home', (req: Request, res: Response) => {
    return res.send(service.goHome());
})



export default router;