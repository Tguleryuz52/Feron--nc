# 🎥 Kılavuz: Hero (Açılış) Videosunu Buraya Ekle

Fossil temasının anasayfası, arkada tam ekran dönen (loop) şık, sakin bir videoyla başlar. Opus'un bu bileşeni kodlarken doğru videoyu kullanabilmesi için videonu buraya atmalısın.

**Gereken Dosya:**

- `hero-bg.mp4` (Yüksek çözünürlüklü, tercihen dikey [4:5] veya her ekrana uyacak lo-fi bir video)

**Alternatif (Eğer video yoksa):**

- `hero-bg.jpg` (veya `.webp` olarak çok şık, temiz bir görsel ekleyebilirsin)

**Ne Yapmalısın?**
Hazırladığın videoyu veya fotoğrafı kopyalayıp bu `public/hero` klasörünün içine yapıştır. Opus kodu yazarken `src="/hero/hero-bg.mp4"` şeklinde çağırıp sayfaya tam oturmasını, sessiz ve sürekli (autoPlay loop muted) oynamasını sağlayacak.
