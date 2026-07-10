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
      body: "Türkiye, genç oluşumlu ve tektonik olarak oldukça aktif bir ülkedir. Bu durum, arazisinin büyük bir kısmının yakın jeolojik zamanlarda (özellikle 3. ve 4. Jeolojik Zamanlar) oluşmuş olmasından kaynaklanır.\n\nJeolojik Dönemler ve Anadolu'nun Oluşumu:\n1. I. Jeolojik Zaman (Paleozoik): Bu dönemde Türkiye arazisi büyük ölçüde Tethys Denizi altındaydı. Dönemin sonlarına doğru sertleşmiş kara kütleleri olan Masif Araziler (Zonguldak, Yıldız Dağları, Menteşe, Saruhan, Bitlis, Kırşehir, Mardin) oluştu. Zonguldak'taki Taş Kömürü yatakları bu dönemde oluşmuştur (I. Zamanın en önemli kanıtıdır).\n2. II. Jeolojik Zaman (Mesozoik): Durgunluk dönemidir. Tethys denizinde tortulanma ve birikmeler gerçekleşti. Dönemin sonlarında Alp-Himalaya orojenezinin ilk hazırlıkları başladı.\n3. III. Jeolojik Zaman (Tersiyer): Türkiye'nin ana iskeletinin oluştuğu dönemdir. Levha hareketleri (Avrasya ile Afrika-Arap levhalarının sıkıştırması) sonucu Alp-Himalaya kıvrım kuşağına dahil olan Kuzey Anadolu Dağları ve Toroslar kıvrılarak yükseldi. Linyit, Petrol, Bor ve Tuz yatakları bu dönemde oluştu.\n4. IV. Jeolojik Zaman (Kuvaterner): Anadolu toptan yükselmeye (epirojenez) uğradı. Egeid karası çökerek Ege Denizi, İstanbul ve Çanakkale Boğazları oluştu. Karadeniz göl olmaktan çıkıp açık deniz haline geldi. Anadolu'da volkanizma faaliyetleri son şeklini aldı ve buzul çağları yaşandı.",
      bullets: [
        "Türkiye'nin genç oluşumlu olmasının kanıtları: Sıcak su kaynakları (jeotermal), deprem riskinin yüksek olması, akarsuların aşındırma gücünün fazla olması ve ortalama yükseltinin (1132 m) yüksek olmasıdır.",
        "Zonguldak'taki taş kömürü I. Jeolojik Zaman (Paleozoik) kökenliyken; linyit, tuz, bor ve petrol yatakları III. Jeolojik Zaman (Tersiyer) ürünüdür.",
        "Boğazlar, Ege Denizi ve Anadolu'nun toptan yükselmesi (epirojenik hareketler) IV. Jeolojik Zaman (Kuvaterner) gelişmeleridir."
      ],
      imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
    },
    {
      heading: "Oluşumlarına Göre Dağlar (Kıvrım, Kırık, Volkanik)",
      body: "Türkiye'deki dağlar orojenik (dağ oluşumu) hareketler ve volkanizma sonucunda şekillenmiştir.\n\n1. Kıvrım Dağları:\nEsnek tortul tabakaların yan basınçlarla sıkışarak bükülmesi sonucu oluşur. Yükselen kısma Antiklinal, çöken kısma Senklinal denir. Türkiye'nin kuzeyinde Kuzey Anadolu Dağları (Küre, Canik, Giresun, Rize, Kaçkar, Köroğlu, Yıldız), güneyinde ise Toroslar (Bey, Geyik, Bolkar, Aladağlar, Tahtalı, Binboğa, Hakkari Dağları) bu şekilde oluşmuştur.\n\n2. Kırık Dağları:\nSert tortul tabakaların yan basınçlarla kırılması sonucu oluşur. Yükselen kısma Horst, çöken kısma Graben denir. Ege Bölgesi'ndeki dağlar bu şekildedir. Horstlar: Kaz, Madra, Yunt, Bozdağlar, Aydın Dağları ve Menteşe Dağları'dır. Akdeniz'deki Amanos (Nur) Dağları da kırıklı yapıdadır.\n\n3. Volkanik Dağlar:\nYer altındaki magmanın yeryüzüne çıkarak soğumasıyla oluşur. \n- Doğu Anadolu: Ağrı (en yüksek), Tendürek, Süphan, Nemrut (krater gölü bulunur).\n- İç Anadolu: Erciyes, Hasan Dağı, Melendiz, Karacadağ, Karadağ.\n- Güneydoğu Anadolu: Karacadağ (yayvan yapılı, kalkan volkanı).\n- Ege: Kula Volkanları (en genç volkanik sahadır).",
      bullets: [
        "Ege grabenleri (çöküntü alanları): Edremit, Bakırçay, Gediz, Küçük Menderes, Büyük Menderes ovalarıdır. Akdeniz'deki Amik Ovası da grabendir.",
        "Kıvrım dağları Türkiye'deki en yaygın dağ tipidir. Kuzey-güney yönlü sıkışma nedeniyle dağlarımızın büyük çoğunluğu doğu-batı uzanışlıdır.",
        "Güneydoğu Anadolu'daki Karacadağ, lavlarının akıcı olması nedeniyle çok geniş bir alana yayılmış ve 'kalkan tipi volkan' özelliğine sahip tek dağımız olmuştur."
      ],
      imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
    },
    {
      heading: "Türkiye'nin Platoları ve Sınıflandırılması",
      body: "Plato; akarsular tarafından derince yarılmış, çevrelerine göre yüksekte bulunan geniş düzlüklerdir. Anadolu'nun epirojenik olarak toptan yükselmesi sonucu platolarımız oldukça geniş yer kaplar.\n\n1. Aşınım Düzlüğü Platoları:\nArazinin dış kuvvetlerle aşındırılarak düzleştirilmesiyle oluşur. En tipik örneği Çatalca-Kocaeli Platosu'dur. Yükseltisi en az olan platodur. Sanayi, nüfus ve ulaşımın en yoğun olduğu yerdir.\n\n2. Karstik Platolar:\nKalker, jips gibi kolay eriyebilen kayaçların bulunduğu alanlarda erime sonucu oluşan platolardır. Akdeniz'de yer alan Teke ve Taşeli platoları en önemli örneklerdir. Nüfus seyrektir, tarım kısıtlıdır, kıl keçisi yetiştiriciliği yaygındır.\n\n3. Volkanik (Lav) Platoları:\nVolkanik lavların düzlükleri kaplamasıyla oluşur. Doğu Anadolu'daki Erzurum-Kars ve Ardahan platoları örnektir. Yükseltisi en fazla olan platolardır. Yaz yağışları alır, çernozyom topraklar yaygındır ve büyükbaş mera hayvancılığı yapılır.\n\n4. Tabaka Düzlüğü (Yatay Duruşlu) Platoları:\nTortul tabakaların yatay duruşlu olduğu İç Anadolu ve Güneydoğu'daki platolardır. Haymana, Cihanbeyli, Obruk, Bozok, Uzunyayla (İç Anadolu) ile Gaziantep ve Şanlıurfa (Güneydoğu) platolarıdır. Tahıl tarımı ve küçükbaş hayvancılık yaygındır.",
      bullets: [
        "Yükseltisi en fazla olan plato Erzurum-Kars, en az olan ise Çatalca-Kocaeli Platosu'dur.",
        "Teke ve Taşeli karstik yapısı nedeniyle su tutma kapasitesi düşük, tarıma elverişsiz ve nüfusun en seyrek olduğu platolardır.",
        "İç Anadolu platoları (Cihanbeyli, Haymana vb.) Türkiye'nin tahıl ambarı konumundadır."
      ],
      imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
    },
    {
      heading: "Ovalar ve Oluşum Türleri (Delta, Tektonik, Karstik)",
      body: "Çevresine göre alçakta yer alan, akarsu birikintileriyle kaplı düzlüklere ova denir.\n\n1. Delta Ovaları:\nAkarsuların taşıdığı alüvyonları denizde biriktirmesiyle oluşur. Oluşma şartları: Kıyıda gelgit olmamalı, kıyı sığ olmalı (kıta sahanlığı geniş olmalı), akarsu bol alüvyon taşımalıdır.\n- Karadeniz: Bafra (Kızılırmak), Çarşamba (Yeşilırmak).\n- Akdeniz: Çukurova (Seyhan ve Ceyhan - Türkiye'nin en büyük deltası), Silifke (Göksu).\n- Ege: Bakırçay, Gediz, Küçük Menderes, Büyük Menderes deltaları.\n\n2. Karstik Ovalar (Polye):\nKolay eriyebilen kireçli arazilerde çözünme sonucu oluşan ovalardır. Tabanlarında verimsiz kırmızı Akdeniz toprağı (Terra Rossa) bulunur. Batı Toroslar kuşağında yaygındır. Şifresi 'TAKKEM'dir: Tefenni, Acıpayam, Korkuteli, Kestel, Elmalı, Muğla ovaları.\n\n3. Tektonik Ovalar:\nFay hatlarındaki çökmeler sonucunda oluşan çukurlukların alüvyonlarla dolmasıyla meydana gelir. Türkiye'nin en yaygın ovalarıdır. Deprem riski yüksektir. Kuzey Anadolu Fay Hattı (Düzce, Bolu, Tosya, Merzifon, Erbaa, Niksar), Doğu Anadolu Fay Hattı (Elazığ, Malatya, Kahramanmaraş, Amik) ve Batı Anadolu Fay Hattı üzerindeki ovalardır.",
      bullets: [
        "Çukurova, Türkiye'nin en büyük delta ovasıdır ve yılda birden fazla ürün alınabilen tarımsal merkezdir.",
        "Karstik ovalar (polye) karstik erime süreçleriyle oluştukları için genellikle Akdeniz Bölgesi'nde yoğunlaşmıştır.",
        "Tektonik ovalar fay hatlarına paralel uzanır, bu yüzden bu ovalarda deprem riski ve jeotermal kaynak potansiyeli çok yüksektir."
      ],
      imageUrl: "/images/topics/yer_sekilleri_1783726529525.png"
    },
    {
      heading: "Dış Kuvvetler ve Türkiye'deki Aşındırma-Biriktirme Şekilleri",
      body: "Türkiye'nin yer şekillerini biçimlendiren temel dış kuvvetler akarsular, rüzgarlar, karstik süreçler, buzullar ve dalgalardır.\n\n1. Akarsular (En Etkili Dış Kuvvet):\n- Aşınım Şekilleri: Vadiler (çentik, boğaz, kanyon, geniş tabanlı), Dev kazanı, Peri bacaları (Nevşehir - volkanik tüf + sel aşındırması), Kırgıbayır (Badlands), Peneplen (yontukdüz).\n- Birikim Şekilleri: Birikinti yelpazesi, Dağ eteği ovası, Dağ içi ovası, Kum adası, Delta ovası.\n\n2. Rüzgarlar:\nKurak ve yarı kurak bölgelerde etkilidir (İç Anadolu ve Güneydoğu Anadolu). Mantar kaya, Tafoni, Yardang ve Lös birikintileri oluşturur.\n\n3. Karstik Şekiller (Yeraltı ve Yerüstü):\n- Aşınım: Lapya (en küçük), Dolin, Uvala, Polye (en büyük), Obruk (doğal kuyu - Kızören obruğu, Cennet-Cehennem obrukları), Mağara.\n- Birikim: Sarkıt, Dikit, Sütun (mağaralarda), Traverten (Pamukkale).\n\n4. Buzullar (En Az Etkili Dış Kuvvet):\nMatematik konum nedeniyle kıyılarda buzul etkisi yoktur. Sadece yüksek dağlarda (Kaçkar, Erciyes, Bolkar, Aladağlar, Cilo dağları) buzul aşındırma şekilleri (Sirk gölleri, hörgüç kaya, morenler) görülür.\n\n5. Kıyı Tipleri:\n- Boyuna Kıyı: Karadeniz ve Akdeniz (Dağlar paralel, kıyı çizgisi düz, kıta sahanlığı dar, falez çok).\n- Enine Kıyı: Ege (Dağlar dik, girinti çıkıntı çok, kıta sahanlığı geniş, körfez/liman çok).\n- Rias Tipi Kıyı: İstanbul ve Çanakkale Boğazları, Haliç.\n- Dalmaçya Kıyı: Antalya Kaş kıyıları (adalı kıyı tipi).\n- Fiyort ve Skayer kıyı tipleri Türkiye'de yoktur (Matematik konum - kutup kuşağından uzak olması).",
      bullets: [
        "Akarsularımız genç arazi yapısı nedeniyle genellikle denge profiline ulaşmamıştır; bu yüzden enerji potansiyelleri yüksektir.",
        "Peri bacaları akarsu (sel suları) aşındırmasıdır, ancak oluşumunda tüf ve bazalt gibi volkanik malzemelerin varlığı özel konuma (volkanizma) bağlıdır.",
        "Fiyort ve Skayer kıyı tiplerinin Türkiye'de bulunmaması mutlak konumun (enlem), Haliç ve Watt kıyı tipinin bulunmaması ise göreceli konumun (okyanusa kıyısının olmaması, gelgit azlığı) bir sonucudur."
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
