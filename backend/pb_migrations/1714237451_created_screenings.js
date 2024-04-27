/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "igdg5qc4wi1rqfi",
    "created": "2024-04-27 17:04:11.048Z",
    "updated": "2024-04-27 17:04:11.048Z",
    "name": "screenings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1afhqhsl",
        "name": "movieId",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "hnb2le2v",
        "name": "date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("igdg5qc4wi1rqfi");

  return dao.deleteCollection(collection);
})
