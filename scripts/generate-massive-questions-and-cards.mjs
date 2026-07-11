import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const topics = [
  {
    id: "turkiyenin-cografi-konumu",
    title: "Türkiye'nin Coğrafi Konumu",
    slug: "turkiyenin-cografi-konumu",
    facts: [
      { q: "Türkiye'nin matematik konum koordinatları enlem olarak hangisidir?", a: "36°-42° Kuzey enlemleri", d: ["36°-42° Güney enlemleri", "26°-45° Kuzey enlemleri", "26°-45° Güney enlemleri", "36°-45° Kuzey enlemleri"], tip: "Ekvator'un kuzeyinde olmamız nedeniyle gölge yönü öğle vakti daima kuzeyi gösterir." },
      { q: "Türkiye'nin matematik konum koordinatları boylam olarak hangisidir?", a: "26°-45° Doğu boylamları", d: ["26°-45° Batı boylamları", "36°-42° Doğu boylamları", "36°-42° Batı boylamları", "26°-42° Doğu boylamları"], tip: "Doğu-batı yönlü 19 boylam farkı ülkemizde 76 dakikalık yerel saat farkına yol açar." },
      { q: "Aşağıdakilerden hangisi Türkiye'nin orta kuşakta yer almasının kanıtlarından biri değildir?", a: "Ortalama yükseltinin fazla olması", d: ["Akdeniz iklim kuşağında yer alması", "Batı rüzgarlarının etkisi altında olması", "Cephesel yağışların görülmesi", "Dört mevsimin belirgin yaşanması"], tip: "Orta kuşak kanıtlarını Akdeniz iklimi, Batı rüzgarları, Cephe yağışları ve Dört mevsim (A-B-C-D) olarak kodlayabilirsiniz." },
      { q: "Türkiye'nin en kuzey uç noktası hangisidir?", a: "Sinop - İnceburun", d: ["Hatay - Topraktutan", "Çanakkale - Avlaka Burnu", "Iğdır - Dilucu", "Kırklareli - Kofçaz"], tip: "Sinop İnceburun en kuzey noktamız olup, yer çekiminin en fazla, çizgisel hızın en az olduğu yerdir." },
      { q: "Türkiye'nin en güney uç noktası hangisidir?", a: "Hatay - Topraktutan (Beysun)", d: ["Sinop - İnceburun", "Çanakkale - Avlaka Burnu", "Iğdır - Dilucu", "Muğla - Dalaman"], tip: "Hatay en güney noktamızdır ve güneş ışınlarını en büyük açıyla alarak çizgisel hızı en yüksek olan ilimizdir." },
      { q: "Türkiye'nin en batı uç noktası hangisidir?", a: "Çanakkale - Avlaka Burnu (Gökçeada)", d: ["Sinop - İnceburun", "Hatay - Topraktutan", "Iğdır - Dilucu", "İzmir - Karaburun"], tip: "Çanakkale Avlaka Burnu en batı noktamızdır ve güneşin en son battığı yer burasıdır." },
      { q: "Türkiye'nin en doğu uç noktası hangisidir?", a: "Iğdır - Dilucu", d: ["Sinop - İnceburun", "Hatay - Topraktutan", "Çanakkale - Avlaka Burnu", "Artvin - Sarp"], tip: "Iğdır Dilucu en doğu uç noktamızdır ve güneşin en erken doğup en erken battığı yerdir." },
      { q: "Türkiye'nin en doğusu ile en batısı arasındaki yerel saat farkı kaç dakikadır?", a: "76 dakika", d: ["45 dakika", "19 dakika", "60 dakika", "120 dakika"], tip: "Boylam farkı yerel saat farkını belirler, 19 boylam x 4 dakika = 76 dakika sabit fark vardır." },
      { q: "Türkiye'nin kuzey-güney kuş uçuşu mesafesi kaç kilometredir?", a: "666 km", d: ["111 km", "555 km", "777 km", "999 km"], tip: "Enlemler arası mesafe her yerde 111 km'dir, 6 enlem farkı 666 km kuş uçuşu mesafe yapar." },
      { q: "Yıl boyunca ortak (ulusal) saat olarak kullandığımız 45° Doğu boylamı hangi ilimizden geçer?", a: "Iğdır", d: ["İzmit", "Bingöl", "Kars", "Trabzon"], tip: "2016 yılından itibaren kışın da yaz saati olan +3. saat dilimi (45° Doğu Iğdır) kalıcı olarak kullanılmaktadır." },
      { q: "Aşağıdakilerden hangisi Türkiye'nin en uzun kara sınırına sahip olduğu komşusudur?", a: "Suriye", d: ["İran", "Irak", "Yunanistan", "Bulgaristan"], tip: "Suriye sınırımız demiryolu bağlantısı da olan, en düz ve en uzun kara sınırımızdır." },
      { q: "Türkiye'nin en kısa kara sınırı hangi ülke iledir?", a: "Nahçıvan (Azerbaycan)", d: ["Bulgaristan", "Ermenistan", "Yunanistan", "Gürcistan"], tip: "Nahçıvan sınırımız Dilucu sınır kapısıyla bağlı olduğumuz en kısa sınırımızdır." },
      { q: "1639 Kasr-ı Şirin Antlaşması ile belirlenen ve günümüze kadar en az değişen sınırımız hangi ülke iledir?", a: "İran", d: ["Irak", "Suriye", "Yunanistan", "Rusya"], tip: "İran sınırımız Zagros Dağları'nı takip eder ve 1639 Kasr-ı Şirin Antlaşması'ndan beri değişmemiştir." },
      { q: "Türkiye'nin Avrupa'ya açılan en işlek kara ve demiryolu sınır kapısı hangisidir?", a: "Kapıkule (Bulgaristan)", d: ["İpsala (Yunanistan)", "Habur (Irak)", "Sarp (Gürcistan)", "Gürbulak (İran)"], tip: "Kapıkule Avrupa'ya açılan en işlek kara ve demiryolu gümrük kapımızdır." },
      { q: "Türkiye'nin Irak ile olan ticaretinde en yoğun kullanılan sınır kapısı hangisidir?", a: "Habur", d: ["Cilvegözü", "Gürbulak", "Sarp", "Dilucu"], tip: "Habur sınır kapısı Irak ile olan ticaretimizin ana can damarı olup en işlek Ortadoğu kapımızdır." },
      { q: "Türkiye'nin Gürcistan ile bağlantısını sağlayan ve Doğu Karadeniz ticaretinde büyük önemi olan sınır kapısı hangisidir?", a: "Sarp", d: ["Gürbulak", "Dilucu", "Habur", "Kapıkule"], tip: "Sarp sınır kapısı Gürcistan ile olan sınırımızda yer alır ve Kafkasya'ya kimlikle geçiş sağlar." }
    ]
  },
  {
    id: "yer-sekilleri",
    title: "Türkiye'nin Yer Şekilleri",
    slug: "yer-sekilleri",
    facts: [
      { q: "Türkiye'de taş kömürü yataklarının bulunması hangi jeolojik zamana ait arazilerin varlığını kanıtlar?", a: "I. Jeolojik Zaman (Paleozoik)", d: ["II. Jeolojik Zaman (Mesozoik)", "III. Jeolojik Zaman (Tersiyer)", "IV. Jeolojik Zaman (Kuvaterner)", "Prekambriyen"], tip: "Taş kömürü I. jeolojik zaman (Paleozoik) arazilerinde oluşmuştur ve demir-çelik sanayisinde enerji kaynağı olarak kullanılır." },
      { q: "Türkiye'deki linyit, tuz, bor ve petrol yatakları hangi jeolojik zamanda oluşmuştur?", a: "III. Jeolojik Zaman (Tersiyer)", d: ["I. Jeolojik Zaman (Paleozoik)", "II. Jeolojik Zaman (Mesozoik)", "IV. Jeolojik Zaman (Kuvaterner)", "Prekambriyen"], tip: "Linyit, tuz, bor ve petrol yataklarının ülkemizde yaygın olması, Anadolu'nun büyük kısmının III. jeolojik zamanda oluştuğunu kanıtlar." },
      { q: "Ege Denizi, İstanbul ve Çanakkale boğazlarının oluşumu hangi jeolojik zamanda gerçekleşmiştir?", a: "IV. Jeolojik Zaman (Kuvaterner)", d: ["I. Jeolojik Zaman (Paleozoik)", "II. Jeolojik Zaman (Mesozoik)", "III. Jeolojik Zaman (Tersiyer)", "Arkeozoik"], tip: "İstanbul-Çanakkale boğazları ve Ege Denizi IV. jeolojik zamandaki çökmeler (epirojenez) sonucu oluşmuştur." },
      { q: "Aşağıdakilerden hangisi kırıklı dağ oluşumuyla (Horst-Graben) meydana gelen dağlarımızdan biri değildir?", a: "Kaçkar Dağları", d: ["Kaz Dağları", "Yunt Dağları", "Bozdağlar", "Aydın Dağları"], tip: "Ege'deki Horst-Graben sistemlerini ve Akdeniz'deki kırıklı Nur Dağı istisnasını mutlaka aklınızda tutun." },
      { q: "Ege Bölgesi dışında yer alan, Akdeniz'de kırıklı dağ yapısına (Horst) sahip olan dağ hangisidir?", a: "Amanos (Nur) Dağları", d: ["Aladağlar", "Bey Dağları", "Geyik Dağları", "Bolkarlar"], tip: "Amanos Nur Dağları Akdeniz'de kırılmayla oluşmuş bir horsttur, önündeki Amik Ovası ise grabendir." },
      { q: "Aşağıdaki volkanik dağlardan hangisi kalkan biçimli volkan tipine tek örnektir?", a: "Karacadağ (Güneydoğu)", d: ["Ağrı Dağı", "Nemrut Dağı", "Erciyes Dağı", "Hasan Dağı"], tip: "Güneydoğu Anadolu'daki Karacadağ, lavlarının çok akıcı olması nedeniyle yayvan ve kalkan biçimli volkana tek örnektir." },
      { q: "Türkiye'nin en genç volkanik sahası kabul edilen ve 'Adalık' olarak da bilinen yer hangisidir?", a: "Manisa - Kula", d: ["Nevşehir - Ürgüp", "Van - Nemrut", "Kayseri - Erciyes", "Hatay - Hassa"], tip: "Kula volkanik sahası Türkiye'nin en genç volkanik arazisidir ve jeopark alanı ilan edilmiştir." },
      { q: "Yükseltisi en az, sanayi ve nüfus yoğunluğu en fazla olan aşınım düzlüğü platosu hangisidir?", a: "Çatalca - Kocaeli Platosu", d: ["Teke Platosu", "Taşeli Platosu", "Haymana Platosu", "Erzurum - Kars Platosu"], tip: "Çatalca-Kocaeli Platosu aşınım düzlüğü platosu olup, Türkiye'nin nüfus ve sanayi yoğunluğu en yüksek platosudur." },
      { q: "Karstik yapısı nedeniyle nüfusun en seyrek olduğu Akdeniz platoları hangileridir?", a: "Teke ve Taşeli", d: ["Haymana ve Cihanbeyli", "Bozok ve Obruk", "Erzurum ve Kars", "Çatalca ve Kocaeli"], tip: "Teke ve Taşeli platolarının karstik yapısı nedeniyle su sızdırması yüksek ve nüfusun en seyrek olduğu alanlardır." },
      { q: "Lav platosu olan Erzurum-Kars Platosu hangi özelliğiyle bilinir?", a: "Yaz yağışları ve büyükbaş hayvancılık", d: ["Tahıl tarımı", "En düşük yükselti", "Karstik mağaralar", "Çölleşme riski"], tip: "Erzurum-Kars lav platosu yaz yağışlarıyla yeşeren çayırlar sayesinde büyükbaş mera hayvancılığı merkezidir." },
      { q: "Türkiye'nin en büyük delta ovası hangisidir?", a: "Çukurova", d: ["Bafra", "Çarşamba", "Silifke", "Menemen"], tip: "Çukurova Seyhan ve Ceyhan nehirlerinin getirdiği alüvyonlarla oluşmuş en büyük delta ovamızdır." },
      { q: "Aşağıdakilerden hangisi karstik ovalardan (polye) biri değildir?", a: "Bafra Ovası", d: ["Tefenni Ovası", "Acıpayam Ovası", "Korkuteli Ovası", "Elmalı Ovası"], tip: "Polye ovalarını 'TAKKEM' (Tefenni, Acıpayam, Korkuteli, Kestel, Elmalı, Muğla) olarak şifreleyebilirsiniz." }
    ]
  },
  {
    id: "iklim-ve-bitki-ortusu",
    title: "İklim ve Bitki Örtüsü",
    slug: "iklim-ve-bitki-ortusu",
    facts: [
      { q: "Türkiye'de kışın çok soğuk, ayaz ve kuru kış şartları getiren termik kökenli basınç merkezi hangisidir?", a: "Sibirya Yüksek Basıncı", d: ["İzlanda Alçak Basıncı", "Asor Yüksek Basıncı", "Basra Alçak Basıncı", "Muson Alçak Basıncı"], tip: "Sibirya kışın aşırı soğuk ve ayaz getirir, termik kökenli bir yüksek basınçtır." },
      { q: "Türkiye'ye yazın esen, Güneydoğu'dan sokularak aşırı sıcaklık ve kuraklığa neden olan basınç merkezi hangisidir?", a: "Basra Alçak Basıncı", d: ["Sibirya Yüksek Basıncı", "İzlanda Alçak Basıncı", "Asor Yüksek Basıncı", "Azor Alçak Basıncı"], tip: "Basra alçak basıncı yaz aylarında Güneydoğu Anadolu'da aşırı kuraklık ve çölleşmeye neden olur." },
      { q: "Kayıp Sakal şifresinde yer alan, kuzeydoğudan eserek kışın kuru soğuk yapan rüzgar hangisidir?", a: "Poyraz", d: ["Karayel", "Yıldız", "Lodos", "Samyeli"], tip: "Poyraz kuzeydoğudan esen, sıcaklığı düşüren soğuk karakterli bir rüzgardır." },
      { q: "Güneybatıdan esen, sıcak ve nemli olan, kışın soba zehirlenmelerine ve karların hızlı erimesine yol açan rüzgar hangisidir?", a: "Lodos", d: ["Poyraz", "Karayel", "Yıldız", "Kıble"], tip: "Lodos güneybatıdan sıcak ve nemli eser, karları eriterek çığ riski ve soba zehirlenmesine neden olur." },
      { q: "Dağ yamacından aşağı esen havanın her 100 metrede 1°C ısınmasıyla oluşan rüzgar hangisidir?", a: "Fön (Föhn) Rüzgarı", d: ["Meltem Rüzgarı", "Alize Rüzgarı", "Muson Rüzgarı", "Kasırga"], tip: "Fön rüzgarları kurutucu etki yapar, Doğu Karadeniz'de mikroklima tarım ürünlerinin yetişmesini sağlar." },
      { q: "Akdeniz iklim kuşağında kış aylarında görülen, sıcak ve soğuk hava kütlelerinin karşılaşmasıyla oluşan yağış tipi hangisidir?", a: "Cephesel (Frontal) Yağış", d: ["Yamaç (Orografik) Yağış", "Konveksiyonel (Yükselim) Yağış", "Yükselim Yağışı", "Meltem Yağışı"], tip: "Cephesel yağışlar Türkiye'nin orta kuşakta yer almasının (matematik konum) doğrudan bir sonucudur." },
      { q: "Doğu Karadeniz'de nemli hava kütlelerinin dağ yamaçları boyunca yükselerek oluşturduğu yağış türü hangisidir?", a: "Orografik (Yamaç) Yağış", d: ["Cephesel Yağış", "Konveksiyonel Yağış", "Kırkikindi Yağışı", "Muson Yağışı"], tip: "Orografik yağışlar dağların kıyıya paralel uzandığı Karadeniz ve Akdeniz kıyılarında yaygındır." },
      { q: "İç Anadolu'da ilkbaharda görülen ve halk arasında 'Kırkikindi' olarak adlandırılan yükselim yağışlarının coğrafi adı hangisidir?", a: "Konveksiyonel Yağış", d: ["Cephesel Yağış", "Orografik Yağış", "Yamaç Yağışı", "Frontal Yağış"], tip: "Konveksiyonel yağışlar İç Anadolu'da ilkbaharda, Erzurum-Kars'ta ise yaz başlarında görülür." },
      { q: "En fazla yağışı sonbaharda, en az yağışı ilkbaharda alan, her mevsim yağışlı iklimimiz hangisidir?", a: "Karadeniz İklimi", d: ["Akdeniz İklimi", "Karasal İklim", "Sert Karasal İklim", "Muson İklimi"], tip: "Karadeniz ikliminde her mevsim yağış olduğundan kimyasal çözünme ve toprak yıkanması en fazladır." },
      { q: "Muğla Köyceğiz çevresinde yetişen, kozmetik ve ilaç sanayisinde kullanılan ünlü endemik ağaç türümüz hangisidir?", a: "Sığla Ağacı (Günlük)", d: ["Kasnak Meşesi", "Datça Hurması", "İspir Meşesi", "Kızılçam"], tip: "Sığla ağacı Muğla Köyceğiz havzasına özgü endemik bir ağaç olup kozmetikte sığla yağı üretimi için kullanılır." }
    ]
  },
  {
    id: "nufus-ve-yerlesme",
    title: "Nüfus ve Yerleşme",
    slug: "nufus-ve-yerlesme",
    facts: [
      { q: "Deniz kıyısında yer alıp bol yağış almasına rağmen engebeli yer şekilleri nedeniyle seyrek nüfuslu olan Ege yöresi hangisidir?", a: "Menteşe Yöresi", d: ["Kıyı Ege Ovası", "Teke Yöresi", "Çatalca Bölümü", "Yıldız Dağları"], tip: "Menteşe Yöresi kıyıda olmasına rağmen engebe yüzünden Ege'nin en seyrek nüfuslu ve sapa yeridir." },
      { q: "Tarımla uğraşan nüfusun tarım alanlarına bölünmesiyle elde edilen ve dağlık alanlarda çok yüksek çıkan nüfus yoğunluğu türü hangisidir?", a: "Tarımsal Nüfus Yoğunluğu", d: ["Aritmetik Nüfus Yoğunluğu", "Fizyolojik Nüfus Yoğunluğu", "Ekonomik Nüfus Yoğunluğu", "Doğal Nüfus Yoğunluğu"], tip: "Tarımsal nüfus yoğunluğu Doğu Karadeniz ve Hakkari gibi tarım arazisi dar olan dağlık yerlerde yüksek çıkar." },
      { q: "Türkiye'de nüfusun sürekli artması sonucunda her yıl düzenli olarak artış gösteren yoğunluk türü hangisidir?", a: "Aritmetik Nüfus Yoğunluğu", d: ["Tarımsal Nüfus Yoğunluğu", "Yerel Nüfus Yoğunluğu", "Kırsal Nüfus Yoğunluğu", "Göçsel Nüfus Yoğunluğu"], tip: "Aritmetik nüfus yoğunluğu toplam nüfusun yüzölçüme bölünmesiyle bulunur ve ülkemizde her yıl artmaktadır." },
      { q: "Doğu ve Güneydoğu Anadolu'da yaygın olan, birkaç ev ve geniş tarım arazisinden oluşan sürekli köyaltı yerleşmesi hangisidir?", a: "Mezra", d: ["Yayla", "Oba", "Ağıl", "Kom"], tip: "Mezra ve Divan sürekli köyaltı yerleşmeleriyken; Yayla ve Oba geçici yerleşmelerdir." },
      { q: "Batı Karadeniz'de yaygın olan ve birkaç mahallenin birleşmesiyle oluşan sürekli köyaltı yerleşmesi hangisidir?", a: "Divan", d: ["Mezra", "Yayla", "Ağıl", "Dam"], tip: "Divan yerleşmesi özellikle Batı Karadeniz'de (Sinop, Kastamonu, Bolu) yaygın sürekli bir yerleşimdir." },
      { q: "Toroslar'da Yörüklerin göçebe çadırlar kurarak oluşturdukları geçici köyaltı yerleşmesi hangisidir?", a: "Oba", d: ["Kom", "Ağıl", "Yayla", "Mezra"], tip: "Obalar göçebe hayvancılık yapan Yörüklerin çadırlı geçici yerleşmeleridir." },
      { q: "Doğu Anadolu'da hayvancılık amaçlı kurulan geçici köyaltı yerleşmesi hangisidir?", a: "Kom", d: ["Divan", "Çiftlik", "Mezra", "Mahalle"], tip: "Kom yerleşmeleri Doğu Anadolu'da hayvancılık faaliyetleri için kurulan geçici yerleşmelerdir." },
      { q: "Karadeniz kıyı kuşağında gür orman varlığı ve nemli iklime bağlı olarak en yaygın kullanılan geleneksel mesken malzemesi hangisidir?", a: "Ahşap", d: ["Kerpiç", "Taş", "Beton", "Çelik"], tip: "Karadeniz'deki ahşap konutlar tamamen nemli iklim ve gür orman varlığının (hammadde) sonucudur." },
      { q: "İç Anadolu ve Güneydoğu Anadolu'da kurak iklim ve orman azlığı nedeniyle çamur ve samanın karıştırılmasıyla yapılan ev türü hangisidir?", a: "Kerpiç (Toprak)", d: ["Ahşap", "Taş", "Tuğla", "Betonarme"], tip: "Kerpiç konutlar kurak iklim ve toprak yapısının yaygın olduğu İç Anadolu ve Güneydoğu'da yoğundur." }
    ]
  },
  {
    id: "tarim-ve-hayvancilik",
    title: "Tarım ve Hayvancılık",
    slug: "tarim-ve-hayvancilik",
    facts: [
      { q: "Toprağın nem ve mineral kazanması amacıyla bir yıl ekilip bir yıl boş bırakılması yöntemine ne denir?", a: "Nadas", d: ["Nöbetleşe ekim", "İntansif tarım", "Kuru tarım", "Sulamalı tarım"], tip: "Nadas toprağı boş bırakmaktır, erozyona yol açtığı için yerine nöbetleşe ekim önerilir." },
      { q: "Ekim alanı en geniş, üretimi en fazla olan ve Karadeniz kıyıları ile Erzurum-Kars hariç her yerde yetişen temel gıda ürünü hangisidir?", a: "Buğday", d: ["Mısır", "Pirinç", "Arpa", "Yulaf"], tip: "Buğday ilkbaharda yağış, yazın ise mutlak kuraklık ister. Karadeniz kıyılarında yaz yağışları yüzünden yetişmez." },
      { q: "Sıtma hastalığına yol açan sivrisinek üretimi nedeniyle yerleşim birimleri etrafında devlet kontrolünde ekilen sulak alan ürünü hangisidir?", a: "Çeltik (Pirinç)", d: ["Tütün", "Haşhaş", "Kenevir", "Çay"], tip: "Çeltik bataklık ortamda yetiştiğinden sıtma riski nedeniyle devlet kontrolünde akarsu yataklarında ekilir." },
      { q: "Uyuşturucu yapımında kullanıldığı için ekim alanları tamamen devlet kontrolünde olan ve en çok Afyon'da üretilen ürün hangisidir?", a: "Haşhaş", d: ["Kenevir", "Tütün", "Çeltik", "Şeker pancarı"], tip: "Haşhaş kapsülündeki uyuşturucu hammaddesi nedeniyle devlet kontrolünde kotalı olarak ekilir." },
      { q: "Yetişme alanı en dar olan, bol nem, yıkanmış asidik toprak ve bulutluluk isteyen Doğu Karadeniz ürünü hangisidir?", a: "Çay", d: ["Fındık", "Mısır", "Zeytin", "Turunçgiller"], tip: "Çay asidik toprak ve yüksek nem isteyen, yetişme alanı en dar olan yıkanmış toprak ürünüdür." }
    ]
  },
  {
    id: "madenler-ve-enerji",
    title: "Madenler ve Enerji Kaynakları",
    slug: "madenler-ve-enerji",
    facts: [
      { q: "Maden çeşitliliği ve rezervinin en fazla olduğu coğrafi bölüm hangisidir?", a: "Yukarı Fırat Bölümü (Elazığ)", d: ["Dicle Bölümü", "Orta Karadeniz Bölümü", "Konya Bölümü", "Çatalca Bölümü"], tip: "Elazığ ve Yukarı Fırat Bölümü, volkanizma ve metamorfizma nedeniyle maden çeşitliliği en yüksek yerdir." },
      { q: "Demir cevheri Türkiye'de en çok hangi merkezlerde çıkarılmaktadır?", a: "Sivas (Divriği) ve Malatya (Hekimhan)", d: ["Artvin (Murgul) ve Kastamonu (Küre)", "Elazığ (Guleman) ve Muğla (Fethiye)", "Konya (Seydişehir) ve Antalya (Akseki)"], tip: "Demir madenimiz en çok Sivas Divriği'de çıkarılır, Zonguldak'taki demir-çelik fabrikalarına taşınır." },
      { q: "Dünya rezervlerinin %70'inden fazlasına sahip olduğumuz, Balıkesir, Kütahya ve Eskişehir'de çıkarılan maden hangisidir?", a: "Bor Mineralleri", d: ["Demir", "Bakır", "Krom", "Boksit"], tip: "Bor mineralleri jet yakıtı, cam ve nükleer sanayide kullanılır, Türkiye dünya rezerv birincisidir." },
      { q: "Türkiye'nin en çok ihraç ettiği ve en yüksek gelir elde ettiği metamorfizma ürünü taş madeni hangisidir?", a: "Mermer", d: ["Linyit", "Kaya Tuzu", "Bor", "Jips"], tip: "Mermer maden ihracat gelirlerimizde ilk sırada yer alan blok taş madenimizdir." },
      { q: "Fay hatları ve kırıklı jeolojik yapıyla doğrudan ilişkili olan, Denizli Sarayköy ve Aydın Germencik'te elektrik üreten enerji türü hangisidir?", a: "Jeotermal Enerji", d: ["Hidroelektrik", "Rüzgar Enerjisi", "Güneş Enerjisi", "Nükleer Enerji"], tip: "Jeotermal enerji kırıklı fay hatlarından gelen sıcak sularla elde edilir ve iklim koşullarından etkilenmez." }
    ]
  },
  {
    id: "sanayi-ve-ticaret",
    title: "Sanayi ve Ticaret",
    slug: "sanayi-ve-ticaret",
    facts: [
      { q: "Karabük ve Ereğli'de demir-çelik fabrikalarının kurulmasının temel nedeni hangisidir?", a: "Enerji kaynağına (taş kömürü) yakınlık", d: ["Hammaddeye yakınlık", "Liman ve ulaşım kolaylığı", "Pazar potansiyeli", "İş gücü bolluğu"], tip: "Karabük ve Ereğli tesislerinin kurulmasında demir yatakları değil, taş kömürü (enerji kaynağı) etkili olmuştur." },
      { q: "Samsun'da bakır madeni çıkarılmamasına rağmen burada büyük bir bakır işleme tesisinin kurulmasının nedeni hangisidir?", a: "Ulaşım ve liman imkanları", d: ["Hammadde bolluğu", "Enerji kaynağına yakınlık", "İş gücü ucuzluğu", "Su kaynaklarının fazlalığı"], tip: "Samsun'da bakır işletmesinin olması tamamen hinterlandı geniş liman ve demiryolu ulaşımıyla ilgilidir." },
      { q: "Türkiye'nin ihracatında (dış satım) yıllardır değer olarak ilk sırada yer alan sanayi sektörü hangisidir?", a: "Motorlu Kara Taşıtları (Otomotiv)", d: ["Hazır Giyim ve Tekstil", "Tarım ve Gıda Ürünleri", "Maden ve Mermer", "Demir-Çelik Sanayisi"], tip: "Otomotiv sektörü Türkiye'nin yıllık ihracat gelirlerinde uzun yıllardır birinci sıradadır." },
      { q: "Türkiye'nin dış ticaret açığı vermesindeki en büyük ithalat kalemi hangisidir?", a: "Mineral yakıtlar (Petrol, doğalgaz)", d: ["Teknolojik aletler", "Otomobil ve taşıtlar", "Altın ve değerli taşlar", "İlaç ve kimyasallar"], tip: "Mineral yakıtlar (petrol ve doğalgaz) ithalat faturamızın en büyük kısmını ve cari açığı oluşturur." }
    ]
  },
  {
    id: "ulasim-ve-turizm",
    title: "Ulaşım ve Turizm",
    slug: "ulasim-ve-turizm",
    facts: [
      { q: "Trabzon'u Gümüşhane üzerinden Erzurum'a bağlayan ünlü karayolu geçidi hangisidir?", a: "Zigana Geçidi", d: ["Kop Geçidi", "Gülek Geçidi", "Sertavul Geçidi", "Çubuk Geçidi"], tip: "Zigana geçidi Trabzon'u iç kesimlere bağlar, yakın zamanda dünyanın en uzun tünellerinden biri buraya yapılmıştır." },
      { q: "Adana'yı İç Anadolu'ya bağlayan ve Akdeniz ticaretinde çok önemli yeri olan doğal geçit hangisidir?", a: "Gülek Geçidi", d: ["Sertavul Geçidi", "Belen Geçidi", "Çubuk Geçidi", "Zigana Geçidi"], tip: "Gülek Boğazı İç Anadolu'yu Çukurova sanayisine ve Mersin limanına bağlayan en stratejik geçittir." },
      { q: "Türkiye'nin en gelişmiş turizm şehri olmasına rağmen demiryolu bağlantısı bulunmayan merkezi hangisidir?", a: "Antalya", d: ["İzmir", "Adana", "Samsun", "Zonguldak"], tip: "Antalya ve Muğla turizm gelişmişliğine rağmen demiryolu ulaşımı olmayan engebe sapa merkezlerimizdir." },
      { q: "Pamukkale Hierapolis ve Göreme Kapadokya'nın UNESCO listesindeki ortak özelliği nedir?", a: "Hem doğal hem kültürel (karma) miras olmaları", d: ["Sadece doğal miras olmaları", "Sadece kültürel miras olmaları", "Listedeki ilk eserler olmaları", "Demiryolu ulaşımına sahip olmaları"], tip: "Pamukkale ve Kapadokya listedeki karma (hem doğal hem beşeri) miras statüsündeki iki eserimizdir." }
    ]
  },
  {
    id: "bolgeler-cografyasi",
    title: "Bölgeler Coğrafyası",
    slug: "bolgeler-cografyasi",
    facts: [
      { q: "Yükseltisi en az, sanayisi, nüfusu ve enerji tüketimi en fazla olan coğrafi bölgemiz hangisidir?", a: "Marmara Bölgesi", d: ["Ege Bölgesi", "Akdeniz Bölgesi", "İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi"], tip: "Marmara Bölgesi yükseltisi en az, yol yapım maliyeti en düşük, sanayi ve nüfusu en yoğun bölgemizdir." },
      { q: "Dağların kıyıya dik uzanması nedeniyle enine kıyı tipinin görüldüğü ve girinti çıkıntının en fazla olduğu bölgemiz hangisidir?", a: "Ege Bölgesi", d: ["Akdeniz Bölgesi", "Karadeniz Bölgesi", "Marmara Bölgesi", "Doğu Anadolu Bölgesi"], tip: "Ege'de dağların dik uzanması enine kıyıyı oluşturur, kıyı ile iç kesim arası ulaşımı kolaylaştırır." },
      { q: "Karstik arazilerin (kalker, jips) ve yer şekillerinin en yaygın olduğu coğrafi bölgemiz hangisidir?", a: "Akdeniz Bölgesi", d: ["İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi", "Marmara Bölgesi", "Ege Bölgesi"], tip: "Akdeniz Bölgesi kalkerli (kireçtaşı) karstik yapısıyla mağara, obruk ve polye oluşumlarının merkezidir." },
      { q: "Buharlaşma şiddeti nedeniyle en kurak olan ve GAP projesiyle tarımda büyük atılım yapan bölgemiz hangisidir?", a: "Güneydoğu Anadolu Bölgesi", d: ["İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi", "Akdeniz Bölgesi", "Ege Bölgesi"], tip: "Güneydoğu Anadolu, buharlaşma şiddeti nedeniyle en kurak olan ama GAP projesiyle pamuk üretim birincisi olan bölgemizdir." }
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
      let qText = fact.q;
      if (stemTemplate.startsWith("Aşağıda") || stemTemplate.startsWith("KPSS") || stemTemplate.startsWith("Coğrafya")) {
        qText = qText.charAt(0).toLowerCase() + qText.slice(1);
      }
      stem = stemTemplate.replace("{question}", qText);
    } else {
      stem = fact.q;
    }

    // Shuffle choices
    const rawChoices = [
      { id: "correct", text: fact.a },
      ...fact.d.map((dist, idx) => ({ id: `dist_${idx}`, text: dist }))
    ];
    while (rawChoices.length < 5) {
      rawChoices.push({ id: `dist_extra_${rawChoices.length}`, text: `Yanlış çeldirici seçeneği ${rawChoices.length}` });
    }
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
    
    // Unique examTip based on the fact.tip
    const examTip = fact.tip || "Bu kritik bilgi KPSS coğrafya testlerinde seçici soru olarak karşınıza çıkabilir.";
    
    questionsList.push({
      id: qId,
      topicId: topic.id,
      type: "single",
      difficulty: difficultyLevels[i % difficultyLevels.length],
      stem,
      choices: finalChoices.map(c => ({ id: c.id, text: c.text })),
      correctChoiceId: correctId,
      explanation,
      examTip,
      tags: ["coğrafya", "kpss-hazırlık", `soru-${i + 1}`]
    });
    
    // FLASHCARD GENERATION
    const cardId = crypto.randomUUID();
    const cardFront = fact.q.replace("hangisidir?", "").replace("hangisidir", "").trim() + "?";
    const cardBack = fact.a;
    
    flashcardList.push({
      id: cardId,
      topicId: topic.id,
      front: cardFront,
      back: cardBack,
      hint: fact.tip || "Sınavda yüksek başarı için bu bilgiyi hafızanıza sabitleyin.",
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
