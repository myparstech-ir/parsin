let db, bcrypt, path, os;

const isElectron = () => {
  // تست اجرای اپلیکیشن در محیط Electron
  return !!(window && window.process && window.process.type);
};

if (isElectron()) {
  const Database = window.require('better-sqlite3');
  bcrypt = window.require('bcryptjs');
  path = window.require('path');
  os = window.require('os');

  const dbPath = path.join(os.homedir(), 'Documents', 'parsin-data.db');
  db = new Database(dbPath);

  // جدول کاربران
  db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fullname TEXT,
      email TEXT UNIQUE,
      password TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();

  // جدول کسب‌وکارها
  db.prepare(`
    CREATE TABLE IF NOT EXISTS businesses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      name TEXT,
      lang TEXT,
      info TEXT,
      info_filled INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
}

export function registerUser({ fullname, email, password }) {
  if (!isElectron()) {
    throw new Error("دسترسی به دیتابیس فقط در محیط Electron مجاز است.");
  }
  try {
    const hash = bcrypt.hashSync(password, 10);
    const stmt = db.prepare(
      'INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)'
    );
    const result = stmt.run(fullname, email, hash);
    return { success: true, userId: result.lastInsertRowid };
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return { success: false, message: 'این ایمیل قبلاً ثبت شده است.' };
    }
    return { success: false, message: err.message };
  }
}

export function loginUser({ email, password }) {
  if (!isElectron()) {
    throw new Error("دسترسی به دیتابیس فقط در محیط Electron مجاز است.");
  }
  const stmt = db.prepare(
    'SELECT id, fullname, email, password FROM users WHERE email = ?'
  );
  const user = stmt.get(email);
  if (user && bcrypt.compareSync(password, user.password)) {
    return { success: true, user: { id: user.id, fullname: user.fullname, email: user.email } };
  }
  return { success: false, message: 'ایمیل یا رمز عبور اشتباه است.' };
}

export function getUserById(userId) {
  if (!isElectron()) return null;
  const stmt = db.prepare(
    'SELECT id, fullname, email FROM users WHERE id = ?'
  );
  return stmt.get(userId);
}

export function addBusiness({ userId, name, lang }) {
  if (!isElectron()) return { success: false, message: "فقط در Electron مجاز است" };
  const stmt = db.prepare(
    'INSERT INTO businesses (user_id, name, lang) VALUES (?, ?, ?)'
  );
  const result = stmt.run(userId, name, lang);
  return { success: true, businessId: result.lastInsertRowid };
}

export function getUserBusinesses(userId) {
  if (!isElectron()) return [];
  const stmt = db.prepare(
    'SELECT * FROM businesses WHERE user_id = ?'
  );
  return stmt.all(userId);
}

export function updateBusinessInfo({ businessId, info }) {
  if (!isElectron()) return;
  const stmt = db.prepare(
    'UPDATE businesses SET info = ?, info_filled = 1 WHERE id = ?'
  );
  stmt.run(JSON.stringify(info), businessId);
}

export function getBusinessById(businessId) {
  if (!isElectron()) return null;
  const stmt = db.prepare('SELECT * FROM businesses WHERE id = ?');
  return stmt.get(businessId);
}