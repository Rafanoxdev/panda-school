#!/usr/bin/env node
// Troca o nome do projeto em todos os arquivos de texto.
// Uso: node scripts/rename.mjs "Coruja Quest" [--autor "Seu Nome"]
// Pode ser executado várias vezes: ele lê o nome atual em project.config.json.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SELF = fileURLToPath(import.meta.url);
const ROOT = resolve(SELF, "..", "..");
const CONFIG = join(ROOT, "project.config.json");
const IGNORE_DIRS = new Set([".git", "node_modules"]);
const TEXT_EXT = new Set([".md", ".json", ".html", ".css", ".js", ".mjs", ".yml", ".yaml", ".webmanifest", ".txt", ""]);

const args = process.argv.slice(2);
const autorIdx = args.indexOf("--autor");
const author = autorIdx >= 0 ? args.splice(autorIdx, 2)[1] : null;
const newName = args[0];

if (!newName) {
  console.error('Uso: node scripts/rename.mjs "Novo Nome" [--autor "Seu Nome"]');
  process.exit(1);
}

const slugify = (s) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
   .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const old = JSON.parse(readFileSync(CONFIG, "utf8"));
const next = { name: newName, slug: slugify(newName), author: author ?? old.author };

const pairs = [
  [old.slug, next.slug],
  [old.name, next.name],
  [old.author, next.author],
].filter(([a, b]) => a && a !== b);

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (IGNORE_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walk(full);
    else yield full;
  }
}

let changed = 0;
for (const file of walk(ROOT)) {
  if (resolve(file) === SELF || resolve(file) === resolve(CONFIG)) continue;
  if (!TEXT_EXT.has(extname(file))) continue;
  const before = readFileSync(file, "utf8");
  let after = before;
  for (const [from, to] of pairs) after = after.split(from).join(to);
  if (after !== before) {
    writeFileSync(file, after);
    changed++;
  }
}
writeFileSync(CONFIG, JSON.stringify(next, null, 2) + "\n");
console.log(`Pronto: "${next.name}" (${next.slug}). ${changed} arquivo(s) atualizado(s).`);
