/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  // buat user baru
  pgm.sql(
    "INSERT INTO users(id,username, password, fullname) VALUES ('old_notes','old_notes','old_notes','old_notes')"
  );

  // ubah nilai owner pada note yang ownernya bernilai NULL
  pgm.sql("UPDATE notes SET owner ='old_notes' WHERE owner IS NULL");

  // beri constraint fk pada owner terhadap kolom id dari tabel users
  pgm.addConstraint(
    "notes",
    "fk_notes.owner_users.id",
    "FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE"
  );
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  // hapus user baru.
  pgm.sql("DELETE FROM users WHERE id = 'old_notes'");

  // ubah nilai owner old_notes pada note menjadi NULL
  pgm.sql("UPDATE notes SET owner = NULL WHERE owner = 'old_notes'");

  // hapus constraint fk_notes.owner_users.id pada tabel notes
  pgm.dropConstraint("notes", "fk_notes.owner_users.id");
};
