// Dünya Gezgini - Soru Havuzu
// Her soru: görsel URL, soru metni, 4 seçenek, doğru cevap indexi

const questionPool = [
    {
        image: "https://images.unsplash.com/photo-1471919743851-c4df8b6ee133?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü yapı hangi ülkede bulunuyor?",
        options: ["Fransa", "İtalya", "İspanya", "Yunanistan"],
        correct: 0,
        explanation: "Eyfel Kulesi, Paris'in ve Fransa'nın en ünlü simgelerinden biridir."
    },
    {
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800&h=600&fit=crop&crop=face",
        question: "Bu antik yapı hangi şehirde yer alır?",
        options: ["Atina", "Roma", "İstanbul", "Kahire"],
        correct: 1,
        explanation: "Kolezyum, Roma'nın en ünlü antik yapılarından biridir."
    },
    {
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop&crop=face",
        question: "Bu saray hangi ülkenin başkentinde bulunuyor?",
        options: ["Japonya", "Çin", "Tayland", "Vietnam"],
        correct: 0,
        explanation: "Bu Japon sarayı, Tokyo'da bulunmaktadır."
    },
    {
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü heykel hangi şehirde bulunuyor?",
        options: ["New York", "Los Angeles", "Washington", "Boston"],
        correct: 0,
        explanation: "Özgürlük Heykeli, New York'ta Liberty Island'da yer alır."
    },
    {
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&crop=face",
        correct: 2,
        question: "Bu ünlü Big Ben saat kulesi hangi şehirdedir?",
        options: ["Dublin", "Edinburgh", "Londra", "Manchester"],
        explanation: "Big Ben, Londra'nın Westminster semtinde yer alan ünlü saat kulesidir."
    },
    {
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=face",
        question: "Bu muhteşem yapı hangi ülkededir?",
        options: ["Hindistan", "Pakistan", "Bangladeş", "Nepal"],
        correct: 0,
        explanation: "Tac Mahal, Hindistan'ın Agra şehrinde bulunan dünyaca ünlü bir türbedir."
    },
    {
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=600&fit=crop&crop=face",
        question: "Bu antik şehir hangi ülkede bulunuyor?",
        options: ["Mısır", "Ürdün", "İsrail", "Suriye"],
        correct: 1,
        explanation: "Petra, Ürdün'ün güneybatısında yer alan antik şehirdir."
    },
    {
        image: "https://images.unsplash.com/photo-1546074177-ffdda98d214f?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü dağ hangi kıtada yer alır?",
        options: ["Asya", "Avrupa", "Afrika", "Güney Amerika"],
        correct: 2,
        explanation: "Kilimanjaro Dağı, Tanzanya'da bulunan Afrika'nın en yüksek dağıdır."
    },
    {
        image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü opera binası hangi şehirdedir?",
        options: ["Melbourne", "Sydney", "Perth", "Brisbane"],
        correct: 1,
        explanation: "Sydney Opera House, Avustralya'nın Sydney şehrinin simgesidir."
    },
    {
        image: "https://images.unsplash.com/photo-1508829040592-72f179f8a73f?w=800&h=600&fit=crop&crop=face",
        question: "Bu antik tapınak hangi ülkede bulunuyor?",
        options: ["Tayland", "Kamboçya", "Vietnam", "Myanmar"],
        correct: 1,
        explanation: "Angkor Wat, Kamboçya'da bulunan dünyanın en büyük dini kompleksidir."
    },
    {
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü şelale hangi kıtada bulunuyor?",
        options: ["Kuzey Amerika", "Güney Amerika", "Afrika", "Asya"],
        correct: 1,
        explanation: "İguazu Şelaleleri, Arjantin ve Brezilya sınırında yer alır."
    },
    {
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü kale hangi ülkede bulunuyor?",
        options: ["Almanya", "Avusturya", "İsviçre", "Çekya"],
        correct: 0,
        explanation: "Neuschwanstein Kalesi, Almanya'nın Bavyera eyaletinde yer alır."
    },
    {
        image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü yapı hangi şehirde bulunuyor?",
        options: ["Münih", "Hamburg", "Berlin", "Köln"],
        correct: 2,
        explanation: "Brandenburg Kapısı, Berlin'in en ünlü simgelerinden biridir."
    },
    {
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü köprü hangi şehirde bulunuyor?",
        options: ["Londra", "Newcastle", "Edinburgh", "Cardiff"],
        correct: 0,
        explanation: "Tower Bridge, Londra'nın Thames Nehri üzerindeki ünlü köprüsüdür."
    },
    {
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&crop=face",
        question: "Bu antik amfitiyatro hangi ülkede bulunuyor?",
        options: ["İtalya", "Yunanistan", "Türkiye", "Tunus"],
        correct: 1,
        explanation: "Bu antik tiyatro Yunanistan'da yer almaktadır."
    },
    {
        image: "https://images.unsplash.com/photo-1576944479066-78ae41bf5df4?w=800&h=600&fit=crop&crop=face",
        question: "Bu büyük cami hangi şehirde bulunuyor?",
        options: ["İstanbul", "Bursa", "Konya", "Ankara"],
        correct: 0,
        explanation: "Sultan Ahmet Camii (Mavi Cami), İstanbul'un Sultanahmet semtinde yer alır."
    },
    {
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü heykel hangi ülkede bulunuyor?",
        options: ["Arjantin", "Brezilya", "Şili", "Uruguay"],
        correct: 1,
        explanation: "Cristo Redentor (İsa Heykeli), Brezilya'nın Rio de Janeiro şehrinde yer alır."
    },
    {
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü yapı hangi ülkenin başkentinde bulunuyor?",
        options: ["Rusya", "Polonya", "Ukrayna", "Belarus"],
        correct: 0,
        explanation: "Kırmızı Meydan ve Kremlin, Rusya'nın başkenti Moskova'da yer alır."
    },
    {
        image: "https://images.unsplash.com/photo-1563789031959-4c02c6fc05c4?w=800&h=600&fit=crop&crop=face",
        question: "Bu antik yapı hangi ülkede bulunuyor?",
        options: ["Mısır", "Sudan", "Libya", "Etiyopya"],
        correct: 0,
        explanation: "Büyük Sfenks, Mısır'ın Giza şehrinde yer alan antik bir heykeltir."
    },
    {
        image: "https://images.unsplash.com/photo-1549068106-b024baf5062d?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü kanyon hangi ülkede bulunuyor?",
        options: ["Kanada", "ABD", "Meksika", "Brezilya"],
        correct: 1,
        explanation: "Grand Canyon, Amerika Birleşik Devletleri'nin Arizona eyaletinde yer alır."
    },
    // === YENİ SORULAR: FARKLI KATEGORİLER ===
    {
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü aktör hangi filmle Oscar kazandı?",
        options: ["Titanic", "The Revenant", "Inception", "Django Unchained"],
        correct: 1,
        explanation: "Leonardo DiCaprio, The Revenant filmiyle 2016'da En İyi Erkek Oyuncu Oscar'ını kazandı."
    },
    {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=face",
        question: "Bu geleneksel yemek hangi ülkenin mutfağından?",
        options: ["İtalya", "Fransa", "Japonya", "Hindistan"],
        correct: 2,
        explanation: "Sushi, Japonya'nın geleneksel yemeğidir."
    },
    {
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&crop=face",
        question: "Bu hayvan hangi kıtaya özgüdür?",
        options: ["Afrika", "Asya", "Avustralya", "Güney Amerika"],
        correct: 2,
        explanation: "Koala, Avustralya'ya özgü bir hayvandır."
    },
    {
        image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü dizi hangi şehirde geçiyor?",
        options: ["Los Angeles", "New York", "Seattle", "Chicago"],
        correct: 1,
        explanation: "Friends dizisi New York şehrinde geçmektedir."
    },
    {
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&crop=face",
        question: "Bu geleneksel yemek hangi ülkenin mutfağından?",
        options: ["İtalya", "Türkiye", "Yunanistan", "İspanya"],
        correct: 0,
        explanation: "Pizza, İtalya'nın geleneksel yemeğidir."
    },
    {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=face",
        question: "Bu tarihi kişi hangi ülkenin lideri olmuştur?",
        options: ["İngiltere", "Fransa", "Almanya", "Rusya"],
        correct: 1,
        explanation: "Napolyon Bonaparte, Fransa'nın imperatoru olmuştur."
    },
    {
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=face",
        question: "Bu hayvan hangi türe aittir?",
        options: ["Fok", "Yunus", "Balina", "Köpekbalığı"],
        correct: 2,
        explanation: "Bu görüntüdeki hayvan balina türündendir."
    },
    {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü film hangi yılda çekildi?",
        options: ["1990", "1994", "1997", "2000"],
        correct: 1,
        explanation: "The Lion King (Aslan Kral) 1994 yılında çekilmiştir."
    },
    {
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&crop=face",
        question: "Bu geleneksel yemek hangi ülkenin mutfağından?",
        options: ["Meksika", "İspanya", "Arjantin", "Peru"],
        correct: 0,
        explanation: "Taco, Meksika'nın geleneksel yemeğidir."
    },
    {
        image: "https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü sanatçı hangi ülkedendir?",
        options: ["İspanya", "İtalya", "Fransa", "Hollanda"],
        correct: 3,
        explanation: "Vincent van Gogh Hollandalı bir ressamdır."
    },
    {
        image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&h=600&fit=crop&crop=face",
        question: "Bu tarihi olay hangi yüzyılda gerçekleşti?",
        options: ["15. yüzyıl", "16. yüzyıl", "17. yüzyıl", "18. yüzyıl"],
        correct: 1,
        explanation: "Amerika'nın keşfi 15. yüzyılın sonunda (1492) gerçekleşmiştir."
    },
    {
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&crop=face",
        question: "Bu geleneksel yemek hangi ülkenin mutfağından?",
        options: ["Japonya", "Çin", "Tayland", "Vietnam"],
        correct: 2,
        explanation: "Pad Thai, Tayland'ın ünlü geleneksel yemeğidir."
    },
    {
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&crop=face",
        question: "Bu hayvan hangi bölgede yaşar?",
        options: ["Arktik", "Antarktika", "Sahara", "Amazon"],
        correct: 0,
        explanation: "Kutup ayısı Arktik bölgesinde yaşar."
    },
    {
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=face",
        question: "Bu bilimsel kavram neyi ifade eder?",
        options: ["Güneş Sistemi", "Galaksi", "Nebula", "Kara Delik"],
        correct: 1,
        explanation: "Bu görüntü bir galaksiyi temsil etmektedir."
    },
    {
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=face",
        question: "Bu müzik aleti hangi ülkenin geleneksel aletidir?",
        options: ["İskoçya", "İrlanda", "Galler", "İngiltere"],
        correct: 0,
        explanation: "Bagpipe (gayda), İskoçya'nın geleneksel müzik aletidir."
    },
    {
        image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=800&h=600&fit=crop&crop=face",
        question: "Bu ünlü spor etkinliği hangi şehirde yapılır?",
        options: ["Londra", "Paris", "New York", "Boston"],
        correct: 3,
        explanation: "Boston Maratonu, Boston şehrinde düzenlenen ünlü atletizm etkinliğidir."
    },
    {
        image: "https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?w=800&h=600&fit=crop&crop=face",
        question: "Bu hayvan hangi türe aittir?",
        options: ["Penguen", "Albatros", "Pelikan", "Martı"],
        correct: 0,
        explanation: "Bu hayvan penguen türündendir."
    },
    {
        image: "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=800&h=600&fit=crop&crop=face",
        question: "Bu geleneksel içecek hangi ülkeden gelir?",
        options: ["Hindistan", "Çin", "Japonya", "Sri Lanka"],
        correct: 1,
        explanation: "Çay, orijinal olarak Çin'den gelmektedir."
    },
    {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        question: "Bu ünlü film serisi kaç filmden oluşur?",
        options: ["3", "6", "8", "9"],
        correct: 3,
        explanation: "Star Wars ana film serisi 9 filmden oluşmaktadır."
    },
    {
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=600&fit=crop",
        question: "Bu tarihi yapı hangi medeniyete aittir?",
        options: ["Roma", "Yunan", "Mısır", "Maya"],
        correct: 2,
        explanation: "Piramitler, antik Mısır medeniyetine aittir."
    },
    {
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&h=600&fit=crop",
        question: "Bu geleneksel yemek hangi ülkenin mutfağından?",
        options: ["Hindistan", "Tayland", "Malezya", "Endonezya"],
        correct: 0,
        explanation: "Curry (köri), Hindistan'ın geleneksel yemeğidir."
    },
    {
        image: "https://images.unsplash.com/photo-1543507936-8a91d0b40c30?w=800&h=600&fit=crop",
        question: "Bu ünlü müzik grubu hangi ülkedendir?",
        options: ["İngiltere", "Amerika", "Avustralya", "Kanada"],
        correct: 0,
        explanation: "The Beatles, İngiltere'den çıkmış ünlü müzik grubudur."
    },
    {
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
        question: "Bu meyve hangi iklimde yetişir?",
        options: ["Tropikal", "Ilıman", "Kutup", "Çöl"],
        correct: 0,
        explanation: "Ananas tropikal iklimde yetişen bir meyvedir."
    },
    {
        image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=800&h=600&fit=crop",
        question: "Bu spor hangi ülkenin milli sporudur?",
        options: ["Hindistan", "Pakistan", "İngiltere", "Avustralya"],
        correct: 2,
        explanation: "Kriket, İngiltere'nin milli sporudur."
    },
    {
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        question: "Bu tarihi kişi hangi alanda ünlüdür?",
        options: ["Müzik", "Resim", "Edebiyat", "Bilim"],
        correct: 3,
        explanation: "Albert Einstein, bilim alanında ünlü bir fizikçidir."
    },
    {
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop",
        question: "Bu geleneksel dans hangi ülkenin kültürüne aittir?",
        options: ["İspanya", "Arjantin", "Brezilya", "Meksika"],
        correct: 1,
        explanation: "Tango, Arjantin'nin geleneksel dansıdır."
    },
    {
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        question: "Bu renk karışımından hangi renk elde edilir?",
        options: ["Mor", "Turuncu", "Yeşil", "Kahverengi"],
        correct: 2,
        explanation: "Mavi ve sarının karışımından yeşil renk elde edilir."
    },
    {
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
        question: "Bu nesne ne için kullanılır?",
        options: ["Zaman ölçümü", "Yön bulma", "Hava durumu", "Sıcaklık ölçümü"],
        correct: 1,
        explanation: "Pusula, yön bulmak için kullanılan bir alettir."
    },
    {
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop",
        question: "Bu bitki hangi iklim bölgesinde yetişir?",
        options: ["Çöl", "Orman", "Tundra", "Step"],
        correct: 0,
        explanation: "Kaktüs, çöl ikliminde yetişen bir bitkidir."
    },
    // === EK 20 SORU (TOPLAM 50 SORU İÇİN) ===
    {
        image: "https://images.unsplash.com/photo-1440778303588-435521a205bd?w=800&h=600&fit=crop",
        question: "Bu ünlü sanat eseri hangi müzede sergileniyor?",
        options: ["Louvre", "Metropolitan", "British Museum", "Uffizi"],
        correct: 0,
        explanation: "Mona Lisa tablosu Paris'teki Louvre Müzesi'nde sergilenmektedir."
    },
    {
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        question: "Bu geleneksel yemek hangi ülkenin mutfağından?",
        options: ["Almanya", "Avusturya", "İsviçre", "Belçika"],
        correct: 0,
        explanation: "Pretzel, Almanya'nın geleneksel ekmek türüdür."
    },
    {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        question: "Bu enstrüman hangi müzik türünde yaygın kullanılır?",
        options: ["Rock", "Jazz", "Klasik", "Folk"],
        correct: 2,
        explanation: "Keman, klasik müzikte en yaygın kullanılan enstrümanlardan biridir."
    },
    {
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=800&h=600&fit=crop",
        question: "Bu tarihi uygarlık hangi kıtada gelişmiştir?",
        options: ["Asya", "Afrika", "Avrupa", "Amerika"],
        correct: 1,
        explanation: "Antik Mısır uygarlığı Afrika kıtasında gelişmiştir."
    },
    {
        image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop",
        question: "Bu geleneksel içecek hangi ülkenin kültürüne aittir?",
        options: ["Rusya", "Polonya", "Ukrayna", "Çekya"],
        correct: 0,
        explanation: "Vodka, Rusya'nın geleneksel alkollü içeceğidir."
    },
    {
        image: "https://images.unsplash.com/photo-1573164713712-03790a178651?w=800&h=600&fit=crop",
        question: "Bu hayvan hangi habitatta yaşar?",
        options: ["Orman", "Çöl", "Okyanus", "Dağ"],
        correct: 2,
        explanation: "Yunus balıkları okyanuslarda yaşayan deniz memelileridir."
    },
    {
        image: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5b?w=800&h=600&fit=crop",
        question: "Bu film hangi tarzda bir yapımdır?",
        options: ["Komedi", "Dram", "Bilim Kurgu", "Korku"],
        correct: 2,
        explanation: "Space filmleri genellikle bilim kurgu türündedir."
    },
    {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        question: "Bu geleneksel yemek hangi öğünde tüketilir?",
        options: ["Kahvaltı", "Öğle", "Akşam", "Atıştırmalık"],
        correct: 1,
        explanation: "Ramen genellikle öğle yemeği olarak tüketilen bir Japon çorbası türüdür."
    },
    {
        image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&h=600&fit=crop",
        question: "Bu geleneksel festival hangi ülkede kutlanır?",
        options: ["Brezilya", "Meksika", "İspanya", "Arjantin"],
        correct: 0,
        explanation: "Rio Karnavalı, Brezilya'nın en ünlü festivallerinden biridir."
    },
    {
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        question: "Bu matematiksel kavram hangi alanda kullanılır?",
        options: ["Geometri", "Cebir", "İstatistik", "Fizik"],
        correct: 3,
        explanation: "E=mc² formülü fizik alanında Einstein'ın görelilik teorisinde kullanılır."
    },
    {
        image: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?w=800&h=600&fit=crop",
        question: "Bu doğal oluşum hangi jeolojik süreçle meydana gelir?",
        options: ["Erozyon", "Volkanizma", "Tektonik", "Buzul"],
        correct: 1,
        explanation: "Volkanlar, magmanın yeryüzüne çıkması ile oluşan jeolojik yapılardır."
    },
    {
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
        question: "Bu mimari stil hangi dönemde yaygındı?",
        options: ["Antik", "Ortaçağ", "Rönesans", "Modern"],
        correct: 0,
        explanation: "Japon geleneksel mimarisi antik dönemlerden beri süregelen bir stildir."
    },
    {
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop",
        question: "Bu hayvan hangi beslenme türüne sahiptir?",
        options: ["Otçul", "Etçil", "Hepçil", "Bal besini"],
        correct: 0,
        explanation: "Koalalar sadece okaliptüs yaprağı yedikleri için otçul hayvanlardır."
    },
    {
        image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a8b?w=800&h=600&fit=crop",
        question: "Bu teknoloji hangi alanda devrim yaratmıştır?",
        options: ["Ulaştırma", "İletişim", "Tarım", "Sağlık"],
        correct: 1,
        explanation: "İnternet ve dijital teknolojiler iletişim alanında devrim yaratmıştır."
    },
    {
        image: "https://images.unsplash.com/photo-1542736031-7945c2c3c3a5?w=800&h=600&fit=crop",
        question: "Bu spor hangi kıtada doğmuştur?",
        options: ["Avrupa", "Asya", "Amerika", "Afrika"],
        correct: 1,
        explanation: "Karate, Japonya'da (Asya) doğmuş bir dövüş sanatıdır."
    },
    {
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&h=600&fit=crop",
        question: "Bu dil hangi dil ailesine aittir?",
        options: ["Latin", "Germen", "Slav", "Kelt"],
        correct: 0,
        explanation: "İspanyolca Latin dil ailesine ait olan bir dildir."
    },
    {
        image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800&h=600&fit=crop",
        question: "Bu çiçek hangi mevsimde açar?",
        options: ["İlkbahar", "Yaz", "Sonbahar", "Kış"],
        correct: 0,
        explanation: "Laleler genellikle ilkbahar mevsiminde açan çiçeklerdir."
    },
    {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        question: "Bu yemek pişirme tekniği hangi kültürden gelir?",
        options: ["Çin", "Japonya", "Kore", "Tayland"],
        correct: 1,
        explanation: "Teppanyaki, Japonya'dan gelen bir yemek pişirme tekniğidir."
    },
    {
        image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800&h=600&fit=crop",
        question: "Bu mimari yapı hangi amaca hizmet eder?",
        options: ["Konut", "İbadet", "Eğlence", "Ticaret"],
        correct: 2,
        explanation: "Opera binaları sanat ve eğlence amaçlı kullanılan yapılardır."
    },
    {
        image: "https://images.unsplash.com/photo-1577993341728-d4b2a9b2c11f?w=800&h=600&fit=crop",
        question: "Bu antik buluş hangi medeniyete aittir?",
        options: ["Roma", "Yunan", "Mısır", "Çin"],
        correct: 3,
        explanation: "Barut, antik Çin'de icat edilmiş bir buluştur."
    }
];

// Soruları karıştırma fonksiyonu
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Oyun için soru seçimi (50 soru - tüm soru havuzu)
function getGameQuestions() {
    return shuffleArray(questionPool).slice(0, 50);
} 