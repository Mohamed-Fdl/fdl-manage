# CUSTOMERS & PLAN MANAGER APP
This project is about a little gestion app.It can help you manage your business plans nd users that are registered to those plans


## Environment variables

| Name  | Comment    | Value                                           |
|-------|------------------|---------------------------------------------------|
| DB_CONNECT   | The mongoDb connection url      | **************|
| ADMIN_USERNAME   | The username of admin      |adminManager|
| ADMIN_PASSWORD   | The password of admin     |yurhlpBjjMC1Em|


## Database structure
I used a MondoDb database  with the driver mongoose
### Collections
I need to store users and their projects

#### Clients

| Field  | Type    | Comment  |Example|
|-------|------------------|----------------------------|------------------------|
| lastname   | STRING    | The user lastname| Joe|
| firstname   | STRING    | The user firstname| Dalton|
| email   | STRING    | The user email| joe@gmail.com|
| plan   | MONGOOSE OBJECT ID   | The reference of the plan as an unique ID|63afea236fbffd80acdee0de |

#### Plans

| Field  | Type    | Comment  |Example|
|-------|------------------|----------------------------|------------------------|
| name   | STRING    | The project name| API for portfolio management|
| price   | STRING    | The project description| Somme long description|
| options   | ARRAY    | The array of all options of the project| [Option1,Option2,....]|


## Middlewares
In this application I have 02 middlewares

| Name  | Why    | Comment  |
|-------|------------------|----------------------------|
| Connect   | Accept only connected user    | *Check if there is a session connexion set to TRUE| 
| Flash   | To send flash messages after requests    |None  | 


### Try using it and feedback to me

