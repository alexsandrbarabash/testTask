import { Request, Response } from 'express';
import { Repository } from 'sequelize-typescript';
import { Op } from 'sequelize';
import moment from 'moment';
import Cashier from '../models/cashier'
import { sequelize } from '../db';
import { getOptionForFind } from '../utils';
import { Shift, Week } from '../const';

class CashiersController {
  private cashierRepository: Repository<Cashier>

  constructor() {
    this.cashierRepository = sequelize.getRepository(Cashier)
  }

  async getAllCashiers(req: Request, res: Response) {

    const {sex, first_name, last_name, topSalary, bottomSalary, limit, offset} = req.query;
    const option = getOptionForFind({sex, first_name, last_name}, +limit!, +offset!);
    if (topSalary) {
      option.where.salary = {[Op.lte]: +topSalary,}
    }

    if (bottomSalary) {
      option.where.salary = {...option.where.salary, [Op.gte]: +bottomSalary,}
    }

    const data = await this.cashierRepository.findAll(option);
    res.json(data);
  }

  async getCashier(req: Request, res: Response) {
    const data = await this.cashierRepository.findOne({
      where: {id: req.params.id},
      order: [['createdAt', 'DESC']],
    });
    res.json(data);
  }

  async createCashiers(req: Request, res: Response) {
    await this.cashierRepository.create(req.body);
    return res.json('Ok');
  }

  async updateCashiers(req: Request, res: Response) {
    await this.cashierRepository.update({...req.body}, {where: {id: req.params.id}});
    return res.json('Ok');
  }

  async deleteCashiers(req: Request, res: Response) {
    await this.cashierRepository.destroy({where: {id: req.params.id}});
    return res.json('Ok');
  }

  async getTargetCashiersFirst1(res: Response) {

    const data = await this.cashierRepository.findAll({
      where: {
        shop: 'ATB',
        previousWork: {[Op.in]: ['Silpo', 'Arsen']},
        startWorking: {
          [Op.lte]: moment().subtract(5, 'years').format('YYYY-MM-DD')
        }
      }
    });

    return res.json(data);
  }

  async getTargetCashiers2(res: Response) {
    const data = await this.cashierRepository.findAll({
      where: {
        shop: 'ATB',
        address: 'Шевенка 100',
        isEvenDay: false,
        weekDay: Week.Monday,
        shift: Shift.Night
      }
    });

    return res.json(data);
  }
}

export default new CashiersController();
