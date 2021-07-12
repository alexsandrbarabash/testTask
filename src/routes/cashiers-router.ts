import { Router, Response, Request } from 'express';
import CashiersController from '../controllers/cashiers-controller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  CashiersController.getCashiers(req, res);
});

router.post('/', (req: Request, res: Response) => {
  CashiersController.createCashiers(req, res);
});

router.put('/', (req: Request, res: Response) => {
  CashiersController.updateCashiers(req, res);
});

router.delete('/', (req: Request, res: Response) => {
  CashiersController.deleteCashiers(req, res);
});

export default router;
