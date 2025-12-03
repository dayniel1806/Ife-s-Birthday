#!/usr/bin/env node
/**
 * This script creates a stub for Next.js navigation module to allow
 * @vercel/analytics to build correctly with rolldown-vite without Next.js.
 * 
 * This is needed because rolldown-vite doesn't properly handle optional
 * peer dependencies like the Next.js modules that @vercel/analytics imports.
 */

import { mkdir, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const nextDir = join(rootDir, 'node_modules', 'next');

const navigationStub = `// Stub for Next.js navigation to allow @vercel/analytics to build
export const useParams = () => ({});
export const usePathname = () => '';
export const useSearchParams = () => new URLSearchParams();
`;

const packageJson = `{
  "name": "next",
  "version": "0.0.0-stub",
  "description": "Stub package for Next.js navigation (for rolldown-vite compatibility)",
  "main": "navigation.js",
  "type": "module"
}
`;

async function setupStub() {
  try {
    await mkdir(nextDir, { recursive: true });
    await writeFile(join(nextDir, 'navigation.js'), navigationStub);
    await writeFile(join(nextDir, 'package.json'), packageJson);
    console.log('✓ Created Next.js navigation stub for @vercel/analytics compatibility');
  } catch (error) {
    console.error('Error creating stub:', error);
    process.exit(1);
  }
}

setupStub();
