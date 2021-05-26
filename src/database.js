import Dexie from 'dexie'

const database = new Dexie('Whatsapp')

database.version(1).stores({
  chat: '++id,person,chatTime,chatInputValue,contactId,selected'
})

export default database
