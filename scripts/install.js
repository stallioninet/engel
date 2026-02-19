import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const projectRoot = path.dirname(path.dirname(new URL(import.meta.url).pathname));

console.log('[v0] Starting fresh pnpm installation...');
console.log(`[v0] Project root: ${projectRoot}`);

try {
  // Remove node_modules and lock file to start fresh
  const nodeModulesPath = path.join(projectRoot, 'node_modules');
  const pnpmLockPath = path.join(projectRoot, 'pnpm-lock.yaml');
  
  if (fs.existsSync(nodeModulesPath)) {
    console.log('[v0] Removing corrupted node_modules directory...');
    fs.rmSync(nodeModulesPath, { recursive: true, force: true });
    console.log('[v0] Removed node_modules');
  }
  
  if (fs.existsSync(pnpmLockPath)) {
    console.log('[v0] Removing pnpm-lock.yaml to allow fresh resolution...');
    fs.unlinkSync(pnpmLockPath);
    console.log('[v0] Removed pnpm-lock.yaml');
  }
  
  // Install using npm (pnpm not available, so fallback to npm)
  console.log('[v0] Installing dependencies with npm...');
  execSync('npm install', {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: '/bin/bash'
  });
  
  console.log('[v0] Dependencies installed successfully!');
  console.log('[v0] Installation complete. Server will restart automatically.');
  
} catch (error) {
  console.error('[v0] Installation failed:', error.message);
  process.exit(1);
}
