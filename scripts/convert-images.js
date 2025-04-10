// scripts/convert-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const directory = "./public";

const convertToAvif = async () => {
  const files = fs.readdirSync(directory);

  // Get a Set of all file base names (without extension)
  const baseNames = new Set(
    files.map((file) => path.basename(file, path.extname(file)))
  );

  for (const base of baseNames) {
    const avifFile = `${base}.jpg`;
    const avifPath = path.join(directory, avifFile);

    if (fs.existsSync(avifPath)) {
      // Delete all other formats if AVIF exists
      for (const ext of [".jpg", ".jpeg", ".png", ".webp"]) {
        const altPath = path.join(directory, `${base}${ext}`);
        if (fs.existsSync(altPath)) {
          fs.unlinkSync(altPath);
          console.log(`Deleted extra format: ${base}${ext}`);
        }
      }
      console.log(`Skipped (already exists): ${avifFile}`);
    } else {
      // Find and convert the first available image format
      for (const ext of [".jpg", ".jpeg", ".png"]) {
        const inputPath = path.join(directory, `${base}${ext}`);
        if (fs.existsSync(inputPath)) {
          await sharp(inputPath)
            .jpg({ quality: 50 })
            .toFile(avifPath);
          fs.unlinkSync(inputPath);
          console.log(`Converted and deleted: ${base}${ext} → ${base}.jpg`);
          break; // Once converted, don't keep checking
        }
      }
    }
  }
};

convertToAvif();