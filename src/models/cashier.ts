import { Table, Column, PrimaryKey, AutoIncrement, AllowNull, Model, Default } from 'sequelize-typescript';
import { Sex, Shift, Week } from '../const';

interface ICashier {
  id: number;
  first_name: string;
  last_name: string;
  birthday: Date;
  sex: Sex;
  salary: number;
  shop: string;
  city: string;
  startWorking: Date;
  shift: Shift;
  previousWork: string;
  address: string;
  isEvenDay: boolean;
  weekDay: Week
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

  @AllowNull(false)
  @Column
  city!: string;

  @AllowNull(false)
  @Column
  startWorking!: Date;

  @AllowNull(false)
  @Column
  shift!: Shift;

  @AllowNull(true)
  @Column
  previousWork!: string;

  @AllowNull(false)
  @Column
  address!: string;

  @Default(true)
  @Column
  isEvenDay!: boolean

  @AllowNull(false)
  @Column
  weekDay!: Week

}

export default Cashier;
