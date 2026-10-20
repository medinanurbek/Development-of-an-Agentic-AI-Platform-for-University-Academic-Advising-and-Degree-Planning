'use strict';
const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const required = ['README.md', 'CONTRIBUTING.md', '.gitignore', 'config/.env.example', 'package.json', 'package-lock.json', 'apps/web-prototype/index.html', 'docs/README.md', 'docs/requirements-register.json', 'docs/adr/0001-modular-backend.md'];
for (const p of required) assert(fs.existsSync(path.join(root, p)), 'Missing ' + p);
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => ['.git','node_modules','artifacts'].includes(e.name) ? [] : e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]);
let localLinks = 0;
for (const file of walk(root).filter(p=>p.endsWith('.md'))) {
  const content = fs.readFileSync(file, 'utf8');
  assert(!/docs\.google\.com\/spreadsheets\//.test(content), 'Raw response-sheet link in ' + path.relative(root,file));
  for (const m of content.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    const target=m[1].replace(/^<|>$/g,'').split('#')[0];
    if (!target || /^[a-z]+:/i.test(target)) continue;
    const resolved=path.resolve(path.dirname(file),decodeURIComponent(target));
    assert(resolved.startsWith(root+path.sep),'Link escapes repository: '+target);
    assert(fs.existsSync(resolved),'Broken link in '+path.relative(root,file)+': '+target); localLinks++;
  }
}
const reg=JSON.parse(fs.readFileSync(path.join(root,'docs/requirements-register.json'),'utf8'));
assert.equal(reg.requirements.length,34);
assert.equal(new Set(reg.requirements.map(r=>r.id)).size,34);
assert.equal(reg.requirements.filter(r=>r.priority==='Must').length,31);
for(const r of reg.requirements) { assert(r.acceptance && r.test_id && r.dataset,'Incomplete '+r.id); assert.equal(r.status,'NOT_VERIFIED'); }
for(const n of ['01_system_context','02_use_cases','03_components_draft']) for(const [dir,ext] of [['src','svg'],['exports','png']]) assert(fs.existsSync(path.join(root,'diagrams',dir,n+'.'+ext)));
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'tests/fixtures/peer-advisor-cases.json'),'utf8')).cases.length,5);
console.log(JSON.stringify({status:'PASS',local_links:localLinks,requirements:34,must:31,diagrams:3,peer_reference_cases:5}));
