import Dexie from 'dexie'

const database = new Dexie('Whatsapp')

database.version(1).stores({
  chat: 'id,person,chatTime,chatInputValue,contactId,selected',
  chatWallpaper: '++id,wallpaper'
})

export default database
