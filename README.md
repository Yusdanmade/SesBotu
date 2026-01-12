# Discord Ses Botu

## Kurulum

1. Projeyi indirin
2. Proje dizinine gidin:
   ```bash
   cd proje_dizini
   ```
3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
4. `.env.example` dosyasını `.env` olarak kopyalayın:
   ```bash
   copy .env.example .env
   ```
5. `.env` dosyasını açıp bilgileri girin:
   - DISCORD_TOKEN: Discord Developer Portal'dan aldığınız bot token
   - SES_KANAL_ID: Discord'da ses kanalına sağ tıklayıp "Kanal ID'sini Kopyala" dediğinizde gelen ID

## Çalıştırma

```bash
npm start
```

## Gereksinimler

- Node.js 16.11.0 veya üstü