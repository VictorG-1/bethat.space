import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(
  process.env.USERPROFILE || "",
  "Downloads",
  "Website Images (1)",
  "Website Images",
);
const destRoot = path.join(root, "src", "assets", "projects");

const FOLDER_MAP = {
  "01-The Times Group": "times-group",
  "02-Nirmal Industries Controls": "nirmal",
  "03-ENIL(Radio Mirchi)": "mirchi",
  "04-Tablespace Suites": "tablespace",
  "05-Suttati Enterprises": "suttatti",
  "06-Times Network": "times-network",
  "07-Jaikumar Constructions (Parksyde)": "parksyde",
  "08-Worldwide Media": "worldwide-media",
  "09-Galeries Lafayette (Aditya Birla Fashion & Retail Ltd)": "abfrl",
  "10-Miss India Organization": "miss-india",
  "11-Chettinad Products & Services (CTO)": "chettinad-cto",
  "12-Chettinad Group Common Areas": "chettinad-common",
  "13- Chettinad Group 11-12 Floors": "chettinad-cco-11-12",
  "14-Chettinad Family Office": "chettinad-cco-13",
  "15-Howden Insurance": "howden",
  "16-Unilever Fragrance House": "unilever-fragrance",
  "17-Raheja Universal": "raheja",
  "18-Hindustan Unilever": "hul",
  "19-Times Music": "times-music",
  "20-UBS": "ubs",
  "21-BeThatSpace Office": "bethat-space",
  "22-Confidential (Uni Deritrend)": "uni-deritrend",
  "23-Confidential (Vertiv)": "vertiv",
  "24-Confidential (Oriental)": "oriental",
  "25-Confidential (Valmet)": "valmet",
};

function normalizeKey(name) {
  return path
    .parse(name)
    .name.replace(/-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .replace(/area$/, "area");
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => /\.(png|jpe?g|webp)$/i.test(name) && !/^Thumbs\.db$/i.test(name))
    .map((name) => path.join(dir, name));
}

async function writeJpeg(sourcePath, destPath) {
  await sharp(sourcePath).rotate().jpeg({ quality: 88, mozjpeg: true }).toFile(destPath);
}

const summary = { updated: 0, created: 0, unmatchedSource: [], missingDestFolder: [] };

for (const [sourceFolder, destFolder] of Object.entries(FOLDER_MAP)) {
  const sourceDir = path.join(sourceRoot, sourceFolder);
  const destDir = path.join(destRoot, destFolder);
  if (!fs.existsSync(sourceDir)) {
    summary.missingDestFolder.push(`missing source: ${sourceFolder}`);
    continue;
  }
  fs.mkdirSync(destDir, { recursive: true });

  const destFiles = listImages(destDir);
  const destByKey = new Map();
  for (const file of destFiles) {
    destByKey.set(normalizeKey(path.basename(file)), file);
  }

  const usedDest = new Set();
  for (const sourceFile of listImages(sourceDir)) {
    const key = normalizeKey(path.basename(sourceFile));
    const existing = destByKey.get(key);
    if (existing) {
      const tmp = `${existing}.tmp.jpg`;
      await writeJpeg(sourceFile, tmp);
      fs.renameSync(tmp, existing);
      usedDest.add(existing);
      summary.updated += 1;
      console.log(`updated ${destFolder}/${path.basename(existing)}`);
      continue;
    }

    const base = path
      .parse(sourceFile)
      .name.replace(/\s+/g, "_")
      .replace(/_+/g, "_")
      .replace(/^_|_$/g, "");
    const destName = `${base}-${randomUUID()}.jpg`;
    const destPath = path.join(destDir, destName);
    await writeJpeg(sourceFile, destPath);
    summary.created += 1;
    console.log(`created ${destFolder}/${destName}`);
  }
}

console.log(JSON.stringify(summary, null, 2));
