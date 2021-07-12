import { Sex } from '../const';
import { Table, Column, PrimaryKey, AutoIncrement, AllowNull, Model } from 'sequelize-typescript';

interface ICashier {
  id: number;
  first_name: string;
  last_name: string;
  birthday: Date;
  sex: Sex;
  salary: number;
  shop: string;
}

@Table({
  tableName: 'cashiers',
  timestamps: true
})
class Cashier extends Model implements ICashier {
  @AutoIncrement
  @PrimaryKey
  @Column
  id!: number;

  @AllowNull(false)
  @Column
  first_name!: string;

  @AllowNull(false)
  @Column
  last_name!: string;

  @AllowNull
  @Column
  birthday!: Date;

  @AllowNull(false)
  @Column
  sex!: Sex;

  @AllowNull(false)
  @Column
  salary!: number;

  @AllowNull(false)
  @Column
  shop!: string;


}

export default Cashier;
