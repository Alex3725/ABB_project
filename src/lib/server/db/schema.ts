import { pgTable, serial, text, varchar,timestamp,boolean,date,time,integer,foreignKey } from 'drizzle-orm/pg-core';


export const user = pgTable('user', {
	user_id: serial("id").primaryKey(),
	nome: varchar("nome", { length: 100 }),
	email: varchar("email", { length: 255 }).unique(),
	passwordHash: text("password_hash"),
	tempoCreazione: timestamp("tempo_creazione").defaultNow(),


});

export const popupData = pgTable('popup_data', {
	id: serial('id').primaryKey(),

	showCheck: boolean('show_check').notNull(),
	status: boolean('status').notNull().default(false),

	data: date('data').notNull(),
	entrata: time('entrata').notNull(),
	uscita: time('uscita').notNull(),

	titolo: text('titolo').notNull(),
	textAreaContent: text('text_area_content'),

	oreTotali: integer('ore_totali').notNull().default(0),

	foreignId: integer('foreign_id').notNull(),

	// ✅ Foreign key dichiarata in modo esplicito:
});


