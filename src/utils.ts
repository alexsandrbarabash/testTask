import { check } from 'express-validator';
import { Sex } from './const';

const cashiersCreateValidator = () => [
  check('first_name').isString().trim().notEmpty(),
  check('last_name').isString().trim().notEmpty(),
  check('sex').isIn([Sex.Man, Sex.Woman]),
  check('shop').isString().trim().notEmpty(),
  check('birthday').isISO8601(),
  check('salary').isNumeric()
];

const cashiersUpdateValidator = () => [
  check('first_name').if(check('first_name').exists()).isString().trim(),
  check('last_name').if(check('last_name').exists()).isString().trim(),
  check('sex').if(check('sex').exists()).isIn([Sex.Man, Sex.Woman]),
  check('shop').if(check('shop').exists()).isString().trim(),
  check('birthday').if(check('birthday').exists()).isISO8601(),
  check('salary').if(check('salary').exists()).isNumeric()
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
