import fs from 'fs';
import path from 'path';

const topicsDir = path.join(process.cwd(), 'src/data/kpss/topics');
const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

// Map of topic slugs to their relevant Unsplash image IDs
const imageMap = {
  'turkiyenin-cografi-konumu': [
    '1524661135-423995f22d0b', // map/globe
    '1585828114-1e0c812d08a0', 
    '1451187580459-43490279c0fa'
  ],
  'yer-sekilleri': [
    '1464822759023-fed622ff2c3b', // mountains
    '1454496564633-069d28270e38',
    '1469334023215-bf37ae615128'
  ],
  'iklim-ve-bitki-ortusu': [
    '1445227162968-301c22629dd0', // forest/climate
    '1425904886638-372551a0d8e8',
    '1468276311594-df7cb65d8df6'
  ],
  'nufus-ve-yerlesme': [
    '1480714378408-67cf7afebc89', // city/people
    '1517604561066-5b23d92f592d',
    '1449844908441-8829872d2607'
  ],
  'tarim-ve-hayvancilik': [
    '1500382017468-9049fed747ef', // farm/agriculture
    '1592982537444-24534ef06b23',
    '1473448912268-2022ce9509d8'
  ],
  'madenler-ve-enerji': [
    '1466611653911-95081532e5b7', // energy/wind/solar
    '1509391366360-2e959784a276',
    '1581093458791-9f3c3900df4b'
  ],
  'sanayi-ve-ticaret': [
    '1581093450021-4a7360e9a6b5', // industry/factory
    '1536895058-29bcbb3e66bb',
    '1496247749665-49cf5b1022e9'
  ],
  'ulasim-ve-turizm': [
    '1436491865332-7a61a309e1e3', // road/travel
    '1469854523086-cc02fe5d8800',
    '1476514525535-07fb3b4ae5f1'
  ],
  'bolgeler-cografyasi': [
    '1501785888041-af3ef285b470', // landscape
    '1472214103451-9374bd1c798e',
    '1433838552652-f9a46b332c40'
  ]
};

// Generic beautiful landscapes fallback
const genericImages = [
  '1472214103451-9374bd1c798e',
  '1469334023215-bf37ae615128',
  '1445227162968-301c22629dd0'
];

for (const file of files) {
  const filePath = path.join(topicsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const slugMatch = content.match(/slug:\s*"(.*?)"/);
  if (!slugMatch) continue;
  
  const slug = slugMatch[1];
  const possibleImages = imageMap[slug] || genericImages;

  // Replace all instances of imageUrl: "..." or imageUrl: undefined
  // We want to ensure we don't just replace the generic one, but all of them with varied images from the array.
  
  let imageIndex = 0;
  content = content.replace(/imageUrl:\s*(?:".*?"|undefined)/g, () => {
    const selectedId = possibleImages[imageIndex % possibleImages.length];
    imageIndex++;
    return `imageUrl: "https://images.unsplash.com/photo-${selectedId}?auto=format&fit=crop&q=80&w=1000"`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated images in ${file}`);
}
