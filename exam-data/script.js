// =========================================================
// BANQUE D'EXAMEN BLANC — 100 questions C1/C2, style TCF
// Chaque question : énoncé à trou (ou QCM), 4 propositions proches/piégeantes,
// 1 seule bonne réponse (index 0-3), explication courte.
// =========================================================
const EXAM_CATEGORIES = [
  {id:"subjonctif", label:"Subjonctif vs indicatif"},
  {id:"concordance", label:"Concordance des temps & SI"},
  {id:"pronoms", label:"Pronoms relatifs & substituts"},
  {id:"participe", label:"Accord du participe passé"},
  {id:"connecteurs", label:"Connecteurs logiques"},
  {id:"prepositions", label:"Prépositions & régimes verbaux"},
  {id:"lexique", label:"Nuances lexicales"},
  {id:"negation", label:"Négation & restriction"},
  {id:"vocabulaire", label:"Vocabulaire C1/C2"},
  {id:"conjugaison", label:"Conjugaison piégeuse"},
  {id:"registre", label:"Registre soutenu"}
];

const EXAM_QUESTIONS = [
// ---------- SUBJONCTIF VS INDICATIF (10) ----------
{cat:"subjonctif", q:"Il est indéniable qu'il ___ raison sur ce point.", options:["ait","a","aurait","eût"], answer:1, explain:"« Il est indéniable que » exprime une certitude → indicatif."},
{cat:"subjonctif", q:"Je ne pense pas qu'elle ___ vraiment compris l'enjeu.", options:["a","ait","aura","avait"], answer:1, explain:"Verbe d'opinion à la forme négative → subjonctif (passé, car antériorité)."},
{cat:"subjonctif", q:"Bien qu'il ___ tous les efforts possibles, il n'a pas réussi.", options:["a fait","ait fait","avait fait","fera"], answer:1, explain:"« Bien que » est toujours suivi du subjonctif, ici au passé pour l'antériorité."},
{cat:"subjonctif", q:"Il semble que la situation ___ déjà sous contrôle.", options:["soit","est","sera","serait"], answer:0, explain:"« Il semble que » (sans « me ») introduit le doute → subjonctif."},
{cat:"subjonctif", q:"Il me semble qu'elle ___ raison.", options:["ait","a","eût","aurait"], answer:1, explain:"« Il me semble que » exprime une certitude personnelle → indicatif (contrairement à « il semble que »)."},
{cat:"subjonctif", q:"C'est le meilleur roman que je ___ jamais lu.", options:["ai","aie","avais","eusse"], answer:1, explain:"Après un superlatif suivi de « que », on emploie le subjonctif."},
{cat:"subjonctif", q:"Après que tu ___ terminé, préviens-moi.", options:["aies","auras","as","aurais"], answer:1, explain:"« Après que » est suivi de l'indicatif (contrairement à « avant que »), ici au futur antérieur."},
{cat:"subjonctif", q:"Avant qu'il ne ___ trop tard, agissons.", options:["soit","est","sera","était"], answer:0, explain:"« Avant que » exige toujours le subjonctif, avec un « ne » explétif facultatif."},
{cat:"subjonctif", q:"Je cherche un assistant qui ___ parfaitement le mandarin.", options:["parle","parlera","parlait","parlerait"], answer:0, explain:"Antécédent indéfini/incertain (« un assistant qui... ») → subjonctif dans la relative."},
{cat:"subjonctif", q:"Je connais un assistant qui ___ parfaitement le mandarin.", options:["parle","parle (subj.)","parlât","puisse parler"], answer:0, explain:"Antécédent défini et réel → indicatif dans la relative."},

// ---------- CONCORDANCE DES TEMPS & SI (10) ----------
{cat:"concordance", q:"Si j'avais su, je ne ___ pas venu.", options:["serais","sois","fus","suis"], answer:0, explain:"Si + plus-que-parfait → conditionnel passé."},
{cat:"concordance", q:"Si tu ___ ce bouton, l'appareil s'éteint.", options:["appuies","appuieras","aurais appuyé","appuierais"], answer:0, explain:"Si + présent → présent (vérité générale)."},
{cat:"concordance", q:"Elle m'a dit qu'elle ___ le lendemain.", options:["viendra","viendrait","vienne","vînt"], answer:1, explain:"Discours indirect au passé : le futur devient conditionnel présent."},
{cat:"concordance", q:"S'il ___ beau demain, nous sortirions.", options:["fait","fera","faisait","ferait"], answer:2, explain:"Si + imparfait → conditionnel présent (hypothèse sur l'avenir)."},
{cat:"concordance", q:"Au moment où il ___, le téléphone a sonné.", options:["sortait","sortit","était sorti","sort"], answer:0, explain:"Imparfait pour une action en cours, interrompue par une action ponctuelle au passé composé/simple."},
{cat:"concordance", q:"Dès qu'elle ___ son diplôme, elle a cherché un emploi.", options:["obtenait","obtint","a obtenu","obtenait"], answer:2, explain:"Passé composé pour une action achevée immédiatement suivie d'une autre, dans un récit oral/courant."},
{cat:"concordance", q:"Il m'avait promis qu'il ___ avant la nuit.", options:["reviendra","reviendrait","revienne","fût revenu"], answer:1, explain:"Concordance des temps : promesse au passé → futur du discours direct devient conditionnel présent."},
{cat:"concordance", q:"Pourvu qu'il ___ à temps !", options:["arrive","arrivera","arrivait","arriverait"], answer:0, explain:"« Pourvu que » exprime un souhait + condition → subjonctif présent."},
{cat:"concordance", q:"Au cas où vous ___ besoin d'aide, appelez-moi.", options:["auriez","avez","auriez (cond.)","ayez"], answer:0, explain:"« Au cas où » est suivi du conditionnel, jamais du subjonctif ni de l'indicatif présent."},
{cat:"concordance", q:"Si on me l'avait demandé, j'___ volontiers.", options:["aurais accepté","accepterais","acceptais","aie accepté"], answer:0, explain:"Si + plus-que-parfait → conditionnel passé dans la principale."},

// ---------- PRONOMS RELATIFS & SUBSTITUTS (8) ----------
{cat:"pronoms", q:"Voici le dossier ___ je vous ai parlé.", options:["que","dont","lequel","où"], answer:1, explain:"« Parler de » → pronom relatif « dont » qui remplace un complément introduit par « de »."},
{cat:"pronoms", q:"C'est une question à ___ il faudra répondre rapidement.", options:["qui","laquelle","dont","que"], answer:1, explain:"« Répondre à » + antécédent chose → « à laquelle »."},
{cat:"pronoms", q:"Le projet ___ dépend notre avenir est en péril.", options:["dont","duquel","auquel","de qui"], answer:1, explain:"« Dépendre de » + antécédent éloigné/chose → « duquel » est ici l'usage soutenu correct (variante de « dont »)."},
{cat:"pronoms", q:"L'entreprise pour ___ je travaille traverse une crise.", options:["qui","laquelle","dont","que"], answer:1, explain:"Préposition « pour » + antécédent chose → « laquelle »."},
{cat:"pronoms", q:"Je n'ai pas vu le film ___ tu fais allusion.", options:["dont","auquel","duquel","que"], answer:1, explain:"« Faire allusion à » → « auquel »."},
{cat:"pronoms", q:"Tu peux compter sur moi, j'___ veillerai personnellement.", options:["y","en","le","lui"], answer:0, explain:"« Veiller à » se reprend par « y »."},
{cat:"pronoms", q:"Des solutions, il ___ existe plusieurs.", options:["y","en","les","leur"], answer:1, explain:"« En » reprend un complément de quantité indéterminée (« plusieurs solutions »)."},
{cat:"pronoms", q:"Ce sont des gens ___ on peut avoir confiance.", options:["dont","en qui","auxquels","que"], answer:1, explain:"« Avoir confiance en » + personnes → « en qui »."},

// ---------- ACCORD DU PARTICIPE PASSÉ (10) ----------
{cat:"participe", q:"Les lettres qu'il a ___ sont sur la table.", options:["écrit","écrite","écrits","écrites"], answer:3, explain:"COD « que » (= les lettres, féminin pluriel) placé avant → accord."},
{cat:"participe", q:"Elle s'est ___ les mains avant de manger.", options:["lavé","lavée","lavés","lavées"], answer:0, explain:"COD « les mains » placé après le verbe pronominal → pas d'accord (« se » est COI ici)."},
{cat:"participe", q:"Ils se sont ___ pendant des heures.", options:["parlé","parlés","parlée","parlées"], answer:0, explain:"« Se parler » : « se » est COI (parler à qqn) → aucun accord."},
{cat:"participe", q:"La maison que nous avons ___ construire est terminée.", options:["fait","faite","faits","faites"], answer:0, explain:"« Faire + infinitif » : le participe « fait » reste invariable devant un infinitif."},
{cat:"participe", q:"Les efforts qu'il a ___ ont porté leurs fruits.", options:["fallu","fait","faits","faite"], answer:2, explain:"COD « que » (= les efforts, masc. pluriel) avant le verbe → accord : « faits »."},
{cat:"participe", q:"Combien de fautes as-tu ___ ?", options:["fait","faite","faits","faites"], answer:3, explain:"COD « combien de fautes » placé avant → accord féminin pluriel."},
{cat:"participe", q:"Il a ___ trois heures pour finir ce travail.", options:["fallu","fallut","fallue","fallus"], answer:0, explain:"Verbe impersonnel « falloir » : participe passé toujours invariable."},
{cat:"participe", q:"La chaleur qu'il a ___ cet été restera mémorable.", options:["fait","faite","faits","faites"], answer:1, explain:"Ici « fait » est un verbe météorologique transitif direct : « la chaleur » est COD avant → accord."},
{cat:"participe", q:"Les deux heures que ce trajet m'a ___ ont semblé interminables.", options:["pris","prises","prit","pris (invariable, durée)"], answer:0, explain:"« Que » reprend un COD direct (les deux heures) → accord masculin pluriel « pris »."},
{cat:"participe", q:"Elle s'est ___ de ses erreurs.", options:["rendu compte","rendue compte","rendus compte","rendue compte de"], answer:0, explain:"« Se rendre compte de » : locution figée, le participe « rendu » reste invariable."},

// ---------- CONNECTEURS LOGIQUES (10) ----------
{cat:"connecteurs", q:"Il a échoué ; ___, il a décidé de recommencer.", options:["si bien que","néanmoins","étant donné que","afin que"], answer:1, explain:"« Néanmoins » exprime l'opposition (malgré l'échec) ; les autres ne conviennent pas au sens."},
{cat:"connecteurs", q:"___ la pluie, le match a été maintenu.", options:["Malgré","Bien que","Quoique","Bien qu'il y ait"], answer:0, explain:"« Malgré » + nom (pas de verbe) ; les trois autres exigent une proposition au subjonctif."},
{cat:"connecteurs", q:"Il a réussi son examen, ___ il n'avait pas beaucoup révisé.", options:["car","alors que","si bien que","or"], answer:1, explain:"Opposition entre réussite et absence de révision → « alors que »."},
{cat:"connecteurs", q:"___ les conditions économiques, l'entreprise prospère.", options:["Vu","En dépit de","Étant donné","Grâce à"], answer:1, explain:"Le contexte suggère une opposition (prospérer malgré des conditions difficiles) → « en dépit de »."},
{cat:"connecteurs", q:"Elle est compétente ; ___, elle manque de confiance en elle.", options:["de plus","en revanche","par conséquent","de sorte que"], answer:1, explain:"Contraste entre deux qualités opposées → « en revanche »."},
{cat:"connecteurs", q:"___ il pleuve, la randonnée est maintenue.", options:["Même si","Pourtant","Or","Ainsi"], answer:0, explain:"Concession hypothétique → « même si » + indicatif."},
{cat:"connecteurs", q:"Tout indique qu'il ment ; ___, je ne peux rien prouver.", options:["or","si bien que","c'est pourquoi","en outre"], answer:0, explain:"« Or » introduit une restriction logique inattendue dans un raisonnement."},
{cat:"connecteurs", q:"Le projet a été abandonné ___ d'un manque de financement.", options:["faute","grâce à","afin","de sorte"], answer:0, explain:"« Faute de » exprime la cause par absence/manque."},
{cat:"connecteurs", q:"Nous partirons tôt ___ d'éviter les embouteillages.", options:["afin","afin que","de peur","à condition"], answer:0, explain:"« Afin de » + infinitif exprime le but (même sujet)."},
{cat:"connecteurs", q:"Elle a tout vérifié ___ de se tromper.", options:["afin","de peur","pour","de sorte"], answer:1, explain:"« De peur de » + infinitif exprime un but à éviter (crainte)."},

// ---------- PRÉPOSITIONS & RÉGIMES VERBAUX (10) ----------
{cat:"prepositions", q:"Il a fini ___ accepter notre proposition.", options:["par","de","à","pour"], answer:0, explain:"« Finir par » + infinitif = aboutir finalement à."},
{cat:"prepositions", q:"Elle a remédié ___ ce problème rapidement.", options:["à","de","contre","sur"], answer:0, explain:"« Remédier à » est un verbe à régime indirect fixe."},
{cat:"prepositions", q:"Ce phénomène découle directement ___ la crise économique.", options:["de","à","sur","par"], answer:0, explain:"« Découler de » : la cause est introduite par « de »."},
{cat:"prepositions", q:"Le succès de ce projet tient ___ la qualité de l'équipe.", options:["à","de","sur","avec"], answer:0, explain:"« Tenir à » = être dû à, dépendre de."},
{cat:"prepositions", q:"Il s'est résigné ___ accepter sa défaite.", options:["à","de","pour","par"], answer:0, explain:"« Se résigner à » + infinitif."},
{cat:"prepositions", q:"Elle s'est prémunie ___ tout risque d'erreur.", options:["contre","de","à","pour"], answer:0, explain:"« Se prémunir contre » = se protéger de."},
{cat:"prepositions", q:"Ils se sont conformés ___ la nouvelle réglementation.", options:["à","de","avec","sur"], answer:0, explain:"« Se conformer à » exige la préposition « à »."},
{cat:"prepositions", q:"Cette décision a été prise ___ l'insu du comité.", options:["à","sans","par","de"], answer:0, explain:"Locution figée : « à l'insu de » = sans que la personne le sache."},
{cat:"prepositions", q:"Il a fini ___ se rendre à l'évidence.", options:["par","de","à","pour"], answer:0, explain:"« Finir par » + infinitif, ne pas confondre avec « finir de » (= achever)."},
{cat:"prepositions", q:"Le maire a statué ___ l'avenir du quartier.", options:["sur","de","à","par"], answer:0, explain:"« Statuer sur » = trancher, décider à propos de quelque chose."},

// ---------- NUANCES LEXICALES (10) ----------
{cat:"lexique", q:"« Je travaille dans cette entreprise ___ cinq ans. » (action toujours en cours)", options:["depuis","pendant","il y a","dans"], answer:0, explain:"« Depuis » indique le point de départ d'une action qui continue dans le présent."},
{cat:"lexique", q:"« Il a vécu à Lyon ___ dix ans, puis il est parti. » (durée achevée)", options:["depuis","pendant","dès","dans"], answer:1, explain:"« Pendant » indique une durée délimitée et achevée."},
{cat:"lexique", q:"Distinguer : « Je viendrai ___ une heure. » (délai à venir)", options:["dans","en","il y a","depuis"], answer:0, explain:"« Dans » + durée = au bout de ce délai, dans le futur."},
{cat:"lexique", q:"« J'ai fini ce travail ___ deux heures. » (temps nécessaire pour l'accomplir)", options:["en","dans","depuis","pendant"], answer:0, explain:"« En » exprime la durée nécessaire à la réalisation d'une action."},
{cat:"lexique", q:"« Il est arrivé ___ retard, comme ___. » (habituel + comparaison)", options:["encore / toujours","toujours / encore","déjà / encore","encore / déjà"], answer:1, explain:"« Toujours » = habituellement ; « encore » = de nouveau, par comparaison au passé."},
{cat:"lexique", q:"« Je n'ai pas terminé, et lui ___. »", options:["non plus","aussi","ni","encore"], answer:0, explain:"À la forme négative, on emploie « non plus » (et non « aussi »)."},
{cat:"lexique", q:"Quelle est la différence correcte ? « car » introduit ___ tandis que « parce que » répond ___.", options:["une justification du locuteur / à une question « pourquoi »","une conséquence / une cause","un fait connu / un fait nouveau","aucune différence notable"], answer:0, explain:"« Car » justifie une affirmation déjà énoncée ; « parce que » répond directement à « pourquoi ? »."},
{cat:"lexique", q:"« Malgré que » est ___", options:["une forme soutenue correcte","une forme à éviter, on préfère « bien que »","strictement identique à « malgré »","réservée au passé simple"], answer:1, explain:"« Malgré que » est jugée fautive ou très familière par la norme académique ; on emploie « bien que »."},
{cat:"lexique", q:"« Entre nous trois » ou « ___ nous trois » ?", options:["entre","parmi","entre (correct, malgré l'idée de pluriel)","parmi (correct car plus de deux éléments)"], answer:2, explain:"« Entre » s'emploie aussi pour plus de deux éléments quand on considère un rapport réciproque entre eux ; « parmi » suppose un sous-ensemble extrait d'un plus grand groupe."},
{cat:"lexique", q:"« Ceci dit » introduit ___", options:["une reformulation du même propos","une nuance ou réserve par rapport à ce qui précède","une conclusion logique stricte","un exemple"], answer:1, explain:"« Ceci dit » (= cela dit) introduit une nuance ou une réserve après une affirmation."},

// ---------- NÉGATION & RESTRICTION (8) ----------
{cat:"negation", q:"Il ne reste ___ deux places pour ce concert.", options:["que","plus que","guère que","pas que"], answer:1, explain:"« Ne... plus que » exprime une restriction avec idée de diminution (il n'en reste plus beaucoup)."},
{cat:"negation", q:"Je n'ai ___ confiance en cette méthode.", options:["pas guère","guère","point pas","ne guère"], answer:1, explain:"« Ne... guère » = très peu, registre soutenu, s'emploie seul après « ne »."},
{cat:"negation", q:"Il ___ a jamais menti, je peux en témoigner.", options:["n'", "ne pas", "ne point", "ne guère"], answer:0, explain:"« Ne... jamais » : seul « ne » précède le verbe, « jamais » suit."},
{cat:"negation", q:"___ argent ___ relations ne pourront le sauver cette fois.", options:["Ni / ni","Pas / pas","Aucun / aucun","Non / non"], answer:0, explain:"« Ni... ni » coordonne deux éléments niés, avec « ne » devant le verbe (ici sous-entendu)."},
{cat:"negation", q:"Il n'en reste ___ un seul exemplaire.", options:["que","plus","guère","point"], answer:0, explain:"« Ne... que » exprime une restriction (= seulement)."},
{cat:"negation", q:"Personne ___ s'attendait à un tel revirement.", options:["ne","n'a pas","ne pas","ne point pas"], answer:0, explain:"« Personne » sujet négatif s'accompagne uniquement de « ne », sans « pas »."},
{cat:"negation", q:"Je crains qu'il ne ___ trop tard.", options:["soit","est","sera","était"], answer:0, explain:"« Ne » explétif (non négatif) après les verbes de crainte, suivi du subjonctif."},
{cat:"negation", q:"Il n'a ___ tort, dans cette affaire.", options:["nullement","jamais pas","point pas","guère pas"], answer:0, explain:"« Nullement » renforce la négation avec « ne » : « ne... nullement » = absolument pas."},

// ---------- VOCABULAIRE C1/C2 (10) ----------
{cat:"vocabulaire", q:"« Réfuter une thèse » signifie :", options:["la confirmer","démontrer qu'elle est fausse","la nuancer légèrement","l'ignorer"], answer:1, explain:"Réfuter = démontrer la fausseté d'un argument ou d'une thèse."},
{cat:"vocabulaire", q:"« Préconiser une solution » signifie :", options:["l'interdire","la recommander","la rejeter","l'inventer"], answer:1, explain:"Préconiser = recommander vivement."},
{cat:"vocabulaire", q:"Un argument « fallacieux » est un argument :", options:["solide et vérifié","trompeur, qui paraît vrai mais ne l'est pas","trop complexe à comprendre","ancien et dépassé"], answer:1, explain:"Fallacieux = qui repose sur une apparence trompeuse de vérité."},
{cat:"vocabulaire", q:"« Une situation latente » est une situation :", options:["déjà résolue","visible de tous","présente mais non encore manifeste","passée depuis longtemps"], answer:2, explain:"Latent = présent à l'état caché, prêt à se manifester."},
{cat:"vocabulaire", q:"« Un problème récurrent » est un problème :", options:["qui ne s'est produit qu'une fois","qui revient régulièrement","totalement résolu","imaginaire"], answer:1, explain:"Récurrent = qui se reproduit régulièrement."},
{cat:"vocabulaire", q:"« Pallier un manque » signifie :", options:["l'aggraver","l'ignorer délibérément","y remédier provisoirement","le provoquer"], answer:2, explain:"Pallier = compenser temporairement une insuffisance (attention : verbe transitif direct, sans « à »)."},
{cat:"vocabulaire", q:"« Une mesure dérisoire » est une mesure :", options:["extrêmement efficace","ridiculement insuffisante","obligatoire","secrète"], answer:1, explain:"Dérisoire = si insuffisant qu'il en devient presque ridicule."},
{cat:"vocabulaire", q:"« Des intérêts divergents » signifie que les intérêts sont :", options:["identiques","complémentaires","opposés, qui ne convergent pas","cachés"], answer:2, explain:"Divergent = qui s'écarte, qui va dans des directions différentes."},
{cat:"vocabulaire", q:"« Un fait avéré » est un fait :", options:["incertain","confirmé, prouvé","inventé","ancien"], answer:1, explain:"Avéré = reconnu vrai, confirmé par les faits."},
{cat:"vocabulaire", q:"« Conjecturer » signifie :", options:["affirmer avec certitude","prouver scientifiquement","émettre une hypothèse, supposer","contredire formellement"], answer:2, explain:"Conjecturer = formuler une hypothèse à partir d'indices incomplets."},

// ---------- CONJUGAISON PIÉGEUSE (8) ----------
{cat:"conjugaison", q:"Que je ___ ce travail avant ce soir ! (souhait, subjonctif présent de « faire »)", options:["fasse","fais","ferai","ferais"], answer:0, explain:"Subjonctif présent irrégulier de « faire » : que je fasse."},
{cat:"conjugaison", q:"Il faut que nous ___ plus prudents.", options:["soyons","sommes","serons","soyez"], answer:0, explain:"Subjonctif présent de « être », 1re personne du pluriel : que nous soyons."},
{cat:"conjugaison", q:"Quand il ___ ses études, il a déménagé. (passé simple de « finir »)", options:["finit","finissait","a fini","finissa"], answer:0, explain:"Passé simple, 3e pers. sing. du 2e groupe : il finit (identique au présent à l'écrit, distingué par le contexte)."},
{cat:"conjugaison", q:"Nous ___ hier soir au restaurant. (passé composé de « aller »)", options:["avons allé","sommes allé","sommes allés","avons été"], answer:2, explain:"« Aller » se conjugue avec « être » ; accord avec le sujet « nous » (masc. pluriel ici) : sommes allés."},
{cat:"conjugaison", q:"Si j'___ le temps, je t'aiderais. (imparfait de « avoir »)", options:["aurais","avais","aie","eusse"], answer:1, explain:"Si + imparfait : j'avais."},
{cat:"conjugaison", q:"Il ___ beau parler, personne ne l'écoutait. (« avoir beau »)", options:["a","avait","eut","ait"], answer:1, explain:"« Avoir beau » + infinitif, ici à l'imparfait pour une action en cours dans le passé."},
{cat:"conjugaison", q:"À peine ___-il arrivé que le téléphone sonna. (inversion, registre soutenu)", options:["fut","était","est","eut"], answer:0, explain:"« À peine » en tête de phrase entraîne l'inversion ; passé antérieur/passé simple attendu en registre soutenu : fut-il arrivé."},
{cat:"conjugaison", q:"Je ___ de lui parler quand il a raccroché. (« venir de » à l'imparfait)", options:["viens","venais","viendrai","vins"], answer:1, explain:"« Venir de » + infinitif à l'imparfait = passé récent par rapport à un autre moment du passé."},

// ---------- REGISTRE SOUTENU (6) ----------
{cat:"registre", q:"« Force est de constater que » signifie :", options:["on peut éventuellement remarquer que","on est obligé de reconnaître que","on doute fortement que","on souhaiterait que"], answer:1, explain:"Locution soutenue = on ne peut que constater, c'est un fait incontournable."},
{cat:"registre", q:"« En l'occurrence » signifie :", options:["dans ce cas précis","en général","malgré tout","par conséquent"], answer:0, explain:"« En l'occurrence » = dans le cas présent, dans cette situation précise."},
{cat:"registre", q:"« Il n'en demeure pas moins que » introduit :", options:["une simple répétition","une restriction qui persiste malgré ce qui précède","une certitude absolue sans nuance","une question rhétorique"], answer:1, explain:"Cette locution introduit un fait qui reste vrai malgré une concession déjà faite."},
{cat:"registre", q:"« À l'aune de » signifie :", options:["à l'opposé de","en comparaison avec, selon le critère de","indépendamment de","avant"], answer:1, explain:"« À l'aune de » = en prenant comme mesure ou critère d'évaluation."},
{cat:"registre", q:"« De facto » signifie :", options:["en théorie","selon la loi","dans les faits, concrètement","à l'avenir"], answer:2, explain:"Locution latine signifiant « en fait », par opposition à « de jure » (en droit)."},
{cat:"registre", q:"« Qui plus est » signifie :", options:["malgré cela","de plus, et même plus encore","sauf que","en revanche"], answer:1, explain:"« Qui plus est » renforce une addition déjà énoncée."}
];
