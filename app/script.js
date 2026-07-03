// ─── LIBELLÉS DU TEMPS DE L'AUXILIAIRE (pour les temps composés) ───
const AUX_TENSE_LABELS={
  present:"au présent de l'indicatif",
  imparfait:"à l'imparfait de l'indicatif",
  subjPresent:"au présent du subjonctif",
  conditionnel:"au présent du conditionnel"
};

// ─── ONGLETS ───
document.querySelectorAll(".tab").forEach(t=>{
  t.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("on"));
    t.classList.add("on");
    document.querySelectorAll(".view").forEach(v=>v.classList.remove("on"));
    document.getElementById("view-"+t.dataset.view).classList.add("on");
  });
});

// ─── CHAPITRES ───
const CHAPS=["home","conjugaison","si","connecteurs","vocabulaire","recap"];
function goChap(id){
  CHAPS.forEach(c=>{document.getElementById("cours-"+c).style.display=c===id?"block":"none";});
  if(id==="connecteurs") renderConn();
  if(id==="vocabulaire") renderVocab();
  if(id==="recap") renderRecap();
  window.scrollTo({top:0});
}
document.querySelectorAll(".ch-card[data-go]").forEach(c=>c.addEventListener("click",()=>goChap(c.dataset.go)));
document.querySelectorAll(".back[data-back]").forEach(b=>b.addEventListener("click",()=>goChap("home")));

// ─── HELPER mk ───
function mk(tag,cls,html){
  const e=document.createElement(tag); if(cls)e.className=cls; if(html!==undefined)e.innerHTML=html; return e;
}

// ─── TABLEAU DOUBLE COLONNE ───
function dualTable(h1,th1,td1,d1, h2,th2,td2,d2, persons){
  const w=mk("div","tbl-wide");
  const t=document.createElement("table"); t.className="ct2";
  const thead=document.createElement("thead");
  const hr=document.createElement("tr");
  hr.innerHTML=`<th class="th-pn">Pronom</th><th class="${th1}">${h1}</th><th class="${th2}">${h2}</th>`;
  thead.appendChild(hr); t.appendChild(thead);
  const tbody=document.createElement("tbody");
  persons.forEach((p,i)=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td class="pn">${p}</td><td class="${td1}">${d1[i]}</td><td class="${td2}">${d2[i]}</td>`;
    tbody.appendChild(tr);
  });
  t.appendChild(tbody); w.appendChild(t); return w;
}

// ─── TOGGLE EXEMPLES ───
function toggleBlock(label, build){
  const wrap=mk("div");
  const btn=mk("button","show-btn","<span class='plus'>+</span> "+label);
  const panel=mk("div","ex-panel");
  build(panel);
  btn.addEventListener("click",()=>{btn.classList.toggle("open");panel.classList.toggle("open");});
  wrap.appendChild(btn); wrap.appendChild(panel); return wrap;
}

// ─── TUILE VERBE ───
function verbTile(verb,forms,persons){
  const t=mk("div","verb-tile");
  t.appendChild(mk("div","vn",verb));
  const tbl=document.createElement("table");
  persons.forEach((p,i)=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td class="p">${p}</td><td>${forms[i]}</td>`;
    tbl.appendChild(tr);
  });
  t.appendChild(tbl); return t;
}

// ─── RENDU TEMPS ───
function buildTense(tense){
  const card=mk("div","tense-card");
  const hdr=mk("div","tense-hdr");
  hdr.appendChild(mk("h4",null,tense.name));
  hdr.appendChild(mk("span",tense.type==="simple"?"badge s-badge":"badge c-badge",tense.type==="simple"?"Simple":"Composé"));
  card.appendChild(hdr);

  const body=mk("div","tense-body");
  const persons=tense.impersonal?PERSONS_IMP:PERSONS;

  if(tense.type==="compose"){
    const auxLabel=tense.auxTenseLabel||AUX_TENSE_LABELS[tense.auxTense];
    const ruleText=tense.rule||(auxLabel
      ? `<b>Avoir</b> ou <b>Être</b> conjugué ${auxLabel} + participe passé`
      : "<b>Avoir</b> ou <b>Être</b> conjugué + participe passé");
    const rb=mk("div","rule-box",`<span class="ri">📌</span><span class="rule-formula">${ruleText}</span>`);
    body.appendChild(rb);
    if(tense.avoir&&tense.etre){
      body.appendChild(dualTable("Avoir","th-v1","v1",tense.avoir,"Être","th-v2","v2",tense.etre,persons));
    }
  }
  if(tense.type==="simple"&&!tense.noPersonTable){
    if(tense.ending1&&tense.ending2){
      body.appendChild(dualTable("1ᵉʳ groupe","th-g1","vg",tense.ending1,"2ᵉ groupe","th-g2","vg",tense.ending2,persons));
    }
    if(tense.avoir&&tense.etre){
      body.appendChild(dualTable("Avoir","th-v1","v1",tense.avoir,"Être","th-v2","v2",tense.etre,persons));
    }
  }
  if(tense.noPersonTable){
    if(tense.rule) body.appendChild(mk("div","rule-box",`<span class="ri">📌</span><span class="rule-formula">${tense.rule}</span>`));
    if(tense.examplesFlat){
      const row=mk("div","chip-row");
      tense.examplesFlat.forEach(item=>row.appendChild(mk("span","wchip",`<b>${item.label}</b> : ${item.val}`)));
      body.appendChild(row);
    }
  }

  if(tense.ex3||tense.phrases||tense.examplesFlat){
    body.appendChild(toggleBlock("Voir les exemples",panel=>{
      if(tense.ex1||tense.ex2){
        panel.appendChild(mk("span","ex-label","Exemples — 1ᵉʳ et 2ᵉ groupe"));
        const grid=mk("div","verb-grid");
        if(tense.ex1) grid.appendChild(verbTile(tense.ex1.verb,tense.ex1.forms,persons));
        if(tense.ex2) grid.appendChild(verbTile(tense.ex2.verb,tense.ex2.forms,persons));
        panel.appendChild(grid);
      }
      if(tense.ex3){
        panel.appendChild(mk("span","ex-label","3ᵉ groupe — 5 verbes irréguliers"));
        const grid=mk("div","verb-grid");
        tense.ex3.forEach(v=>grid.appendChild(verbTile(v.verb,v.forms,persons)));
        panel.appendChild(grid);
      }
      if(tense.phrases){
        panel.appendChild(mk("span","ex-label","Phrases d'usage"));
        tense.phrases.forEach(p=>{
          const ph=mk("div","phrase");
          ph.innerHTML=`<em>« ${p.fr} »</em> <span class="ptag">${p.tag}</span>`;
          panel.appendChild(ph);
        });
      }
    }));
  }
  card.appendChild(body); return card;
}

// ─── RENDU MODE ───
function buildMode(mode){
  const card=mk("div","mode-card");
  const toggle=mk("button","mode-toggle");
  toggle.innerHTML=`<div class="mt-left"><span class="mode-icon">${mode.icon||"📚"}</span><div><h3>${mode.name}</h3><span class="mtag">${mode.tenses.length} temps</span></div></div><div class="mode-chev">›</div>`;
  toggle.addEventListener("click",()=>card.classList.toggle("open"));
  card.appendChild(toggle);
  const body=mk("div","mode-body");
  const usage=mk("div","usage");
  usage.innerHTML=`<span class="usage-label">Usage</span>${mode.usage}`;
  body.appendChild(usage);
  if(mode.impersonalNote){
    const note=mk("div","usage");
    note.innerHTML=`<span class="usage-label">Note</span>${mode.impersonalNote}`;
    body.appendChild(note);
  }
  const tf=mk("div","tense-flow");
  mode.tenses.forEach(t=>{
    const tb=mk("div","tense-block");
    const dot=mk("div","tense-dot"); tb.appendChild(dot);
    tb.appendChild(buildTense(t)); tf.appendChild(tb);
  });
  body.appendChild(tf); card.appendChild(body); return card;
}

// MODE ICONS
const MODE_ICONS={"Indicatif":"🔵","Subjonctif":"🟡","Conditionnel":"🟠","Impératif":"🔴","Infinitif":"⚪","Participe":"🟢","Gérondif":"🟣"};
MODES.forEach(m=>{m.icon=MODE_ICONS[m.name]||"📌";});

const mflow=document.getElementById("modes-flow");
MODES.forEach(m=>{
  const mb=mk("div","mode-block");
  mb.appendChild(mk("div","mode-dot"));
  mb.appendChild(buildMode(m));
  mflow.appendChild(mb);
});

// ─── SI ───
const siEl=document.getElementById("si-list");
SI_LAWS.forEach(law=>{
  const c=mk("div","si-card");
  c.appendChild(mk("h4",null,law.title));
  c.appendChild(mk("span","si-rule",law.formula));
  c.appendChild(mk("div","desc",law.desc));
  law.examples.forEach(p=>{
    const ph=mk("div","phrase");
    ph.innerHTML=`<em>${p.fr}</em> <span class="ptag">${p.tag}</span>`;
    c.appendChild(ph);
  });
  siEl.appendChild(c);
});

// ─── RÉCAPITULATIF ───
const RECAP_TENSES=[
  {key:"present",label:"Présent",short:"Prés."},
  {key:"imparfait",label:"Imparfait",short:"Imp."},
  {key:"futur",label:"Futur",short:"Fut."},
  {key:"passeSimple",label:"Passé simple",short:"P.S."},
  {key:"subjPresent",label:"Subjonctif",short:"Subj."},
  {key:"conditionnel",label:"Conditionnel",short:"Cond."}
];
const RECAP_TOP_TRAPS=[
  {t:"Après que",d:"Toujours à l'indicatif — jamais au subjonctif. ✗ « après qu'il soit parti » → ✓ « après qu'il est parti »"},
  {t:"Il semble que",d:"Sans pronom → subjonctif (« qu'il SOIT malade »). Avec pronom → indicatif (« Il me semble qu'il EST malade »)"},
  {t:"Bien que / Malgré que",d:"Bien que + subjonctif ✓ — Malgré que est fautif → remplacer par « bien que »"},
  {t:"Depuis / Pendant / Dans / En",d:"Depuis = action qui continue · Pendant = durée terminée · Dans = délai futur · En = temps pour faire"},
  {t:"Règle d'or du SI",d:"Jamais de futur ni de conditionnel directement après « si » de condition"}
];
const MODE_TENSE_HINTS={
  "Indicatif":"présent · PC · imparfait · futur",
  "Subjonctif":"subj. présent · subj. passé",
  "Conditionnel":"présent · passé",
  "Impératif":"présent · passé",
  "Infinitif":"présent · passé",
  "Participe":"présent · passé",
  "Gérondif":"présent"
};

function recapFold(id,icon,title,sub,open,build){
  const fold=mk("div","recap-fold"+(open?" open":"")); fold.id=id;
  const tog=mk("button","recap-fold-toggle");
  tog.innerHTML=`<div class="rf-left"><span class="rf-icon">${icon}</span><div><h3>${title}</h3><span class="rf-sub">${sub}</span></div></div><div class="rf-chev">›</div>`;
  tog.addEventListener("click",()=>fold.classList.toggle("open"));
  fold.appendChild(tog);
  const body=mk("div","recap-fold-body");
  build(body);
  fold.appendChild(body);
  return fold;
}
function recapTbl(headers,rows,headCls){
  const wrap=mk("div","recap-table-wrap");
  const t=mk("table","recap-tbl");
  const thead=document.createElement("thead");
  const hr=document.createElement("tr");
  headers.forEach((h,i)=>hr.appendChild(mk("th",headCls&&headCls[i]||null,h)));
  thead.appendChild(hr); t.appendChild(thead);
  const tb=document.createElement("tbody");
  rows.forEach(r=>{
    const tr=document.createElement("tr");
    r.forEach((cell,i)=>{
      const td=mk("td",cell.cls||null,cell.html!==undefined?cell.html:cell);
      tr.appendChild(td);
    });
    tb.appendChild(tr);
  });
  t.appendChild(tb); wrap.appendChild(t); return wrap;
}
function appendPiegeBlock(body,g){
  const block=mk("div","recap-piege-block");
  block.appendChild(mk("span","ex-label",g.title));
  appendLexiqueBody(block,g);
  body.appendChild(block);
}
function renderRecapNav(){
  const nav=document.getElementById("recap-nav");
  if(!nav)return;
  nav.innerHTML="";
  [
    ["recap-traps","Pièges TCF"],
    ["recap-si","Lois SI"],
    ["recap-participe","Accords PP"],
    ["recap-connecteurs","Connecteurs"],
    ["recap-conjugaison","Conjugaison"]
  ].forEach(([id,label])=>{
    const b=mk("button","fchip",label);
    b.addEventListener("click",()=>{
      const el=document.getElementById(id);
      if(el){el.classList.add("open"); el.scrollIntoView({behavior:"smooth",block:"start"});}
    });
    nav.appendChild(b);
  });
}
function renderRecap(){
  const root=document.getElementById("recap-content");
  root.innerHTML="";
  renderRecapNav();

  const alerts=mk("div","recap-alerts");
  RECAP_TOP_TRAPS.forEach((trap,i)=>{
    const a=mk("div","recap-alert");
    a.innerHTML=`<span class="ra-num">${i+1}</span><span><b>${trap.t}</b> — ${trap.d}</span>`;
    alerts.appendChild(a);
  });
  root.appendChild(alerts);

  root.appendChild(recapFold("recap-traps","⚠️","Pièges TCF — mode verbal","Subjonctif vs indicatif · il semble que · après que",true,body=>{
    const modePieges=(typeof PIEGES_GROUPS!=="undefined"?PIEGES_GROUPS:[]).filter(g=>g.cat==="mode");
    modePieges.forEach(g=>appendPiegeBlock(body,g));
  }));

  root.appendChild(recapFold("recap-si","🔀","Lois avec SI","3 lois + règle d'or",true,body=>{
    const grid=mk("div","recap-si-grid");
    SI_LAWS.forEach(law=>{
      const c=mk("div","recap-si");
      c.appendChild(mk("h4",null,law.title));
      c.appendChild(mk("span","si-formula",law.formula));
      c.appendChild(mk("div","si-desc",law.desc));
      law.examples.forEach(ex=>{
        const d=mk("div","si-ex");
        d.innerHTML=`<em>« ${ex.fr} »</em> <span class="si-tag">${ex.tag}</span>`;
        c.appendChild(d);
      });
      grid.appendChild(c);
    });
    body.appendChild(grid);
  }));

  root.appendChild(recapFold("recap-participe","✍️","Accord du participe passé","Avoir · pronominaux · règles TCF",true,body=>{
    body.appendChild(mk("div","recap-note","Avec <b>être</b> → accord avec le sujet. Avec <b>avoir</b> → accord seulement si le COD est <b>placé avant</b> le verbe."));
    const ppPieges=(typeof PIEGES_GROUPS!=="undefined"?PIEGES_GROUPS:[]).filter(g=>g.cat==="participe");
    ppPieges.forEach(g=>appendPiegeBlock(body,g));
  }));

  root.appendChild(recapFold("recap-connecteurs","🔗","Pièges connecteurs & expressions","Depuis · car · malgré · opposition · conséquence",false,body=>{
    const connPieges=(typeof PIEGES_GROUPS!=="undefined"?PIEGES_GROUPS:[]).filter(g=>g.cat==="connecteurs");
    connPieges.forEach(g=>appendPiegeBlock(body,g));
  }));

  root.appendChild(recapFold("recap-pronoms","👤","Pronoms & prépositions","Relatifs · Y/EN · verbes + préposition",false,body=>{
    const other=(typeof PIEGES_GROUPS!=="undefined"?PIEGES_GROUPS:[]).filter(g=>["pronoms","prepositions"].includes(g.cat));
    other.forEach(g=>appendPiegeBlock(body,g));
  }));

  root.appendChild(recapFold("recap-conjugaison","🔧","Conjugaison — tableaux synthèse","Terminaisons · être/avoir · 3ᵉ groupe · formes non personnelles",false,body=>{
    body.appendChild(mk("div","recap-note","Les terminaisons ci-dessous valent pour l'<b>Indicatif</b>, le <b>Subjonctif</b> et le <b>Conditionnel</b> (temps simples). Les temps composés = auxiliaire (<b>être</b>/<b>avoir</b>) conjugué <u>au temps simple correspondant</u> (ex. passé composé → auxiliaire au présent ; plus-que-parfait → auxiliaire à l'imparfait) + participe passé."));

    body.appendChild(mk("span","ex-label","Terminaisons — 1er / 2e groupe"));
    const endGrid=mk("div","recap-si-grid");
    RECAP_TENSES.forEach(t=>{
      const card=mk("div","recap-si");
      card.appendChild(mk("h4",null,t.label));
      card.appendChild(recapTbl(
        ["Pr.","1er grp","2e grp"],
        PERSONS.map((p,i)=>[
          {html:p,cls:"rp"},
          {html:END1[t.key][i],cls:"rg"},
          {html:END2[t.key][i],cls:"rg"}
        ])
      ));
      endGrid.appendChild(card);
    });
    body.appendChild(endGrid);

    body.appendChild(mk("span","ex-label","Auxiliaires être / avoir — 6 temps"));
    body.appendChild(recapTbl(
      ["Pr.",...RECAP_TENSES.map(t=>t.short)],
      PERSONS.map((p,i)=>[
        {html:p,cls:"rp"},
        ...RECAP_TENSES.map(t=>({html:ETRE[t.key][i],cls:"rt"}))
      ]),
      ["th-muted",...RECAP_TENSES.map(()=>"")]
    ));
    body.appendChild(recapTbl(
      ["Pr.",...RECAP_TENSES.map(t=>t.short)],
      PERSONS.map((p,i)=>[
        {html:p,cls:"rp"},
        ...RECAP_TENSES.map(t=>({html:AVOIR[t.key][i],cls:"rc"}))
      ]),
      ["th-muted",...RECAP_TENSES.map(()=>"th-coral")]
    ));

    body.appendChild(mk("span","ex-label","3ᵉ groupe — 5 verbes irréguliers essentiels"));
    body.appendChild(recapTbl(
      ["Verbe","Aux.","Part. passé","Présent (3e sg.)","Futur (3e sg.)"],
      G3_NAMES.map(name=>{
        const v=G3[name];
        return [
          {html:name,cls:"rp"},
          {html:v.aux,cls:"rt"},
          {html:v.participePasse,cls:"rg"},
          {html:v.present[2],cls:"rc"},
          {html:v.futur[2],cls:"rc"}
        ];
      })
    ));

    body.appendChild(mk("span","ex-label","Formes non personnelles"));
    const pills=mk("div","recap-pills");
    MODES.forEach(mode=>{
      mode.tenses.forEach(t=>{
        if(t.noPersonTable&&t.examplesFlat){
          t.examplesFlat.forEach(x=>pills.appendChild(mk("span","recap-pill",`<b>${mode.name} ${t.name} · ${x.label}</b> ${x.val}`)));
        }
      });
    });
    body.appendChild(pills);

    body.appendChild(mk("span","ex-label","Synthèse des 7 modes"));
    const modes=mk("div","recap-modes");
    MODES.forEach(m=>{
      const row=mk("div","recap-mode-row");
      row.innerHTML=`<span class="rm-name">${m.icon||""} ${m.name}</span><span class="rm-usage">${m.usage.split(".")[0]}.</span><span class="rm-tenses">${MODE_TENSE_HINTS[m.name]||""}</span>`;
      modes.appendChild(row);
    });
    body.appendChild(modes);
  }));

  const printBtn=document.getElementById("recap-print");
  if(printBtn&&!printBtn._bound){
    printBtn._bound=true;
    printBtn.addEventListener("click",()=>window.print());
  }
}

let connF="all";
function renderConn(){
  const fbar=document.getElementById("conn-filter"); fbar.innerHTML="";
  function fchip(label,id){
    const b=mk("button","fchip"+(connF===id?" on":""),label);
    b.addEventListener("click",()=>{connF=id;renderConn();}); fbar.appendChild(b);
  }
  fchip("Tout","all");
  CONNECTEUR_CATS.forEach(c=>fchip(c.label,c.id));

  const list=document.getElementById("conn-list"); list.innerHTML="";
  CONNECTEURS.filter(g=>connF==="all"||g.cat===connF).forEach(g=>{
    const card=mk("div","cat-block");
    const cnt=g.items?g.items.length:g.words?g.words.length:g.pairs?g.pairs.length:0;
    const tog=mk("button","cat-toggle");
    tog.innerHTML=`<div class="ct-left"><span class="cat-icon">${g.icon||"📌"}</span><div><h3>${g.title}</h3><span class="ctag">${cnt} entrées</span></div></div><div class="cat-chev">›</div>`;
    tog.addEventListener("click",()=>card.classList.toggle("open"));
    card.appendChild(tog);
    const body=mk("div","cat-body");
    if(g.items){
      const row=mk("div","chip-row");
      g.items.forEach(w=>row.appendChild(mk("span","wchip",w)));
      body.appendChild(row);
    }
    if(g.words){
      const grid=mk("div","gloss-grid");
      g.words.forEach(([w,d])=>{
        const item=mk("div","gloss-item");
        item.innerHTML=`<div class="gw">${w}</div><div class="gd">${d}</div>`;
        grid.appendChild(item);
      });
      body.appendChild(grid);
    }
    if(g.pairs){
      g.pairs.forEach(([a,b])=>{
        const p=mk("div","pair-item");
        p.innerHTML=`<span class="pair-a">${a}</span><span class="pair-sep">↔</span><span class="pair-b">${b}</span>`;
        body.appendChild(p);
      });
    }
    if(g.phrases){
      body.appendChild(mk("span","ex-label","Exemples d'usage"));
      g.phrases.forEach(ph=>{
        const d=mk("div","usage-phrase");
        d.innerHTML=`<em>« ${ph.fr} »</em><span class="ptag">${ph.tag}</span>`;
        body.appendChild(d);
      });
    }
    card.appendChild(body); list.appendChild(card);
  });
}

// ─── VOCABULAIRE ───
let vocabF="all";
function groupCount(g){
  if(g.words)return g.words.length;
  if(g.items)return g.items.length;
  if(g.rows)return g.rows.length;
  if(g.rules)return g.rules.reduce((n,r)=>n+(r.items?r.items.length:1),0);
  if(g.cols)return g.cols.reduce((n,c)=>n+(c.items?c.items.length:0),0);
  return 0;
}
function appendLexiqueBody(body,g){
  if(g.words){
    const grid=mk("div","gloss-grid");
    g.words.forEach(([w,d])=>{
      const item=mk("div","gloss-item");
      item.innerHTML=`<div class="gw">${w}</div><div class="gd">${d}</div>`;
      grid.appendChild(item);
    });
    body.appendChild(grid);
  }
  if(g.items){
    const row=mk("div","chip-row");
    g.items.forEach(w=>row.appendChild(mk("span","wchip",w)));
    body.appendChild(row);
  }
  if(g.rows){
    g.rows.forEach(r=>{
      const p=mk("div","pair-item");
      p.innerHTML=`<span class="pair-a">${r.left}</span><span class="pair-sep">↔</span><span class="pair-b">${r.right}</span>`;
      body.appendChild(p);
      if(r.ex)body.appendChild(mk("div","usage-phrase",`<em>${r.ex}</em>`));
    });
  }
  if(g.rules){
    g.rules.forEach(r=>{
      body.appendChild(mk("span","ex-label",r.label));
      const row=mk("div","chip-row");
      (r.items||[]).forEach(w=>row.appendChild(mk("span","wchip",w)));
      body.appendChild(row);
    });
  }
  if(g.cols){
    const grid=mk("div","gloss-grid");
    g.cols.forEach(col=>{
      const item=mk("div","gloss-item");
      item.innerHTML=`<div class="gw">${col.label}</div><div class="gd">${(col.items||[]).join("<br>")}</div>`;
      grid.appendChild(item);
    });
    body.appendChild(grid);
  }
}
function renderVocab(){
  const fbar=document.getElementById("vocab-filter"); fbar.innerHTML="";
  function fchip(label,id){
    const b=mk("button","fchip"+(vocabF===id?" on":""),label);
    b.addEventListener("click",()=>{vocabF=id;renderVocab();}); fbar.appendChild(b);
  }
  const cats=[...VOCAB_CATS,...(typeof PIEGES_CATS!=="undefined"?PIEGES_CATS:[])];
  const groups=[...VOCAB_GROUPS,...(typeof PIEGES_GROUPS!=="undefined"?PIEGES_GROUPS:[])];
  fchip("Tout","all");
  cats.forEach(c=>fchip(c.label,c.id));

  const list=document.getElementById("vocab-list"); list.innerHTML="";
  groups.filter(g=>vocabF==="all"||g.cat===vocabF).forEach(g=>{
    const card=mk("div","cat-block");
    const cnt=groupCount(g);
    const tog=mk("button","cat-toggle");
    tog.innerHTML=`<div class="ct-left"><span class="cat-icon">${g.icon||"📌"}</span><div><h3>${g.title}</h3><span class="ctag">${cnt} mots</span></div></div><div class="cat-chev">›</div>`;
    tog.addEventListener("click",()=>card.classList.toggle("open"));
    card.appendChild(tog);
    const body=mk("div","cat-body");
    appendLexiqueBody(body,g);
    card.appendChild(body); list.appendChild(card);
  });
}

// ─── EXAMEN ───
let eQ=[],eI=0,eS=0,eR=[],eA=false;
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function catName(id){const c=EXAM_CATEGORIES.find(x=>x.id===id);return c?c.label:id;}

const cg=document.getElementById("exam-cat-grid");
const allCard=mk("div","exam-ch star");
allCard.innerHTML=`<div class="en">EXAMEN COMPLET</div><h4>Toutes les catégories</h4><p>100 questions mélangées</p>`;
allCard.addEventListener("click",()=>startExam(null)); cg.appendChild(allCard);
EXAM_CATEGORIES.forEach((c,i)=>{
  const n=EXAM_QUESTIONS.filter(q=>q.cat===c.id).length;
  const card=mk("div","exam-ch");
  card.innerHTML=`<div class="en">CAT. ${String(i+1).padStart(2,"0")}</div><h4>${c.label}</h4><p>${n} questions</p>`;
  card.addEventListener("click",()=>startExam(c.id)); cg.appendChild(card);
});

function startExam(catId){
  const pool=catId?EXAM_QUESTIONS.filter(q=>q.cat===catId):EXAM_QUESTIONS;
  eQ=shuffle(pool);eI=0;eS=0;eR=[];
  document.getElementById("exam-home").style.display="none";
  document.getElementById("exam-result").style.display="none";
  document.getElementById("exam-runner").style.display="block";
  renderQ();
}
function renderQ(){
  eA=false;
  const q=eQ[eI],tot=eQ.length;
  document.getElementById("prog-fill").style.width=(eI/tot*100)+"%";
  document.getElementById("prog-label").textContent=`Question ${eI+1} / ${tot}`;
  document.getElementById("score-tag").textContent=`${eS} / ${eI}`;
  document.getElementById("q-cat").textContent=catName(q.cat);
  document.getElementById("q-text").textContent=q.q;
  document.getElementById("q-explain").style.display="none";
  document.getElementById("btn-next").style.display="none";
  const optsEl=document.getElementById("opts"); optsEl.innerHTML="";
  const LTRS=["A","B","C","D"];
  const order=shuffle(q.options.map((opt,idx)=>({opt,idx})));
  order.forEach((item,pos)=>{
    const btn=mk("button","opt");
    btn.innerHTML=`<span class="ltr">${LTRS[pos]}.</span><span>${item.opt}</span>`;
    btn.addEventListener("click",()=>{
      if(eA)return; eA=true;
      const ok=item.idx===q.answer;
      if(ok)eS++;
      document.querySelectorAll("#opts .opt").forEach((b,p)=>{
        b.disabled=true;
        if(order[p].idx===q.answer) b.classList.add("ok");
        else if(order[p].idx===item.idx) b.classList.add("ko");
      });
      const ex=document.getElementById("q-explain");
      ex.style.display="block";
      ex.innerHTML=`<strong>${ok?"✔ Correct !":"✘ Incorrect."}</strong> ${q.explain} <br><span class="bon">✔ Bonne réponse : « ${q.options[q.answer]} »</span>`;
      document.getElementById("score-tag").textContent=`${eS} / ${eI+1}`;
      document.getElementById("btn-next").style.display="inline-block";
      eR.push({q:q.q,picked:q.options[item.idx],correct:q.options[q.answer],ok,explain:q.explain});
    });
    optsEl.appendChild(btn);
  });
}
document.getElementById("btn-next").addEventListener("click",()=>{eI++;if(eI>=eQ.length)finishExam();else renderQ();});
document.getElementById("exam-quit").addEventListener("click",()=>{
  document.getElementById("exam-runner").style.display="none";
  document.getElementById("exam-home").style.display="block";
});
function finishExam(){
  document.getElementById("exam-runner").style.display="none";
  document.getElementById("exam-result").style.display="block";
  const tot=eQ.length,pct=Math.round(eS/tot*100);
  let verdict="Continuez à réviser, notamment les points en rouge ci-dessous.";
  if(pct>=90) verdict="Excellent résultat — niveau C2 confirmé sur cette sélection !";
  else if(pct>=75) verdict="Très bon niveau C1/C2, quelques lacunes à combler.";
  else if(pct>=50) verdict="Niveau intermédiaire — reprenez les catégories en difficulté.";
  const rh=document.getElementById("result-hero");
  rh.innerHTML=`<div class="score-big">${eS}/${tot}</div><div style="font-size:1.5rem;margin-bottom:.4rem;">${pct}%</div><p>${verdict}</p><button class="btn-restart" id="btn-restart">↺ Recommencer</button>`;
  document.getElementById("btn-restart").addEventListener("click",()=>{
    document.getElementById("exam-result").style.display="none";
    document.getElementById("exam-home").style.display="block";
  });
  const rev=document.getElementById("review"); rev.innerHTML="";
  const errors=eR.filter(r=>!r.ok);
  if(errors.length){
    rev.appendChild(mk("div","review-title",`${errors.length} erreur(s) à revoir`));
    errors.forEach(r=>{
      const item=mk("div","review-item");
      item.innerHTML=`<div class="rq">${r.q}</div><div class="ra">Votre réponse : <i>${r.picked}</i> — <b>Bonne réponse : ${r.correct}</b> — ${r.explain}</div>`;
      rev.appendChild(item);
    });
  }
}
