'use strict';
/* Chem AI Crush Teacher Edition 1.0 — pilot workspace; no service keys in browser. */
(() => {
const URL='https://skmdphfeyrqdmjlzyspe.supabase.co';
const KEY='sb_publishable_FTMwRrptfPTP7qEwCTZ3Rw_MGaZhox_';
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tr={
back:['← Басты сайт','← Главная'],signOut:['Шығу','Выход'],
pilot:['⚠ Пилоттық нұсқа: дерекқор Қазақстаннан тыс аймақта. Қазақстанда сақтау және балалардың деректерін қорғау талаптары расталмайынша шынайы оқушы деректерін енгізбеңіз. Тек сынақ аккаунттары мен ойдан шығарылған деректерді қолданыңыз.','⚠ Пилот: база данных расположена за пределами Казахстана. Не вносите реальные данные учащихся до подтверждения соответствия требованиям локализации и защиты данных. Используйте только тестовые аккаунты и вымышленные данные.'],
tagline:['Сабақ дайындаңыз • Өзгертіңіз • Сыныпқа беріңіз • Нәтижесін көріңіз','Готовьте уроки • Редактируйте • Назначайте • Оценивайте'],
authTitle:['Мұғалім кабинеті','Кабинет учителя'],authDesc:['Поштаңызды растағаннан кейін жеке кабинет ашылады. Мұғалім рөлі өздігінен көрсетіледі, бұл мектептің ресми растауы емес.','После подтверждения почты можно открыть кабинет. Самостоятельный выбор роли учителя не является подтверждением трудоустройства в школе.'],
name:['Аты-жөні','Имя и фамилия'],email:['Электрондық пошта','Электронная почта'],password:['Құпиясөз (кемінде 8 таңба)','Пароль (не менее 8 символов)'],login:['Кіру','Войти'],register:['Мұғалім ретінде тіркелу','Регистрация учителя'],resetPassword:['Құпиясөзді қалпына келтіру','Восстановить пароль'],authPrompt:['Тексеру үшін тест аккаунтыңызды пайдаланыңыз.','Для проверки используйте тестовый аккаунт.'],teacherActivateTitle:['Мұғалім кеңістігін іске қосу','Активация кабинета учителя'],teacherActivateText:['Электрондық пошта расталғаннан кейін мұғалім кабинетін белсендіруге болады. Бұл ресми мұғалім мәртебесін растамайды.','Активируйте кабинет после подтверждения email. Это не подтверждает официальный статус преподавателя.'],activate:['Мұғалім кабинетін белсендіру','Активировать кабинет учителя'],openStudent:['Оқушы кабинетін ашу','Открыть кабинет ученика'],
dash:['🏠 Бақылау тақтасы','🏠 Панель'],lib:['📚 Сабақ жинақтары','📚 Сборники уроков'],edit:['✍️ ҚМЖ редакторы','✍️ Редактор КСП'],assign:['📨 Тапсырма беру','📨 Задать работу'],results:['📊 Нәтижелер','📊 Результаты'],lab:['🧪 3D зертхана','🧪 3D лаборатория'],student:['🎓 Оқушы тапсырмалары','🎓 Задания ученика'],
classes:['Сынып','Классы'],resources:['Жеке материал','Мои материалы'],assignments:['Берілген тапсырма','Назначенные задания'],welcome:['Мұғалім кеңістігі','Пространство учителя'],welcomeText:['7–8-сынып материалдарын өңдеп Word форматына жүктеңіз. Сынып құрсаңыз, тапсырма беруге болады.','Редактируйте материалы 7–8 классов и скачивайте в Word. Создавайте классы и назначайте задания.'],
startLibrary:['Сабақ жинақтарын ашу','Открыть уроки'],startEditor:['Жаңа ҚМЖ жасау','Создать КСП'],classesHeader:['Менің сыныптарым','Мои классы'],newClassName:['Сынып атауы','Название класса'],createClass:['＋ Сынып құру','＋ Создать класс'],pendingHeader:['Оқушылардың қосылу өтініштері','Заявки учеников'],
libraryTitle:['7–8-сынып үлгілік сабақ жинақтары','Образцы уроков для 7–8 классов'],libraryDesc:['Әр үлгіде 5E құрылымы, тапсырмалар мен бағалау бар. Ресми оқу мақсатының кодын мұғалім өз КТП-сына сәйкестендіреді.','Каждый образец содержит 5E, задания и оценивание. Код официальной учебной цели учитель сверяет со своим КТП.'],
grade:['Сынып','Класс'],contentType:['Материал түрі','Тип материала'],all:['Барлығы','Все'],worksheet:['Жұмыс парағы','Рабочий лист'],quiz:['Тест','Тест'],other:['Басқа','Другое'],savedTitle:['Мен сақтаған материалдар','Мои сохранённые материалы'],editorTitle:['ҚМЖ және тапсырма редакторы','Редактор КСП и заданий'],editorIntro:['Мәтінді өзгертіңіз, жеке кабинетке сақтаңыз немесе Word (.doc) файлы ретінде жүктеңіз.','Изменяйте текст, сохраняйте в личном кабинете или скачивайте в Word (.doc).'],
lang:['Тіл','Язык'],title:['Тақырып','Название'],sectionTopic:['Бөлім / тақырып','Раздел / тема'],objectives:['Оқу мақсаты (КТП бойынша)','Цель обучения (по КТП)'],content:['Сабақ барысы / тапсырма мәтіні','Ход урока / текст задания'],save:['💾 Жеке кабинетке сақтау','💾 Сохранить в кабинете'],download:['⬇ Word (.doc) жүктеу','⬇ Скачать Word (.doc)'],import:['⬆ Файл импорттау (.txt/.html/.json)','⬆ Импорт (.txt/.html/.json)'],clear:['Тазалау','Очистить'],
assignTitle:['Сыныпқа тапсырма беру','Назначить задание классу'],selectClass:['Сыныпты таңдаңыз','Выберите класс'],due:['Орындау мерзімі','Срок сдачи'],instructions:['Оқушы орындайтын тапсырма','Задание для ученика'],publish:['📨 Тапсырманы жариялау','📨 Опубликовать задание'],publishedList:['Мен жариялаған тапсырмалар','Мои опубликованные задания'],resultsTitle:['Оқушы жауаптары және бағалау','Ответы учеников и оценивание'],resultsDesc:['Оқушы берген жауапты қарап, 0–10 ұпай мен кері байланыс енгізіңіз.','Проверяйте ответы, ставьте оценку от 0 до 10 и оставляйте комментарии.'],
labTitle:['CHEM LAB 3D — виртуалды зертхана','CHEM LAB 3D — виртуальная лаборатория'],labIntro:['360° айналатын зертхана, реактивтер мен молекула құрастыру. Интернет қажет.','Лаборатория 360°, реагенты и конструктор молекул. Нужен интернет.'],openLab:['Зертхананы бөлек ашу ↗','Открыть лабораторию отдельно ↗'],studentTitle:['Оқушы кабинеті','Кабинет ученика'],studentDesc:['Сынып кодымен өтініш жіберіңіз. Мұғалім бекіткеннен кейін тапсырмалар шығады.','Подайте заявку по коду класса. Задания появятся после одобрения учителем.'],joinCode:['Сынып коды','Код класса'],join:['Сыныпқа өтініш беру','Подать заявку'],myTasks:['Менің тапсырмаларым','Мои задания']
};
let lang=localStorage.getItem('chem_teacher_language')==='ru'?'ru':'kk';
const T=(kk,ru)=>lang==='kk'?kk:ru;
const trKey=k=>tr[k]?(lang==='kk'?tr[k][0]:tr[k][1]):k;
function msg(id,str,err=false){const el=$(id);if(!el)return;el.hidden=false;el.textContent=str;el.classList.toggle('error',err);el.classList.toggle('success',!err);}
function fail(id,error){msg(id,T('Қате: ','Ошибка: ')+(error?.message||String(error)),true)}
if(!window.supabase?.createClient){msg('authMsg',T('Кіру кітапханасы жүктелмеді. Интернетті тексеріңіз.','Не загрузилась библиотека входа. Проверьте интернет.'),true);return;}
const db=window.supabase.createClient(URL,KEY);
let user=null,profile=null,classes=[],resources=[],assignments=[],submissions=[],savedById={},editorId=null;
function localize(){
 document.documentElement.lang=lang;document.querySelectorAll('[data-t]').forEach(el=>{el.textContent=trKey(el.dataset.t)});
 $('language').textContent=lang==='kk'?'РУС':'ҚАЗ';
 $('editorLang').value=lang;
 renderLibrary();renderSaved();renderClasses();renderAssignments();renderResults();
}
$('language').onclick=()=>{lang=lang==='kk'?'ru':'kk';localStorage.setItem('chem_teacher_language',lang);localize();};
function go(pane){
 document.querySelectorAll('.pane').forEach(el=>el.classList.toggle('active',el.id==='pane-'+pane));
 document.querySelectorAll('#mainNav button[data-pane]').forEach(b=>b.classList.toggle('active',b.dataset.pane===pane));
 if(pane==='lab'&&!$('labFrame').src){$('labFrame').src=$('labFrame').dataset.src}
 if(pane==='student')loadStudentTasks();
 if(pane==='results')loadResults();
 if(pane==='library')loadResources();
 if(pane==='dashboard')loadClasses();
}
document.querySelectorAll('#mainNav [data-pane]').forEach(b=>b.onclick=()=>go(b.dataset.pane));
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
$('signOut').onclick=async()=>{await db.auth.signOut();user=null;profile=null;showGuest();};
async function checkAuth(){
 try{const {data,error}=await db.auth.getUser();if(error)throw error;
 user=data.user;
 if(!user){showGuest();return}
 const r=await db.from('profiles').select('id,role,full_name').eq('id',user.id).maybeSingle();
 if(r.error)throw r.error;profile=r.data;
 if(profile?.role==='teacher'){showApp('teacher');await loadAll();}
 else if(profile?.role==='student'){showGuest(true);}
 else{showGuest();msg('authMsg',T('Профиль табылмады, кірген аккаунтты тексеріңіз.','Профиль не найден. Проверьте аккаунт.'),true)}
 }catch(err){showGuest();fail('authMsg',err)}
}
function showGuest(logged=false){
 $('authView').hidden=false;$('appView').hidden=true;$('signOut').hidden=!logged;$('activateWrap').hidden=!logged;
 $('userTag').textContent=logged&&user?.email?user.email:'';
 if(logged)msg('authMsg',T('Пошта расталған болса, мұғалім кабинетін белсендіруге немесе оқушы ретінде кіруге болады.','Подтвердите почту и активируйте кабинет учителя или войдите как ученик.'))
}
function showApp(role){
 $('authView').hidden=true;$('appView').hidden=false;$('signOut').hidden=false;
 $('userTag').textContent=profile?.full_name||user?.email||'';
 document.querySelectorAll('#mainNav [data-pane]').forEach(b=>{b.hidden=role==='teacher'?b.dataset.pane==='student':!['student','lab'].includes(b.dataset.pane)});
 go(role==='teacher'?'dashboard':'student');
}
$('register').onclick=async()=>{
 const name=$('fullName').value.trim(),email=$('email').value.trim(),password=$('password').value;
 if(!name||!email||password.length<8)return msg('authMsg',T('Аты-жөн, дұрыс пошта және кемінде 8 таңбалы құпиясөз енгізіңіз.','Введите имя, почту и пароль от 8 символов.'),true);
 msg('authMsg',T('Тіркелу сұранысы жіберілуде…','Отправляем запрос…'));
 const {data,error}=await db.auth.signUp({email,password,options:{data:{full_name:name,preferred_language:lang,role:'student'},emailRedirectTo:new URL('teacher.html',location.href).href}});
 if(error)return fail('authMsg',error);
 msg('authMsg',data?.session?T('Тіркелдіңіз. Мұғалім кабинетін белсендіруді басыңыз.','Вы зарегистрировались. Активируйте кабинет учителя.'):T('Поштаңызды тексеріп, растау сілтемесін басыңыз. Содан кейін кіріңіз.','Проверьте почту и подтвердите email, затем войдите.'));
 await checkAuth();
};
$('login').onclick=async()=>{
 const email=$('email').value.trim(),password=$('password').value;
 if(!email||!password)return msg('authMsg',T('Пошта мен құпиясөзді енгізіңіз.','Введите почту и пароль.'),true);
 const {error}=await db.auth.signInWithPassword({email,password});if(error)return fail('authMsg',error);await checkAuth();
};
$('resetPassword').onclick=async()=>{
 const email=$('email').value.trim();if(!email)return msg('authMsg',T('Поштаңызды енгізіңіз.','Укажите email.'),true);
 const {error}=await db.auth.resetPasswordForEmail(email,{redirectTo:new URL('index.html',location.href).href});
 if(error)return fail('authMsg',error);msg('authMsg',T('Құпиясөзді қалпына келтіру сілтемесі жіберілді.','Отправлена ссылка для восстановления пароля.'));
};
$('activate').onclick=async()=>{
 if(!user)return;const {error}=await db.rpc('activate_teacher_workspace');
 if(error)return fail('authMsg',error);
 msg('authMsg',T('Мұғалім кабинеті белсендірілді!','Кабинет активирован!'));await checkAuth();
};
$('studentOpen').onclick=async()=>{if(profile?.role==='student'){showApp('student');await loadStudentTasks();}};
async function loadAll(){await loadClasses();await Promise.all([loadResources(),loadAssignments()]);}
async function loadClasses(){
 if(!user||profile?.role!=='teacher')return;
 const {data,error}=await db.from('classes').select('id,class_name,join_code').eq('teacher_id',user.id).order('created_at',{ascending:false});
 if(error){fail('classMsg',error);return}
 classes=data||[];$('countClasses').textContent=classes.length;renderClasses();await loadPending();
}
function renderClasses(){
 const e=$('classList'),s=$('assignmentClass');
 if(!e)return;
 e.innerHTML=classes.length?classes.map(c=>'<div class="item"><b>'+esc(c.class_name)+'</b><div class="meta">'+T('Қосылу коды: ','Код класса: ')+'<strong>'+esc(c.join_code||'—')+'</strong></div></div>').join(''):'<p class="muted">'+T('Әзірге сынып жоқ.','Классов пока нет.')+'</p>';
 const value=s.value;s.replaceChildren(...classes.map(c=>{const o=document.createElement('option');o.value=c.id;o.textContent=c.class_name;return o}));if(classes.some(c=>c.id===value))s.value=value;
}
$('newClass').onclick=async()=>{
 if(profile?.role!=='teacher')return;const name=$('className').value.trim();
 if(name.length<2)return msg('classMsg',T('Сынып атауын енгізіңіз.','Введите название класса.'),true);
 const {error}=await db.rpc('create_class',{p_class_name:name});if(error)return fail('classMsg',error);
 $('className').value='';msg('classMsg',T('Сынып құрылды! Кодын оқушыға беріңіз.','Класс создан! Передайте код ученику.'));await loadClasses();
};
async function loadPending(){
 if(!classes.length){$('pendingList').innerHTML='<p class="muted">'+T('Өтініштер жоқ.','Заявок нет.')+'</p>';return}
 const ids=classes.map(c=>c.id);
 const {data,error}=await db.from('class_students').select('student_id,class_id,status').in('class_id',ids).eq('status','pending');
 if(error){$('pendingList').textContent=error.message;return}
 const rows=data||[],names={};if(rows.length){
  const u=await db.from('profiles').select('id,full_name').in('id',[...new Set(rows.map(x=>x.student_id))]);
  (u.data||[]).forEach(x=>names[x.id]=x.full_name);
 }
 $('pendingList').innerHTML=rows.length?rows.map(x=>'<div class="item"><b>'+esc(names[x.student_id]||T('Оқушы','Ученик'))+'</b><span class="meta"> · '+esc(classes.find(c=>c.id===x.class_id)?.class_name||'')+'</span><div class="actions"><button class="btn" data-approve="'+esc(x.student_id)+'" data-class="'+esc(x.class_id)+'">'+T('Бекіту','Одобрить')+'</button></div></div>').join(''):'<p class="muted">'+T('Күтіп тұрған өтініш жоқ.','Нет заявок.')+'</p>';
}
$('pendingList').addEventListener('click',async e=>{
 const btn=e.target.closest('[data-approve]');if(!btn)return;
 const {error}=await db.rpc('approve_class_student',{p_class_id:btn.dataset.class,p_student_id:btn.dataset.approve});
 if(error)return alert(error.message);await loadPending();
});
const samples=[
{grade:7,kk:{title:'Атомдар мен молекулалар',goal:'Атом мен молекула ұғымдарының айырмашылығын түсіндіру.',engage:'Су мен темірді көрсетіңіз: олар қандай бөлшектерден тұрады?',explore:'H₂O, O₂, Fe белгілерін салыстырып, бөлшек моделін құрастырыңыз.',explain:'Атом – элементтің бөлшегі; молекула – атомдар тобы. Жеке атомдардан тұратын заттар да бар.',elaborate:'H₂O және CO₂ молекулаларын сызба арқылы көрсетіңіз.',evaluate:'O₂ құрамында неше атом бар? H₂O құрамындағы элементтерді атаңыз.',task:'Жеке: 5 формуланың атом санын анықта. Жұптық: 2 молекула моделін құрастыр.',rubric:'Дұрыс элементті ажыратады – 1; атом санын есептейді – 1; моделін түсіндіреді – 1.'},ru:{title:'Атомы и молекулы',goal:'Объяснить различия между атомом и молекулой.',engage:'Покажите воду и железо: из каких частиц они состоят?',explore:'Сравните H₂O, O₂ и Fe, составьте модели частиц.',explain:'Атом — частица элемента; молекула — группа атомов. Есть вещества из отдельных атомов.',elaborate:'Изобразите модели молекул H₂O и CO₂.',evaluate:'Сколько атомов в O₂? Назовите элементы в H₂O.',task:'Индивидуально: посчитайте атомы в пяти формулах. В парах: соберите две модели.',rubric:'Определяет элементы – 1; считает атомы – 1; объясняет модель – 1.'}},
{grade:7,kk:{title:'Жай және күрделі заттар',goal:'Жай және күрделі заттарды химиялық формуласы арқылы ажырату.',engage:'Оттек пен судың құрамында не өзгеше?',explore:'O₂, H₂, NaCl, CO₂, S формулаларын екі топқа бөліңіз.',explain:'Жай зат бір элемент атомынан, күрделі зат екі не одан көп элементтен тұрады.',elaborate:'Тұрмыстағы су, ас тұзы, темір мысалдарын жіктеңіз.',evaluate:'NaCl неге күрделі зат? S неге жай зат?',task:'Топтық: 10 формуланы жіктеңіз. Жеке: екі мысалға түсінік жазыңыз.',rubric:'Екі топты ажыратады – 1; мысал келтіреді – 1; дәлелдейді – 1.'},ru:{title:'Простые и сложные вещества',goal:'Различать простые и сложные вещества по формулам.',engage:'Чем отличается состав кислорода и воды?',explore:'Разделите O₂, H₂, NaCl, CO₂, S на две группы.',explain:'Простое вещество состоит из атомов одного элемента, сложное — из двух или более.',elaborate:'Классифицируйте воду, поваренную соль, железо.',evaluate:'Почему NaCl — сложное вещество, а S — простое?',task:'В группе: распределите 10 формул. Индивидуально: поясните два примера.',rubric:'Различает группы – 1; приводит пример – 1; обосновывает – 1.'}},
{grade:7,kk:{title:'Химиялық элементтер және таңбалар',goal:'Химиялық элементтердің таңбаларын дұрыс оқып-жазу.',engage:'Неге халықаралық ғылымда Fe, Cu, O таңбалары қолданылады?',explore:'Периодтық кестеден H, O, C, Na, Cl, Fe, Cu элементтерін табыңыз.',explain:'Әр элементтің бір не екі әріптен тұратын бірегей таңбасы бар.',elaborate:'Элемент атауы, таңбасы, реттік нөмірі бар карточка жасаңыз.',evaluate:'N және Na таңбалары бір элементті білдіре ме?',task:'Жұптық: 8 элементтің атауын таңбасымен сәйкестендіріңіз.',rubric:'Таңбаларды дұрыс оқиды – 1; сәйкестендіреді – 1; кестеден табады – 1.'},ru:{title:'Химические элементы и символы',goal:'Правильно записывать и читать символы химических элементов.',engage:'Почему в химии используются международные обозначения Fe, Cu, O?',explore:'Найдите H, O, C, Na, Cl, Fe, Cu в периодической таблице.',explain:'Символ элемента состоит из одной или двух букв и является уникальным.',elaborate:'Создайте карточку: название, символ, порядковый номер.',evaluate:'Обозначают ли N и Na один и тот же элемент?',task:'В парах: сопоставьте названия и обозначения восьми элементов.',rubric:'Читает символы – 1; сопоставляет – 1; находит в таблице – 1.'}},
{grade:7,kk:{title:'Қоспаларды бөлу әдістері',goal:'Қоспаларды бөлу тәсілдерін мысалмен түсіндіру.',engage:'Құм мен суды қалай ажыратуға болады?',explore:'Құм–су, тұз–су, темір–құм жүйелеріне тәсіл таңдаңыз.',explain:'Сүзу, буландыру, магнитпен бөлу зат қасиеттерінің айырмашылығына сүйенеді.',elaborate:'Тұрмыстық суды тазарту кезеңдерін ұсыныңыз.',evaluate:'Тұзды су үшін тек сүзу жеткілікті ме?',task:'Топтық: бөлу әдісін негіздеңіз. Жеке: схема сызыңыз.',rubric:'Тәсілді таңдайды – 1; себебін түсіндіреді – 1; қауіпсіздік сақтайды – 1.'},ru:{title:'Методы разделения смесей',goal:'Объяснить методы разделения смесей на примерах.',engage:'Как отделить песок от воды?',explore:'Выберите метод для песка с водой, соли с водой, железа с песком.',explain:'Фильтрация, выпаривание и магнитное разделение используют различия свойств веществ.',elaborate:'Предложите этапы очистки бытовой воды.',evaluate:'Достаточна ли фильтрация для солёной воды?',task:'Групповая работа: обоснуйте метод. Индивидуально: составьте схему.',rubric:'Выбирает метод – 1; обосновывает – 1; соблюдает безопасность – 1.'}},
{grade:8,kk:{title:'Зат мөлшері. Моль',goal:'Моль және молярлық масса ұғымдарын қолдану.',engage:'Атомдарды бір-бірлеп санау неге ыңғайсыз?',explore:'18 г судың және 44 г CO₂-ның зат мөлшерін есептеңіз.',explain:'n=m/M; M(H₂O)=18 г/моль, M(CO₂)=44 г/моль.',elaborate:'9 г судағы моль санын тауып, шешу жолын түсіндіріңіз.',evaluate:'n=0,5 моль, M=32 г/моль болса, масса қанша?',task:'Жеке: үш есеп. Жұптық: өзара тексеру.',rubric:'Формуланы таңдайды – 1; есептейді – 1; өлшем бірлігін жазады – 1.'},ru:{title:'Количество вещества. Моль',goal:'Применять понятия моля и молярной массы.',engage:'Почему неудобно пересчитывать атомы по одному?',explore:'Вычислите количество вещества в 18 г воды и 44 г CO₂.',explain:'n=m/M; M(H₂O)=18 г/моль, M(CO₂)=44 г/моль.',elaborate:'Найдите количество вещества в 9 г воды и объясните решение.',evaluate:'Если n=0,5 моль, M=32 г/моль, какова масса?',task:'Индивидуально: три задачи. В парах: взаимопроверка.',rubric:'Выбирает формулу – 1; вычисляет – 1; записывает единицы – 1.'}},
{grade:8,kk:{title:'Авогадро саны және бөлшектер саны',goal:'N=n·Nₐ формуласымен бөлшектер санын табу.',engage:'1 моль судың ішінде қанша молекула болуы мүмкін?',explore:'0,5 моль заттағы бөлшек санын есептеңіз.',explain:'Nₐ≈6,02·10²³ моль⁻¹. N=n·Nₐ.',elaborate:'2 моль оттек молекуласындағы молекулалар санын табыңыз.',evaluate:'1 моль O₂ ішіндегі оттек атомдарының саны қандай?',task:'Жұптық: молекула мен атом санын салыстырыңыз. Жеке: есеп шығарыңыз.',rubric:'Авогадро тұрақтысын қолданады – 1; молекула санын есептейді – 1; атом санын ажыратады – 1.'},ru:{title:'Число Авогадро и число частиц',goal:'Определять число частиц по формуле N=n·Nₐ.',engage:'Сколько молекул может быть в 1 моль воды?',explore:'Вычислите количество частиц в 0,5 моль вещества.',explain:'Nₐ≈6,02·10²³ моль⁻¹; N=n·Nₐ.',elaborate:'Найдите количество молекул в 2 моль кислорода.',evaluate:'Сколько атомов кислорода в 1 моль O₂?',task:'В парах: сравните число атомов и молекул. Индивидуально: решите задачу.',rubric:'Использует число Авогадро – 1; вычисляет молекулы – 1; различает атомы – 1.'}},
{grade:8,kk:{title:'Химиялық реакция теңдеулерін теңестіру',goal:'Реакция теңдеулеріндегі коэффициенттерді дұрыс орналастыру.',engage:'Реакция кезінде атомдар жоғалып кете ме?',explore:'H₂ + O₂ → H₂O теңдеуіндегі атомдарды санаңыз.',explain:'Коэффициент атом санын теңестіреді: 2H₂ + O₂ → 2H₂O.',elaborate:'Mg + O₂ → MgO және Fe + O₂ → Fe₂O₃ теңдеулерін теңестіріңіз.',evaluate:'Коэффициент пен индекстің айырмасы қандай?',task:'Топтық: үш реакцияны теңестіру; жеке: біреуін түсіндіру.',rubric:'Атом санын санайды – 1; коэффициентті табады – 1; тексереді – 1.'},ru:{title:'Уравнивание химических реакций',goal:'Правильно расставлять коэффициенты в уравнениях.',engage:'Исчезают ли атомы в ходе химической реакции?',explore:'Посчитайте атомы в H₂ + O₂ → H₂O.',explain:'Коэффициенты уравнивают число атомов: 2H₂ + O₂ → 2H₂O.',elaborate:'Уравняйте Mg + O₂ → MgO и Fe + O₂ → Fe₂O₃.',evaluate:'Чем коэффициент отличается от индекса?',task:'В группе: три уравнения; индивидуально: объясните одно.',rubric:'Считает атомы – 1; подбирает коэффициенты – 1; проверяет – 1.'}},
{grade:8,kk:{title:'Зат массасының сақталу заңы',goal:'Реакцияға дейінгі және кейінгі зат массасын салыстыру.',engage:'Жабық ыдыста реакциядан кейін масса өзгере ме?',explore:'12 г зат пен 8 г зат әрекеттессе, жабық жүйеде өнім массасы қанша?',explain:'Жабық жүйеде толық масса сақталады; m(реагенттер)=m(өнімдер).',elaborate:'Тәжірибе үшін жабық және ашық ыдыстарды салыстырыңыз.',evaluate:'Газ бөлінетін ашық ыдыста масса неге азаюы мүмкін?',task:'Жеке: 2 массалық есеп; топтық: тәжірибе сызбасын талдау.',rubric:'Заңды тұжырымдайды – 1; есептейді – 1; жүйенің ашық/жабық екенін ескереді – 1.'},ru:{title:'Закон сохранения массы веществ',goal:'Сравнивать массы веществ до и после реакции.',engage:'Изменится ли масса после реакции в закрытом сосуде?',explore:'Если реагируют 12 г и 8 г веществ, какова масса продуктов в закрытой системе?',explain:'В закрытой системе общая масса сохраняется: m(реагентов)=m(продуктов).',elaborate:'Сравните открытый и закрытый сосуд для опыта.',evaluate:'Почему масса открытого сосуда может уменьшиться при выделении газа?',task:'Индивидуально: две задачи; в группе: анализ схемы опыта.',rubric:'Формулирует закон – 1; считает – 1; учитывает тип системы – 1.'}}
];
function makeBody(s,langCode,kind='qmj'){
 const x=s[langCode],k=langCode==='kk';
 const parts=kind==='worksheet'?
 [k?'Жұмыс парағы':'Рабочий лист',x.title,k?'Оқушының аты-жөні: __________________':'ФИ ученика: __________________',
 k?'1-тапсырма. Бастапқы сұрақ':'Задание 1. Вводный вопрос',x.engage,
 k?'2-тапсырма. Зерттеу':'Задание 2. Исследование',x.explore,
 k?'3-тапсырма. Жеке және жұптық жұмыс':'Задание 3. Индивидуальная и парная работа',x.task,
 k?'4-тапсырма. Қорытынды':'Задание 4. Итог',x.evaluate,
 k?'Бағалау дескрипторы: ':'Дескрипторы: ',x.rubric] :
 [k?'Қысқа мерзімді жоспар (5E)':'Краткосрочный план (5E)',k?'Пәні: Химия':'Предмет: Химия',(k?'Сынып: ':'Класс: ')+s.grade,x.title,
 k?'Бөлім / тақырып: ':'Раздел / тема: ',x.title,
 k?'Оқу мақсаты: мұғалім КТП бойынша толтырады.':'Цель обучения: учитель указывает по КТП.',
 k?'Сабақтың мақсаты: ':'Цель урока: ',x.goal,
 k?'Құндылық: жауапкершілік, ынтымақтастық, қауіпсіздік.':'Ценность: ответственность, сотрудничество, безопасность.',
 k?'1. Engage (қызығушылықты ояту)':'1. Engage (вовлечение)',x.engage,
 k?'2. Explore (зерттеу)':'2. Explore (исследование)',x.explore,
 k?'3. Explain (түсіндіру)':'3. Explain (объяснение)',x.explain,
 k?'4. Elaborate (бекіту)':'4. Elaborate (применение)',x.elaborate,
 k?'5. Evaluate (бағалау)':'5. Evaluate (оценивание)',x.evaluate,
 k?'Жеке, жұптық, топтық жұмыс: ':'Индивидуальная, парная, групповая работа: ',x.task,
 k?'Бағалау критерийлері: ':'Критерии оценивания: ',x.rubric,
 k?'Саралау: қолдау карточкалары; күрделі есептер; жұптық көмек.':'Дифференциация: карточки-подсказки, усложнённые задания, помощь в парах.',
 k?'Ресурстар: периодтық кесте, сызбалар, Chem AI Crush 3D зертханасы (тиісті тақырыпта).':'Ресурсы: таблица элементов, схемы, Chem AI Crush 3D (по теме).',
 k?'Қауіпсіздік: зертханалық жұмыс тек мұғалім бақылауымен.':'Безопасность: лабораторные работы только под контролем учителя.',
 k?'Үй тапсырмасы: негізгі ұғымдарды қайталау, 2–3 жаттығу.':'Домашнее задание: повторить понятия, решить 2–3 задания.'];
 return parts.join('\n');
}
function renderLibrary(){
 const el=$('templateList');if(!el)return;const grade=Number($('gradeFilter').value),kind=$('kindFilter').value;
 const list=samples.map((s,i)=>({...s,idx:i})).filter(s=>s.grade===grade);
 el.innerHTML=list.map(s=>{
 const x=s[lang];
 return '<div class="item"><div class="pill">'+s.grade+' '+T('сынып','класс')+'</div> <b>'+esc(x.title)+'</b><p>'+esc(x.goal)+'</p><div class="actions">'+(kind!=='worksheet'?'<button class="btn second" data-template="'+s.idx+'" data-kind="qmj">'+T('ҚМЖ өңдеу','Редактировать КСП')+'</button>':'')+(kind!=='qmj'?'<button class="btn second" data-template="'+s.idx+'" data-kind="worksheet">'+T('Жұмыс парағын өңдеу','Рабочий лист')+'</button>':'')+'</div></div>';
 }).join('');
}
$('gradeFilter').onchange=renderLibrary;$('kindFilter').onchange=renderLibrary;
$('templateList').addEventListener('click',e=>{
 const b=e.target.closest('[data-template]');if(!b)return;
 const s=samples[Number(b.dataset.template)],kind=b.dataset.kind;
 openEditor({grade:s.grade,language:lang,kind,title:s[lang].title,topic:s[lang].title,objectives:s[lang].goal,body:makeBody(s,lang,kind)});go('editor');
});
function openEditor(r){
 editorId=r.id||null;
 $('editorGrade').value=String(r.grade||7);$('editorLang').value=r.language||lang;$('editorKind').value=r.kind||'qmj';
 $('editorTitleInput').value=r.title||'';$('editorTopic').value=r.topic||'';
 $('editorObjectives').value=r.objectives||'';$('editorBody').value=r.body||'';
 msg('editorMsg',T('Материал өңдеуге дайын.','Материал готов к редактированию.'));
}
$('resetEditor').onclick=()=>openEditor({grade:7,language:lang,kind:'qmj',title:'',topic:'',objectives:'',body:''});
$('importBtn').onclick=()=>$('importFile').click();
$('importFile').onchange=async e=>{
 const f=e.target.files[0];if(!f)return;if(f.size>1024*1024)return msg('editorMsg',T('Файл 1 МБ-тан аспауы керек.','Максимальный размер файла 1 МБ.'),true);
 let raw=await f.text();try{
 if(/\.json$/i.test(f.name)){const o=JSON.parse(raw);openEditor({...o,grade:[7,8].includes(Number(o.grade))?Number(o.grade):7,language:o.language==='ru'?'ru':'kk'});return}
 if(/\.html?$/i.test(f.name))raw=new DOMParser().parseFromString(raw,'text/html').body.textContent||'';
 $('editorBody').value=raw;msg('editorMsg',T('Мәтін импортталды.','Текст импортирован.'));
 }catch(err){fail('editorMsg',err)}finally{e.target.value=''}
};
function editorData(){return {grade:Number($('editorGrade').value),language:$('editorLang').value,kind:$('editorKind').value,title:$('editorTitleInput').value.trim(),topic:$('editorTopic').value.trim(),objectives:$('editorObjectives').value.trim(),body:$('editorBody').value.trim()}}
$('saveMaterial').onclick=async()=>{
 const data=editorData();if(!data.title||!data.body)return msg('editorMsg',T('Тақырып пен мазмұнды толтырыңыз.','Заполните название и текст.'),true);
 if(profile?.role!=='teacher')return msg('editorMsg',T('Сақтау үшін мұғалім кабинетіне кіріңіз.','Войдите как учитель для сохранения.'),true);
 const request=editorId?db.from('teacher_resources').update(data).eq('id',editorId).select('id').single():db.from('teacher_resources').insert({...data,teacher_id:user.id}).select('id').single();
 const {data:r,error}=await request;if(error)return fail('editorMsg',error);
 editorId=r.id;msg('editorMsg',T('Материал жеке кабинетіңізге сақталды.','Материал сохранён в кабинете.'));await loadResources();
};
$('downloadWord').onclick=()=>{
 const x=editorData();if(!x.title)return msg('editorMsg',T('Тақырып енгізіңіз.','Введите название.'),true);
 const v=esc(x.body).split('\n').map(line=>'<tr><td>'+line+'</td></tr>').join('');
 const html='<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:"Times New Roman";font-size:14pt;color:#000}h1{font-size:16pt;text-align:center}table{width:100%;border-collapse:collapse}td{border:1px solid #000;background:white;padding:7px}p{margin:9px 0}</style></head><body><h1>'+esc(x.title)+'</h1><p><b>'+T('Сынып: ','Класс: ')+x.grade+'</b></p><p><b>'+T('Оқу мақсаты: ','Цель обучения: ')+'</b>'+esc(x.objectives)+'</p><table>'+v+'</table></body></html>';
 const blob=new Blob(['\ufeff',html],{type:'application/msword;charset=utf-8'});
 const url=URL_ORIGIN.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='CHEM_AI_CRUSH_'+x.grade+'_'+x.kind+'_'+x.language+'.doc';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL_ORIGIN.revokeObjectURL(url),2000);
 msg('editorMsg',T('Word файлы жүктелді (.doc).','Файл Word скачан (.doc).'));
};
const URL_ORIGIN=window.URL;
async function loadResources(){
 if(profile?.role!=='teacher')return;
 const {data,error}=await db.from('teacher_resources').select('*').eq('teacher_id',user.id).order('updated_at',{ascending:false}).limit(100);
 if(error){$('savedList').textContent=error.message;return}
 resources=data||[];savedById=Object.fromEntries(resources.map(r=>[r.id,r]));$('countResources').textContent=resources.length;renderSaved();
}
function renderSaved(){
 const el=$('savedList');if(!el)return;
 el.innerHTML=resources.length?resources.map(r=>'<div class="item"><div class="pill">'+r.grade+' · '+esc(r.language.toUpperCase())+' · '+esc(r.kind)+'</div> <b>'+esc(r.title)+'</b><div class="meta">'+new Date(r.updated_at).toLocaleDateString(lang==='kk'?'kk-KZ':'ru-RU')+'</div><div class="actions"><button class="btn second" data-edit="'+esc(r.id)+'">'+T('Өңдеу','Редактировать')+'</button><button class="btn warn" data-delete="'+esc(r.id)+'">'+T('Өшіру','Удалить')+'</button></div></div>').join(''):'<p class="muted">'+T('Сақталған материалдар жоқ. Үлгіні ашып, өңдеп сақтаңыз.','Нет сохранённых материалов. Откройте образец и сохраните.')+'</p>';
}
$('savedList').addEventListener('click',async e=>{
 const b=e.target.closest('[data-edit],[data-delete]');if(!b)return;
 if(b.dataset.edit){openEditor(savedById[b.dataset.edit]);go('editor');return}
 if(b.dataset.delete){
  if(!confirm(T('Материалды өшіресіз бе?','Удалить материал?')))return;
  const {error}=await db.from('teacher_resources').delete().eq('id',b.dataset.delete);if(error)return alert(error.message);await loadResources();
 }
});
$('publishAssignment').onclick=async()=>{
 if(profile?.role!=='teacher')return;
 const title=$('assignmentTitle').value.trim(),instructions=$('assignmentText').value.trim(),classId=$('assignmentClass').value,due=$('dueAt').value;
 if(!classes.some(c=>c.id===classId)||!title||!instructions)return msg('assignMsg',T('Сынып, тақырып және тапсырма мәтінін толтырыңыз.','Укажите класс, тему и текст задания.'),true);
 const data={teacher_id:user.id,class_id:classId,title,instructions,status:'published',due_at:due?new Date(due).toISOString():null};
 const {error}=await db.from('teacher_assignments').insert(data);
 if(error)return fail('assignMsg',error);
 $('assignmentTitle').value='';$('assignmentText').value='';msg('assignMsg',T('Тапсырма жарияланды. Оқушылар бекітілгеннен кейін көре алады.','Задание опубликовано. Ученики увидят его после одобрения.'));await loadAssignments();
};
async function loadAssignments(){
 if(profile?.role!=='teacher')return;
 const {data,error}=await db.from('teacher_assignments').select('id,title,instructions,class_id,status,created_at,due_at').eq('teacher_id',user.id).order('created_at',{ascending:false});
 if(error){$('assignmentList').textContent=error.message;return}
 assignments=data||[];$('countAssignments').textContent=assignments.length;renderAssignments();
}
function renderAssignments(){
 const el=$('assignmentList');if(!el)return;
 el.innerHTML=assignments.length?assignments.map(a=>'<div class="item"><b>'+esc(a.title)+'</b><div class="meta">'+esc(classes.find(c=>c.id===a.class_id)?.class_name||'')+' · '+(a.due_at?new Date(a.due_at).toLocaleString(lang==='kk'?'kk-KZ':'ru-RU'):'—')+'</div><p>'+esc(a.instructions)+'</p></div>').join(''):'<p class="muted">'+T('Тапсырма жоқ.','Пока нет заданий.')+'</p>';
}
async function loadResults(){
 if(profile?.role!=='teacher')return;
 if(!assignments.length){$('resultList').innerHTML='<p class="muted">'+T('Алдымен тапсырма жариялаңыз.','Сначала опубликуйте задание.')+'</p>';return}
 const {data,error}=await db.from('assignment_submissions').select('id,assignment_id,student_id,answer_text,score,feedback,created_at').in('assignment_id',assignments.map(a=>a.id)).order('created_at',{ascending:false});
 if(error){$('resultList').textContent=error.message;return}
 submissions=data||[];const names={};
 if(submissions.length){
 const q=await db.from('profiles').select('id,full_name').in('id',[...new Set(submissions.map(x=>x.student_id))]);
 (q.data||[]).forEach(x=>names[x.id]=x.full_name);
 }
 renderResults(names);
}
function renderResults(names={}){
 const el=$('resultList');if(!el)return;
 el.innerHTML=submissions.length?submissions.map(s=>{
 const a=assignments.find(q=>q.id===s.assignment_id);
 return '<div class="item"><b>'+esc(names[s.student_id]||T('Оқушы','Ученик'))+'</b><div class="meta">'+esc(a?.title||'')+' · '+new Date(s.created_at).toLocaleString(lang==='kk'?'kk-KZ':'ru-RU')+'</div><p>'+esc(s.answer_text)+'</p><div class="formrow"><div><label>'+T('Ұпай (0–10)','Баллы (0–10)')+'</label><input type="number" min="0" max="10" data-score="'+esc(s.id)+'" value="'+(s.score??'')+'"></div><div><label>'+T('Кері байланыс','Комментарий')+'</label><input data-feedback="'+esc(s.id)+'" value="'+esc(s.feedback||'')+'"></div></div><div class="actions"><button class="btn" data-grade="'+esc(s.id)+'">'+T('Бағаны сақтау','Сохранить оценку')+'</button></div></div>';
 }).join(''):'<p class="muted">'+T('Әлі тапсырма жауабы түскен жоқ.','Ответов пока нет.')+'</p>';
}
$('resultList').addEventListener('click',async e=>{
 const b=e.target.closest('[data-grade]');if(!b)return;
 const id=b.dataset.grade,v=q('[data-score="'+id+'"]').value,comment=q('[data-feedback="'+id+'"]').value;
 if(v===''||!Number.isInteger(Number(v))||Number(v)<0||Number(v)>10)return alert(T('0–10 аралығындағы бүтін ұпай енгізіңіз.','Введите целый балл от 0 до 10.'));
 const {error}=await db.from('assignment_submissions').update({score:Number(v),feedback:comment,graded_at:new Date().toISOString()}).eq('id',id);
 if(error)return alert(error.message);await loadResults();
});
function q(sel){return document.querySelector(sel)}
$('requestJoin').onclick=async()=>{
 if(profile?.role!=='student')return;
 const code=$('joinCode').value.trim();
 if(code.length<4)return msg('studentMsg',T('Сынып кодын енгізіңіз.','Введите код класса.'),true);
 const {error}=await db.rpc('request_class_join',{p_code:code});
 if(error)return fail('studentMsg',error);
 msg('studentMsg',T('Өтініш жіберілді. Мұғалімнің бекітуін күтіңіз.','Заявка отправлена. Дождитесь одобрения учителя.'));await loadStudentTasks();
};
async function loadStudentTasks(){
 if(!user||profile?.role!=='student')return;
 const [ra,rs]=await Promise.all([
 db.from('teacher_assignments').select('id,title,instructions,class_id,due_at,created_at').eq('status','published').order('created_at',{ascending:false}).limit(100),
 db.from('assignment_submissions').select('id,assignment_id,score,feedback').eq('student_id',user.id)
 ]);
 if(ra.error)return $('studentTasks').textContent=ra.error.message;
 if(rs.error)return $('studentTasks').textContent=rs.error.message;
 const mine=Object.fromEntries((rs.data||[]).map(x=>[x.assignment_id,x]));
 $('studentTasks').innerHTML=(ra.data||[]).length?(ra.data||[]).map(a=>{
 const s=mine[a.id];
 return '<div class="item"><b>'+esc(a.title)+'</b><div class="meta">'+(a.due_at?T('Мерзімі: ','Срок: ')+new Date(a.due_at).toLocaleString(lang==='kk'?'kk-KZ':'ru-RU'):'')+'</div><p>'+esc(a.instructions)+'</p>'+
 (s?'<span class="pill">'+T('Жіберілген жауап','Отправлено')+' · '+(s.score===null?T('Тексерілуде','На проверке'):(s.score+'/10'))+'</span><p>'+esc(s.feedback||'')+'</p>':
 '<label>'+T('Сіздің жауабыңыз','Ваш ответ')+'</label><textarea data-answer="'+esc(a.id)+'" maxlength="20000" placeholder="'+T('Жауап мәтінін жазыңыз','Напишите ответ')+'"></textarea><div class="actions"><button class="btn" data-submit="'+esc(a.id)+'">'+T('Жауапты жіберу','Отправить ответ')+'</button></div>')+'</div>';
 }).join(''):'<p class="muted">'+T('Әзірге тапсырма жоқ немесе сыныпқа қабылданбадыңыз.','Заданий пока нет или вы ещё не приняты в класс.')+'</p>';
}
$('studentTasks').addEventListener('click',async e=>{
 const b=e.target.closest('[data-submit]');if(!b)return;const id=b.dataset.submit,value=q('textarea[data-answer="'+id+'"]')?.value.trim();
 if(!value)return alert(T('Жауапты жазыңыз.','Введите ответ.'));
 const {error}=await db.from('assignment_submissions').insert({assignment_id:id,student_id:user.id,answer_text:value});
 if(error)return alert(error.message);await loadStudentTasks();
});
localize();checkAuth();
})();