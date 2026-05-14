import path from "path";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Pages } from "./collections/Pages";
import { Posts } from "./collections/Posts";
import { Events } from "./collections/Events";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { SiteSettings } from "./globals/SiteSettings";
import { HomePage } from "./globals/HomePage";
import { AboutPage } from "./globals/AboutPage";
import { ActionsPage } from "./globals/ActionsPage";
import { EventsPage } from "./globals/EventsPage";
import { ContactPage } from "./globals/ContactPage";
import { DonatePage } from "./globals/DonatePage";
import { JoinPage } from "./globals/JoinPage";

const publicOrigin = process.env.WEB_APP_URL ?? "http://localhost:5173";
const adminOrigin = process.env.PAYLOAD_ADMIN_URL ?? "http://localhost:3000";
const allowedOrigins = Array.from(new Set([publicOrigin, adminOrigin]));

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "dev-secret-change-me",
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(path.dirname(new URL(import.meta.url).pathname)),
    },
  },
  collections: [Users, Media, Pages, Posts, Events],
  globals: [SiteSettings, HomePage, AboutPage, ActionsPage, EventsPage, ContactPage, DonatePage, JoinPage],
  editor: lexicalEditor(),
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL ?? "file:./payload.db",
    },
  }),
  typescript: {
    outputFile: path.resolve(path.dirname(new URL(import.meta.url).pathname), "payload-types.ts"),
  },
  cors: allowedOrigins,
  csrf: allowedOrigins,
});
