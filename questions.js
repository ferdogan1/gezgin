// Dünya Gezgini - Soru Havuzu
// Her soru: görsel URL, soru metni, 4 seçenek, doğru cevap indexi

const questionPool = [
    // === DÜNYA COĞRAFYA & ÜNLÜ YAPILAR (10 SORU) ===
    {
        image: "./search_images/DAqIPzYHpmMh.jpg",
        question: "Bu ünlü yapı hangi ülkede bulunuyor?",
        options: ["Fransa", "İtalya", "İspanya", "Yunanistan"],
        correct: 0,
        explanation: "Eyfel Kulesi, Paris'in ve Fransa'nın en ünlü simgelerinden biridir."
    },
    {
        image: "./search_images/pDaRiuqyaC6x.jpg",
        question: "Bu antik yapı hangi şehirde yer alır?",
        options: ["Atina", "Roma", "İstanbul", "Kahire"],
        correct: 1,
        explanation: "Kolezyum, Roma'nın en ünlü antik yapılarından biridir."
    },
    {
        image: "./search_images/qYrf8q8wB4GC.jpg",
        question: "Bu ünlü heykel hangi şehirde bulunuyor?",
        options: ["New York", "Los Angeles", "Washington", "Boston"],
        correct: 0,
        explanation: "Özgürlük Heykeli, New York'ta Liberty Island'da yer alır."
    },
    {
        image: "./search_images/H3d5vbZGE4bV.jpg",
        question: "Bu ünlü Big Ben saat kulesi hangi şehirdedir?",
        options: ["Dublin", "Edinburgh", "Londra", "Manchester"],
        correct: 2,
        explanation: "Big Ben, Londra'nın Westminster semtinde yer alan ünlü saat kulesidir."
    },
    {
        image: "./search_images/OCU8raJAHp9A.jpg",
        question: "Bu saray hangi ülkenin başkentinde bulunuyor?",
        options: ["Japonya", "Çin", "Tayland", "Vietnam"],
        correct: 0,
        explanation: "Bu Japon sarayı, Tokyo'da bulunmaktadır."
    },
    {
        image: "./search_images/PRJLXSIMI75V.jpeg",
        question: "Taj Mahal hangi ülkede bulunmaktadır?",
        options: ["Hindistan", "Pakistan", "Nepal", "Bangladeş"],
        correct: 0,
        explanation: "Taj Mahal, Hindistan'ın Agra şehrinde bulunan muhteşem bir anıt mezardır."
    },
    {
        image: "./search_images/5nQQF2U0GxpV.jpg",
        question: "Pisa Kulesi hangi ülkede bulunur?",
        options: ["İtalya", "Fransa", "İspanya", "Portekiz"],
        correct: 0,
        explanation: "Pisa Kulesi, İtalya'nın Pisa şehrinde yer alan eğik yapısıyla ünlü bir kuledir."
    },
    {
        image: "./search_images/sT4yrgAmsAA6.jpg",
        question: "Sagrada Familia kilisesi hangi şehirdedir?",
        options: ["Madrid", "Barselona", "Sevilla", "Valencia"],
        correct: 1,
        explanation: "Sagrada Familia, İspanya'nın Barselona şehrinde yer alan, Gaudi'nin tasarladığı ünlü bir bazilikadır."
    },
    {
        image: "./search_images/rEyvuxECF6jQ.jpg",
        question: "Kızıl Meydan hangi şehirde bulunur?",
        options: ["Moskova", "St. Petersburg", "Kiev", "Minsk"],
        correct: 0,
        explanation: "Kızıl Meydan, Rusya'nın başkenti Moskova'da yer alan tarihi bir meydandır."
    },
    {
        image: "./search_images/GXScVZiBA8cH.jpg",
        question: "Büyük Çin Seddi'nin toplam uzunluğu yaklaşık ne kadardır?",
        options: ["Ölçmedim ki..", "8.800 km", "12.000 km", "21.000 km"],
        correct: 1,
        explanation: "Büyük Çin Seddi'nin toplam uzunluğu yaklaşık 8.800 kilometredir."
    },

    // === TÜRK FİLM SAHNELERİ (10 SORU) ===
    {
        image: "https://pbs.twimg.com/media/GScl3PUW8AA1Cwj?format=jpg&name=large",
        question: "GORA filminde Komutan Logar'ın babası Türkiye'de hangi şehri ziyaret etmiştir?",
        options: ["Aksaray", "Kayseri", "Sakarya", "Ankara"],
        correct: 0,
        explanation: "GORA filminde Komutan Logar'ın babası Aksaray'a sürgün edilmişti."
    },
    {
        image: "https://seyler.ekstat.com/img/max/800/a/aIMnL8SO1WxhjLDO-637081169892111655.jpg",
        question: "Bu sahne hangi Türk filminde geçmektedir?",
        options: ["Hababam Sınıfı", "Neşeli Günler", "Tosun Paşa", "Süt Kardeşler"],
        correct: 2,
        explanation: "Bu sahne Kemal Sunal'ın ünlü filmi Tosun Paşa'da geçmektedir."
    },
    {
        image: "https://pbs.twimg.com/media/ElC41v_X0AUKYMj.jpg",
        question: "Bu sahne hangi Türk filminde geçmektedir?",
        options: ["G.O.R.A", "A.R.O.G", "Yahşi Batı", "Vizontele"],
        correct: 0,
        explanation: "Bu sahne Cem Yılmaz'ın ünlü filmi G.O.R.A'da geçmektedir."
    },
    {
        image: "https://habervakticom.teimg.com/crop/1280x720/habervakti-com/uploads/2022/08/babam-ve-oglum.jpg",
        question: "Bu sahne hangi Türk filminde geçmektedir?",
        options: ["Babam ve Oğlum", "Mucize", "Aile Arasında", "Organize İşler"],
        correct: 0,
        explanation: "Bu sahne Çağan Irmak'ın ünlü filmi Babam ve Oğlum'da geçmektedir."
    },
    {
        image: "https://img.piri.net/mnresize/720/-/piri/upload/3/2024/1/31/ab231ee6-dogu-esrefoglu-2.jpg",
        question: "Bu sahne hangi Türk dizisinde geçmektedir?",
        options: ["Kurtlar Vadisi", "Ezel", "Behzat Ç.", "Leyla ile Mecnun"],
        correct: 0,
        explanation: "Bu sahne Türk diziler tarihinin efsanesi Kurtlar Vadisi'nde geçmektedir."
    },
    {
        image: "./search_images/PHOTO-2023-10-28-14-54-26.jpg",
        question: "Resimdeki yakışıklı kimdir?",
        options: ["Gürkan Uygun", "Kıvanç Tatlıtuğ", "Enes Kanar", "Çağatay Ulusoy"],
        correct: 0,
        explanation: "😉"
    },
    {
        image: "https://149572216.v2.pressablecdn.com/wp-content/uploads/2019/03/dirilis-ertugrul-un-final-tarihi-belli-oldu-ertugrul-un-olumu-boyle-olacak-1-728x410.jpg",
        question: "Bu sahne hangi türk dizisinde geçmektedir?",
        options: ["Aşk-ı Memnu", "Muhteşem Yüzyıl", "Diriliş Ertuğrul", "Kurtlar Vadisi"],
        correct: 2,
        explanation: "Bu sahne TRT'nin popüler dizisi Diriliş Ertuğrul'da geçmektedir."
    },
    {
        image: "https://i.pinimg.com/736x/0b/6b/b4/0b6bb44b8f24e67718aa170d4f659d9f.jpg",
        question: "Bu sahne hangi türk dizisinde geçmektedir?",
        options: ["Ezel", "Behzat Ç.", "Leyla ile Mecnun", "Kardeş Payı"],
        correct: 2,
        explanation: "Bu sahne Ali Atay'ın yazdığı efsane komedi Leyla ile Mecnun'da geçmektedir."
    },
    {
        image: "./search_images/PHOTO-2024-05-24-16-29-28.jpg",
        question: "Bu ekibin en sevdiği yemek?",
        options: ["Döner", "Sushi", "Cağ", "Hatay Çorbası (Döneri(!))"],
        correct: 2,
        explanation: "BLUE TEAM DAY!! 😉"
    },
    {
        image: "https://pasadacomtr.teimg.com/crop/1280x720/pasada-com-tr/uploads/2024/05/manset-6njvjovj-02.jpg",
        question: "Bu sahne hangi Türk filminde geçmektedir?",
        options: ["Selvi Boylum Al Yazmalım", "Çöpçüler Kralı", "Arabesk", "Züğürt Ağa"],
        correct: 0,
        explanation: "Bu sahne Türk sinemasının klasiklerinden 'Selvi Boylum Al Yazmalım' filminde geçmektedir."
    },

    // === DÜNYA FİLM SAHNELERİ (10 SORU) ===
    {
        image: "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["Star Wars", "Star Trek", "Guardians of Galaxy", "Interstellar"],
        correct: 0,
        explanation: "Bu sahne Star Wars film serisinden geçmektedir."
    },
    {
        image: "https://kbjournal.org/sites/default/files/image8-thames.jpeg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["Titanic", "Avatar", "Inception", "The Matrix"],
        correct: 0,
        explanation: "Bu sahne James Cameron'ın efsane filmi Titanic'te geçmektedir."
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNTQxNzU4NTY2OF5BMl5BanBnXkFtZTcwNzQ2NTI3Ng@@._V1_.jpg",
        question: "Bu sahne hangi animasyon filminde geçmektedir?",
        options: ["Shrek", "The Lion King", "Finding Nemo", "Toy Story"],
        correct: 1,
        explanation: "Bu sahne Disney'in klasiği The Lion King (Aslan Kral) filminde geçmektedir."
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BMjA5ODU3NTI0Ml5BMl5BanBnXkFtZTcwODczMTk2Mw@@._V1_.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["The Dark Knight", "Batman Begins", "Justice League", "Batman Returns"],
        correct: 0,
        explanation: "Bu sahne Christopher Nolan'ın The Dark Knight filminde geçmektedir."
    },
    {
        image: "https://miro.medium.com/v2/resize:fit:1400/1*h3FJ0YsaCz7VB3KdYeUWmQ.png",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["Jurassic Park", "King Kong", "Godzilla", "Planet of Apes"],
        correct: 0,
        explanation: "Bu sahne Steven Spielberg'in Jurassic Park filminde geçmektedir."
    },
    {
        image: "https://thoughtcatalog.com/wp-content/uploads/2024/07/Forrest-Gump-Lessons.jpg?w=768&h=768&crop=1",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["Forrest Gump", "Cast Away", "Philadelphia", "Big"],
        correct: 0,
        explanation: "Bu sahne Tom Hanks'in ünlü filmi Forrest Gump'ta geçmektedir."
    },
    {
        image: "https://lamag.com/.image/t_share/MTk3NTU2MTE0MDMxODQ3MTA2/bobsmarketcollage2.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["Fast & Furious", "Rush", "Ford v Ferrari", "Gone in 60 Seconds"],
        correct: 0,
        explanation: "Bu sahne Fast & Furious film serisinden geçmektedir."
    },
    {
        image: "https://cdn.prod.website-files.com/610c5007d3b7ee36cc3e07c1/64113710b99bf0d4806f8d01_al-pacino-sits-in-a-chair-in-a-scene-from-the-film-the-news-photo-1635770483.jpeg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["The Godfather", "Scarface", "Goodfellas", "Casino"],
        correct: 0,
        explanation: "Bu sahne Francis Ford Coppola'nın efsane filmi The Godfather'da geçmektedir."
    },
    {
        image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/08/council-of-elrond-in-the-lord-of-the-rings.jpg",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["The Lord of the Rings", "Harry Potter", "Chronicles of Narnia", "Game of Thrones"],
        correct: 0,
        explanation: "Bu sahne The Lord of the Rings (Yüzüklerin Efendisi) film serisinden geçmektedir."
    },
    {
        image: "https://preview.redd.it/mchinxy4m4i31.jpg?width=640&crop=smart&auto=webp&s=3cb27f9b122abd7698cffa020b74836a474826f3",
        question: "Bu sahne hangi filmde geçmektedir?",
        options: ["The Matrix", "Blade Runner", "Tron", "Minority Report"],
        correct: 0,
        explanation: "Bu sahne Wachowski kardeşlerin kült filmi The Matrix'ten geçmektedir."
    },

    // === DÖNER VE TÜRK YEMEKLERİ (10 SORU) ===
    {
        image: "https://images.deliveryhero.io/image/fd-tr/LH/fmus-listing.jpg",
        question: "Döner kebap hangi şehirde icat edilmiştir?",
        options: ["İstanbul", "Ankara", "Bursa", "Erzurum"],
        correct: 2,
        explanation: "Döner kebap, Osmanlı döneminde Bursa'da İskender Efendi tarafından icat edilmiştir."
    },
    {
        image: "https://i.lezzet.com.tr/images-xxlarge-recipe/homemade-iskender-kebab-f33fcb75-16b0-46eb-b16c-c7d56512916d.jpg",
        question: "İskender kebap hangi şehrin yöresel yemeğidir?",
        options: ["İstanbul", "İzmir", "Bursa", "Ankara"],
        correct: 2,
        explanation: "İskender kebap, Bursa'nın ünlü yöresel yemeğidir."
    },
    {
        image: "https://media.istockphoto.com/id/499844279/tr/foto%C4%9Fraf/cook-preparing-a-turkish-doner-kebab.jpg?s=612x612&w=0&k=20&c=kgYD6lPnrdQgnVWWbn0e9QHGZkp5KuIlSzrNSKwgpSM=",
        question: "Döner kebap geleneksel olarak hangi ekmeğin içinde servis edilir?",
        options: ["Pide", "Lavaş", "Pita", "Francala"],
        correct: 1,
        explanation: "Döner kebap geleneksel olarak ince lavaş ekmeğinin içinde servis edilir."
    },
    {
        image: "https://cdnp.flypgs.com/files/Sehirler-long-tail/istanbul/istanbulda-nerede-yenir.jpg",
        question: "Türk mutfağının hangi yemeği dünyaca ünlüdür?",
        options: ["Manti", "Döner", "Baklava", "Hepsi"],
        correct: 3,
        explanation: "Döner, mantı ve baklava Türk mutfağının dünyaca ünlü yemekleridir."
    },
    {
        image: "https://www.trendsetteristanbul.com/wp-content/uploads/2016/02/hac%C4%B1bey-et.jpg",
        question: "Döner yapımında geleneksel olarak hangi et kullanılır?",
        options: ["Sadece kuzu", "Sadece tavuk", "Kuzu ve dana", "Hepsi olabilir"],
        correct: 3,
        explanation: "Döner yapımında kuzu, dana ve tavuk eti kullanılabilir."
    },
    {
        image: "./search_images/PHOTO-2025-04-22-14-52-16.jpg",
        question: "Bu fotoğraf nerede çekilmiştir?",
        options: ["ATLANTIS FAN KLUP", "Suadiye WellDone", "AkasyaAVM", "Picus Ofis"],
        correct: 0,
        explanation: "Osman Can bilardo öğreniyor 😉"
    },
    {
        image: "https://iasbh.tmgrup.com.tr/c9f465/650/344/0/71/1152/675?u=https://isbh.tmgrup.com.tr/sbh/2020/03/05/en-harika-adana-kebap-tarifi-adana-kebap-nasil-yapilir-1583404717106.jpg",
        question: "Adana kebap hangi şehrin yöresel yemeğidir?",
        options: ["Adana", "Urfa", "Gaziantep", "Mersin"],
        correct: 0,
        explanation: "Adana kebap, adını aldığı Adana şehrinin ünlü yöresel yemeğidir."
    },
    {
        image: "./search_images/PHOTO-2022-12-09-21-22-04.jpg",
        question: "Görselde hangi duygu betimlenmiştir?",
        options: ["Korku", "Motivasyon", "Emerging Threat", "Daily"],
        correct: 2,
        explanation: "🌹"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1moNX6UyPVMBgaGMtoJTuLiIy-TJG2e_rA&s",
        question: "Mantı hangi mutfağın etkisiyle Türk mutfağına girmiştir?",
        options: ["Arap", "Çin", "İran", "Yunan"],
        correct: 1,
        explanation: "Mantı, Orta Asya Türkleri vasıtasıyla Çin mutfağının etkisiyle Türk mutfağına girmiştir."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82aZAsppgoOWRH0iADyPDbDfQrX4amk-zmw&s",
        question: "Lahmacun hangi bölgenin yöresel yemeğidir?",
        options: ["Güneydoğu Anadolu", "İç Anadolu", "Ege", "Karadeniz"],
        correct: 0,
        explanation: "Lahmacun, Güneydoğu Anadolu bölgesinin yöresel yemeğidir."
    },

    // === DİĞER KATEGORİLER (10 SORU) ===
    {
        image: "./search_images/qmUW12NmobmE.jpg",
        options: ["Afrika", "Asya", "Avustralya", "Güney Amerika"],
        correct: 2,
        explanation: "Koala, Avustralya'ya özgü bir hayvandır."
    },
    {
        image: "./search_images/mMgGAMbZ8xAq.jpg",
        options: ["Arktik", "Antarktika", "Sahara", "Amazon"],
        correct: 0,
        explanation: "Kutup ayısı Arktik bölgesinde yaşar."
    },
    {
        image: "./search_images/Ydb93TaQ28cD.jpg",
        question: "Bu hayvan hangi türe aittir?",
        options: ["Penguen", "Albatros", "Pelikan", "Martı"],
        correct: 0,
        explanation: "Bu hayvan penguen türündendir."
    },
    {
        image: "./search_images/BCpyb7asJcUd.jpg",
        question: "Bu ünlü müzik grubu hangi ülkedendir?",
        options: ["İngiltere", "Amerika", "Avustralya", "Kanada"],
        correct: 0,
        explanation: "The Beatles, İngiltere'den çıkmış ünlü müzik grubudur."
    },
    {
        image: "./search_images/5KmDzIJfuNmc.jpg",
        question: "Bu enstrüman hangi müzik türünde yaygın kullanılır?",
        options: ["Rock", "Jazz", "Klasik", "Folk"],
        correct: 2,
        explanation: "Keman, klasik müzikte en yaygın kullanılan enstrümanlardan biridir."
    },
    {
        image: "./search_images/JqlQCz4xLYaF.jpg",
        question: "Bu hayvan hangi habitatta yaşar?",
        options: ["Orman", "Çöl", "Okyanus", "Dağ"],
        correct: 2,
        explanation: "Yunus balıkları okyanuslarda yaşayan deniz memelileridir."
    },
    {
        image: "./search_images/PCwa84OiqqsF.png",
        question: "Bu geleneksel içecek hangi ülkenin kültürüne aittir?",
        options: ["Rusya", "Polonya", "Ukrayna", "Çekya"],
        correct: 0,
        explanation: "Vodka, Rusya'nın geleneksel alkollü içeceğidir."
    },
    {
        image: "./search_images/7IYKwmdE2AEk.jpg",
        question: "Bu spor hangi ülkenin milli sporudur?",
        options: ["Hindistan", "Pakistan", "İngiltere", "Avustralya"],
        correct: 2,
        explanation: "Kriket, İngiltere'nin milli sporudur."
    },
    {
        image: "./search_images/RpNxCMC69chY.jpg",
        question: "Bu geleneksel dans hangi ülkenin kültürüne aittir?",
        options: ["İspanya", "Arjantin", "Brezilya", "Meksika"],
        correct: 1,
        explanation: "Tango, Arjantin'nin geleneksel dansıdır."
    },
    {
        image: "./search_images/5HsybYJS9VMs.jpg",
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