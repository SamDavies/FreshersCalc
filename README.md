# FreshersCalc
Freshers Calculator for the Tab

https://freshers-calc.herokuapp.com
http://freshers-calc-rbs.herokuapp.com

## Env Vars
```
DJANGO_SETTINGS_MODULE=FreshersCalc.settings  
PYTHONUNBUFFERED=1  
DATABASE_URL=postgres://USERNAME:PASSWORD@localhost/fresherscalc  
DEBUG=1  
```

## Test Env Vars
```
PATH=/usr/local/bin:$PATH
DJANGO_SETTINGS_MODULE=FreshersCalc.settings  
PYTHONUNBUFFERED=1  
DATABASE_URL=postgres://USERNAME:PASSWORD@localhost/fresherscalc  
TEST_MANUAL=1  
DEBUG=1  
```

## Create Postgres Database
Open the psql shell.  
```
set role USERNAME;
create database fresherscalc;
```

## Installation
It is recommended that you use a virtual environment.  
```
pip install -r requirements.txt
python manage.py migrate
```

## Run the project
Open the terminal.  
```
python manage.py runserver
```

## Run the BDD tests
Open the terminal.  
```
behave bdd/features
```

## Webpack
To rebuild the javascript source, run this command.
```
./node_modules/.bin/webpack --config webpack.config.js
```
