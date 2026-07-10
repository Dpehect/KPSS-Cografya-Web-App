import type { Topic } from "@/types/study";

export const yersekilleri: Topic = {
  id: "yer-sekilleri",
  slug: "yer-sekilleri",
  title: "Türkiye'nin Yer Şekilleri",
  era: "cagdas",
  shortDescription: "Türkiye'nin dağları, ovaları, platoları, karstik şekilleri, jeolojik geçmişi ve dış kuvvetlerin etkileri.",
  examImportance: 10,
  estimatedMinutes: 60,
  keywords: ["kpss", "coğrafya", "türkiye'nin yer şekilleri", "dağlar", "platolar", "ovalar", "karstik şekiller", "dış kuvvetler"],
  summary: [
  {
    heading: "Jeolojik Geçmiş ve Türkiye'nin Oluşum Süreci",
    body: "Türkiye, genç oluşumlu ve tektonik olarak oldukça aktif bir ülkedir. Bu durum, arazisinin büyük bir kısmının yakın jeolojik zamanlarda (özellikle 3. ve 4. Jeolojik Zamanlar) oluşmuş olmasından kaynaklanır. I. Jeolojik Zaman'da Zonguldak taş kömürü yatakları ve masif araziler oluşmuştur. III. Jeolojik Zaman'da ise kıvrım dağlarımız (Kuzey Anadolu Dağları ve Toroslar) yükselmiş, linyit, petrol, bor ve tuz yatakları oluşmuştur. IV. Jeolojik Zaman'da ise Anadolu toptan yükselmiş (epirojenez), Ege Denizi, İstanbul ve Çanakkale boğazları oluşmuştur.",
    bullets: [
      "Türkiye'nin genç oluşumlu olmasının kanıtları: Sıcak su kaynakları (jeotermal), deprem riskinin yüksek olması, akarsuların aşındırma gücünün fazla olması ve ortalama yükseltinin yüksek olmasıdır.",
      "Zonguldak'taki taş kömürü I. Jeolojik Zaman kökenliyken; linyit, tuz, bor ve petrol yatakları III. Jeolojik Zaman ürünüdir.",
      "Boğazlar, Ege Denizi ve Anadolu'nun toptan yükselmesi (epirojenik hareketler) IV. Jeolojik Zaman gelişmeleridir."
],
    imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
  },
  {
    heading: "Oluşumlarına Göre Dağlar (Kıvrım, Kırık, Volkanik)",
    body: "Türkiye'deki dağlar orojenik (dağ oluşumu) hareketler ve volkanizma sonucunda şekillenmiştir. Kıvrım dağları, esnek tortul tabakaların yan basınçlarla sıkışıp bükülmesi sonucu antiklinal ve senklinal yapılarıyla oluşur (Kuzey Anadolu Dağları ve Toroslar). Kırık dağları ise sert tortul tabakaların kırılmasıyla horst ve graben sistemleri oluşturur (Kaz, Madra, Yunt, Bozdağlar, Aydın, Menteşe ve Amanoslar). Volkanik dağlar ise magmanın yeryüzüne çıkarak soğumasıyla hatlar şeklinde dizilmiştir (Erciyes, Ağrı, Süphan, Nemrut, Karacadağ vb.).",
    bullets: [
      "Ege grabenleri (çöküntü alanları): Edremit, Bakırçay, Gediz, Küçük Menderes, Büyük Menderes ovalarıdır. Akdeniz'deki Amik Ovası da grabendir.",
      "Kıvrım dağları Türkiye'deki en yaygın dağ tipidir. Kuzey-güney yönlü sıkışma nedeniyle dağlarımızın büyük çoğunluğu doğu-batı uzanışlıdır.",
      "Güneydoğu Anadolu'daki Karacadağ, lavlarının akıcı olması nedeniyle çok geniş bir alana yayılmış ve 'kalkan tipi volkan' özelliğine sahip tek dağımız olmuştur."
],
    imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
  },
  {
    heading: "Türkiye'nin Platoları ve Sınıflandırılması",
    body: "Plato; akarsular tarafından derince yarılmış, çevrelerine göre yüksekte bulunan geniş düzlüklerdir. Anadolu'nun toptan yükselmesi nedeniyle platolarımız geniş yer kaplar. İstanbul çevresindeki Çatalca-Kocaeli aşınım düzlüğü platosudur ve yükseltisi en az olandır. Akdeniz'deki Teke ve Taşeli platoları karstik erime düzlükleridir ve nüfus çok seyrektir. Doğu Anadolu'daki Erzurum-Kars ve Ardahan platoları volkanik lav platolarıdır ve yaz yağışlarıyla büyükbaş mera hayvancılığına elverişlidir. İç Anadolu'daki Cihanbeyli, Haymana, Obruk ve Bozok ise tabaka düzlüğü platolarıdır.",
    bullets: [
      "Yükseltisi en fazla olan plato Erzurum-Kars, en az olan ise Çatalca-Kocaeli Platosu'dur.",
      "Teke ve Taşeli karstik yapısı nedeniyle su tutma kapasitesi düşük, tarıma elverişsiz ve nüfusun en seyrek olduğu platolardır.",
      "İç Anadolu platoları (Cihanbeyli, Haymana vb.) Türkiye'nin tahıl ambarı konumundadır."
],
    imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
  },
  {
    heading: "Ovalar ve Oluşum Türleri (Delta, Tektonik, Karstik)",
    body: "Çevresine göre alçakta yer alan, akarsu alüvyonlarıyla kaplı düzlüklere ova denir. Delta ovaları, akarsuların taşıdığı malzemeleri sığ deniz kıyılarında biriktirmesiyle oluşur (Çukurova, Bafra, Çarşamba, Silifke). Karstik ovalar (polye), kireçli arazide karstik erimeyle oluşur ve TAKKEM (Tefenni, Acıpayam, Korkuteli, Kestel, Elmalı, Muğla) olarak şifrelenir. Tektonik ovalar ise fay hatlarındaki çökmelerle oluşur ve Türkiye'nin deprem riski yüksek olan en yaygın ova tipidir.",
    bullets: [
      "Çukurova, Türkiye'nin en büyük delta ovasıdır ve yılda birden fazla ürün alınabilen tarımsal merkezdir.",
      "Karstik ovalar (polye) karstik erime süreçleriyle oluştukları için genellikle Akdeniz Bölgesi'nde yoğunlaşmıştır.",
      "Tektonik ovalar fay hatlarına paralel uzanır, bu yüzden bu ovalarda deprem riski ve jeotermal kaynak potansiyeli çok yüksektir."
],
    imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
  },
  {
    heading: "Dış Kuvvetler: Akarsu Aşınım ve Birikim Şekilleri",
    body: "Türkiye'nin yer şekillerini biçimlendiren en etkili dış kuvvet akarsulardır. Akarsuların aşındırma şekilleri arasında derin V biçimli çentik vadiler, dağları yaran boğaz (geçit) vadiler, basamaklı kanyon vadiler (karstik), şelalelerin düştüğü dev kazanları ve Nevşehir'deki peri bacaları yer alır. Biriktirme şekilleri arasında ise akarsu taşıma gücünün azaldığı yerlerde oluşan birikinti yelpazeleri, dağ eteği ovaları, kum adaları ve deniz kıyısındaki delta ovaları bulunmaktadır.",
    bullets: [
      "Çentik vadiler akarsuların yatak eğiminin fazla olduğu Doğu Anadolu ve Doğu Karadeniz'de yaygındır ve hidroelektrik potansiyelleri çok yüksektir.",
      "Menderes çizen bir akarsuyun (Ege nehirleri) yatak eğimi azalmış, boyu uzamış, aşındırma gücü düşmüş ve biriktirme faaliyeti artmıştır.",
      "Taraça (seki), hem akarsu aşındırmasını hem de epirojenik yükselmeyi (toptan yükselme) kanıtlayan karma yapılı bir şekildir."
],
    imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
  },
  {
    heading: "Türkiye'nin Gölleri ve Oluşum Türleri",
    body: "Türkiye'de göl oluşumları tektonik çöküntüler, karstik erimeler, volkanik patlamalar ve vadi önlerinin doğal setlerle kapanması sonucu oluşur. En yaygın göl tipimiz tektonik göllerdir (Tuz Gölü, Beyşehir, Eğirdir, Sapanca, Manyas). Karstik göller Akdeniz'de kalkerli arazide oluşur (Salda, Avlan). Volkanik göller ise kraterlerde biriken sulardan oluşur (Nemrut Kaldera, Meke Maar gölü). Set gölleri ise heyelan (Tortum, Abant), volkanik lav (Van, Çıldır) ve alüvyon birikintilerinin (Mogan, Eymir, Bafa) vadi önlerini kapatmasıyla oluşur.",
    bullets: [
      "Van Gölü, hem volkanik set hem de tektonik kökenli karma oluşumlu bir göldür. Suları sodalıdır.",
      "Beyşehir ve Eğirdir göllerinin suları tatlıdır. Göllerin sularını boşaltan doğal bir gideğeninin olması sularını tatlı yapar.",
      "Meke Tuzlası (Konya), volkanik patlama çukuru içinde oluşmuş 'Dünyanın Nazar Boncuğu' olarak bilinen maar gölüdür."
],
    imageUrl: "/images/topics/turkiye_golleri_1783727842204.png"
  },
  {
    heading: "Falezler ve Falezlerin Coğrafi Dağılışı",
    body: "Falez (yalıyar); dalgaların dağların denize paralel ve hemen kıyıdan yükseldiği yerlerde, kıyı şeridini aşındırmasıyla oluşan dik uçurumlardır. Türkiye'de falez oluşumu kıta sahanlığının dar olduğu Doğu Karadeniz (Rize, Trabzon), Batı Karadeniz (Zonguldak, Kastamonu) ve Akdeniz'de Teke-Taşeli kıyı kuşağında son derece yaygındır. Ege kıyılarında ise dağlar dik uzandığı için kıta sahanlığı geniştir ve falez oluşumu neredeyse hiç görülmez.",
    bullets: [
      "Falezlerin yaygın olduğu kıyılarda kıta sahanlığı dar olduğu için liman yapımı zordur ve kıyıda biriktirme azdır.",
      "Falez oluşumu dalga aşındırması (dış kuvvet) ürünüdür ve yer şekillerinin doğrudan sonucudur.",
      "Delta ovalarının bulunduğu kıyılarda (Çukurova, Bafra) biriktirme faaliyeti baskın olduğu için falezler oluşamaz."
],
    imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
  },
  {
    heading: "Türkiye'deki Toprak Tipleri ve Dağılışı",
    body: "Türkiye'nin toprak örtüsü iklim, bitki örtüsü ve anakaya özelliklerine göre şekillenmiştir. Nemli Karadeniz ormanlarında Kahverengi Orman toprakları yaygınken, Akdeniz iklim sahasında kireçtaşları üzerinde kırmızı renkli Terra Rossa toprakları oluşur. Karasal bölgelerde ise kireçli Kahverengi ve Bozkır toprakları geniş yer kaplar. Kuzeydoğu Anadolu'da (Erzurum-Kars) gür çayırlar altında dünyanın en verimli yerli toprağı olan Çernozyom (Kara Toprak) bulunur. Akarsu boylarında ve deltalarında ise taşınmış verimli Alüvyal topraklar yaygındır.",
    bullets: [
      "Çernozyom topraklar verimli olmasına rağmen Erzurum-Kars'ta yaz sıcaklığının az ve kışın çok uzun olması nedeniyle tarımda yüksek verim elde edilemez.",
      "Terra Rossa toprakları kalker üzerinde oluştuğu için kireçlidir ve demir oksit oranı yüksek olduğu için kırmızı renklidir.",
      "Azonal (taşınmış) topraklar, akarsular tarafından taşındıkları için bulundukları yerin iklim özelliklerini yansıtmazlar ve katmanlaşma (horizon) göstermezler."
],
    imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
  },
  {
    heading: "Doğal Afetler: Deprem, Heyelan ve Çığ Dağılımı",
    body: "Türkiye'nin jeolojik olarak genç oluşumu ve engebeli fiziki yapısı, doğal afet riskini artırmaktadır. Kuzey, Doğu ve Batı Anadolu fay hatları (KAF, DAF, BAF) boyunca tektonik deprem riski çok yüksektir. Heyelan (çamur/toprak kayması) ise killi toprak yapısı, dik eğim ve bol yağış nedeniyle en fazla Karadeniz kıyı kuşağında, özellikle kar erimelerinin yaşandığı ilkbaharda görülür. Çığ ise Doğu Anadolu (Hakkari, Tunceli) ve Doğu Karadeniz'in dik yamaçlarında kar kütlesinin kaymasıyla oluşur.",
    bullets: [
      "Heyelanların en çok ilkbaharda yaşanma nedeni, yağmurların yanı sıra sıcaklık artışıyla başlayan kar erimeleridir.",
      "Karaman-Konya çevresi ve Mardin eşiği I. Jeolojik Zaman masif arazilerine yakın oldukları için deprem riski en az olan alanlardır.",
      "Heyelan set gölleri (Abant, Yedigöller, Tortum) heyelan afetinin oluşturduğu doğal göl çanaklarıdır."
],
    imageUrl: "/images/topics/fay_hatlari_1783727849459.png"
  },
  {
    heading: "Kıyı Tipleri ve Türkiye'de Görülmeyen Kıyılar",
    body: "Türkiye kıyıları dalga aşındırma ve biriktirmesi ile akarsu vadilerinin sular altında kalmasıyla şekillenmiştir. Dağların paralel uzandığı Karadeniz ve Akdeniz'de Boyuna kıyı tipi, Ege'de dağların dik uzanmasına bağlı Enine kıyı tipi, İstanbul/Çanakkale boğazlarında eski vadi yataklarının su dolmasıyla oluşan Rias kıyı tipi, Antalya Kaş kıyılarında ise dağların adacıklar şeklinde kaldığı Dalmaçya kıyı tipi görülür. Matematik konumumuz nedeniyle Fiyort ve Skayer kıyı tipleri, özel konumumuz (okyanusa kıyımızın olmaması) nedeniyle ise Haliçli ve Watt kıyı tipleri Türkiye'de bulunmaz.",
    bullets: [
      "Fiyort ve Skayer kıyı tiplerinin görülmemesi mutlak konumun (enlem), Haliç ve Watt kıyı tipinin bulunmaması ise göreceli konumun (gelgit azlığı) sonucudur.",
      "Dalmaçya kıyı tipi dünyada Hırvatistan kıyılarında, Türkiye'de ise sadece Antalya Kaş-Finike arasında görülür.",
      "Rias kıyı tipi, eski akarsu vadilerinin IV. Jeolojik Zaman deniz yükselmesiyle sular altında kalması sonucu oluşmuştur."
],
    imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
  }
  ],
  mustKnow: [
    "Türkiye genç oluşumlu bir ülke olduğundan ortalama yükseltisi fazladır (1132 m), deprem riski ve sıcak su kaynakları (kaplıcalar) yaygındır.",
    "Zonguldak taş kömürü I. Jeolojik Zaman; linyit, bor, tuz ve petrol yatakları III. Jeolojik Zaman; boğazlar ve Ege Denizi IV. Jeolojik Zaman ürünüdür.",
    "Ege dağları kırıklı (Horst-Graben), Karadeniz ve Akdeniz dağları kıvrımlıdır. Volkanik dağlar ise Doğu ve İç Anadolu'da hatlar şeklinde uzanır.",
    "En yüksek volkanik dağımız Ağrı Dağı'dır. Nemrut Dağı'nda dünyanın en büyük ikinci kaldera gölü bulunur. Kula (Manisa) ise en genç volkanik sahadır.",
    "Teke ve Taşeli karstik platoları nüfusun en seyrek olduğu yerlerdir. Çatalca-Kocaeli ise aşınım platosu olup nüfusun en yoğun olduğu alandır.",
    "Kıyılarımızda Fiyort ve Skayer kıyı tiplerinin görülmemesi orta kuşakta olmamızın (matematik konum) sonucudur."
  ],
  commonMistakes: [
    "Ege Bölgesi'ndeki Menteşe Dağları da kırıklıdır ancak Ege'deki diğer dağların aksine kıyıya dik değil paralel uzanır. Bu yüzden Menteşe kıyılarında (Muğla) yağış miktarı fazladır.",
    "Peri bacalarının oluşumunda 'rüzgar' temel etken değil, yardımcı etkendir. Asıl aşındırıcı kuvvet sel ve akarsulardır. Volkanik tüfler ise iç kuvvetlerin etkisidir.",
    "Karstik erime şekli olan obrukların oluşumu yer altı su seviyesinin düşmesiyle hızlanır. Obruklar tarımsal sulama amacıyla yer altı suyunun aşırı çekildiği Konya ovasında son yıllarda çökmelerle sıkça görülmektedir."
  ],
  quickTimeline: [
    { date: "Paleozoik", event: "Masif araziler sertleşti ve Zonguldak havzasında taş kömürü yatakları oluştu." },
    { date: "Tersiyer", event: "Alp-Himalaya kıvrım kuşağı yükseldi, Toroslar ve Kuzey Anadolu Dağları oluştu. Linyit ve bor yatakları depolandı." },
    { date: "Kuvaterner", event: "Anadolu levhası toptan yükseldi (epirojenez), Egeid karası çökerek Ege Denizi oluştu, İstanbul ve Çanakkale boğazları yarıldı." },
    { date: "Buzul Çağları", event: "Dağlarımızın yüksek kesimleri buzullarla şekillendi ve günümüzdeki buzul gölleri (sirk) oluştu." }
  ]
};
