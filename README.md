# 🌍 Dünya Gezgini - Zoom Ekip Oyunu

🚀 **[OYUNU ŞİMDİ OYNA - CANLI DEMO](https://ferdogan1.github.io/oyun/)** 🚀

Zoom üzerinde toplanmış ekipler için tasarlanmış eğlenceli coğrafya quiz oyunu! Bireysel olarak oynayıp puanlarınızı karşılaştırın.

## 🌐 GitHub Pages'de Canlı

Bu oyun şu anda GitHub Pages üzerinde aktif olarak çalışmaktadır:
- **URL**: `https://ferdogan1.github.io/oyun/`
- **Durum**: ✅ 7/24 Aktif ve erişilebilir
- **Performans**: Hızlı yükleme (~2 saniye)
- **Güvenlik**: HTTPS ile güvenli bağlantı
- **Mobil Uyumlu**: Tüm cihazlarda mükemmel çalışır

### 📱 Zoom'da Nasıl Kullanılır?
1. **Oyun Lideri**: Ekranını paylaşır ve `https://ferdogan1.github.io/oyun/` adresini açar
2. **Katılımcılar**: Aynı linki kendi cihazlarında açar
3. **Senkronize Başlangıç**: "3-2-1 Başla!" ile aynı anda oyuna başlar
4. **Rekabet**: 50 soru sonunda skorları karşılaştırır

## 🎮 Oyun Hakkında

**Dünya Gezgini**, dünyaca ünlü landmark'lar, şehirler ve ülkeler hakkında görsel sorular içeren eğlenceli bir quiz oyunudur. Her oyuncu kendi ekranından bireysel olarak oynar, sonuçlar otomatik olarak karşılaştırılır.

### ✨ Özellikler

- 📝 **50 Görsel Soru**: Coğrafya, film, yemek, hayvanlar, tarih ve daha fazlası
- ⏱️ **90 Saniye Süre**: Her soru için yeterli düşünme zamanı
- 🏆 **Puan Sistemi**: Doğru cevap + hız bonusu
- 📊 **Canlı Liderlik Tablosu**: Tüm oyuncuların skorları
- 💾 **Otomatik Kayıt**: localStorage ile skor saklama
- 📱 **Responsive Tasarım**: Tüm cihazlarda çalışır

## 🚀 Hızlı Başlangıç

### GitHub Pages'de Yayınlama

1. **GitHub Repository Oluşturun**
   ```bash
   # Terminalden yeni bir repo oluşturun veya GitHub'da manuel olarak oluşturun
   git init
   git add .
   git commit -m "İlk commit: Dünya Gezgini oyunu"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
   git push -u origin main
   ```

2. **GitHub Pages'i Etkinleştirin**
   - GitHub repository'nizde `Settings` sekmesine gidin
   - Sol menüden `Pages` seçin
   - Source olarak `Deploy from a branch` seçin
   - Branch olarak `main` seçin, folder `/ (root)` bırakın
   - `Save` butonuna tıklayın

3. **Oyununuz Hazır!**
   - Birkaç dakika sonra oyununuz şu adreste yayında olacak:
   - `https://KULLANICI_ADI.github.io/REPO_ADI/`

## 🎯 Nasıl Oynanır?

### Oyuncu İçin:
1. Oyun linkini tarayıcınızda açın
2. Adınızı girin ve "Oyuna Başla" butonuna tıklayın
3. Her soruda 90 saniyeniz var
4. Doğru cevaba hızlı tıklayın (hız bonusu alın!)
5. 50 soru tamamlandıktan sonra sonuçlarınızı görün

### Zoom Moderatörü İçin:
1. Oyun URL'ini tüm katılımcılarla paylaşın
2. Herkesi aynı anda başlatın: "3, 2, 1, Başla!"
3. 75 dakika sonra sonuçları karşılaştırın
4. "Tüm Skorları Gör" butonuyla kazananı ilan edin

## 📊 Puanlama Sistemi

- **Doğru Cevap**: 100 puan
- **Hız Bonusu**: Kalan süre ÷ 10 (en fazla 9 puan)
- **Toplam**: En fazla 109 puan/soru (50 soru = 5450 puan maksimum)

## 📋 Soru Kategorileri

Oyun şu tür sorular içerir:
- 🏛️ **Coğrafya**: Ünlü yapılar, şehirler, ülkeler (Eyfel Kulesi, Kolezyum, vb.)
- 🎬 **Film & Dizi**: Ünlü filmler, diziler, aktörler
- 🍕 **Yemek Kültürü**: Geleneksel yemekler ve ait oldukları ülkeler
- 🐨 **Hayvanlar**: Farklı türler ve yaşadıkları bölgeler
- 📚 **Tarih**: Tarihi kişiler, olaylar ve dönemler
- 🎵 **Kültür**: Müzik, dans, geleneksel objeler
- 🔬 **Bilim**: Temel bilimsel kavramlar
- 🎨 **Sanat**: Ünlü sanatçılar ve eserleri
- 🏃 **Spor**: Ünlü spor dalları ve etkinlikler
- 🌿 **Doğa**: Bitkiler, iklim bölgeleri, doğa olayları

## 🔧 Teknik Detaylar

### Dosya Yapısı
```
oyun/
├── index.html          # Ana sayfa
├── style.css           # Stil dosyası  
├── game.js             # Oyun mantığı
├── questions.js        # Soru havuzu
└── README.md           # Dokümantasyon
```

### Teknolojiler
- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **Vanilla JavaScript**: ES6+ features
- **localStorage**: Skor saklama
- **Unsplash API**: Görseller için

### Tarayıcı Desteği
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+

## 🎨 Özelleştirme

### Yeni Sorular Eklemek
`questions.js` dosyasındaki `questionPool` dizisine yeni sorular ekleyin:

```javascript
{
    image: "https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop",
    question: "Bu yer hangi ülkede?",
    options: ["Seçenek 1", "Seçenek 2", "Seçenek 3", "Seçenek 4"],
    correct: 0, // Doğru cevap indexi (0-3)
    explanation: "Açıklama metni"
}
```

### Oyun Ayarlarını Değiştirmek
`game.js` dosyasında şu değerleri değiştirebilirsiniz:
- `this.timeLeft = 90` - Soru başına süre
- `.slice(0, 30)` - Toplam soru sayısı
- `100 + timeBonus` - Puan hesaplama

### Renk Temasını Değiştirmek
`style.css` dosyasındaki CSS değişkenlerini düzenleyin:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #feca57;
}
```

## 🏆 Önerilen Oyun Formatları

### 1. Hızlı Turnuva (15 dakika)
- 10 soru
- 60 saniye/soru
- Hızlı eleme sistemi

### 2. Klasik Format (45 dakika)
- 30 soru
- 90 saniye/soru
- Detaylı skor karşılaştırması

### 3. Maraton (45 dakika)
- 30 soru
- 90 saniye/soru
- Ekstra zorlu sorular

## 🐛 Bilinen Sorunlar & Çözümler

### Görseller Yüklenmiyor
- İnternet bağlantınızı kontrol edin
- Tarayıcınızı yenileyin (F5)
- Farklı tarayıcı deneyin

### Skorlar Kayboldu
- Tarayıcı verileri temizlenmiş olabilir
- localStorage desteği kapalı olabilir
- Gizli/özel gezinti modunda olabilirsiniz

### Ses Çalışmıyor
- Tarayıcı ses izni gerektirebilir
- Cihaz sesi kapalı olabilir
- JavaScript ses desteği yoksa manuel geçilir

## 📞 Destek

Sorularınız için:
- 📧 Issues kısmında soru sorabilirsiniz
- 🔧 Pull request'ler memnuniyetle karşılanır
- 📚 Wiki sayfasında ek bilgiler bulabilirsiniz

## 🎉 Keyifli Oyunlar!

Ekibinizle eğlenceli zamanlar geçirmeniz dileğiyle! 🌍✈️

---

*Bu oyun Zoom ekip toplantıları için özel olarak tasarlanmıştır. Coğrafyayı seviyorsanız ve ekip ruhu arıyorsanız, tam size göre!* 