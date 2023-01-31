# Commands
## Database
* list current database
  ```mongosh
    db
  
  ```
* view all available databases
  ```mongosh
    show dbs
  
  ```

* create a new database
  ```mongosh
    use <new_database>
  
  ```

## Data
* insert data to a new collection
  ```mongosh
    db.<collection_name>.insertOne({key: value})
  ```
* list all data
  ```mongosh
    db.<collection_name>.find()
  
  ```
* search specific data
  ```mongosh
    db.<collection_name>.find({_id: ObejctId()})
  
  ```