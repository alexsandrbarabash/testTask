import { Request, Response } from 'express';
import Cashier from '../models/cashier'
import { sequelize } from '../db';
import { Repository } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { getOptionForFind } from '../utils';

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
    await this.cashierRepository.create({...req.body});
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
}

export default new CashiersController();
