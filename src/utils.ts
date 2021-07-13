import { check } from 'express-validator';
import { Sex, Shift, Week } from './const';

const cashiersCreateValidator = () => [
  check('first_name').isString().trim().notEmpty(),
  check('last_name').isString().trim().notEmpty(),
  check('sex').isIn([Sex.Man, Sex.Woman]),
  check('shop').isString().trim().notEmpty(),
  check('birthday').isISO8601(),
  check('salary').isNumeric(),
  check('city').isString().trim().notEmpty(),
  check('previousWork').isString().trim().notEmpty(),
  check('address').isString().trim().notEmpty(),
  check('startWorking').isISO8601(),
  check('shift').isIn([Shift.Night, Shift.Day]),
  check('isEvenDay').isBoolean(),
  check('weekDay')
  .isIn([
    Week.Monday,
    Week.Tuesday,
    Week.Wednesday,
    Week.Thursday,
    Week.Friday,
    Week.Saturday,
    Week.Sunday
  ]),


];

const cashiersUpdateValidator = () => [
  check('first_name').if(check('first_name').exists()).isString().trim(),
  check('last_name').if(check('last_name').exists()).isString().trim(),
  check('sex').if(check('sex').exists()).isIn([Sex.Man, Sex.Woman]),
  check('shop').if(check('shop').exists()).isString().trim(),
  check('birthday').if(check('birthday').exists()).isISO8601(),
  check('salary').if(check('salary').exists()).isNumeric(),
  check('city').if(check('city').exists()).isString().trim().notEmpty(),
  check('previousWork').if(check('previousWork').exists()).isString().trim().notEmpty(),
  check('address').if(check('address').exists()).isString().trim().notEmpty(),
  check('startWorking').if(check('startWorking').exists()).isISO8601(),
  check('shift').if(check('shift').exists()).isIn([Shift.Night, Shift.Day]),
  check('isEvenDay').if(check('isEvenDay').exists()).isBoolean(),
  check('weekDay').if(check('weekDay').exists())
  .isIn([
    Week.Monday,
    Week.Tuesday,
    Week.Wednesday,
    Week.Thursday,
    Week.Friday,
    Week.Saturday,
    Week.Sunday
  ]),
];

const cashiersGetValidator = () => [
  check('topSalary').if(check('topSalary').exists()).isNumeric(),
  check('bottomSalary').if(check('bottomSalary').exists()).isNumeric(),
  check('limit').if(check('limit').exists()).isNumeric(),
  check('offset').if(check('offset').exists()).isNumeric(),
  check('sex').if(check('sex').exists()).isIn([Sex.Man, Sex.Woman]),
];

const getOptionForFind = (query: any, limit: number | undefined, offset: number | undefined) => {
  const propertyNames = Object.keys(query);

  let option: any = {where: {}};

  if (limit) {
    option = {...option, limit}
  }

  if (offset) {
    option = {...option, offset}
  }

  propertyNames.forEach(item => {
    if (typeof query[item] !== 'undefined') {
      option.where[item] = query[item];
    }

  });
  return option;
};

export {
  cashiersCreateValidator,
  cashiersUpdateValidator,
  cashiersGetValidator,
  getOptionForFind
};
