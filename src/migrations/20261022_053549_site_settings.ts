import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"whatsapp_number" varchar DEFAULT '6285730457714' NOT NULL,
  	"email" varchar DEFAULT 'hello@projectnuraya.id' NOT NULL,
  	"whatsapp_message" varchar DEFAULT 'Halo Project Nuraya, saya ingin berkonsultasi mengenai kebutuhan solusi digital/website.' NOT NULL,
  	"github" varchar DEFAULT 'https://github.com/projectnuraya',
  	"linkedin" varchar DEFAULT 'https://www.linkedin.com/company/nuraya-digital-nusantara/',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "site_settings" CASCADE;`)
}
