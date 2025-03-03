const engWords = [
  "cigar","rebut","sissy","humph","awake","blush","focal","evade","naval","serve","heath","dwarf","model","karma","stink","grade","quiet","bench","abate","feign","major","death","fresh","crust","stool","colon","abase","marry","react","batty","pride","floss","helix","croak","staff","paper","unfed","whelp","trawl","outdo","adobe","crazy","sower","repay","digit","crate","cluck","spike","mimic","pound","maxim","linen","unmet","flesh","booby","forth","first","stand","belly","ivory","seedy","print","yearn","drain","bribe","stout","panel","crass","flume","offal","agree","error","swirl","argue","bleed","delta","flick","totem","wooer","front","shrub","parry","biome","lapel","start","greet","goner","golem","lusty","loopy","round","audit","lying","gamma","labor","islet","civic","forge","corny","moult","basic","salad","agate","spicy","spray","essay","fjord","spend","kebab","guild","aback","motor","alone","hatch","hyper","thumb","dowry","ought","belch","dutch","pilot","tweed","comet","jaunt","enema","steed","abyss","growl","fling","dozen","boozy","erode","world","gouge","click","briar","great","altar","pulpy","blurt","coast","duchy","groin","fixer","group",
  "pithy","gaudy","chill","heron","vodka","finer","surer","radio","rouge","perch","retch","wrote","clock","tilde","store","prove","bring","solve","cheat","grime","exult","usher","epoch","triad","break","rhino","viral","conic","masse","sonic","vital","trace","using","peach","champ","baton","brake","pluck","craze","gripe","weary","picky","acute","ferry","aside","tapir","troll","unify","rebus","boost","truss","siege","tiger","banal","slump","crank","gorge","query","drink","favor","abbey","tangy","panic","solar","shire","proxy","point","robot","prick","wince","crimp","knoll","sugar","whack","mount","perky","could","wrung","light","those","moist","shard","pleat","aloft","skill","elder","frame","humor","pause","ulcer","ultra","robin","cynic","agora","aroma","caulk","shake","pupal","dodge","swill","tacit","other","thorn","trove","bloke","vivid","spill","chant","choke","rupee","nasty","mourn","ahead","brine","cloth","hoard","sweet","month","lapse","watch","today","focus","smelt","tease","cater","movie","lynch","saute","allow","renew","their","slosh","purge","chest","depot","epoxy","nymph","found","shall","harry","stove","lowly","snout","trope","fewer",
  "asset","tiara","crept","bayou","atoll","manor","creak","showy","phase","froth","depth","gloom","flood","trait","girth","piety","payer","goose","float","donor","atone","primo","apron","blown","cacao","loser","input","gloat","awful","brink","smite","beady","rusty","retro","droll","gawky","hutch","pinto","gaily","egret","lilac","sever","field","fluff","hydro","flack","agape","wench","voice","stead","stalk","berth","madam","night","bland","liver","wedge","augur","roomy","wacky","flock","angry","bobby","trite","aphid","tryst","midge","power","elope","cinch","motto","stomp","upset","bluff","cramp","quart","coyly","youth","rhyme","buggy","alien","smear","unfit","patty","cling","glean","label","hunky","khaki","poker","gruel","twice","twang","shrug","treat","unlit","waste","merit","woven","octal","needy","clown","widow","irony","ruder","gauze","chief","onset","prize","fungi","charm","gully","inter","whoop","taunt","leery","class","theme","lofty","tibia","booze","alpha","thyme","eclat","doubt","parer","chute","stick","trice","alike","sooth","recap","saint","liege","glory","grate","admit","brisk","soggy","usurp","scald","scorn","leave","twine","sting",
  "dandy","vigor","howdy","enjoy","valid","ionic","equal","unset","floor","catch","spade","stein","exist","quirk","denim","grove","spiel","mummy","fault","foggy","flout","carry","sneak","libel","waltz","aptly","piney","inept","aloud","photo","dream","stale","vomit","ombre","fanny","unite","snarl","baker","there","glyph","pooch","hippy","spell","folly","louse","gulch","vault","godly","threw","fleet","grave","inane","shock","crave","spite","valve","skimp","claim","rainy","musty","pique","daddy","quasi","arise","aging","valet","opium","avert","stuck","recut","mulch","genre","plume","rifle","count","incur","total","wrest","mocha","deter","study","lover","safer","rivet","funny","smoke","mound","undue","sedan","pagan","swine","guile","gusty","equip","tough","canoe","chaos","covet","human","udder","lunch","blast","stray","manga","melee","lefty","quick","paste","given","octet","risen","groan","leaky","grind","carve","loose","sadly","spilt","apple","slack","honey","final","sheen","eerie","minty","slick","derby","wharf","spelt","coach","erupt","singe","price","chunk","mince","slave","shame","cheek","ample","flair","foyer","cargo","oxide","plant","olive",
  "spawn","fairy","jiffy","filmy","stack","chose","sleep","ardor","nanny","niece","woozy","handy","grace","ditto","stank","cream","usual","diode","valor","angle","ninja","muddy","chase","reply","prone","spoil","heart","shade","diner","arson","onion","sleet","dowel","couch","palsy","bowel","smile","evoke","creek","lance","eagle","idiot","siren","built","embed","award","dross","annul","goody","frown","patio","laden","humid","elite","lymph","edify","might","reset","visit","gusto","purse","vapor","crock","write","sunny","loath","chaff","slide","queer","venom","stamp","sorry","still","acorn","aping","pushy","tamer","hater","mania","awoke","brawn","swift","exile","birch","lucky","freer","risky","ghost","plier","lunar","winch","snare","nurse","house","borax","nicer","lurch","exalt","about","savvy","toxin","tunic","pried","inlay","chump","lanky","cress","eater","elude","cycle","kitty","boule","moron","tenet","place","lobby","plush","vigil","index","blink","clung","qualm","croup","clink","juicy","stage","decay","nerve","flier","shaft","crook","clean","china","ridge","vowel","gnome","snuck","icing","spiny","rigor","snail","flown","rabid","prose","thank",
  "moldy","dowdy","kneel","track","caddy","quell","dumpy","paler","swore","rebar","scuba","splat","flyer","horny","mason","doing","ozone","amply","molar","ovary","beset","queue","cliff","magic","truce","sport","fritz","edict","twirl","verse","llama","eaten","range","whisk","hovel","rehab","macaw","sigma","spout","verve","sushi","dying","fetid","brain","buddy","thump","scion","candy","chord","basin","march","crowd","arbor","gayly","musky","stain","dally","bless","bravo","stung","title","ruler","kiosk","blond","ennui","layer","fluid","tatty","score","cutie","zebra","barge","matey","bluer","aider","shook","river","privy","betel","frisk","bongo","begun","azure","weave","genie","sound","glove","braid","scope","wryly","rover","assay","ocean","bloom","irate","later","woken","silky","wreck","dwelt","slate","smack","solid","amaze","hazel","wrist","jolly","globe","flint","rouse","civil","vista","relax","cover","alive","beech","jetty","bliss","vocal","often","dolly","eight","joker","since","event","ensue","shunt","diver","poser","worst","sweep","alley","creed","anime","leafy","bosom","dunce","stare","pudgy","waive","choir","stood","spoke","outgo","delay",
  "demur","quota","haven","cavil","swear","crump","dough","gavel","wagon","salon","nudge","harem","pitch","sworn","pupil","excel","stony","cabin","unzip","queen","trout","polyp","earth","storm","until","taper","enter","child","adopt","minor","fatty","husky","brave","filet","slime","glint","tread","steal","regal","guest","every","murky","share","spore","hoist","buxom","inner","otter","dimly","level","sumac","donut","stilt","arena","sheet","scrub","fancy","slimy","pearl","silly","porch","dingo","sepia","amble","shady","bread","friar","reign","dairy","quill","cross","brood","tuber","shear","posit","blank","villa","shank","piggy","freak","which","among","fecal","shell","would","algae","large","rabbi","agony","amuse","bushy","copse","swoon","knife","pouch","ascot","plane","crown","urban","snide","relay","abide","viola","rajah","straw","dilly","crash","amass","third","trick","tutor","woody","blurb","grief","disco","where","sassy","beach","sauna","comic","clued","creep","caste","graze","snuff","frock","gonad","drunk","prong","lurid","steel","halve","buyer","vinyl","utile","smell","adage","worry","tasty","local","trade","finch","ashen","modal","gaunt",
  "roast","speck","sheik","missy","grunt","snoop","party","touch","mafia","emcee","array","south","vapid","jelly","skulk","angst","tubal","lower","crest","sweat","cyber","adore","tardy","swami","notch","groom","roach","hitch","young","align","ready","frond","strap","puree","realm","venue","swarm","offer","seven","dryer","diary","dryly","drank","acrid","heady","theta","junto","pixie","quoth","bonus","shalt","penne","amend","datum","build","piano","shelf","lodge","suing","rearm","coral","ramen","worth","psalm","infer","overt","mayor","ovoid","glide","usage","poise","randy","chuck","prank","fishy","tooth","ether","drove","idler","swath","stint","while","begat","apply","slang","tarot","radar","credo","aware","canon","shift","timer","bylaw","serum","three","steak","iliac","shirk","blunt","puppy","penal","joist","bunny","shape","beget","wheel","adept","stunt","stole","topaz","chore","fluke","afoot","bloat","bully","dense","caper","sneer","boxer","jumbo","lunge","space","avail","short","slurp","loyal","flirt","pizza","conch","tempo","droop","plate","bible","plunk","afoul","savoy","steep","agile","stake","dwell","knave","beard","arose","hairy","train",
  "motif","smash","broil","glare","shove","baggy","mammy","swamp","along","rugby","wager","quack","squat","snaky","debit","mange","skate","ninth","joust","tramp","spurn","medal","micro","rebel","flank","learn","nadir","maple","comfy","remit","gruff","ester","least","mogul","fetch","cause","oaken","aglow","meaty","gaffe","shyly","racer","prowl","thief","stern","poesy","rocky","tweet","waist","spire","grope","havoc","patsy","truly","forty","deity","uncle","swish","giver","preen","bevel","lemur","draft","slope","annoy","lingo","bleak","ditty","curly","cedar","dirge","grown","horde","drool","shuck","crypt","cumin","stock","gravy","locus","wider","breed","quite","chafe","cache","blimp","deign","fiend","logic","cheap","elide","rigid","false","renal","pence","rowdy","shoot","blaze","envoy","posse","brief","never","abort","mouse","mucky","sulky","fiery","media","trunk","yeast","clear","skunk","scalp","bitty","cider","koala","duvet","segue","creme","super","grill","after","owner","ember","reach","nobly","empty","speed","gipsy","recur","smock","dread","merge","burst","kappa","amity","shaky","hover","carol","snort","synod","faint","haunt","flour","chair",
  "plied","quark","burly","novel","waxen","stoic","jerky","blitz","beefy","lyric","hussy","towel","quilt","below","bingo","wispy","brash","scone","toast","easel","saucy","value","spice","honor","route","sharp","bawdy","radii","skull","phony","issue","lager","swell","urine","gassy","trial","flora","upper","latch","wight","brick","retry","holly","decal","grass","shack","dogma","mover","defer","sober","optic","crier","vying","nomad","flute","hippo","shark","drier","obese","bugle","tawny","chalk","feast","ruddy","pedal","scarf","cruel","bleat","tidal","slush","semen","windy","dusty","sally","igloo","nerdy","jewel","shone","whale","hymen","abuse","fugue","elbow","crumb","pansy","welsh","syrup","terse","suave","gamut","swung","drake","melon","kneed","decoy","voila","ankle","arrow","mushy","tribe","cease","eager","birth","graph","odder","terra","weird","tried","clack","color","rough","weigh","uncut","ladle","strip","craft","minus","dicey","titan","lucid","vicar","dress","ditch","gypsy","pasta","taffy","flame","swoop","aloof","sight","broke","teary","chart","sixty","wordy","sheer","leper","nosey","bulge","savor","clamp","funky","foamy","toxic","brand",
  "freed","afire","shirt","grout","oddly","tithe","plaid","dummy","broom","blind","torch","enemy","again","tying","pesky","alter","gazer","noble","ethos","bride","extol","decor","hobby","beast","idiom","utter","these","sixth","alarm","erase","elegy","spunk","piper","scaly","scold","hefty","chick","sooty","canal","whiny","slash","quake","joint","swept","prude","heavy","wield","femme","lasso","maize","shale","screw","spree","smoky","whiff","scent","glade","spent","prism","stoke","riper","orbit","cocoa","guilt","humus","shush","table","smirk","wrong","noisy","alert","shiny","elate","resin","whole","hunch","pixel","polar","hotel","sword","cleat","mango","rumba","puffy","filly","billy","leash","clout","dance","ovate","facet","chili","paint","liner","curio","salty","audio","snake","fable","cloak","navel","spurt","pesto","balmy","flash","unwed","early","churn","weedy","stump","lease","witty","wimpy","spoof","saner","blend","salsa","thick","warty","manic","blare","squib","spoon","probe","crepe","knack","force","debut","order","haste","teeth","agent","widen","icily","slice","ingot","clash","juror","blood","abode","throw","unity","pivot","slept","troop",
  "morph","cacti","tacky","spool","demon","moody","annex","begin","fuzzy","patch","water","lumpy","admin","omega","limit","tabby","macho","aisle","skiff","basis","plank","verge","botch","crawl","lousy","slain","cubic","raise","wrack","guide","foist","cameo","under","actor","revue","fraud","harpy","scoop","climb","refer","olden","clerk","debar","tally","ethic","cairn","tulle","ghoul","hilly","crude","apart","scale","older","plain","sperm","briny","abbot","rerun","quest","crisp","bound","befit","drawn","suite","itchy","cheer","bagel","guess","broad","axiom","chard","caput","leant","harsh","curse","proud","swing","opine","taste","lupus","gumbo","miner","green","chasm","lipid","topic","armor","brush","crane","mural","abled","habit","bossy","maker","dusky","dizzy","lithe","brook","jazzy","fifty","sense","giant","surly","legal","fatal","flunk","began","prune","small","slant","scoff","torus","ninny","covey","viper","taken","moral","vogue","owing","token","entry","booth","voter","chide","elfin","ebony","neigh","minim","scour","glass","gamer","scrap","money","hinge","album","vouch","midst","canny","fetus","butch","farce","slung","tipsy","metal","yield",
  "plumb","dingy","butte","drill","tripe","bicep","tenor","krill","worse","drama","hyena","think","ratio","cobra","basil","scrum","bused","phone","court","camel","proof","heard","angel","petal","pouty","throb","maybe","fetal","sprig","spine","shout","cadet","macro","dodgy","satyr","rarer","binge","trend","nutty","leapt","amiss","split","myrrh","width","sonar","tower","baron","fever","waver","spark","belie","sloop","expel","smote","baler","above","north","wafer","scant","frill","awash","snack","scowl","frail","drift","limbo","fence","motel","ounce","wreak","revel","talon","prior","knelt","cello","flake","debug","anode","crime","salve","scout","imbue","pinky","stave","vague","chock","fight","video","stone","teach","cleft","frost","prawn","booty","twist","apnea","stiff","plaza","ledge","tweak","board","grant","medic","bacon","cable","brawl","slunk","raspy","forum","drone","women","mucus","boast","toddy","coven","tumor","truer","wrath","stall","steam","axial","purer","daily","trail","niche","mealy","juice","nylon","plump","merry","flail","papal","wheat","berry","cower","erect","brute","leggy","snipe","sinew","skier","penny","jumpy","rally","umbra",
  "avian","greed","satin","tonic","parka","sniff","livid","stark","trump","giddy","reuse","taboo","avoid","quote","devil","liken","gloss","buyer","beret","noise","gland","dealt","sling","rumor","opera","thigh","tonga","flare","wound","white","bulky","etude","horse","circa","paddy","inbox","fizzy","grain","exert","surge","gleam","belle","salvo","crush","fruit","sappy","taker","tract","ovine","spiky","frank","reedy","filth","spasm","heave","mambo","right","clank","trust","lumen","borne","spook","sauce","amber","lathe","carat","corer","dirty","slyly","affix","alloy","taint","sheep","kinky","wooly","mauve","flung","yacht","fried","quail","brunt","grimy","curvy","cagey","rinse","deuce","state","grasp","milky","bison","graft","sandy","baste","flask","hedge","girly","swash","boney","coupe","endow","abhor","welch","blade","tight","geese","miser","mirth","cloud","cabal","leech","close","tenth","pecan","droit","grail","clone","guise","ralph","tango","biddy","smith","mower","payee","serif","drape","fifth","spank","glaze","allot","truck","kayak","virus","testy","tepee","fully","zonal","metro","curry","grand","banjo","axion","bezel","comma","foray","scare",
  "occur","chain","nasal","gooey","filer","brace","allay","pubic","raven","plead","gnash","flaky","munch","dully","eking","thing","slink","hurry","theft","shorn","pygmy","ranch","wring","lemon","shore","mamma","froze","newer","style","moose","antic","drown","vegan","chess","guppy","union","lever","lorry","image","cabby","druid","exact","truth","dopey","spear","cried","chime","crony","stunk","timid","batch","gauge","rotor","crack","curve","latte","witch","bunch","repel","anvil","soapy","meter","broth","madly","dried","scene","known","magma","roost","woman","thong","punch","pasty","downy","knead","whirl","rapid","clang","anger","drive","goofy","email","music","stuff","bleep","rider","mecca","folio","setup","verso","quash","fauna","gummy","happy","newly","fussy","relic","guava","ratty","fudge","femur","chirp","forte","alibi","whine","petty","golly","plait","fleck","felon","gourd","brown","thrum","ficus","stash","decry","wiser","junta","visor","daunt","scree","impel","await","press","whose","turbo","stoop","speak","mangy","eying","inlet","crone","pulse","mossy","staid","hence","pinch","teddy","sully","snore","ripen","snowy","attic","going","leach",
  "tonal","bigot","peril","piece","blame","haute","spied","undid","intro","basal","shine","gecko","rodeo","guard","steer","loamy","scamp","scram","manly","hello","vaunt","organ","feral","knock","extra","condo","adapt","willy","polka","rayon","skirt","faith","torso","match","mercy","tepid","sleek","riser","twixt","peace","flush","catty","login","eject","roger","rival","untie","refit","aorta","adult","judge","rower","artsy","rural","shave","hardy","shied","drawl","daisy","putty","strut","burnt","tulip","crick","idyll","vixen","furor","geeky","cough","naive","shoal","stork","bathe","aunty","check","prime","brass","outer","furry","razor","elect","evict","imply","seize","hotly","laugh","sieve","block","meant","grape","noose","shown","zesty","hasty","royal","smart","fibre","sloth","heist","fiber","clasp","adorn","fella","tense","trash","parse","story","gross","squad","clump","badly","natal","marsh","askew","budge","ideal","enact","badge","shrew","being","sewer","forgo","modem","black","hound","rogue","shawl","bough","inert","poppy","bilge","clove","homer","detox","delve","spare","larva","scary","stair","mouth","savor","sling","sneak","squat","sweep"
];

const finWords = [
  'apina', 'aitta', 'aatos', 'alava', 'ahava', 'asema', 'ajuri', 'aaria', 'aatra', 'ahdas', 'aalto', 'avain', 'askel', 'apaja', 'aarre', 'ahdas', 'ajaja', 'arina', 'ahdas', 'ankea', 'ankka', 'aisti', 'atomi', 'ahdin', 'ammus', 'aamen', 'aines', 'ainoa', 'ahkio', 'ahmia', 'arkki', 'aromi', 'aioli', 'ainut', 'aitta', 'aatto', 'ahdas', 'ahven', 'ahtaa', 'aisti', 'aivan', 'aivot', 'ajuri', 'aktio', 'alias', 'alkio', 'apila', 'arabi', 'apnea', 'alppi', 'altis', 'askel', 'ameba', 'baana', 'buumi', 'baari', 'bonus', 'bussi', 'byroo', 'bingo', 'boksi', 'booli', 'blini', 'bändi', 'banjo', 'biisi', 'beige', 'beibi', 'beesi', 'carla', 'chili', 'coupe', 'curry', 'diiva', 'dyyni', 'duuni', 'daami', 'dippi', 'donna', 'duuma', 'duuri', 'disko', 'dekki', 'ennen', 'erite', 'etelä', 'estää', 'erota', 'esine', 'eläin', 'eukko', 'elävä', 'eräät', 'evätä', 'esite', 'erota', 'eroon', 'estää', 'etuus', 'etsiä', 'etevä', 'entäs', 'ensin', 'eheys', 'eksyä', 'eloon', 'ellei', 'elämä', 'elävä', 'email', 'empiä', 'elpyä', 'firma', 'fakta', 'faksi', 'farsi', 'foksi', 'fobia', 'fuksi', 'futis', 'fudut', 'finni', 'farao', 'farmi', 'fiini', 'filmi', 'lippu', 'loppu', 'fööni',
  'geeli', 'genre', 'gummi', 'gamma', 'glögi', 'gaala', 'gongi', 'gradu', 'gängi', 'huone', 'hinta', 'huuli', 'hattu', 'halpa', 'hyppy', 'hakku', 'huono', 'haamu', 'harva', 'hehku', 'helle', 'hella', 'haava', 'haave', 'haara', 'hento', 'hylly', 'hidas', 'hurja', 'halko', 'henki', 'hiili', 'hissi', 'hipoa', 'haloo', 'hanhi', 'hapan', 'happo', 'ikoni', 'istua', 'imuri', 'itkeä', 'ikävä', 'inssi', 'iskeä', 'iätön', 'ipana', 'intro', 'ininä', 'iäkäs', 'imuri', 'ikänä', 'iiris', 'ihana', 'idoli', 'imago', 'ilves', 'ilkeä', 'ilkiö', 'juttu', 'jänis', 'jalka', 'juoma', 'jousi', 'juoni', 'joulu', 'jakaa', 'jousi', 'juhta', 'juova', 'jurri', 'jussi', 'juoru', 'juhla', 'junnu', 'juoda', 'juomu', 'juoni', 'julli', 'jäyhä', 'jannu', 'jatke', 'jäädä', 'jälki', 'jauho', 'jauhe', 'jotta', 'joulu', 'jousi', 'jänne', 'jokin', 'johto', 'kausi', 'kaali', 'kaasu', 'kaato', 'kaapu', 'kaari', 'kaima', 'kello', 'kasvi', 'kulta', 'kahvi', 'kakku', 'kirja', 'kaava', 'karja', 'kätkö', 'kaivo', 'katto', 'korsi', 'lehti', 'laulu', 'lintu', 'luola', 'laaja', 'laama', 'laatu', 'laava', 'laiha', 'lahja', 'leuka', 'leveä', 'lakka', 'lyijy', 'laina', 'lanka', 'laita', 'leppä',
  'leveä', 'leuto', 'lihas', 'laavu', 'lahna', 'lanka', 'maksa', 'malli', 'metsä', 'maksa', 'maksu', 'malto', 'mambo', 'mango', 'muoto', 'muusi', 'maali', 'muovi', 'malja', 'mafia', 'makro', 'mieto', 'magma', 'maila', 'maine', 'maito', 'maski', 'marja', 'mutka', 'mooli', 'myötä', 'miina', 'mokka', 'moppi', 'mitta', 'miina', 'neliö', 'nauru', 'nuoli', 'nuttu', 'nuora', 'notko', 'normi', 'norsu', 'neula', 'niska', 'nälkä', 'nuori', 'nasta', 'nielu', 'nopea', 'nuppu', 'nälkä', 'nänni', 'nätti', 'nummi', 'nuija', 'nuhde', 'nuuka', 'nuoli', 'nössö', 'nappi', 'nassu', 'näätä', 'nuolu', 'nurmi', 'neiti', 'ovela', 'omena', 'ostaa', 'ohuet', 'orava', 'onnea', 'optio', 'ontua', 'onkia', 'ommel', 'orava', 'orkku', 'osuus', 'ostos', 'osake', 'osuma', 'ohjus', 'oikea', 'oikoa', 'ohari', 'pakka', 'perus', 'paita', 'puoli', 'puuta', 'potku', 'pyyhe', 'poika', 'pallo', 'pihka', 'pieni', 'polku', 'pesti', 'pyörä', 'purje', 'pullo', 'pakka', 'pahka', 'piiri', 'perse', 'pelko', 'palaa', 'riisi', 'raita', 'ruoka', 'reuna', 'rikka', 'rakas', 'runko', 'rikki', 'rauha', 'rinta', 'roosa', 'ruusu', 'rauta', 'ranta', 'rotta', 'ruuti', 'sieni', 'saari', 'sokki', 'sokea',
  'siida', 'sonni', 'sorja', 'sotia', 'spray', 'suoja', 'salmi', 'sisar', 'sissi', 'sitko', 'siveä', 'sorsa', 'syksy', 'suola', 'sataa', 'sokka', 'sauna', 'sulka', 'suomi', 'saate', 'sadas', 'sakea', 'salaa', 'saldo', 'sakko', 'sanka', 'sanko', 'sauva', 'seinä', 'seiti', 'selko', 'selli', 'seppä', 'siima', 'siinä', 'siipi', 'siitä', 'sikiö', 'sileä', 'silmä', 'silmu', 'tuuli', 'talvi', 'taulu', 'tippa', 'tiimi', 'tieto', 'tulos', 'tulli', 'tarha', 'teräs', 'tikki', 'tikku', 'tippi', 'taide', 'tahto', 'taite', 'tissi', 'toive', 'toivo', 'tuore', 'torua', 'torso', 'tuhat', 'tuppi', 'turpa', 'turku', 'tuhma', 'tuima', 'taksa', 'taika', 'tulos', 'tuohi', 'tuoli', 'tyyni', 'taala', 'tahko', 'tahma', 'talja', 'talvi', 'tappi', 'tanko', 'tulva', 'tammi', 'tatti', 'tauko', 'termi', 'terva', 'uskoa', 'uljas', 'uudet', 'umpio', 'upeus', 'utelu', 'upsis', 'usein', 'uusia', 'uupua', 'upota', 'uudis', 'uinua', 'uinti', 'uhota', 'ulina', 'ultra', 'uloke', 'uhata', 'ulkoa', 'vuosi', 'varma', 'voima', 'viima', 'valta', 'vuori', 'vahva', 'varjo', 'vaara', 'vuoro', 'vuoto', 'väljä', 'väite', 'vaari', 'vaasi', 'vaate', 'vaisu', 'virus', 'visio', 'vätys', 'väärä',
  'vuohi', 'vuoka', 'vuolu', 'vaimo', 'vaihe', 'varis', 'vasen', 'varsa', 'vaunu', 'vakio', 'vanki', 'vanua', 'vapaa', 'valas', 'valmu', 'valve', 'vehje', 'vehnä', 'vedos', 'veivi', 'vekki', 'vauva', 'velli', 'venyä', 'verbi', 'vessa', 'video', 'vichy', 'vihko', 'viili', 'viina', 'viini', 'viiru', 'viiri', 'vippi', 'virhe', 'vamma', 'vanha', 'yöllä', 'ylpeä', 'ykkös', 'yritä', 'ynseä', 'yskiä', 'yöasu', 'yöpuu', 'yrtti', 'yötön', 'ylväs', 'yltää', 'yhtiö', 'yhtye', 'yksin', 'yksiö', 'yletä', 'yltyä', 'yöuni', 'yltää', 'aalto', 'apina', 'aitta', 'ahmia', 'asema', 'aatto', 'ankka', 'aivan', 'aalto', 'ahdas', 'ameba', 'alias', 'aitta', 'ahdas', 'aarre', 'ankea', 'ainoa', 'ahdas', 'aamen', 'apila', 'arabi', 'baari', 'carla', 'daami', 'fakta', 'gamma', 'halpa', 'haamu', 'haava', 'haave', 'haara', 'karja', 'kaali', 'kaasu', 'kaato', 'kaapu', 'kaari', 'kaima', 'laina', 'lanka', 'laaja', 'laavu', 'lahna', 'laama', 'laatu', 'laava', 'laiha', 'lahja', 'lakka', 'malja', 'maali', 'mafia', 'magma', 'maila', 'marja', 'nasta', 'ranta', 'rauta', 'rakas', 'raita', 'rauha', 'sauna', 'saari', 'saate', 'sanka', 'sadas', 'tarha', 'tahma', 'taksa', 'talja', 'varma',
  'valta', 'koira', 'kissa', 'vaasi', 'vauva', 'palvi', 'pälvi', 'yötyö', 'vaate', 'vaari', 'vahva', 'vanua', 'varsa', 'vamma', 'vanha', 'kakka', 'valas', 'peppu', 'pappa'
];

let isEnglish = false;

let wordsData: string[] = engWords;
let dictionaryData: string[] = engWords;


const WORD_LENGTH = 5;
const FLIP_ANIMATION_DURATION = 500; // Set your animation duration here
const DANCE_ANIMATION_DURATION = 500; // Set your dance animation duration here

const guessGrid = document.querySelector("#guess-grid") as HTMLElement;
const tiles: HTMLElement[] = Array.from(guessGrid.querySelectorAll(".tile"));
const alertContainer = document.querySelector(".alert-container") as HTMLElement;
let activeTilesIndices: number[] = [];
let currentRow = 0;
const keyboard = document.querySelector("[data-keyboard]") as HTMLElement;

let targetWord = getRandomWord(wordsData);

function getRandomWord(data: string[]): string {
    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomIndex]);
    return data[randomIndex];
}

startInteraction();

function startInteraction(): void {
  document.addEventListener("click", handleMouseClick);
}

function stopInteraction(): void {
  document.removeEventListener("click", handleMouseClick);
}

function handleMouseClick(e: MouseEvent): void {
  const target = e.target as HTMLElement;

  if (target.matches("[data-key]")) {
    const key = target.dataset.key;
    if (key) pressKey(key);
    return;
  }

  if (target.matches("[data-enter]")) {
    submitGuess();
    return;
  }

  if (target.matches("[data-delete]")) {
    deleteKey();
    return;
  }
}

const restartButton = document.getElementById("restart-button");

if (restartButton) {
  restartButton.addEventListener("click", () => {
    setTimeout(() => {
      window.location.reload();
    }, 200);
  });
}

const languageToggle = document.getElementById("language-toggle") as HTMLInputElement;
const languageLabel = document.querySelector("label[for='language-toggle']");

if (languageToggle && languageLabel) {
  languageToggle.addEventListener("click", () => {
    
    // Prevent changing language if the game is in progress
    if (getActiveTiles().length > 0) {
      showAlert("Finish or restart the game first", 2000);
      languageLabel.classList.add("disabled");
      languageToggle.disabled = true;
      return;
    }

    // Change language
    isEnglish = !isEnglish;
    
    wordsData = isEnglish ? finWords : engWords;
    dictionaryData = isEnglish ? finWords : engWords;

    // Get new target word in the selected language
    targetWord = getRandomWord(wordsData);
    
    const zKey = keyboard.querySelector("[data-key='Z']") as HTMLButtonElement;
    const xKey = keyboard.querySelector("[data-key='X']") as HTMLButtonElement;
    const öKey = keyboard.querySelector("[data-key='Ö']") as HTMLButtonElement;
    const äKey = keyboard.querySelector("[data-key='Ä']") as HTMLButtonElement;

    setTimeout(() => {
      if (isEnglish) {
        zKey.textContent = "Ö";
        xKey.textContent = "Ä";
        zKey.dataset.key = "Ö";
        xKey.dataset.key = "Ä";
      }
      else {
        öKey.textContent = "Z";
        äKey.textContent = "X";
        öKey.dataset.key = "Z";
        äKey.dataset.key = "X";
      }

      languageLabel.classList.remove("disabled");
      languageToggle.disabled = false;
    }, 500);
  });
}

function pressKey(key: string): void {
  const rowStart = currentRow * WORD_LENGTH;
  const rowEnd = rowStart + WORD_LENGTH;
  const rowTiles = tiles.slice(rowStart, rowEnd);

  const nextTile = rowTiles.find(tile => !tile.dataset.letter && !tile.dataset.locked);
  if (!nextTile) return; // Row is full

  nextTile.dataset.letter = key.toLowerCase();
  nextTile.textContent = key;
  nextTile.dataset.state = "active";

  updateActiveTiles();
}

function deleteKey(): void {
  const rowStart = currentRow * WORD_LENGTH;
  const rowEnd = rowStart + WORD_LENGTH;
  const rowTiles = tiles.slice(rowStart, rowEnd);

  const activeTiles = rowTiles.filter(tile => tile.dataset.letter && !tile.dataset.locked);
  const lastTile = activeTiles[activeTiles.length - 1];

  if (!lastTile) return; // No tiles to delete

  lastTile.textContent = "";
  delete lastTile.dataset.state;
  delete lastTile.dataset.letter;

  updateActiveTiles();
}

function submitGuess(): void {
  const rowStart = currentRow * WORD_LENGTH;
  const rowTiles = tiles.slice(rowStart, rowStart + WORD_LENGTH);

  if (rowTiles.length !== WORD_LENGTH || rowTiles.some(tile => !tile.dataset.letter)) {
    showAlert("Not enough letters");
    shakeTiles(rowTiles);
    return;
  }

  const guess = rowTiles.map(tile => tile.dataset.letter).join("");

  if (!dictionaryData.includes(guess)) {
    showAlert("Not in word list");
    shakeTiles(rowTiles);
    return;
  }

  rowTiles.forEach((tile, index) => {
    flipTile(tile, index, rowTiles, guess);
    tile.dataset.locked = "true";
  });

  currentRow++;
  stopInteraction();
}

function flipTile(tile: HTMLElement, index: number, array: HTMLElement[], guess: string): void {
  const letter = tile.dataset.letter!;
  const key = keyboard.querySelector(`[data-key="${letter.toUpperCase()}"]`) as HTMLElement;

  setTimeout(() => {
    tile.classList.add("flip");
  }, (index * FLIP_ANIMATION_DURATION) / 2);

  tile.addEventListener("transitionend", () => {
    tile.classList.remove("flip");

    if (targetWord[index] === letter) {
      tile.dataset.state = "correct";
      key?.classList.add("correct");
    }

    else if (targetWord.includes(letter)) {
      tile.dataset.state = "wrong-location";
      key?.classList.add("wrong-location");
    }

    else {
      tile.dataset.state = "wrong";
      key?.classList.add("wrong");

      if (key) {
        key.dataset.disabled = "true";
        key.style.pointerEvents = "none";
        key.style.opacity = "0.5";
      }
    }

    if (index === array.length - 1) {
      tile.addEventListener("transitionend", () => {
        startInteraction();
        checkWinLose(guess, array);
      }, { once: true });
    }
  }, { once: true });
  return;
}

function updateActiveTiles(): void {
  activeTilesIndices = [];
  tiles.forEach((tile, index) => {
    if (tile.dataset.letter) {
      activeTilesIndices.push(index);
    }
  });
}

function getActiveTiles(): HTMLElement[] {
  updateActiveTiles();
  return activeTilesIndices.map(index => tiles[index]);
}

function showAlert(message: string, duration: number | null = 2000): void {
  if (!alertContainer) console.log("Alert container not found");
  const alert = document.createElement("div");
  alert.textContent = message;
  alert.classList.add("alert");
  alertContainer.prepend(alert);

  if (duration === null) return;

  setTimeout(() => {
    alert.classList.add("hide");
    alert.addEventListener("transitionend", () => {
      alert.remove();
    });
  }, duration);
}

function shakeTiles(tiles: HTMLElement[]): void {
  tiles.forEach((tile) => {
    tile.classList.add("shake");
    tile.addEventListener(
      "animationend",
      () => {
        tile.classList.remove("shake");
      },
      { once: true }
    );
  });
}

function checkWinLose(guess: string, tiles: HTMLElement[]): void {
  if (guess === targetWord) {
    showAlert("You Won", 5000);
    danceTiles(tiles);
    stopInteraction();
    return;
  }

  const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])");
  if (remainingTiles.length === 0) {
    showAlert(targetWord.toUpperCase(), null);
    stopInteraction();
  }
}

function danceTiles(tiles: HTMLElement[]): void {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance");
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("dance");
        },
        { once: true }
      );
    }, (index * DANCE_ANIMATION_DURATION) / 5);
  });
}
