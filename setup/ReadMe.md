# Setup
## Enviornment Setup
- install XAMPP
- open XAMPP 
- go to config > php.ini
-
    ```
    extension=php_odbc.dll
    extension=php_pdo_odbc.dll
    ```  
- go to this dir and paste .dll file
    ```
    C:\Xampp\php\ext\
    ```
- then open http://localhost/dashboard/phpinfo.php
- then check for 
    ```
    PDO
    PDO_ODBC
    ```
-   enviornment setup sucessfull 

# Directory Setup

your files should be in 
```
C:Xampp\htdocs\POS
```

-------
