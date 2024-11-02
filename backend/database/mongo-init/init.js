db = db.getSiblingDB("mydatabase"); // Seleciona ou cria o banco "mydatabase"

// Cria a coleção "users" com um documento de exemplo
db.createCollection("users");
db.users.insertOne({
  login: "exampleUser",
  password: "examplePassword",
  userid: "user1"
});

// Cria a coleção "notes" com um documento de exemplo
db.createCollection("notes");
db.notes.insertOne({
  id: "note1",
  title: "Example Note",
  content: "This is an example note.",
  datetime: new Date(),
  userid: "user1"
});
