# Commands
* running commands in the MongoDB shell
```bash
  mongosh

```
## Database
* if connect to a database not exist, mongodb will create it automatically
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

  * display all the collections in database
  ```mongosh
    show collections
  
  ```

  * return a single item from database at random or matching the criterial
  ```mongosh
    db.contacts.findOne
  
  ```
  * update documents
  ```
    db.contacts.update({name: 'Jon'}, {name: 'Jon Wexler'})
  ```

  * remove any matching documents in the collection
  ```
    db.contacts.delete({name: 'Jon Wexler'})
  ```

  * remove all the documents in that collection
  ```
    db.contacts.deleteMany({})  
  ```

## Run Mogodb server
```bash
  mongod

```


# Mongosh
```javescript
  # save object to database. need to create an object first
  var.save()

  # create and save obejct to database
  var.create()

  # execute query
  statement.exec()


```