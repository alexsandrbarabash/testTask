import { Router, Response, Request } from 'express';
import { validationResult } from 'express-validator';
import CashiersController from '../controllers/cashiers-controller';
import { cashiersUpdateValidator, cashiersCreateValidator, cashiersGetValidator } from '../utils';

const router = Router();

router.get('/',
  cashiersGetValidator(),
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    return CashiersController.getAllCashiers(req, res);
  });

router.get('/getOne/:id', (req: Request, res: Response) => {
  return CashiersController.getCashier(req, res);
});

router.post('/',
  cashiersCreateValidator(),
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    return CashiersController.createCashiers(req, res);
  });

router.put('/:id',
  cashiersUpdateValidator(), (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    return CashiersController.updateCashiers(req, res);
  });

router.delete('/:id', (req: Request, res: Response) => {
  return CashiersController.deleteCashiers(req, res);
});

router.get('/getTargetCashiers1',
  (req: Request, res: Response) => {
    return CashiersController.getTargetCashiersFirst1(res);
  });

router.get('/getTargetCashiers2',
  (req: Request, res: Response) => {
    return CashiersController.getTargetCashiers2(res);
  });


export default router;
