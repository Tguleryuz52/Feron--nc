# 👕 Kılavuz: Ürün Görsellerini Buraya Ekle

Gönderdiğin kıyafet fotoğraflarına baktım; harika duruyorlar! Üstelik resimleri **arkası boş (transparan)** şekilde yükleyeceğini belirttin. Bu harika bir haber çünkü Feron'un özel renkleri (Koyu Yeşil ve Açık Yeşil) ile web sitesinin arka planında mükemmel bir uyum yakalayacağız.

Framer'ın o meşhur "Hover (Üzerine Gelme)" efektini arkası boş fotoğraflarla kusursuz şekilde yapmak için, CSS tarafında resmin arkasındaki web sitesi kutusunun rengini değiştireceğiz (Örn: Fareyle üzerine gelince arkası açık yeşilden koyu yeşile dönecek).

**Nasıl Yükleyeceksin?**
Arkası boş (Transparan PNG veya WebP) resimlerini doğrudan bu `public/products` klasörünün içine at. Opus'un hover efektini çift görselle yapabilmesi için, listede **ilk gözükecek olan resmi "main"**, **üzerine gelince gözükecek olanı "hover"** olarak isimlendirmelisin.

_Örnek İsimlendirme (Transparan resimlerin için):_

- `adidas-bej-main.png` _(İlk gözükecek açı)_
- `adidas-bej-hover.png` _(Fareyle üzerine gelince gözükecek farklı açı veya mankenli hali)_

- `adidas-bordo-main.jpg`
- `adidas-bordo-hover.jpg`

- `adidas-yesil-main.jpg`
- `adidas-yesil-hover.jpg`

**Önemli Not:**
Elindeki resimler gördüğüm kadarıyla kareye yakın bir oranda. Fossil tasarımı dikey (4:5) resimlerle çalışır. Opus'a prompt verirken görsellerin kareye yakın (1:1 veya 4:5 yerine kendi doğal oranında) sergilenmesini söyleyeceğiz, böylece resimlerin kesilmeden kusursuz gözükecek!

_Hadi şimdi beğendiğin birkaç rengi bu mantıkla isimlendirip buraya sürükle bırak!_
