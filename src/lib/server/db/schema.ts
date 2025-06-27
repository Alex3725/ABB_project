import { mysqlTable,int ,serial, text, varchar,timestamp,boolean,date,time, tinyint } from 'drizzle-orm/mysql-core';



export const users = mysqlTable('users', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
});


export const utenti = mysqlTable('utenti',{
	user_id:int('user_id').autoincrement().primaryKey(),
	name: varchar('name', { length: 100 }).notNull(),
	email: varchar('email', { length: 100 }).notNull(),
	passw: varchar('passw', { length: 255 }).notNull(),
	autorizzato:tinyint('autorizzato').notNull().default(0),

});
// src/lib/db/schema/giornate.ts



export const attivita = mysqlTable('attivita', {
  id: int('id').primaryKey().autoincrement(),
  user_id: int('user_id')
  .notNull()
  .references(()=> utenti.user_id),
  data: date('data').notNull(),
  titolo: varchar('titolo', { length: 255 }).notNull(),
  ora_entrata: time('ora_entrata').notNull(),
  ora_uscita: time('ora_uscita').notNull(),
  descrizione: text('descrizione'),
});



