import fs from 'fs';
import path from 'path';

const topicsDir = path.join(process.cwd(), 'src/data/kpss/topics');
const publicTopicsDir = path.join(process.cwd(), 'public/images/topics');

const topicFiles = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));
const imageFiles = fs.readdirSync(publicTopicsDir).filter(f => f.endsWith('.png'));

const imageMap = {
  'turkiyenin-cografi-konumu': imageFiles.find(f => f.startsWith('cografi_konum_')),
  'yer-sekilleri': imageFiles.find(f => f.startsWith('yer_sekilleri_')),
  'iklim-ve-bitki-ortusu': imageFiles.find(f => f.startsWith('iklim_bitki_')),
  'nufus-ve-yerlesme': imageFiles.find(f => f.startsWith('nufus_yerlesme_')),
  'tarim-ve-hayvancilik': imageFiles.find(f => f.startsWith('tarim_hayvancilik_')),
  'madenler-ve-enerji': imageFiles.find(f => f.startsWith('maden_enerji_')),
  'sanayi-ve-ticaret': imageFiles.find(f => f.startsWith('sanayi_ticaret_')),
  'ulasim-ve-turizm': imageFiles.find(f => f.startsWith('ulasim_turizm_')),
  'bolgeler-cografyasi': imageFiles.find(f => f.startsWith('bolgeler_cografyasi_'))
};

for (const file of topicFiles) {
  const filePath = path.join(topicsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const slugMatch = content.match(/slug:\s*"(.*?)"/);
  if (!slugMatch) continue;
  
  const slug = slugMatch[1];
  const imageName = imageMap[slug];
  
  if (imageName) {
    // Replace all imageUrls with the local one
    content = content.replace(/imageUrl:\s*"(.*?)"/g, `imageUrl: "/images/topics/${imageName}"`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated images for ${slug} to /images/topics/${imageName}`);
  } else {
    console.log(`No image found for ${slug}`);
  }
}
