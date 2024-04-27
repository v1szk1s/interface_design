/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hta2iv1i14vfbsw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b40a0jii",
    "name": "role",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hta2iv1i14vfbsw")

  // remove
  collection.schema.removeField("b40a0jii")

  return dao.saveCollection(collection)
})
