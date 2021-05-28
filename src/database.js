import Dexie from 'dexie'

const database = new Dexie('Whatsapp')

database.version(2).stores({
  chat: 'id,person,chatTime,chatInputValue,contactId,selected',
  chatWallpaper: '++id,wallpaper',
  profile: '++id,name,about,profilePhoto'
})

export default database
