import { execSync } from 'child_process';
import { rmSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();

console.log('[v0] Starting dependency reinstall...');

try {
  // Remove node_modules
  console.log('[v0] Removing node_modules...');
  rmSync(join(projectRoot, 'node_modules'), { recursive: true, force: true });
  
  // Remove package-lock.json
  console.log('[v0] Removing package-lock.json...');
  rmSync(join(projectRoot, 'package-lock.json'), { force: true });
  
  // Reinstall dependencies
  console.log('[v0] Installing dependencies with npm...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('[v0] Dependencies reinstalled successfully!');
} catch (error) {
  console.error('[v0] Error during reinstall:', error.message);
  process.exit(1);
}
