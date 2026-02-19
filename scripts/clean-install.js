import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('[v0] Starting clean installation...');
console.log(`[v0] Project root: ${projectRoot}`);

try {
  // Check if package.json exists
  const packageJsonPath = path.join(projectRoot, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error('package.json not found in project root');
  }

  // Remove node_modules
  const nodeModulesPath = path.join(projectRoot, 'node_modules');
  if (fs.existsSync(nodeModulesPath)) {
    console.log('[v0] Removing node_modules...');
    fs.rmSync(nodeModulesPath, { recursive: true, force: true });
  }

  // Remove all lock files
  const lockFiles = ['pnpm-lock.yaml', 'package-lock.json', 'yarn.lock'];
  for (const lockFile of lockFiles) {
    const lockPath = path.join(projectRoot, lockFile);
    if (fs.existsSync(lockPath)) {
      console.log(`[v0] Removing ${lockFile}...`);
      fs.unlinkSync(lockPath);
    }
  }

  // Clean npm cache
  console.log('[v0] Cleaning npm cache...');
  try {
    execSync('npm cache clean --force', {
      stdio: 'pipe'
    });
  } catch (e) {
    console.log('[v0] npm cache clean warning:', e.message);
  }

  // Install fresh
  console.log('[v0] Installing dependencies...');
  execSync('npm install --legacy-peer-deps', {
    cwd: projectRoot,
    stdio: 'inherit'
  });

  console.log('[v0] ✓ Clean installation completed successfully!');

} catch (error) {
  console.error('[v0] Installation failed:', error.message);
  process.exit(1);
}
