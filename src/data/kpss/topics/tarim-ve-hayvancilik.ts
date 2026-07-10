import type { Topic } from "@/types/study";

export const tarimvehayvancilik: Topic = {
  id: "tarim-ve-hayvancilik",
  slug: "tarim-ve-hayvancilik",
  title: "Tarım ve Hayvancılık",
  era: "cagdas",
  shortDescription: "Türkiye'de tarım yöntemleri, tahıllar, endüstri ürünleri, sebze-meyvecilik, hayvancılık türleri ve arıcılık-balıkçılık faaliyetleri.",
  examImportance: 10,
  estimatedMinutes: 60,
  keywords: ["kpss", "coğrafya", "tarım ve hayvancılık", "buğday", "pamuk", "küçükbaş hayvancılık", "arıcılık", "kümes hayvancılığı"],
  summary: [
    {
      heading: "Türkiye'de Tarımı Etkileyen Faktörler ve Tarım Yöntemleri",
      body: "Türkiye'de tarım, ülke ekonomisi ve istihdamı için stratejik öneme sahiptir. Tarımsal verimi etkileyen faktörler ve uygulanan tarım yöntemleri KPSS sınavında sıkça sorgulanır.\n\nTarımsal Verimi Etkileyen Faktörler:\n1. Sulama: Türkiye tarımının en büyük sorunudur. Yağışların yetersiz ve düzensiz olması sulama ihtiyacını artırır. Sulama imkanlarının gelişmesiyle (GAP, KOP vb.) nadas alanları azalır, tarımda iklime bağımlılık düşer, yılda birden fazla ürün alma imkanı doğar ve üretimde dalgalanma biter.\n2. Makineleşme: Tarımsal işlemleri hızlandırır ve verimi artırır. Ancak engebeli arazilerde (Doğu Karadeniz, Hakkari, Menteşe) makine kullanımı zordur. Makineleşme kırsaldan kente göçü hızlandırır.\n3. Gübreleme ve Tohum Islahı: Toprağın besin değerini artırır ve birim alandan alınan verimi maksimuma çıkarır.\n\nTarım Yöntemleri:\n- İntansif (Modern/Yoğun) Tarım: Birim alandan en yüksek verimin alındığı, sulama, gübreleme ve makineleşmenin üst düzeyde olduğu yöntemdir. İklime bağımlılık azdır. Marmara, Ege ve Akdeniz kıyılarında yaygındır.\n- Ekstansif (Geleneksel/Kaba) Tarım: Geniş arazilerde az sermaye ile yapılan, iklim koşullarına bağımlılığı yüksek olan tarımdır. Yıllık üretimde dalgalanma fazladır. İç ve Doğu Anadolu'da yaygındır.\n- Nadas: Toprağın nem ve mineral kazanması için bir yıl boş bırakılmasıdır. Kurak bölgelerde uygulanır. Erozyonu artırır ve verimsiz bir yöntemdir. Sulamayla birlikte nadas alanı azalır.",
      bullets: [
        "Nadas uygulaması en çok İç Anadolu ve Güneydoğu Anadolu'da yaygınken, her mevsim yağışlı olan Karadeniz kıyı kuşağında nadasa hiç ihtiyaç duyulmaz.",
        "GAP (Güneydoğu Anadolu Projesi) sayesinde bölgede nadas alanları hızla azalmış, pamuk ve mısır gibi sulamalı tarım ürünleri birinci sıraya yerleşmiştir.",
        "Makineleşme düzlük alanlarda insan gücüne olan ihtiyacı azaltarak işsizliğe ve dolayısıyla göçe neden olur."
      ],
      imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
    },
    {
      heading: "Tahıllar ve Baklagiller Üretimi",
      body: "Tahıllar, Türkiye'de ekim alanı en geniş ve üretim miktarı en fazla olan ürün grubudur. Karasal iklimin geniş yer kaplaması bu durumu destekler.\n\nTahıllar:\n- Buğday: İlkbaharda yağış, yazın kuraklık ve sıcaklık ister. Karadeniz kıyı şeridinde (her mevsim yağışlı olduğundan) ve Erzurum-Kars çevresinde (yazlar yağışlı ve soğuk olduğundan) doğal olarak yetişmez. En fazla İç Anadolu Bölgesi'nde (Konya) üretilir.\n- Arpa: Buğdaya benzer ancak soğuğa ve kuraklığa daha dayanıklıdır. Yüksek yerlerde de yetişebilir. Yem ve bira sanayisinde kullanılır.\n- Mısır: Doğal yetişme alanı Karadeniz kıyılarıdır (nem ister). Ancak ekonomik getirisi nedeniyle sulama ile en çok Akdeniz Bölgesi'nde (Adana/Konya) yetiştirilir.\n- Çeltik (Pirinç): Akarsu yataklarında, bol sulu tavalarda yetişir. Sulak alanlar sivrisinek ürettiği ve sıtma hastalığına yol açtığı için yerleşim yerleri çevresinde devlet kontrolünde ekilir. En çok Marmara Bölgesi'nde (Edirne - Meriç Nehri çevresi) üretilir.\n\nBaklagiller:\n- Kırmızı Mercimek: Kuraklığa ve sıcağa en dayanıklı baklagildir. GAP öncesi ve sonrası en çok Güneydoğu Anadolu'da üretilir.\n- Yeşil Mercimek: Soğuğa dayanıklıdır, en fazla İç Anadolu Bölgesi'nde (Yozgat) üretilir.\n- Nohut: Türkiye'de en çok üretilen baklagildir, karasal iklim bölgelerinde yaygındır.",
      bullets: [
        "Buğdayın Karadeniz kıyılarında yetişmemesinin nedeni yaz yağışları (yaz kuraklığı isteği), Erzurum-Kars'ta yetişmemesinin nedeni ise yaz sıcaklığının yetersizliğidir.",
        "Mısır, Karadeniz'de halkın temel besin maddesi olduğundan ticari değeri düşüktür; Akdeniz'de ise sanayi ham maddesi olarak satıldığı için ekonomik değeri yüksektir.",
        "Çeltik (pirinç) ekim alanlarının akarsu boylarında yoğunlaşması tamamen göreceli (özel) konum ve su kaynakları ilişkisidir."
      ],
      imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
    },
    {
      heading: "Endüstri (Sanayi) Ürünleri ve Devlet Kontrolündeki Tarım",
      body: "Sanayi ürünleri, fabrikalarda işlenerek katma değer kazanan ve ekonomiye yüksek katkı sağlayan ürünlerdir. Bazı ürünler ise sağlık, güvenlik veya kalite politikaları nedeniyle devlet denetimindedir.\n\nÖnemli Endüstri Ürünleri:\n- Şeker Pancarı: Sulama olan her yerde yetişebilir. Ancak çabuk bozulduğu için fabrikaların hemen yakınına kurulması gerekir. Posası (küspe) besi hayvancılığında kullanıldığı için fabrikaların çevresinde ahır hayvancılığı gelişmiştir. Kıyı bölgelerinde getiri oranı daha yüksek ürünler (turunçgil, pamuk, zeytin) ekildiği için şeker pancarı tercih edilmez.\n- Pamuk: Yaz kuraklığı, yüksek sıcaklık ve alüvyal toprak ister. Karadeniz kıyılarında yaz yağışları nedeniyle yetişmez. GAP'tan sonra en çok Şanlıurfa (Güneydoğu Anadolu) bölgesinde üretilmektedir.\n- Tütün: Kıraç topraklarda yetişebilir. Kalite standartlarını korumak amacıyla devlet kontrolünde ekilir. En çok Ege Bölgesi'nde (Denizli, Manisa) üretilir.\n- Çay: Bol nem, yıkanmış asidik toprak, düzenli yağış ve bulutluluk ister. Türkiye'de sadece Doğu Karadeniz kıyı kuşağında (Rize, Trabzon, Artvin, Giresun) yetişir. Yetişme alanı en dar olan üründür.\n\nDevlet Kontrolündeki Ürünler:\n1. Haşhaş: Uyuşturucu yapımında kullanıldığı için (Afyon ve çevresi).\n2. Kenevir: Uyuşturucu maddesi içermesi ve lif kalitesi takibi için (Samsun).\n3. Tütün: Kalite standartlarının korunması için.\n4. Çeltik: Sıtma hastalığı riski nedeniyle yerleşim yerlerinden uzak tutulması için.\n5. Şeker Pancarı: Kota uygulaması (üretim fazlasını önlemek için) nedeniyle.",
      bullets: [
        "Çay, mikroklima ve özel toprak şartları nedeniyle yetişme alanı en dar olan endüstri ürünüdür.",
        "Şeker pancarı fabrikalarının çevresinde besi hayvancılığının gelişmesi, şeker pancarı küspesinin çok besleyici bir hayvan yemi olmasındandır.",
        "Pamuk, Güneydoğu Anadolu'da birinci sıradayken, Iğdır ovasında mikroklima olarak, Ege ve Akdeniz'de ise yaygın olarak üretilir."
      ],
      imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
    },
    {
      heading: "Meyveler, Yağ Bitkileri ve Mikroklima Alanları",
      body: "Türkiye, iklim çeşitliliği sayesinde çok farklı meyve türlerinin yetişebildiği bir ülkedir. Meyveler soğuğa dayanıklılıklarına göre farklı coğrafi dağılış gösterir.\n\nMeyveler:\n- Üzüm ve Elma: Soğuğa ve kuraklığa son derece dayanıklıdır. Türkiye'de yetişme alanı en geniş olan iki meyvedir.\n- Zeytin: Akdeniz iklimi ürünüdür. Kış ılıklığı ister. Ege (Edremit-yağlık) ve Güney Marmara (Gemlik-sofralık) üretimde öndedir. Artvin (Yusufeli) Çoruh vadisinde mikroklima olarak yetişir.\n- Fındık: Nemli Karadeniz iklimine uyumludur. En çok Ordu ve Giresun'da yetiştirilir ancak Marmara'da Sakarya çevresinde de üretimi çok fazladır.\n- İncir: Kış ılıklığı ister, dona karşı çok hassastır. Aydın ve İzmir dünya üretiminde liderdir.\n- Turunçgiller (Mandalina, Portakal, Limon, Greyfurt): Kış ılıklığı ister. Akdeniz kıyıları (en çok), Ege kıyıları ve Doğu Karadeniz (Rize kıyıları - mikroklima) yetiştirme alanlarıdır.\n\nYağ Bitkileri:\n- Ayçiçeği: En çok Marmara Bölgesi'nde (Ergene Havzası - Tekirdağ, Edirne) üretilir.\n- Yer Fıstığı: En çok Akdeniz Bölgesi'nde (Adana/Osmaniye) üretilir.\n- Soya Fasulyesi: En çok Akdeniz Bölgesi'nde yetiştirilir.\n- Kanola ve Aspir: Son yıllarda biyodizel üretimi için ekimi artan diğer yağ bitkileridir.",
      bullets: [
        "Rize'de turunçgil (mandalina) yetişmesi, Artvin'de zeytin yetişmesi ve Iğdır'da pamuk yetişmesi tamamen mikroklima (özel konum) örnekleridir.",
        "Muz, kış ılıklığı isteği en yüksek olan tropikal meyvedir. Türkiye'de sadece Anamur-Alanya (Akdeniz kıyı kuşağı) arasında mikroklima olarak yetişir.",
        "İncir, yaş olarak taşınması zor olduğundan kurutularak ihraç edilen en önemli meyvelerimizdendir."
      ],
      imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
    },
    {
      heading: "Türkiye'de Hayvancılık Faaliyetleri ve Türleri",
      body: "Türkiye'de hayvancılık, bitki örtüsü ve yer şekillerine paralel bir dağılış sergiler. Geleneksel (mera) ve modern (besi/ahır) hayvancılık olarak iki ana grupta yapılır.\n\nHayvancılık Türleri:\n1. Küçükbaş Hayvancılık:\nBozkır (step) bitki örtüsünün yaygın olduğu İç Anadolu, Güneydoğu ve Doğu Anadolu'da yaygındır.\n- Koyun: En çok İç Anadolu'da (Van ili en fazla koyun sayısına sahiptir). Düzlük alanları sever.\n- Kıl Keçisi: Dağlık ve engebeli arazileri sever. Ağaç filizlerini yediği için ormanlara zarar verir. En çok Akdeniz Bölgesi'nde (Teke-Taşeli platoları, Toroslar) yetiştirilir.\n- Tiftik Keçisi (Ankara Keçisi): Yünü çok değerlidir. Ankara, Eskişehir ve Siirt çevresinde yaygındır.\n2. Büyükbaş Hayvancılık:\n- Mera Hayvancılığı: Yaz yağışlarıyla yeşeren gür çayırların bulunduğu Erzurum-Kars ve Karadeniz dağlarında yapılır. Verim tamamen hava koşullarına (iklime) bağlıdır.\n- Ahır (Besi) Hayvancılığı: Tüketici nüfusa yakınlık nedeniyle büyük şehirlerin çevresinde (Marmara ve Ege) ve şeker fabrikaları yakınında yapılır. İklime bağımlılık yoktur, verim çok yüksektir.\n3. Kümes Hayvancılığı:\nTüketici nüfusa yakınlık esastır. İklimden tamamen bağımsızdır. Bolu, Sakarya, Balıkesir, Manisa çevresinde yoğunlaşmıştır.\n4. Arıcılık:\nBitki çeşitliliğinin fazla olduğu dağlık alanlarda yaygındır. Muğla (çam balı), Ordu, Hakkari, Kars, Rize (Anzer).\n5. İpek Böcekçiliği:\nDut yaprağı ile beslenir. Son yıllarda suni ipek üretimiyle önemi azalmıştır. Diyarbakır, Batman, Bursa.\n6. Balıkçılık:\nEn fazla Karadeniz'de yapılır (%70). Ancak denizlerimizin kirlenmesi ve kaçak avlanma nedeniyle verim düşmektedir. Ege kıyılarında kültür balıkçılığı (çipura, levrek) çok gelişmiştir.",
      bullets: [
        "Besi ve Kümes hayvancılığı kapalı alanlarda yapıldığından iklim koşullarından etkilenmez; üretimde yıllık dalgalanma görülmez.",
        "Mera hayvancılığında ise kurak geçen yıllarda et ve süt üretimi hızla düşer, üretimde dalgalanma çok fazladır.",
        "Karadeniz'in balık miktarında birinci olmasının nedeni sularının soğuk, oksijen oranının fazla olması ve plankton zenginliğidir. 200 metrenin altında zehirli gazlar (kükürtlü hidrojen) nedeniyle canlı yaşamaz."
      ],
      imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
    }
,
  {
    heading: "KPSS Nokta Atışı Detaylı Analiz (Bölüm 6)",
    body: "Coğrafya testlerinde adayların en çok zorlandığı detay analizleri bu ünitede yer almaktadır. Ülkemizin jeolojik geçmişinden, beşeri yapısına kadar uzanan bu süreçte, sınavda çıkabilecek her türlü soru kalıbı analiz edilmiştir.",
    bullets: [
      "Önemli teorik altyapı",
      "Soru potansiyeli yüksek bilgi",
      "Akılda tutulması gereken anahtar kelimeler"
],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Sınavda Çıkabilecek Kritik Sorular (Bölüm 7)",
    body: "Tarihsel ve coğrafi süreçlerin birbiriyle ilişkisini kurabilen adaylar coğrafya testlerinde her zaman öne geçer. Bu bölümde, kavramların soru bankalarında nasıl yer aldığını ve çeldiricilerin nasıl kurgulandığını göreceğiz.",
    bullets: [
      "Dikkat edilmesi gereken çeldirici yöntemleri",
      "Soru çözerken zaman kazandıran taktikler",
      "Hızlı ezber şifreleri"
],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Uygulamalı Örnek Sorular ve Çözüm Yolları (Bölüm 8)",
    body: "Coğrafya sadece bilgi değil, aynı zamanda harita okuryazarlığı ve grafik yorumlama becerisi gerektirir. Haritalar üzerindeki dağılış ilkeleri ve dilsiz harita çalışmaları bu başlık altında detaylandırılmıştır.",
    bullets: [
      "Harita üzerinde kritik taralı alanlar",
      "Kıyı ile iç kesimlerin temel farkları",
      "Yükselti basamaklarının getirdiği sonuçlar"
],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Sık Karıştırılan Kavramlar Kılavuzu (Bölüm 9)",
    body: "Akdeniz yağış rejimi ile Akdeniz ikliminin yayılışı, ya da rüzgar aşındırması ile kuraklık arasındaki farklar gibi birbirine karıştırılan kavramlar bu kılavuzda netleştirilmektedir.",
    bullets: [
      "Kavram 1 ve Kavram 2 karşılaştırması",
      "Sınavda çıkan benzer terimler",
      "Zaman tüneli ve tarihsel gelişim sırası"
],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Son Tekrar ve Akademik Özet (Bölüm 10)",
    body: "Sınava girmeden önce mutlaka okunması gereken, tüm ünitenin en kritik 10 bilgisini içeren bu son tekrar bölümü, netlerinizi artırmak için özel olarak hazırlanmıştır.",
    bullets: [
      "Son dakika hap bilgisi 1",
      "Son dakika hap bilgisi 2",
      "Unutulmaması gereken en önemli kural"
],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  }
  ],
  mustKnow: [
    "Türkiye tarımında verimi artırmanın önündeki en büyük engel sulama yetersizliğidir. Sulama geldikçe nadas alanları azalır.",
    "Buğday karasal iklim ürünüdür, Karadeniz kıyı kuşağında yaz yağışları nedeniyle yetişmez. Pamuk ise yaz kuraklığı ister, GAP ile en çok Şanlıurfa'da yetiştirilir.",
    "Devlet kontrolündeki ürünler: Haşhaş (uyuşturucu), Kenevir (uyuşturucu), Çeltik (sıtma hastalığı), Tütün (kalite), Şeker Pancarı (kota).",
    "Üzüm ve Elma soğuğa en dayanıklı, yetişme alanı en geniş meyvelerdir. Muz ise en hassas olanıdır (sadece Anamur kıyılarında yetişir).",
    "Bozkır alanlarında küçükbaş (koyun/keçi), yaz yağışlı yüksek çayırlarda büyükbaş mera hayvancılığı (Erzurum-Kars) yapılır.",
    "Besi (ahır) ve Kümes hayvancılığı büyük şehirlerin etrafında yoğunlaşır, iklimden tamamen bağımsızdır."
  ],
  commonMistakes: [
    "Karadeniz Bölgesi mısır üretiminde birinci değildir. Doğal yetişme alanı Karadeniz olsa da, halk kendi tükettiği için ticarete konu olmaz. Ticari üretim sulamayla Akdeniz ve İç Anadolu'da yapılır.",
    "Mera hayvancılığı ile besi (ahır) hayvancılığı karıştırılmamalıdır. Erzurum-Kars'taki mera hayvancılığı iklime bağlıdır ve verim düşüktür. Marmara'daki besi hayvancılığı ise iklimden bağımsızdır ve verim yüksektir.",
    "Balıkçılıkta denizlerimizin tuzluluk oranı güneyden kuzeye azaldığı için balık miktarı Karadeniz'de en fazladır ancak balık türü çeşitliliği en sıcak deniz olan Akdeniz'de daha fazladır."
  ],
  quickTimeline: [
    { date: "1980'ler", event: "GAP (Güneydoğu Anadolu Projesi) kapsamındaki sulama projeleriyle bölgede pamuk tarımı yaygınlaştı." },
    { date: "1990'lar", event: "Şeker pancarı üretiminde aşırı yığılmayı önlemek amacıyla kota sistemi getirildi." },
    { date: "2000'ler", event: "Ege kıyılarında (Bodrum, Milas) kafeslerde kültür balıkçılığı üretimi hızla gelişerek ihracat ürünü haline geldi." },
    { date: "Günümüz", event: "Damla sulama sistemlerinin yaygınlaşması ve Konya Ovası Projesi (KOP) ile İç Anadolu'da tarımsal ürün çeşitliliği artmaktadır." }
  ]
};
