const fs = require('fs');
const path = require('path');

const fixString = (filePath) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\\n$/, '');
    fs.writeFileSync(filePath, content);
  }
};

const componentsDir = path.join(process.cwd(), 'apps/web/src/components/landing');
const files = fs.readdirSync(componentsDir);
files.forEach(file => {
  const fp = path.join(componentsDir, file);
  fixString(fp);
});

fixString(path.join(process.cwd(), 'app/page.tsx'));
fixString(path.join(process.cwd(), 'apps/web/src/app/(public)/page.tsx'));
