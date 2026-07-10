import fs from 'fs';
import path from 'path';

const questionsDir = path.join(process.cwd(), 'src/data/kpss/questions');
const files = fs.readdirSync(questionsDir).filter(f => f.endsWith('.ts'));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

for (const file of files) {
  const filePath = path.join(questionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // We will use a regex to find each question object.
  // This is a bit manual but since the format is strictly generated, it works perfectly.
  const questionRegex = /choices:\s*\[\s*\{\s*id:\s*"A",\s*text:\s*"(.*?)"\s*\},(?:.|\n)*?correctChoiceId:\s*"([A-E])",\s*explanation:\s*"(.*?)"/g;

  // Since regex replacement with complex internal logic can be tricky, let's split the file by questions.
  // Actually, let's replace block by block
  let match;
  const blocksToReplace = [];

  const blockRegex = /choices:\s*\[\s*\{\s*id:\s*"A"[\s\S]*?explanation:\s*".*?"/g;

  content = content.replace(blockRegex, (match) => {
    // Extract choice texts
    const aMatch = match.match(/id:\s*"A",\s*text:\s*"(.*?)"/);
    const bMatch = match.match(/id:\s*"B",\s*text:\s*"(.*?)"/);
    const cMatch = match.match(/id:\s*"C",\s*text:\s*"(.*?)"/);
    const dMatch = match.match(/id:\s*"D",\s*text:\s*"(.*?)"/);
    const eMatch = match.match(/id:\s*"E",\s*text:\s*"(.*?)"/);
    
    if (!aMatch || !bMatch || !cMatch || !dMatch || !eMatch) return match;

    const originalCorrectText = aMatch[1]; // We know A was always the correct one in our generation!
    
    // Wait, what if it was already shuffled? Let's check correctChoiceId.
    const correctIdMatch = match.match(/correctChoiceId:\s*"([A-E])"/);
    if (!correctIdMatch) return match;
    const currentCorrectId = correctIdMatch[1];
    
    let actualCorrectText = "";
    if (currentCorrectId === "A") actualCorrectText = aMatch[1];
    if (currentCorrectId === "B") actualCorrectText = bMatch[1];
    if (currentCorrectId === "C") actualCorrectText = cMatch[1];
    if (currentCorrectId === "D") actualCorrectText = dMatch[1];
    if (currentCorrectId === "E") actualCorrectText = eMatch[1];

    const texts = [aMatch[1], bMatch[1], cMatch[1], dMatch[1], eMatch[1]];
    shuffleArray(texts);

    const newCorrectIndex = texts.indexOf(actualCorrectText);
    const newCorrectId = ["A", "B", "C", "D", "E"][newCorrectIndex];

    // Reconstruct the block
    let newBlock = match
      .replace(/id:\s*"A",\s*text:\s*".*?"/, `id: "A", text: "${texts[0]}"`)
      .replace(/id:\s*"B",\s*text:\s*".*?"/, `id: "B", text: "${texts[1]}"`)
      .replace(/id:\s*"C",\s*text:\s*".*?"/, `id: "C", text: "${texts[2]}"`)
      .replace(/id:\s*"D",\s*text:\s*".*?"/, `id: "D", text: "${texts[3]}"`)
      .replace(/id:\s*"E",\s*text:\s*".*?"/, `id: "E", text: "${texts[4]}"`)
      .replace(/correctChoiceId:\s*"[A-E]"/, `correctChoiceId: "${newCorrectId}"`);

    // Fix explanation "Doğru cevap A şıkkıdır" -> "Doğru cevap X şıkkıdır"
    newBlock = newBlock.replace(/explanation:\s*"Doğru cevap [A-E] şıkkıdır/, `explanation: "Doğru cevap ${newCorrectId} şıkkıdır`);

    return newBlock;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Shuffled choices in ${file}`);
}
