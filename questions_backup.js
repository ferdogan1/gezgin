// Dünya Gezgini - Soru Havuzu
// Her soru: görsel URL, soru metni, 4 seçenek, doğru cevap indexi

const questionPool = [
    // === DÜNYA COĞRAFYA & ÜNLÜ YAPILAR (10 SORU) ===
    {
        image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800&h=600&fit=crop",
        question: "Bu ünlü yapı hangi ülkede bulunuyor?",
        options: ["Fransa", "İtalya", "İspanya", "Yunanistan"],
        correct: 0,
        explanation: "Eyfel Kulesi, Paris'in ve Fransa'nın en ünlü simgelerinden biridir."
    },
    {
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop",
        question: "Bu antik yapı hangi şehirde yer alır?",
        options: ["Atina", "Roma", "İstanbul", "Kahire"],
        correct: 1,
        explanation: "Kolezyum, Roma'nın en ünlü antik yapılarından biridir."
    },
    {
        image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800&h=600&fit=crop",
        question: "Bu ünlü heykel hangi şehirde bulunuyor?",
        options: ["New York", "Los Angeles", "Washington", "Boston"],
        correct: 0,
        explanation: "Özgürlük Heykeli, New York'ta Liberty Island'da yer alır."
    },
    {
        image: "https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?w=800&h=600&fit=crop",
        question: "Bu ünlü Big Ben saat kulesi hangi şehirdedir?",
        options: ["Dublin", "Edinburgh", "Londra", "Manchester"],
        correct: 2,
        explanation: "Big Ben, Londra'nın Westminster semtinde yer alan ünlü saat kulesidir."
    },
    {
        image: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800&h=600&fit=crop",
        question: "Bu saray hangi ülkenin başkentinde bulunuyor?",
        options: ["Japonya", "Çin", "Tayland", "Vietnam"],
        correct: 0,
        explanation: "Bu Japon sarayı, Tokyo'da bulunmaktadır."
    },
    {
        image: "https://images.unsplash.com/photo-1562668956-1eb0ab71fe93?w=800&h=600&fit=crop",
        question: "Taj Mahal hangi ülkede bulunmaktadır?",
        options: ["Hindistan", "Pakistan", "Nepal", "Bangladeş"],
        correct: 0,
        explanation: "Taj Mahal, Hindistan'ın Agra şehrinde bulunan muhteşem bir anıt mezardır."
    },
    {
        image: "https://images.unsplash.com/photo-1580684584912-5d86ae510b44?w=800&h=600&fit=crop",
        question: "Pisa Kulesi hangi ülkede bulunur?",
        options: ["İtalya", "Fransa", "İspanya", "Portekiz"],
        correct: 0,
        explanation: "Pisa Kulesi, İtalya'nın Pisa şehrinde yer alan eğik yapısıyla ünlü bir kuledir."
    },
    {
        image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop",
        question: "Sagrada Familia kilisesi hangi şehirdedir?",
        options: ["Madrid", "Barselona", "Sevilla", "Valencia"],
        correct: 1,
        explanation: "Sagrada Familia, İspanya'nın Barselona şehrinde yer alan, Gaudi'nin tasarladığı ünlü bir bazilikadır."
    },
    {
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
        question: "Kızıl Meydan hangi şehirde bulunur?",
        options: ["Moskova", "St. Petersburg", "Kiev", "Minsk"],
        correct: 0,
        explanation: "Kızıl Meydan, Rusya'nın başkenti Moskova'da yer alan tarihi bir meydandır."
    },
    {
        image: "https://images.unsplash.com/photo-1597910037310-7dd8ddb93e24?w=800&h=600&fit=crop",
        question: "Büyük Çin Seddi'nin toplam uzunluğu yaklaşık ne kadardır?",
        options: ["5.000 km", "8.800 km", "12.000 km", "21.000 km"],
        correct: 1,
        explanation: "Büyük Çin Seddi'nin toplam uzunluğu yaklaşık 8.800 kilometredir."
    },

    // === TÜRK FİLM SAHNELERİ (10 SORU) ===
    {
        image: "https://i.imgur.com/RzEDKNJ.jpg",
        question: "GORA filminde Komutan Logar'ın babası hangi şehre indirilmişti?",
        options: ["Aksaray", "Kayseri", "Nevşehir", "Ankara"],
        correct: 0,
        explanation: "GORA filminde Komutan Logar'ın babası Aksaray'a sürgün edilmişti."
    },
    {
        image: "https://i.imgur.com/VcN6CfL.jpg",
        question: "Bu sahne hangi Türk filminde geçmektedir?",
        options: ["Hababam Sınıfı", "Neşeli Günler", "Tosun Paşa", "Süt Kardeşler"],
        correct: 2,
        explanation: "Bu sahne Kemal Sunal'ın ünlü filmi Tosun Paşa'da geçmektedir."
    },
    {
        image: "https://i.imgur.com/NfvQZDp.jpg",
        question: "Bu sahne hangi Türk filminde geçmektedir?",
        options: ["G.O.R.A", "A.R.O.G", "Yahşi Batı", "Vizontele"],
        correct: 0,
        explanation: "Bu sahne Cem Yılmaz'ın ünlü filmi G.O.R.A'da geçmektedir."
    },
    {
        image: "https://i.imgur.com/A3WlKZK.jpg",
        question: "Bu sahne hangi Türk filminde geçmektedir?",
        options: ["Babam ve Oğlum", "Mucize", "Aile Arasında", "Organize İşler"],
        correct: 0,
        explanation: "Bu sahne Çağan Irmak'ın ünlü filmi Babam ve Oğlum'da geçmektedir."
    },
    {
        image: "https://i.imgur.com/K5bN8kF.jpg",
        question: "Bu sahne hangi türk dizisinde geçmektedir?",
        options: ["Kurtlar Vadisi", "Ezel", "Behzat Ç.", "Leyla ile Mecnun"],
        correct: 0,
        explanation: "Bu sahne Türk diziler tarihinin efsanesi Kurtlar Vadisi'nde geçmektedir."
    },
    {
        image: "https://i.imgur.com/LXUZZqo.jpg",
        question: "Kurtlar Vadisi dizisindeki 'Memati Baş' karakterini kim canlandırmıştır?",
        options: ["Gürkan Uygun", "Erhan Yazıcıoğlu", "Kenan Çoban", "Oktay Kaynarca"],
        correct: 0,
        explanation: "Memati Baş karakteri Gürkan Uygun tarafından canlandırılmıştır."
    },
    {
        image: "https://i.imgur.com/C7YXUTa.jpg",
        question: "Bu sahne hangi türk dizisinde geçmektedir?",
        options: ["Aşk-ı Memnu", "Muhteşem Yüzyıl", "Diriliş Ertuğrul", "Kurtlar Vadisi"],
        correct: 2,
        explanation: "Bu sahne TRT'nin popüler dizisi Diriliş Ertuğrul'da geçmektedir."
    },
    {
        image: "https://i.imgur.com/v24fXgM.jpg",
        question: "Bu sahne hangi türk dizisinde geçmektedir?",
        options: ["Ezel", "Behzat Ç.", "Leyla ile Mecnun", "Kardeş Payı"],
        correct: 2,
        explanation: "Bu sahne Ali Atay'ın yazdığı efsane komedi Leyla ile Mecnun'da geçmektedir."
    },
    {
        image: "https://i.imgur.com/yxpFtdO.jpg",
        question: "Hababam Sınıfı filmindeki 'Mahmut Hoca' karakterini kim canlandırmıştır?",
        options: ["Münir Özkul", "Şener Şen", "Kemal Sunal", "Adile Naşit"],
        correct: 0,
        explanation: "Mahmut Hoca karakteri Münir Özkul tarafından canlandırılmıştır."
    },
    {
        image: "https://i.imgur.com/Qk6bFX6.jpg",
        question: "Bu sahne hangi Türk filminde geçmektedir?",
        options: ["Selvi Boylum Al Yazmalım", "Çöpçüler Kralı", "Arabesk", "Züğürt Ağa"],
        correct: 0,
        explanation: "Bu sahne Türk sinemasının klasiklerinden 'Selvi Boylum Al Yazmalım' filminde geçmektedir."
    },

    // === DÜNYA FİLM SAHNELERİ (10 SORU) ===
    {
        image: "https://i.imgur.com/hJJXaSH.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["Star Wars", "Star Trek", "Guardians of Galaxy", "Interstellar"],
        correct: 0,
        explanation: "Bu sahne Star Wars film serisinden geçmektedir."
    },
    {
        image: "https://i.imgur.com/oDXS5tL.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["Titanic", "Avatar", "Inception", "The Matrix"],
        correct: 0,
        explanation: "Bu sahne James Cameron'ın efsane filmi Titanic'te geçmektedir."
    },
    {
        image: "https://i.imgur.com/Tg0c5NS.jpg",
        question: "Bu sahne hangi animasyon filminde geçmektedir?",
        options: ["Shrek", "The Lion King", "Finding Nemo", "Toy Story"],
        correct: 1,
        explanation: "Bu sahne Disney'in klasiği The Lion King (Aslan Kral) filminde geçmektedir."
    },
    {
        image: "https://i.imgur.com/nqAAjWX.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["The Dark Knight", "Batman Begins", "Justice League", "Batman Returns"],
        correct: 0,
        explanation: "Bu sahne Christopher Nolan'ın The Dark Knight filminde geçmektedir."
    },
    {
        image: "https://i.imgur.com/XWBMvfw.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["Jurassic Park", "King Kong", "Godzilla", "Planet of Apes"],
        correct: 0,
        explanation: "Bu sahne Steven Spielberg'in Jurassic Park filminde geçmektedir."
    },
    {
        image: "https://i.imgur.com/LgO7Gv4.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["Forrest Gump", "Cast Away", "Philadelphia", "Big"],
        correct: 0,
        explanation: "Bu sahne Tom Hanks'in ünlü filmi Forrest Gump'ta geçmektedir."
    },
    {
        image: "https://i.imgur.com/iiM9LbH.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["Fast & Furious", "Rush", "Ford v Ferrari", "Gone in 60 Seconds"],
        correct: 0,
        explanation: "Bu sahne Fast & Furious film serisinden geçmektedir."
    },
    {
        image: "https://i.imgur.com/IM7vswT.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["The Godfather", "Scarface", "Goodfellas", "Casino"],
        correct: 0,
        explanation: "Bu sahne Francis Ford Coppola'nın efsane filmi The Godfather'da geçmektedir."
    },
    {
        image: "https://i.imgur.com/NxLFhKD.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["The Lord of the Rings", "Harry Potter", "Chronicles of Narnia", "Game of Thrones"],
        correct: 0,
        explanation: "Bu sahne The Lord of the Rings (Yüzüklerin Efendisi) film serisinden geçmektedir."
    },
    {
        image: "https://i.imgur.com/jvMSKR9.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["The Matrix", "Blade Runner", "Tron", "Minority Report"],
        correct: 0,
        explanation: "Bu sahne Wachowski kardeşlerin kült filmi The Matrix'ten geçmektedir."
    },

    // === DÖNER VE TÜRK YEMEKLERİ (10 SORU) ===
    {
        image: "https://i.imgur.com/x7mGJI1.jpg",
        question: "Döner kebap hangi şehirde icat edilmiştir?",
        options: ["İstanbul", "Ankara", "Bursa", "Erzurum"],
        correct: 2,
        explanation: "Döner kebap, Osmanlı döneminde Bursa'da İskender Efendi tarafından icat edilmiştir."
    },
    {
        image: "https://i.imgur.com/qxvLN0r.jpg",
        question: "İskender kebap hangi şehrin yöresel yemeğidir?",
        options: ["İstanbul", "İzmir", "Bursa", "Ankara"],
        correct: 2,
        explanation: "İskender kebap, Bursa'nın ünlü yöresel yemeğidir."
    },
    {
        image: "https://i.imgur.com/LdU2qMz.jpg",
        question: "Döner kebap geleneksel olarak hangi ekmeğin içinde servis edilir?",
        options: ["Pide", "Lavaş", "Pita", "Francala"],
        correct: 1,
        explanation: "Döner kebap geleneksel olarak ince lavaş ekmeğinin içinde servis edilir."
    },
    {
        image: "https://i.imgur.com/WTZyZIQ.jpg",
        question: "Türk mutfağının hangi yemeği dünyaca ünlüdür?",
        options: ["Manti", "Döner", "Baklava", "Hepsi"],
        correct: 3,
        explanation: "Döner, mantı ve baklava Türk mutfağının dünyaca ünlü yemekleridir."
    },
    {
        image: "https://i.imgur.com/LkqcvXC.jpg",
        question: "Döner yapımında geleneksel olarak hangi et kullanılır?",
        options: ["Sadece kuzu", "Sadece tavuk", "Kuzu ve dana", "Hepsi olabilir"],
        correct: 3,
        explanation: "Döner yapımında kuzu, dana ve tavuk eti kullanılabilir."
    },
    {
        image: "https://i.imgur.com/6o3OXzK.jpg",
        question: "Döner kebap dünyada hangi isimle bilinir?",
        options: ["Turkish Kebab", "Shawarma", "Gyros", "Doner Kebab"],
        correct: 3,
        explanation: "Döner kebap dünyada 'Doner Kebab' ismiyle bilinir ve sevilir."
    },
    {
        image: "https://i.imgur.com/hMCZMGc.jpg",
        question: "Adana kebap hangi şehrin yöresel yemeğidir?",
        options: ["Adana", "Urfa", "Gaziantep", "Mersin"],
        correct: 0,
        explanation: "Adana kebap, adını aldığı Adana şehrinin ünlü yöresel yemeğidir."
    },
    {
        image: "https://i.imgur.com/Ej5XZLR.jpg",
        question: "Baklava geleneksel olarak hangi tatlı türüne girer?",
        options: ["Hamur tatlısı", "Sütlü tatlı", "Şerbetli tatlı", "Meyve tatlısı"],
        correct: 2,
        explanation: "Baklava, şerbetli tatlılar kategorisine giren geleneksel bir Türk tatlısıdır."
    },
    {
        image: "https://i.imgur.com/y7MdlHs.jpg",
        question: "Mantı hangi mutfağın etkisiyle Türk mutfağına girmiştir?",
        options: ["Arap", "Çin", "İran", "Yunan"],
        correct: 1,
        explanation: "Mantı, Orta Asya Türkleri vasıtasıyla Çin mutfağının etkisiyle Türk mutfağına girmiştir."
    },
    {
        image: "https://i.imgur.com/dQZCVpw.jpg",
        question: "Lahmacun hangi bölgenin yöresel yemeğidir?",
        options: ["Güneydoğu Anadolu", "İç Anadolu", "Ege", "Karadeniz"],
        correct: 0,
        explanation: "Lahmacun, Güneydoğu Anadolu bölgesinin yöresel yemeğidir."
    },

    // === DİĞER KATEGORİLER (10 SORU) ===
    {
        image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&h=600&fit=crop",
        question: "Bu hayvan hangi kıtaya özgüdür?",
        options: ["Afrika", "Asya", "Avustralya", "Güney Amerika"],
        correct: 2,
        explanation: "Koala, Avustralya'ya özgü bir hayvandır."
    },
    {
        image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&h=600&fit=crop",
        question: "Bu hayvan hangi bölgede yaşar?",
        options: ["Arktik", "Antarktika", "Sahara", "Amazon"],
        correct: 0,
        explanation: "Kutup ayısı Arktik bölgesinde yaşar."
    },
    {
        image: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?w=800&h=600&fit=crop",
        question: "Bu hayvan hangi türe aittir?",
        options: ["Penguen", "Albatros", "Pelikan", "Martı"],
        correct: 0,
        explanation: "Bu hayvan penguen türündendir."
    },
    {
        image: "https://images.unsplash.com/photo-1570499911518-9b95b0599739?w=800&h=600&fit=crop",
        question: "Bu ünlü müzik grubu hangi ülkedendir?",
        options: ["İngiltere", "Amerika", "Avustralya", "Kanada"],
        correct: 0,
        explanation: "The Beatles, İngiltere'den çıkmış ünlü müzik grubudur."
    },
    {
        image: "https://images.unsplash.com/photo-1556132347-cecb9f2d8bd0?w=800&h=600&fit=crop",
        question: "Bu enstrüman hangi müzik türünde yaygın kullanılır?",
        options: ["Rock", "Jazz", "Klasik", "Folk"],
        correct: 2,
        explanation: "Keman, klasik müzikte en yaygın kullanılan enstrümanlardan biridir."
    },
    {
        image: "https://images.unsplash.com/photo-1626779252658-3eb72c94cb61?w=800&h=600&fit=crop",
        question: "Bu hayvan hangi habitatta yaşar?",
        options: ["Orman", "Çöl", "Okyanus", "Dağ"],
        correct: 2,
        explanation: "Yunus balıkları okyanuslarda yaşayan deniz memelileridir."
    },
    {
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=600&fit=crop",
        question: "Bu geleneksel içecek hangi ülkenin kültürüne aittir?",
        options: ["Rusya", "Polonya", "Ukrayna", "Çekya"],
        correct: 0,
        explanation: "Vodka, Rusya'nın geleneksel alkollü içeceğidir."
    },
    {
        image: "https://images.unsplash.com/photo-1541744573515-478d95a14b36?w=800&h=600&fit=crop",
        question: "Bu spor hangi ülkenin milli sporudur?",
        options: ["Hindistan", "Pakistan", "İngiltere", "Avustralya"],
        correct: 2,
        explanation: "Kriket, İngiltere'nin milli sporudur."
    },
    {
        image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=600&fit=crop",
        question: "Bu geleneksel dans hangi ülkenin kültürüne aittir?",
        options: ["İspanya", "Arjantin", "Brezilya", "Meksika"],
        correct: 1,
        explanation: "Tango, Arjantin'nin geleneksel dansıdır."
    },
    {
        image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=800&h=600&fit=crop",
        question: "Bu bitki hangi iklim bölgesinde yetişir?",
        options: ["Çöl", "Orman", "Tundra", "Step"],
        correct: 0,
        explanation: "Kaktüs, çöl ikliminde yetişen bir bitkidir."
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
    return shuffleArray(questionPool);
} 