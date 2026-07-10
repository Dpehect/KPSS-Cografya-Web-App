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
