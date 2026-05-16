# Yeditepe BiGG 1812 Portal

Bu repo, Yeditepe Universitesi icin hazirlanmis statik bir `Vite + React` tanitim ve on basvuru sitesidir.

## Yapi

- `frontend/`: Uygulamanin kendisi
- `.github/workflows/deploy.yml`: GitHub Pages icin otomatik build ve deploy akisi

## Lokal Calistirma

```bash
cd frontend
npm install
npm run dev
```

Varsayilan gelistirme adresi: `http://localhost:5173`

## Production Build

```bash
cd frontend
npm run build
```

Build ciktilari `frontend/dist/` altina olusur.

## GitHub Pages ile Ucretsiz Yayin

Bu proje backend kullanmadigi icin GitHub Pages uzerinde ucretsiz yayinlanabilir.

1. Repo'yu GitHub'a gonder.
2. GitHub'da `Settings > Pages` ekranina gir.
3. `Source` olarak `GitHub Actions` sec.
4. `main` branch'ine her push sonrasi site otomatik deploy edilir.

## Notlar

- `node_modules/` ve `dist/` Git'e dahil edilmemelidir.
- Sitede yer alan form ve kurum linkleri harici servislerdir; yayina almadan once dogruluk kontrolu yapilmalidir.
