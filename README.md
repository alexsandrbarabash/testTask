# API

## GET

### You need to send on this url `http://3.122.254.211:8080` to get all cashiers.  
### You can filter this data use next filters.  
### sex: 'Man' or 'Woman' example `http://3.122.254.211:8080?sex=Man`
### first_name & last_name: Get cashier by first_name or last_name example `http://3.122.254.211:8080?first_name=Max`
### topSalary & bottomSalary: It's filter for salary  
### example `http://3.122.254.211:8080?topSalary=2900&bottomSalary=500`
  
### Also you can skip data use offset and set limits use limit  
### example `http://3.122.254.211:8080?limit=3&offset=2`

### If you wont get only one cashier add to base url /getOne/:id  
### example `http://3.122.254.211:8080/getOne/2`

## POST

### For addition send on base url this object
```
  {
    "first_name": "Андрій",  
    "last_name": "Сидоров",
    "sex": "Man",
    "shop": "ATB",
    "previousWork": "Silpo",
    "birthday": "1983-05-16",
    "salary": 3500,
    "shift": "Night",
    "startWorking":"2010-07-05",
    "city": "Черкаси",
    "address":"Шевенка 100",
    "isEvenDay": false,
    "weekDay": "Monday"
}
```

## PUT
### To update, add to the url the id of the person you want to update and send the object with the fields you want to update
### example `http://3.122.254.211:8080/2`

```
{
  "salary": 5000,
  "shift": "Night"
}
```
## DELETE
### To delete, add to the base url the id of the person you want to delete
### example `http://3.122.254.211:8080/2`

## TASK
### For check the tasks send request to
### `http://3.122.254.211:8080/getTargetCashiers1` and `http://3.122.254.211:8080/getTargetCashiers2`

## How to run this project
### You need have PostgerSQL and NodeJs + ts-node on your PC

### Clone this repository

### Then in terminal write `npm i`
### Then `tsc`
### Add to root directory .env
### .env example
```
DB_HOST=localhost
DB_USER=postgres
DB_PASS=password
DB_NAME=cashiers-in-shop
PORT=3000
```

and then write `npm run start`
