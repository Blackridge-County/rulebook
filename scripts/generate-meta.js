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

  // Read all files in the rules directory
  const files = fs.readdirSync(rulesDir);

  // Filter for .md files and remove extensions
  const mdFiles = files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));

  // Build meta object
  const metaObj = {};

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

  // Generate the _meta.js content
  const metaContent = `export default ${JSON.stringify(metaObj, null, 2).replace(/"([^"\-]+)":/g, '$1:')};
`;

  // Write the file
  fs.writeFileSync(metaPath, metaContent);
  console.log('Generated _meta.js for rules directory');
}

// Run if called directly
if (require.main === module) {
  generateMeta();
}

module.exports = generateMeta;