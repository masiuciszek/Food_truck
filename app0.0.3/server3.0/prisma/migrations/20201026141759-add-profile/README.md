# Migration `20201026141759-add-profile`

This migration has been generated by Marcell Ciszek at 10/26/2020, 3:17:59 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bio" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);
INSERT INTO "new_User" ("email", "id", "name") SELECT "email", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201026141759-add-profile
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,32 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+model Post {
+  authorId  Int?
+  content   String?
+  id        Int     @id @default(autoincrement())
+  published Boolean @default(false)
+  title     String
+  author    User?   @relation(fields: [authorId], references: [id])
+}
+
+model User {
+  email String  @unique
+  id    Int     @id @default(autoincrement())
+  name  String?
+  posts Post[]
+}
+
+
+model Profile {
+  id     Int     @id @default(autoincrement())
+  bio    String
+  user   User    @relation(fields: [userId], references: [id])
+  userId Int
+}
```


