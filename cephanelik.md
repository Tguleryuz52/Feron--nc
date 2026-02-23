# 🎯 Feron E-Commerce Klonlama: Opus İçin Cephanelik

Bu doküman, Opus'a "pixel-perfect" kod yazdırmaya başlamadan önce projeni mükemmel bir şekilde hazırlaman için oluşturuldu. Kod yazılmadı, teknik altyapı güçlendirildi.

---

## 🛠️ Benim Yaptıklarım (Otomatik Hazırlıklar)

Mevcut Next.js 15 ve TailwindCSS v4 projene, Fossil teması (bizim projemizde Feron) gibi animasyonlu ve "smooth" hissettiren bir e-ticaret deneyimi için gereken ek paketleri kurdum:

1. **`embla-carousel-react`**: Ürün görsellerini kaydırmak ve şık carousellar oluşturmak için.
2. **`zustand`**: Sepet (Cart) statini basit ve etkili yönetmek için (Framer sitelerindeki hızlı etkileşim).
3. **`sonner`**: "Sepete Eklendi" gibi şık, Apple stilinde tost bildirimleri (toast) için.
4. _(Önceden vardı)_: `framer-motion` (Animasyonlar), `@studio-freight/lenis` (Smooth scroll), `lucide-react` (İkonlar).

---

## 🎨 Senin Manuel Yapman Gerekenler (Ödevlerin)

Opus'a kodu yazdırmaya başlamadan **ÖNCE** bu assets'leri projene entegre etmelisin:

1. **Fontları Ekle:**
   - **Satoshi (Sans-serif):** Menüler, ürün isimleri, açıklamalar ve tüm küçük metinler için.
   - **Satoshi Serif (veya benzeri şık bir Serif):** Çılgın büyük "Shop" başlıkları ve tam ortadaki "feron." logosu için.
   - _Not:_ Font dosyaları (`.otf`) `public/fonts` dizininde mevcuttur (Örn: `Satoshi-Regular(Ana metinler için).otf`). Opus `localFont` kullanarak bu dosyaları doğrudan okuyacaktır (Serif font eksikse Opus yerine standart Serif kullanacak).

2. **Feron Logolarını Hazırla:**
   - Gönderdiğin görsele göre Feron markasının çok şık, yonca/çiçek figürlü bir amblemi var. Bu amblemi ve yazıyı barındıran logoları SVG formatında şu şekilde dışa aktarmalısın:
     - `public/brand/logo-light.svg` (Koyu yeşil arka plan `#003333` üzerindeyken kullanılacak açık renk logo - Görseldeki sol üst logo).
     - `public/brand/logo-dark.svg` (Açık yeşil arka plan `#daf1de` üzerindeyken kullanılacak koyu renk logo - Görseldeki sağ alt logo).
     - `public/brand/logo-horizontal.svg` (Amblem solda, yazı sağda olan yatay logo - Görselin en altındaki yatay format).
   - _Not: Sitenin ana yerleşiminde genellikle dikey veya yatay logolardan hangisi daha iyi durursa Opus onu seçecektir._

3. **Global Renkleri Tailwind'e Tanıt:**
   - Gönderdiğin görsele göre Feron'un muhteşem bir renk paleti var! `app/globals.css` dosyana veya Tailwind v4 konfigürasyonuna şu renkleri ekle:
     - Koyu Yeşil (Background / Koyu Vurgular için): `#003333`
     - Açık Yeşil (Background / Metinler için): `#daf1de`
     - Ana Metin ve genel arka plan için siyah/beyaz dengesini korumaya devam edebilirsin ama bu markaya özel harika iki renk kodumuz belli oldu.

---

## 🚀 Opus'a Verilecek Prompt (Kopyala-Yapıştır)

Her şeyi hazırladığında, Opus'a **tam olarak şu promptu** ver:

```text
Bir Framer şablonu olan "Fossil E-Commerce" tasarımını (https://fossil-template.framer.website/) baz alarak kendi markamız olan "Feron" için React, Next.js (App Router), Tailwind CSS v4 ve Framer Motion kullanarak birebir pixel-perfect uyarlıyoruz. Artık marka metinlerinde "Fossil" veya "fossil." yerine "Feron" ve "feron." kullanacağız.

Altyapıda kurulu paketlerimiz:
- framer-motion (sayfa geçişleri ve hover animasyonları için)
- @studio-freight/lenis (smooth scroll için)
- embla-carousel-react (sliderlar için)
- zustand (sepet yönetimi için)
- sonner (bildirimler için)
- lucide-react (ikonlar için)

Tasarım Sistemimiz:
1. Renkler: Markanın ana renkleri Açık Yeşil (#daf1de) ve Koyu Yeşil (#003333). Bu renkleri; vurgular, hover efektleri ve ikonik arka planlarda (Fossil temasının orijinal siyah/beyaz tasarımına uyarlayarak) çok premium hissettirecek şekilde kullanıyoruz. Temiz bir beyaz/siyah arkaplan ağırlığını koruyarak bu markaya has yeşil tonlarını aksan rengi olarak değerlendir.
   - **Ürün Görselleri Arka Planları:** Eklenen ürün görselleri (Örn: `Adidas-bej1-copy.png`, `Lacoste-Polo-Beyaz-copy.png` vb.) klasörde mevcuttur ve **ARKASI BOŞ (Transparan PNG)** formatındadır. Her ürün için TEK resim kullanabilirsin, ancak hover efektini CSS üzerinden arka plan rengini değiştirerek yapacaksın! (Örn: Normalde `#F2F2F2` veya `#daf1de`, fareyle üzerine gelince `#003333` olarak değişecek). Böylece transparan ürün fotoğrafları bu dinamik arkaplanlar üzerinde inanılmaz havalı duracak.
2. Tipografi: Ana metinler "Satoshi" (sans-serif, `public/fonts/Satoshi-Regular(Ana metinler için).otf` üzerinden tanımlanacak), Başlıklar Serif. Anasayfa en altta devasa Feron logomuz olacak.
3. Layout (Header): Sabit değil, ancak sayfa başında temiz duran; sol tarafta geniş boşluklarla "Shop, Brand, Journal, Contact", ortada `public/brand/logo-horizontal.svg` logosu (fossil şablonundaki noktalı metin yerine artık bu logoyu SVG üzerinden çağır), sağ tarafta "Arama ikonu, Account, Bayrak ikonu, CART (0)" olacak. Altı çizili şık ince çizgiler barındırır.
4. Anasayfa (Splash Section): Fossil şablonunun GİRİŞ YAPISI VE GRID SİSTEMİ BİREBİR AYNI KALACAK. Sadece arka planda video dönmesi yerine `public/hero/hero-image.png` görselini tam ekran (object-cover) koy. Alt ortada dinamik New York yerel saati gösteren küçük bir ibare, sol altta yüzen bir Spotify (müzik çalar) widget'ı andıran ui BİREBİR AYNI konumda olacak.
5. Shop Grid: Masaüstünde Fossil'in meşhur 3 sütunlu yapısı BİREBİR AYNI KURULACAK. Ürün görselleri transparan olduğu için arka plan renkleriyle destekle (object-fit: contain kullanarak yerleştir, resimlerimi kesmemeli ve boşlukları güzelce yeşil renklerle doldurmalı). Sol üstünde aynı şekilde siyah "NEW" badge'i olacak.
6. Animasyonlar (Çok Önemli): Bütün linkler hover olduğunda altındaki çizgi merkezden dışa doğru genişler. Ürün kartına hover geldiğimizde görsel mankenli bir görsele pürüzsüzce (framer-motion kullanarak fade ile) değişir, ve resmin altında tam genişlikte yatay siyah zemin üzerinde "QUICK ADD +" çıkar. Sayfa ilk yüklendiğinde metinlerde ince fade-in+slide-up efekti isterim.

Senden ilk olarak; global Navbar ve Footer bileşenlerini (Tasarım temasına %100 sadık, marka adı "Feron" olacak şekilde) yapmanı ve ardından Anasayfadaki tam ekran splash girişini, saat komponentini ve videolu düzeni kodlamanı istiyorum. Kodu parçalara böl ve sadece mükemmel çalışan, minimalist yapıyı ver.
```
