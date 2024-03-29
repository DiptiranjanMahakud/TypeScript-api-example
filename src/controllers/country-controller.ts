import express, {Request, Response} from 'express';
import * as countryService from '../services/country-service'



const router = express.Router();



const getCountries = async (req: Request, res: Response) => {
    countryService.getCountries().then(
        (countries) => {
            res.send(countries);
        }
    )
};

router.get('/countries', (req: Request, res: Response) => {
    countryService.getCountries().then(
        (countries) => {
            res.send(countries);
        }
    );
});


router.get('/countries/:id', (req: Request, res: Response) => {
    countryService.getCountryById(parseInt(req.params.id)).then(
        (country) => {
            res.send(country);
        }
    );
});

router.post('/countries', (req: Request, res: Response) => {
    const data=req.body;
    console.log(data);
    countryService.saveCountry(data).then(
        () => {
            res.status(200).json({
                message: "Country was Inserted"
            });
        }
    ).catch((error)=>{
            res.status(303).json({
                message: "Error occured" + error.message
            })
    });
});


router.put('/countries/:id', (req: Request, res: Response) => {
    countryService.updateCountry(parseInt(req.params.id), req.body).then(
        () => {
            res.status(200).json({
                message: "Country was successfully updated!"
            });
        }
    ).catch((error)=>{
        res.status(303).json({
            message: "Error occured" + error.message
        })
    });
});




router.delete('/countries/:id', (req: Request, res: Response) => {
    countryService.deleteCountry(parseInt(req.params.id)).then(
        (country) => {
            res.send(country);
        }).catch((error) => res.send(error.message))
    ;
});

export default router;
//export default {getCountries};