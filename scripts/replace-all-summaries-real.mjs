import fs from 'fs';
import path from 'path';

const topicsDir = path.join(process.cwd(), 'src/data/kpss/topics');

const cografiKonumSummaries = [
  {
    heading: "Matematik (Mutlak) Konum ve Sonuçları",
    body: "Türkiye, Kuzey Yarım Küre'de, başlangıç meridyeninin doğusunda ve orta kuşakta yer alır. Koordinatları 36°-42° Kuzey enlemleri ile 26°-45° Doğu boylamlarıdır. Ekvator'a göre konumu sıcaklıkların güneyden kuzeye doğru azalmasını belirlerken, başlangıç meridyenine göre konumu ise yerel saatlerin doğuda daha ileri olmasını sağlar. Bu konum özellikleri, Türkiye'nin iklim şartlarını, tarımsal faaliyet çeşitliliğini ve yerel saat dilimlerini doğrudan kontrol etmektedir.",
    bullets: [
      "Uç noktalar: En kuzeyi Sinop (İnceburun), en güneyi Hatay (Beysun Köyü), en batısı Çanakkale (Avlaka Burnu), en doğusu Iğdır (Dilucu).",
      "Kuzey-Güney Kuş Uçuşu Mesafe: 36° - 42° = 6 enlem farkı vardır. Enlemler arası mesafe her yerde sabit 111 km olduğundan; 6 x 111 = 666 km'dir.",
      "Güneş ışınlarının düşme açısı ve tuzluluk enlem etkisiyle güneyden kuzeye azalırken, yer çekimi kuzeye doğru artar."
    ],
    imageUrl: "/images/topics/cografi_konum_1783726519779.png"
  },
  {
    heading: "Boylam ve Saat Dilimleri",
    body: "Türkiye 26°-45° Doğu boylamları arasında yer alır. Bu durum yerel saat özelliklerini belirler. En doğusu ile en batısı arasındaki 19 boylam farkı, 76 dakikalık sabit bir yerel saat farkı doğurur. Aynı boylam üzerinde yer alan tüm noktalarda yerel saat ve öğle vakti her zaman aynıdır ancak gündüz süreleri mevsimlere göre değiştiği için güneşin doğuş ve batış saatleri sadece ekinoks tarihlerinde (21 Mart ve 23 Eylül) aynı boylamda ortaktır.",
    bullets: [
      "Doğu-Batı zaman farkı net 76 dakikadır ve bu durum boylam farkından kaynaklanır.",
      "Yıl boyunca kullanılan ortak saatimiz 45° Doğu Iğdır saatidir (+3. saat dilimi).",
      "Aynı boylam üzerinde yerel saat ve öğle vakti her zaman aynıdır ancak güneşin doğuş-batış saati sadece ekinokslarda ortaktır."
    ],
    imageUrl: "/images/topics/cografi_konum_1783726519779.png"
  },
  {
    heading: "Özel (Göreceli) Konum ve Jeopolitik Önemi",
    body: "Özel konum; bir ülkenin denizlere, okyanuslara, ticaret yollarına, komşularına, maden yataklarına ve yer şekillerine göre konumudur. Türkiye'nin özel konumu jeopolitik önemini doğrudan belirler. Üç tarafının denizlerle çevrili olması, İstanbul ve Çanakkale gibi stratejik boğazlara sahip olması, ortalama yükseltisinin 1132 metre ile çok yüksek olması ve bu yükseltinin batıdan doğuya doğru artması özel konumun en temel sonuçlarındandır.",
    bullets: [
      "Yükselti ve dağların uzanış doğrultusu tamamen özel (göreceli) konumun bir sonucudur.",
      "Kısa mesafede iklim, bitki örtüsü ve tarım ürünü çeşitliliğinin değişmesi özel konum (yer şekillerinin hızlı değişimi) ile açıklanır.",
      "Jeopolitik önem, Türkiye'nin boğazlara, kıtalararası köprü konumuna ve enerji nakil hatlarına sahip olmasının bir sonucudur."
    ],
    imageUrl: "/images/topics/cografi_konum_1783726519779.png"
  },
  {
    heading: "Türkiye'nin Komşuları ve Kara Sınırları",
    body: "Türkiye'nin 8 ülke ile kara sınırı bulunmaktadır. Bu sınırlar tarihsel süreçte anlaşmalarla çizilmiştir. En uzun kara sınırımız Suriye (yaklaşık 911 km), en kısa kara sınırımız ise Nahçıvan (yaklaşık 18 km) iledir. Batıda Yunanistan ve Bulgaristan, doğuda Gürcistan, Ermenistan, Nahçıvan ve İran, güneyde ise Irak ve Suriye komşularımızdır. Sınırlarımızın bir kısmı nehirleri takip eden doğal sınırlardan (Meriç, Aras) oluşurken, bir kısmı ise dağların en yüksek sırtlarını (su bölümü çizgisi) takip eder.",
    bullets: [
      "En uzun kara sınırımız Suriye, en kısa kara sınırımız Nahçıvan'dır.",
      "En eski kara sınırımız Kasr-ı Şirin Antlaşması ile belirlenen İran sınırıdır.",
      "Yunanistan sınırı Meriç Nehri'ni takip ettiği için akarsu tabanlı doğal bir sınırdır."
    ],
    imageUrl: "/images/topics/cografi_konum_1783726519779.png"
  },
  {
    heading: "En Önemli Sınır Kapıları ve Ticari Rolleri",
    body: "Türkiye'nin komşularıyla olan dış ticaretinde ve transit taşımacılığında sınır kapıları hayati bir role sahiptir. KPSS sınavında sınır kapıları ve açıldıkları ülkeler doğrudan soru olarak gelmektedir. Bulgaristan sınırındaki Kapıkule en işlek gümrük kapımızdır. Irak sınırındaki Habur ise Ortadoğu ticaretinde en yüksek tır yoğunluğuna sahiptir. Gürcistan sınırındaki Sarp sınır kapısı ise Kafkasya'ya geçişi sağlar ve kimlikle geçişe uygundur.",
    bullets: [
      "Kapıkule, en yüksek tır ve yolcu hacmine sahip Avrupa kapımızdır (Bulgaristan).",
      "Habur Sınır Kapısı (Irak), Ortadoğu ticaretinde en yüksek ciro ve tır yoğunluğuna sahip kapılardandır.",
      "Demiryolu bağlantısı olan sınır kapılarımız: Kapıkule (Bulgaristan), Uzunköprü (Yunanistan), Kapıköy (İran), Canbaz (Gürcistan - Bakü-Tiflis-Kars hattı)."
    ],
    imageUrl: "/images/topics/sinir_kapisi_1783727826782.png"
  },
  {
    heading: "Enlem Etkisinin İstisnaları: Mikroklima ve Çelişkiler",
    body: "Normal şartlarda enlem etkisine göre ekvatordan kutuplara gidildikçe sıcaklıkların azalması gerekir. Ancak Türkiye'de yer şekilleri ve denizellik gibi özel konum şartları, bu kurala uymayan 'mikroklima' (dar alandaki özel iklim) sahaları oluşturmuştur. Rize'de turunçgil ve zeytin, Artvin Yusufeli'de zeytin, Iğdır ovasında ise pamuk yetişmesi tamamen özel konum şartlarının yarattığı mikroklima iklim özelliklerinin bir sonucudur ve enlem etkisiyle çelişir.",
    bullets: [
      "Mikroklima sahaları, enlem etkisine tamamen terstir ve göreceli konumla açıklanır.",
      "Rize'de turunçgil, Iğdır'da pamuk en çok sorulan KPSS mikroklima örnekleridir.",
      "Bu alanlarda üretilen ürünler genellikle yerel tüketimi karşılar, dış ticarette payları düşüktür."
    ],
    imageUrl: "/images/topics/cografi_konum_1783726519779.png"
  },
  {
    heading: "Değişen Jeopolitik Konum ve Mavi Vatan Konsepti",
    body: "Jeopolitik konum; bir ülkenin coğrafi özelliklerinin uluslararası siyaset ve askeri stratejiler üzerindeki etkisidir. Türkiye'nin jeopolitiği, Hazar ve Ortadoğu doğalgazını Avrupa'ya taşıyan TANAP ve TürkAkım projeleriyle enerji koridoru kimliği kazanmıştır. Ayrıca Mavi Vatan doktrini, Türkiye'nin Karadeniz, Ege ve Akdeniz'deki kıta sahanlığı ve münhasır ekonomik bölge (MEB) haklarını korumaya yönelik, deniz yetki alanlarındaki egemenliğini pekiştiren en önemli ulusal stratejidir.",
    bullets: [
      "Montrö Boğazlar Sözleşmesi (1936), boğazlar üzerindeki egemenliğimizi uluslararası düzeyde tescilleyen en önemli jeopolitik belgedir.",
      "Mavi Vatan, denizlerdeki ekonomik haklarimizi (balıkçılık, petrol/gaz arama) koruma kararlılığıdır.",
      "TANAP, Türkiye'yi Doğu-Batı enerji koridorunun en stratejik aktörü haline getirmiştir."
    ],
    imageUrl: "/images/topics/mavi_vatan_1783727834384.png"
  },
  {
    heading: "Sınır Güvenliği ve Tarihsel Anlaşmalar",
    body: "Türkiye'nin bugünkü kara sınırları, tarihsel süreçteki anlaşmalarla çizilmiştir. Meriç Nehri 1923 Lozan Antlaşması ile Yunanistan sınırımız olmuştur. İran sınırımız 1639 Kasr-ı Şirin Antlaşması ile Zagros Dağları su bölümü çizgisi esas alınarak belirlenmiş ve günümüze en az değişerek ulaşan sınır olmuştur. Irak sınırımız 1926 Ankara Antlaşması ile çizilmiş olup dağlık yapısı nedeniyle sınır güvenliği açısından oldukça engebelidir. Suriye sınırımız ise 1921 Ankara Antlaşması ile çizilmiş ve 1939'da Hatay'ın katılımıyla son şeklini almıştır.",
    bullets: [
      "Meriç ve Aras nehirleri akarsu yatağını takip eden doğal sınırlara örnektir.",
      "İran sınırı, 1639'dan beri değişmeyen en kararlı ve su bölümü çizgilerini takip eden sınırımızdır.",
      "Suriye sınırı, engebeli dağların olmadığı, büyük oranda düzlüklerden geçen en uzun sınırımızdır."
    ],
    imageUrl: "/images/topics/sinir_kapisi_1783727826782.png"
  },
  {
    heading: "Türkiye'nin Üye Olduğu Önemli Uluslararası Kuruluşlar",
    body: "Türkiye, jeopolitik konumu nedeniyle hem askeri hem de ekonomik uluslararası örgütlerde aktif rol oynamaktadır. 1952 yılında üye olduğumuz NATO (Kuzey Atlantik Antlaşması Örgütü) askeri alandaki en önemli ortaklığımızdır. Ayrıca Karadeniz havzasındaki ülkelerin ekonomik iş birliğini sağlamak amacıyla 1992 yılında Türkiye'nin öncülüğünde kurulan KEİ (Karadeniz Ekonomik İşbirliği) bölgesel işbirliklerimizin başında gelir. Gelişmekte olan sekiz büyük İslam ülkesinin yer aldı D-8 de Türkiye liderliğinde kurulan diğer önemli kuruluştur.",
    bullets: [
      "KEİ (Karadeniz Ekonomik İşbirliği), Türkiye'nin bölgesel liderlik amacıyla bizzat kurucusu olduğu örgütlerdendir.",
      "Türkiye Birleşmiş Milletler (BM) ve NATO'nun kurucu veya ilk üyeleri arasında yer almaktadır.",
      "Türkiye, Avrupa Birliği'ne (AB) üye değildir (aday ülkedir) ve petrol ihraç eden OPEC üyesi değildir."
    ],
    imageUrl: "/images/topics/cografi_konum_1783726519779.png"
  },
  {
    heading: "Ulusal Saat ve Enerji Tasarrufu İlişkisi",
    body: "Türkiye 26°-45° Doğu boylamları arasında yer alır. 2016 yılına kadar kış saati için İzmit'ten geçen 30° Doğu (+2. saat dilimi), yaz saati için Iğdır'dan geçen 45° Doğu (+3. saat dilimi) yerel saatleri kullanılırdı. Ancak 2016 yılında alınan kararla yaz-kış saati değişimi sonlandırılmış ve yıl boyunca kalıcı olarak +3. Saat Dilimi (Iğdır saati) kullanılmaya başlanmıştır. Bu uygulamanın temel amacı akşam saatlerinde gün ışığından daha fazla yararlanarak enerji tasarrufu sağlamaktır.",
    bullets: [
      "Kalıcı olarak 45° Doğu Iğdır saati (+3. saat dilimi) kullanılmaktadır.",
      "Yaz-kış saati değişimin kaldırılmasıyla kışın batıdaki şehirlerde (İstanbul, İzmir) sabah saatlerinde hava daha geç aydınlanmaktadır.",
      "Aynı boylam üzerindeki noktalarda yerel saat her zaman aynıdır ancak ekinokslar dışında güneşin doğuş-batış saati değişir."
    ],
    imageUrl: "/images/topics/cografi_konum_1783726519779.png"
  }
];

const yerSekilleriSummaries = [
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
];

const iklimvebitkiortusuSummaries = [
  {
    heading: "Türkiye İklimini Etkileyen Faktörler ve Basınç Merkezleri",
    body: "Türkiye'nin iklimi hem matematik (mutlak) hem de özel (göreceli) konum özelliklerinin ortak etkisiyle şekillenmiştir. Matematik konum gereği Akdeniz iklim kuşağındayız ve 4 mevsimi belirgin yaşarız. Özel konum gereği ise yükselti, dağların paralel uzanması kıyı ve iç kesimlerin iklimlerini birbirinden tamamen ayırmıştır. Kışın Sibirya (soğuk, kuru) ve İzlanda (ılık, yağışlı); yazın ise Asor (sıcak, kuru) ve Basra (şiddetli sıcaklık/buharlaşma) basınç merkezleri iklimimizi kontrol eder.",
    bullets: [
      "Sibirya kışın aşırı soğuk getirirken, Basra yazın aşırı sıcak ve kuraklık getirir. İkisi de termik kökenlidir.",
      "İzlanda ve Asor ise dinamik kökenli basınç merkezleridir.",
      "Kıyı ile iç kesimler arasında iklimin hızla değişmesi özel konumun (dağların uzanışı ve yükselti) sonucudur."
    ],
    imageUrl: "/images/topics/iklim_bitki_1783726537799.png"
  },
  {
    heading: "Türkiye'yi Etkileyen Rüzgarlar ve Yağış Oluşum Tipleri",
    body: "Türkiye'yi etkileyen rüzgarlar yönlerine göre sıcaklığı düşürür veya artırır. Kuzeyli rüzgarlar (Karayel, Yıldız, Poyraz) sıcaklığı düşürürken, güneyli rüzgarlar (Samyeli, Kıble, Lodos) sıcaklığı artırır (Kayıp Sakal şifresi). Lodos kışın soba zehirlenmelerine ve çığ riskine yol açan sıcak-nemli rüzgardır. Yamaçtan aşağı eserek havayı kurutan Fön rüzgarları da yaygındır. Yağışlar ise havanın soğuma türüne göre Cephesel (Akdeniz-kış), Orografik (Karadeniz-yamaç) ve Konveksiyonel (İç Anadolu-ilkbahar) olarak üç tiptir.",
    bullets: [
      "Kayıp Sakal şifresinde üstteki rüzgarlar (K-Y-P) soğuk, alttakiler (S-K-L) sıcak karakterlidir.",
      "Karadeniz'deki orografik yağışlar, dağların kıyıya paralel ve hakim rüzgar yönüne dik uzanmasının bir sonucudur.",
      "Lodos rüzgarı denizcileri etkiler, karları hızla erittiği için çığ ve taşkınlara yol açabilir."
    ],
    imageUrl: "/images/topics/iklim_bitki_1783726537799.png"
  },
  {
    heading: "Türkiye'deki İklim Tipleri (Karadeniz, Akdeniz, Karasal)",
    body: "Türkiye'de yer şekillerinin çeşitliliği nedeniyle kısa mesafelerde farklı iklim tipleri görülür. Akdeniz iklimi kış ılıklığı ve yaz kuraklığı ile bilinir, bitki örtüsü makidir. Karadeniz iklimi her mevsim düzenli yağış alır, bulutluluk çok fazladır ve bitki örtüsü ormandır. Karasal iklim (Ilıman Karasal/Step) ilkbahar yağışlarıyla yeşeren bozkır bitki örtüsüne sahiptir, yazlar sıcak-kuraktır. Sert Karasal iklim ise Erzurum-Kars'ta görülür, yaz yağışları alır, kışları çok uzun ve dondurucudur, bitki örtüsü dağ çayırlarıdır.",
    bullets: [
      "Karadeniz iklimi nemli yapısı nedeniyle kimyasal çözünmenin, Karasal iklim ise kurak yapısı nedeniyle fiziksel (mekanik) çözünmenin en fazla olduğu iklimdir.",
      "Yağışların mevsimsel dağılışında en çok yağış düşen dönemler: Karadeniz -> Sonbahar, Akdeniz -> Kış, Ilıman Karasal -> İlkbahar, Sert Karasal -> Yaz mevsimidir.",
      "Güneydoğu Anadolu, Akdeniz yağış rejiminin etkisinde olmasına rağmen, Basra alçak basıncının getirdiği şiddetli buharlaşma nedeniyle Türkiye'nin en kurak bölgesidir."
    ],
    imageUrl: "/images/topics/iklim_bitki_1783726537799.png"
  },
  {
    heading: "Bitki Örtüsü Sınıflandırması (Orman, Çalı, Ot Toplulukları)",
    body: "Türkiye'nin iklim çeşitliliği, çok zengin bir bitki örtüsü dağılımına zemin hazırlamıştır. Karadeniz kıyı kuşağında nemli ormanlar, Akdeniz'de kuraklığa dayanıklı maki toplulukları (zeytin, zakkum, defne) yaygındır. Makilerin tahrip edildiği yerlerde garig (lavanta, kekik), Karadeniz ormanlarının tahrip edildiği yerlerde ise yalancı maki (psodomaki) oluşur. Karasal iç kesimlerde bozkır (step) otları yaygınken, insanların ormanları kesmesiyle antropojen bozkırlar oluşmuştur. Erzurum-Kars yükseklerinde ise gür dağ çayırları bulunur.",
    bullets: [
      "Kızılçam ormanlarının dünyada en geniş yayılım gösterdiği ülke Türkiye'dir (özellikle Akdeniz ve Ege kıyıları).",
      "İç Anadolu'da meşe ormanlarının tahrip edilmesiyle ortaya çıkan bozkırlara antropojen bozkır denir. Bunların arasında tek tük ağaç topluluklarına rastlanması eski orman varlığının kanıtıdır.",
      "Türkiye'de orman üst sınırı sıcaklık ve enlem etkisi nedeniyle en yüksek Doğu Anadolu'da, en alçak ise Karadeniz kıyılarındadır."
    ],
    imageUrl: "/images/topics/iklim_bitki_1783726537799.png"
  },
  {
    heading: "Endemik ve Relikt Bitkiler: Türkiye'nin Bitki Zenginliği",
    body: "Türkiye, Avrupa kıtasının tamamına yakın sayıda bitki türüne sahiptir. Bu zenginliğin temel nedeni; iklim çeşitliliği, yer şekillerinin engebeli olması ve geçmiş jeolojik dönemlerde yaşanan iklim değişimleridir. Yalnızca belirli bir yöreye ait olan Endemik bitkiler (Muğla Köyceğiz'deki sığla ağacı, Isparta Eğirdir'deki kasnak meşesi) en çok Toroslar kuşağında yaygındır. Geçmiş jeolojik dönemlerden kalan Relikt (kalıntı) bitkiler ise iklim değişimlerinden korunmuş mikroklimalarda yaşam mücadelesi verir (Akdeniz'deki kestane veya Karadeniz'deki kızılçam kalıntıları).",
    bullets: [
      "Türkiye, engebeli yapısı ve buzul çağlarındaki sığınak alanları sayesinde dünya çapında bir endemik bitki cennetidir (yaklaşık 3000'den fazla endemik tür).",
      "Sığla yağı, gövdesinden elde edilen çok özel bir salgıdır ve tarihi antik döneme kadar uzanan kozmetik/ilaç sanayi hammaddesidir.",
      "Mikroklima alanları relikt bitkilerin günümüze kadar ulaşmasında en önemli koruyucu sığınaklar olmuştur."
    ],
    imageUrl: "/images/topics/iklim_bitki_1783726537799.png"
  },
  {
    heading: "Sıcaklık Dağılışı ve İzoterm Haritalarının Yorumlanması",
    body: "Türkiye'de sıcaklığın dağılışını enlem (matematik konum), denizellik-karasallık ve yükselti (özel konum) faktörleri belirler. Yıllık ortalama sıcaklıklar güney kıyılarımızda (enlem/denizellik) en yüksek, Erzurum-Kars'ta (yükselti/enlem) en düşüktür. Kışın (Ocak) en sıcak yer Akdeniz, en soğuk yer karasallık ve yükseltinin birleştiği Doğu Anadolu'dur. Yazın (Temmuz) en sıcak yer ise enlem, karasallık ve Basra alçak basıncının getirdiği çöl rüzgarları nedeniyle Güneydoğu Anadolu'dur.",
    bullets: [
      "Kışın deniz kıyısındaki yerlerin iç kesimlerden sıcak olması enlemle çelişir, tamamen denizellik ve nem etkisiyle açıklanır.",
      "Güneydoğu Anadolu'nun yazın Akdeniz'den sıcak olmasının nedeni karasallık (nem azlığı) ve güneyden esen kuru rüzgarlardır.",
      "Yıllık sıcaklık farkının en az olduğu bölgemiz nemlilik nedeniyle Karadeniz, en fazla olduğu bölgemiz ise karasallık nedeniyle Doğu Anadolu'dur."
    ],
    imageUrl: "/images/topics/iklim_bitki_1783726537799.png"
  },
  {
    heading: "Nemlilik ve Yağış İlişkisi (Mutlak, Maksimum, Bağıl Nem)",
    body: "Nemlilik, sıcaklık farklarını dengeleyen ve yağış oluşumunu belirleyen temel iklim elemanıdır. Havadaki su buharı olan Mutlak Nem en fazla Akdeniz kıyılarında (sıcaklık ve su kaynağı) bulunur. Havanın nem taşıma kapasitesi olan Maksimum Nem, sıcaklığa bağlıdır ve yazın Güneydoğu'da zirvededir. Havanın yağış bırakma ihtimalini gösteren Bağıl Nem ise Karadeniz Bölgesi'nde yıl boyunca en yüksektir, yazın Güneydoğu'da ise en düşük seviyededir.",
    bullets: [
      "Bağıl nemin %100'e ulaşıp aşmasıyla yağış başlar. Karadeniz'de bağıl nem hep yüksektir, bu yüzden bulutluluk oranı çok fazladır.",
      "Güneydoğu Anadolu'da yazın bağıl nemin aşırı düşük olması, havada nem açığının (yağış uzaklığının) en yüksek olduğunu gösterir.",
      "Mutlak nem kıyılardan iç kesimlere gidildikçe ve yükseldikçe hızla azalır."
    ],
    imageUrl: "/images/topics/iklim_bitki_1783726537799.png"
  },
  {
    heading: "Kar Yağışları, Karın Yerde Kalma Süresi ve Don Olayları",
    body: "Kar yağışı ve don olayları, kış sıcaklıklarının 0°C'nin altına indiği karasal bölgelerimizin karakteristik özelliğidir. Akdeniz ve Ege kıyı kuşağında kış ılıklığı sayesinde kar yağışı ve don neredeyse hiç görülmez, bu durum seracılığın gelişmesini sağlamıştır. Doğu Anadolu ve İç Anadolu'da ise yükselti ve şiddetli karasallık nedeniyle kar yağışlı gün sayısı ve karın yerde kalma süresi (Erzurum-Kars'ta 120 günü aşar) çok fazladır. Bu durum kış turizmine olanak sağlar.",
    bullets: [
      "Kıyı bölgelerinde kış ılıklığı sayesinde tarımsal üretim (özellikle seracılık ve zeytincilik) don riskinden korunur.",
      "Erzurum-Kars'ta karın yerde kalma süresi 120 günü aşarken, Akdeniz kıyılarında bu süre sıfır gündür.",
      "Don olaylarının en yoğun olduğu dönemlerde tarımsal ürünlerin zarar görmemesi için seralarda ısıtma yapılır."
    ],
    imageUrl: "/images/topics/iklim_bitki_1783726537799.png"
  },
  {
    heading: "Ormanlarımızın Ağaç Türlerine Göre Dağılışı",
    body: "Türkiye ormanları, nem ve sıcaklık koşullarına bağlı olarak farklı ağaç türlerinden oluşur. Akdeniz ve Ege kıyılarında ışık isteği yüksek olan Kızılçam ormanları en yaygındır (tahrip edilirse maki olur). Karadeniz'de nemi ve serinliği seven yayvan yapraklı Kayın ormanları yoğundur. İç Anadolu dağlarında kuraklığa dayanıklı Karaçamlar bulunur. Soğuğa en dayanıklı çam türü olan Sarıçamlar ise Doğu Anadolu'nun yüksek kesimlerinde (Kars-Sarıkamış) yaygındır. Meşe ise ülkemizde en geniş yayılış alanına sahip ağaçtır.",
    bullets: [
      "Sarıçam ormanlarının en gür olduğu yer yüksek rakımlı Kars-Sarıkamış yöresidir (soğuğa en dayanıklı çam türüdür).",
      "Kızılçamlar kolay yanabilen reçineli yapıya sahiptir. Bu yüzden yazın Ege ve Akdeniz'de orman yangını riski çok yüksektir.",
      "Meşe ağacının Türkiye'nin hemen her yerinde yetişebilmesi, toprak ve iklim seçiciliğinin en az olmasındandır."
    ],
    imageUrl: "/images/topics/iklim_bitki_1783726537799.png"
  },
  {
    heading: "İklim Değişikliği ve Türkiye'nin Gelecekteki Su Stresi",
    body: "Türkiye, küresel iklim değişikliğinden en çok etkilenmesi beklenen Akdeniz Havzası'nda yer alır. Yağışların azalması, buharlaşmanın artması ve yer altı sularının aşırı tüketimi, göllerimizin (Tuz Gölü, Eğirdir) kurumasına ve tarımda su krizine yol açmaktadır. Sıcaklık artışı, ani sel baskınları ve orman yangınlarının sıklığını artırırken, Türkiye'yi 'su stresi çeken' ülkeler arasına yerleştirmiştir. Bu durum tarım desenlerinin ve sulama yöntemlerinin (damla sulama gibi) değişmesini zorunlu kılmaktadır.",
    bullets: [
      "Konya Ovası'nda yer altı sularının aşırı çekilmesiyle oluşan obrukların artışı, su stresinin en somut göstergesidir.",
      "İklim değişikliğiyle birlikte Akdeniz iklim kuşağı kuzeye doğru kaymakta, İç Anadolu ve Güneydoğu'da yarı çöl iklimi özellikleri belirmektedir.",
      "Su tasarrufu için damla sulama yöntemleri ve kuraklığa dayanıklı tohumların kullanımı hayati önem taşımaktadır."
    ],
    imageUrl: "/images/topics/ruzgar_haritasi_1783727857236.png"
  }
];

const nufusveYerlesmeSummaries = [
  {
    heading: "Türkiye'de Nüfusun Dağılışını Etkileyen Faktörler",
    body: "Türkiye'de nüfusun dağılışı son derece düzensizdir. Bu düzensizlik üzerinde fiziki (doğal) ve beşeri faktörlerin etkisi büyüktür. İklim (nemlilik/sıcaklık) nüfusun kıyı bölgelerinde toplanmasını sağlarken, engebeli dağlık alanlar (Hakkari, Doğu Karadeniz) ve kurak yerler (Tuz Gölü çevresi) seyrek nüfusludur. Sanayileşme, ticaret ve ulaşımın geliştiği Marmara (Çatalca-Kocaeli) ve Kıyı Ege ise iş imkanlarının fazlalığı nedeniyle nüfusun en yoğun olduğu alanlardır.",
    bullets: [
      "Menteşe Yöresi (Muğla), kıyıda yer alıp bol yağış almasına rağmen engebeli yer şekilleri nedeniyle seyrek nüfusludur.",
      "Teke ve Taşeli Platoları, Akdeniz kıyısında olmalarına karşın engebeli arazi ve karstik yapının etkisiyle seyrek nüfusludur.",
      "Doğu Karadeniz kıyı kuşağı dar bir şeritte sık nüfusluyken, dağların hemen arkasındaki iç kesimler (Gümüşhane, Bayburt) çok seyrek nüfusludur."
    ],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  },
  {
    heading: "Nüfusun Yapısı, Özellikleri ve Yoğunluk Türleri",
    body: "Türkiye nüfusu, demografik olarak dinamik bir yapıdan yavaş yavaş yaşlanan bir yapıya geçiş sürecindedir. Doğum oranlarının düşmesiyle nüfus piramidinin tabanı daralmaktadır. Ortalama ömür uzamakta ve okuryazarlık oranı %97'nin üzerine çıkmaktadır. Nüfus yoğunluğu türleri coğrafi yorumlama için önemlidir. Aritmetik nüfus yoğunluğu toplam nüfusun yüzölçüme bölünmesiyle elde edilir ve sürekli artar. Tarımsal nüfus yoğunluğu ise tarım alanlarının çok dar olduğu dağlık bölgelerde (Doğu Karadeniz, Hakkari) çok yüksek çıkar.",
    bullets: [
      "Medyan (ortanca) yaşın yükselmesi, doğum oranlarının azaldığını ve ortalama yaşam süresinin uzadığını gösteren en net kanıttır.",
      "Tarımsal nüfus yoğunluğunun yüksek olması o bölgenin dağlık ve engebeli olduğunun (tarım arazisinin darlığının) göstergesidir.",
      "Marmara Bölgesi, tarımsal nüfus yoğunluğu en düşük bölgelerden biriyken, fizyolojik ve aritmetik yoğunlukta Türkiye lideridir."
    ],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  },
  {
    heading: "Türkiye'de Göçler: Nedenleri, Sonuçları ve Mevsimlik Göç",
    body: "Türkiye'de göçler genel olarak iç kesimlerden kıyı kesimlere, kırsaldan kentlere ve doğudan batıya doğrudur. Kırsalda toprakların mirasla bölünmesi ve tarımda makineleşme insanları göçe zorlayan itici faktörlerken, kentlerdeki iş ve eğitim olanakları çekici faktörlerdir. Göç alan şehirlerde düzensiz kentleşme, altyapı yetersizliği ve sanayi tesislerinin şehir merkezinde kalması gibi sorunlar yaşanır. Tarım (pamuk, fındık, çay), turizm ve yaylacılık ise mevsimlik geçici göçleri tetikler.",
    bullets: [
      "Tarımda makineleşme, düzlük alanlarda göçü artıran itici bir güçken; Karadeniz gibi dağlık yerlerde makineleşme yapılamadığı için göçe neden olmaz.",
      "Mevsimlik göç alan yerlerde yaz aylarında nüfus geçici olarak katlanır, bu durum belediye hizmetlerini zorlaştırır.",
      "Beyin göçü ve işçi göçleri Türkiye'nin dış göç hareketlerini oluşturur."
    ],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  },
  {
    heading: "Kentsel ve Kırsal Yerleşmeler: Köyaltı Yerleşmeleri",
    body: "Yerleşmeler ekonomik faaliyetlerine ve nüfuslarına göre ayrılır. Kırsal kesimde köy sınırları içinde yer alan, hayvancılık ve tarım amaçlı kurulan küçük meskenlere köyaltı yerleşmeleri denir. Sürekli (mezra, divan, mahalle, çiftlik) ve geçici (yayla, kom, oba, ağıl, dalyan) yerleşmeler olarak gruplandırılır. Mezra Doğu Anadolu'da, Divan Batı Karadeniz'de yaygın sürekli yerleşmelerken; Yayla en yaygın geçici yerleşmedir. Oba ise Toroslar'da göçebe Yörük çadırlarından oluşur.",
    bullets: [
      "Mezra, Divan, Mahalle ve Çiftlik sürekli (yaz-kış kalınan) yerleşmelerdir.",
      "Yayla, Kom, Oba, Ağıl, Dam ve Dalyan ise geçici yerleşmelerdir.",
      "Dalyan, Ege kıyılarında yaygın olan balık üretimi ve avcılığı yapılan geçici bir kıyı yerleşmesidir."
    ],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  },
  {
    heading: "Mesken (Konut) Tipleri ve Coğrafi Dağılışı",
    body: "Kırsal alanlarda evlerin yapımında kullanılan malzemeler, doğrudan o bölgenin iklimine, yer şekillerine ve jeolojik kaynaklarına bağlıdır. Ormanların ve nemin bol olduğu Karadeniz kıyı kuşağında geleneksel evlerin malzemesi ahşaptır. Karstik ve volkanik arazilerin yaygın olduğu Akdeniz (kalker), Doğu Anadolu (bazalt) ve İç Anadolu (tüf) çevresinde taş meskenler görülür. Kurak ve ağacın az olduğu İç Anadolu ve Güneydoğu ovalarında ise çamur ve samanın kurutulmasıyla yapılan kerpiç (toprak) evler yaygındır.",
    bullets: [
      "Karadeniz'deki ahşap meskenler tamamen özel konumun (iklim ve gür orman varlığı) sonucudur.",
      "İç Anadolu ve Güneydoğu'da kerpiç evlerin yaygın olması kurak iklimin ve orman azlığının bir sonucudur.",
      "Gelişmiş şehirlerde betonarme binaların yaygınlaşmasıyla geleneksel ahşap, taş ve kerpiç evler önemini yitirmiştir."
    ],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  },
  {
    heading: "Türkiye'de Nüfus Politikaları ve Tarihsel Evreleri",
    body: "Türkiye Cumhuriyeti, kurulduğu günden bugüne sosyal ve ekonomik şartlara bağlı olarak farklı nüfus politikaları uygulamıştır. 1923-1965 yılları arasında savaştan yeni çıkmış ülkenin iş gücü ihtiyacını karşılamak amacıyla nüfus artış hızını artırıcı politikalar (çok çocuklu ailelere madalya, vergi muafiyeti) uygulanmıştır. 1965-1980 arasında kalkınma hızını korumak için nüfus artış hızını azaltıcı aile planlaması kanunu çıkarılmıştır. Günümüzde ise doğum oranlarının çok düşmesiyle tekrar nüfus artışını teşvik edici politikalar öne çıkmıştır.",
    bullets: [
      "1940-1945 yılları arasında (II. Dünya Savaşı dönemi) askere alınmalar nedeniyle nüfus artış hızı tarihin en düşük seviyesine inmiştir.",
      "1950-1960 yılları arası ise sağlık ve yaşam koşullarının iyileşmesiyle nüfus artış hızının en yüksek olduğu dönemdir.",
      "Günümüzdeki nüfus politikaları sadece sayısal artışı değil, eğitim ve sağlık kalitesini yükseltmeyi de hedefler."
    ],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  },
  {
    heading: "Nüfusun Eğitim, Sağlık ve Sosyo-Ekonomik Göstergeleri",
    body: "Nüfusun niteliği, ülkenin sosyo-ekonomik gelişmişlik seviyesini gösterir. Türkiye'de okuma yazma oranı Cumhuriyetin ilk yıllarında %10'lardayken günümüzde %97'yi aşmıştır. Ortalama yaşam süresi sağlık hizmetlerinin kalitesiyle uzamış ve kadınlarda 81, erkeklerde 76 yıla ulaşmıştır. Kentsel nüfus oranı, sanayileşme ve büyükşehir yasalarının etkisiyle %93'ün üzerine çıkarken kırsal nüfus %7'lere kadar gerilemiştir. Kentli nüfus oranının en fazla olduğu bölge Marmara'dır.",
    bullets: [
      "Kadınların okuma yazma oranı ve iş gücüne katılım oranının yüksek olması o bölgenin gelişmişlik seviyesinin yüksek olduğunu gösterir.",
      "Doğu Karadeniz ve Doğu Anadolu kırsalında tarım ve hayvancılık nedeniyle kırsal nüfus oranı diğer bölgelere göre daha yüksek kalmıştır.",
      "Okuryazarlık oranının en yüksek olduğu coğrafi bölge Marmara ve Ege'dir."
    ],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  },
  {
    heading: "Göçün Mekansal Etkileri ve Şehirlerin Fonksiyonları",
    body: "Kırsaldan kentlere yapılan büyük göçler mekansal değişimlere yol açar. Göç alan şehirlerde çarpık kentleşme (gecekondu), altyapı yetersizliği, okul ve hastanelerde aşırı yoğunluk oluşur ve sanayi tesisleri şehir merkezinde kalır. Göç veren kırsal alanlarda ise tarım toprakları boş kalır, genç nüfus gittiği için yaşlı ve kadın nüfus kırsalda yalnızlaşır. Şehirler ise gelişimlerini sağlayan fonksiyona göre sanayi (Kocaeli, Bursa), idari (Ankara), liman (İzmir, Mersin) veya ulaşım (Afyon) şehirleri olarak sınıflandırılır.",
    bullets: [
      "Gelişmiş şehirlerin göç almasında en büyük çekici faktör iş imkanlarının ve yaşam kalitesinin yüksek olmasıdır.",
      "Bir şehrin birden fazla fonksiyonu olabilir (Örn: İstanbul hem liman, hem ticaret, hem sanayi metropolüdür).",
      "Kırsal alanda tarım arazilerinin miras yoluyla parçalanması tarımsal üretimi düşürerek göçü tetikleyen en büyük itici güçtür."
    ],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  },
  {
    heading: "Kırsal Alanlarda Yerleşme Dokuları (Toplu ve Dağınık)",
    body: "Kırsal yerleşmelerde evlerin birbirine olan mesafesi su kaynaklarına ve yer şekillerine göre belirlenir. Toplu yerleşmelerde evler birbirine yakındır; suyun az olduğu, düzlük arazilerin kapladığı İç Anadolu ve Güneydoğu ovalarında yaygındır (insanlar tek bir çeşme/kuyu etrafında toplanır). Dağınık yerleşmelerde ise evler birbirinden uzak ve tarlaların ortasındadır; su kaynaklarının çok bol ve arazinin çok engebeli olduğu Karadeniz kıyı kuşağında (özellikle Doğu Karadeniz) yaygındır.",
    bullets: [
      "Karadeniz'de dağınık yerleşmelerin görülmesi tamamen özel konumun (bol su ve engebeli yamaçlar) sonucudur.",
      "İç Anadolu'da toplu yerleşmelerin görülmesi su azlığı (fiziki kuraklık) nedeniyle insanların su kaynakları başına toplanmasının sonucudur.",
      "Dağınık yerleşmelerde komşuluk ilişkileri ve altyapı hizmetlerinin (yol, elektrik) maliyeti toplu yerleşmelere göre çok daha zordur."
    ],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  },
  {
    heading: "Gelecekteki Demografik Yapı ve Yaşlanan Nüfus Sorunsalı",
    body: "Türkiye, demografik geçiş sürecinin üçüncü aşamasındadır. Doğum oranlarının hızla düşmesi ve ortalama ömrün uzamasıyla yaşlı nüfus oranı (65 yaş üstü) %10'u aşarak ülkeyi 'yaşlanan nüfuslu ülkeler' sınıfına sokmuştur. Gelecekte aktif genç iş gücünün azalması, sosyal güvenlik sisteminin üzerinde büyük yük oluşturacaktır. Bu demografik fırsat penceresinin kapanmaya başlamasıyla devlet, çalışan annelere çocuk yardımları, esnek çalışma saatleri ve kreş teşvikleri gibi doğum oranlarını artırıcı önlemler almaktadır.",
    bullets: [
      "Nüfus piramidinin tabanının daralması doğum oranlarının azaldığını, üst kısmının genişlemesi ise yaşlı nüfusun arttığını gösterir.",
      "Ortanca yaşın yükselmesi genç nüfus dinamizminin kaybedildiğinin en net kanıtıdır.",
      "Gelişmiş batı ülkeleri gibi Türkiye de gelecekte iş gücü açığını kapatmak için dışarıdan göç alma ihtiyacı duyabilir."
    ],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  }
];

const tarimveHayvancilikSummaries = [
  {
    heading: "Türkiye'de Tarımı Etkileyen Faktörler ve Tarım Yöntemleri",
    body: "Türkiye'de tarım, ülke ekonomisi ve istihdamı için hayati önem taşır. Tarımda verimi artırmanın önündeki en büyük engel sulama yetersizliğidir. Sulama imkanları geliştikçe nadas alanları azalır, tarımda iklime bağımlılık düşer ve üretimde dalgalanmalar biter. İntansif (modern) tarım, sulama, gübreleme ve makineleşmenin üst düzeyde olduğu, verimi yüksek modern tarım yöntemidir ve Marmara/Ege'de yaygındır. Ekstansif (geleneksel) tarım ise iklime bağımlı, verimi düşük olan ve karasal iç kesimlerde uygulanan yöntemdir.",
    bullets: [
      "Nadas uygulaması en çok İç Anadolu ve Güneydoğu Anadolu'da yaygınken, her mevsim yağışlı olan Karadeniz kıyı kuşağında nadasa hiç ihtiyaç duyulmaz.",
      "GAP sayesinde bölgede nadas alanları hızla azalmış, pamuk ve mısır gibi sulamalı tarım ürünleri birinci sıraya yerleşmiştir.",
      "Makineleşme düzlük alanlarda insan gücüne olan ihtiyacı azaltarak işsizliğe ve dolayısıyla göçe neden olur."
    ],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Tahıllar ve Baklagiller Üretimi",
    body: "Tahıllar, karasal iklimin geniş yer kaplaması nedeniyle Türkiye'de ekim alanı en geniş ürün grubudur. Buğday, ilkbahar yağışı ve yaz kuraklığı ister; bu nedenle yaz yağışları olan Karadeniz kıyılarında ve soğuk Erzurum-Kars'ta doğal olarak yetişmez. En çok İç Anadolu'da (Konya) üretilir. Mısır ise doğal olarak Karadeniz'de yetişirken, ticari değeri yüksek olduğu için sulamayla en çok Akdeniz'de üretilir. Çeltik (pirinç) sivrisinek/sıtma riski nedeniyle devlet kontrolünde akarsu yataklarında (Edirne-Meriç) ekilir. Kırmızı mercimek ise kuraklığa en dayanıklı baklagil olarak Güneydoğu'da öndedir.",
    bullets: [
      "Buğdayın Karadeniz kıyılarında yetişmemesinin nedeni yaz yağışları, Erzurum-Kars'ta yetişmemesinin nedeni ise yaz sıcaklığının yetersizliğidir.",
      "Mısır, Karadeniz'de halkın temel besin maddesi olduğundan ticari değeri düşüktür; Akdeniz'de ise sanayi ham maddesi olarak satıldığı için ekonomik değeri yüksektir.",
      "Çeltik ekim alanlarının akarsu boylarında yoğunlaşması tamamen su kaynakları ilişkisidir."
    ],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Endüstri (Sanayi) Ürünleri ve Devlet Kontrolü",
    body: "Sanayi ürünleri, fabrikalarda işlenerek katma değer kazanan ham maddelerdir. Şeker pancarı sulamayla her yerde yetişir ama çabuk bozulduğu için şeker fabrikalarının yakınına kurulması gerekir. Kıyılarda ekonomik değeri daha yüksek ürünler ekildiği için şeker pancarı iç kesimlerde yoğundur. Pamuk yaz kuraklığı ve alüvyal toprak ister, GAP ile en çok Şanlıurfa'da yetiştirilir. Çay bol nem ve asidik toprak ister, sadece Doğu Karadeniz'de yetişir. Haşhaş (uyuşturucu), kenevir (uyuşturucu/lif), çeltik (sıtma) ve tütün (kalite) devlet denetimindedir.",
    bullets: [
      "Çay, mikroklima ve özel toprak şartları nedeniyle yetişme alanı en dar olan endüstri ürünüdür.",
      "Şeker pancarı fabrikalarının çevresinde besi hayvancılığının gelişmesi, şeker pancarı küspesinin çok besleyici bir hayvan yemi olmasındandır.",
      "Pamuk, Güneydoğu Anadolu'da birinci sıradayken, Iğdır ovasında mikroklima olarak üretilir."
    ],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Meyveler, Yağ Bitkileri ve Mikroklima Alanları",
    body: "Türkiye, iklim çeşitliliği sayesinde zengin meyve tarımına sahiptir. Üzüm ve elma soğuğa en dayanıklı, yetişme alanı en geniş meyvelerdir. Zeytin Akdeniz ikliminin kış ılıklığı isteyen ürünüdür ve en çok Ege ile Güney Marmara'da üretilir (Artvin'de mikroklima olarak yetişir). Fındık nemli Karadeniz iklimine bağlı olarak Ordu/Giresun ve Sakarya'da yoğundur. Muz tropikal karakteri nedeniyle kış ılıklığı isteği en yüksek olan meyvedir ve sadece Anamur kıyılarında mikroklima olarak yetişir. Ayçiçeği ise en çok Marmara'da (Ergene) yetiştirilir.",
    bullets: [
      "Rize'de turunçgil, Artvin'de zeytin ve Iğdır'da pamuk yetişmesi tamamen mikroklima (özel konum) örnekleridir.",
      "Muz, kış ılıklığı isteği en yüksek olan tropikal meyvedir. Türkiye'de sadece Anamur-Alanya arasında mikroklima olarak yetişir.",
      "İncir, yaş olarak taşınması zor olduğundan kurutularak ihraç edilen en önemli meyvelerimizdendir."
    ],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Türkiye'de Hayvancılık Faaliyetleri ve Türleri",
    body: "Hayvancılık, bitki örtüsü ve yer şekillerine paralel olarak dağılmıştır. Bozkır alanlarında küçükbaş (koyun-İç Anadolu, kıl keçisi-Akdeniz engebeleri, tiftik keçisi-Ankara) yaygındır. Yaz yağışlı yüksek çayırlarda büyükbaş mera hayvancılığı (Erzurum-Kars) yapılır ve verim iklime bağlıdır. Büyük şehirlerin çevresinde ise pazara ve tüketiciye yakınlık nedeniyle besi (ahır) hayvancılığı ve kümes hayvancılığı yoğunlaşmıştır; kapalı alanlarda yapıldıkları için iklimden etkilenmezler, verimleri çok yüksektir.",
    bullets: [
      "Besi ve Kümes hayvancılığı kapalı alanlarda yapıldığından iklim koşullarından etkilenmez; üretimde yıllık dalgalanma görülmez.",
      "Mera hayvancılığında ise kurak geçen yıllarda et ve süt üretimi hızla düşer, üretimde dalgalanma çok fazladır.",
      "Karadeniz'in balık miktarında birinci olmasının nedeni sularının soğuk, oksijen oranının fazla olması ve plankton zenginliğidir."
    ],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Tarımda Nadası Önlemenin Yöntemleri ve Nöbetleşe Ekim",
    body: "Nadas, toprağı boş bırakarak su biriktirmeyi amaçlasa da erozyona yol açtığı ve toprağı korumasız bıraktığı için verimsiz bir yöntemdir. Nadası önlemenin en temel yolu sulama imkanlarını geliştirmektir. Ancak sulamanın olmadığı yarı kurak alanlarda, nadas yerine Nöbetleşe Ekim (münavebeli tarım) uygulanır. Nöbetleşe ekimde toprağın azot dengesini korumak için bir yıl buğday ekiliyorsa, ertesi yıl toprağı boş bırakmak yerine köklerinde azot bağlayan mercimek, nohut gibi baklagiller veya yem bitkileri ekilir.",
    bullets: [
      "Nöbetleşe ekim, nadasa alternatif en çevreci yöntemdir ve erozyonu önler.",
      "Baklagiller toprağa azot kazandırarak kimyasal gübre ihtiyacını azaltır.",
      "Nöbetleşe ekimin yaygınlaşması, tarım arazilerinin her yıl aktif olarak ekonomiye katılmasını sağlar."
    ],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Organik Tarım ve İyi Tarım Uygulamaları Potansiyeli",
    body: "Türkiye, zengin ekolojik yapısı ve geleneksel tarım alışkanlıkları sayesinde organik tarım potansiyeli yüksek bir ülkedir. Kimyasal gübre ve ilaç kullanılmadan, sertifikalı olarak yapılan tarıma Organik Tarım denir. İyi Tarım ise kimyasal kullanımının kontrol altında tutulduğu, insan ve çevre sağlığına zarar vermeyen izlenebilir tarımdır. Türkiye'de organik tarım ekim alanları en fazla Ege Bölgesi'nde yoğunlaşmıştır. Özellikle kuru incir, kuru üzüm, kayısı ve fındık gibi ihraç değeri yüksek ürünlerde organik üretim yaygındır.",
    bullets: [
      "Organik tarım çevre kirliliğini önler ve biyoçeşitliliği korur.",
      "Ege Bölgesi, organik tarımda hem üretici hem de ihracat merkezi olarak Türkiye'de ilk sıradadır.",
      "İyi tarım uygulamaları, barkod sistemiyle tüketicinin ürünün tarladan sofraya olan tüm aşamalarını takip etmesini sağlar."
    ],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Hayvancılıkta Verimi Artırma Yolları",
    body: "Türkiye, hayvan sayısı bakımından Avrupa'da ilk sıralarda yer almasına rağmen et ve süt veriminde geridedir. Bu durum hayvancılık yöntemlerinin geleneksel olmasından kaynaklanır. Verimi artırmak için: Geleneksel mera hayvancılığı yerine modern besi ve ahır hayvancılığı yaygınlaştırılmalı, yerli ırklar ıslah edilerek verimli yabancı ırklarla melezleştirilmeli, erken kuzu ve buzağı kesimleri önlenmeli, yem sanayisi desteklenmeli ve hayvan hastalıklarıyla etkin mücadele edilmelidir.",
    bullets: [
      "Mera hayvancılığında verim iklime bağlıyken, besi hayvancılığında verim tamamen uygulanan teknolojiye ve yeme bağlıdır.",
      "Yerli sığır ırklarımızın (yerli kara, boz ırk) et ve süt verimi düşüktür; Kültür ırkları (Holstein, Simmental) ise yüksek verimlidir.",
      "Besi hayvancılığı yatırımları et ve süt üretimindeki mevsimsel fiyat dalgalanmalarını önler."
    ],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Arıcılıkta Flora Çeşitliliği ve Marka Ballarımız",
    body: "Türkiye, yer şekillerinin engebeli olması ve kısa mesafede değişen iklim şartları sayesinde çok zengin bir bitki çeşitliliğine (flora) sahiptir. Bu durum arıcılık faaliyetlerini olumlu etkiler. Türkiye, bal üretiminde dünyada Çin'den sonra ikinci sıradadır. Ege Bölgesi'nde Muğla ve çevresi çam balı (çam pamuklu koşnili salgısı) üretiminde dünya merkezidir. Rize'nin Anzer Yaylası'ndaki endemik çiçeklerden elde edilen Anzer Balı, Kars ve Hakkari dağlarındaki çiçek balları ve Ordu'nun kestane balları en ünlü coğrafi işaretli ürünlerimizdir.",
    bullets: [
      "Arıcılık, bitki çeşitliliğinin fazla olduğu sanayiden uzak dağlık alanlarda (Muğla, Ordu, Kars, Hakkari) yoğundur.",
      "Çam balı, arıların çiçek poleni yerine kızılçam ağaçlarında yaşayan böceklerin salgılarını toplamasıyla üretilen özel bir salgı balıdır.",
      "Arıcılık faaliyetleri tarım alanlarında tozlaşmayı (polinizasyon) sağlayarak tarımsal verimliliği de dolaylı olarak artırır."
    ],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  },
  {
    heading: "Balıkçılıkta Sürdürülebilirlik Problemleri",
    body: "Üç tarafı denizlerle çevrili olan Türkiye'de balıkçılık potansiyeli yeterince değerlendirilememektedir. Denizlerimizden elde edilen balıkların %70'inden fazlası Karadeniz'den sağlanır. Ancak yanlış ve kaçak avlanma (trol avcılığı, dinamit kullanımı), deniz kirliliği, kıyı tesislerinin artması ve erken avlanma balık stoklarını hızla tüketmektedir. Ayrıca Karadeniz'in 200 metre derinliğinin altında kükürtlü hidrojen gazı birikmesi nedeniyle canlı yaşamaması, balıkçılık alanını daraltan en önemli fiziki coğrafya engelidir.",
    bullets: [
      "Karadeniz, sularının soğuk olması, bol plankton içermesi ve oksijen oranının yüksek olması nedeniyle balık miktarında birinci sıradadır.",
      "Ege kıyılarında girintili çıkıntılı koyların varlığı kültür balıkçılığını (çipura, levrek kafes üretimi) çok geliştirmiştir.",
      "Aşırı avlanmanın önlenmesi için av yasaklarının denetlenmesi ve açık deniz balıkçılığının teşvik edilmesi gerekmektedir."
    ],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
  }
];

const madenlerveEnerjiSummaries = [
  {
    heading: "Türkiye'nin Maden Çeşitliliği ve Metalik Madenler",
    body: "Türkiye, maden çeşitliliği bakımından dünyada kendi kendine yetebilen ender ülkelerden biridir. Bu zenginliğin temel nedeni; farklı jeolojik dönemlere ait arazilerin bulunması, yoğun volkanizma ve tektonik hareketlerdir. Maden çeşitliliğinin en fazla olduğu yer Doğu Anadolu Bölgesi, özellikle Yukarı Fırat Bölümü (Elazığ - Maden çevresi)'dür. Demir Sivas Divriği'de çıkarılır; Karabük ve Ereğli'de taş kömürüne yakınlıktan, İskenderun'da ise ulaşımdan dolayı işlenir. Bakır Artvin (Murgul), Kastamonu (Küre) ve Elazığ'da çıkarılır; Samsun'da ise liman ulaşımı sayesinde işlenir.",
    bullets: [
      "Samsun'da bakır yatakları bulunmamasına rağmen Karadeniz'in en büyük bakır işleme tesisinin burada kurulması tamamen ulaşım kolaylığı ile ilgilidir.",
      "Karabük ve Ereğli Demir-Çelik fabrikalarının kurulmasında hammadde değil, taş kömürüne (enerji kaynağına) yakınlık belirleyici olmuştur.",
      "Maden çeşitliliğinin en zengin olduğu ilimiz Elazığ'dır."
    ],
    imageUrl: "/images/topics/maden_enerji_1783726561347.png"
  },
  {
    heading: "Diğer Metalik ve Metal Dışı Önemli Madenler",
    body: "Metalik madenlerin yanı sıra sanayide kullanılan diğer madenler de büyük öneme sahiptir. Boksit (alüminyum) Konya Seydişehir'de çıkarılır ve burada işlenir. Barit, sondaj kuyularında çamur yoğunlaştırıcı olarak Antalya Alanya'da çıkarılır. Bor mineralleri jet/roket yakıtı, cam ve nükleer sanayide kullanılır; dünya rezervlerinin %70'inden fazlası Türkiye'dedir (Balıkesir, Kütahya, Eskişehir, Bursa). Mermer, kalkerin metamorfizmaya uğramasıyla oluşur ve ihraç ettiğimiz en önemli maden türüdür (Afyonkarahisar, Marmara Adası).",
    bullets: [
      "Mermer, maden ihracat gelirlerimizde birinci sıradadır ve blok mermer olarak ihraç edilir.",
      "Bor yatakları, Türkiye'nin III. Jeolojik Zaman'da gölsel tortullaşma süreçlerinden geçtiğinin en büyük kanıtlarındandır.",
      "Asbest, ısıya son derece dayanıklı lifli bir madendir ancak kanserojen yapısı nedeniyle kullanımı sınırlandırılmıştır."
    ],
    imageUrl: "/images/topics/maden_enerji_1783726561347.png"
  },
  {
    heading: "Fosil (Tükenebilir) Enerji Kaynakları",
    body: "Türkiye, fosil enerji kaynakları (petrol, doğalgaz, taş kömürü) bakımından dışa bağımlı bir ülkedir. Ancak zengin linyit yataklarına sahiptir. Taş kömürü I. Jeolojik Zaman'da oluşmuştur, sadece Zonguldak'ta çıkarılır ve Çatalağzı Termik Santrali'nde kullanılır. Linyit ise III. Jeolojik Zaman ürünü olduğu için Türkiye'nin hemen her yerinde bulunur (en büyük rezerv Afşin-Elbistan santralindedir). Petrol sadece Batman ve Adıyaman'da çıkarılır (Batman rafinerisi hammaddeye yakındır). Doğalgaz ise Kırklareli Hamitabat ve Düzce Akçakoca'da çıkarılır.",
    bullets: [
      "Afşin-Elbistan, Türkiye'nin en büyük linyit rezervine ve en büyük linyit elektrik üretim kapasitesine sahip termik santralidir.",
      "Batman Rafinerisi Türkiye'nin hammaddeye yakın kurulan tek petrol rafinerisidir; diğerleri ulaşım ve pazara yakınlık esas alınarak kurulmuştur.",
      "Doğalgaz santralleri çevre kirliliği en az olan fosil kaynaklı santrallerdir ancak dışa bağımlılığımızı artırır."
    ],
    imageUrl: "/images/topics/maden_enerji_1783726561347.png"
  },
  {
    heading: "Yenilenebilir (Temiz) Enerji Kaynakları",
    body: "Türkiye, coğrafi konumu ve yer şekilleri sayesinde yenilenebilir enerji potansiyeli oldukça yüksek bir ülkedir. Engebeli yer şekilleri akarsularımızın akış hızını artırdığı için hidroelektrik potansiyelimiz çok yüksektir ve en çok baraj Doğu Anadolu'da (Atatürk, Karakaya, Keban) bulunur. Rüzgar enerjisi en çok Ege ve Marmara'da (İzmir Alaçatı - ilk santral) gelişmiştir. Güneş enerjisi güneşlenme süresinin en az olduğu Karadeniz hariç her yerde yaygındır (Konya Karapınar en büyük GES). Jeotermal enerji ise fay hatlarının yaygın olduğu Ege'de (Denizli Sarayköy, Aydın Germencik) öndedir.",
    bullets: [
      "Yusufeli Barajı (Çoruh Nehri), Türkiye'nin en yüksek, dünyanın ise 5. en yüksek gövde yüksekliğine sahip beton kemer barajıdır.",
      "Jeotermal ve Hidroelektrik enerjisi iklim koşullarından etkilenmezken; Rüzgar ve Güneş enerjisi hava durumuna bağlı olarak dalgalanma gösterir.",
      "Karadeniz Bölgesi, yıllık yağış ve bulutluluk gün sayısı en fazla olduğu için güneş enerjisi potansiyeli en düşük bölgemizdir."
    ],
    imageUrl: "/images/topics/maden_enerji_1783726561347.png"
  },
  {
    heading: "Nükleer Enerji ve Türkiye'nin Enerji Stratejisi",
    body: "Nükleer enerji, uranyum ve toryum elementlerinin parçalanmasıyla elde edilen devasa bir temiz enerji kaynağıdır. Türkiye, enerji güvenliğini sağlamak için nükleer santral projeleri yürütmektedir. İnşaatı devam eden ilk nükleer santralimiz Mersin Akkuyu Nükleer Güç Santrali'dir. İkinci nükleer santral ise Sinop kıyısında planlanmaktadır. Bu iki merkezin seçilmesinin en önemli nedenleri deprem riskinin en az olduğu kararlı araziler olmaları ve soğutma suyu ihtiyacını karşılamak için deniz kıyısında bulunmalarıdır.",
    bullets: [
      "Akkuyu ve Sinop'un seçilmesinin temel nedeni deprem riskinin az olması ve deniz suyunun soğutma amacıyla kullanılabilmesidir.",
      "Toryum rezervlerinde Eskişehir Sivrihisar yatakları dünyada ilk sıralarda yer alır ancak henüz ticari nükleer yakıt olarak kullanımı Ar-Ge aşamasındadır.",
      "Nükleer enerji, karbondioksit salınımı yapmadığı için temiz enerji kategorisinde değerlendirilir."
    ],
    imageUrl: "/images/topics/nukleer_enerji_1783727864452.png"
  },
  {
    heading: "Stratejik Madenler: Bor ve Toryumun Gelecekteki Rolü",
    body: "Bor ve toryum, geleceğin teknolojilerinde ve enerji üretiminde stratejik değere sahip elementlerdir. Bor mineralleri cam elyafı, deterjan, tarım, savunma sanayisi ve roket yakıtlarında kullanılır. Türkiye, dünya bor rezervlerinin %73'üne sahiptir. Toryum ise geleceğin nükleer reaktörlerinde uranyuma alternatif daha güvenli ve çevre dostu bir yakıt adayıdır. Türkiye, Eskişehir Sivrihisar yataklarında dünyanın en zengin toryum rezervlerinden birine sahiptir ve nükleer enerji teknolojileri geliştikçe bu madenin stratejik değeri katlanacaktır.",
    bullets: [
      "Bor madeni, Türkiye'nin en stratejik maden rezervidir ve dünya pazarlarında tekel gücümüz bulunmaktadır.",
      "Eskişehir Sivrihisar'daki toryum yatakları, yeşil nükleer enerji teknolojileri için hayati hammadde kaynağıdır.",
      "Bu madenlerin işlenmiş katma değerli ürün olarak ihraç edilmesi ülke ekonomisine katkılarını artıracaktır."
    ],
    imageUrl: "/images/topics/maden_enerji_1783726561347.png"
  },
  {
    heading: "Taş Kömürü ve Demir-Çelik Entegrasyonu",
    body: "Demir cevheri eritilmek için çok yüksek ısıya ihtiyaç duyar. Bu nedenle demir-çelik sanayisinde enerji kaynağı olarak kalorisi çok yüksek olan taş kömürü kullanılır. Türkiye'de taş kömürü sadece Zonguldak havzasında (I. Jeolojik Zaman arazisi) çıkarılmaktadır. Zonguldak'taki Karabük ve Ereğli Demir-Çelik fabrikalarının (Erdemir ve Kardemir) kuruluş yeri seçilirken demir yataklarına uzak olmasına bakılmamış, taş kömürüne (enerji kaynağına) yakınlık esas alınmıştır. Demir ise Sivas ve Malatya'dan tren hatlarıyla buraya taşınır.",
    bullets: [
      "Karabük ve Ereğli tesislerinin kurulmasında 'enerji kaynağına yakınlık' ilkesi geçerlidir.",
      "Demir madeninin Sivas ve Malatya'dan Zonguldak'a taşınması demiryolu ulaşımıyla ekonomik hale gelmiştir.",
      "İskenderun Demir-Çelik fabrikası ise kömür ithalatı kolaylığı ve deniz ulaşımı (liman) nedeniyle kıyıya kurulmuştur."
    ],
    imageUrl: "/images/topics/maden_enerji_1783726561347.png"
  },
  {
    heading: "Barajlarımızın Enerji Üretimindeki Yıllık Dalgalanmaları",
    body: "Türkiye'nin hidroelektrik potansiyeli yer şekillerinin engebeli olmasından dolayı çok yüksektir. Ancak akarsularımızın rejimleri düzensizdir (Karadeniz hariç). Yağışlı geçen ilkbahar ve kış aylarında barajların su seviyeleri yükselirken, kurak geçen yaz aylarında seviyeler düşer. Bu durum yıllık hidroelektrik enerji üretiminde büyük dalgalanmalara yol açar. Kurak yıllarda elektrik açığını kapatmak için doğalgaz ve kömür termik santrallerine yüklenilir, bu da enerji faturasını ve çevre kirliliğini artırır.",
    bullets: [
      "Hidroelektrik üretimi iklim dalgalanmalarına (kuraklık) doğrudan bağımlıdır.",
      "Fırat ve Dicle nehirleri üzerindeki barajlar (Atatürk, Keban) en yüksek enerji kapasitesine sahip tesislerimizdir.",
      "Akarsu debilerinin düştüğü kurak dönemlerde elektrik üretiminde doğalgaz payı artmaktadır."
    ],
    imageUrl: "/images/topics/maden_enerji_1783726561347.png"
  },
  {
    heading: "Rüzgar ve Güneş Enerjisinde Lisanssız Üretim Modeli",
    body: "Türkiye, güneşlenme süresinin uzunluğu ve rüzgar koridorlarının varlığı sayesinde temiz enerjide hızlı bir dönüşüm gerçekleştirmektedir. Son yıllarda yürürlüğe giren 'Lisanssız Elektrik Üretimi' yönetmeliği sayesinde, sanayi tesisleri, tarımsal işletmeler ve konutlar kendi çatılarına veya arazilerine Güneş Enerjisi Santrali (GES) kurarak kendi elektriklerini üretebilmektedir. Fazla üretilen elektrik ise şebekeye satılarak gelir elde edilir. Bu model, yerinden üretim ilkesiyle iletim hatlarındaki kayıpları azaltır.",
    bullets: [
      "Lisanssız GES ve RES yatırımları, küçük işletmelerin ve konutların kendi enerjilerini üretmelerine olanak tanır.",
      "Güneş enerjisi yatırımlarında Konya, Şanlıurfa, Kayseri ve Antalya en yüksek verimlilik oranlarına sahiptir.",
      "Rüzgar santralleri (RES) ise Çanakkale, Balıkesir, İzmir ve Hatay'ın rüzgar koridorlarında yoğunlaşmıştır."
    ],
    imageUrl: "/images/topics/maden_enerji_1783726561347.png"
  },
  {
    heading: "Doğalgaz Depolama ve Boru Hatlarının Jeopolitik Rolü",
    body: "Türkiye, tükettiği doğalgazın %99'unu Rusya, Azerbaycan ve İran gibi ülkelerden ithal etmektedir. Enerji kesintileri ve kış aylarındaki yüksek tüketim krizlerini önlemek amacıyla doğalgaz depolama tesisleri kurulmuştur. Silivri (İstanbul) deniz altı doğalgaz deposu ve Tuz Gölü (Aksaray) yer altı tuz mağarası doğalgaz deposu en stratejik tesislerimizdir. Bu depolar, boru hatlarındaki (TANAP, TürkAkım) gaz akışını dengeleyerek Türkiye'nin doğu-batı enerji köprüsü rolünü pekiştirir ve enerji güvenliğini sağlar.",
    bullets: [
      "Tuz Gölü Doğalgaz Depolama Tesisi, yer altındaki tuz bloklarının suyla eritilerek mağaraya dönüştürülmesiyle inşa edilmiştir.",
      "Silivri Doğalgaz Deposu, Türkiye'nin ilk deniz altı doğalgaz depolama tesisidir.",
      "Bu tesisler kış aylarında konutların ve sanayinin doğalgaz kesintisi yaşamamasını garanti altına alır."
    ],
    imageUrl: "/images/topics/maden_enerji_1783726561347.png"
  }
];

const sanayiVeTicaretSummaries = [
  {
    heading: "Türkiye'de Sanayinin Kuruluşunu Etkileyen Faktörler",
    body: "Türkiye'de sanayi tesislerinin coğrafi dağılışı son derece düzensizdir. Bir sanayi tesisinin yer seçiminde hammaddeden ulaşıma kadar birçok faktör rol oynar. Çabuk bozulabilen tarım ürünlerinin işlendiği fabrikalar (çay, şeker) hammadde kaynağına yakın kurulur. Demir-çelik gibi enerji ihtiyacı yüksek tesisler taş kömürüne yakın kurulur (Karabük-Ereğli). Bakır gibi ağır madenlerin işleme tesisleri liman ve ulaşım kolaylığı için kıyıya kurulur (Samsun). Tüketim ve iş gücü potansiyeli yüksek olan Marmara (İstanbul-Kocaeli) ise sanayinin merkezidir.",
    bullets: [
      "Sermaye, Türkiye'de sanayinin gelişmesindeki en önemli beşeri etkendir ve bu birikim en fazla Marmara Bölgesi'ndedir.",
      "Un ve unlu mamul fabrikalarının İç Anadolu'da, et ve süt ürünleri tesislerinin Doğu Anadolu'da yoğunlaşması hammaddeye yakınlık ilkesidir.",
      "Kağıt fabrikalarının (Zonguldak Çaycuma, Muğla Dalaman, Giresun Aksu) kıyı kesimlerde kurulması orman örtüsünün (hammadde) buralarda yoğunlaşmasındandır."
    ],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  },
  {
    heading: "Başlıca Sanayi Kolları ve Dağılışı",
    body: "Türkiye, farklı sanayi dallarında gelişmiş, üretim ve ihracat odaklı tesis altyapısına sahiptir. İhracatta birinci sırayı alan Otomotiv sanayisi Bursa, Kocaeli, Sakarya ve İzmir'de yoğunlaşmıştır. İstihdam oranı en yüksek olan Tekstil ve hazır giyim sektörü ise pamuk üretim alanlarının yanı sıra büyük şehirlerde (İstanbul, Bursa, Denizli, Gaziantep) gelişmiştir. Petrol rafinerileri (İzmit İpraş, İzmir Aliağa, Kırıkkale, Batman) kimya sanayisinin temelini oluşturur. Çimento fabrikaları ise hammaddesi toprak olduğu için her bölgeye yayılmıştır.",
    bullets: [
      "Otomotiv sanayisinde hammaddeye yakınlık değil, ulaşım, kalifiye iş gücü ve pazar şartları etkilidir.",
      "Tuğla ve çimento fabrikalarının hemen her ilimizde bulunmasının nedeni hammaddenin her yerde kolayca bulunabilmesidir.",
      "Dokuma sanayisi pamuk üretim alanlarının yanı sıra pazar potansiyeli yüksek olan İstanbul ve Bursa gibi büyük şehirlerde de çok gelişmiştir."
    ],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  },
  {
    heading: "Türkiye'nin Dış Ticareti: İhracat ve İthalat Yapısı",
    body: "Dış ticaret; bir ülkenin diğer ülkelerle yaptığı alım (ithalat) ve satım (ihracat) işlemleridir. Türkiye'nin dış ticareti sürekli açık veren (ithalatın ihracattan fazla olması) bir yapıya sahiptir. Bu açığın en büyük nedeni enerji (petrol, doğalgaz) ithalatıdır. İhracat ürünlerimiz arasında otomotiv, makineler, elektrikli cihazlar, demir-çelik, hazır giyim ve tarım ürünleri (fındık, kayısı) yer alır. İthalatımızda ise petrol, doğalgaz, makineler, teknolojik aletler ve otomobiller ilk sıralardadır.",
    bullets: [
      "Türkiye'nin ihracatında sanayi ürünleri %90'ın üzerinde paya sahiptir; tarım ve madenciliğin payı düşüktür.",
      "İthalatımızda en büyük payı enerji hammaddeleri (mineral yakıtlar) oluşturur, bu durum cari açığın en temel sebebidir.",
      "İhracat yaptığımız ülkelerin başında Almanya, ABD, İngiltere ve Irak gelir; İthalat yaptığımız ülkelerin başında ise Çin, Rusya ve Almanya yer alır."
    ],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  },
  {
    heading: "İç Ticaret ve Serbest Bölgeler",
    body: "İç ticaret; ülke sınırları içerisinde şehirler ve bölgeler arasında yapılan mal ve hizmet akışıdır. Türkiye'de iç ticaret son derece hareketli ve canlıdır. Bölgeler arasındaki iklim ve ürün çeşitliliği (Karadeniz'den çay, Akdeniz'den muz, Ege'den zeytin) iç ticareti destekler. Serbest bölgeler ise dış ticareti artırmak amacıyla vergi muafiyeti sağlanan gümrük dışı alanlardır. Mersin (ilk kurulan), İzmir EGS (en büyük hacimli), İstanbul, Kocaeli, Antalya ve Kayseri (İç Anadolu'daki tek serbest bölge) önemli örneklerdir.",
    bullets: [
      "İç ticaretin en büyük merkezi ve tüketim odağı Marmara Bölgesi (İstanbul)'dir.",
      "Serbest bölgeler ihracata yönelik üretim ve dış ticaret odaklı kuruldukları için genellikle büyük liman kentlerinde konumlanmıştır.",
      "Kayseri Serbest Bölgesi, deniz kıyısında yer almamasına rağmen İç Anadolu'nun sanayi ve ticaret dinamizmi sayesinde kurulan önemli bir karasal serbest bölgedir."
    ],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  },
  {
    heading: "Savunma Sanayisinde Yerlilik ve Coğrafi Dağılımı",
    body: "Türkiye, son 20 yılda savunma sanayisinde yerlilik oranını %20'lerden %80'lerin üzerine çıkarmıştır. Bu sektör yüksek teknoloji, Ar-Ge gücü ve devlet desteğiyle büyümektedir. Savunma sanayi kuruluşları (ASELSAN, ROKETSAN, TUSAŞ/TAI, HAVELSAN) stratejik ve askeri nedenlerden dolayı başkent Ankara çevresinde yoğunlaştırılmıştır. Ayrıca İstanbul (Baykar, askeri tersaneler) ve Kocaeli de savunma ve havacılık üretiminde önemli merkezler haline gelmiştir. Bu yatırımlar yüksek katma değerli ihracatı artırmaktadır.",
    bullets: [
      "Savunma sanayi tesislerinin Ankara'da yoğunlaşması idari merkez (başkent) olmasının yanı sıra güvenlik ve jeopolitik korunaklılık ile ilgilidir.",
      "İHA, SİHA ve askeri gemi üretimi, Türkiye'nin son yıllarda en yüksek ihracat artışı sağladığı teknoloji yoğun sanayi alanlarındandır.",
      "Bu tesisler üniversiteler ve teknoparklarla iş birliği yaparak kalifiye iş gücünün ülkede kalmasını sağlar."
    ],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  },
  {
    heading: "Organize Sanayi Bölgelerinin (OSB) Coğrafi Rolü",
    body: "Organize Sanayi Bölgeleri (OSB); şehirlerdeki düzensiz sanayileşmeyi önlemek, çevre kirliliğini kontrol altında tutmak ve sanayi yatırımlarını altyapısı hazır alanlara yönlendirmek amacıyla kurulan planlı bölgelerdir. OSB'ler sayesinde fabrikalar su, elektrik, yol ve atık arıtma tesislerine ortaklaşa erişim sağlar. Türkiye'de en çok OSB Marmara ve Ege bölgelerinde yoğunlaşmış olmakla birlikte, bölgesel kalkınmayı sağlamak amacıyla Anadolu'nun birçok ilinde teşvikli OSB'ler kurulmuştur.",
    bullets: [
      "OSB'ler, sanayi tesislerinin konut alanlarıyla iç içe geçmesini engelleyerek çevre ve insan sağlığını korur.",
      "Bölgesel teşvik yasaları kapsamında Doğu ve Güneydoğu'daki OSB'lere yapılan yatırımlarda vergi indirimi ve arsa tahsisi sağlanır.",
      "OSB'lerin kurulduğu kentlerde (Örn: Manisa, Çerkezköy, İnegöl) nüfus artışı ve göç alımı hızlanır."
    ],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  },
  {
    heading: "Dış Ticaret Hadleri ve Cari Açık Problemi",
    body: "Dış ticaret haddi; ihraç ettiğimiz malların fiyat endeksinin ithal ettiğimiz malların fiyat endeksine oranıdır. Türkiye, dışarıya genellikle tonajı ağır ama birim değeri düşük ürünler (demir-çelik, hazır giyim, çimento, tarım ürünleri) satarken; dışarıdan birim değeri çok yüksek teknolojik ürünler, kimyasallar ve enerji hammaddeleri almaktadır. Bu durum dış ticaret hadlerinin aleyhimize gelişmesine ve sürekli dış ticaret açığı (cari açık) vermemize yol açar. Çözüm, yüksek teknoloji ve patent içeren ihracattır.",
    bullets: [
      "Katma değeri düşük ürünlerin ihracatı ticaret hacmini büyütse de dış ticaret dengesini sağlamada yetersiz kalır.",
      "Enerji ithalatı (petrol ve gaz) cari açığın en büyük bileşenidir; yerli ve yenilenebilir enerjiye geçiş bu açığı azaltır.",
      "Markalaşma ve yazılım ihracatı dış ticaret hadlerini lehimize çeviren en etkili unsurlardır."
    ],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  },
  {
    heading: "Sınır Ticareti ve Sınır Ticaret Merkezleri (STM)",
    body: "Sınır ticareti; komşu ülkelerle olan kara sınırlarımızda, sınır bölgesindeki illerin ihtiyaçlarını karşılamak ve bölgesel ticareti canlandırmak amacıyla özel izinle yapılan kolaylaştırılmış ticarettir. Sınır ticaretinin yürütüldüğü alanlara Sınır Ticaret Merkezi (STM) denir. Van (Kapıköy), Ağrı (Sarısu), Iğdır (Dilucu) ve Hakkari (Esendere) önemli sınır ticaret merkezleridir. Bu merkezler sayesinde sınır illerindeki esnaflar gümrük vergilerinden muaf veya indirimli olarak komşu ülkelerle ithalat ve ihracat yapabilmektedir.",
    bullets: [
      "Sınır ticareti, ulaşıma sapa kalmış sınır illerinin ekonomik olarak kalkınmasını hedefler.",
      "Sınır ticaretine konu olan ürünlerin listesi ve kotaları Ticaret Bakanlığı tarafından belirlenir.",
      "Komşu ülkelerle yaşanan siyasi istikrarsızlıklar sınır ticaretinin hacmini doğrudan etkiler."
    ],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  },
  {
    heading: "E-Ticaret ve Dijitalleşmenin İç Ticarete Etkisi",
    body: "Geleneksel iç ticaret, son yıllarda internet altyapısının gelişmesi ve dijitalleşmeyle birlikte büyük bir e-ticaret dönüşümü yaşamaktadır. Fiziksel mağazacılık yerini dijital pazaryerlerine bırakırken, iç ticarette mal sevkiyatı hızlanmıştır. Bu durum lojistik sektörünün büyümesine ve İstanbul, Kocaeli, Ankara ve İzmir gibi kentlerin çevresinde devasa kargo dağıtım ve lojistik merkezlerinin kurulmasına yol açmıştır. Kırsaldaki küçük üreticiler de e-ticaret sayesinde ulusal pazara doğrudan erişim sağlamaktadır.",
    bullets: [
      "E-ticaret, iç ticaretin coğrafi sınırlarını ortadan kaldırarak yerel üreticileri tüm Türkiye ile buluşturur.",
      "Lojistik merkezlerinin yer seçiminde ulaşım yolları (otoban, demiryolu) kavşaklarında bulunması (göreceli konum) belirleyicidir.",
      "Dijitalleşme iç ticarette nakit akışını ve faturalandırma süreçlerini hızlandırmıştır."
    ],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  },
  {
    heading: "Bölgesel Teşvik Sistemleri ve Sanayinin Anadolu'ya Yayılması",
    body: "Marmara Bölgesi'nde sanayinin aşırı yoğunlaşması arsa fiyatlarını artırmış, çevre kirliliğine yol açmış ve deprem riskinden dolayı endişe yaratmıştır. Devlet, sanayiyi Anadolu'ya yaymak amacıyla 6 bölgeli Teşvik Sistemi uygulamaktadır. 1. bölgeden (en gelişmiş - İstanbul) 6. bölgeye (en az gelişmiş - Doğu/Güneydoğu illeri) gidildikçe vergi indirimi, SGK prim desteği, arsa tahsisi ve faiz desteği oranları artmaktadır. Bu teşvikler sayesinde Manisa, Aksaray, Şanlıurfa gibi illerde yeni sanayi merkezleri doğmuştur.",
    bullets: [
      "Teşvik sistemi, bölgeler arası gelişmişlik farkını (sosyo-ekonomik uçurumu) kapatmayı amaçlar.",
      "6. bölge teşvikleri en yüksek destek oranlarına sahiptir ve Doğu Karadeniz, Doğu Anadolu ile Güneydoğu illerini kapsar.",
      "Yatırımların Anadolu'ya kayması, metropollere yönelik göç baskısını azaltan en etkili beşeri çözümdür."
    ],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  }
];

const ulasimVeTurizmSummaries = [
  {
    heading: "Türkiye'de Ulaşım Sistemleri: Karayolu ve Geçitler",
    body: "Türkiye'de ulaşım ağlarının gelişimi, yer şekillerinin uzanış doğrultusundan (doğu-batı uzanışlı dağlar) doğrudan etkilenmiştir. Bu durum kuzey-güney yönlü ulaşımda geçitler ve tünellerin kullanımını zorunlu kılmıştır. Karayolu iç taşımacılıkta en çok tercih edilen ulaşım sistemidir. Kuzey-güney yönlü yolların maliyeti dağları aşmak gerektiği için çok yüksektir. Karadeniz'i bağlayan Zigana ve Kop geçitleri ile Akdeniz'i bağlayan Çubuk, Sertavul, Gülek ve Belen geçitleri en önemli ulaşım koridorlarıdır.",
    bullets: [
      "Türkiye'de iç taşımacılıkta karayolunun bu kadar baskın olmasının nedeni her noktaya ulaşım sağlayabilme özelliğidir.",
      "Geçitlerin tamamı engebeli kıyı bölgelerinde yoğunlaşmıştır; İç Anadolu ve Güneydoğu'da yol yapım maliyeti düzlükler nedeniyle düşüktür.",
      "Ovit Tüneli (Rize-Erzurum), Karadeniz'i Doğu Anadolu'ya bağlayan, kışın kapanan yolları açık tutan stratejik bir tüneldir."
    ],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  },
  {
    heading: "Demiryolu Ağı ve Bağlantısı Olmayan Önemli Merkezler",
    body: "Demiryolu ulaşımı, karayoluna göre daha ucuz, güvenli ve çevre dostudur. Ancak yer şekillerinin engebeli olması Türkiye'de demiryolu ağının yaygınlaşmasını engellemiştir. Doğu Karadeniz (Trabzon, Rize, Artvin), Batı Karadeniz'de Sinop, Akdeniz'de Antalya ve Muğla, batıda Çanakkale ve güneydoğu sınırında Hakkari demiryolu bağlantısı olmayan en önemli merkezlerdir. Yüksek Hızlı Tren (YHT) hatları ise Ankara merkezli olarak Eskişehir, İstanbul, Konya, Karaman ve Sivas'a ulaşmaktadır.",
    bullets: [
      "Antalya, Türkiye'nin en büyük turizm merkezi olmasına rağmen demiryolu bağlantısı olmayan en büyük şehridir.",
      "Sinop limanının doğal bir liman olmasına rağmen gelişmemesinin ana nedeni demiryolu bağlantısının olmaması ve hinterlandının darlığıdır.",
      "Zonguldak limanı, taş kömürü ve demir-çelik sanayisi nedeniyle demiryolu hattına sahip nadir Karadeniz limanlarındandır."
    ],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  },
  {
    heading: "Denizyolu ve Havayolu Ulaşımı: Limanlarımızın Rolü",
    body: "Denizyolu, uluslararası ticarette en ucuz taşıma yöntemidir. Limanlarımızın gelişimi hinterland genişliği ve demiryolu bağlantısıyla doğrudan ilgilidir. İstanbul en büyük ithalat limanımız, İzmir en önemli ihracat limanımız, Mersin ise en büyük serbest bölge transit limanlarımızdandır. Doğal liman olan Sinop dağlar yüzünden gelişemezken, Samsun Karadeniz'in demiryolu olan en büyük limanıdır. Havayolunda ise denizin doldurulmasıyla yapılan Ordu-Giresun (OR-Gİ) ve Rize-Artvin havalimanları önemli yatırımlardır.",
    bullets: [
      "Denizyolu taşımacılığının en ucuz olmasının nedenleri: Tek seferde çok fazla yük taşıyabilmesi, yol yapım ve bakım maliyetinin olmamasıdır.",
      "Ro-Ro Taşımacılığı: Tır ve kamyonların gemilerle deniz üzerinden taşınmasıdır. Mersin-Trieste (İtalya) en önemli hattır.",
      "OR-Gİ ve Rize-Artvin havalimanlarının denizin doldurulmasıyla yapılma nedeni, bölgede düzlük arazi (fiziki coğrafya engeli) bulunmamasıdır."
    ],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  },
  {
    heading: "Türkiye'de Turizm Çeşitliliği ve Potansiyeli",
    body: "Türkiye, coğrafi konumu ve tarihi geçmişi sayesinde zengin turizm potansiyeline sahiptir. Güneşli gün sayısının en fazla olduğu Akdeniz ve Ege kıyılarında deniz turizmi gelişmiştir (Karadeniz'de bulutluluk nedeniyle kısalır). Yüksek dağlarda kış turizmi (Bursa Uludağ, Palandöken, Erciyes, Sarıkamış) yaygındır. Fay hatlarının yaygınlığı termal (sağlık) turizmini (Afyon, Denizli) geliştirmiştir. Karadeniz'de yayla turizmi, inanç turizmi (Sümela, Meryem Ana, Balıklıgöl) ve kültür turizmi de büyük katkı sağlar.",
    bullets: [
      "Deniz turizmi sezonunun Akdeniz'den Karadeniz'e doğru kısalması enlem ve bulutluluk etkisidir.",
      "Termal turizm, jeolojik yapıya (fay hatlarına) bağlı olduğu için iklim koşullarından etkilenmez; 12 ay boyunca turizme açıktır.",
      "Palandöken (Erzurum) kayak merkezi, pist uzunluğu ve kar kalitesiyle kış olimpiyatlarına ev sahipliği yapabilecek standarttadır."
    ],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  },
  {
    heading: "UNESCO Dünya Kültür Mirası Listesi ve Türkiye",
    body: "Türkiye'de UNESCO Dünya Miras Listesi'nde yer alan çok sayıda tarihi, kültürel ve doğal varlık bulunmaktadır. Şanlıurfa Göbeklitepe dünyanın en eski tapınak merkezi olarak listededir. Kapadokya (Nevşehir) ve Pamukkale (Denizli) hem doğal hem de kültürel miras olarak listelenmiş karma tipli alanlarımızdır. Efes ve Bergama antik kentleri (İzmir), Truva (Çanakkale), Safranbolu Evleri (Karabük), Nemrut Dağı heykelleri (Adıyaman) ve Divriği Ulu Camii (Sivas) diğer önemli UNESCO değerlerimizdendir.",
    bullets: [
      "Kapadokya (Nevşehir) ve Pamukkale (Denizli), listede hem doğal hem de kültürel miras (karma yapılı) olarak yer alan iki özel alanımızdır.",
      "Göbeklitepe (Şanlıurfa), 2018 yılında listeye dahil edilerek dünya arkeoloji tarihini kökten değiştirmiştir.",
      "Safranbolu Evleri (Karabük), korunmuş tarihi mimari dokusuyla yerli ve yabancı turistlerin en çok ziyaret ettiği kültürel miraslardandır."
    ],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  },
  {
    heading: "Geçitlerin Lojistik Maliyetlere ve Ticarete Etkisi",
    body: "Kıyı bölgelerindeki dağ sıraları, deniz kıyısındaki limanlar ile iç kesimlerdeki üretim alanları arasında lojistik bir engel oluşturur. Bu engelleri aşan geçitler ve tüneller ticaretin akış hızını ve nakliye maliyetlerini doğrudan belirler. Örneğin Gülek Geçidi, Çukurova sanayisini ve Mersin Limanı'nı İç Anadolu üzerinden tüm Türkiye'ye bağlayan en stratejik lojistik koridordur. Zigana ve Kop geçitleri ise Doğu Karadeniz limanlarını Doğu Anadolu'ya bağlayarak transit ticaret yollarını açık tutar.",
    bullets: [
      "Tünel ve viyadük yatırımları (Örn: Ilgaz 15 Temmuz İstiklal Tüneli) virajları azaltarak yakıt tasarrufu sağlar ve kaza riskini düşürür.",
      "Gülek Geçidi, Akdeniz kıyı sanayisinin İç Anadolu pazarına ulaşmasındaki en kritik geçittir.",
      "Lojistik maliyetlerin düşürülmesi, Türk ihraç ürünlerinin dış pazarlardaki rekabet gücünü artırır."
    ],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  },
  {
    heading: "Kültür Turizminde Doğu Ekspresi ve Demir Yolları",
    body: "Son yıllarda demiryolu ulaşımı, sadece yolcu taşımacılığı değil, aynı zamanda alternatif bir turizm dalı haline gelmiştir. Ankara-Kars arasında çalışan 'Doğu Ekspresi' ve 'Turistik Doğu Ekspresi', kış aylarında iç turizmi canlandıran en popüler hatlardır. Tren seyahati boyunca yolcular İç ve Doğu Anadolu'nun tarihi ve coğrafi dokusunu (Erzincan Kemaliye, Erzurum Çifte Minareli Medrese, Kars Ani Harabeleri) keşfetmektedir. Bu model, kitle turizmini Anadolu'nun iç kesimlerine yaymıştır.",
    bullets: [
      "Turistik Doğu Ekspresi seyahati, kış turizmi ile kültür turizmini birleştiren başarılı bir bölgesel kalkınma modelidir.",
      "Kars Ani Harabeleri, tren hattının son durağındaki en önemli tarihi ve kültürel (UNESCO) destinasyondur.",
      "Benzer turistik tren projeleri Van Gölü Ekspresi ve Karaelmas Ekspresi hatlarında da planlanmaktadır."
    ],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  },
  {
    heading: "Kruvaziyer Turizmi ve Önemli Limanlarımız",
    body: "Kruvaziyer turizmi; üzerinde birçok konaklama, yemek, eğlence tesisi bulunan devasa lüks yolcu gemileriyle (yüzen oteller) yapılan deniz turizmidir. Yüksek gelir grubuna hitap eden bu turizm türünde liman altyapısı çok önemlidir. Türkiye'de kruvaziyer gemilerinin en çok yanaştığı limanlar Kuşadası Limanı (Aydın - Efes'e yakınlığı nedeniyle), İstanbul Galataport Limanı, Bodrum Limanı ve Çeşme Limanı'dır. Bu limanlar şehir esnafına ve perakende sektörüne döviz girdisi sağlar.",
    bullets: [
      "Kuşadası Limanı, kruvaziyer gemi sayısı ve gelen turist kapasitesi bakımından Türkiye'de birinci sıradadır.",
      "İstanbul Galataport, tarihi yarımadaya yakınlığı ve modern terminal yapısıyla dünyanın en prestijli kruvaziyer limanlarındandır.",
      "Kruvaziyer turistleri konaklama yapmadıkları için harcamalarını doğrudan yeme-içme, hediyelik eşya ve yerel turlara yaparlar."
    ],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  },
  {
    heading: "Turizm Koridorları ve Bölgesel Markalaşma Projeleri",
    body: "Kültür ve Turizm Bakanlığı, Türkiye Turizm Stratejisi kapsamında turizm faaliyetlerini ülke geneline yaymak ve bölgesel kalkınmayı desteklemek amacıyla 'Turizm Koridorları' belirlemiştir.\n- Yayla Koridoru: Samsun'dan Artvin'e kadar uzanan Doğu Karadeniz yaylalarını kapsar.\n- İnanç Koridoru: Tarsus, Hatay, Gaziantep, Şanlıurfa ve Mardin'i kapsar.\n- İpek Yolu Koridoru: Adapazarı, Bolu, Ankara tarihi güzergahıdır.\n- Batı Anadolu Zeytin Koridoru: Çanakkale-Balıkesir-İzmir kıyı hattıdır.",
    bullets: [
      "Turizm koridorları projesi, sadece kıyı turizmine (kum-güneş-deniz) bağımlı olan turizm yapısını çeşitlendirmeyi hedefler.",
      "İnanç koridoru, Ortadoğu ve Hristiyan dünyasından yüksek sayıda kültür turisti çekmektedir.",
      "Yayla koridoru, eko-turizm ve doğa sporları (rafting, trekking) yatırımlarıyla Karadeniz kırsalını kalkındırmaktadır."
    ],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  },
  {
    heading: "Ramsar Sözleşmesi ve Sulak Alanların Turizmdeki Rolü",
    body: "Ramsar Sözleşmesi; özellikle su kuşlarının yaşama alanı olarak uluslararası öneme sahip sulak alanların korunmasını amaçlayan küresel bir çevre anlaşmasıdır. Türkiye, bu sözleşmeye üyedir ve tescillenmiş birçok sulak alana (kuş cenneti) sahiptir. Manyas Kuş Gölü (Balıkesir), Göksu Deltası (Mersin), Sultan Sazlığı (Kayseri), Seyfe Gölü (Kırşehir), Nemrut Kalderası (Bitlis), Meke Maar Gölü (Konya) önemli Ramsar alanlarıdır. Bu sulak alanlar ekolojik turizm (kuş gözlemciliği - birdwatching) için büyük potansiyele sahiptir.",
    bullets: [
      "Ramsar alanları, nesli tehlike altındaki göçmen kuşların üreme ve konaklama sahalarıdır.",
      "Manyas Kuş Cenneti, Türkiye'nin Ramsar sözleşmesiyle korunan en ünlü kuş gözlem merkezidir.",
      "Kuraklık ve tarımsal sulama amaçlı aşırı su çekimi, bu sulak alanların ekosistemini tehdit eden en büyük çevre sorunudur."
    ],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  }
];

const bolgelerCografyasiSummaries = [
  {
    heading: "Marmara Bölgesi: Sanayi ve Nüfusun Kalbi",
    body: "Marmara Bölgesi, yükseltisi en az olan, en düz coğrafi bölgemizdir. Üç farklı iklimin (Karadeniz, Akdeniz, Karasal) geçiş kuşağında yer alır. Nüfus miktarı, nüfus yoğunluğu, sanayi tesisleri, ticaret hacmi ve enerji tüketimi bakımından Türkiye'de birinci sıradadır. Çatalca-Kocaeli bölümü sanayinin en yoğun olduğu alandır. Kümes hayvancılığı (pazara yakınlık) ve ayçiçeği (Ergene havzası) tarımı çok gelişmiştir. Yıldız Dağları bölümü ise engebeli yapısıyla bölgenin en seyrek nüfuslu yeridir.",
    bullets: [
      "Marmara'da yükseltinin az olması, yol yapım maliyetlerinin düşük olmasına ve tarım alanlarının makineleşmeye çok elverişli olmasına zemin hazırlamıştır.",
      "Bölge, tüketici nüfusun devasa boyutta olması nedeniyle kümes hayvancılığı yatırımlarında liderdir.",
      "Yıldız Dağları bölümü (Kırklareli), ulaşım yollarına sapa kalması nedeniyle seyrek nüfuslanmıştır."
    ],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  },
  {
    heading: "Ege Bölgesi: Horst-Graben Sistemleri ve Tarım",
    body: "Ege Bölgesi'nde dağlar kıyıya dik uzanır (Kıyı Ege). Horst adı verilen kırık dağlar (Kaz, Madra, Yunt, Bozdağlar, Aydın, Menteşe) ile graben adı verilen çöküntü ovaları (Bakırçay, Gediz, Menderes) yaygındır. Enine kıyı tipi görülür, girinti çıkıntı fazladır ve denizel etki iç kesimlere girebilir. Zeytin, tütün, incir ve üzüm (ZÜTİ) üretiminde ilk sıradadır. Jeotermal enerji kaynakları en zengindir. Menteşe Yöresi (Muğla) ise dağların kıyıya paralel uzandığı engebeli ve seyrek nüfuslu istisnai yerdir.",
    bullets: [
      "Ege Bölgesi'nde dağların dik uzanması kıyı ile iç kesimler arasında iklim farkını azaltırken, kıyı limanlarının hinterlandını çok genişletmiştir.",
      "Menteşe Yöresi, Ege'nin en çok yağış alan ama engebe nedeniyle en seyrek nüfuslu ve demiryolu olmayan yöresidir.",
      "Kıyı Ege ovaları alüvyal toprakları sayesinde tarımsal verimliliği en yüksek alanlardandır."
    ],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  },
  {
    heading: "Akdeniz Bölgesi: Karstik Yapı ve Seracılık",
    body: "Akdeniz Bölgesi'nde Toros Dağları kıyıya paralel uzanır, boyuna kıyı tipi yaygındır. Kıyı ile iç kesimler arasında ulaşım geçitlerle (Çubuk, Sertavul, Gülek, Belen) sağlanır. Karstik yer şekilleri (Teke ve Taşeli platoları, polyeler, obruklar) en yaygın coğrafi unsurdur. Seracılık, turunçgil, muz tarımında liderdir. Deniz turizmi sezonu en uzun bölgedir. Karstik yapı nedeniyle Teke ve Taşeli yörelerinde nüfus son derece seyrektir. Kıl keçisi yetiştiriciliği yaygındır.",
    bullets: [
      "Akdeniz karstik polyeleri (Tefenni, Acıpayam, Korkuteli, Kestel, Elmalı, Muğla) tarımsal üretimin yoğunlaştığı düzlüklerdir.",
      "Teke ve Taşeli platoları karstik erime nedeniyle su tutmayan, kurak ve engebeli yapısıyla tarıma elverişsizdir; bu yüzden seyrek nüfusludur.",
      "Çukurova ovası Türkiye'nin en büyük alüvyal delta ovası olarak yılda birden fazla ürün alınabilen tarım merkezidir."
    ],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  },
  {
    heading: "İç Anadolu Bölgesi: Kuraklık ve Tahıl Ambarı",
    body: "İç Anadolu Bölgesi, yüzölçümü bakımından ikinci büyük bölgedir. Çevresi yüksek dağlarla çevrili olduğu için denizel etkiler giremez ve karasal iklim hakimdir. Türkiye'nin en az yağış alan bölgesidir. Rüzgar erozyonu ve çölleşme riski (Konya Karapınar) en yüksektir. Tahıl tarımı (buğday, arpa) ve şeker pancarı üretiminde birinci sıradadır. Küçükbaş hayvancılık (koyun) bozkır bitki örtüsü nedeniyle yaygındır. Nüfus düzlük alanlarda (Konya, Eskişehir, Kayseri) yoğundur.",
    bullets: [
      "İç Anadolu, Türkiye'nin tahıl ambarı olarak adlandırılır. Nadas alanlarının en geniş olduğu ikinci bölgemizdir.",
      "Konya Ovası Projesi (KOP) ile Göksu nehrinin suları mavi tünel vasıtasıyla Konya ovasına akıtılarak tarımsal verim artırılmıştır.",
      "Bozkır bitki örtüsü koyun yetiştiriciliğini (küçükbaş hayvancılık) bölgenin temel geçim kaynağı yapmıştır."
    ],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  },
  {
    heading: "Karadeniz Bölgesi: Yağış, Orman ve Dağınık Yerleşme",
    body: "Karadeniz Bölgesi, nemli iklim özellikleri, gür ormanları ve engebeli yer şekilleriyle özgün bir coğrafyaya sahiptir. Dağlar kıyıya paralel uzanır (Kuzey Anadolu Dağları). Falezler son derece yaygındır. Yağış rejimi düzenli olup heyelan riski en yüksek bölgedir. Kırsal kesimde dağınık yerleşme (suyun bol, arazinin engebeli olması nedeniyle) hakimdir. Çay ve fındık tarımında liderdir. Ormancılık faaliyetleri çok gelişmiştir. Taş kömürü madenciliği (Zonguldak) sanayinin temelidir.",
    bullets: [
      "Heyelanların en çok Karadeniz'de görülme nedeni: Aşırı yağış, killi toprak yapısı ve dik yamaç eğimidir.",
      "Kuzey Anadolu Dağları'nın kıyıya paralel olması, denizel havanın iç kesimlere geçmesini önlemiş; iç kesimlerde (Gümüşhane, Bayburt) iklimi sert karasallaştırmıştır.",
      "Doğu Karadeniz kıyıları engebeli yapısı nedeniyle net göç veren bir bölgedir. Tarımda makine kullanımı engebe yüzünden imkansıza yakındır."
    ],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  },
  {
    heading: "Doğu Anadolu Bölgesi: Yükselti, Soğuk ve Mera Hayvancılığı",
    body: "Doğu Anadolu Bölgesi, Türkiye'nin en yüksek, en engebeli ve fiziki şartları en zorlu coğrafi bölgesidir. Yüzölçümü en büyük, ortalama yükseltisi en fazla olan bölgedir (2000 metre üzeri). Karasallık derecesi en şiddetlidir. Kışlar çok soğuk, uzun ve kar yağışlı geçer. Don olayları ve çığ riski en yüksektir. Akarsuların akış hızları ve hidroelektrik enerji potansiyelleri en yüksektir. Yaz yağışlarıyla yeşeren gür Alpin çayırlar sayesinde büyükbaş mera hayvancılığı (Erzurum-Kars) en önemli geçim kaynağıdır.",
    bullets: [
      "Erzurum-Kars-Ardahan platolarında yaz yağışlarının görülmesi büyükbaş mera hayvancılığını geliştirmiştir ancak verim iklime bağlı olduğundan dalgalıdır.",
      "Yukarı Fırat Bölümü (Elazığ, Malatya çevresi), maden çeşitliliği ve rezervi bakımından sadece bölgenin değil, Türkiye'nin en zengin alanıdır.",
      "Dağlık yapı akarsuları derin vadilere hapsetmiştir. Bu durum baraj yapımını kolaylaştırmış ve hidroelektrik potansiyelini zirveye taşımıştır."
    ],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  },
  {
    heading: "Güneydoğu Anadolu Bölgesi: Buharlaşma ve Pamuk",
    body: "Güneydoğu Anadolu, düzlük arazileri, yaz sıcaklığı ve GAP (Güneydoğu Anadolu Projesi) yatırımlarıyla tarımda devrim yaşayan bir bölgemizdir. Ortalama yükseltisi azdır. Yaz sıcaklığı ve buharlaşma şiddeti en fazla olan bölgemizdir. Yağış miktarı İç Anadolu'dan fazla olmasına rağmen, buharlaşma nedeniyle en kurak bölgedir. GAP sayesinde sulama imkanları gelişmiş, pamuk üretiminde Türkiye birincisi olmuştur. Antep fıstığı ve kırmızı mercimek üretiminde liderdir. Petrolün çıkarıldığı tek bölgedir.",
    bullets: [
      "Güneydoğu'nun en kurak bölge olmasının nedeni yağış azlığı değil, aşırı yaz sıcaklığı ve buna bağlı buharlaşmadır.",
      "GAP öncesinde bölgede sadece kuraklığa dayanıklı kırmızı mercimek ekilirken; GAP sonrasında pamuk ekimi zirveye yerleşmiştir.",
      "Bölgenin güney sınırları düz bir ovadan ibarettir, bu durum Suriye sınırının çizilmesini kolaylaştırmış ve yapay bir sınır oluşmasına yol açmıştır."
    ],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  },
  {
    heading: "Bölgesel Kalkınma Projelerinin Detayları",
    body: "Türkiye'de bölgeler arasındaki coğrafi ve sosyo-ekonomik gelişmişlik farklarını azaltmak amacıyla Bölgesel Kalkınma Projeleri hazırlanmıştır.\n- GAP (Güneydoğu Anadolu Projesi): Sulama ve hidroelektrik odaklı en başarılı ve uygulanmış projedir.\n- KOP (Konya Ovası Projesi): İç Anadolu'da tarımsal sulama ve su tasarrufu odaklıdır.\n- DOKAP (Doğu Karadeniz Projesi): Yayla turizmi (Yeşil Yol), hayvancılık ve kıyı ulaşımı geliştirmeyi hedefler.\n- DAP (Doğu Anadolu Projesi): Hayvancılık ve tarımsal altyapıyı modernize etmeyi amaçlar.\n- ZBK (Zonguldak Bartın Karabük): Demir-çelik ve madencilik sektörünün dönüşümünü hedefler.",
    bullets: [
      "GAP, sosyo-ekonomik dönüşümü sağlayan Türkiye'nin ilk ve en kapsamlı bölgesel kalkınma projesidir.",
      "KOP projesi, yeraltı sularının tükenmesini önlemek için Göksu nehrinin sularını barajlar ve tünellerle Konya ovasına aktarmaktadır.",
      "DOKAP kapsamındaki 'Yeşil Yol' projesi, Karadeniz yaylalarını kesintisiz yollarla birbirine bağlayarak turizmi canlandırmaktadır."
    ],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  },
  {
    heading: "Marmara Bölgesi'nin Deprem Riski ve Sanayi Desantralizasyonu",
    body: "Marmara Bölgesi, Türkiye nüfusunun ve sanayisinin yaklaşık %60'ını barındırır. Ancak bölge, Kuzey Anadolu Fay Hattı (KAF) üzerinde yer aldığından büyük bir deprem riski altındadır. Olası bir İstanbul depreminin ülke ekonomisine vereceği zararları azaltmak amacıyla, son yıllarda devlet ve planlama kuruluşları 'Sanayi Desantralizasyonu' (sanayinin merkezden uzaklaştırılması) politikası yürütmektedir. Bu kapsamda yeni ağır sanayi yatırımları Marmara yerine Aksaray, Konya, Kırıkkale gibi deprem riskinin az olduğu İç Anadolu şehirlerine kaydırılmaktadır.",
    bullets: [
      "Sanayinin Marmara'da aşırı yığılması, deprem güvenliği açısından ulusal bir güvenlik riski oluşturmaktadır.",
      "Desantralizasyon politikası, Marmara'ya yönelik nüfus göçünü azaltarak nüfusun Anadolu'ya dengeli dağılmasını sağlar.",
      "Aksaray ve Konya, demiryolu bağlantısı ve deprem güvenliği nedeniyle yeni sanayi yatırımlarının gözde merkezleri olmuştur."
    ],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  },
  {
    heading: "Ege'de Jeotermal Isıtmalı Seracılık ve İnovasyon",
    body: "Ege Bölgesi, fay hatlarının (kırıklı yapı) en yoğun olduğu bölgemizdir. Bu durum bölgeyi jeotermal kaynaklar (sıcak su) bakımından zenginleştirmiştir. Son yıllarda Ege'de, jeotermal kaynaklar sadece elektrik üretiminde değil, 'Jeotermal Isıtmalı Teknolojik Seracılık' alanında da kullanılmaktadır. Denizli (Sarayköy), Aydın ve İzmir (Dikili) çevresinde kurulan devasa seralar, kış aylarında yer altından gelen sıcak su borularıyla ısıtılarak kömür ve doğalgaz maliyeti olmaksızın organik ihracatlık domates ve sebze üretimi gerçekleştirmektedir.",
    bullets: [
      "Jeotermal seracılık, kış aylarında ısıtma maliyetlerini %80 oranında düşürerek tarımda devasa kar marjı sağlar.",
      "Dikili (İzmir) jeotermal sera bölgesi, Avrupa'nın en büyük teknolojik sera alanlarından biridir.",
      "Bu yöntem, fosil yakıt kullanılmadığı için çevre dostu ve sıfır karbon salınımlı tarımsal inovasyon örneğidir."
    ],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  }
];

const allSummaries = {
  'turkiyenin-cografi-konumu': cografiKonumSummaries,
  'yer-sekilleri': yerSekilleriSummaries,
  'iklim-ve-bitki-ortusu': iklimvebitkiortusuSummaries,
  'nufus-ve-yerlesme': nufusveYerlesmeSummaries,
  'tarim-ve-hayvancilik': tarimveHayvancilikSummaries,
  'madenler-ve-enerji': madenlerveEnerjiSummaries,
  'sanayi-ve-ticaret': sanayiVeTicaretSummaries,
  'ulasim-ve-turizm': ulasimVeTurizmSummaries,
  'bolgeler-cografyasi': bolgelerCografyasiSummaries
};

for (const [slug, summaries] of Object.entries(allSummaries)) {
  const filePath = path.join(topicsDir, `${slug}.ts`);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Let's locate the summary: [ ... ] array and replace it entirely!
  // To avoid regex failures, we'll locate `summary: [` and `],\n  mustKnow:` or `  mustKnow:`
  const startIdx = content.indexOf('summary: [');
  const endIdx = content.indexOf('mustKnow:');
  
  if (startIdx !== -1 && endIdx !== -1) {
    // Find the closing bracket of summary array which is right before mustKnow:
    // It is usually `],`
    const sliceBeforeMustKnow = content.slice(0, endIdx);
    const lastBracketIdx = sliceBeforeMustKnow.lastIndexOf(']');
    
    if (lastBracketIdx !== -1 && lastBracketIdx > startIdx) {
      const beforeSummary = content.slice(0, startIdx);
      const afterSummary = content.slice(lastBracketIdx + 1); // keep the trailing comma or let's format it nicely
      
      const formattedSummaries = summaries.map(sec => `  {\n    heading: "${sec.heading}",\n    body: "${sec.body.replace(/\n/g, '\\n').replace(/"/g, '\\"')}",\n    bullets: ${JSON.stringify(sec.bullets, null, 6)},\n    imageUrl: "${sec.imageUrl}"\n  }`).join(',\n');
      
      const newSummaryContent = `summary: [\n${formattedSummaries}\n  ]`;
      
      const newFileContent = beforeSummary + newSummaryContent + afterSummary;
      fs.writeFileSync(filePath, newFileContent, 'utf8');
      console.log(`Successfully rewrote summary for ${slug} with 10 high-quality chapters.`);
    } else {
      console.log(`Failed to find correct boundaries for ${slug}`);
    }
  } else {
    console.log(`Failed to find summary or mustKnow in ${slug}`);
  }
}
