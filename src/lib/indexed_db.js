export const indexedDatabase = {
  name: "heatmap_db",
  version: 1,
  objectStoresMeta: [
    {
      store: "user",
      storeConfig: { keyPath: "_id", autoIncrement: true },
      storeSchema: [
        { name: "username", keypath: "username", options: { unique: true } },
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "email", keypath: "email", options: { unique: true } },
        { name: "role", keypath: "role", options: { unique: false } },
      ],
    },
  ],
}

