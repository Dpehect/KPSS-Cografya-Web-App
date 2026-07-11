import type { Topic } from "@/types/study";

export const madenlerveenerji: Topic = {
  id: "madenler-ve-enerji",
  slug: "madenler-ve-enerji",
  title: "Madenler ve Enerji Kaynakları",
  era: "cagdas",
  shortDescription: "Türkiye'nin maden çeşitliliği, metalik ve metal dışı madenler, çıkarım ve işleme merkezleri, yenilenemeyen ve yenilenebilir enerji kaynakları.",
  examImportance: 10,
  estimatedMinutes: 60,
  keywords: ["kpss", "coğrafya", "madenler ve enerji kaynakları", "bor", "demir", "linyit", "jeotermal", "hidroelektrik"],
  summary: [
  {
    heading: "Türkiye'nin Maden Çeşitliliği ve Metalik Madenler",
    body: "Türkiye, maden çeşitliliği bakımından dünyada kendi kendine yetebilen ender ülkelerden biridir. Bu zenginliğin temel nedeni; farklı jeolojik dönemlere ait arazilerin bulunması, yoğun volkanizma ve tektonik hareketlerdir. Maden çeşitliliğinin en fazla olduğu yer Doğu Anadolu Bölgesi, özellikle Yukarı Fırat Bölümü (Elazığ - Maden çevresi)'dür. Demir Sivas Divriği'de çıkarılır; Karabük ve Ereğli'de taş kömürüne yakınlıktan, İskenderun'da ise ulaşımdan dolayı işlenir. Bakır Artvin (Murgul), Kastamonu (Küre) ve Elazığ'da çıkarılır; Samsun'da ise liman ulaşımı sayesinde işlenir.",
    bullets: [
      "Samsun'da bakır yatakları bulunmamasına rağmen Karadeniz'in en büyük bakır işleme tesisinin burada kurulması tamamen ulaşım kolaylığı ile ilgilidir.",
      "Karabük ve Ereğli Demir-Çelik fabrikalarının kurulmasında hammadde değil, taş kömürüne (enerji kaynağına) yakınlık belirleyici olmuştur.",
      "Maden çeşitliliğinin en zengin olduğu ilimiz Elazığ'dır."
],
    imageUrl: "/images/topics/fay_hatlari_1783727849459.png"
  },
  {
    heading: "Diğer Metalik ve Metal Dışı Önemli Madenler",
    body: "Metalik madenlerin yanı sıra sanayide kullanılan diğer madenler de büyük öneme sahiptir. Boksit (alüminyum) Konya Seydişehir'de çıkarılır ve burada işlenir. Barit, sondaj kuyularında çamur yoğunlaştırıcı olarak Antalya Alanya'da çıkarılır. Bor mineralleri jet/roket yakıtı, cam ve nükleer sanayide kullanılır; dünya rezervlerinin %70'inden fazlası Türkiye'dedir (Balıkesir, Kütahya, Eskişehir, Bursa). Mermer, kalkerin metamorfizmaya uğramasıyla oluşur ve ihraç ettiğimiz en önemli maden türüdür (Afyonkarahisar, Marmara Adası).",
    bullets: [
      "Mermer, maden ihracat gelirlerimizde birinci sıradadır ve blok mermer olarak ihraç edilir.",
      "Bor yatakları, Türkiye'nin III. Jeolojik Zaman'da gölsel tortullaşma süreçlerinden geçtiğinin en büyük kanıtlarındandır.",
      "Asbest, ısıya son derece dayanıklı lifli bir madendir ancak kanserojen yapısı nedeniyle kullanımı sınırlandırılmıştır."
],
    imageUrl: "/images/topics/iklim_bitki_1783726537799.png"
  },
  {
    heading: "Fosil (Tükenebilir) Enerji Kaynakları",
    body: "Türkiye, fosil enerji kaynakları (petrol, doğalgaz, taş kömürü) bakımından dışa bağımlı bir ülkedir. Ancak zengin linyit yataklarına sahiptir. Taş kömürü I. Jeolojik Zaman'da oluşmuştur, sadece Zonguldak'ta çıkarılır ve Çatalağzı Termik Santrali'nde kullanılır. Linyit ise III. Jeolojik Zaman ürünü olduğu için Türkiye'nin hemen her yerinde bulunur (en büyük rezerv Afşin-Elbistan santralindedir). Petrol sadece Batman ve Adıyaman'da çıkarılır (Batman rafinerisi hammaddeye yakındır). Doğalgaz ise Kırklareli Hamitabat ve Düzce Akçakoca'da çıkarılır.",
    bullets: [
      "Afşin-Elbistan, Türkiye'nin en büyük linyit rezervine ve en büyük linyit elektrik üretim kapasitesine sahip termik santralidir.",
      "Batman Rafinerisi Türkiye'nin hammaddeye yakın kurulan tek petrol rafinerisidir; diğerleri ulaşım ve pazara yakınlık esas alınarak kurulmuştur.",
      "Doğalgaz santralleri çevre kirliliği en az olan fosil kaynaklı santrallerdir ancak dışa bağımlılığımızı artırır."
],
    imageUrl: "/images/topics/ruzgar_haritasi_1783727857236.png"
  },
  {
    heading: "Yenilenebilir (Temiz) Enerji Kaynakları",
    body: "Türkiye, coğrafi konumu ve yer şekilleri sayesinde yenilenebilir enerji potansiyeli oldukça yüksek bir ülkedir. Engebeli yer şekilleri akarsularımızın akış hızını artırdığı için hidroelektrik potansiyelimiz çok yüksektir ve en çok baraj Doğu Anadolu'da (Atatürk, Karakaya, Keban) bulunur. Rüzgar enerjisi en çok Ege ve Marmara'da (İzmir Alaçatı - ilk santral) gelişmiştir. Güneş enerjisi güneşlenme süresinin en az olduğu Karadeniz hariç her yerde yaygındır (Konya Karapınar en büyük GES). Jeotermal enerji ise fay hatlarının yaygın olduğu Ege'de (Denizli Sarayköy, Aydın Germencik) öndedir.",
    bullets: [
      "Yusufeli Barajı (Çoruh Nehri), Türkiye'nin en yüksek, dünyanın ise 5. en yüksek gövde yüksekliğine sahip beton kemer barajıdır.",
      "Jeotermal ve Hidroelektrik enerjisi iklim koşullarından etkilenmezken; Rüzgar ve Güneş enerjisi hava durumuna bağlı olarak dalgalanma gösterir.",
      "Karadeniz Bölgesi, yıllık yağış ve bulutluluk gün sayısı en fazla olduğu için güneş enerjisi potansiyeli en düşük bölgemizdir."
],
    imageUrl: "/images/topics/nufus_yerlesme_1783726544550.png"
  },
  {
    heading: "Nükleer Enerji ve Türkiye'nin Enerji Stratejisi",
    body: "Nükleer enerji, uranyum ve toryum elementlerinin parçalanmasıyla elde edilen devasa bir temiz enerji kaynağıdır. Türkiye, enerji güvenliğini sağlamak için nükleer santral projeleri yürütmektedir. İnşaatı devam eden ilk nükleer santralimiz Mersin Akkuyu Nükleer Güç Santrali'dir. İkinci nükleer santral ise Sinop kıyısında planlanmaktadır. Bu iki merkezin seçilmesinin en önemli nedenleri deprem riskinin en az olduğu kararlı araziler olmaları ve soğutma suyu ihtiyacını karşılamak için deniz kıyısında bulunmalarıdır.",
    bullets: [
      "Akkuyu ve Sinop'un seçilmesinin temel nedeni deprem riskinin az olması ve deniz suyunun soğutma amacıyla kullanılabilmesidir.",
      "Toryum rezervlerinde Eskişehir Sivrihisar yatakları dünyada ilk sıralarda yer alır ancak henüz ticari nükleer yakıt olarak kullanımı Ar-Ge aşamasındadır.",
      "Nükleer enerji, karbondioksit salınımı yapmadığı için temiz enerji kategorisinde değerlendirilir."
],
    imageUrl: "/images/topics/tarim_hayvancilik_1783726552170.png"
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
    imageUrl: "/images/topics/nukleer_enerji_1783727864452.png"
  },
  {
    heading: "Barajlarımızın Enerji Üretimindeki Yıllık Dalgalanmaları",
    body: "Türkiye'nin hidroelektrik potansiyeli yer şekillerinin engebeli olmasından dolayı çok yüksektir. Ancak akarsularımızın rejimleri düzensizdir (Karadeniz hariç). Yağışlı geçen ilkbahar ve kış aylarında barajların su seviyeleri yükselirken, kurak geçen yaz aylarında seviyeler düşer. Bu durum yıllık hidroelektrik enerji üretiminde büyük dalgalanmalara yol açar. Kurak yıllarda elektrik açığını kapatmak için doğalgaz ve kömür termik santrallerine yüklenilir, bu da enerji faturasını ve çevre kirliliğini artırır.",
    bullets: [
      "Hidroelektrik üretimi iklim dalgalanmalarına (kuraklık) doğrudan bağımlıdır.",
      "Fırat ve Dicle nehirleri üzerindeki barajlar (Atatürk, Keban) en yüksek enerji kapasitesine sahip tesislerimizdir.",
      "Akarsu debilerinin düştüğü kurak dönemlerde elektrik üretiminde doğalgaz payı artmaktadır."
],
    imageUrl: "/images/topics/sanayi_ticaret_1783726570829.png"
  },
  {
    heading: "Rüzgar ve Güneş Enerjisinde Lisanssız Üretim Modeli",
    body: "Türkiye, güneşlenme süresinin uzunluğu ve rüzgar koridorlarının varlığı sayesinde temiz enerjide hızlı bir dönüşüm gerçekleştirmektedir. Son yıllarda yürürlüğe giren 'Lisanssız Elektrik Üretimi' yönetmeliği sayesinde, sanayi tesisleri, tarımsal işletmeler ve konutlar kendi çatılarına veya arazilerine Güneş Enerjisi Santrali (GES) kurarak kendi elektriklerini üretebilmektedir. Fazla üretilen elektrik ise şebekeye satılarak gelir elde edilir. Bu model, yerinden üretim ilkesiyle iletim hatlarındaki kayıpları azaltır.",
    bullets: [
      "Lisanssız GES ve RES yatırımları, küçük işletmelerin ve konutların kendi enerjilerini üretmelerine olanak tanır.",
      "Güneş enerjisi yatırımlarında Konya, Şanlıurfa, Kayseri ve Antalya en yüksek verimlilik oranlarına sahiptir.",
      "Rüzgar santralleri (RES) ise Çanakkale, Balıkesir, İzmir ve Hatay'ın rüzgar koridorlarında yoğunlaşmıştır."
],
    imageUrl: "/images/topics/ulasim_turizm_1783726578587.png"
  },
  {
    heading: "Doğalgaz Depolama ve Boru Hatlarının Jeopolitik Rolü",
    body: "Türkiye, tükettiği doğalgazın %99'unu Rusya, Azerbaycan ve İran gibi ülkelerden ithal etmektedir. Enerji kesintileri ve kış aylarındaki yüksek tüketim krizlerini önlemek amacıyla doğalgaz depolama tesisleri kurulmuştur. Silivri (İstanbul) deniz altı doğalgaz deposu ve Tuz Gölü (Aksaray) yer altı tuz mağarası doğalgaz deposu en stratejik tesislerimizdir. Bu depolar, boru hatlarındaki (TANAP, TürkAkım) gaz akışını dengeleyerek Türkiye'nin doğu-batı enerji köprüsü rolünü pekiştirir ve enerji güvenliğini sağlar.",
    bullets: [
      "Tuz Gölü Doğalgaz Depolama Tesisi, yer altındaki tuz bloklarının suyla eritilerek mağaraya dönüştürülmesiyle inşa edilmiştir.",
      "Silivri Doğalgaz Deposu, Türkiye'nin ilk deniz altı doğalgaz depolama tesisidir.",
      "Bu tesisler kış aylarında konutların ve sanayinin doğalgaz kesintisi yaşamamasını garanti altına alır."
],
    imageUrl: "/images/topics/bolgeler_cografyasi_1783726586047.png"
  }
  ],
  mustKnow: [
    "Maden çeşitliliğinin en fazla olduğu bölge Doğu Anadolu, bölüm Yukarı Fırat (Elazığ - Maden)'dır.",
    "Demir Sivas Divriği'de çıkarılır; Karabük ve Ereğli'de taş kömürüne (enerji) yakınlıktan, İskenderun'da ise ulaşımdan (liman) dolayı işlenir.",
    "Bor yatakları Balıkesir, Kütahya, Eskişehir'dedir. Dünya rezervinin %70'inden fazlası Türkiye'dedir. Bandırma ve Kırka'da işlenir.",
    "Taş kömürü Zonguldak'ta çıkarılır (I. Zaman). Linyit Türkiye'nin her yerindedir (III. Zaman). En büyük linyit santrali Afşin-Elbistan'dadır.",
    "Petrol sadece Güneydoğu'da (Batman) çıkarılır. Doğalgaz Hamitabat (Kırklareli) ve Akçakoca'da çıkarılır.",
    "Jeotermal santraller Denizli (Sarayköy) ve Aydın'da (Germencik) bulunur. Hidroelektrik potansiyeli en yüksek bölge Doğu Anadolu'dur."
  ],
  commonMistakes: [
    "Samsun'da bakır çıkarılmaz. Samsun Bakır İşletmeleri'nin kurulma sebebi ham maddeye yakınlık değil, Karadeniz'in en gelişmiş limanına ve demiryolu bağlantısına (ulaşım) sahip olmasıdır.",
    "Jeotermal enerji (yer altı sıcak suyu) iklimden etkilenmez, ancak hidroelektrik enerji yağış rejimine bağlı olduğu için kurak yıllarda baraj doluluk oranlarına göre dalgalanma gösterir.",
    "Doğalgaz santralleri yerli kaynağımız çok az olduğu için büyük oranda ithal gazla çalışır, bu yüzden enerji faturasını artıran temel unsurdur (Ovaakça, Ambarlı, Hamitabat)."
  ],
  quickTimeline: [
    { date: "1829", event: "Uzun Mehmet tarafından Zonguldak'ta ilk taş kömürü rezervi keşfedildi." },
    { date: "1935", event: "MTA (Maden Tetkik ve Arama) ve Etibank kurularak madencilik faaliyetleri devlet güvencesine alındı." },
    { date: "1940", event: "Raman Dağı'nda (Batman) ilk ticari petrol rezervi keşfedildi ve üretime başlandı." },
    { date: "1984", event: "Denizli Sarayköy'de Türkiye'nin ilk jeotermal elektrik santrali devreye alındı." },
    { date: "2010'lar", event: "Mersin Akkuyu Nükleer Güç Santrali projesi onaylandı ve inşaat süreci başlatıldı." }
  ]
};
