import Dexie from 'dexie'

const database = new Dexie('Whatsapp')

database.version(1).stores({
  chat: 'id,person,chatTime,chatInputValue,contactId,selected',
  chatWallpaper: '++id,background',
  profile: '++id,name,about,profilePhoto',
  status: '++id,timeOfEntry,photoSource'
})

export default database
