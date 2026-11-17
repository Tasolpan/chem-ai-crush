import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';

const html=fs.readFileSync('teacher.html','utf8');
const js=fs.readFileSync('teacher.js','utf8');
const home=fs.readFileSync('index.html','utf8');
const lab=fs.readFileSync('chem_ai_crush_3d_lab.html','utf8');
assert.doesNotThrow(()=>new vm.Script(js,{filename:'teacher.js'}),'Teacher Edition script has valid syntax');
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]));
const referenced=[...new Set([...js.matchAll(/\$\('([^']+)'\)/g)].map(x=>x[1]))];
const missing=referenced.filter(x=>!ids.has(x));
assert.deepEqual(missing,[],'Missing HTML IDs: '+missing.join(', '));
for(const id of ['authView','appView','studentOpen','templateList','editorBody','publishAssignment','resultList','labFrame'])assert.ok(ids.has(id),'Required element missing: '+id);
for(const name of ['teacher_resources','teacher_assignments','assignment_submissions','activate_teacher_workspace','request_class_join'])assert.ok(js.includes(name),'Missing data operation: '+name);
assert.ok(home.includes('href="./teacher.html"'),'Home page does not link Teacher Edition');
assert.ok(html.includes('chem_ai_crush_3d_lab.html'),'3D lab not linked');
assert.ok(lab.includes('OrbitControls'),'3D lab missing 360 controls');
assert.ok(js.includes('body:makeBody')||js.includes('makeBody(s,lang,kind)'),'Sample packs missing');
assert.ok(!/sb_secret_|service_role|SUPABASE_SERVICE_ROLE/.test(js),'Client leaks secret credentials');
assert.ok(html.includes('⚠ Пилоттық нұсқа'),'Privacy pilot warning missing');

const offline=fs.readFileSync('teacher-offline.html','utf8');
assert.ok(offline.includes('<html lang="kk">'),'Offline-safe Teacher Studio page missing');
assert.ok(offline.includes('id="cards"') && offline.includes('id="lessonBody"') && offline.includes('id="download"'),'Offline library or Word editor missing');
assert.ok(offline.includes('chem_ai_crush_3d_lab.html'),'Offline fallback does not link existing 3D laboratory');
const match=offline.match(/<script>([\\s\\S]*?)<\\/script>/);
assert.ok(match,'Offline JavaScript missing');
assert.doesNotThrow(()=>new vm.Script(match[1],{filename:'teacher-offline.html'}),'Offline studio script syntax invalid');
assert.ok(home.includes('href="./teacher-offline.html"'),'Main page missing fallback link');
assert.ok(html.includes('href="./teacher-offline.html"'),'Teacher Edition missing fallback link');
console.log('Offline Teacher Studio checks passed.');

console.log('Teacher Edition static smoke checks passed ('+referenced.length+' DOM references).');
