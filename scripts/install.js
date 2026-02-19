import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import process from 'process';

// Use environment variable or current working directory
const projectRoot = process.env.PROJECT_ROOT || process.cwd();

console.log('[v0] Starting fresh dependency installation...');
console.log(`[v0] Project root: ${projectRoot}`);

try {
  // Remove node_modules and lock files to start fresh
  const nodeModulesPath = path.join(projectRoot, 'node_modules');
  const pnpmLockPath = path.join(projectRoot, 'pnpm-lock.yaml');
  const npmLockPath = path.join(projectRoot, 'package-lock.json');
  
  if (fs.existsSync(nodeModulesPath)) {
    console.log('[v0] Removing corrupted node_modules directory...');
    fs.rmSync(nodeModulesPath, { recursive: true, force: true });
    console.log('[v0] Removed node_modules');
  }
  
  if (fs.existsSync(pnpmLockPath)) {
    console.log('[v0] Removing pnpm-lock.yaml...');
    fs.unlinkSync(pnpmLockPath);
    console.log('[v0] Removed pnpm-lock.yaml');
  }
  
  if (fs.existsSync(npmLockPath)) {
    console.log('[v0] Removing package-lock.json...');
    fs.unlinkSync(npmLockPath);
    console.log('[v0] Removed package-lock.json');
  }
  
  // Install using npm
  console.log('[v0] Installing dependencies with npm...');
  execSync('npm install --legacy-peer-deps', {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: '/bin/bash',
    env: { ...process.env }
  });
  
  console.log('[v0] ✓ Dependencies installed successfully!');
  console.log('[v0] Installation complete.');
  
} catch (error) {
  console.error('[v0] Installation failed:', error.message);
  process.exit(1);
}
