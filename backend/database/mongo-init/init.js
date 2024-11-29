db = db.getSiblingDB("mydatabase"); 

db.createCollection("users");
db.createCollection("notes");
db.createCollection("categories");