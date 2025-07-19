# Category Management REST API

## 📦 Proje Hakkında

Bu proje, Node.js ve Express.js kullanılarak geliştirilmiş basit bir RESTful API'dir. Amaç, bir uygulamanın kategori yönetimi ihtiyaçlarını karşılamaktır. 

Temel CRUD (Create, Read, Update, Delete) işlemlerini destekler:

- Kategorileri listeleme
- Belirli bir kategoriyi görüntüleme
- Yeni kategori ekleme
- Mevcut kategoriyi güncelleme
- Kategori silme

## 📁 Proje Yapısı

```bash
B1-7734P/
│
├── node_modules/
├── src/
│   ├── config/                  # Veritabanı veya genel ayarlar
│   ├── controllers/            # İş mantığını barındıran controller dosyaları
│   │   └── categoryControllers.ts
│   ├── migrations/             # Veritabanı şema geçiş dosyaları
│   ├── models/                 # Veritabanı işlemleri (model fonksiyonları)
│   └── routers/                # Express yönlendirme dosyaları
│       └── categoryRoutes.ts
│
├── app.ts                      # Express uygulamasının başlangıç dosyası
├── .env                        # Ortam değişkenleri
├── knexfile.js                 # Knex.js yapılandırma dosyası
├── package.json
├── package-lock.json
├── tsconfig.json
└── .gitattributes
```

## 🔧 Kurulum ve Başlatma

### 1. Bağımlılıkları Kurun

```bash
npm install
```

### 2. .env Dosyasını Oluşturun

`.env` dosyasına gerekli değişkenleri ekleyin:

```
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/dbname
```

### 3. Veritabanı Migrasyonlarını Uygulayın

```bash
npx knex migrate:latest
```

### 4. Sunucuyu Başlatın

```bash
npm run dev
```

## 📌 API Endpoint’leri

| Metot | Endpoint             | Açıklama                      |
|-------|----------------------|-------------------------------|
| GET   | `/api/categories`    | Tüm kategorileri listeler     |
| GET   | `/api/categories/:id`| Belirli bir kategoriyi getirir|
| POST  | `/api/categories`    | Yeni kategori oluşturur       |
| PUT   | `/api/categories/:id`| Kategoriyi günceller          |
| DELETE| `/api/categories/:id`| Kategoriyi siler              |

## 🧠 Kullanılan Teknolojiler

- Node.js
- Express.js
- TypeScript
- Knex.js
- PostgreSQL (veya desteklenen herhangi bir veritabanı)
- dotenv

## ✅ Durum Kodları

| Kod  | Açıklama                             |
|------|--------------------------------------|
| 200  | Başarılı istek                       |
| 201  | Kaynak başarıyla oluşturuldu         |
| 202  | Kaynak başarıyla güncellendi         |
| 400  | Geçersiz istek veya sunucu hatası    |
| 404  | Kategori bulunamadı                  |
| 405  | İşlem desteklenmiyor veya başarısız  |

## ✍️ Geliştiren

Bu proje bir backend eğitim uygulaması olarak geliştirilmiştir. Kategorilerin temel CRUD işlemleriyle nasıl yönetileceğini öğretmeyi amaçlamaktadır.
