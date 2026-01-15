const fs = require('fs');
const path = require('path');

function extractTitleFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // Find the first line that starts with #
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('#')) {
        // Remove the # symbols and trim whitespace
        return trimmed.replace(/^#+\s*/, '');
      }
    }

    // Fallback to filename if no heading found
    return path.basename(filePath, '.md');
  } catch (error) {
    console.warn(`Could not read ${filePath}, using filename as title`);
    return path.basename(filePath, '.md');
  }
}

function generateMeta() {
  const rulesDir = path.join(process.cwd(), 'pages', 'rules');
  const metaPath = path.join(rulesDir, '_meta.js');

  // Read all files and directories in the rules directory
  const items = fs.readdirSync(rulesDir);

  // Separate files and directories
  const mdFiles = items
    .filter(item => {
      const itemPath = path.join(rulesDir, item);
      return fs.statSync(itemPath).isFile() && item.endsWith('.md');
    })
    .map(file => file.replace('.md', ''));

  const directories = items
    .filter(item => {
      const itemPath = path.join(rulesDir, item);
      return fs.statSync(itemPath).isDirectory() && !item.startsWith('_');
    });

  // Build meta object
  const metaObj = {};

  // Add .md files
  mdFiles.forEach(file => {
    const filePath = path.join(rulesDir, `${file}.md`);
    const title = extractTitleFromFile(filePath);

    if (file === 'index') {
      metaObj[file] = title;
    } else {
      metaObj[file] = {
        title: title
      };
    }
  });

  // Add directories
  directories.forEach(dir => {
    const indexPath = path.join(rulesDir, dir, 'index.md');
    let title = dir.charAt(0).toUpperCase() + dir.slice(1); // Default to capitalized folder name

    // Try to extract title from index.md if it exists
    if (fs.existsSync(indexPath)) {
      title = extractTitleFromFile(indexPath);
    }

    metaObj[dir] = {
      title: title,
      href: `/rules/${dir}`

// Run if called directly
if (require.main === module) {
  generateMeta();
}

module.exports = generateMeta;