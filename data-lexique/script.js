// =========================================================
// CONNECTEURS LOGIQUES & EXPRESSIONS
// =========================================================
const CONNECTEURS = [
  { cat:"logique", id:"addition",    title:"Addition",    items:["de plus","en outre","par ailleurs","aussi","également","de surcroît","en plus"] },
  { cat:"logique", id:"opposition",  title:"Opposition",  items:["mais","cependant","toutefois","pourtant","néanmoins","en revanche","au contraire","or","malgré cela"] },
  { cat:"logique", id:"concession",  title:"Concession",  items:["bien que","quoique","même si","certes","malgré","en dépit de","quand même"] },
  { cat:"logique", id:"cause",       title:"Cause",       items:["parce que","puisque","comme","étant donné que","vu que","grâce à","à cause de","en raison de","faute de","sous prétexte de"] },
  { cat:"logique", id:"consequence", title:"Conséquence", items:["donc","ainsi","alors","c'est pourquoi","de sorte que","par conséquent","si bien que","tellement que","si... que","au point que"] },
  { cat:"logique", id:"but",         title:"But",         items:["pour","afin de","afin que","dans le but de","de peur que","de manière à"] },
  { cat:"logique", id:"condition",   title:"Condition",   items:["si","à condition que","pourvu que","à moins que","au cas où","sauf si"] },
  { cat:"logique", id:"comparaison", title:"Comparaison", items:["comme","autant que","plus que","moins que","de même que","contrairement à","aussi... que"] },
  { cat:"logique", id:"illustration",title:"Illustration",items:["par exemple","notamment","ainsi"] },
  { cat:"logique", id:"conclusion",  title:"Conclusion",  items:["enfin","en conclusion","pour conclure","en somme","bref"] },

  { cat:"expressions", id:"quantite",   title:"Expressions de quantité",        items:["beaucoup de","peu de","trop de","assez de","autant de","tant de","combien de"] },
  { cat:"expressions", id:"temps",      title:"Expressions de temps",            items:["depuis","pendant","il y a","dans","dès","jusqu'à","avant","après","auparavant","désormais"] },
  { cat:"expressions", id:"negation",   title:"Négations",                       items:["ne... pas","ne... plus","ne... jamais","ne... rien","ne... personne","ne... aucun","ne... guère","ne... que","ne... ni... ni"] },
  { cat:"expressions", id:"interrogation",title:"Interrogations",                items:["est-ce que","inversion sujet-verbe","intonation montante","lequel / laquelle","lequel de..."] },
  { cat:"expressions", id:"frequentes", title:"Expressions verbales fréquentes", items:["avoir beau","venir de","être en train de","faillir","manquer de","finir par","ne faire que","il vaut mieux","il suffit de","il s'agit de"] },

  { cat:"nuances", id:"nuances", title:"Nuances de sens à maîtriser", pairs:[
      ["encore","toujours"], ["déjà","encore"], ["aussi","non plus"], ["ci","là"], ["ici","là-bas"], ["ceci","cela"],
      ["entre","parmi"], ["depuis / il y a / pendant","dans"], ["car / parce que","puisque"],
      ["donc / alors","ainsi / par conséquent"], ["néanmoins / cependant","toutefois / pourtant"],
      ["malgré","bien que (malgré que à éviter)"], ["dont","duquel"], ["y","en"], ["lequel","auquel / duquel"]
    ]
  },

  { cat:"soutenues", id:"soutenues", title:"Expressions très soutenues", items:[
      "force est de constater","il n'en demeure pas moins","en l'occurrence","de surcroît","à maints égards",
      "à bien des égards","en filigrane","à titre subsidiaire","en amont","en aval","en définitive",
      "à l'aune de","en vertu de","au demeurant","de facto","a fortiori","mutatis mutandis","qui plus est",
      "en substance","en l'espèce"
    ]
  }
];

const CONNECTEUR_CATS = [
  {id:"logique",      label:"Connecteurs logiques"},
  {id:"expressions",  label:"Expressions fonctionnelles"},
  {id:"nuances",      label:"Nuances de sens"},
  {id:"soutenues",    label:"Registre très soutenu"}
];

// =========================================================
// VOCABULAIRE THÉMATIQUE C1/C2
// =========================================================
const VOCAB_GROUPS = [

  { cat:"themes", id:"opinion", title:"Opinion / réflexion", words:[
      ["étayer",       "appuyer une idée avec des arguments ou des preuves solides"],
      ["corroborer",   "confirmer ce qu'on disait déjà avec un élément supplémentaire"],
      ["infirmer",     "prouver qu'une idée est fausse"],
      ["nuancer",      "dire que c'est plus compliqué que ça, éviter les généralités"],
      ["réfuter",      "démontrer clairement qu'un argument est faux"],
      ["alléguer",     "affirmer quelque chose sans le prouver"],
      ["conjecturer",  "supposer sans en être certain"],
      ["présumer",     "supposer que quelque chose est probable"],
      ["arguer",       "utiliser un fait comme argument pour défendre sa position"],
      ["préconiser",   "recommander fortement une solution"],
      ["exhorter",     "pousser quelqu'un très fortement à faire quelque chose"],
      ["stigmatiser",  "pointer publiquement du doigt, dénoncer avec insistance"],
      ["fustiger",     "critiquer très sévèrement, attaquer verbalement"],
      ["vilipender",   "critiquer avec mépris, parler en très mal de"],
      ["décrier",      "dire beaucoup de mal de, chercher à discréditer"],
      ["entériner",    "valider officiellement une décision déjà prise"],
      ["entacher",     "salir une réputation, laisser une mauvaise impression durable"],
      ["entamer",      "commencer, aborder un sujet ou une action"],
      ["entraver",     "empêcher d'avancer, bloquer"],
      ["annihiler",    "détruire complètement, réduire à rien"]
    ]
  },

  { cat:"themes", id:"societe", title:"Société", words:[
      ["précarité",     "situation instable où on manque de sécurité (emploi, logement...)"],
      ["paupérisation", "fait de devenir progressivement plus pauvre"],
      ["marginalisation","exclusion progressive d'une personne ou d'un groupe de la société"],
      ["clivage",       "division forte entre deux groupes aux opinions opposées"],
      ["cohésion",      "unité d'un groupe, fait d'être soudés ensemble"],
      ["résilience",    "capacité à surmonter une épreuve difficile et à rebondir"],
      ["essor",         "développement rapide et positif de quelque chose"],
      ["déclin",        "baisse progressive, perte d'importance ou de puissance"],
      ["essoufflement", "perte de dynamisme, élan qui s'affaiblit avec le temps"],
      ["mutation",      "transformation profonde et progressive d'une situation"],
      ["fracture",      "séparation importante entre deux groupes (sociale, numérique...)"],
      ["ségrégation",   "séparation forcée de groupes de personnes selon des critères arbitraires"],
      ["hégémonie",     "domination d'un pays ou d'un groupe sur tous les autres"],
      ["prépondérance", "rôle dominant, supériorité nette sur les autres"],
      ["disparité",     "écart important entre deux situations ou deux groupes"]
    ]
  },

  { cat:"themes", id:"economie", title:"Économie", words:[
      ["austérité",       "politique qui réduit fortement les dépenses pour rééquilibrer les finances"],
      ["inflationniste",  "qui provoque une hausse des prix"],
      ["spéculation",     "acheter pour revendre plus cher en pariant sur l'avenir"],
      ["rentabilité",     "capacité à générer des bénéfices, à être profitable"],
      ["solvabilité",     "capacité à payer ses dettes"],
      ["conjoncture",     "état de la situation économique à un moment précis"],
      ["croissance atone","croissance très faible, quasi inexistante"],
      ["récession",       "période de baisse économique qui dure au moins deux trimestres"],
      ["délocalisation",  "transférer une activité dans un autre pays, souvent moins cher"],
      ["compétitivité",   "capacité d'une entreprise ou d'un pays à faire mieux que ses concurrents"]
    ]
  },

  { cat:"themes", id:"politique", title:"Politique", words:[
      ["gouvernance",  "façon de gérer et d'organiser le pouvoir, les décisions collectives"],
      ["souveraineté", "liberté d'un État à décider seul pour lui-même"],
      ["légitimité",   "caractère reconnu comme juste et justifié par tous"],
      ["ingérence",    "intervention non sollicitée dans les affaires d'un autre État"],
      ["arbitrage",    "décision qui tranche entre deux options, deux intérêts opposés"],
      ["consensus",    "accord général accepté par tous les membres d'un groupe"],
      ["dissension",   "désaccord profond à l'intérieur d'un groupe ou d'un parti"],
      ["dissidence",   "opposition active à un régime ou à une autorité"],
      ["diplomatique", "qui concerne les relations officielles entre États"],
      ["géopolitique", "analyse des rapports de force entre nations à l'échelle mondiale"]
    ]
  },

  { cat:"themes", id:"environnement", title:"Environnement", words:[
      ["biodiversité",         "diversité de toutes les espèces vivantes sur Terre"],
      ["anthropique",          "causé par l'activité humaine (pollution, déforestation...)"],
      ["décarbonation",        "réduction des émissions de CO₂ pour lutter contre le réchauffement"],
      ["résilience climatique","capacité d'un territoire à s'adapter aux changements climatiques"],
      ["surexploitation",      "utiliser une ressource bien au-delà de ce qu'elle peut supporter"],
      ["raréfaction",          "fait de devenir de plus en plus rare, de diminuer"],
      ["érosion",              "usure progressive et destruction lente (des sols, des côtes, des valeurs...)"],
      ["déforestation",        "destruction massive des forêts, souvent pour l'agriculture"],
      ["durabilité",           "capacité à durer dans le temps sans épuiser les ressources"],
      ["soutenabilité",        "possibilité de maintenir un système sur le long terme sans le dégrader"]
    ]
  },

  { cat:"classes", id:"verbes-c2", title:"Verbes C2", words:[
      ["appréhender",    "comprendre en profondeur, ou bien redouter quelque chose"],
      ["amorcer",        "commencer, lancer un processus ou une action"],
      ["consolider",     "rendre plus solide, stabiliser ce qui existe"],
      ["pérenniser",     "faire durer dans le temps, assurer la continuité"],
      ["fragiliser",     "affaiblir, rendre moins résistant ou moins stable"],
      ["exacerber",      "intensifier, aggraver un sentiment ou une tension"],
      ["atténuer",       "réduire l'intensité de quelque chose, adoucir"],
      ["pallier",        "compenser un manque, remédier à un défaut — SANS 'à' !"],
      ["susciter",       "provoquer, faire naître une réaction ou un sentiment"],
      ["engendrer",      "produire, être à l'origine de quelque chose"],
      ["induire",        "entraîner comme conséquence logique et directe"],
      ["influer sur",    "avoir un effet sur, agir sur quelque chose (intransitif indirect)"],
      ["découler de",    "résulter de, être la conséquence directe de"],
      ["émaner de",      "provenir de, avoir pour source ou origine"],
      ["ébranler",       "secouer, mettre sérieusement en doute, déstabiliser"],
      ["compromettre",   "mettre en danger, risquer de faire échouer"],
      ["prévaloir",      "l'emporter sur les autres, avoir plus d'importance"],
      ["préfigurer",     "annoncer ce qui va se passer, être un signe avant-coureur"],
      ["se heurter à",   "rencontrer un obstacle, faire face à une difficulté"],
      ["se solder par",  "aboutir à un résultat (souvent négatif)"],
      ["se traduire par","avoir comme résultat visible, se manifester concrètement par"],
      ["se cantonner à", "se limiter à, rester dans un domaine précis sans aller plus loin"],
      ["se prémunir contre","se protéger à l'avance contre un risque"],
      ["se conformer à", "respecter et suivre une règle ou une norme"],
      ["se départir de", "abandonner une attitude ou un comportement habituel"],
      ["se prévaloir de","faire valoir un avantage qu'on possède, tirer profit de"],
      ["se soustraire à","éviter, échapper à une obligation ou une contrainte"],
      ["se résigner à",  "accepter sans pouvoir changer, se faire à l'idée"],
      ["se raviser",     "changer d'avis après une première décision"],
      ["se méprendre",   "se tromper sur le sens ou la nature de quelque chose"]
    ]
  },

  { cat:"classes", id:"adjectifs-c2", title:"Adjectifs C2", words:[
      ["intrinsèque",   "propre à la chose en elle-même, pas lié aux circonstances extérieures"],
      ["inhérent",      "qui fait naturellement partie de quelque chose, inséparable"],
      ["ambivalent",    "qui ressent deux sentiments opposés en même temps"],
      ["paradoxal",     "contraire à ce qu'on attendrait logiquement, surprenant"],
      ["concomitant",   "qui se produit en même temps qu'autre chose, simultané"],
      ["subséquent",    "qui vient juste après, qui suit dans l'ordre chronologique"],
      ["disparate",     "très différents entre eux et mal assortis, sans cohérence"],
      ["tangible",      "concret et réel, que l'on peut mesurer ou vérifier"],
      ["fallacieux",    "trompeur, qui donne une fausse impression pour induire en erreur"],
      ["biaisé",        "partial, pas objectif, influencé par des préjugés"],
      ["équivoque",     "ambigu, qui peut être compris de plusieurs façons différentes"],
      ["infondé",       "sans preuve solide, sans base réelle"],
      ["pérenne",       "qui dure longtemps, stable dans le temps"],
      ["récurrent",     "qui revient régulièrement, qui se répète souvent"],
      ["sporadique",    "qui se produit de façon irrégulière et rare"],
      ["latent",        "qui existe mais ne se manifeste pas encore, caché"],
      ["manifeste",     "évident, clair, que personne ne peut nier"],
      ["insidieux",     "dangereux parce que progressif et difficile à détecter"],
      ["exorbitant",    "excessif, bien trop important, totalement disproportionné"],
      ["dérisoire",     "tellement petit qu'on ne peut pas le prendre au sérieux"],
      ["prolifique",    "très productif, qui produit beaucoup et régulièrement"],
      ["salutaire",     "bénéfique, qui fait du bien même si c'est difficile à vivre"],
      ["fastidieux",    "long, ennuyeux et répétitif, qui requiert beaucoup de patience"],
      ["préjudiciable", "qui cause du tort à quelqu'un, nuisible"],
      ["substantiel",   "important en quantité ou en valeur, considérable"]
    ]
  },

  { cat:"classes", id:"adverbes-c2", title:"Adverbes C2", words:[
      ["ostensiblement",    "de façon visible et intentionnelle, pour que tout le monde le voie"],
      ["intrinsèquement",   "par nature, en lui-même, sans tenir compte des circonstances extérieures"],
      ["corrélativement",   "en relation directe et proportionnelle avec autre chose"],
      ["concomitamment",    "de façon simultanée, en même temps qu'autre chose"],
      ["subsidiairement",   "de façon secondaire, comme argument ou point supplémentaire"],
      ["paradoxalement",    "de façon surprenante et contradictoire avec ce qu'on attendrait"],
      ["tacitement",        "sans le dire explicitement, de façon implicite et sous-entendue"],
      ["résolument",        "avec beaucoup de détermination et de fermeté, sans hésiter"],
      ["singulièrement",    "de façon particulière, plus que les autres, notamment"],
      ["indéniablement",    "sans aucun doute possible, de façon absolument certaine"],
      ["incontestablement", "de façon indiscutable, que personne ne peut nier"],
      ["arbitrairement",    "sans raison logique ou juste, de façon injustifiée"],
      ["implicitement",     "sans le dire clairement, mais de façon sous-entendue"],
      ["explicitement",     "en le disant clairement et sans laisser de place à l'ambiguïté"]
    ]
  },

  { cat:"classes", id:"noms-c2", title:"Noms très avancés", words:[
      ["acuité",       "finesse et précision dans l'analyse ou la perception"],
      ["allégation",   "affirmation présentée sans preuve pour appuyer une accusation"],
      ["ambivalence",  "état de ressentir deux sentiments opposés en même temps"],
      ["arbitrage",    "décision qui tranche entre deux options ou deux intérêts en conflit"],
      ["avènement",    "arrivée au pouvoir ou début d'une nouvelle époque importante"],
      ["corollaire",   "conséquence directe et logique d'une idée ou d'un fait principal"],
      ["dichotomie",   "division en deux parties complètement opposées"],
      ["dissension",   "désaccord profond au sein d'un groupe, source de divisions"],
      ["effervescence","agitation intense, enthousiasme collectif et dynamisme"],
      ["écueil",       "obstacle ou piège difficile à éviter, risque caché"],
      ["emprise",      "influence forte et durable exercée sur quelqu'un"],
      ["essor",        "développement rapide et positif d'une activité ou d'un domaine"],
      ["entrave",      "obstacle concret qui empêche d'avancer ou d'agir librement"],
      ["éventualité",  "possibilité que quelque chose se produise dans le futur"],
      ["faisabilité",  "possibilité concrète et pratique de réaliser quelque chose"],
      ["fondement",    "base solide sur laquelle repose une idée, une action ou un système"],
      ["hégémonie",    "domination d'un État ou d'un groupe sur tous les autres"],
      ["imbroglio",    "situation confuse et embrouillée, très difficile à démêler"],
      ["inertie",      "résistance naturelle au changement, tendance à rester immobile"],
      ["ingérence",    "intervention non sollicitée dans les affaires d'autrui"],
      ["légitimité",   "caractère de ce qui est justifié et reconnu comme valide"],
      ["levier",       "moyen d'action efficace pour obtenir un résultat"],
      ["paradigme",    "modèle de référence dominant, façon de voir le monde à une époque"],
      ["postulat",     "affirmation de départ acceptée sans démonstration, hypothèse de base"],
      ["prérogative",  "droit ou avantage exclusif attaché à une fonction ou un statut"],
      ["réticence",    "hésitation, résistance intérieure à faire ou accepter quelque chose"],
      ["résurgence",   "réapparition de quelque chose après une période d'absence"],
      ["revirement",   "changement brusque et inattendu d'opinion ou de direction"],
      ["viabilité",    "capacité d'un projet ou d'un système à fonctionner durablement"]
    ]
  }
];

const VOCAB_CATS = [
  {id:"themes", label:"Vocabulaire thématique"},
  {id:"classes", label:"Listes par classe grammaticale"}
];

// =========================================================
// PIÈGES TCF / TV5 MONDE — TOUTES CATÉGORIES
// =========================================================
const PIEGES_GROUPS = [

  // ─── MODE VERBAL ─────────────────────────────────────────
  {
    cat:"mode", id:"subj-vs-ind",
    title:"Subjonctif vs Indicatif — le piège classique n°1 du TCF",
    type:"bicolumn",
    cols:[
      { label:"SUBJONCTIF", accent:"violet", items:[
          "bien que, quoique, pour que, afin que, avant que",
          "à moins que, pourvu que, de peur que, jusqu'à ce que",
          "vouloir / craindre / douter / regretter / être content que",
          "il faut / il est nécessaire / important / dommage que",
          "il semble que  ← sans pronom personnel",
          "le seul/premier/dernier + proposition relative",
          "superlatif + relative : « le meilleur que j'aie lu »",
          "penser/croire/trouver que → forme NÉGATIVE ou INTERROGATIVE"
        ]
      },
      { label:"INDICATIF", accent:"amber", items:[
          "parce que, puisque, car, étant donné que",
          "quand, lorsque, dès que, aussitôt que",
          "après que  ← TOUJOURS indicatif (erreur fréquente au TCF !)",
          "espérer que, savoir que",
          "penser/croire/trouver que → forme AFFIRMATIVE",
          "il est certain / évident / indéniable / sûr que",
          "il ME semble que  ← avec pronom personnel"
        ]
      }
    ]
  },

  {
    cat:"mode", id:"subj-pieges-detail",
    title:"Pièges précis : il semble que vs il me semble que",
    type:"rules",
    rules:[
      { label:"⚠ Le piège le plus fréquent en TCF",
        items:[
          "Il semble qu'il SOIT malade.  (semble sans pronom → subjonctif)",
          "Il me semble qu'il EST malade. (me semble avec pronom → indicatif)",
          "Il nous semble qu'elle A raison. (avec pronom → indicatif)",
          "Il paraît qu'il EST parti. (il paraît → indicatif)",
          "Il me paraît qu'il a tort. (avec pronom → indicatif)"
        ]
      },
      { label:"⚠ Après que ≠ Avant que",
        items:[
          "Avant qu'il PARTE → subjonctif ✓",
          "Après qu'il EST parti → indicatif ✓  (souvent fautement mis au subjonctif !)",
          "Après qu'il SOIT parti → ✗ FAUTE CLASSIQUE AU TCF"
        ]
      }
    ]
  },

  // ─── CONNECTEURS ─────────────────────────────────────────
  {
    cat:"connecteurs", id:"depuis-pendant-dans-en",
    title:"Depuis / Pendant / Dans / En — 4 mots, 4 sens différents",
    type:"compare",
    rows:[
      { left:"depuis + durée",  right:"action qui continue encore maintenant",             ex:"Je vis ici depuis 3 ans. (j'y vis toujours)" },
      { left:"pendant + durée", right:"durée passée, terminée",                            ex:"Il a plu pendant deux jours. (c'est fini)" },
      { left:"dans + durée",    right:"délai à venir, à partir de maintenant",             ex:"Je pars dans une heure. (futur)" },
      { left:"en + durée",      right:"temps nécessaire pour accomplir une action",        ex:"Elle a fini en 20 minutes. (durée de réalisation)" }
    ]
  },

  {
    cat:"connecteurs", id:"car-parce-puisque",
    title:"Car / Parce que / Puisque — les nuances",
    type:"compare",
    rows:[
      { left:"parce que", right:"répond directement à la question « pourquoi ? »",         ex:"Il est absent parce qu'il est malade." },
      { left:"car",       right:"justifie une affirmation déjà posée (registre écrit)",    ex:"Elle a réussi, car elle avait travaillé." },
      { left:"puisque",   right:"cause connue de tous ou présentée comme évidente",        ex:"Puisque tu insistes, je reste." }
    ]
  },

  {
    cat:"connecteurs", id:"malgre-bienque",
    title:"Malgré / Bien que / Malgré que — le piège orthographique",
    type:"rules",
    rules:[
      { label:"✓ MALGRÉ + nom (sans verbe)",
        items:[
          "Malgré la pluie, il est venu.",
          "Malgré ses efforts, il a échoué.",
          "Malgré tout, je continue."
        ]
      },
      { label:"✓ BIEN QUE / QUOIQUE + subjonctif",
        items:[
          "Bien qu'il soit fatigué, il continue.",
          "Quoiqu'elle ait réussi, elle reste modeste."
        ]
      },
      { label:"✗ MALGRÉ QUE → À ÉVITER absolument",
        items:[
          "Forme jugée fautive par l'Académie française.",
          "Remplacer TOUJOURS par « bien que + subjonctif ».",
          "✗ Malgré qu'il soit venu → ✓ Bien qu'il soit venu"
        ]
      }
    ]
  },

  {
    cat:"connecteurs", id:"opposition-synonymes",
    title:"Cependant / Pourtant / Néanmoins / Toutefois / En revanche",
    type:"rules",
    rules:[
      { label:"Ces 5 mots expriment l'opposition — mais avec des nuances",
        items:[
          "CEPENDANT — opposition ou restriction, registre neutre à soutenu",
          "POURTANT — insiste sur le fait que le résultat est SURPRENANT malgré ce qui précède",
          "NÉANMOINS — opposition forte après une concession déjà faite (très soutenu)",
          "TOUTEFOIS — restriction qui nuance sans totalement contredire (soutenu)",
          "EN REVANCHE — contraste symétrique entre deux éléments (plus courant à l'oral)"
        ]
      }
    ]
  },

  {
    cat:"connecteurs", id:"or-donc",
    title:"Or / Donc / Ainsi / Par conséquent — à ne pas confondre",
    type:"compare",
    rows:[
      { left:"or",              right:"introduit un fait inattendu qui vient contredire ou nuancer le raisonnement",  ex:"Il semblait honnête ; or, il mentait." },
      { left:"donc",            right:"conséquence logique directe",                                                   ex:"Il était absent, donc il n'a pas su." },
      { left:"ainsi",           right:"conséquence + illustration, registre plus soutenu",                             ex:"Ainsi, il faudra tout reprendre." },
      { left:"par conséquent",  right:"conséquence formelle, soutenu",                                                 ex:"Par conséquent, la réunion est reportée." }
    ]
  },

  // ─── PARTICIPE PASSÉ ─────────────────────────────────────
  {
    cat:"participe", id:"pp-avoir",
    title:"Participe passé avec AVOIR — règles & exceptions",
    type:"rules",
    rules:[
      { label:"Règle de base : COD AVANT le verbe → accord",
        items:[
          "Les lettres qu'il a écrites. ('que' = les lettres f. pl. → accord)",
          "Il a écrit des lettres. (COD 'des lettres' APRÈS → pas d'accord)",
          "Combien de pages as-tu lues ? ('combien de pages' avant → accord f. pl.)"
        ]
      },
      { label:"⚠ FAIRE + infinitif → TOUJOURS INVARIABLE",
        items:[
          "Les lettres qu'il a fait envoyer. (pas d'accord même si COD fém. avant)",
          "La chanteuse qu'il a fait venir. (invariable)",
          "Astuce : on dit 'il a fait envoyer les lettres' → 'fait' reste 'fait'"
        ]
      },
      { label:"⚠ Verbes intransitifs (coûter, valoir, peser, durer, courir, dormir) → INVARIABLES",
        items:[
          "Les deux heures qu'il a couru. (courir = intransitif → pas d'accord)",
          "Les 20 km qu'il a marché. (idem)",
          "Les efforts que ce travail lui a coûtés. ← Exception : emploi transitif = accord"
        ]
      }
    ]
  },

  {
    cat:"participe", id:"pp-pronominaux",
    title:"Participe passé des verbes pronominaux",
    type:"rules",
    rules:[
      { label:"SE = COD avant le verbe → ACCORD",
        items:[
          "Elle s'est lavée. (se = elle, COD avant → accord f.)",
          "Ils se sont regardés. (se = l'un l'autre, COD avant → accord m. pl.)",
          "Elle s'est blessée. (se = elle, COD → accord)"
        ]
      },
      { label:"SE = COI → PAS D'ACCORD",
        items:[
          "Elle s'est lavé les mains. (COD = 'les mains', après → pas d'accord)",
          "Ils se sont parlé. ('parler À qqn' → se = COI → invariable)",
          "Ils se sont souri, téléphoné, nui. (verbes à COI → invariables)"
        ]
      },
      { label:"Verbes essentiellement pronominaux → accord TOUJOURS avec le sujet",
        items:[
          "se souvenir, se méfier, se taire, s'évanouir, se repentir, s'absenter",
          "Elle s'est souvenue de lui. (même si on ne peut pas analyser 'se')"
        ]
      },
      { label:"⚠ Locutions figées → TOUJOURS INVARIABLES",
        items:[
          "se rendre compte → Elle s'est rendu compte de l'erreur.",
          "se mettre d'accord → Elles se sont mis d'accord.",
          "se faire l'écho de, s'en vouloir → invariables"
        ]
      }
    ]
  },

  // ─── PRONOMS ─────────────────────────────────────────────
  {
    cat:"pronoms", id:"relatifs",
    title:"Choisir le bon pronom relatif",
    type:"compare",
    rows:[
      { left:"DONT",          right:"remplace 'de + antécédent' (parler DE, avoir besoin DE, être fier DE...)", ex:"Le livre dont tu m'as parlé." },
      { left:"DUQUEL",        right:"obligatoire après préposition composée avec DE (à côté de, autour de...)",  ex:"L'arbre à côté duquel je suis assis." },
      { left:"AUQUEL",        right:"remplace 'à + antécédent chose' (penser À, tenir À, s'intéresser À...)",   ex:"Le projet auquel je tiens." },
      { left:"QUI",           right:"après préposition + personne (avec qui, pour qui, envers qui...)",          ex:"La personne avec qui je travaille." },
      { left:"LEQUEL/LAQUELLE",right:"après préposition + chose",                                               ex:"La raison pour laquelle il refuse." },
      { left:"EN QUI",        right:"'avoir confiance EN' + personne",                                           ex:"Des gens en qui on peut avoir confiance." }
    ]
  },

  {
    cat:"pronoms", id:"y-vs-en",
    title:"Y vs EN — le piège des pronoms neutres",
    type:"compare",
    rows:[
      { left:"Y",   right:"remplace 'à + lieu' ou 'à + chose inanimée'",  ex:"J'y pense souvent. (= à ce problème) / Il y va. (= à Paris)" },
      { left:"EN",  right:"remplace 'de + quantité/chose' ou partitif",    ex:"J'en veux deux. (= de ces gâteaux) / Il en parle. (= de ce sujet)" }
    ]
  },

  // ─── PRÉPOSITIONS ────────────────────────────────────────
  {
    cat:"prepositions", id:"verbes-pieges",
    title:"Verbes dont la préposition est un piège",
    type:"words",
    words:[
      ["pallier",        "transitif DIRECT — 'pallier un problème' (JAMAIS 'pallier à un problème')"],
      ["se rappeler",    "SANS 'de' — 'je me rappelle ce moment' (≠ 'se souvenir DE ce moment')"],
      ["influer",        "intransitif indirect — 'influer SUR' (≠ 'influencer' qui est transitif direct)"],
      ["manquer à qqn",  "sens INVERSÉ — 'tu me manques' = C'EST MOI qui ressens ton absence"],
      ["manquer de",     "'manquer DE courage' = ne pas avoir assez de"],
      ["comparer à",     "'comparer ceci à cela' = chercher la similitude"],
      ["comparer avec",  "'comparer les deux' = chercher les différences"],
      ["s'avérer",       "'il s'avère faux' SANS 'être' — 's'avérer être vrai' est un pléonasme"],
      ["douter de",      "'douter d'un fait' mais 'douter que + subjonctif'"],
      ["se souvenir de", "AVEC 'de' — 'je me souviens DE ce moment' (≠ se rappeler)"]
    ]
  },

  {
    cat:"prepositions", id:"pays-prep",
    title:"Prépositions avec les pays (piège récurrent au TCF)",
    type:"compare",
    rows:[
      { left:"EN",  right:"pays féminins ou commençant par une voyelle",      ex:"en France, en Algérie, en Iran, en Irak, en Espagne" },
      { left:"AU",  right:"pays masculins commençant par une consonne",        ex:"au Maroc, au Mexique, au Japon, au Brésil" },
      { left:"AUX", right:"pays au pluriel",                                   ex:"aux États-Unis, aux Pays-Bas, aux Philippines" },
      { left:"À",   right:"villes et certaines îles",                          ex:"à Paris, à Cuba, à Malte, à Madagascar" }
    ]
  },

  // ─── NÉGATION ────────────────────────────────────────────
  {
    cat:"negation", id:"ne-explétif",
    title:"Le NE explétif — un NE qui ne nie pas !",
    type:"rules",
    rules:[
      { label:"NE explétif = NE non négatif, facultatif, registre soutenu",
        items:[
          "craindre que → Je crains qu'il ne soit trop tard. (ne = non négatif)",
          "avoir peur que → J'ai peur qu'il ne parte.",
          "avant que → Pars avant qu'il ne revienne.",
          "à moins que → Je reste, à moins qu'il ne pleuve.",
          "de peur que → Il se cache de peur qu'on ne le reconnaisse.",
          "NE explétif peut être OMIS sans changer le sens (usage soutenu seulement)"
        ]
      }
    ]
  },

  {
    cat:"negation", id:"neg-sans-pas",
    title:"Négations sans PAS — cas obligatoires",
    type:"rules",
    rules:[
      { label:"Avec PERSONNE / RIEN / AUCUN / JAMAIS sujets → PAS est INTERDIT",
        items:[
          "✓ Personne n'est venu.     ✗ Personne n'est pas venu.",
          "✓ Rien ne va plus.        ✗ Rien ne va pas plus.",
          "✓ Aucun élève n'a réussi. ✗ Aucun n'a pas réussi.",
          "✓ Jamais il ne cède.      ✗ Jamais il ne cède pas."
        ]
      },
      { label:"NE... QUE = seulement (restriction, pas une négation totale)",
        items:[
          "Il ne travaille que le soir. (= il travaille seulement le soir)",
          "NE... QUE n'est pas une négation : l'action A LIEU",
          "Différence avec NE... PAS : 'il ne travaille pas' = il ne travaille pas du tout"
        ]
      },
      { label:"NE... GUÈRE = très peu (registre soutenu)",
        items:[
          "Il ne travaille guère. (= il travaille très peu)",
          "Elle ne mange guère depuis deux jours.",
          "Soutenu, souvent employé à l'écrit"
        ]
      }
    ]
  },

  // ─── HOMOPHONES ──────────────────────────────────────────
  {
    cat:"homophones", id:"homophones-base",
    title:"Homophones grammaticaux — les plus piégeux au TCF",
    type:"compare",
    rows:[
      { left:"ou (conjonction de choix)",    right:"où (lieu ou temps)",             ex:"Où vas-tu ? / Tu veux du café ou du thé ?" },
      { left:"a (verbe avoir)",              right:"à (préposition)",                 ex:"Il a faim. / Il pense à toi." },
      { left:"et (conjonction)",             right:"est (verbe être)",                ex:"Il mange et dort. / Il est fatigué." },
      { left:"son (possessif)",              right:"sont (verbe être, 3e pl.)",       ex:"C'est son frère. / Ils sont partis." },
      { left:"ces (démonstratif)",           right:"ses (possessif)",                 ex:"Ces livres. / Ses livres à lui." },
      { left:"c'est (ce + est)",             right:"s'est (se + est, pronominal)",    ex:"C'est vrai. / Elle s'est blessée." },
      { left:"leur (COI, invariable)",       right:"leurs (possessif, variable)",     ex:"Je leur parle. / Leurs enfants jouent." },
      { left:"peu (adverbe de quantité)",    right:"peut / peux (verbe pouvoir)",     ex:"Il a peu dormi. / Il peut venir." },
      { left:"davantage (= plus, adverbe)",  right:"d'avantage(s) (de + le nom)",     ex:"Elle travaille davantage. / Tirer d'avantages." },
      { left:"quand (conjonction de temps)", right:"quant à (en ce qui concerne)",    ex:"Quand il arrive. / Quant à moi, je pars." },
      { left:"on (pronom indéfini)",         right:"ont (verbe avoir, 3e pl.)",       ex:"On mange ensemble. / Ils ont mangé." },
      { left:"mais (opposition)",            right:"mes (possessif pl.)",             ex:"Mais non ! / Mes livres." }
    ]
  },

  {
    cat:"homophones", id:"homophones-avancés",
    title:"Homophones avancés — souvent au TCF et TV5 Monde",
    type:"compare",
    rows:[
      { left:"quoique (= bien que)",      right:"quoi que (quelle que soit la chose que)",       ex:"Quoiqu'il soit tard. / Quoi qu'il arrive." },
      { left:"quelque (déterminant)",     right:"quel que (= quelle que soit la valeur de)",      ex:"Quelques jours. / Quel que soit le résultat." },
      { left:"si (condition/intensité)",  right:"s'y (se + y)",                                   ex:"Si tu veux. / Il s'y habitue." },
      { left:"jadis (il y a longtemps)",  right:"naguère (il y a peu de temps)",                  ex:"Jadis, les guerres ravageaient... / Naguère calme, la ville..." },
      { left:"ceci (annonce)",            right:"cela (reprend ce qui précède)",                   ex:"Retenez ceci : ... / Cela dit, il est parti." },
      { left:"entre (rapport réciproque)", right:"parmi (sous-ensemble d'un groupe)",  ex:"Entre nous trois. / Parmi les étudiants." }
    ]
  },

  // ─── ACCORD DE L'ADJECTIF ────────────────────────────────
  {
    cat:"accord", id:"couleurs",
    title:"Accord des adjectifs de couleur",
    type:"rules",
    rules:[
      { label:"Adjectifs simples → accord normal",
        items:[
          "une robe verte, des yeux bleus, une voiture blanche",
          "vert / bleu / rouge / blanc / noir / jaune / gris → s'accordent"
        ]
      },
      { label:"⚠ Couleurs issues d'un NOM → INVARIABLES",
        items:[
          "des yeux marron (noix), des robes orange (fruit), des pulls kaki",
          "une veste bordeaux, des chaussures havane, des murs crème",
          "Exception : rose et fauve s'accordent quand même !"
        ]
      },
      { label:"⚠ Adjectifs de couleur COMPOSÉS → INVARIABLES",
        items:[
          "des yeux bleu-vert, une veste gris foncé, des cheveux châtain clair",
          "des robes bleu marine, des murs jaune pâle → toujours invariables"
        ]
      }
    ]
  },

  {
    cat:"accord", id:"adj-invariables",
    title:"Adjectifs qui ne s'accordent jamais — cas particuliers",
    type:"words",
    words:[
      ["demi",      "AVANT le nom = invariable avec trait d'union (une demi-heure, un demi-kilo)"],
      ["nu",        "AVANT le nom = invariable avec trait d'union (nu-tête, nu-pieds) ; APRÈS = accord (pieds nus)"],
      ["ci-joint",  "AVANT le nom = invariable ('ci-joint la copie') ; APRÈS = accord ('les copies ci-jointes')"],
      ["possible",  "APRÈS 'le plus / le moins possible' = invariable ('le plus d'efforts possible')"],
      ["tout",      "adverbe + adj. fém. + CONSONNE = toute ('toute petite') MAIS + VOYELLE = tout ('tout étonnée')"],
      ["fort",      "dans 'se faire fort de' = invariable locution figée ('elles se font fort de réussir')"]
    ]
  },

  // ─── PIÈGES LEXICAUX ─────────────────────────────────────
  {
    cat:"lexique", id:"mots-confondus",
    title:"Mots souvent confondus entre eux",
    type:"compare",
    rows:[
      { left:"compréhensif",  right:"qui comprend, tolérant (qualité humaine)",         ex:"Un prof compréhensif ≠ un texte compréhensible" },
      { left:"compréhensible",right:"qu'on peut comprendre, clair",                      ex:"Des explications compréhensibles" },
      { left:"économique",    right:"lié à l'économie (un secteur)",                     ex:"Crise économique ≠ personne économe" },
      { left:"économe",       right:"qui dépense peu, qui gère bien",                    ex:"Elle est très économe" },
      { left:"différend (n.m.)","right":"un désaccord, un litige",                       ex:"Un différend commercial ≠ des avis différents" },
      { left:"jadis",         right:"il y a longtemps, dans un passé lointain",          ex:"Jadis, les rues étaient calmes." },
      { left:"naguère",       right:"il y a peu de temps (souvent CONFONDU avec jadis!)",ex:"Naguère calme, la ville s'est transformée." },
      { left:"solutionner",   right:"argotique/néologisme à éviter à l'écrit soutenu",   ex:"Préférer : résoudre un problème" }
    ]
  },

  {
    cat:"lexique", id:"registre-pieges",
    title:"Pièges de registre soutenu — TCF/TV5",
    type:"words",
    words:[
      ["davantage de",         "suivi d'un nom SANS article : 'davantage de temps' (= plus de temps)"],
      ["alors que vs tandis que","'alors que' = opposition temporelle OU simultanée ; 'tandis que' = simultanéité ou opposition"],
      ["à peine... que",       "'à peine avait-il fini qu'il repartit' → inversion obligatoire (registre soutenu)"],
      ["ne faire que",         "'il ne fait que se plaindre' = il se plaint sans arrêt (sens continu)"],
      ["force est de constater","= on est obligé de reconnaître (locution invariable, très soutenu)"],
      ["en l'occurrence",      "= dans ce cas précis (ne pas confondre avec 'en général')"],
      ["il n'en demeure pas moins","= néanmoins, cela reste vrai malgré la concession précédente"],
      ["à l'aune de",          "= en prenant comme mesure ou critère d'évaluation"],
      ["de facto",             "= dans les faits, concrètement (opposé à 'de jure' = en droit)"],
      ["a fortiori",           "= à plus forte raison, encore davantage"]
    ]
  }
];

const PIEGES_CATS = [
  {id:"mode",          label:"Mode verbal"},
  {id:"connecteurs",   label:"Connecteurs"},
  {id:"participe",     label:"Participe passé"},
  {id:"pronoms",       label:"Pronoms"},
  {id:"prepositions",  label:"Prépositions"},
  {id:"negation",      label:"Négation"},
  {id:"homophones",    label:"Homophones"},
  {id:"accord",        label:"Accord adjectif"},
  {id:"lexique",       label:"Pièges lexicaux"}
];
