# 🌍 Dünya Gezgini - Zoom Ekip Oyunu

🚀 **[OYUNU ŞİMDİ OYNA - CANLI DEMO](https://ferdogan1.github.io/gezgin/)** 🚀

Zoom üzerinde toplanmış ekipler için tasarlanmış eğlenceli quiz oyunu! Görsellerle desteklenmiş sorularla bilginizi test edin.

## 🌐 GitHub Pages'de Canlı

Bu oyun şu anda GitHub Pages üzerinde aktif olarak çalışmaktadır:
- **URL**: `https://ferdogan1.github.io/gezgin/`
- **Durum**: ✅ 7/24 Aktif ve erişilebilir
- **Performans**: Hızlı yükleme (~2 saniye)
- **Güvenlik**: HTTPS ile güvenli bağlantı
- **Mobil Uyumlu**: Tüm cihazlarda mükemmel çalışır

### 📱 Zoom'da Nasıl Kullanılır?
1. **Oyun Lideri**: Ekranını paylaşır ve `https://ferdogan1.github.io/gezgin/` adresini açar
2. **Katılımcılar**: Aynı linki kendi cihazlarında açar
3. **Senkronize Başlangıç**: "3-2-1 Başla!" ile aynı anda oyuna başlar
4. **Rekabet**: 50 soru sonunda skorları karşılaştırır

## 🎮 Oyun Hakkında

**Dünya Gezgini**, dünyaca ünlü landmark'lar, Türk ve dünya sineması, yemek kültürü, hayvanlar ve daha birçok kategori hakkında görsel sorular içeren kapsamlı bir quiz oyunudur.

### ✨ Özellikler

- 📝 **50 Görsel Soru**: Zengin soru havuzu ve kategoriler
- ⏱️ **20 Saniye Süre**: Hızlı tempolu oyun deneyimi
- 🏆 **Puan Sistemi**: Doğru cevap + hız bonusu
- 📊 **Canlı Liderlik Tablosu**: Tüm oyuncuların skorları
- 💾 **Otomatik Kayıt**: localStorage ile skor saklama
- 📱 **Responsive Tasarım**: Tüm cihazlarda çalışır
- 💡 **Açıklama Sistemi**: Her sorunun ardından detaylı açıklama

## 🚀 Hızlı Başlangıç

### GitHub Pages'de Yayınlama

1. **GitHub Repository Oluşturun**
   ```bash
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

## 🎯 Nasıl Oynanır?

### Oyuncu İçin:
1. Oyun linkini tarayıcınızda açın
2. Adınızı girin ve "Oyuna Başla" butonuna tıklayın
3. Her soruda 20 saniyeniz var
4. Doğru cevaba hızlı tıklayın (hız bonusu alın!)
5. Sorunun ardından açıklamayı okuyun
6. 50 soru tamamlandıktan sonra sonuçlarınızı görün

### Zoom Moderatörü İçin:
1. Oyun URL'ini tüm katılımcılarla paylaşın
2. Herkesi aynı anda başlatın: "3, 2, 1, Başla!"
3. Yaklaşık 20 dakika sonra sonuçları karşılaştırın
4. "Tüm Skorları Gör" butonuyla kazananı ilan edin

## 📊 Puanlama Sistemi

- **Doğru Cevap**: 100 puan
- **Hız Bonusu**: Kalan süre × 5 (en fazla 95 puan)
- **Toplam**: En fazla 195 puan/soru (50 soru = 9750 puan maksimum)

## 📋 Soru Kategorileri

Oyun 50 sorudan oluşan zengin bir soru havuzuna sahiptir:

### 🏛️ Dünya Coğrafyası & Ünlü Yapılar (10 soru)
- Eyfel Kulesi, Kolezyum, Özgürlük Heykeli
- Big Ben, Taj Mahal, Pisa Kulesi
- Sagrada Familia, Kızıl Meydan, Büyük Çin Seddi

### 🎬 Türk Film & Dizi Sahneleri (10 soru)
- GORA, Tosun Paşa, Babam ve Oğlum
- Hababam Sınıfı, Kurtlar Vadisi, Diriliş Ertuğrul
- Leyla ile Mecnun ve daha fazlası
- Özel ekip fotoğrafları ve eğlenceli sorular

### 🎭 Dünya Film Sahneleri (10 soru)
- Star Wars, Titanic, The Lion King
- The Dark Knight, Jurassic Park, Forrest Gump
- Fast & Furious, The Godfather, Lord of the Rings
- The Matrix ve diğer klasikler

### 🍖 Döner & Türk Yemekleri (10 soru)
- Döner kebap tarihi ve kültürü
- İskender kebap, Adana kebap
- Türk mutfağının dünyaya armağanları
- Geleneksel lezzetler ve şehirler

### 🌍 Genel Kültür & Çeşitli (10 soru)
- Hayvanlar ve yaşam alanları
- Müzik enstrümanları ve türleri
- Spor dalları ve ülkeler
- Doğa, bitkiler ve iklim

## 🔧 Teknik Detaylar

### Dosya Yapısı
```
gezgin/
├── index.html          # Ana sayfa
├── style.css           # Stil dosyası  
├── game.js             # Oyun mantığı
├── questions.js        # Soru havuzu (50 soru)
├── search_images/      # Yerel görseller
└── README.md           # Dokümantasyon
```

### Özellikler
- **Karışık Soru Sistemi**: Her oyunda farklı sıralama
- **Görsel Optimizasyonu**: Hızlı yüklenen görseller
- **Açıklama Sistemi**: Her sorunun ardından bilgilendirici açıklama
- **Skor Saklama**: Tarayıcıda kalıcı skor tablosu
- **Modern UI**: Gradient tasarım ve animasyonlar

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
    image: "https://example.com/image.jpg", // veya "./search_images/image.jpg"
    question: "Bu yer hangi ülkede?",
    options: ["Seçenek 1", "Seçenek 2", "Seçenek 3", "Seçenek 4"],
    correct: 0, // Doğru cevap indexi (0-3)
    explanation: "Detaylı açıklama metni burada yer alır."
}
```

### Oyun Ayarlarını Değiştirmek
`game.js` dosyasında şu değerleri değiştirebilirsiniz:
- `this.timeLeft = 20` - Soru başına süre
- Soru sayısını questions.js'deki soru havuzu belirler
- `100 + timeBonus` - Puan hesaplama formülü

## 🏆 Önerilen Oyun Formatları

### 1. Hızlı Turnuva (15 dakika)
- İlk 20 soru
- 15 saniye/soru
- Eleme usulü

### 2. Klasik Format (20 dakika)
- Tüm 50 soru
- 20 saniye/soru
- Tam deneyim

### 3. Kategori Özel
- Belirli kategorilerden sorular
- Uzman bilgisi testi

## 🎉 Eğlenceli Detaylar

- **Özel Ekip Soruları**: Ekip üyelerinin fotoğrafları ve eğlenceli sorular
- **Türk Kültürü Vurgusu**: Zengin Türk film/dizi/yemek içeriği
- **Emoji Kullanımı**: Açıklamalarda eğlenceli emoji'ler
- **Kişisel Dokunuşlar**: Geliştiricinin özel mesajları

## 📞 Destek

Bu oyun [@ferdogan](https://x.com/fecassie) tarafından Zoom ekipleri için özel olarak geliştirilmiştir.

Sorularınız için:
- 📧 GitHub Issues bölümünü kullanabilirsiniz
- 🔧 Pull request'ler memnuniyetle karşılanır
- 🐦 Twitter: [@fecassie](https://x.com/fecassie)

## 🎉 Keyifli Oyunlar!

Ekibinizle eğlenceli zamanlar geçirmeniz dileğiyle! 🌍✈️

---

*Bu oyun Zoom ekip toplantıları için özel olarak tasarlanmıştır. 50 çeşitli soruyla bilginizi test edin, ekip arkadaşlarınızla yarışın!* 