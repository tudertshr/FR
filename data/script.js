// PERSONNES dans l'ordre conventionnel
const PERSONS = ["je","tu","il / elle","nous","vous","ils / elles"];
const PERSONS_IMP = ["tu","nous","vous"];

// ---- Auxiliaires conjugués (par temps simple) ----
const AVOIR = {
  present:["ai","as","a","avons","avez","ont"],
  imparfait:["avais","avais","avait","avions","aviez","avaient"],
  futur:["aurai","auras","aura","aurons","aurez","auront"],
  passeSimple:["eus","eus","eut","eûmes","eûtes","eurent"],
  subjPresent:["aie","aies","ait","ayons","ayez","aient"],
  conditionnel:["aurais","aurais","aurait","aurions","auriez","auraient"],
  participePasse:"eu",
  participePresent:"ayant",
  imperatif:["aie","ayons","ayez"]
};
const ETRE = {
  present:["suis","es","est","sommes","êtes","sont"],
  imparfait:["étais","étais","était","étions","étiez","étaient"],
  futur:["serai","seras","sera","serons","serez","seront"],
  passeSimple:["fus","fus","fut","fûmes","fûtes","furent"],
  subjPresent:["sois","sois","soit","soyons","soyez","soient"],
  conditionnel:["serais","serais","serait","serions","seriez","seraient"],
  participePasse:"été",
  participePresent:"étant",
  imperatif:["sois","soyons","soyez"]
};

function withAux(aux, forms){ return forms.map(a => a + " " + aux); }

// ---- Terminaisons 1er et 2e groupe ----
const END1 = { // parler
  present:["e","es","e","ons","ez","ent"],
  imparfait:["ais","ais","ait","ions","iez","aient"],
  futur:["rai","ras","ra","rons","rez","ront"],
  passeSimple:["ai","as","a","âmes","âtes","èrent"],
  subjPresent:["e","es","e","ions","iez","ent"],
  conditionnel:["rais","rais","rait","rions","riez","raient"]
};
const END2 = { // finir
  present:["is","is","it","issons","issez","issent"],
  imparfait:["issais","issais","issait","issions","issiez","issaient"],
  futur:["irai","iras","ira","irons","irez","iront"],
  passeSimple:["is","is","it","îmes","îtes","irent"],
  subjPresent:["isse","isses","isse","issions","issiez","issent"],
  conditionnel:["irais","irais","irait","irions","iriez","iraient"]
};

// ---- Verbes-exemples réguliers ----
function conj(stem, ends){ return ends.map(e=>stem+e); }
const AIMER = {
  present: conj("aim",END1.present), imparfait: conj("aim",END1.imparfait),
  futur: conj("aimer",END1.futur), passeSimple: conj("aim",END1.passeSimple),
  subjPresent: conj("aim",END1.subjPresent), conditionnel: conj("aimer",END1.conditionnel),
  participePasse:"aimé"
};
const CHOISIR = {
  present: conj("chois",END2.present), imparfait: conj("chois",END2.imparfait),
  futur: conj("choisir",END2.futur), passeSimple: conj("chois",END2.passeSimple),
  subjPresent: conj("chois",END2.subjPresent), conditionnel: conj("choisir",END2.conditionnel),
  participePasse:"choisi"
};

// ---- 3e groupe : 5 verbes irréguliers de référence ----
const G3 = {
  aller:{
    present:["vais","vas","va","allons","allez","vont"],
    imparfait:["allais","allais","allait","allions","alliez","allaient"],
    futur:["irai","iras","ira","irons","irez","iront"],
    passeSimple:["allai","allas","alla","allâmes","allâtes","allèrent"],
    subjPresent:["aille","ailles","aille","allions","alliez","aillent"],
    conditionnel:["irais","irais","irait","irions","iriez","iraient"],
    participePasse:"allé", aux:"être"
  },
  faire:{
    present:["fais","fais","fait","faisons","faites","font"],
    imparfait:["faisais","faisais","faisait","faisions","faisiez","faisaient"],
    futur:["ferai","feras","fera","ferons","ferez","feront"],
    passeSimple:["fis","fis","fit","fîmes","fîtes","firent"],
    subjPresent:["fasse","fasses","fasse","fassions","fassiez","fassent"],
    conditionnel:["ferais","ferais","ferait","ferions","feriez","feraient"],
    participePasse:"fait", aux:"avoir"
  },
  venir:{
    present:["viens","viens","vient","venons","venez","viennent"],
    imparfait:["venais","venais","venait","venions","veniez","venaient"],
    futur:["viendrai","viendras","viendra","viendrons","viendrez","viendront"],
    passeSimple:["vins","vins","vint","vînmes","vîntes","vinrent"],
    subjPresent:["vienne","viennes","vienne","venions","veniez","viennent"],
    conditionnel:["viendrais","viendrais","viendrait","viendrions","viendriez","viendraient"],
    participePasse:"venu", aux:"être"
  },
  prendre:{
    present:["prends","prends","prend","prenons","prenez","prennent"],
    imparfait:["prenais","prenais","prenait","prenions","preniez","prenaient"],
    futur:["prendrai","prendras","prendra","prendrons","prendrez","prendront"],
    passeSimple:["pris","pris","prit","prîmes","prîtes","prirent"],
    subjPresent:["prenne","prennes","prenne","prenions","preniez","prennent"],
    conditionnel:["prendrais","prendrais","prendrait","prendrions","prendriez","prendraient"],
    participePasse:"pris", aux:"avoir"
  },
  pouvoir:{
    present:["peux","peux","peut","pouvons","pouvez","peuvent"],
    imparfait:["pouvais","pouvais","pouvait","pouvions","pouviez","pouvaient"],
    futur:["pourrai","pourras","pourra","pourrons","pourrez","pourront"],
    passeSimple:["pus","pus","put","pûmes","pûtes","purent"],
    subjPresent:["puisse","puisses","puisse","puissions","puissiez","puissent"],
    conditionnel:["pourrais","pourrais","pourrait","pourrions","pourriez","pourraient"],
    participePasse:"pu", aux:"avoir"
  }
};
const G3_NAMES = Object.keys(G3);

function g3Forms(tense){
  return G3_NAMES.map(name => ({verb:name, forms:G3[name][tense]}));
}
function g3Composed(auxTense){
  // auxTense: 'present'|'imparfait'|'subjPresent'|'conditionnel'
  return G3_NAMES.map(name=>{
    const v=G3[name];
    const auxForms = v.aux==="être"? ETRE[auxTense] : AVOIR[auxTense];
    return {verb:name, forms: auxForms.map(a=>a+" "+v.participePasse)};
  });
}

// =========================================================
// Construction d'un "temps" générique
// =========================================================
function simpleTense(id,name,opts){
  return Object.assign({id,name,type:"simple"},opts);
}
function composeTense(id,name,opts){
  return Object.assign({id,name,type:"compose"},opts);
}

// ===================== INDICATIF =====================
const indicatif = {
  id:"indicatif", name:"Indicatif",
  usage:"Le mode de la réalité, des faits certains, vérifiables ou objectifs. C'est le mode le plus utilisé : il sert à raconter, décrire, informer, exposer des vérités générales ou des événements situés dans le temps (passé, présent, futur).",
  tenses:[
    simpleTense("ind-present","Présent",{
      ending1:END1.present, ending2:END2.present, etre:ETRE.present, avoir:AVOIR.present,
      ex1:{verb:"aimer",forms:AIMER.present}, ex2:{verb:"choisir",forms:CHOISIR.present}, ex3:g3Forms("present"),
      phrases:[
        {fr:"Elle travaille tous les jours dans ce bureau.", tag:"vérité habituelle"},
        {fr:"La Terre tourne autour du Soleil.", tag:"vérité générale"},
        {fr:"Je pars demain matin pour Lyon.", tag:"futur proche dans le discours"}
      ]
    }),
    composeTense("ind-passe-compose","Passé composé",{
      auxTense:"present",
      avoir: AVOIR.present.map(a=>a+" eu"), etre: AVOIR.present.map(a=>a+" été"),
      ex1:{verb:"aimer",forms:withAux(AIMER.participePasse,AVOIR.present)},
      ex2:{verb:"choisir",forms:withAux(CHOISIR.participePasse,AVOIR.present)},
      ex3:g3Composed("present"),
      phrases:[
        {fr:"J'ai terminé mon rapport hier soir.", tag:"action passée achevée"},
        {fr:"Elle est partie il y a une heure.", tag:"avec auxiliaire être"}
      ]
    }),
    simpleTense("ind-imparfait","Imparfait",{
      ending1:END1.imparfait, ending2:END2.imparfait, etre:ETRE.imparfait, avoir:AVOIR.imparfait,
      ex1:{verb:"aimer",forms:AIMER.imparfait}, ex2:{verb:"choisir",forms:CHOISIR.imparfait}, ex3:g3Forms("imparfait"),
      phrases:[
        {fr:"Quand j'étais enfant, nous habitions à la campagne.", tag:"description du passé"},
        {fr:"Il pleuvait sans cesse ce jour-là.", tag:"contexte / décor d'un récit"}
      ]
    }),
    composeTense("ind-plus-que-parfait","Plus-que-parfait",{
      auxTense:"imparfait",
      avoir: AVOIR.imparfait.map(a=>a+" eu"), etre: AVOIR.imparfait.map(a=>a+" été"),
      ex1:{verb:"aimer",forms:withAux(AIMER.participePasse,AVOIR.imparfait)},
      ex2:{verb:"choisir",forms:withAux(CHOISIR.participePasse,AVOIR.imparfait)},
      ex3:g3Composed("imparfait"),
      phrases:[
        {fr:"Quand je suis arrivé, il était déjà parti.", tag:"antériorité dans le passé"},
        {fr:"Elle avait fini ses études avant de déménager.", tag:"action antérieure à une autre action passée"}
      ]
    }),
    simpleTense("ind-passe-simple","Passé simple",{
      ending1:END1.passeSimple, ending2:END2.passeSimple, etre:ETRE.passeSimple, avoir:AVOIR.passeSimple,
      ex1:{verb:"aimer",forms:AIMER.passeSimple}, ex2:{verb:"choisir",forms:CHOISIR.passeSimple}, ex3:g3Forms("passeSimple"),
      phrases:[
        {fr:"Napoléon naquit en 1769 et mourut en 1821.", tag:"récit historique / littéraire"},
        {fr:"Soudain, elle se leva et quitta la salle.", tag:"action brève et achevée"}
      ]
    }),
    simpleTense("ind-futur","Futur simple",{
      ending1:END1.futur, ending2:END2.futur, etre:ETRE.futur, avoir:AVOIR.futur,
      ex1:{verb:"aimer",forms:AIMER.futur}, ex2:{verb:"choisir",forms:CHOISIR.futur}, ex3:g3Forms("futur"),
      phrases:[
        {fr:"Nous finirons ce projet avant la fin de l'année.", tag:"action future certaine"},
        {fr:"Tu fermeras la porte en sortant.", tag:"ordre atténué"}
      ]
    })
  ]
};

// ===================== SUBJONCTIF =====================
const subjonctif = {
  id:"subjonctif", name:"Subjonctif",
  usage:"Le mode du doute, du souhait, du sentiment, de la possibilité ou de l'obligation : ce que l'on imagine, redoute, désire ou juge nécessaire, sans certitude de réalisation. Souvent introduit par « que » après des verbes d'opinion à la forme négative, de volonté, d'émotion, ou des locutions comme « il faut que », « bien que ».",
  tenses:[
    simpleTense("subj-present","Présent",{
      ending1:END1.subjPresent, ending2:END2.subjPresent, etre:ETRE.subjPresent, avoir:AVOIR.subjPresent,
      ex1:{verb:"aimer",forms:AIMER.subjPresent}, ex2:{verb:"choisir",forms:CHOISIR.subjPresent}, ex3:g3Forms("subjPresent"),
      phrases:[
        {fr:"Il faut que tu finisses ce travail avant ce soir.", tag:"obligation"},
        {fr:"Je doute qu'il vienne à la réunion.", tag:"doute"},
        {fr:"Bien qu'elle soit fatiguée, elle continue.", tag:"concession"}
      ]
    }),
    composeTense("subj-passe","Passé",{
      auxTense:"subjPresent",
      avoir: AVOIR.subjPresent.map(a=>a+" eu"), etre: AVOIR.subjPresent.map(a=>a+" été"),
      ex1:{verb:"aimer",forms:withAux(AIMER.participePasse,AVOIR.subjPresent)},
      ex2:{verb:"choisir",forms:withAux(CHOISIR.participePasse,AVOIR.subjPresent)},
      ex3:g3Composed("subjPresent"),
      phrases:[
        {fr:"Je suis content qu'elle ait réussi son examen.", tag:"sentiment sur un fait accompli"},
        {fr:"Bien qu'il soit parti tôt, il a manqué le train.", tag:"antériorité + concession"}
      ]
    }),
    simpleTense("subj-imparfait","Imparfait (littéraire)",{
      ending1:["asse","asses","ât","assions","assiez","assent"],
      ending2:["isse","isses","ît","issions","issiez","issent"],
      etre:ETRE.subjImparfait || ["fusse","fusses","fût","fussions","fussiez","fussent"],
      avoir:AVOIR.subjImparfait || ["eusse","eusses","eût","eussions","eussiez","eussent"],
      ex1:{verb:"aimer",forms:["aimasse","aimasses","aimât","aimassions","aimassiez","aimassent"]},
      ex2:{verb:"choisir",forms:["choisisse","choisisses","choisît","choisissions","choisissiez","choisissent"]},
      ex3:[
        {verb:"aller",forms:["allasse","allasses","allât","allassions","allassiez","allassent"]},
        {verb:"faire",forms:["fisse","fisses","fît","fissions","fissiez","fissent"]},
        {verb:"venir",forms:["vinsse","vinsses","vînt","vinssions","vinssiez","vinssent"]},
        {verb:"prendre",forms:["prisse","prisses","prît","prissions","prissiez","prissent"]},
        {verb:"pouvoir",forms:["pusse","pusses","pût","pussions","pussiez","pussent"]}
      ],
      phrases:[
        {fr:"Elle souhaitait qu'il vînt la voir.", tag:"registre soutenu / littéraire"},
        {fr:"Il fallait qu'elle finît avant la nuit.", tag:"usage classique, rare à l'oral"}
      ]
    })
  ]
};

// ===================== CONDITIONNEL =====================
const conditionnel = {
  id:"conditionnel", name:"Conditionnel",
  usage:"Le mode de l'hypothèse, du souhait poli, du conseil ou de l'information non confirmée. Le conditionnel présent exprime un fait soumis à une condition ou une politesse ; le conditionnel passé exprime un regret ou un fait non réalisé dans le passé.",
  tenses:[
    simpleTense("cond-present","Présent",{
      ending1:END1.conditionnel, ending2:END2.conditionnel, etre:ETRE.conditionnel, avoir:AVOIR.conditionnel,
      ex1:{verb:"aimer",forms:AIMER.conditionnel}, ex2:{verb:"choisir",forms:CHOISIR.conditionnel}, ex3:g3Forms("conditionnel"),
      phrases:[
        {fr:"Pourriez-vous m'aider, s'il vous plaît ?", tag:"politesse"},
        {fr:"Si j'avais le temps, je voyagerais davantage.", tag:"hypothèse (si + imparfait)"},
        {fr:"Selon certaines sources, le ministre démissionnerait.", tag:"information non confirmée"}
      ]
    }),
    composeTense("cond-passe","Passé",{
      auxTense:"conditionnel",
      avoir: AVOIR.conditionnel.map(a=>a+" eu"), etre: AVOIR.conditionnel.map(a=>a+" été"),
      ex1:{verb:"aimer",forms:withAux(AIMER.participePasse,AVOIR.conditionnel)},
      ex2:{verb:"choisir",forms:withAux(CHOISIR.participePasse,AVOIR.conditionnel)},
      ex3:g3Composed("conditionnel"),
      phrases:[
        {fr:"J'aurais aimé venir, mais je n'ai pas pu.", tag:"regret"},
        {fr:"Si tu m'avais prévenu, je serais arrivé à l'heure.", tag:"hypothèse irréelle du passé"}
      ]
    })
  ]
};

// ===================== IMPÉRATIF =====================
const imperatif = {
  id:"imperatif", name:"Impératif",
  usage:"Le mode de l'ordre, du conseil, de l'interdiction ou de la suggestion directe. Il ne se conjugue qu'à trois personnes (tu, nous, vous) et s'emploie sans pronom sujet.",
  impersonalNote:"L'impératif ne possède que 3 formes (pas de je / il / vous-politesse séparé / ils) : tu, nous, vous.",
  tenses:[
    {id:"imp-present", name:"Présent", type:"simple", impersonal:true,
      etre:[ETRE.imperatif[0],ETRE.imperatif[1],ETRE.imperatif[2]],
      avoir:[AVOIR.imperatif[0],AVOIR.imperatif[1],AVOIR.imperatif[2]],
      ending1:["e","ons","ez"], ending2:["is","issons","issez"],
      ex1:{verb:"aimer",forms:["aime","aimons","aimez"]},
      ex2:{verb:"choisir",forms:["choisis","choisissons","choisissez"]},
      ex3:[
        {verb:"aller",forms:["va","allons","allez"]},
        {verb:"faire",forms:["fais","faisons","faites"]},
        {verb:"venir",forms:["viens","venons","venez"]},
        {verb:"prendre",forms:["prends","prenons","prenez"]},
        {verb:"pouvoir",forms:["—","—","—"]}
      ],
      phrases:[
        {fr:"Ferme la fenêtre, il fait froid.", tag:"ordre"},
        {fr:"Ne soyons pas en retard.", tag:"suggestion collective"},
        {fr:"Prenez le temps de relire votre texte.", tag:"conseil"}
      ]
    },
    {id:"imp-passe", name:"Passé", type:"compose", impersonal:true,
      auxTenseLabel:"à l'impératif présent",
      etre:["sois été","soyons été","soyez été"],
      avoir:["aie eu","ayons eu","ayez eu"],
      ex1:{verb:"aimer",forms:["aie aimé","ayons aimé","ayez aimé"]},
      ex2:{verb:"choisir",forms:["aie choisi","ayons choisi","ayez choisi"]},
      ex3:[
        {verb:"aller",forms:["sois allé(e)","soyons allé(e)s","soyez allé(e)(s)"]},
        {verb:"faire",forms:["aie fait","ayons fait","ayez fait"]},
        {verb:"venir",forms:["sois venu(e)","soyons venu(e)s","soyez venu(e)(s)"]},
        {verb:"prendre",forms:["aie pris","ayons pris","ayez pris"]},
        {verb:"pouvoir",forms:["—","—","—"]}
      ],
      phrases:[
        {fr:"Aie terminé ce travail avant mon retour.", tag:"ordre avec délai (rare)"},
        {fr:"Soyez rentrés avant minuit.", tag:"exigence d'un état accompli"}
      ]
    }
  ]
};

// ===================== INFINITIF (impersonnel) =====================
const infinitif = {
  id:"infinitif", name:"Infinitif",
  usage:"La forme « nominale » du verbe, non conjuguée selon les personnes. Il sert de sujet, de complément, ou s'emploie après une préposition. Le mode du verbe « à l'état pur », tel qu'on le trouve dans le dictionnaire.",
  impersonalNote:"L'infinitif n'a pas de personne : il existe seulement à la forme présente et passée.",
  tenses:[
    {id:"inf-present", name:"Présent", type:"simple", noPersonTable:true,
      examplesFlat:[{label:"1er groupe",val:"aimer"},{label:"2e groupe",val:"choisir / finir"},{label:"3e groupe",val:"aller, faire, venir, prendre, pouvoir"},{label:"être / avoir",val:"être · avoir"}],
      phrases:[
        {fr:"Voyager forme la jeunesse.", tag:"sujet du verbe"},
        {fr:"Il aime lire avant de dormir.", tag:"complément d'objet"},
        {fr:"Après avoir mangé, nous sommes partis.", tag:"voir infinitif passé"}
      ]
    },
    {id:"inf-passe", name:"Passé", type:"compose", noPersonTable:true,
      rule:"auxiliaire à l'infinitif (être / avoir) + participe passé",
      examplesFlat:[{label:"1er groupe",val:"avoir aimé"},{label:"2e groupe",val:"avoir choisi"},{label:"3e groupe (être)",val:"être allé / être venu"},{label:"3e groupe (avoir)",val:"avoir fait, avoir pris, avoir pu"}],
      phrases:[
        {fr:"Après être arrivés, ils ont déposé leurs valises.", tag:"antériorité"},
        {fr:"Merci d'avoir répondu si vite.", tag:"après une préposition"}
      ]
    }
  ]
};

// ===================== PARTICIPE (impersonnel) =====================
const participe = {
  id:"participe", name:"Participe",
  usage:"Forme adjective ou verbale hybride, utilisée pour qualifier, pour former les temps composés, ou pour exprimer la simultanéité dans une proposition participiale.",
  impersonalNote:"Le participe ne se conjugue pas selon les personnes ; il s'accorde parfois comme un adjectif.",
  tenses:[
    {id:"part-present", name:"Présent", type:"simple", noPersonTable:true,
      examplesFlat:[{label:"1er groupe",val:"aimant"},{label:"2e groupe",val:"choisissant / finissant"},{label:"3e groupe",val:"allant, faisant, venant, prenant, pouvant"},{label:"être / avoir",val:"étant · ayant"}],
      phrases:[
        {fr:"Voyant la pluie, elle a pris son parapluie.", tag:"proposition participiale (cause)"},
        {fr:"Un enfant souriant nous a salués.", tag:"valeur adjectivale"}
      ]
    },
    {id:"part-passe", name:"Passé", type:"compose", noPersonTable:true,
      rule:"forme employée seule (valeur d'adjectif) ou avec être / avoir pour former les temps composés",
      examplesFlat:[{label:"1er groupe",val:"aimé(e)(s)"},{label:"2e groupe",val:"choisi(e)(s)"},{label:"3e groupe",val:"allé, fait, venu, pris, pu"},{label:"être / avoir",val:"été · eu"}],
      phrases:[
        {fr:"La porte fermée, plus aucun bruit n'entrait.", tag:"valeur adjectivale / proposition participiale"},
        {fr:"Une fois le travail terminé, ils sont rentrés.", tag:"antériorité"}
      ]
    }
  ]
};

// ===================== GÉRONDIF (impersonnel) =====================
const gerondif = {
  id:"gerondif", name:"Gérondif",
  usage:"Forme invariable en « en + participe présent », qui exprime la simultanéité, la manière ou la condition par rapport à l'action principale. Le sujet du gérondif est toujours le même que celui de la proposition principale.",
  impersonalNote:"Le gérondif est invariable : une seule forme, quelle que soit la personne.",
  tenses:[
    {id:"ger-present", name:"Présent", type:"simple", noPersonTable:true,
      examplesFlat:[{label:"1er groupe",val:"en aimant"},{label:"2e groupe",val:"en choisissant"},{label:"3e groupe",val:"en allant, en faisant, en venant, en prenant, en pouvant"},{label:"être / avoir",val:"en étant · en ayant"}],
      phrases:[
        {fr:"Elle écoute de la musique en travaillant.", tag:"simultanéité"},
        {fr:"C'est en forgeant qu'on devient forgeron.", tag:"manière / moyen"},
        {fr:"En partant tôt, vous éviterez les embouteillages.", tag:"condition"}
      ]
    }
  ]
};

const MODES = [indicatif, subjonctif, conditionnel, imperatif, infinitif, participe, gerondif];

// ===================== LOIS DU "SI" =====================
const SI_LAWS = [
  {
    title:"Loi n°1 — Fait réel / habituel",
    formula:"SI + PRÉSENT → PRÉSENT, FUTUR ou IMPÉRATIF",
    desc:"Exprime une condition réalisable, un fait habituel ou une conséquence certaine dans le présent ou l'avenir.",
    examples:[
      {fr:"Si tu chauffes l'eau à 100°C, elle bout.", tag:"si + présent → présent (vérité générale)"},
      {fr:"Si tu travailles bien, tu réussiras.", tag:"si + présent → futur simple"},
      {fr:"Si tu as froid, ferme la fenêtre.", tag:"si + présent → impératif"}
    ]
  },
  {
    title:"Loi n°2 — Hypothèse non réelle dans le présent / futur",
    formula:"SI + IMPARFAIT → CONDITIONNEL PRÉSENT",
    desc:"Exprime une hypothèse irréelle ou peu probable, dont la conséquence imaginée se situe dans le présent ou le futur.",
    examples:[
      {fr:"Si j'avais plus de temps, je voyagerais davantage.", tag:"hypothèse irréelle actuelle"},
      {fr:"Si elle gagnait au loto, elle achèterait une maison.", tag:"hypothèse peu probable"}
    ]
  },
  {
    title:"Loi n°3 — Hypothèse irréelle dans le passé",
    formula:"SI + PLUS-QUE-PARFAIT → CONDITIONNEL PASSÉ",
    desc:"Exprime un regret ou une condition non réalisée dans le passé, dont la conséquence imaginée appartient elle aussi au passé.",
    examples:[
      {fr:"Si j'avais su, je ne serais pas venu.", tag:"regret / fait non réalisé"},
      {fr:"Si vous m'aviez prévenu, j'aurais préparé le dîner.", tag:"condition passée non remplie"}
    ]
  },
  {
    title:"Règle d'or",
    formula:"On ne met JAMAIS le futur ni le conditionnel juste après « si » de condition",
    desc:"« Si » introduisant une condition est toujours suivi du présent, de l'imparfait ou du plus-que-parfait — jamais directement du futur ou du conditionnel (sauf le « si » interrogatif indirect, qui suit une autre règle).",
    examples:[
      {fr:"❌ Si tu viendras, je serai content. → ✔ Si tu viens, je serai content.", tag:"erreur fréquente à éviter"}
    ]
  }
];
