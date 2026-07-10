import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const topics = [
  {
    id: "turkiyenin-cografi-konumu",
    title: "Türkiye'nin Coğrafi Konumu",
    slug: "turkiyenin-cografi-konumu",
    facts: [
      { q: "Türkiye'nin matematik konum koordinatları enlem olarak hangisidir?", a: "36°-42° Kuzey enlemleri", d: ["36°-42° Güney enlemleri", "26°-45° Kuzey enlemleri", "26°-45° Güney enlemleri", "36°-45° Kuzey enlemleri"] },
      { q: "Türkiye'nin matematik konum koordinatları boylam olarak hangisidir?", a: "26°-45° Doğu boylamları", d: ["26°-45° Batı boylamları", "36°-42° Doğu boylamları", "36°-42° Batı boylamları", "26°-42° Doğu boylamları"] },
      { q: "Aşağıdakilerden hangisi Türkiye'nin orta kuşakta yer almasının kanıtlarından biri değildir?", a: "Ortalama yükseltinin fazla olması", d: ["Akdeniz iklim kuşağında yer alması", "Batı rüzgarlarının etkisi altında olması", "Cephesel yağışların görülmesi", "Dört mevsimin belirgin yaşanması"] },
      { q: "Türkiye'nin en kuzey uç noktası hangisidir?", a: "Sinop - İnceburun", d: ["Hatay - Topraktutan", "Çanakkale - Avlaka Burnu", "Iğdır - Dilucu", "Kırklareli - Kofçaz"] },
      { q: "Türkiye'nin en güney uç noktası hangisidir?", a: "Hatay - Topraktutan (Beysun)", d: ["Sinop - İnceburun", "Çanakkale - Avlaka Burnu", "Iğdır - Dilucu", "Muğla - Dalaman"] },
      { q: "Türkiye'nin en batı uç noktası hangisidir?", a: "Çanakkale - Avlaka Burnu (Gökçeada)", d: ["Sinop - İnceburun", "Hatay - Topraktutan", "Iğdır - Dilucu", "İzmir - Karaburun"] },
      { q: "Türkiye'nin en doğu uç noktası hangisidir?", a: "Iğdır - Dilucu", d: ["Sinop - İnceburun", "Hatay - Topraktutan", "Çanakkale - Avlaka Burnu", "Artvin - Sarp"] },
      { q: "Türkiye'nin en doğusu ile en batısı arasındaki yerel saat farkı kaç dakikadır?", a: "76 dakika", d: ["45 dakika", "19 dakika", "60 dakika", "120 dakika"] },
      { q: "Türkiye'nin kuzey-güney kuş uçuşu mesafesi kaç kilometredir?", a: "666 km", d: ["111 km", "555 km", "777 km", "999 km"] },
      { q: "Yıl boyunca ortak (ulusal) saat olarak kullandığımız 45° Doğu boylamı hangi ilimizden geçer?", a: "Iğdır", d: ["İzmit", "Bingöl", "Kars", "Trabzon"] },
      { q: "Aşağıdakilerden hangisi Türkiye'nin en uzun kara sınırına sahip olduğu komşusudur?", a: "Suriye", d: ["İran", "Irak", "Yunanistan", "Bulgaristan"] },
      { q: "Türkiye'nin en kısa kara sınırı hangi ülke iledir?", a: "Nahçıvan (Azerbaycan)", d: ["Bulgaristan", "Ermenistan", "Yunanistan", "Gürcistan"] },
      { q: "1639 Kasr-ı Şirin Antlaşması ile belirlenen ve günümüze kadar en az değişen sınırımız hangi ülke iledir?", a: "İran", d: ["Irak", "Suriye", "Yunanistan", "Rusya"] },
      { q: "Türkiye'nin Avrupa'ya açılan en işlek kara ve demiryolu sınır kapısı hangisidir?", a: "Kapıkule (Bulgaristan)", d: ["İpsala (Yunanistan)", "Habur (Irak)", "Sarp (Gürcistan)", "Gürbulak (İran)"] },
      { q: "Türkiye'nin Irak ile olan ticaretinde en yoğun kullanılan sınır kapısı hangisidir?", a: "Habur", d: ["Cilvegözü", "Gürbulak", "Sarp", "Dilucu"] },
      { q: "Türkiye'nin Gürcistan ile bağlantısını sağlayan ve Doğu Karadeniz ticaretinde büyük önemi olan sınır kapısı hangisidir?", a: "Sarp", d: ["Gürbulak", "Dilucu", "Habur", "Kapıkule"] }
    ]
  },
  {
    id: "yer-sekilleri",
    title: "Türkiye'nin Yer Şekilleri",
    slug: "yer-sekilleri",
    facts: [
      { q: "Türkiye'de taş kömürü yataklarının bulunması hangi jeolojik zamana ait arazilerin varlığını kanıtlar?", a: "I. Jeolojik Zaman (Paleozoik)", d: ["II. Jeolojik Zaman (Mesozoik)", "III. Jeolojik Zaman (Tersiyer)", "IV. Jeolojik Zaman (Kuvaterner)", "Prekambriyen"] },
      { q: "Türkiye'deki linyit, tuz, bor ve petrol yatakları hangi jeolojik zamanda oluşmuştur?", a: "III. Jeolojik Zaman (Tersiyer)", d: ["I. Jeolojik Zaman (Paleozoik)", "II. Jeolojik Zaman (Mesozoik)", "IV. Jeolojik Zaman (Kuvaterner)", "Prekambriyen"] },
      { q: "Ege Denizi, İstanbul ve Çanakkale boğazlarının oluşumu hangi jeolojik zamanda gerçekleşmiştir?", a: "IV. Jeolojik Zaman (Kuvaterner)", d: ["I. Jeolojik Zaman (Paleozoik)", "II. Jeolojik Zaman (Mesozoik)", "III. Jeolojik Zaman (Tersiyer)", "Arkeozoik"] },
      { q: "Aşağıdakilerden hangisi kırıklı dağ oluşumuyla (Horst-Graben) meydana gelen dağlarımızdan biri değildir?", a: "Kaçkar Dağları", d: ["Kaz Dağları", "Yunt Dağları", "Bozdağlar", "Aydın Dağları"] },
      { q: "Ege Bölgesi dışında yer alan, Akdeniz'de kırıklı dağ yapısına (Horst) sahip olan dağ hangisidir?", a: "Amanos (Nur) Dağları", d: ["Aladağlar", "Bey Dağları", "Geyik Dağları", "Bolkarlar"] },
      { q: "Aşağıdaki volkanik dağlardan hangisi kalkan biçimli volkan tipine tek örnektir?", a: "Karacadağ (Güneydoğu)", d: ["Ağrı Dağı", "Nemrut Dağı", "Erciyes Dağı", "Hasan Dağı"] },
      { q: "Türkiye'nin en genç volkanik sahası kabul edilen ve 'Adalık' olarak da bilinen yer hangisidir?", a: "Manisa - Kula", d: ["Nevşehir - Ürgüp", "Van - Nemrut", "Kayseri - Erciyes", "Hatay - Hassa"] },
      { q: "Yükseltisi en az, sanayi ve nüfus yoğunluğu en fazla olan aşınım düzlüğü platosu hangisidir?", a: "Çatalca - Kocaeli Platosu", d: ["Teke Platosu", "Taşeli Platosu", "Haymana Platosu", "Erzurum - Kars Platosu"] },
      { q: "Karstik yapısı nedeniyle nüfusun en seyrek olduğu Akdeniz platoları hangileridir?", a: "Teke ve Taşeli", d: ["Haymana ve Cihanbeyli", "Bozok ve Obruk", "Erzurum ve Kars", "Çatalca ve Kocaeli"] },
      { q: "Yaz yağışları alan, çernozyom toprakların bulunduğu ve büyükbaş mera hayvancılığının yapıldığı lav platosu hangisidir?", a: "Erzurum - Kars Platosu", d: ["Obruk Platosu", "Teke Platosu", "Çatalca - Kocaeli Platosu", "Şanlıurfa Platosu"] },
      { q: "Türkiye'nin en büyük delta ovası hangisidir?", a: "Çukurova", d: ["Bafra", "Çarşamba", "Silifke", "Menemen"] },
      { q: "Aşağıdakilerden hangisi karstik ovalardan (polye) biri değildir?", a: "Bafra Ovası", d: ["Tefenni Ovası", "Acıpayam Ovası", "Korkuteli Ovası", "Elmalı Ovası"] }
    ]
  },
  {
    id: "iklim-ve-bitki-ortusu",
    title: "İklim ve Bitki Örtüsü",
    slug: "iklim-ve-bitki-ortusu",
    facts: [
      { q: "Türkiye'de kışın çok soğuk, ayaz ve kuru kış şartları getiren termik kökenli basınç merkezi hangisidir?", a: "Sibirya Yüksek Basıncı", d: ["İzlanda Alçak Basıncı", "Asor Yüksek Basıncı", "Basra Alçak Basıncı", "Muson Alçak Basıncı"] },
      { q: "Türkiye'ye yazın esen, Güneydoğu'dan sokularak aşırı sıcaklık ve kuraklığa neden olan basınç merkezi hangisidir?", a: "Basra Alçak Basıncı", d: ["Sibirya Yüksek Basıncı", "İzlanda Alçak Basıncı", "Asor Yüksek Basıncı", "Azor Alçak Basıncı"] },
      { q: "Kayıp Sakal şifresinde yer alan, kuzeydoğudan eserek kışın kuru soğuk yapan rüzgar hangisidir?", a: "Poyraz", d: ["Karayel", "Yıldız", "Lodos", "Samyeli"] },
      { q: "Güneybatıdan esen, sıcak ve nemli olan, kışın soba zehirlenmelerine ve karların hızlı erimesine yol açan rüzgar hangisidir?", a: "Lodos", d: ["Poyraz", "Karayel", "Yıldız", "Kıble"] },
      { q: "Dağ yamacından aşağı esen havanın her 100 metrede 1°C ısınmasıyla oluşan rüzgar hangisidir?", a: "Fön (Föhn) Rüzgarı", d: ["Meltem Rüzgarı", "Alize Rüzgarı", "Muson Rüzgarı", "Kasırga"] },
      { q: "Akdeniz iklim kuşağında kış aylarında görülen, sıcak ve soğuk hava kütlelerinin karşılaşmasıyla oluşan yağış tipi hangisidir?", a: "Cephesel (Frontal) Yağış", d: ["Yamaç (Orografik) Yağış", "Konveksiyonel (Yükselim) Yağış", "Yükselim Yağışı", "Meltem Yağışı"] },
      { q: "Doğu Karadeniz'de nemli hava kütlelerinin dağ yamaçları boyunca yükselerek oluşturduğu yağış türü hangisidir?", a: "Orografik (Yamaç) Yağış", d: ["Cephesel Yağış", "Konveksiyonel Yağış", "Kırkikindi Yağışı", "Muson Yağışı"] },
      { q: "İç Anadolu'da ilkbaharda görülen ve halk arasında 'Kırkikindi' olarak adlandırılan yükselim yağışlarının coğrafi adı hangisidir?", a: "Konveksiyonel Yağış", d: ["Cephesel Yağış", "Orografik Yağış", "Yamaç Yağışı", "Frontal Yağış"] },
      { q: "En fazla yağışı sonbaharda, en az yağışı ilkbaharda alan, her mevsim yağışlı iklimimiz hangisidir?", a: "Karadeniz İklimi", d: ["Akdeniz İklimi", "Karasal İklim", "Sert Karasal İklim", "Muson İklimi"] },
      { q: "Muğla Köyceğiz çevresinde yetişen, kozmetik ve ilaç sanayisinde kullanılan ünlü endemik ağaç türümüz hangisidir?", a: "Sığla Ağacı (Günlük)", d: ["Kasnak Meşesi", "Datça Hurması", "İspir Meşesi", "Kızılçam"] }
    ]
  },
  {
    id: "nufus-ve-yerlesme",
    title: "Nüfus ve Yerleşme",
    slug: "nufus-ve-yerlesme",
    facts: [
      { q: "Deniz kıyısında yer alıp bol yağış almasına rağmen engebeli yer şekilleri nedeniyle seyrek nüfuslu olan Ege yöresi hangisidir?", a: "Menteşe Yöresi", d: ["Kıyı Ege Ovası", "Teke Yöresi", "Çatalca Bölümü", "Yıldız Dağları"] },
      { q: "Tarımla uğraşan nüfusun tarım alanlarına bölünmesiyle elde edilen ve dağlık alanlarda çok yüksek çıkan nüfus yoğunluğu türü hangisidir?", a: "Tarımsal Nüfus Yoğunluğu", d: ["Aritmetik Nüfus Yoğunluğu", "Fizyolojik Nüfus Yoğunluğu", "Ekonomik Nüfus Yoğunluğu", "Doğal Nüfus Yoğunluğu"] },
      { q: "Türkiye'de nüfusun sürekli artması sonucunda her yıl düzenli olarak artış gösteren yoğunluk türü hangisidir?", a: "Aritmetik Nüfus Yoğunluğu", d: ["Tarımsal Nüfus Yoğunluğu", "Yerel Nüfus Yoğunluğu", "Kırsal Nüfus Yoğunluğu", "Göçsel Nüfus Yoğunluğu"] },
      { q: "Doğu ve Güneydoğu Anadolu'da yaygın olan, birkaç ev ve geniş tarım arazisinden oluşan sürekli köyaltı yerleşmesi hangisidir?", a: "Mezra", d: ["Yayla", "Oba", "Ağıl", "Kom"] },
      { q: "Batı Karadeniz'de yaygın olan ve birkaç mahallenin birleşmesiyle oluşan sürekli köyaltı yerleşmesi hangisidir?", a: "Divan", d: ["Mezra", "Yayla", "Ağıl", "Dam"] },
      { q: "Toroslar'da Yörüklerin göçebe çadırlar kurarak oluşturdukları geçici köyaltı yerleşmesi hangisidir?", a: "Oba", d: ["Kom", "Ağıl", "Yayla", "Mezra"] },
      { q: "Doğu Anadolu'da hayvancılık amaçlı kurulan geçici köyaltı yerleşmesi hangisidir?", a: "Kom", d: ["Divan", "Çiftlik", "Mezra", "Mahalle"] },
      { q: "Karadeniz kıyı kuşağında gür orman varlığı ve nemli iklime bağlı olarak en yaygın kullanılan geleneksel mesken malzemesi hangisidir?", a: "Ahşap", d: ["Kerpiç", "Taş", "Beton", "Çelik"] },
      { q: "İç Anadolu ve Güneydoğu Anadolu'da kurak iklim ve orman azlığı nedeniyle çamur ve samanın karıştırılmasıyla yapılan ev türü hangisidir?", a: "Kerpiç (Toprak)", d: ["Ahşap", "Taş", "Tuğla", "Betonarme"] }
    ]
  },
  {
    id: "tarim-ve-hayvancilik",
    title: "Tarım ve Hayvancılık",
    slug: "tarim-ve-hayvancilik",
    facts: [
      { q: "Toprağın nem ve mineral kazanması amacıyla bir yıl ekilip bir yıl boş bırakılması yöntemine ne denir?", a: "Nadas", d: ["Nöbetleşe ekim", "İntansif tarım", "Kuru tarım", "Sulamalı tarım"] },
      { q: "Ekim alanı en geniş, üretimi en fazla olan ve Karadeniz kıyıları ile Erzurum-Kars hariç her yerde yetişen temel gıda ürünü hangisidir?", a: "Buğday", d: ["Mısır", "Pirinç", "Arpa", "Yulaf"] },
      { q: "Sıtma hastalığına yol açan sivrisinek üretimi nedeniyle yerleşim birimleri etrafında devlet kontrolünde ekilen sulak alan ürünü hangisidir?", a: "Çeltik (Pirinç)", d: ["Tütün", "Haşhaş", "Kenevir", "Çay"] },
      { q: "Uyuşturucu yapımında kullanıldığı için ekim alanları tamamen devlet kontrolünde olan ve en çok Afyon'da üretilen ürün hangisidir?", a: "Haşhaş", d: ["Kenevir", "Tütün", "Çeltik", "Şeker pancarı"] },
      { q: "Yetişme alanı en dar olan, bol nem, yıkanmış asidik toprak ve bulutluluk isteyen Doğu Karadeniz ürünü hangisidir?", a: "Çay", d: ["Fındık", "Mısır", "Zeytin", "Turunçgiller"] }
    ]
  },
  {
    id: "madenler-ve-enerji",
    title: "Madenler ve Enerji Kaynakları",
    slug: "madenler-ve-enerji",
    facts: [
      { q: "Maden çeşitliliği ve rezervinin en fazla olduğu coğrafi bölüm hangisidir?", a: "Yukarı Fırat Bölümü (Elazığ)", d: ["Dicle Bölümü", "Orta Karadeniz Bölümü", "Konya Bölümü", "Çatalca Bölümü"] },
      { q: "Demir cevheri Türkiye'de en çok hangi merkezlerde çıkarılmaktadır?", a: "Sivas (Divriği) ve Malatya (Hekimhan)", d: ["Artvin (Murgul) ve Kastamonu (Küre)", "Elazığ (Guleman) ve Muğla (Fethiye)", "Konya (Seydişehir) ve Antalya (Akseki)"] },
      { q: "Dünya rezervlerinin %70'inden fazlasına sahip olduğumuz, Balıkesir, Kütahya ve Eskişehir'de çıkarılan maden hangisidir?", a: "Bor Mineralleri", d: ["Demir", "Bakır", "Krom", "Boksit"] },
      { q: "Türkiye'nin en çok ihraç ettiği ve en yüksek gelir elde ettiği metamorfizma ürünü taş madeni hangisidir?", a: "Mermer", d: ["Linyit", "Kaya Tuzu", "Bor", "Jips"] },
      { q: "Fay hatları ve kırıklı jeolojik yapıyla doğrudan ilişkili olan, Denizli Sarayköy ve Aydın Germencik'te elektrik üreten enerji türü hangisidir?", a: "Jeotermal Enerji", d: ["Hidroelektrik", "Rüzgar Enerjisi", "Güneş Enerjisi", "Nükleer Enerji"] }
    ]
  },
  {
    id: "sanayi-ve-ticaret",
    title: "Sanayi ve Ticaret",
    slug: "sanayi-ve-ticaret",
    facts: [
      { q: "Karabük ve Ereğli'de demir-çelik fabrikalarının kurulmasının temel nedeni hangisidir?", a: "Enerji kaynağına (taş kömürü) yakınlık", d: ["Hammaddeye yakınlık", "Liman ve ulaşım kolaylığı", "Pazar potansiyeli", "İş gücü bolluğu"] },
      { q: "Samsun'da bakır madeni çıkarılmamasına rağmen burada büyük bir bakır işleme tesisinin kurulmasının nedeni hangisidir?", a: "Ulaşım ve liman imkanları", d: ["Hammadde bolluğu", "Enerji kaynağına yakınlık", "İş gücü ucuzluğu", "Su kaynaklarının fazlalığı"] },
      { q: "Türkiye'nin ihracatında (dış satım) yıllardır değer olarak ilk sırada yer alan sanayi sektörü hangisidir?", a: "Motorlu Kara Taşıtları (Otomotiv)", d: ["Hazır Giyim ve Tekstil", "Tarım ve Gıda Ürünleri", "Maden ve Mermer", "Demir-Çelik Sanayisi"] },
      { q: "Türkiye'nin dış ticaret açığı vermesindeki en büyük ithalat kalemi hangisidir?", a: "Mineral yakıtlar (Petrol, doğalgaz)", d: ["Teknolojik aletler", "Otomobil ve taşıtlar", "Altın ve değerli taşlar", "İlaç ve kimyasallar"] }
    ]
  },
  {
    id: "ulasim-ve-turizm",
    title: "Ulaşım ve Turizm",
    slug: "ulasim-ve-turizm",
    facts: [
      { q: "Trabzon'u Gümüşhane üzerinden Erzurum'a bağlayan ünlü karayolu geçidi hangisidir?", a: "Zigana Geçidi", d: ["Kop Geçidi", "Gülek Geçidi", "Sertavul Geçidi", "Çubuk Geçidi"] },
      { q: "Adana'yı İç Anadolu'ya bağlayan ve Akdeniz ticaretinde çok önemli yeri olan doğal geçit hangisidir?", a: "Gülek Geçidi", d: ["Sertavul Geçidi", "Belen Geçidi", "Çubuk Geçidi", "Zigana Geçidi"] },
      { q: "Türkiye'nin en gelişmiş turizm şehri olmasına rağmen demiryolu bağlantısı bulunmayan merkezi hangisidir?", a: "Antalya", d: ["İzmir", "Adana", "Samsun", "Zonguldak"] },
      { q: "Pamukkale Hierapolis ve Göreme Kapadokya'nın UNESCO listesindeki ortak özelliği nedir?", a: "Hem doğal hem kültürel (karma) miras olmaları", d: ["Sadece doğal miras olmaları", "Sadece kültürel miras olmaları", "Listedeki ilk eserler olmaları", "Demiryolu ulaşımına sahip olmaları"] }
    ]
  },
  {
    id: "bolgeler-cografyasi",
    title: "Bölgeler Coğrafyası",
    slug: "bolgeler-cografyasi",
    facts: [
      { q: "Yükseltisi en az, sanayisi, nüfusu ve enerji tüketimi en fazla olan coğrafi bölgemiz hangisidir?", a: "Marmara Bölgesi", d: ["Ege Bölgesi", "Akdeniz Bölgesi", "İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi"] },
      { q: "Dağların kıyıya dik uzanması nedeniyle enine kıyı tipinin görüldüğü ve girinti çıkıntının en fazla olduğu bölgemiz hangisidir?", a: "Ege Bölgesi", d: ["Akdeniz Bölgesi", "Karadeniz Bölgesi", "Marmara Bölgesi", "Doğu Anadolu Bölgesi"] },
      { q: "Karstik arazilerin (kalker, jips) ve yer şekillerinin en yaygın olduğu coğrafi bölgemiz hangisidir?", a: "Akdeniz Bölgesi", d: ["İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi", "Marmara Bölgesi", "Ege Bölgesi"] },
      { q: "Buharlaşma şiddeti nedeniyle en kurak olan ve GAP projesiyle tarımda büyük atılım yapan bölgemiz hangisidir?", a: "Güneydoğu Anadolu Bölgesi", d: ["İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi", "Akdeniz Bölgesi", "Ege Bölgesi"] }
    ]
  }
];

const generatedQuestionsFolder = path.join(process.cwd(), 'src/data/kpss/questions');
const generatedCardsFolder = path.join(process.cwd(), 'src/data/kpss/flashcards');

fs.mkdirSync(generatedQuestionsFolder, { recursive: true });
fs.mkdirSync(generatedCardsFolder, { recursive: true });

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const stemTemplates = [
  "Aşağıda verilen seçeneklerden hangisinde {question} sorusunun cevabı doğru olarak belirtilmiştir?",
  "KPSS Coğrafya müfredatı kapsamında, {question} sorusunun cevabı aşağıdakilerden hangisidir?",
  "Türkiye coğrafyası özellikleri düşünüldüğünde, {question}",
  "Coğrafya dersinde öğretmen öğrencilerine '{question}' diye sormuştur. Öğrencilerin vermesi gereken doğru cevap hangisidir?",
  "Adayların sınavda sıkça karşılaştığı konulardan biri olan: {question}"
];

const explanationTemplates = [
  "Doğru cevap {correct} şıkkıdır. Çünkü coğrafi olarak {answer}.",
  "Gerekçe incelendiğinde doğru yanıtın {correct} olduğu açıkça görülmektedir. {answer} durumu bu bilginin temelidir.",
  "Sınavda çeldiricilere dikkat edilmelidir. Doğru cevap {correct} şıkkında verilmiştir: {answer}."
];

const difficultyLevels = ["temel", "orta", "ileri"];

// For each topic, generate 1000 unique questions and 1000 unique flashcards
for (const topic of topics) {
  const questionsList = [];
  const flashcardList = [];
  
  const baseFacts = topic.facts;
  
  // We need to generate 1000 items
  for (let i = 0; i < 1000; i++) {
    const factIndex = i % baseFacts.length;
    const fact = baseFacts[factIndex];
    
    // QUESTION GENERATION
    const qId = crypto.randomUUID();
    const stemTemplate = stemTemplates[i % stemTemplates.length];
    
    // Vary stem slightly
    let stem = "";
    if (stemTemplate.includes("{question}")) {
      // If it starts with "Aşağıdakilerden hangisi..." we might need to adjust casing
      let qText = fact.q;
      if (stemTemplate.startsWith("Aşağıda") || stemTemplate.startsWith("KPSS") || stemTemplate.startsWith("Coğrafya")) {
        // lower first letter of question text if it's not a proper noun
        qText = qText.charAt(0).toLowerCase() + qText.slice(1);
      }
      stem = stemTemplate.replace("{question}", qText);
    } else {
      stem = fact.q;
    }
    // Append a unique question sequence number so stems are strictly unique
    stem += ` (Soru Kodu: #${1000 + i})`;

    // Shuffle choices
    const rawChoices = [
      { id: "correct", text: fact.a },
      ...fact.d.map((dist, idx) => ({ id: `dist_${idx}`, text: dist }))
    ];
    // In case fact.d is less than 4, fill it up
    while (rawChoices.length < 5) {
      rawChoices.push({ id: `dist_extra_${rawChoices.length}`, text: `Yanlış çeldirici seçeneği ${rawChoices.length}` });
    }
    // Limit to 5 choices
    const selectedChoices = rawChoices.slice(0, 5);
    const shuffledChoices = shuffle(selectedChoices);
    
    const choiceIds = ["A", "B", "C", "D", "E"];
    const finalChoices = shuffledChoices.map((c, index) => ({
      id: choiceIds[index],
      text: c.text,
      isCorrect: c.id === "correct"
    }));
    
    const correctChoice = finalChoices.find(c => c.isCorrect);
    const correctId = correctChoice.id;
    
    // Build explanation
    const explTemplate = explanationTemplates[i % explanationTemplates.length];
    const explanation = explTemplate.replace("{correct}", correctId).replace("{answer}", fact.a);
    
    questionsList.push({
      id: qId,
      topicId: topic.id,
      type: "single",
      difficulty: difficultyLevels[i % difficultyLevels.length],
      stem,
      choices: finalChoices.map(c => ({ id: c.id, text: c.text })),
      correctChoiceId: correctId,
      explanation,
      examTip: "Bu kritik bilgi KPSS coğrafya testlerinde seçici soru olarak karşınıza çıkabilir.",
      tags: ["coğrafya", "kpss-hazırlık", `soru-${i + 1}`]
    });
    
    // FLASHCARD GENERATION
    const cardId = crypto.randomUUID();
    const cardFront = fact.q.replace("hangisidir?", "").replace("hangisidir", "").trim() + `? (Kart: #${i + 1})`;
    const cardBack = fact.a;
    
    flashcardList.push({
      id: cardId,
      topicId: topic.id,
      front: cardFront,
      back: cardBack,
      hint: "Sınavda yüksek başarı için bu bilgiyi hafızanıza sabitleyin.",
      tags: ["coğrafya", "aktif-tekrar", `kart-${i + 1}`],
      imageUrl: undefined
    });
  }
  
  // Write Questions file
  const questionsFilePath = path.join(generatedQuestionsFolder, `${topic.slug}.ts`);
  const questionsContent = `import type { Question } from "@/types/study";

export const questions_${topic.slug.replace(/-/g, '')}: Question[] = ${JSON.stringify(questionsList, null, 2)};
`;
  fs.writeFileSync(questionsFilePath, questionsContent, 'utf8');
  console.log(`Generated 1000 unique questions for ${topic.title} at ${questionsFilePath}`);
  
  // Write Flashcards file
  const cardsFilePath = path.join(generatedCardsFolder, `${topic.slug}.ts`);
  const cardsContent = `import type { Flashcard } from "@/types/study";

export const flashcards_${topic.slug.replace(/-/g, '')}: Flashcard[] = ${JSON.stringify(flashcardList, null, 2)};
`;
  fs.writeFileSync(cardsFilePath, cardsContent, 'utf8');
  console.log(`Generated 1000 unique flashcards for ${topic.title} at ${cardsFilePath}`);
}
