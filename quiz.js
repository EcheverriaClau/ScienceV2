// ============================================================
//  SCIENCE & TECH — Secondaire 3 Québec — Quiz Engine
// ============================================================

const LANG = { current: 'fr' };

const UI_TEXT = {
  fr: {
    title: 'Science & Tech',
    subtitle: 'Secondaire 3 — Québec',
    chooseUniv: 'Choisis tes univers',
    chooseMode: 'Mode de jeu',
    modeQuiz: '⚡ Quiz rapide (10 q)',
    modeTout: '🔬 Tout réviser',
    start: 'Lancer la mission',
    next: 'Question suivante',
    finish: 'Voir mes résultats',
    results: 'Résultats',
    correct: 'Bonnes réponses',
    total: 'Questions',
    score: 'Score',
    again: 'Rejouer',
    home: 'Accueil',
    theory: '📖 Voir le cours',
    theoryClose: 'Fermer',
    theoryLabel: 'Matière du cours',
    streak: 'Série',
    q: 'Question',
    verdicts: [
      { min:90, icon:'🏆', msg:'Légendaire ! Tu domines ces concepts !' },
      { min:70, icon:'🚀', msg:'Excellent ! Encore un peu et tu es imbattable.' },
      { min:50, icon:'📚', msg:'Pas mal ! Relis les cours et tu progresseras vite.' },
      { min:0,  icon:'💪', msg:'Continue ! Chaque erreur est une leçon.' },
    ],
    langLabel: 'Langue',
  },
  en: {
    title: 'Science & Tech',
    subtitle: 'Grade 9 — Québec',
    chooseUniv: 'Choose your universes',
    chooseMode: 'Game mode',
    modeQuiz: '⚡ Quick quiz (10 q)',
    modeTout: '🔬 Full review',
    start: 'Launch mission',
    next: 'Next question',
    finish: 'See my results',
    results: 'Results',
    correct: 'Correct answers',
    total: 'Questions',
    score: 'Score',
    again: 'Play again',
    home: 'Home',
    theory: '📖 View lesson',
    theoryClose: 'Close',
    theoryLabel: 'Course material',
    streak: 'Streak',
    q: 'Question',
    verdicts: [
      { min:90, icon:'🏆', msg:'Legendary! You\'ve mastered these concepts!' },
      { min:70, icon:'🚀', msg:'Excellent! A bit more and you\'re unbeatable.' },
      { min:50, icon:'📚', msg:'Not bad! Review the lessons and you\'ll improve fast.' },
      { min:0,  icon:'💪', msg:'Keep going! Every mistake is a lesson.' },
    ],
    langLabel: 'Language',
  },
  es: {
    title: 'Ciencia & Tec',
    subtitle: 'Secundaria 3 — Québec',
    chooseUniv: 'Elige tus universos',
    chooseMode: 'Modo de juego',
    modeQuiz: '⚡ Quiz rápido (10 p)',
    modeTout: '🔬 Revisar todo',
    start: 'Lanzar misión',
    next: 'Siguiente pregunta',
    finish: 'Ver mis resultados',
    results: 'Resultados',
    correct: 'Respuestas correctas',
    total: 'Preguntas',
    score: 'Puntuación',
    again: 'Jugar de nuevo',
    home: 'Inicio',
    theory: '📖 Ver la materia',
    theoryClose: 'Cerrar',
    theoryLabel: 'Materia del curso',
    streak: 'Racha',
    q: 'Pregunta',
    verdicts: [
      { min:90, icon:'🏆', msg:'¡Legendario! ¡Dominas estos conceptos!' },
      { min:70, icon:'🚀', msg:'¡Excelente! Un poco más y eres invencible.' },
      { min:50, icon:'📚', msg:'¡Nada mal! Repasa las lecciones y mejorarás rápido.' },
      { min:0,  icon:'💪', msg:'¡Sigue adelante! Cada error es una lección.' },
    ],
    langLabel: 'Idioma',
  },
};

const UNIVERS_META = {
  mat: {
    fr: { name: 'Univers matériel',    icon: '⚗️' },
    en: { name: 'Material universe',   icon: '⚗️' },
    es: { name: 'Universo material',   icon: '⚗️' },
    color: '#4FC3F7', colorDark: '#0277BD',
  },
  viv: {
    fr: { name: 'Univers vivant',      icon: '🧬' },
    en: { name: 'Living universe',     icon: '🧬' },
    es: { name: 'Universo viviente',   icon: '🧬' },
    color: '#81C784', colorDark: '#2E7D32',
  },
  ter: {
    fr: { name: 'Terre et espace',     icon: '🌍' },
    en: { name: 'Earth and space',     icon: '🌍' },
    es: { name: 'Tierra y espacio',    icon: '🌍' },
    color: '#FFB74D', colorDark: '#E65100',
  },
  tec: {
    fr: { name: 'Univers technologique', icon: '⚙️' },
    en: { name: 'Technological universe', icon: '⚙️' },
    es: { name: 'Universo tecnológico',  icon: '⚙️' },
    color: '#F48FB1', colorDark: '#880E4F',
  },
};

// -------------------------------------------------------
//  QUESTIONS — each has translations for fr / en / es
//  + theory block (cours / lesson / materia)
// -------------------------------------------------------
const QUESTIONS = [

  // ===== UNIVERS MATÉRIEL =====
  {
    u: 'mat',
    fr: {
      q: 'Quelle est la formule chimique de l\'eau ?',
      opts: ['H₂O', 'CO₂', 'NaCl', 'O₂'],
      exp: 'L\'eau est formée de 2 atomes d\'hydrogène (H) et 1 atome d\'oxygène (O), ce qui donne H₂O.',
      theory: '📘 Organisation de la matière\n\nLes molécules sont formées d\'atomes liés chimiquement. Une molécule d\'eau (H₂O) contient 2 atomes d\'hydrogène et 1 atome d\'oxygène.\n\nLa formule chimique indique les types et nombres d\'atomes présents dans une molécule :\n• H₂O = eau\n• CO₂ = dioxyde de carbone\n• NaCl = sel de table\n\nLe tableau périodique classe tous les éléments chimiques connus.',
    },
    en: {
      q: 'What is the chemical formula for water?',
      opts: ['H₂O', 'CO₂', 'NaCl', 'O₂'],
      exp: 'Water is made of 2 hydrogen (H) atoms and 1 oxygen (O) atom, giving H₂O.',
      theory: '📘 Organization of Matter\n\nMolecules are made of chemically bonded atoms. A water molecule (H₂O) contains 2 hydrogen atoms and 1 oxygen atom.\n\nA chemical formula shows the types and numbers of atoms in a molecule:\n• H₂O = water\n• CO₂ = carbon dioxide\n• NaCl = table salt\n\nThe periodic table classifies all known chemical elements.',
    },
    es: {
      q: '¿Cuál es la fórmula química del agua?',
      opts: ['H₂O', 'CO₂', 'NaCl', 'O₂'],
      exp: 'El agua está formada por 2 átomos de hidrógeno (H) y 1 átomo de oxígeno (O), dando H₂O.',
      theory: '📘 Organización de la Materia\n\nLas moléculas están formadas por átomos unidos químicamente. Una molécula de agua (H₂O) contiene 2 átomos de hidrógeno y 1 de oxígeno.\n\nLa fórmula química indica los tipos y números de átomos en una molécula:\n• H₂O = agua\n• CO₂ = dióxido de carbono\n• NaCl = sal de mesa\n\nLa tabla periódica clasifica todos los elementos químicos conocidos.',
    },
    ans: 0,
  },
  {
    u: 'mat',
    fr: {
      q: 'Un atome est composé d\'un noyau contenant des protons et neutrons, et…',
      opts: ['des électrons en périphérie', 'des molécules externes', 'des neutrons supplémentaires flottants', 'des photons liés'],
      exp: 'Les électrons gravitent autour du noyau dans des couches appelées niveaux d\'énergie.',
      theory: '📘 Structure de l\'atome\n\nUn atome possède 3 types de particules :\n• Protons (+) → dans le noyau\n• Neutrons (neutre) → dans le noyau\n• Électrons (−) → autour du noyau\n\nLe numéro atomique = nombre de protons.\nUn atome neutre a autant de protons que d\'électrons.\n\nLes modèles atomiques ont évolué de Dalton (boule solide) à Rutherford (noyau central) au modèle actuel quantique.',
    },
    en: {
      q: 'An atom has a nucleus with protons and neutrons, and…',
      opts: ['electrons around it', 'external molecules', 'floating extra neutrons', 'bound photons'],
      exp: 'Electrons orbit the nucleus in shells called energy levels.',
      theory: '📘 Atomic Structure\n\nAn atom has 3 particle types:\n• Protons (+) → in the nucleus\n• Neutrons (neutral) → in the nucleus\n• Electrons (−) → around the nucleus\n\nAtomic number = number of protons.\nA neutral atom has equal protons and electrons.\n\nAtomic models evolved from Dalton (solid ball) to Rutherford (central nucleus) to the modern quantum model.',
    },
    es: {
      q: 'Un átomo tiene un núcleo con protones y neutrones, y…',
      opts: ['electrones a su alrededor', 'moléculas externas', 'neutrones extra flotantes', 'fotones ligados'],
      exp: 'Los electrones orbitan el núcleo en capas llamadas niveles de energía.',
      theory: '📘 Estructura del Átomo\n\nUn átomo tiene 3 tipos de partículas:\n• Protones (+) → en el núcleo\n• Neutrones (neutro) → en el núcleo\n• Electrones (−) → alrededor del núcleo\n\nNúmero atómico = número de protones.\nUn átomo neutro tiene igual número de protones y electrones.\n\nLos modelos atómicos evolucionaron desde Dalton (bola sólida) hasta Rutherford (núcleo central) y el modelo cuántico actual.',
    },
    ans: 0,
  },
  {
    u: 'mat',
    fr: {
      q: 'Quel pH indique une solution acide ?',
      opts: ['pH < 7', 'pH = 7', 'pH > 7', 'pH = 14'],
      exp: 'Les acides ont un pH inférieur à 7. Le pH 7 est neutre (eau pure) et au-dessus de 7 c\'est basique.',
      theory: '📘 Acidité et basicité (pH)\n\nL\'échelle de pH va de 0 à 14 :\n• 0–6 : acide (jus de citron pH ≈ 2)\n• 7 : neutre (eau pure)\n• 8–14 : basique / alcalin (bicarbonate de soude pH ≈ 9)\n\nUn indicateur universel change de couleur selon le pH.\nLes acides réagissent avec les métaux et produisent de l\'hydrogène.\nLes bases se sentent savonneuses et peuvent brûler la peau.',
    },
    en: {
      q: 'Which pH indicates an acidic solution?',
      opts: ['pH < 7', 'pH = 7', 'pH > 7', 'pH = 14'],
      exp: 'Acids have a pH below 7. pH 7 is neutral (pure water) and above 7 is basic.',
      theory: '📘 Acidity and Basicity (pH)\n\nThe pH scale goes from 0 to 14:\n• 0–6: acidic (lemon juice pH ≈ 2)\n• 7: neutral (pure water)\n• 8–14: basic / alkaline (baking soda pH ≈ 9)\n\nA universal indicator changes colour with pH.\nAcids react with metals to produce hydrogen gas.\nBases feel soapy and can burn skin.',
    },
    es: {
      q: '¿Qué pH indica una solución ácida?',
      opts: ['pH < 7', 'pH = 7', 'pH > 7', 'pH = 14'],
      exp: 'Los ácidos tienen un pH menor a 7. El pH 7 es neutro (agua pura) y mayor a 7 es básico.',
      theory: '📘 Acidez y Basicidad (pH)\n\nLa escala de pH va del 0 al 14:\n• 0–6: ácido (jugo de limón pH ≈ 2)\n• 7: neutro (agua pura)\n• 8–14: básico / alcalino (bicarbonato pH ≈ 9)\n\nUn indicador universal cambia de color según el pH.\nLos ácidos reaccionan con metales produciendo hidrógeno.\nLas bases se sienten jabonosas y pueden quemar la piel.',
    },
    ans: 0,
  },
  {
    u: 'mat',
    fr: {
      q: 'La masse volumique de l\'eau pure est de…',
      opts: ['1 g/mL', '0,5 g/mL', '10 g/mL', '100 kg/m³'],
      exp: 'La masse volumique de l\'eau est 1 g/mL (ou 1 000 kg/m³). C\'est la référence standard.',
      theory: '📘 Masse volumique\n\nLa masse volumique (d) = masse / volume\n• Unités : g/mL, g/cm³ ou kg/m³\n• Eau pure : 1 g/mL → référence !\n\nSi la masse volumique d\'un objet est < 1 g/mL, il flotte dans l\'eau.\nSi elle est > 1 g/mL, il coule.\n\nExemples :\n• Bois : ≈ 0,6 g/mL → flotte\n• Fer : ≈ 7,9 g/mL → coule\n• Glace : ≈ 0,92 g/mL → flotte (c\'est pourquoi les icebergs flottent!)',
    },
    en: {
      q: 'The density of pure water is…',
      opts: ['1 g/mL', '0.5 g/mL', '10 g/mL', '100 kg/m³'],
      exp: 'The density of water is 1 g/mL (or 1,000 kg/m³). It is the standard reference.',
      theory: '📘 Density\n\nDensity (d) = mass / volume\n• Units: g/mL, g/cm³ or kg/m³\n• Pure water: 1 g/mL → reference!\n\nIf an object\'s density < 1 g/mL, it floats in water.\nIf density > 1 g/mL, it sinks.\n\nExamples:\n• Wood: ≈ 0.6 g/mL → floats\n• Iron: ≈ 7.9 g/mL → sinks\n• Ice: ≈ 0.92 g/mL → floats (that\'s why icebergs float!)',
    },
    es: {
      q: 'La masa volumétrica del agua pura es…',
      opts: ['1 g/mL', '0,5 g/mL', '10 g/mL', '100 kg/m³'],
      exp: 'La masa volumétrica del agua es 1 g/mL (o 1 000 kg/m³). Es la referencia estándar.',
      theory: '📘 Masa Volumétrica (Densidad)\n\nDensidad (d) = masa / volumen\n• Unidades: g/mL, g/cm³ o kg/m³\n• Agua pura: 1 g/mL → ¡referencia!\n\nSi la densidad de un objeto es < 1 g/mL, flota en el agua.\nSi es > 1 g/mL, se hunde.\n\nEjemplos:\n• Madera: ≈ 0,6 g/mL → flota\n• Hierro: ≈ 7,9 g/mL → se hunde\n• Hielo: ≈ 0,92 g/mL → flota (¡por eso los icebergs flotan!)',
    },
    ans: 0,
  },
  {
    u: 'mat',
    fr: {
      q: 'Lors d\'un changement chimique, on obtient…',
      opts: ['De nouvelles substances', 'La même substance en autre forme', 'Un simple déplacement', 'Un refroidissement'],
      exp: 'Un changement chimique produit de nouvelles substances (ex: combustion, rouille). La matière n\'est pas détruite, elle est transformée.',
      theory: '📘 Changements physiques vs chimiques\n\nChangement physique : change la forme, pas la nature\n• Exemples : fondre, évaporer, couper, dissoudre\n• Réversible souvent ✓\n\nChangement chimique : crée de nouvelles substances\n• Exemples : combustion, rouille, cuisson, fermentation\n• Indices : odeur, couleur, gaz, chaleur, précipité\n• Souvent irréversible ✗\n\nLoi de conservation : la masse totale des réactifs = masse totale des produits.',
    },
    en: {
      q: 'During a chemical change, you get…',
      opts: ['New substances', 'Same substance in different form', 'A simple displacement', 'A cooling effect'],
      exp: 'A chemical change produces new substances (e.g. combustion, rust). Matter is not destroyed, it is transformed.',
      theory: '📘 Physical vs Chemical Changes\n\nPhysical change: changes form, not nature\n• Examples: melting, evaporating, cutting, dissolving\n• Often reversible ✓\n\nChemical change: creates new substances\n• Examples: combustion, rust, cooking, fermentation\n• Signs: smell, colour change, gas, heat, precipitate\n• Often irreversible ✗\n\nConservation law: total mass of reactants = total mass of products.',
    },
    es: {
      q: 'Durante un cambio químico se obtienen…',
      opts: ['Nuevas sustancias', 'La misma sustancia en otra forma', 'Un simple desplazamiento', 'Un enfriamiento'],
      exp: 'Un cambio químico produce nuevas sustancias (ej: combustión, óxido). La materia no se destruye, se transforma.',
      theory: '📘 Cambios Físicos vs Químicos\n\nCambio físico: cambia la forma, no la naturaleza\n• Ejemplos: fundir, evaporar, cortar, disolver\n• A menudo reversible ✓\n\nCambio químico: crea nuevas sustancias\n• Ejemplos: combustión, óxido, cocción, fermentación\n• Señales: olor, cambio de color, gas, calor, precipitado\n• A menudo irreversible ✗\n\nLey de conservación: masa total de reactivos = masa total de productos.',
    },
    ans: 0,
  },
  {
    u: 'mat',
    fr: {
      q: 'Quel est un exemple de mélange hétérogène ?',
      opts: ['Vinaigrette (huile + vinaigre)', 'Eau salée', 'Air pur', 'Sirop de sucre'],
      exp: 'La vinaigrette est hétérogène car ses composants ne se mélangent pas uniformément — on voit les deux phases.',
      theory: '📘 Types de mélanges\n\nMélange homogène : composition uniforme, on ne voit pas les composants\n• Exemples : eau salée, air, sirop\n\nMélange hétérogène : composants visibles, non uniformes\n• Exemples : vinaigrette, sable dans l\'eau, granola\n\nSubstance pure : un seul type de particule\n• Élément pur : ex. fer (Fe), oxygène (O₂)\n• Composé pur : ex. eau (H₂O), sel (NaCl)\n\nOn peut séparer les mélanges par filtration, distillation, évaporation, etc.',
    },
    en: {
      q: 'Which is an example of a heterogeneous mixture?',
      opts: ['Vinaigrette (oil + vinegar)', 'Salt water', 'Pure air', 'Sugar syrup'],
      exp: 'Vinaigrette is heterogeneous because its components do not mix uniformly — you can see both phases.',
      theory: '📘 Types of Mixtures\n\nHomogeneous mixture: uniform composition, components not visible\n• Examples: salt water, air, syrup\n\nHeterogeneous mixture: visible, non-uniform components\n• Examples: vinaigrette, sand in water, granola\n\nPure substance: only one type of particle\n• Pure element: e.g. iron (Fe), oxygen (O₂)\n• Pure compound: e.g. water (H₂O), salt (NaCl)\n\nMixtures can be separated by filtration, distillation, evaporation, etc.',
    },
    es: {
      q: '¿Cuál es un ejemplo de mezcla heterogénea?',
      opts: ['Vinagreta (aceite + vinagre)', 'Agua salada', 'Aire puro', 'Jarabe de azúcar'],
      exp: 'La vinagreta es heterogénea porque sus componentes no se mezclan uniformemente — se ven las dos fases.',
      theory: '📘 Tipos de Mezclas\n\nMezcla homogénea: composición uniforme, no se ven los componentes\n• Ejemplos: agua salada, aire, jarabe\n\nMezcla heterogénea: componentes visibles, no uniformes\n• Ejemplos: vinagreta, arena en agua, granola\n\nSustancia pura: solo un tipo de partícula\n• Elemento puro: ej. hierro (Fe), oxígeno (O₂)\n• Compuesto puro: ej. agua (H₂O), sal (NaCl)\n\nLas mezclas se pueden separar por filtración, destilación, evaporación, etc.',
    },
    ans: 0,
  },
  {
    u: 'mat',
    fr: {
      q: 'La concentration d\'une solution en g/L indique…',
      opts: ['Les grammes de soluté dans 1 litre de solution', 'Le volume du solvant', 'La température de dissolution', 'Le pH de la solution'],
      exp: 'La concentration massique = masse du soluté (g) ÷ volume de solution (L). Ex: 20 g/L signifie 20 g dissous dans 1 L.',
      theory: '📘 Concentration et dilution\n\nConcentration massique (C) = masse (m) ÷ volume (V)\n• C en g/L, m en g, V en L\n\nConcentration en % = (masse soluté / masse solution) × 100\n\nDilution : on ajoute du solvant (eau) pour diminuer la concentration\n• La quantité de soluté reste la MÊME\n• C₁V₁ = C₂V₂\n\nExemple : dissoudre 5 g de sel dans 0,5 L d\'eau\nC = 5 g ÷ 0,5 L = 10 g/L',
    },
    en: {
      q: 'Concentration in g/L indicates…',
      opts: ['Grams of solute in 1 litre of solution', 'Volume of solvent', 'Temperature of dissolution', 'pH of the solution'],
      exp: 'Mass concentration = mass of solute (g) ÷ volume of solution (L). E.g. 20 g/L means 20 g dissolved in 1 L.',
      theory: '📘 Concentration and Dilution\n\nMass concentration (C) = mass (m) ÷ volume (V)\n• C in g/L, m in g, V in L\n\nConcentration in % = (solute mass / solution mass) × 100\n\nDilution: adding solvent (water) to decrease concentration\n• Amount of solute stays the SAME\n• C₁V₁ = C₂V₂\n\nExample: dissolve 5 g of salt in 0.5 L of water\nC = 5 g ÷ 0.5 L = 10 g/L',
    },
    es: {
      q: 'La concentración en g/L indica…',
      opts: ['Los gramos de soluto en 1 litro de solución', 'El volumen del solvente', 'La temperatura de disolución', 'El pH de la solución'],
      exp: 'Concentración másica = masa del soluto (g) ÷ volumen de solución (L). Ej: 20 g/L significa 20 g disueltos en 1 L.',
      theory: '📘 Concentración y Dilución\n\nConcentración másica (C) = masa (m) ÷ volumen (V)\n• C en g/L, m en g, V en L\n\nConcentración en % = (masa soluto / masa solución) × 100\n\nDilución: agregar solvente (agua) para disminuir la concentración\n• La cantidad de soluto permanece IGUAL\n• C₁V₁ = C₂V₂\n\nEjemplo: disolver 5 g de sal en 0,5 L de agua\nC = 5 g ÷ 0,5 L = 10 g/L',
    },
    ans: 0,
  },
  {
    u: 'mat',
    fr: {
      q: 'Quel changement d\'état se produit quand un liquide devient solide ?',
      opts: ['Solidification', 'Évaporation', 'Sublimation', 'Condensation'],
      exp: 'La solidification est le passage de l\'état liquide à l\'état solide. Le point de solidification de l\'eau est 0 °C.',
      theory: '📘 États de la matière et changements de phase\n\nLes 3 états : solide, liquide, gaz\n\nChangements de phase :\n• Fusion : solide → liquide (ex: glace fond à 0°C)\n• Solidification : liquide → solide\n• Évaporation/ébullition : liquide → gaz\n• Condensation : gaz → liquide\n• Sublimation : solide → gaz (ex: glace sèche CO₂)\n• Déposition : gaz → solide\n\nLe modèle particulaire explique ces états par l\'énergie cinétique des particules.',
    },
    en: {
      q: 'Which phase change occurs when a liquid becomes a solid?',
      opts: ['Solidification', 'Evaporation', 'Sublimation', 'Condensation'],
      exp: 'Solidification is the transition from liquid to solid state. Water solidifies at 0 °C.',
      theory: '📘 States of Matter and Phase Changes\n\nThe 3 states: solid, liquid, gas\n\nPhase changes:\n• Melting: solid → liquid (e.g. ice melts at 0°C)\n• Solidification: liquid → solid\n• Evaporation/boiling: liquid → gas\n• Condensation: gas → liquid\n• Sublimation: solid → gas (e.g. dry ice CO₂)\n• Deposition: gas → solid\n\nThe particle model explains these states through the kinetic energy of particles.',
    },
    es: {
      q: '¿Qué cambio de estado ocurre cuando un líquido se convierte en sólido?',
      opts: ['Solidificación', 'Evaporación', 'Sublimación', 'Condensación'],
      exp: 'La solidificación es el paso del estado líquido al sólido. El punto de solidificación del agua es 0 °C.',
      theory: '📘 Estados de la Materia y Cambios de Fase\n\nLos 3 estados: sólido, líquido, gas\n\nCambios de fase:\n• Fusión: sólido → líquido (ej: hielo se funde a 0°C)\n• Solidificación: líquido → sólido\n• Evaporación/ebullición: líquido → gas\n• Condensación: gas → líquido\n• Sublimación: sólido → gas (ej: hielo seco CO₂)\n• Deposición: gas → sólido\n\nEl modelo de partículas explica estos estados mediante la energía cinética de las partículas.',
    },
    ans: 0,
  },

  // ===== UNIVERS VIVANT =====
  {
    u: 'viv',
    fr: {
      q: 'Quel organite produit l\'énergie (ATP) dans la cellule ?',
      opts: ['Mitochondrie', 'Noyau', 'Ribosome', 'Vacuole'],
      exp: 'La mitochondrie est la centrale énergétique de la cellule. Elle transforme le glucose + O₂ en énergie (ATP).',
      theory: '📘 La cellule — unité de vie\n\nOrganites principaux :\n• Noyau → contient l\'ADN (information génétique)\n• Mitochondrie → production d\'énergie (ATP)\n• Ribosome → synthèse des protéines\n• Membrane plasmique → contrôle les échanges\n• Chloroplaste (végétaux seulement) → photosynthèse\n• Vacuole → stockage (grande dans les cellules végétales)\n\nCellules animales vs végétales :\n→ Végétales ont : paroi cellulaire, chloroplastes, grande vacuole',
    },
    en: {
      q: 'Which organelle produces energy (ATP) in the cell?',
      opts: ['Mitochondrion', 'Nucleus', 'Ribosome', 'Vacuole'],
      exp: 'The mitochondrion is the cell\'s powerhouse. It converts glucose + O₂ into energy (ATP).',
      theory: '📘 The Cell — Unit of Life\n\nMain organelles:\n• Nucleus → contains DNA (genetic information)\n• Mitochondrion → energy production (ATP)\n• Ribosome → protein synthesis\n• Cell membrane → controls exchange\n• Chloroplast (plants only) → photosynthesis\n• Vacuole → storage (large in plant cells)\n\nAnimal vs plant cells:\n→ Plant cells have: cell wall, chloroplasts, large vacuole',
    },
    es: {
      q: '¿Qué orgánulo produce energía (ATP) en la célula?',
      opts: ['Mitocondria', 'Núcleo', 'Ribosoma', 'Vacuola'],
      exp: 'La mitocondria es la central energética de la célula. Transforma glucosa + O₂ en energía (ATP).',
      theory: '📘 La Célula — Unidad de Vida\n\nOrgánulos principales:\n• Núcleo → contiene el ADN (información genética)\n• Mitocondria → producción de energía (ATP)\n• Ribosoma → síntesis de proteínas\n• Membrana plasmática → controla los intercambios\n• Cloroplasto (solo vegetales) → fotosíntesis\n• Vacuola → almacenamiento (grande en células vegetales)\n\nCélulas animales vs vegetales:\n→ Las vegetales tienen: pared celular, cloroplastos, vacuola grande',
    },
    ans: 0,
  },
  {
    u: 'viv',
    fr: {
      q: 'L\'ADN est principalement situé dans…',
      opts: ['Le noyau de la cellule', 'Le cytoplasme', 'La membrane cellulaire', 'Les ribosomes'],
      exp: 'L\'ADN est contenu dans le noyau. Il porte l\'information génétique sous forme de gènes sur des chromosomes.',
      theory: '📘 L\'ADN et les gènes\n\nADN = Acide DésoxyriboNucléique\n• Molécule en double hélice\n• Composée de 4 bases : A, T, C, G\n• Contenu dans le noyau, enroulé sur des chromosomes\n\nChromosome → gènes → ADN\n\nGène : segment d\'ADN qui code une protéine\nHumains : 46 chromosomes (23 paires)\n\nLa séquence des bases détermine les caractéristiques héréditaires.',
    },
    en: {
      q: 'DNA is mainly located in…',
      opts: ['The cell nucleus', 'The cytoplasm', 'The cell membrane', 'The ribosomes'],
      exp: 'DNA is found in the nucleus. It carries genetic information as genes on chromosomes.',
      theory: '📘 DNA and Genes\n\nDNA = DeoxyriboNucleic Acid\n• Double helix molecule\n• Made of 4 bases: A, T, C, G\n• In the nucleus, coiled on chromosomes\n\nChromosome → genes → DNA\n\nGene: DNA segment that codes for a protein\nHumans: 46 chromosomes (23 pairs)\n\nThe base sequence determines inherited characteristics.',
    },
    es: {
      q: 'El ADN se encuentra principalmente en…',
      opts: ['El núcleo de la célula', 'El citoplasma', 'La membrana celular', 'Los ribosomas'],
      exp: 'El ADN está en el núcleo. Porta la información genética en forma de genes sobre cromosomas.',
      theory: '📘 El ADN y los Genes\n\nADN = Ácido DesoxirriboNucleico\n• Molécula en doble hélice\n• Formada por 4 bases: A, T, C, G\n• En el núcleo, enrollado en cromosomas\n\nCromosoma → genes → ADN\n\nGen: segmento de ADN que codifica una proteína\nHumanos: 46 cromosomas (23 pares)\n\nLa secuencia de bases determina las características hereditarias.',
    },
    ans: 0,
  },
  {
    u: 'viv',
    fr: {
      q: 'La mitose produit combien de cellules filles identiques ?',
      opts: ['2 cellules identiques à la cellule mère', '4 cellules avec moitié des chromosomes', '1 cellule plus grande', '3 cellules différentes'],
      exp: 'La mitose est une division cellulaire qui produit 2 cellules filles génétiquement identiques à la cellule mère.',
      theory: '📘 Division cellulaire : mitose et méiose\n\nMITOSE :\n• But : croissance et réparation\n• Résultat : 2 cellules filles identiques (même nb de chromosomes)\n• Phases : prophase, métaphase, anaphase, télophase\n\nMÉIOSE :\n• But : reproduction sexuée (formation des gamètes)\n• Résultat : 4 cellules avec moitié des chromosomes\n• Humains : ovules et spermatozoïdes ont 23 chromosomes\n\nFécondation : ovule (23) + spermatozoïde (23) = zygote (46)',
    },
    en: {
      q: 'Mitosis produces how many identical daughter cells?',
      opts: ['2 cells identical to the parent', '4 cells with half the chromosomes', '1 larger cell', '3 different cells'],
      exp: 'Mitosis is a cell division that produces 2 daughter cells genetically identical to the parent cell.',
      theory: '📘 Cell Division: Mitosis and Meiosis\n\nMITOSIS:\n• Purpose: growth and repair\n• Result: 2 identical daughter cells (same chromosome number)\n• Phases: prophase, metaphase, anaphase, telophase\n\nMEIOSIS:\n• Purpose: sexual reproduction (gamete formation)\n• Result: 4 cells with half the chromosomes\n• Humans: eggs and sperm have 23 chromosomes\n\nFertilization: egg (23) + sperm (23) = zygote (46)',
    },
    es: {
      q: 'La mitosis produce cuántas células hijas idénticas?',
      opts: ['2 células idénticas a la madre', '4 células con la mitad de cromosomas', '1 célula más grande', '3 células diferentes'],
      exp: 'La mitosis es una división celular que produce 2 células hijas genéticamente idénticas a la célula madre.',
      theory: '📘 División Celular: Mitosis y Meiosis\n\nMITOSIS:\n• Propósito: crecimiento y reparación\n• Resultado: 2 células hijas idénticas (mismo número de cromosomas)\n• Fases: profase, metafase, anafase, telofase\n\nMEIOSIS:\n• Propósito: reproducción sexual (formación de gametos)\n• Resultado: 4 células con la mitad de cromosomas\n• Humanos: óvulos y espermatozoides tienen 23 cromosomas\n\nFecundación: óvulo (23) + espermatozoide (23) = cigoto (46)',
    },
    ans: 0,
  },
  {
    u: 'viv',
    fr: {
      q: 'Quel organe filtre le sang et produit l\'urine ?',
      opts: ['Les reins', 'Le foie', 'Les poumons', 'La rate'],
      exp: 'Les reins filtrent le sang pour éliminer les déchets (urée) et régulent l\'eau corporelle via la production d\'urine.',
      theory: '📘 Système excréteur (urinaire)\n\nOrganes principaux :\n• Reins (2) → filtrent ~180 L de sang/jour\n• Uretères → transportent l\'urine vers la vessie\n• Vessie → stocke l\'urine\n• Urètre → évacue l\'urine\n\nLe néphron est l\'unité fonctionnelle du rein.\nLes reins filtrent : urée, eau, sels minéraux.\n\nL\'urine contient : eau (95%), urée, sels.\n\nLe foie produit l\'urée à partir des protéines, les reins l\'éliminent.',
    },
    en: {
      q: 'Which organ filters blood and produces urine?',
      opts: ['The kidneys', 'The liver', 'The lungs', 'The spleen'],
      exp: 'The kidneys filter blood to remove waste (urea) and regulate body water through urine production.',
      theory: '📘 Excretory (Urinary) System\n\nMain organs:\n• Kidneys (2) → filter ~180 L of blood/day\n• Ureters → carry urine to bladder\n• Bladder → stores urine\n• Urethra → expels urine\n\nThe nephron is the kidney\'s functional unit.\nKidneys filter: urea, water, minerals.\n\nUrine contains: water (95%), urea, salts.\n\nThe liver produces urea from proteins; kidneys remove it.',
    },
    es: {
      q: '¿Qué órgano filtra la sangre y produce la orina?',
      opts: ['Los riñones', 'El hígado', 'Los pulmones', 'El bazo'],
      exp: 'Los riñones filtran la sangre para eliminar desechos (urea) y regulan el agua corporal mediante la producción de orina.',
      theory: '📘 Sistema Excretor (Urinario)\n\nÓrganos principales:\n• Riñones (2) → filtran ~180 L de sangre/día\n• Uréteres → transportan orina a la vejiga\n• Vejiga → almacena orina\n• Uretra → expulsa la orina\n\nLa nefrona es la unidad funcional del riñón.\nLos riñones filtran: urea, agua, sales minerales.\n\nLa orina contiene: agua (95%), urea, sales.\n\nEl hígado produce urea a partir de proteínas; los riñones la eliminan.',
    },
    ans: 0,
  },
  {
    u: 'viv',
    fr: {
      q: 'Le système nerveux central comprend…',
      opts: ['Le cerveau et la moelle épinière', 'Les nerfs périphériques uniquement', 'Le cœur et les poumons', 'Les muscles squelettiques'],
      exp: 'Le SNC (cerveau + moelle épinière) coordonne toutes les activités. Le SNP relie le SNC aux organes et muscles.',
      theory: '📘 Système nerveux\n\nSystème nerveux central (SNC) :\n• Cerveau → pensée, mémoire, émotions\n• Moelle épinière → relaie les messages\n\nSystème nerveux périphérique (SNP) :\n• Nerfs qui relient le SNC au reste du corps\n• Volontaire (muscles) et involontaire (organes)\n\nNeurone = cellule nerveuse\n• Dendrites → reçoivent les signaux\n• Axone → transmet les signaux\n• Synapse → jonction entre neurones\n\nActe réflexe : réponse rapide sans passer par le cerveau (ex: retirer sa main du feu)',
    },
    en: {
      q: 'The central nervous system includes…',
      opts: ['The brain and spinal cord', 'Only peripheral nerves', 'The heart and lungs', 'Skeletal muscles'],
      exp: 'The CNS (brain + spinal cord) coordinates all activities. The PNS connects the CNS to organs and muscles.',
      theory: '📘 Nervous System\n\nCentral Nervous System (CNS):\n• Brain → thought, memory, emotions\n• Spinal cord → relays messages\n\nPeripheral Nervous System (PNS):\n• Nerves connecting CNS to rest of body\n• Voluntary (muscles) and involuntary (organs)\n\nNeuron = nerve cell\n• Dendrites → receive signals\n• Axon → transmits signals\n• Synapse → junction between neurons\n\nReflex action: fast response without going through brain (e.g. pulling hand from fire)',
    },
    es: {
      q: 'El sistema nervioso central comprende…',
      opts: ['El cerebro y la médula espinal', 'Solo los nervios periféricos', 'El corazón y los pulmones', 'Los músculos esqueléticos'],
      exp: 'El SNC (cerebro + médula espinal) coordina todas las actividades. El SNP conecta el SNC con órganos y músculos.',
      theory: '📘 Sistema Nervioso\n\nSistema Nervioso Central (SNC):\n• Cerebro → pensamiento, memoria, emociones\n• Médula espinal → transmite mensajes\n\nSistema Nervioso Periférico (SNP):\n• Nervios que conectan el SNC con el resto del cuerpo\n• Voluntario (músculos) e involuntario (órganos)\n\nNeurona = célula nerviosa\n• Dendritas → reciben señales\n• Axón → transmite señales\n• Sinapsis → unión entre neuronas\n\nActo reflejo: respuesta rápida sin pasar por el cerebro (ej: retirar la mano del fuego)',
    },
    ans: 0,
  },
  {
    u: 'viv',
    fr: {
      q: 'Quelle est la fonction principale des globules blancs ?',
      opts: ['Défendre l\'organisme contre les infections', 'Transporter l\'oxygène', 'Coaguler le sang', 'Produire des hormones'],
      exp: 'Les globules blancs (leucocytes) constituent le système immunitaire. Ils détruisent microbes et corps étrangers.',
      theory: '📘 Système immunitaire et sang\n\nComposants du sang :\n• Globules rouges (érythrocytes) → transportent O₂ via hémoglobine\n• Globules blancs (leucocytes) → défense immunitaire\n• Plaquettes → coagulation\n• Plasma → liquide qui transporte tout\n\nImmunité :\n• Naturelle (barrières physiques : peau, mucus)\n• Acquise (anticorps produits par les lymphocytes)\n\nVaccin : introduit un antigène affaibli pour que le corps crée des anticorps\nLe système lymphatique aide à filtrer et à transporter les cellules immunitaires.',
    },
    en: {
      q: 'What is the main function of white blood cells?',
      opts: ['Defend the body against infections', 'Carry oxygen', 'Clot blood', 'Produce hormones'],
      exp: 'White blood cells (leukocytes) form the immune system. They destroy microbes and foreign bodies.',
      theory: '📘 Immune System and Blood\n\nBlood components:\n• Red blood cells (erythrocytes) → carry O₂ via haemoglobin\n• White blood cells (leukocytes) → immune defence\n• Platelets → clotting\n• Plasma → liquid that transports everything\n\nImmunity:\n• Innate (physical barriers: skin, mucus)\n• Adaptive (antibodies produced by lymphocytes)\n\nVaccine: introduces weakened antigen so body creates antibodies\nThe lymphatic system helps filter and transport immune cells.',
    },
    es: {
      q: '¿Cuál es la función principal de los glóbulos blancos?',
      opts: ['Defender el organismo contra las infecciones', 'Transportar oxígeno', 'Coagular la sangre', 'Producir hormonas'],
      exp: 'Los glóbulos blancos (leucocitos) forman el sistema inmunitario. Destruyen microbios y cuerpos extraños.',
      theory: '📘 Sistema Inmunológico y Sangre\n\nComponentes de la sangre:\n• Glóbulos rojos (eritrocitos) → transportan O₂ via hemoglobina\n• Glóbulos blancos (leucocitos) → defensa inmunitaria\n• Plaquetas → coagulación\n• Plasma → líquido que transporta todo\n\nInmunidad:\n• Innata (barreras físicas: piel, mucosidad)\n• Adaptativa (anticuerpos producidos por linfocitos)\n\nVacuna: introduce un antígeno debilitado para que el cuerpo cree anticuerpos\nEl sistema linfático ayuda a filtrar y transportar células inmunitarias.',
    },
    ans: 0,
  },
  {
    u: 'viv',
    fr: {
      q: 'Lors de la respiration cellulaire, la cellule utilise du glucose et produit…',
      opts: ['CO₂ + eau + énergie (ATP)', 'O₂ + glucides', 'Protéines + lipides', 'Azote + vitamines'],
      exp: 'La respiration cellulaire : Glucose + O₂ → CO₂ + H₂O + ATP (énergie). Elle a lieu dans les mitochondries.',
      theory: '📘 Respiration cellulaire vs Photosynthèse\n\nRespiration cellulaire (toutes les cellules) :\nGlucose + O₂ → CO₂ + H₂O + ATP\n• Se passe dans les mitochondries\n• Libère de l\'énergie pour toutes les fonctions vitales\n\nPhotosynthèse (cellules végétales) :\nCO₂ + H₂O + lumière → Glucose + O₂\n• Se passe dans les chloroplastes\n• Produit le glucose qui sert de carburant\n\nCes deux processus sont complémentaires dans les écosystèmes.',
    },
    en: {
      q: 'In cellular respiration, the cell uses glucose and produces…',
      opts: ['CO₂ + water + energy (ATP)', 'O₂ + carbohydrates', 'Proteins + lipids', 'Nitrogen + vitamins'],
      exp: 'Cellular respiration: Glucose + O₂ → CO₂ + H₂O + ATP (energy). It occurs in the mitochondria.',
      theory: '📘 Cellular Respiration vs Photosynthesis\n\nCellular respiration (all cells):\nGlucose + O₂ → CO₂ + H₂O + ATP\n• Occurs in mitochondria\n• Releases energy for all vital functions\n\nPhotosynthesis (plant cells):\nCO₂ + H₂O + light → Glucose + O₂\n• Occurs in chloroplasts\n• Produces glucose used as fuel\n\nThese two processes are complementary in ecosystems.',
    },
    es: {
      q: 'En la respiración celular, la célula usa glucosa y produce…',
      opts: ['CO₂ + agua + energía (ATP)', 'O₂ + carbohidratos', 'Proteínas + lípidos', 'Nitrógeno + vitaminas'],
      exp: 'Respiración celular: Glucosa + O₂ → CO₂ + H₂O + ATP (energía). Ocurre en las mitocondrias.',
      theory: '📘 Respiración Celular vs Fotosíntesis\n\nRespiración celular (todas las células):\nGlucosa + O₂ → CO₂ + H₂O + ATP\n• Ocurre en las mitocondrias\n• Libera energía para todas las funciones vitales\n\nFotosíntesis (células vegetales):\nCO₂ + H₂O + luz → Glucosa + O₂\n• Ocurre en los cloroplastos\n• Produce la glucosa que sirve de combustible\n\nEstos dos procesos son complementarios en los ecosistemas.',
    },
    ans: 0,
  },
  {
    u: 'viv',
    fr: {
      q: 'Le système digestif transforme les aliments en nutriments absorbés dans…',
      opts: ['Le sang (via l\'intestin grêle)', 'Les poumons', 'Les reins', 'La peau'],
      exp: 'Les nutriments sont absorbés au niveau de l\'intestin grêle et passent dans le sang pour être distribués à toutes les cellules.',
      theory: '📘 Système digestif\n\nTrajet des aliments :\nBouche → Œsophage → Estomac → Intestin grêle → Gros intestin → Anus\n\nÉtapes :\n1. Ingestion (manger)\n2. Digestion mécanique (mastication, brassage)\n3. Digestion chimique (enzymes, acide gastrique)\n4. Absorption (intestin grêle → sang)\n5. Élimination (résidus)\n\nNutriments : glucides, lipides, protéines, vitamines, minéraux\nEnzymes digestives décomposent les grosses molécules en petites.',
    },
    en: {
      q: 'The digestive system turns food into nutrients absorbed in…',
      opts: ['Blood (via small intestine)', 'The lungs', 'The kidneys', 'The skin'],
      exp: 'Nutrients are absorbed in the small intestine and enter the blood to be delivered to all cells.',
      theory: '📘 Digestive System\n\nFood pathway:\nMouth → Oesophagus → Stomach → Small intestine → Large intestine → Anus\n\nSteps:\n1. Ingestion (eating)\n2. Mechanical digestion (chewing, churning)\n3. Chemical digestion (enzymes, gastric acid)\n4. Absorption (small intestine → blood)\n5. Elimination (residues)\n\nNutrients: carbohydrates, lipids, proteins, vitamins, minerals\nDigestive enzymes break large molecules into small ones.',
    },
    es: {
      q: 'El sistema digestivo transforma los alimentos en nutrientes absorbidos en…',
      opts: ['La sangre (via intestino delgado)', 'Los pulmones', 'Los riñones', 'La piel'],
      exp: 'Los nutrientes se absorben en el intestino delgado y pasan a la sangre para ser distribuidos a todas las células.',
      theory: '📘 Sistema Digestivo\n\nRecorrido de los alimentos:\nBoca → Esófago → Estómago → Intestino delgado → Intestino grueso → Ano\n\nEtapas:\n1. Ingestión (comer)\n2. Digestión mecánica (masticación, mezcla)\n3. Digestión química (enzimas, ácido gástrico)\n4. Absorción (intestino delgado → sangre)\n5. Eliminación (residuos)\n\nNutrientes: carbohidratos, lípidos, proteínas, vitaminas, minerales\nLas enzimas digestivas descomponen moléculas grandes en pequeñas.',
    },
    ans: 0,
  },

  // ===== TERRE ET ESPACE =====
  {
    u: 'ter',
    fr: {
      q: 'Quelle est la couche externe rigide de la Terre ?',
      opts: ['La lithosphère', 'L\'asthénosphère', 'Le noyau externe', 'Le manteau inférieur'],
      exp: 'La lithosphère est la couche externe rigide, formée par la croûte terrestre et le sommet du manteau.',
      theory: '📘 Structure interne de la Terre\n\nDe l\'extérieur vers le centre :\n1. Lithosphère (croûte + manteau sup.) → rigide, 0–100 km\n2. Asthénosphère → semi-fluide, permet le mouvement des plaques\n3. Manteau → roches solides, convection thermique\n4. Noyau externe → fer et nickel liquides, génère le champ magnétique\n5. Noyau interne → fer solide, ~5000°C\n\nLa Terre a ~4,5 milliards d\'années.\nLes séismes et volcans nous renseignent sur la structure interne.',
    },
    en: {
      q: 'What is the outer rigid layer of the Earth?',
      opts: ['The lithosphere', 'The asthenosphere', 'The outer core', 'The lower mantle'],
      exp: 'The lithosphere is the rigid outer layer, made up of the crust and the top of the mantle.',
      theory: '📘 Earth\'s Internal Structure\n\nFrom outside to centre:\n1. Lithosphere (crust + upper mantle) → rigid, 0–100 km\n2. Asthenosphere → semi-fluid, allows plate movement\n3. Mantle → solid rocks, thermal convection\n4. Outer core → liquid iron and nickel, generates magnetic field\n5. Inner core → solid iron, ~5000°C\n\nEarth is ~4.5 billion years old.\nEarthquakes and volcanoes tell us about internal structure.',
    },
    es: {
      q: '¿Cuál es la capa externa rígida de la Tierra?',
      opts: ['La litosfera', 'La astenosfera', 'El núcleo externo', 'El manto inferior'],
      exp: 'La litosfera es la capa externa rígida, formada por la corteza terrestre y la parte superior del manto.',
      theory: '📘 Estructura Interna de la Tierra\n\nDe afuera hacia el centro:\n1. Litosfera (corteza + manto superior) → rígida, 0–100 km\n2. Astenosfera → semifluida, permite el movimiento de placas\n3. Manto → rocas sólidas, convección térmica\n4. Núcleo externo → hierro y níquel líquidos, genera campo magnético\n5. Núcleo interno → hierro sólido, ~5000°C\n\nLa Tierra tiene ~4,5 mil millones de años.\nLos terremotos y volcanes nos informan sobre la estructura interna.',
    },
    ans: 0,
  },
  {
    u: 'ter',
    fr: {
      q: 'La tectonique des plaques explique…',
      opts: ['Le mouvement des continents', 'La formation des nuages', 'L\'évolution des espèces', 'La rotation de la Lune'],
      exp: 'La tectonique des plaques explique le déplacement lent des plaques lithosphériques et phénomènes associés (séismes, volcans, montagnes).',
      theory: '📘 Tectonique des plaques\n\nLa lithosphère est divisée en ~15 grandes plaques tectoniques.\n\nTypes de mouvements :\n• Divergence → plaques qui s\'éloignent → dorsales océaniques\n• Convergence → plaques qui se rapprochent → montagnes, fosses\n• Coulissage → plaques qui glissent → failles (ex: San Andreas)\n\nMoteur : courants de convection dans le manteau\n\nConséquences :\n• Séismes (tremblements de terre)\n• Volcans\n• Formation de montagnes (ex: Himalaya)\n• Dérive des continents (Pangée → continents actuels)',
    },
    en: {
      q: 'Plate tectonics explains…',
      opts: ['The movement of continents', 'Cloud formation', 'Evolution of species', 'Lunar rotation'],
      exp: 'Plate tectonics explains the slow movement of lithospheric plates and associated phenomena (earthquakes, volcanoes, mountains).',
      theory: '📘 Plate Tectonics\n\nThe lithosphere is divided into ~15 major tectonic plates.\n\nTypes of movement:\n• Divergence → plates moving apart → oceanic ridges\n• Convergence → plates colliding → mountains, trenches\n• Transform → plates sliding → faults (e.g. San Andreas)\n\nDriving force: convection currents in the mantle\n\nConsequences:\n• Earthquakes\n• Volcanoes\n• Mountain formation (e.g. Himalayas)\n• Continental drift (Pangaea → current continents)',
    },
    es: {
      q: 'La tectónica de placas explica…',
      opts: ['El movimiento de los continentes', 'La formación de nubes', 'La evolución de las especies', 'La rotación de la Luna'],
      exp: 'La tectónica de placas explica el lento movimiento de las placas litosféricas y los fenómenos asociados (terremotos, volcanes, montañas).',
      theory: '📘 Tectónica de Placas\n\nLa litosfera está dividida en ~15 grandes placas tectónicas.\n\nTipos de movimiento:\n• Divergencia → placas que se separan → dorsales oceánicas\n• Convergencia → placas que chocan → montañas, fosas\n• Transformante → placas que deslizan → fallas (ej: San Andrés)\n\nMotor: corrientes de convección en el manto\n\nConsecuencias:\n• Terremotos\n• Volcanes\n• Formación de montañas (ej: Himalaya)\n• Deriva continental (Pangea → continentes actuales)',
    },
    ans: 0,
  },
  {
    u: 'ter',
    fr: {
      q: 'Le Soleil produit son énergie principalement par…',
      opts: ['Fusion nucléaire', 'Combustion du carbone', 'Fission nucléaire', 'Réactions chimiques'],
      exp: 'Le Soleil fusionne des atomes d\'hydrogène en hélium, libérant d\'immenses quantités d\'énergie (lumière et chaleur).',
      theory: '📘 Le Soleil et l\'énergie stellaire\n\nFusion nucléaire :\n4H → He + énergie (E = mc²)\n\nCaractéristiques du Soleil :\n• Étoile de type G (naine jaune)\n• Distance de la Terre : ~150 millions km\n• Température de surface : ~5 500°C\n• Température du noyau : ~15 millions°C\n\nLe Soleil représente 99,8% de la masse du système solaire.\n\nLa lumière solaire met ~8 minutes pour atteindre la Terre.\n\nLe Soleil fournit l\'énergie pour la photosynthèse et les climats.',
    },
    en: {
      q: 'The Sun produces its energy mainly through…',
      opts: ['Nuclear fusion', 'Carbon combustion', 'Nuclear fission', 'Chemical reactions'],
      exp: 'The Sun fuses hydrogen atoms into helium, releasing enormous amounts of energy (light and heat).',
      theory: '📘 The Sun and Stellar Energy\n\nNuclear fusion:\n4H → He + energy (E = mc²)\n\nSun characteristics:\n• Type G star (yellow dwarf)\n• Distance from Earth: ~150 million km\n• Surface temperature: ~5,500°C\n• Core temperature: ~15 million°C\n\nThe Sun accounts for 99.8% of the solar system\'s mass.\n\nSunlight takes ~8 minutes to reach Earth.\n\nThe Sun provides energy for photosynthesis and climates.',
    },
    es: {
      q: 'El Sol produce su energía principalmente mediante…',
      opts: ['Fusión nuclear', 'Combustión del carbono', 'Fisión nuclear', 'Reacciones químicas'],
      exp: 'El Sol fusiona átomos de hidrógeno en helio, liberando inmensas cantidades de energía (luz y calor).',
      theory: '📘 El Sol y la Energía Estelar\n\nFusión nuclear:\n4H → He + energía (E = mc²)\n\nCaracterísticas del Sol:\n• Estrella tipo G (enana amarilla)\n• Distancia de la Tierra: ~150 millones km\n• Temperatura superficial: ~5 500°C\n• Temperatura del núcleo: ~15 millones°C\n\nEl Sol representa el 99,8% de la masa del sistema solar.\n\nLa luz solar tarda ~8 minutos en llegar a la Tierra.\n\nEl Sol proporciona energía para la fotosíntesis y los climas.',
    },
    ans: 0,
  },
  {
    u: 'ter',
    fr: {
      q: 'Un fossile est…',
      opts: ['Un reste ou trace d\'organisme préservé dans la roche', 'Un minéral brillant', 'Une roche volcanique', 'Un cristal formé lentement'],
      exp: 'Les fossiles sont des restes (os, coquilles) ou traces (empreintes) d\'organismes anciens conservés dans des roches sédimentaires.',
      theory: '📘 Fossiles et histoire de la vie\n\nFossile : reste ou trace d\'un organisme dans une roche\n\nTypes de fossiles :\n• Fossiles de corps : os, coquilles, dents préservés\n• Fossiles de traces : empreintes, terriers, coprolites\n• Fossiles dans l\'ambre : organismes piégés dans résine\n\nFormation : organisme meurt → sédiments le couvrent → minéralisation sur millions d\'années\n\nRoches sédimentaires = archives de l\'histoire de la vie\n\nÂges : datation radiométrique (carbone 14, uranium-plomb)\n\nLes fossiles montrent l\'évolution des espèces à travers le temps.',
    },
    en: {
      q: 'A fossil is…',
      opts: ['A preserved remain or trace of an organism in rock', 'A shiny mineral', 'A volcanic rock', 'A slowly formed crystal'],
      exp: 'Fossils are remains (bones, shells) or traces (footprints) of ancient organisms preserved in sedimentary rocks.',
      theory: '📘 Fossils and the History of Life\n\nFossil: remain or trace of an organism in rock\n\nTypes of fossils:\n• Body fossils: preserved bones, shells, teeth\n• Trace fossils: footprints, burrows, coprolites\n• Amber fossils: organisms trapped in resin\n\nFormation: organism dies → sediment covers it → mineralisation over millions of years\n\nSedimentary rocks = archive of life history\n\nAging: radiometric dating (carbon-14, uranium-lead)\n\nFossils show the evolution of species through time.',
    },
    es: {
      q: 'Un fósil es…',
      opts: ['Un resto o huella de organismo preservado en roca', 'Un mineral brillante', 'Una roca volcánica', 'Un cristal formado lentamente'],
      exp: 'Los fósiles son restos (huesos, conchas) o huellas (pisadas) de organismos antiguos conservados en rocas sedimentarias.',
      theory: '📘 Fósiles e Historia de la Vida\n\nFósil: resto o huella de un organismo en una roca\n\nTipos de fósiles:\n• Fósiles corporales: huesos, conchas, dientes preservados\n• Fósiles de huellas: pisadas, madrigueras, coprolitos\n• Fósiles en ámbar: organismos atrapados en resina\n\nFormación: organismo muere → sedimentos lo cubren → mineralización en millones de años\n\nRocas sedimentarias = archivo de la historia de la vida\n\nDatación: radiométrica (carbono 14, uranio-plomo)\n\nLos fósiles muestran la evolución de las especies a través del tiempo.',
    },
    ans: 0,
  },
  {
    u: 'ter',
    fr: {
      q: 'Les roches sédimentaires se forment par…',
      opts: ['Accumulation et compaction de sédiments', 'Refroidissement du magma', 'Transformation sous haute pression', 'Fusion à haute température'],
      exp: 'Les roches sédimentaires se forment par dépôt, compaction et cimentation de sédiments (sable, argile, débris organiques).',
      theory: '📘 Les trois types de roches\n\n1. Roches sédimentaires\n• Formation : sédiments déposés en couches, compressés\n• Exemples : calcaire, grès, schiste\n• Contiennent des fossiles !\n\n2. Roches ignées (magmatiques)\n• Formation : refroidissement du magma ou lave\n• Intrusives : granite (refroidissement lent, gros cristaux)\n• Extrusives : basalte (refroidissement rapide, petits cristaux)\n\n3. Roches métamorphiques\n• Formation : transformation par chaleur et pression extrêmes\n• Exemples : marbre (du calcaire), ardoise (du schiste)\n\nCycle des roches : les roches se transforment continuellement.',
    },
    en: {
      q: 'Sedimentary rocks form through…',
      opts: ['Accumulation and compaction of sediments', 'Cooling of magma', 'Transformation under high pressure', 'Melting at high temperature'],
      exp: 'Sedimentary rocks form through the deposition, compaction and cementation of sediments (sand, clay, organic debris).',
      theory: '📘 The Three Types of Rocks\n\n1. Sedimentary rocks\n• Formation: sediments deposited in layers, compressed\n• Examples: limestone, sandstone, shale\n• Contain fossils!\n\n2. Igneous (magmatic) rocks\n• Formation: cooling of magma or lava\n• Intrusive: granite (slow cooling, large crystals)\n• Extrusive: basalt (fast cooling, small crystals)\n\n3. Metamorphic rocks\n• Formation: transformation by extreme heat and pressure\n• Examples: marble (from limestone), slate (from shale)\n\nRock cycle: rocks continuously transform.',
    },
    es: {
      q: 'Las rocas sedimentarias se forman por…',
      opts: ['Acumulación y compactación de sedimentos', 'Enfriamiento del magma', 'Transformación bajo alta presión', 'Fusión a alta temperatura'],
      exp: 'Las rocas sedimentarias se forman por deposición, compactación y cementación de sedimentos (arena, arcilla, restos orgánicos).',
      theory: '📘 Los Tres Tipos de Rocas\n\n1. Rocas sedimentarias\n• Formación: sedimentos depositados en capas, comprimidos\n• Ejemplos: caliza, arenisca, esquisto\n• ¡Contienen fósiles!\n\n2. Rocas ígneas (magmáticas)\n• Formación: enfriamiento del magma o lava\n• Intrusivas: granito (enfriamiento lento, cristales grandes)\n• Extrusivas: basalto (enfriamiento rápido, cristales pequeños)\n\n3. Rocas metamórficas\n• Formación: transformación por calor y presión extremos\n• Ejemplos: mármol (del calizo), pizarra (del esquisto)\n\nCiclo de las rocas: las rocas se transforman continuamente.',
    },
    ans: 0,
  },

  // ===== UNIVERS TECHNOLOGIQUE =====
  {
    u: 'tec',
    fr: {
      q: 'La pression se calcule comme…',
      opts: ['Force divisée par l\'aire (P = F/A)', 'Masse multipliée par vitesse', 'Volume divisé par masse', 'Énergie multipliée par distance'],
      exp: 'P = F/A. La pression (pascals) est la force (newtons) appliquée sur une surface (m²). Plus la surface est petite, plus la pression est grande.',
      theory: '📘 La pression — loi de Pascal\n\nPression P = F / A\n• P en Pascals (Pa)\n• F en Newtons (N)\n• A en m²\n\nLoi de Pascal : dans un fluide incompressible, la pression se transmet uniformément dans toutes les directions.\n\nApplications hydrauliques :\n• Freins hydrauliques de voiture\n• Vérins hydrauliques\n• Pompes à eau\n\nFluide incompressible (liquide) : volume constant sous pression\nFluide compressible (gaz) : volume change sous pression',
    },
    en: {
      q: 'Pressure is calculated as…',
      opts: ['Force divided by area (P = F/A)', 'Mass times velocity', 'Volume divided by mass', 'Energy times distance'],
      exp: 'P = F/A. Pressure (pascals) is force (newtons) applied over a surface area (m²). Smaller area = greater pressure.',
      theory: '📘 Pressure — Pascal\'s Law\n\nPressure P = F / A\n• P in Pascals (Pa)\n• F in Newtons (N)\n• A in m²\n\nPascal\'s Law: in an incompressible fluid, pressure transmits uniformly in all directions.\n\nHydraulic applications:\n• Car hydraulic brakes\n• Hydraulic jacks\n• Water pumps\n\nIncompressible fluid (liquid): constant volume under pressure\nCompressible fluid (gas): volume changes under pressure',
    },
    es: {
      q: 'La presión se calcula como…',
      opts: ['Fuerza dividida entre área (P = F/A)', 'Masa multiplicada por velocidad', 'Volumen dividido entre masa', 'Energía multiplicada por distancia'],
      exp: 'P = F/A. La presión (pascales) es la fuerza (newtons) aplicada sobre una superficie (m²). Menor superficie = mayor presión.',
      theory: '📘 La Presión — Ley de Pascal\n\nPresión P = F / A\n• P en Pascales (Pa)\n• F en Newtons (N)\n• A en m²\n\nLey de Pascal: en un fluido incompresible, la presión se transmite uniformemente en todas las direcciones.\n\nAplicaciones hidráulicas:\n• Frenos hidráulicos del auto\n• Gatos hidráulicos\n• Bombas de agua\n\nFluido incompresible (líquido): volumen constante bajo presión\nFluido compresible (gas): volumen cambia bajo presión',
    },
    ans: 0,
  },
  {
    u: 'tec',
    fr: {
      q: 'En dessin technique, l\'échelle 1:2 signifie que le dessin est…',
      opts: ['2 fois plus petit que l\'objet réel', '2 fois plus grand que l\'objet réel', 'À taille réelle', '10 fois agrandi'],
      exp: 'Échelle 1:2 → le dessin est 2x plus petit. Échelle 2:1 → le dessin est 2x plus grand. 1:1 = taille réelle.',
      theory: '📘 Dessin technique\n\nÉchelle = rapport dessin / réalité\n• 1:1 → taille réelle\n• 1:2 → dessin 2x plus petit (réduction)\n• 2:1 → dessin 2x plus grand (agrandissement)\n\nVues standard :\n• Vue de face (projection principale)\n• Vue de dessus (plan)\n• Vue de côté (profil)\n\nLignes en dessin technique :\n• Trait plein fort → arêtes visibles\n• Trait pointillé → arêtes cachées\n• Trait mixte → axes de symétrie\n\nCotation = dimensions inscrites sur le dessin',
    },
    en: {
      q: 'In technical drawing, scale 1:2 means the drawing is…',
      opts: ['2 times smaller than the real object', '2 times larger than the real object', 'Full size', '10 times enlarged'],
      exp: 'Scale 1:2 → drawing is 2x smaller. Scale 2:1 → drawing is 2x larger. 1:1 = full size.',
      theory: '📘 Technical Drawing\n\nScale = drawing / reality ratio\n• 1:1 → full size\n• 1:2 → drawing 2x smaller (reduction)\n• 2:1 → drawing 2x larger (enlargement)\n\nStandard views:\n• Front view (main projection)\n• Top view (plan)\n• Side view (profile)\n\nLines in technical drawing:\n• Solid thick line → visible edges\n• Dashed line → hidden edges\n• Chain line → axes of symmetry\n\nDimensioning = sizes written on the drawing',
    },
    es: {
      q: 'En dibujo técnico, la escala 1:2 significa que el dibujo es…',
      opts: ['2 veces más pequeño que el objeto real', '2 veces más grande que el objeto real', 'Tamaño real', '10 veces ampliado'],
      exp: 'Escala 1:2 → el dibujo es 2x más pequeño. Escala 2:1 → el dibujo es 2x más grande. 1:1 = tamaño real.',
      theory: '📘 Dibujo Técnico\n\nEscala = relación dibujo / realidad\n• 1:1 → tamaño real\n• 1:2 → dibujo 2x más pequeño (reducción)\n• 2:1 → dibujo 2x más grande (ampliación)\n\nVistas estándar:\n• Vista frontal (proyección principal)\n• Vista superior (planta)\n• Vista lateral (perfil)\n\nLíneas en dibujo técnico:\n• Línea continua gruesa → aristas visibles\n• Línea discontinua → aristas ocultas\n• Línea mixta → ejes de simetría\n\nAcotación = dimensiones escritas en el dibujo',
    },
    ans: 0,
  },
  {
    u: 'tec',
    fr: {
      q: 'Une fonction mécanique élémentaire permet de…',
      opts: ['Accomplir une seule transformation de base (ex: lier, guider)', 'Combiner plusieurs moteurs', 'Produire de l\'électricité', 'Créer un circuit électronique'],
      exp: 'Les fonctions mécaniques élémentaires sont les opérations de base : lier, guider, lubrifier, étanchéifier, amortir. Elles se combinent en fonctions complexes.',
      theory: '📘 Fonctions mécaniques\n\nFonctions mécaniques élémentaires :\n• Lier (maintenir en position)\n• Guider (orienter le mouvement)\n• Lubrifier (réduire la friction)\n• Étanchéifier (empêcher les fuites)\n• Amortir (absorber les chocs)\n\nFonctions mécaniques complexes :\n• Transformer un mouvement (ex: rotatif → linéaire)\n• Transmettre une puissance\n• Modifier une vitesse\n\nExemples dans la vie :\n• Engrenages → modifier vitesse/force\n• Bielles → rotation → translation\n• Ressorts → amortir/stocker énergie',
    },
    en: {
      q: 'An elementary mechanical function allows you to…',
      opts: ['Perform one basic transformation (e.g. link, guide)', 'Combine several motors', 'Generate electricity', 'Create an electronic circuit'],
      exp: 'Elementary mechanical functions are basic operations: link, guide, lubricate, seal, absorb. They combine to form complex functions.',
      theory: '📘 Mechanical Functions\n\nElementary mechanical functions:\n• Link (hold in position)\n• Guide (orient movement)\n• Lubricate (reduce friction)\n• Seal (prevent leaks)\n• Absorb (dampen shocks)\n\nComplex mechanical functions:\n• Transform movement (e.g. rotary → linear)\n• Transmit power\n• Change speed\n\nReal-life examples:\n• Gears → change speed/force\n• Connecting rods → rotation → translation\n• Springs → absorb/store energy',
    },
    es: {
      q: 'Una función mecánica elemental permite…',
      opts: ['Realizar una sola transformación básica (ej: unir, guiar)', 'Combinar varios motores', 'Generar electricidad', 'Crear un circuito electrónico'],
      exp: 'Las funciones mecánicas elementales son operaciones básicas: unir, guiar, lubricar, sellar, amortiguar. Se combinan para formar funciones complejas.',
      theory: '📘 Funciones Mecánicas\n\nFunciones mecánicas elementales:\n• Unir (mantener en posición)\n• Guiar (orientar el movimiento)\n• Lubricar (reducir la fricción)\n• Sellar (evitar fugas)\n• Amortiguar (absorber golpes)\n\nFunciones mecánicas complejas:\n• Transformar un movimiento (ej: rotativo → lineal)\n• Transmitir una potencia\n• Modificar una velocidad\n\nEjemplos de la vida real:\n• Engranajes → cambiar velocidad/fuerza\n• Bielas → rotación → traslación\n• Resortes → amortiguar/almacenar energía',
    },
    ans: 0,
  },
  {
    u: 'tec',
    fr: {
      q: 'La loi de Pascal affirme que la pression dans un fluide enfermé…',
      opts: ['Se transmet uniformément dans toutes les directions', 'Augmente vers le bas seulement', 'Diminue avec la profondeur', 'Reste toujours nulle'],
      exp: 'Pascal : une pression appliquée sur un fluide incompressible enfermé se transmet intégralement dans toutes les directions.',
      theory: '📘 Loi de Pascal et applications\n\nLoi de Pascal (1653) :\n"Toute augmentation de pression appliquée en un point d\'un fluide incompressible au repos est transmise intégralement en tout point du fluide."\n\nApplication — presse hydraulique :\n• Petite force sur petite surface = grande force sur grande surface\n• P₁ = P₂ → F₁/A₁ = F₂/A₂\n\nExemples concrets :\n• Vérin hydraulique (soulever une voiture)\n• Frein hydraulique\n• Chaise de dentiste\n• Bras de pelle mécanique\n\nDifférence avec le principe d\'Archimède : Archimède = poussée vers le haut sur objets immergés.',
    },
    en: {
      q: 'Pascal\'s law states that pressure in an enclosed fluid…',
      opts: ['Transmits uniformly in all directions', 'Only increases downward', 'Decreases with depth', 'Is always zero'],
      exp: 'Pascal: pressure applied to an enclosed incompressible fluid is transmitted fully in all directions.',
      theory: '📘 Pascal\'s Law and Applications\n\nPascal\'s Law (1653):\n"Any increase in pressure applied at one point of an incompressible fluid at rest is transmitted equally to all points in the fluid."\n\nApplication — hydraulic press:\n• Small force on small area = large force on large area\n• P₁ = P₂ → F₁/A₁ = F₂/A₂\n\nReal examples:\n• Hydraulic jack (lifting a car)\n• Hydraulic brakes\n• Dentist\'s chair\n• Excavator arm\n\nDifference from Archimedes: Archimedes = upward buoyant force on submerged objects.',
    },
    es: {
      q: 'La ley de Pascal afirma que la presión en un fluido encerrado…',
      opts: ['Se transmite uniformemente en todas las direcciones', 'Solo aumenta hacia abajo', 'Disminuye con la profundidad', 'Siempre es cero'],
      exp: 'Pascal: una presión aplicada a un fluido incompresible encerrado se transmite íntegramente en todas las direcciones.',
      theory: '📘 Ley de Pascal y Aplicaciones\n\nLey de Pascal (1653):\n"Todo aumento de presión aplicado en un punto de un fluido incompresible en reposo se transmite íntegramente a todos los puntos del fluido."\n\nAplicación — prensa hidráulica:\n• Pequeña fuerza en pequeña área = gran fuerza en gran área\n• P₁ = P₂ → F₁/A₁ = F₂/A₂\n\nEjemplos reales:\n• Gato hidráulico (levantar un auto)\n• Frenos hidráulicos\n• Silla del dentista\n• Brazo de excavadora\n\nDiferencia con Arquímedes: Arquímedes = empuje hacia arriba sobre objetos sumergidos.',
    },
    ans: 0,
  },
];

// =============================================
//  STATE
// =============================================
let state = {
  selected: new Set(),
  mode: 'quiz',
  questions: [],
  current: 0,
  correct: 0,
  streak: 0,
  maxStreak: 0,
  answered: false,
};

// =============================================
//  HELPERS
// =============================================
function t(key) { return UI_TEXT[LANG.current][key]; }
function uMeta(id) { return UNIVERS_META[id]; }
function uName(id) { return UNIVERS_META[id][LANG.current].name; }
function uIcon(id) { return UNIVERS_META[id][LANG.current].icon; }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function qData(q) { return q[LANG.current]; }

function getVerdict(pct) {
  const verdicts = t('verdicts');
  return verdicts.find(v => pct >= v.min);
}

// =============================================
//  RENDER FUNCTIONS
// =============================================
function renderAll() {
  renderLangBar();
  renderUniversGrid();
  renderModeButtons();
  renderStartButton();
}

function renderLangBar() {
  const bar = document.getElementById('lang-bar');
  if (!bar) return;
  bar.innerHTML = ['fr','en','es'].map(l =>
    `<button class="lang-btn${LANG.current===l?' active':''}" onclick="setLang('${l}')">${l.toUpperCase()}</button>`
  ).join('');
}

function renderUniversGrid() {
  const grid = document.getElementById('univers-grid');
  if (!grid) return;
  const ids = ['mat','viv','ter','tec'];
  grid.innerHTML = ids.map(id => {
    const m = uMeta(id);
    const count = QUESTIONS.filter(q => q.u === id).length;
    const sel = state.selected.has(id);
    return `<button class="univ-card${sel?' selected':''}" data-u="${id}" onclick="toggleU('${id}')"
      style="${sel?`--card-border:${m.color};border-color:${m.color};`:''}"
      aria-pressed="${sel}">
      <span class="univ-icon" aria-hidden="true">${uIcon(id)}</span>
      <span class="univ-name">${uName(id)}</span>
      <span class="univ-count">${count} q</span>
    </button>`;
  }).join('');
}

function renderModeButtons() {
  const fr = document.getElementById('mode-fr');
  const ft = document.getElementById('mode-ft');
  if (fr) { fr.textContent = t('modeQuiz'); fr.className = 'mode-btn'+(state.mode==='quiz'?' active':''); }
  if (ft) { ft.textContent = t('modeTout'); ft.className = 'mode-btn'+(state.mode==='tout'?' active':''); }
  const label = document.getElementById('mode-label');
  if (label) label.textContent = t('chooseMode');
  const ulabel = document.getElementById('univ-label');
  if (ulabel) ulabel.textContent = t('chooseUniv');
}

function renderStartButton() {
  const btn = document.getElementById('btn-start');
  if (!btn) return;
  btn.textContent = t('start');
  btn.disabled = state.selected.size === 0;
}

function renderQuestion() {
  state.answered = false;
  const q = state.questions[state.current];
  const d = qData(q);
  const total = state.questions.length;
  const pct = Math.round((state.current / total) * 100);

  document.getElementById('prog-bar').style.width = pct + '%';
  document.getElementById('prog-text').textContent = `${t('q')} ${state.current + 1} / ${total}`;

  const uEl = document.getElementById('q-univers');
  uEl.textContent = uIcon(q.u) + ' ' + uName(q.u);
  uEl.style.color = uMeta(q.u).color;

  document.getElementById('q-score').textContent = `${state.correct} ✓`;
  document.getElementById('q-streak').textContent = `${t('streak')} ${state.streak > 0 ? '🔥'.repeat(Math.min(state.streak, 5)) : '—'}`;

  document.getElementById('question-text').textContent = d.q;
  document.getElementById('feedback-box').className = 'feedback-box';
  document.getElementById('feedback-box').innerHTML = '';

  const btnNext = document.getElementById('btn-next');
  btnNext.style.display = 'none';

  const opts = document.getElementById('options');
  opts.innerHTML = d.opts.map((o, i) =>
    `<button class="opt-btn" onclick="answer(${i})" data-i="${i}">${o}</button>`
  ).join('');

  document.getElementById('theory-panel').style.display = 'none';
  document.getElementById('btn-theory').textContent = t('theory');
  document.getElementById('btn-theory').style.display = 'none';
}

function answer(i) {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.current];
  const d = qData(q);
  const correct = i === q.ans;

  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach(b => b.disabled = true);

  if (correct) {
    state.correct++;
    state.streak++;
    state.maxStreak = Math.max(state.streak, state.maxStreak);
    btns[i].classList.add('correct');
    showFeedback(true, '✓ ' + d.exp);
  } else {
    state.streak = 0;
    btns[i].classList.add('wrong');
    btns[q.ans].classList.add('reveal');
    showFeedback(false, '✗ ' + d.exp);
  }

  document.getElementById('btn-theory').style.display = 'inline-flex';
  document.getElementById('theory-panel').dataset.content = d.theory;

  const btnNext = document.getElementById('btn-next');
  btnNext.style.display = 'flex';
  btnNext.textContent = state.current < state.questions.length - 1 ? t('next') + ' →' : t('finish') + ' →';

  document.getElementById('q-score').textContent = `${state.correct} ✓`;
  document.getElementById('q-streak').textContent = `${t('streak')} ${state.streak > 0 ? '🔥'.repeat(Math.min(state.streak, 5)) : '—'}`;
}

function showFeedback(ok, msg) {
  const fb = document.getElementById('feedback-box');
  fb.className = 'feedback-box show ' + (ok ? 'ok' : 'bad');
  fb.innerHTML = msg;
}

function renderResults() {
  const total = state.questions.length;
  const pct = Math.round((state.correct / total) * 100);
  const v = getVerdict(pct);

  document.getElementById('res-icon').textContent = v.icon;
  document.getElementById('res-pct').textContent = pct + '%';
  document.getElementById('res-msg').textContent = v.msg;
  document.getElementById('res-correct').textContent = state.correct;
  document.getElementById('res-total').textContent = total;
  document.getElementById('res-streak').textContent = state.maxStreak;

  document.getElementById('btn-again').textContent = t('again');
  document.getElementById('btn-home').textContent = t('home');
  document.getElementById('res-title').textContent = t('results');
  document.getElementById('res-label-c').textContent = t('correct');
  document.getElementById('res-label-t').textContent = t('total');
  document.getElementById('res-label-s').textContent = t('streak');
}

// =============================================
//  ACTIONS
// =============================================
function setLang(l) {
  LANG.current = l;
  renderAll();
}

function toggleU(id) {
  if (state.selected.has(id)) state.selected.delete(id);
  else state.selected.add(id);
  renderUniversGrid();
  renderStartButton();
}

function setMode(m) {
  state.mode = m;
  renderModeButtons();
}

function startGame() {
  let pool = QUESTIONS.filter(q => state.selected.has(q.u));
  pool = shuffle(pool);
  if (state.mode === 'quiz') pool = pool.slice(0, 10);
  state.questions = pool;
  state.current = 0;
  state.correct = 0;
  state.streak = 0;
  state.maxStreak = 0;
  showScreen('screen-game');
  renderQuestion();
}

function nextQuestion() {
  state.current++;
  if (state.current >= state.questions.length) {
    showScreen('screen-results');
    renderResults();
    return;
  }
  renderQuestion();
}

function toggleTheory() {
  const panel = document.getElementById('theory-panel');
  const btn = document.getElementById('btn-theory');
  if (panel.style.display === 'none' || panel.style.display === '') {
    panel.style.display = 'block';
    panel.innerHTML = '<pre>' + panel.dataset.content + '</pre>';
    btn.textContent = t('theoryClose');
  } else {
    panel.style.display = 'none';
    btn.textContent = t('theory');
  }
}

function resetGame() { startGame(); }

function showHome() {
  state.selected.clear();
  showScreen('screen-home');
  renderAll();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// =============================================
//  INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
});
