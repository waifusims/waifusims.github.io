var classSkills =
{
	fencer:
	{		
		RapierMastery:
		{
			name_en: "Rapier Mastery",
			name_jp: "突剣マスタリー",
			details: "Raises attack power when a sword is equipped.<br>Normal attacks with a sword become Stab attacks.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 10,
			coords: {x:0, y:0},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		ChainFire:
		{
			name_en: "Chain Flame",
			name_jp: "チェインファイア",
			details: "This turn, if the designated target is hit by a Fire or Stab attack, follow up with a STR-based Fire+Stab attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:1},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["LEGS"]
		},
		ChainIce:
		{
			name_en: "Chain Freeze",
			name_jp: "チェインフリーズ",
			details: "This turn, if the designated target is hit by an Ice or Stab attack, follow up with a STR-based Ice+Stab attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:2},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["LEGS"]
		},
		ChainVolt:
		{
			name_en: "Chain Shock",
			name_jp: "チェインショック",
			details: "This turn, if the designated target is hit by a Volt or Stab attack, follow up with a STR-based Volt+Stab attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:3},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["LEGS"]
		},
		Predict:
		{
			name_en: "Predict",
			name_jp: "プレディクト",
			details: "For one turn, increases the Fencer's evasion and chance to be targeted.<br>The Fencer takes 2.5x damage from all sources while Predict is active.<br>Each time the Fencer dodges an attack, their evasion and chance to be targeted are decreased.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:4},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["LEGS"]
		},
		ChainBoost:
		{
			name_en: "Chain Boost",
			name_jp: "チェインブースト",
			details: "Each time a Chain skill activates, the Chain skill's damage on that turn increases.<br>The maximum bonus is 99%.",
			dep: {ChainFire:2, ChainIce:2, ChainVolt:2},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:1.5},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		ChainBurst:
		{
			name_en: "Chain Burst",
			name_jp: "チェインバースト",
			details: "When an enemy is killed with a Chain skill, the Fencer will attack another enemy with melee STR-based damage of the same element.",
			dep: {ChainFire:2, ChainIce:2, ChainVolt:2},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:2.5},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		WindCurtain:
		{
			name_en: "Wind Curtain",
			name_jp: "ウィンドカーテン",
			details: "Places a buff on a row of allies that allows them to dodge the next incoming physical attack.<br>When an attack is dodged, the buff is removed.",
			dep: {Predict:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 5,
			coords: {x:1, y:4},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["HEAD"]
		},
		VisionThrust:
		{
			name_en: "Optic Thrust",
			name_jp: "ビジョンスラスト",
			details: "Melee, STR-based stab attack to one enemy, may blind.<br>Has a 120% speed modifier and +25 base accuracy at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:5},
			scalingStats: ["STR"],
			damageType: ["STAB"],
			range: "MELEE",
			bodyParts: ["ARMS"]
		},
		Sylphid:
		{
			name_en: "Sylphid",
			name_jp: "シルフィード",
			details: "When an attack is dodged, the Fencer has a chance to counter-attack the source of the attack.<br>Every time the Fencer counters, the chance to counter again on that turn decreases by 40%.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:6},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},		
		RayofLight:
		{
			name_en: "Ray of Light",
			name_jp: "レイオブライト",
			details: "When the Fencer is attacked, their chance to be targeted and defense increase.<br>If the Fencer fails to dodge an attack, Ray of Light's effects are reset.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:0},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		BewitchingSwordDance:
		{
			name_en: "Phantom Swords",
			name_jp: "幻惑の剣舞",
			details: "Reduces the accuracy of one enemy line for a set amount of turns.<br>Has a 90% speed modifier at all levels.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:1.5},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["LEGS"]
		},
		PreemptiveCurtain:
		{
			name_en: "Auto-Curtain",
			name_jp: "先制カーテン",
			details: "Gives a chance to automatically use Wind Curtain on the row the Fencer is in at the start of battle.",
			dep: {WindCurtain:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 5,
			coords: {x:2, y:4},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		SharpThrust:
		{
			name_en: "Deft Thrust",
			name_jp: "シャープスラスト",
			details: "Melee, STR-based stab attack to one enemy.<br>For the rest of the turn, the Fencer's evasion and chance to be targeted are increased.<br>Has a 500% speed modifier and 119% base accuracy at all levels.",
			dep: {VisionThrust:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:5},
			scalingStats: ["STR"],
			damageType: ["STAB"],
			range: "MELEE",
			bodyParts: ["ARMS"]
		},
		CounterBoost:
		{
			name_en: "Counter Boost",
			name_jp: "カウンタブースト",
			details: "Gives a chance for additional counterattacks when Sylphid activates.",
			dep: {Sylphid:5},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:6},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		Unburdened:
		{
			name_en: "Lightweight",
			name_jp: "持たざる者",
			details: "Increases the Fencer's evasion based on the number of empty equipment slots.<br>The format of evasion bonuses is: 1 empty slot, 2 empty slots, 3 empty slots, no equipment.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:0},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		PileOn:
		{
			name_en: "Lure",
			name_jp: "誘い込み",
			details: "On this turn, when the Fencer dodges an attack, all other party members in their row will counter-attack the source of the attack.<br>The counterattacks are based on the attacking party members' individual stats/equipment/buffs/abilities.<br>Has a 300% speed modifier at all levels.<br>Counter-attacks have 104% base accuracy at all levels.",
			dep: {BewitchingSwordDance:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:1},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["LEGS"]
		},
		AvoidAccel:
		{
			name_en: "Dodge Boon",
			name_jp: "アボイドアクセラ",
			details: "Each time the Fencer dodges an attack, their Union gauge increases.",
			dep: {BewitchingSwordDance:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 5,
			coords: {x:3, y:2},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		DivineWind:
		{
			name_en: "Divine Gust",
			name_jp: "ディバインガスト",
			details: "Increases all party members' evasion for one turn.<br>Each time a party member dodges, the bonus provided by Divine Gust is reduced.<br>Has a 150% speed modifier at all levels.",
			dep: {PreemptiveCurtain:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:4},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["HEAD"]
		},
		RevengeThrust:
		{
			name_en: "Revenge Thrust",
			name_jp: "リベンジスラスト",
			details: "Melee, STR-based stab+volt attack to one enemy.<br>Damage is equal to a modifier multiplied by the number of times the Fencer has dodged since the last use of Revenge Thrust, but has a maximum value.<br>Has a 75% speed modifier and +10 base accuracy at all levels.",
			dep: {SharpThrust:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:5},
			scalingStats: ["STR"],
			damageType: ["STAB", "VOLT"],
			range: "MELEE",
			bodyParts: ["ARMS"]
		},		
		SpeedofSoundBlade:
		{
			name_en: "Sonic Blade",
			name_jp: "音速剣",
			details: "Gives normal attacks a chance to add an extra Cut attack.<br>The extra attack has the same base damage as the first.",
			dep: {RapierMastery:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:0},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		ChainKiller:
		{
			name_en: "Chain Killer",
			name_jp: "チェインキラー",
			details: "Targets one enemy.<br>For one turn, if that enemy becomes afflicted with an ailment, bind, or stun, the Fencer will attack.<br>Follow-up attacks have 99% base accuracy at all levels.",
			dep: {ChainBoost:3, ChainBurst:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:2},
			scalingStats: ["STR"],
			damageType: ["STAB"],
			range: "MELEE",
			bodyParts: ["LEGS"]
		},
		SylphScreen:
		{
			name_en: "Sylphscreen",
			name_jp: "シルフスクリーン",
			details: "Each time the Fencer attacks or uses an attack skill, their evasion and defense increase for that turn.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:4},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		RandomStab:
		{
			name_en: "Multi-Stab",
			name_jp: "乱れ突き",
			details: "Performs a random number of randomly-distributed attacks to an enemy line.<br>Can hit the same target multiple times.<br>94% base accuracy at all levels.",
			dep: {VisionThrust:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:5},
			scalingStats: ["STR"],
			damageType: ["STAB"],
			range: "MELEE",
			bodyParts: ["ARMS"]
		},
		SpeedBoost:
		{
			name_en: "Speed Up",
			name_jp: "素早さブースト",
			details: "Increases speed, accuracy, and evasion.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:6}
		},
		PhysicalAttackBoost:
		{
			name_en: "Phys ATK Up",
			name_jp: "物理攻撃ブースト",
			details: "Increases physical damage.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:0},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		ChainAll:
		{
			name_en: "Chain All",
			name_jp: "チェインオール",
			details: "On the next turn, Chain skills will target all enemies and the maximum number of chain activations is increased.",
			dep: {ChainKiller:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 5,
			coords: {x:3, y:1},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["LEGS"]
		},
		ChainPlus:
		{
			name_en: "Chain Plus",
			name_jp: "チェインプラス",
			details: "For a set amount of turns, Chain damage and activation chance are increased.",
			dep: {ChainKiller:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:2},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["HEAD"]
		},
		ChainDouble:
		{
			name_en: "Chain Double",
			name_jp: "チェインダブル",
			details: "Gives a chance for an extra follow-up attack on Chain activation.",
			dep: {ChainKiller:5},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:3},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		Resonance:
		{
			name_en: "Resonance",
			name_jp: "レゾナンス",
			details: "Melee stab attack to one enemy.<br>Damage is equal to a base amount multiplied by the number of times the Fencer attacked last turn, but has a maximum value.<br>Maximum damage is achieved with 9 attacks.<br>Has a 75% speed modifier and 109% base accuracy at all levels.",
			dep: {RandomStab:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:5},
			scalingStats: ["STR"],
			damageType: ["STAB"],
			range: "MELEE",
			bodyParts: ["ARMS"]
		},
	},
	dragoon: 
	{		
		ShieldMastery:
		{
			name_en: "Shield Mastery",
			name_jp: "盾マスタリー",
			details: "Reduces physical damage taken when equipped with a shield.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:0},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		LineGuard:
		{
			name_en: "Line Guard",
			name_jp: "ラインガード",
			details: "Reduces physical damage taken by one row for one turn.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:1},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},
		MaterialGuard:
		{
			name_en: "Mana Guard",
			name_jp: "マテリアルガード",
			details: "Reduces elemental damage taken by all allies this turn.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:2},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},
		HealingGuard:
		{
			name_en: "Healing Guard",
			name_jp: "ヒーリングガード",
			details: "Reduces physical damage taken by the Dragoon this turn, and recovers a fixed amount plus a percentage of the Dragoon's maximum HP when damage is taken.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:3},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},
		Bunker:
		{
			name_en: "Decoy Bunker",
			name_jp: "バンカー",
			details: "Creates a bunker that draws enemy attacks.<br>The bunker has 10 HP at all levels.<br>In addition to reduction via its DEF value, the bunker only takes a set percent of any damage.<br>Has a 125% speed modifier at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:6},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},
		ArtilleryMastery:
		{
			name_en: "Cannon Mastery",
			name_jp: "重砲マスタリー",
			details: "Increases physical attack when equipped with artillery.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:0},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		GunMount:
		{
			name_en: "Gunmount",
			name_jp: "ガンマウント",
			details: "Preserves the effect of last turn's guard skill while making a ranged, STR-based Bash attack to 1 enemy.",
			dep: {LineGuard:2, MaterialGuard:2, HealingGuard:2},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:2},
			scalingStats: ["STR"],
			damageType: ["BASH"],
			range: "RANGED",
			bodyParts: ["ARMS"]
		},
		BarrageWall:
		{
			name_en: "Barrage Wall",
			name_jp: "バラージウォール",
			details: "Deals ranged, STR-based Bash damage to all enemies.<br>Reduces hit targets' physical attack for a set amount of turns.<br>Has an 80% speed modifier at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:4},
			scalingStats: ["STR"],
			damageType: ["BASH"],
			range: "RANGED",
			bodyParts: ["ARMS"]
		},
		DragonsRoar:
		{
			name_en: "Dragon Roar",
			name_jp: "竜の咆哮",
			details: "Increases one party member's defense and chance to be targeted for a set amount of turns.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:5},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["HEAD"]
		},
		DefensivePosition:
		{
			name_en: "Defense Form",
			name_jp: "防衛陣地",
			details: "Can only be used when a bunker is out.<br>Increases all party members' physical defense for a set amount of turns.<br>Has an 80% speed modifier at all levels.",
			dep: {Bunker:2},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:6},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["HEAD"]
		},
		HPBoost:
		{
			name_en: "HP Up",
			name_jp: "ＨＰブースト",
			details: "Increases the Dragoon's maximum HP.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:2, y:0},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		RecoveryGuard:
		{
			name_en: "Recovery Guard",
			name_jp: "リカバリーガード",
			details: "Reduces physical damage to one row of allies for one turn.<br>If a party member under the effect of Recovery Guard has binds, there is a chance the binds will be removed.<br>If a party member has more binds than Recovery Guard removes, the removed binds will be chosen at random.",
			dep: {GunMount:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:2, y:1},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},
		CounterGuard:
		{
			name_en: "Counter Guard",
			name_jp: "カウンターガード",
			details: "Reduces physical damage to one row of allies for one turn.<br>If Counter Guard is activated by enemy damage, the Dragoon will use their equipped weapon to counterattack the source of the damage.<br>Any modifiers to the Dragoon's normal attacks are applied for counter-attacks.<br>The chance for countering starts at 100%, and from levels 1-9, will be reduced with each counter.<br>Level 10 will always counter.",
			dep: {GunMount:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:2, y:2},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},
		DivideGuard:
		{
			name_en: "Divide Guard",
			name_jp: "ディバイドガード",
			details: "The Dragoon takes all damage in place of a selected party member for one turn.<br>Redirected damage taken by the Dragoon is reduced.",
			dep: {GunMount:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:2, y:3},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},
		ShieldThrow:
		{
			name_en: "Shield Throw",
			name_jp: "シールドスロー",
			details: "Ranged, STR-based cut attack to an enemy Line.<br>Uses the equipped shield's DEF multiplied by 3 as a substitute for weapon ATK.<br>Has a 60% speed modifier and 75 base accuracy at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:2, y:4},
			scalingStats: ["STR"],
			damageType: ["CUT"],
			range: "RANGED",
			bodyParts: ["ARMS"]
		},
		PreemptiveRoar:
		{
			name_en: "Auto-Roar",
			name_jp: "先制咆哮",
			details: "Gives a chance for the Dragoon to use Dragon's Roar on themselves at the start of battle.",
			dep: {DragonsRoar:3},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 5,
			coords: {x:2, y:5},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		PreemptiveBunker:
		{
			name_en: "Auto-Bunker",
			name_jp: "先制バンカー",
			details: "Gives a chance for the Dragoon to use Bunker at the start of battle.",
			dep: {DefensivePosition:3},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 5,
			coords: {x:2, y:6},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		FullGuard:
		{
			name_en: "Full Guard",
			name_jp: "フルガード",
			details: "Reduces all damage taken by the party for one turn.<br>After use, Full Guard goes on cooldown for a set number of turns.",
			dep: {RecoveryGuard:3,CounterGuard:3,DivideGuard:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:3, y:1.5},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},
		SoulGuard:
		{
			name_en: "Soul Guard",
			name_jp: "ソウルガード",
			details: "Reduces physical damage taken by one row for one turn.<br>Allies under the effect of Soul Guard have a chance to survive fatal damage, leaving them with 1 HP.",
			dep: {RecoveryGuard:3,CounterGuard:3,DivideGuard:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:3, y:2.5},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},
		DragonForce:
		{
			name_en: "Dragon Force",
			name_jp: "竜圧",
			details: "Gives a chance to nullify physical attacks on party members in the same row as the Dragoon.",
			dep: {PreemptiveRoar:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:5},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},		
		GunRevenge: 
		{
			name_en: "Gun Revenge",
			name_jp: "ガンリベンジ",
			details: "Increases the damage of artillery skills after either activating a Guard skill, or a Bunker or Turret is attacked.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:0},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		TPBoost: 
		{
			name_en: "TP Up",
			name_jp: "ＴＰブースト",
			details: "Increases the Dragoon's maximum TP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:1},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		RapidCannon: 
		{
			name_en: "Rapid Cannon",
			name_jp: "ラピッドカノン",
			details: "Ranged, STR-based bash attack to one enemy at the start of the turn.<br>Has +20 base accuracy at all levels.",
			dep: {BarrageWall:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:3},
			scalingStats: ["STR"],
			damageType: ["BASH"],
			range: "RANGED",
			bodyParts: ["ARMS"]
		},
		CurseCannon: 
		{
			name_en: "Curse Cannon",
			name_jp: "カースカノン",
			details: "Ranged, STR-based bash attack to one enemy, may curse.<br>Has a 60% speed modifier at all levels.",
			dep: {BarrageWall:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:4},
			scalingStats: ["STR"],
			damageType: ["BASH"],
			range: "RANGED",
			bodyParts: ["ARMS"]
		},
		HypnoCannon: 
		{
			name_en: "Hypno Cannon",
			name_jp: "ヒュプノカノン",
			details: "Ranged, STR-based Bash attack to one enemy, may sleep.<br>Has a 60% speed modifier at all levels.",
			dep: {BarrageWall:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:5},
			scalingStats: ["STR"],
			damageType: ["BASH"],
			range: "RANGED",
			bodyParts: ["ARMS"]
		},
		Pillbox: 
		{
			name_en: "Decoy Turret",
			name_jp: "トーチカ",
			details: "Creates a turret that draws enemy attacks.<br>When attacked, the turret will counter-attack the source of the damage.<br>The turret has 10 HP at all levels.<br>In addition to reduction via its DEF value, the turret only takes a set percent of any damage.",
			dep: {DefensivePosition:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:6},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["ARMS"]
		},
		PhysicalAttackBoost: 
		{
			name_en: "Phys ATK Up",
			name_jp: "物理攻撃ブースト",
			details: "Increases physical damage.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:0},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		},
		BombardmentPrep: 
		{
			name_en: "Prep Artillery",
			name_jp: "砲撃準備",
			details: "Increases the damage, accuracy, and speed of the artillery skill used on the next turn.",
			dep: {TPBoost:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:1},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: ["HEAD"]
		},
		BusterCannon: 
		{
			name_en: "Buster Cannon",
			name_jp: "バスターカノン",
			details: "On the next turn, the Dragoon performs a ranged Bash+Fire attack to one enemy.<br>Damage is multiplied by 2x if both the Dragoon and their target are in the front row, 1.5x if the Dragoon is in the back row and the target is in the front and vice versa, and 1x if both the Dragoon and their target are in the back row.<br>The Dragoon cannot choose another action on the turn the attack is made.<br>If the Dragoon becomes incapacitated or Arm Bound, the attack will not occur.<br>Initial prepration has a 90% speed modifier, actual hit has a 1000% speed modifier.",
			dep: {RapidCannon:3,CurseCannon:3,HypnoCannon:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:4},
			scalingStats: ["STR"],
			damageType: ["BASH", "FIRE"],
			range: "RANGED",
			bodyParts: ["ARMS"]
		},
		GunSupport: 
		{
			name_en: "Gun Support",
			name_jp: "ガンサポート",
			details: "Gives a chance to automatically use Decoy Turret when the Dragoon reduces damage being taken themselves, or negates an attack.",
			dep: {Pillbox:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:6},
			scalingStats: null,
			damageType: null,
			range: null,
			bodyParts: null
		}
	},
	cestus:
	{
		GauntletMastery:
		{
			name_en: "Brawl Mastery",
			name_jp: "拳甲マスタリー",
			details: "Increases physical attack when equipped with gauntlets.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:0}
		},
		Flicker:
		{
			name_en: "Concussion",
			name_jp: "フリッカー",
			details: "Deals STR-based melee bash damage to one target and has a chance to bind their head.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:1}
		},
		ArmBreak:
		{
			name_en: "Arm Crusher",
			name_jp: "アームブレイク",
			details: "Deals STR-based melee bash damage to one target and has a chance to bind their arms.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:2}
		},
		LiverBlow:
		{
			name_en: "Low Blow",
			name_jp: "リバーブロー",
			details: "Deals STR-based melee bash damage to one target and has a chance to bind their legs.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:3}
		},
		RushingBlood:
		{
			name_en: "Blood Wrath",
			name_jp: "血の暴走",
			details: "Every time the Pugilist's HP decreases, they have a chance of attacking a random enemy with their current weapon.<br>The damage modifier of the attack is 100%, and is capped at 5 attacks per turn.<br>The attacks do not count as normal attacks (They can't crit).<br>Has a +5 accuracy modifier at all levels.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:4}
		},
		ThunderGodFist:
		{
			name_en: "Thunder Fist",
			name_jp: "雷神拳",
			details: "Deals STR-based melee bash + volt damage to one target.<br>If the target does not die, the Pugilist takes recoil damage.<br>Has a 130% speed modifier and an accuracy modifier of +10 at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:5}
		},
		PhysicalAttackBoost:
		{
			name_en: "Phys ATK Up",
			name_jp: "物理攻撃ブースト",
			details: "Increases physical damage.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:0}
		},
		OneTwo:
		{
			name_en: "One-Two Punch",
			name_jp: "ワンツー",
			details: "Deals STR-based melee bash damage to one target. Has a chance to follow up with all binding skills the Pugilist knows (Concussion, Arm Crusher, and Low Blow) on unbound parts.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
			dep: {Flicker:3,ArmBreak:3,LiverBlow:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:2}
		},
		GivingitEverything:
		{
			name_en: "Overexertion",
			name_jp: "粉骨砕身",
			details: "Places a buff on an ally that boosts the amount of physical damage they deal for 4 turns, but causes them to lose a portion of their current HP before their every action (This means that the HP loss from this buff cannot kill them no matter what).<br>The initial cast does not cause the target to lose HP.<br>Has a 40% speed modifier at all levels.",
			dep: {RushingBlood:1},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:4}
		},
		DemonFist:
		{
			name_en: "Devil's Fist",
			name_jp: "鬼人拳",
			details: "The Pugilist spends a portion of their maximum HP to deal STR-based melee bash damage to 1 target that splashes to adjacent enemies.<br>Has an 80% speed modifier and no accuracy modifier at all levels.",
			dep: {ThunderGodFist:2},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:5}
		},
		DoublePunch:
		{
			name_en: "Double Punch",
			name_jp: "ダブルパンチ",
			details: "When Concussion, Arm Crusher, Low Blow or Corkscrew is used (on their own) and fails to inflict its disable, there is a chance for that skill to activate again.<br>Will not activate if the target already has the applicable disable.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:0}
		},
		Corkscrew:
		{
			name_en: "Corkscrew",
			name_jp: "コークスクリュー",
			details: "Deals STR-based melee bash damage to one target and has a chance to inflict paralysis.<br>Has a 90% speed modifier and an accuracy modifier of -5 at all levels.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:1}
		},
		SpeedBoost:
		{
			name_en: "Speed Up",
			name_jp: "素早さブースト",
			details: "Increases speed, accuracy, and evasion.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:3}
		},
		CrossCounter:
		{
			name_en: "Cross Counter",
			name_jp: "クロスカウンター",
			details: "When an ally on the same row takes physical damage, the Pugilist counters with a STR-based melee attack that attempts to bind the body part used to attack. Only activates once per turn.<br>Has a 1500% speed modifier and an accuracy modifier of +50 at all levels.",
			dep: {GivingitEverything:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:4}
		},
		Interval:
		{
			name_en: "Breather",
			name_jp: "インターバル",
			details: "Dispels all ailments and binds on the Cestus and increases their attack power for the next turn.<br>Does not work if you don't have any binds/ailments.<br>Will not increase the damage output of Union skills.<br>The charge lasts until the end of the next turn (This means that the charge will not get used up on the very next attack).<br>Has a 200% speed modifier at all levels.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:5}
		},
		ArmBlock:
		{
			name_en: "Fault Blocker",
			name_jp: "アームブロック",
			details: "Reduces the chance of being afflicted with ailments and binds for allies in the user's row for a set number of turns.<br>Has a speed modifier of 70% at all levels.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:6}
		},
		ConstraintAttackBoost:
		{
			name_en: "Status ATK Up",
			name_jp: "抑制攻撃ブースト",
			details: "Increases the chance of inflicting ailments and binds.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:0}
		},
		LeadBlow:
		{
			name_en: "Leading Blow",
			name_jp: "リードブロー",
			details: "Deals STR-based melee bash damage to one enemy.<br>If they have any binds or ailments, follow up with the appropriate binding skill (Concussion, Arm Crusher and Low Blow) for binds, and Corkscrew for ailments.<br>Has a 90% speed modifier and no accuracy modifier at all levels.",
			dep: {Corkscrew:2,OneTwo:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:1.5}
		},
		RushOut:
		{
			name_en: "Lash Out",
			name_jp: "ラッシュアウト",
			details: "Attacks one enemy with STR-based melee bash damage multiple times.<br>The number of attacks is equal to the number of times the Pugilist attacked on the previous turn. Maximum number of hits is 9.<br>Union skills will also count towards the hit total.<br>Has an 80% speed modifier and an accuracy modifier of -10 at all levels.",
			dep: {SpeedBoost:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:3}
		},
		Clinch:
		{
			name_en: "Clinch",
			name_jp: "クリンチ",
			details: "Chance to bind the head, arms, and legs of the Pugilist and one enemy.<br>Attempts to bind the enemy before binding the Pugilist.<br>Has an 80% speed modifier at all levels.",
			dep: {Interval:3,ArmBlock:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:5.5}
		},
		Grit:
		{
			name_en: "Fortitude",
			name_jp: "不屈",
			details: "Increases the Pugilist' damage output when their HP is below a certain percentage.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:0}
		},
		VajraStance:
		{
			name_en: "Vajra Stance",
			name_jp: "金剛の構え",
			details: "Raises physical defense for allies in the same row as the Cestus for a set number of turns.<br>Has a speed modifier of 70% at all levels.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:1}
		},
		SoulSmash:
		{
			name_en: "Soul Crusher",
			name_jp: "魂砕き",
			details: "Deals STR-based melee bash damage to all enemies, and heals the Pugilist for a portion of the damage they dealt.<br>Has an 80% speed modifier and an accuracy modifier of -5 at all levels.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:2}
		},
		GiantKiller:
		{
			name_en: "Titan Killer",
			name_jp: "大物殺し",
			details: "Deals STR-based melee bash damage to one enemy.<br>Deals even more damage as long as the target has a higher currentHP/maxHP ratio than the user.<br>Has a 150% speed modifier and no accuracy modifier at all levels.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:3}
		},
		BackFromtheDead:
		{
			name_en: "Death's Edge",
			name_jp: "黄泉返し",
			details: "Deals STR-based melee bash damage to one enemy.<br>Deals more damage the less HP the entire party has. Both the party's current average precentage of HP remaining as well as the raw amount of HP missing are taken into account by this.<br>Has a 20% speed modifier and an accuracy modifier of +50 at all levels.",
			dep: {GivingitEverything:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:4}
		},
		DemonGodFist:
		{
			name_en: "Satan's Fist",
			name_jp: "鬼神拳",
			details: "The Pugilist spends a portion of their maximum HP to deal STR-based melee bash damage to one row of enemies.<br>Has an 80% speed modifier and no accuracy modifier at all levels.",
			dep: {DemonFist:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:5}
		},
		ConstraintDefenseBoost:
		{
			name_en: "Status DEF Up",
			name_jp: "抑制防御ブースト",
			details: "Increases defense against ailments and binds.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:6}
		},
		HPBoost:
		{
			name_en: "HP Up",
			name_jp: "ＨＰブースト",
			details: "Increases the Cestus' maximum HP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:0}
		},
		OugiRengokusatsu:
		{
			name_en: "Abyssal Killer",
			name_jp: "奥義 煉獄殺",
			details: "When cast, the user will endure fatal damage once.<br>If the user endured a fatal hit through Abyssal Killer, their damage on the next turn is increased by a base multiplier, multiplied by the square root of the square root of the precentage of the user's maxHP the endured hit would've overkilled them by.<br>The damage boost will not affect Union skills.<br>Has a 200% speed modifier at all levels.",
			dep: {VajraStance:5,SoulSmash:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:1.5}
		},
		OugiTenchihaten:
		{
			name_en: "Heavenly Aid",
			name_jp: "奥義 天地破天",
			details: "Increase the user's damage on the next turn based on the amount of HP the user is recovered by on this turn.<br>The damage increase is approximately by a base multiplier, multiplied by the precentage of their maxHP the user recovered.<br>The damage boost will not affect Union skills.<br>Has a 200% speed modifier at all levels.",
			dep: {GiantKiller:3,BackFromtheDead:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:3.5}
		}
	},
	reaper:
	{
		ScytheMastery: 
		{
			name_en: "Scythe Mastery",
			name_jp: "鎌マスタリー",
			details: "Raises physical attack power when a scythe is equipped.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:0}
		},
		MiasmaWeapon: 
		{
			name_en: "Miasma Armor",
			name_jp: "瘴気の兵装",
			details: "Sacrifices a percentage of the user's current HP to apply the Miasma Armor state (not a buff) to the user for 3 turns, increasing all action speed (including normal attacks) while active.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 5,
			coords: {x:0, y:2}
		},
		FrailMiasma: 
		{
			name_en: "Stifling Miasma",
			name_jp: "繊弱の瘴気",
			details: "Lowers all enemies' physical and elemental attack for a set amount of turns.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:4}
		},
		ScytheofNumbStasis: 
		{
			name_en: "Paralyzing Reap",
			name_jp: "痺止の鎌",
			details: "Deals STR based melee cut damage to one row.<br>If Miasma Armor is active, has a chance to inflict paralysis.<br>Has a 60% speed modifier and 98% base accuracy at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:5}
		},
		GatherSouls: 
		{
			name_en: "Soul Gather",
			name_jp: "魂寄せ",
			details: "Increases the encounter rate and amount of EXP gained from battles for a set number of steps.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:0}
		},
		PreemptiveWeapon: 
		{
			name_en: "Auto-Miasma",
			name_jp: "先制兵装",
			details: "Gives a chance to automatically use Miasma Armor at the start of battle.",
			dep: {MiasmaWeapon:2},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:1}
		},
		EndlessShroud: 
		{
			name_en: "Endless Shroud",
			name_jp: "終わりなき衣",
			details: "Gives a chance to automatically activate Miasma Armor when using a debuff skill.",
			dep: {MiasmaWeapon:2},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:2}
		},
		DeathsJudgment: 
		{
			name_en: "Judgment",
			name_jp: "死の審判",
			details: "If Miasma Armor is active, the Harbinger has a chance to put an enemy to sleep every time they lose HP.<br>The sleep has a base infliction rate of 100% at all levels.",
			dep: {MiasmaWeapon:2},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:3}
		},
		FeebleMiasma: 
		{
			name_en: "Wilting Miasma",
			name_jp: "虚弱の瘴気",
			details: "Increases the chance of inflicting ailments and binds on all enemies for a set amount of turns.",
			dep: {FrailMiasma:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:4}
		},
		ScytheofExorcism: 
		{
			name_en: "Cursed Reap",
			name_jp: "呪禁の鎌",
			details: "Deals STR based melee cut damage to one row.<br>If Miasma Armor is active, has a chance to inflict curse.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
			dep: {ScytheofNumbStasis:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:5}
		},
		BlackBlade: 
		{
			name_en: "Black Blade",
			name_jp: "黒き刃",
			details: "If Miasma Armor is active, the Harbinger's attack power increases every time they inflict an ailment.<br>The bonus is reset is Miasma Armor state ends for any reason.<br>Affects all damage types.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:0}
		},
		TPBoost: 
		{
			name_en: "TP Up",
			name_jp: "ＴＰブースト",
			details: "Increases the Harbinger's maximum TP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:1}
		},
		FreshBloodSlash: 
		{
			name_en: "Bloody Reap",
			name_jp: "鮮血の斬撃",
			details: "The Harbinger sacrifices a portion of their current HP to deal 2 to 4 STR based melee cut attacks to random enemies.<br>Requires the Miasma Armor state to use.<br>Has a 50% speed modifier and -10 accuracy modifier at all levels.",
			dep: {DeathsJudgment:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:2.5}
		},
		GreateScytheofColdAsh: 
		{
			name_en: "Frigid Reap",
			name_jp: "冷灰の大鎌",
			details: "Deals STR based melee cut + ice damage to one row.<br>Deals a follow-up attack on enemies that have ailments.<br>The follow-up attack deals double damage.<br>Has a 75% speed modifier and no base accuracy modifier at all levels.",
			dep: {DeathsJudgment:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:3.5}
		},
		ScytheofCruelPoison: 
		{
			name_en: "Toxic Reap",
			name_jp: "惨毒の鎌",
			details: "Deals STR based melee cut damage to one row.<br>If the Harbinger has Miasma Armor active, it has a chance to inflict poison.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
			dep: {ScytheofExorcism:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:4.5}
		},
		ScytheofWickedChaos: 
		{
			name_en: "Chaos Reap",
			name_jp: "禍乱の鎌",
			details: "Deals STR based melee cut damage to one row.<br>If the Harbinger has Miasma Armor active, it has a chance to inflict panic.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
			dep: {ScytheofExorcism:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:5.5}
		},
		BlackShroud: 
		{
			name_en: "Black Shroud",
			name_jp: "黒き衣",
			details: "If Miasma Armor is active, the Harbinger's defense increases every time they inflict an ailment.<br>The bonus is reset is Miasma Armor state ends for any reason.<br>Affects all damage types.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:0}
		},
		ConstraintAttackBoost: 
		{
			name_en: "Status ATK Up",
			name_jp: "抑制攻撃ブースト",
			details: "Increases the chance of inflicting ailments and binds.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:1}
		},
		ShroudofReality: 
		{
			name_en: "Temporal Shroud",
			name_jp: "空蝉の衣",
			details: "This skill can only be used when Miasma Armor is active.<br>Dispels the Miasma Armor state from the Harbinger and hides them from the battle for the current turn.<br>At the end of the turn, the Harbinger will reenter battle and deal STR based melee cut damage to one enemy.<br>Has 148 base accuracy at all levels.<br>The initial cast has a variable speed modifier.",
			dep: {FreshBloodSlash:3,GreateScytheofColdAsh:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:3}
		},
		ScytheofDeath: 
		{
			name_en: "Fatal Reap",
			name_jp: "死の鎌",
			details: "Deals STR based melee cut damage to one enemy and has a chance to inflict instant death.<br>If the target is asleep, the damage and instant death chance rises.<br>Has a 20% speed modifier and -10 accuracy modifier at all levels.<br>NOTE: The data includes the original 1.5x sleep damage bonus.",
			dep: {ScytheofCruelPoison:3,ScytheofWickedChaos:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:5}
		},
		AbsorbVitality: 
		{
			name_en: "Spirit Absorb",
			name_jp: "生気吸収",
			details: "When the Harbinger debuffs an enemy, the Harbinger is healed.<br>The heal can bring the Harbinger's HP above the Harbinger's maximum HP pool for one turn.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:0}
		},
		MagicDefenseBoost: 
		{
			name_en: "Magic DEF Up",
			name_jp: "魔法防御ブースト",
			details: "Increases defense against elemental attacks.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:1}
		},
		DeathResistance: 
		{
			name_en: "Death's Asylum",
			name_jp: "死の耐性",
			details: "Gives the Harbinger a chance to nullify the effects of debuffs and ailments enemies attempt to apply to them.",
			dep: {EndlessShroud:5},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:2}
		},
		BrittleMiasma: 
		{
			name_en: "Eroding Miasma",
			name_jp: "削弱の瘴気",
			details: "Lowers all enemies' physical and elemental defense for a set amount of turns.<br>Has an 85% speed modifier at all levels.",
			dep: {FeebleMiasma:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:3.5}
		},
		DimMiasma: 
		{
			name_en: "Masking Miasma",
			name_jp: "闇弱の瘴気",
			details: "Lowers all enemies' accuracy for a set amount of turns.<br>Has an 85% speed modifier at all levels.",
			dep: {FeebleMiasma:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:4.5}
		},
		HPBoost: 
		{
			name_en: "HP Up",
			name_jp: "ＨＰブースト",
			details: "Increases the Harbinger's maximum HP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:0}
		},
		BloodofAtonement: 
		{
			name_en: "Atonement",
			name_jp: "贖いの血",
			details: "This skill can only be used when Miasma Armor is active.<br>Dispels Miasma Armor to heal all allies HP, with a chance of curing ailments as well.<br>Has an 85% speed modifier at all levels.",
			dep: {DeathResistance:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:1.5}
		},
		WallofMiasma: 
		{
			name_en: "Miasma Wall",
			name_jp: "瘴気の防壁",
			details: "This skill can only be used when Miasma Armor is active.<br>Dispels Miasma Armor to give all allies a chance to defend against ailments and binds for the current turn.<br>Activates at the start of the turn.",
			dep: {DeathResistance:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:2.5}
		},
		ScytheofTransience: 
		{
			name_en: "Ephemeral Reap",
			name_jp: "泡沫の鎌",
			details: "Removes all debuffs from one enemy and attacks them with STR based melee cut attacks.<br>The number of times they attack is equal to the number of debuffs that have been removed (Maximum of 3).<br>Only deals 100% damage if the enemy has no debuffs.<br>The debuffs are purged before dealing damage.<br>Has a 75% speed modifier and cannot miss at all levels.",
			dep: {BrittleMiasma:5,DimMiasma:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:3.5}
		},
		SoulTransfer: 
		{
			name_en: "Soul Transfer",
			name_jp: "魂転移",
			details: "Dispels all debuffs from one enemy, and gives allies a chance to revive if they happen to die on the same turn.<br>Has no effect if there are no debuffs to purge.<br>Activates at the start of the turn.",
			dep: {BrittleMiasma:5,DimMiasma:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:4.5}
		}
	},
	warlock:
	{
		MagiMastery: 
		{
			name_en: "Magi Mastery",
			name_jp: "マギマスタリー",
			details: "Increases the damage of the Warlock's Magi skills.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:0}
		},
		Amplifier: 
		{
			name_en: "Amplifier",
			name_jp: "アンプリファー",
			details: "Increases one row's magic attack for a set amount of turns.<br>Has an 80% speed modifier at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:4}
		},
		Levitation: 
		{
			name_en: "Levitation",
			name_jp: "レビテーション",
			details: "For a set number of steps, negates damage taken from damage tiles, reduces all other field damage to 1, and increases the chance of preemptive attacks.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y:6}
		},
		HighSpeedIncantation: 
		{
			name_en: "Quick-Chant",
			name_jp: "高速詠唱",
			details: "Enables the use of Incantation skills without using a turn, but increases the skill used's TP cost. The Magi skill's speed modifier will be used.<br>WARNING: This is a permanent passive, and once learned, it cannot be turned off!",
			dep: {MagiMastery:5},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 5,
			coords: {x:1, y:0}
		},
		Fireball: 
		{
			name_en: "Fireball",
			name_jp: "ファイアボール",
			details: "Deals ranged INT-based fire damage to one enemy, with splash damage.<br>Has a 70% speed modifier and 130 base accuracy at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:1}
		},
		IcicleLance:
		{
			name_en: "Icicle Lance",
			name_jp: "アイシクルランス",
			details: "Deals ranged INT-based ice damage to one enemy, with line-piercing effect.<br>Has no speed modifier and 130 base accuracy at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:2}
		},
		Lightning: 
		{
			name_en: "Lighning",
			name_jp: "ライトニング",
			details: "Deals ranged INT-based volt damage to an enemy Line.<br>Has a 130% speed modifier and 130 base accuracy at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:3}
		},
		MagicShield: 
		{
			name_en: "Magic Shield",
			name_jp: "マジックシールド",
			details: "Reduces elemental damage to the party for one turn.<br>Has a 500% speed modifier at all levels.",
			dep: {Amplifier:2},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:4}
		},
		IncantationCompressionForm: 
		{
			name_en: "Focus Chant",
			name_jp: "詠唱：圧縮術式",
			details: "Next turn, the Warlock's Magi skills will only hit a single target, but their power is increased.<br>Has a 60% speed modifier at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:5}
		},
		Invisible: 
		{
			name_en: "Invisibility",
			name_jp: "インビジブル",
			details: "Reduces the encounter rate for a set number of steps.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y:6}
		},
		ReserveMagic: 
		{
			name_en: "Reserve Magic",
			name_jp: "リザーブマジック",
			details: "If the Magi skill used on this turn is of a different element from the last one used, it gains the element of the last one used and has its damage increased.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:0}
		},
		Windstorm: 
		{
			name_en: "Windstorm",
			name_jp: "ウィンドストーム",
			details: "Deals ranged INT-based cut damage to all enemies.<br>Attempts to inflict arm bind on hit targets.<br>Has no speed modifier and 130 base accuracy at all levels.",
			dep: {Fireball:3,IcicleLance:3,Lightning:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:1}
		},
		EarthSpike: 
		{
			name_en: "Earthspike",
			name_jp: "アーススパイク",
			details: "Deals ranged INT-based stab damage to all enemies.<br>Reduces hit targets' magic attack for 3 turns.<br>Has no speed modifier and 130 base accuracy at all levels.",
			dep: {Fireball:3,IcicleLance:3,Lightning:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:2}
		},
		Rockfall: 
		{
			name_en: "Rockfall",
			name_jp: "ロックフォール",
			details: "Deals ranged INT-based bash damage to all enemies.<br>Attempts to stun hit targets.<br>Has a 150% speed modifier and 130 base accuracy.",
			dep: {Fireball:3,IcicleLance:3,Lightning:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:3}
		},
		AntiMagic: 
		{
			name_en: "Anti-Magic",
			name_jp: "アンチマジック",
			details: "Passively gives a chance for the Warlock to nullify magic attacks on their row.",
			dep: {MagicShield:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:4}
		},
		IncantationMultistrikeForm: 
		{
			name_en: "Spread Chant",
			name_jp: "詠唱：多段術式",
			details: "On the next turn, Magi skills will become random-target that hits 2-6 times.<br>Each hit is a percentage of the skill's original damage.<br>Can hit the same target multiple times.<br>Has a 60% speed modifier at all levels.",
			dep: {IncantationCompressionForm:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:5}
		},
		MagicDefenseBoost: 
		{
			name_en: "Magic DEF Up",
			name_jp: "魔法防御ブースト",
			details: "Increases defense against magic attacks.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y:6}
		},
		TPBoost: 
		{
			name_en: "TP Up",
			name_jp: "ＴＰブースト",
			details: "Increases the Warlock's maximum TP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:0}
		},
		Alter: 
		{
			name_en: "Altar",
			name_jp: "アルター",
			details: "Three turns after casting, deals ranged INT-based bash damage to one enemy.<br>During this time, for each time the target's weakness is hit, Altar's damage is increased, up to 20 stacks.<br>Multi-hit attacks will trigger multiple stacks.<br>Attempts to inflict petrification on hit targets.<br>Initial cast has a 90% speed modifier.<br>Actual hit has an 80% speed modifier and 200 base accuracy.<br>Not affected by chants.",
			dep: {Windstorm:5,EarthSpike:5,Rockfall:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y:2}
		},
		LifeDrain: 
		{
			name_en: "Life Siphon",
			name_jp: "ライフドレイン",
			details: "When the Warlock hits an enemy's weakness, the Union gauge is increased.",
			dep: {AntiMagic:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 5,
			coords: {x:3, y:4}
		},
		CommonMagic: 
		{
			name_en: "Common Magic",
			name_jp: "コモンマジック",
			details: "If another party member used an INT-based skill before the Warlock, the Warlock's damage is increased.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		Explode: 
		{
			name_en: "Explosion",
			name_jp: "エクスプロード",
			details: "Deals ranged INT-based fire damage to all enemies.<br>Has an 80% speed modifier and 150 base accuracy at all levels.",
			dep: {Fireball:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1}
		},
		IceStream: 
		{
			name_en: "Hailstorm",
			name_jp: "アイスストリーム",
			details: "Deals ranged INT-based ice damage to all enemies.<br>Has an 80% speed modifier and 150 base accuracy at all levels.",
			dep: {IcicleLance:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 2}
		},
		ThunderBreak: 
		{
			name_en: "Thunderbreak",
			name_jp: "サンダーブレイク",
			details: "Deals ranged INT-based volt damage to all enemies.<br>Has an 80% speed modifier and 150 base accuracy at all levels.",
			dep: {Lightning:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3}
		},
		MagicWeapon: 
		{
			name_en: "Clever Strike",
			name_jp: "マジックウェポン",
			details: "Deals INT-based damage to one target.<br>The element and range are based on the user's weapon.<br/>Not affected by chants.",
			dep: {MagicShield:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 4}
		},
		IncantationReductionForm:
		{
			name_en: "Abating Chant",
			name_jp: "詠唱：減縮術式",
			details: "On the next turn, Magi skills will have both reduced damage and TP cost.<br>Has a 60% speed modifier at all levels.",
			dep: {IncantationCompressionForm:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 5}
		},
		ConstraintDefenseBoost: 
		{
			name_en: "Status DEF Up",
			name_jp: "抑制防御ブースト",
			details: "Increases defense against ailments and binds.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 6}
		},
		MagicAttackBoost: 
		{
			name_en: "Magic ATK Up",
			name_jp: "魔法攻撃ブースト",
			details: "Increases elemental damage.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 0}
		},
		MagicLeak: 
		{
			name_en: "Mana Flow",
			name_jp: "マジックリーク",
			details: "For a set amount of turns, when using TP, a percentage of the used TP will be restored to one random party member.",
			dep: {Explode:3,IceStream:3,ThunderBreak:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 1.5}
		},
		CostCut: 
		{
			name_en: "Cutting Costs",
			name_jp: "コストカット",
			details: "Gives a chance to not expend TP when using a skill.<br>When used with Quick-chant, only the TP cost of the actual Magi skill is negated.",
			dep: {Explode:3,IceStream:3,ThunderBreak:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 2.5}
		}
	},
	necromancer:
	{
		GhostMastery: 
		{
			name_en: "Wraith Mastery",
			name_jp: "死霊マスタリー",
			details: "Increases Wraith damage and disable infliction chance.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 0}
		},
		GhostSummoning: 
		{
			name_en: "Summon Wraith",
			name_jp: "死霊召喚",
			details: "Consumes 15% of the Necromancer's (most likely current) HP to summon a Wraith with increased maxHP.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 1}
		},
		MoaningSpirits: 
		{
			name_en: "Wraith Cry",
			name_jp: "死霊の呻き",
			details: "Destroys one Wraith. Reduces all enemies' physical/magical defense for a set amount of turns.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 2}
		},
		SoulFood: 
		{
			name_en: "Soul Candy",
			name_jp: "魂の糧",
			details: "Destroys one Wraith. Increases all allies' elemental defense for a set amount of turns.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 3}
		},
		GravekeepingKnowledge: 
		{
			name_en: "Gravekeeping",
			name_jp: "墓守の心得",
			details: "If the user does not take any damage for one turn, they have a chance to summon a Wraith at the end of the turn.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 4}
		},
		ThePriceofLife: 
		{
			name_en: "Life Exchange",
			name_jp: "生の代償",
			details: "Destroys one Wraith. Restores all party members' HP.<br>Has an 80% speed modifier.",
			dep: {GhostSummoning:2},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 1}
		},
		MercilessWall: 
		{
			name_en: "Fierce Shield",
			name_jp: "無慈悲な盾",
			details: "Targets one Wraith. That Wraith will take damage for the entire party for one turn, with a multiplier applied to the damage they take from redirected hits.",
			dep: {MoaningSpirits:2,SoulFood:2},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 2.5}
		},
		GhostReincarnation: 
		{
			name_en: "Reincarnation",
			name_jp: "死霊転生",
			details: "Gives a chance to summon a Wraith whenever a Wraith is destroyed in battle.",
			dep: {GravekeepingKnowledge:3},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 4}
		},
		PoisonBomb: 
		{
			name_en: "Poison Bomb",
			name_jp: "毒爆弾",
			details: "Destroys one Wraith. Attempts to inflict poison on all enemies.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 5}
		},
		FireBomb: 
		{
			name_en: "Flame Bomb",
			name_jp: "炎爆弾",
			details: "Destroys one Wraith. Deals ranged fire damage to all enemies.<br>Has no speed modifier at all levels and 150 base accuracy at all levels.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 6}
		},
		GhostSecretArts: 
		{
			name_en: "Necromancy",
			name_jp: "死霊の秘術",
			details: "Gives a chance to summon a Wraith when any party member or enemy dies.<br>Does not activate on Bunkers, Pillboxes, or other Wraiths.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		CurseTransfer: 
		{
			name_en: "Burden Shift",
			name_jp: "呪詛移し",
			details: "If a Wraith is alive when the Necromancer takes fatal damage, there is a chance that a Wraith will be destroyed and the Necromancer will recover some HP instead of dying.",
			dep: {ThePriceofLife:5},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1}
		},
		OpenGrave: 
		{
			name_en: "Grave",
			name_jp: "墓穴",
			details: "For one turn, Wraiths will counterattack with ranged damage when any enemy that hits a selected ally.<br>The chance to counter starts at 100%, and is decreased by 9% for every counter.<br>Counterattacks attempt to inflict paralysis.<br>Has a 300% speed modifier at all levels.<br>Counterattacks have 120 base accuracy.",
			dep: {MercilessWall:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 2.5}
		},
		ConstraintAttackBoost: 
		{
			name_en: "Status ATK Up",
			name_jp: "抑制攻撃ブースト",
			details: "Increases the chance of inflicting ailments and binds.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3.5}
		},
		CurseBomb: 
		{
			name_en: "Curse Bomb",
			name_jp: "呪い爆弾",
			details: "Destroys one Wraith.<br>Attempts to inflict curse on all enemies.",
			dep: {PoisonBomb:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 5}
		},
		IceBomb: 
		{
			name_en: "Ice Bomb",
			name_jp: "氷爆弾",
			details: "Destroys one Wraith.<br>Deals ranged ice damage to all enemies.<br>Has no speed modifier and 150 base accuracy at all levels.",
			dep: {FireBomb:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 6}
		},
		HPBoost: 
		{
			name_en: "HP Up",
			name_jp: "ＨＰブースト",
			details: "Increases the Necromancer's maximum HP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 0}
		},
		SoulTrade: 
		{
			name_en: "Soul Trade",
			name_jp: "ソウルトレード",
			details: "Destroys one Wraith.<br>Attempts to revive all dead party members.",
			dep: {CurseTransfer:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 1}
		},
		GhostDance: 
		{
			name_en: "Wraith Dance",
			name_jp: "死霊乱舞",
			details: "On the turn used, all Wraiths will attack three times, with damage modifiers.",
			dep: {OpenGrave:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 2.5}
		},
		GravestoneBinding: 
		{
			name_en: "Tombstone Vice",
			name_jp: "石塔絞り",
			details: "Destroys all Wraiths.<br>Attempts to petrify one enemy.<br>The petrification chance is increased based on the number of Wraiths destroyed.",
			dep: {CurseBomb:3,FireBomb:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 5.5}
		},
		TheBeckoningofHades: 
		{
			name_en: "Hell's Lure",
			name_jp: "黄泉の手招き",
			details: "Gives a chance to summon a Wraith at the end of a turn if the Necromancer's HP is below a certain threshold.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		PreemptiveGhostSummoning: 
		{
			name_en: "Auto-Wraith",
			name_jp: "先制死霊召喚",
			details: "Gives a chance to use Summon Wraith at the start of battle.",
			dep: {ThePriceofLife:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1}
		},
		EquivalentExchange: 
		{
			name_en: "Fair Trade",
			name_jp: "等価交換",
			details: "Destroys one Wraith.<br>Deals a percentage of the HP it had before dying to one enemy.<br>Has an 80% speed modifier and 150 base accuracy at all levels.",
			dep: {MercilessWall:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 2.5}
		},
		Sacrifice: 
		{
			name_en: "Sacrifice",
			name_jp: "生贄",
			details: "Destroys one Wraith.<br>Increases the Necromancer's damage until the end of the next turn.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3.5}
		},
		MagicAttackBoost: 
		{
			name_en: "Magic ATK Up",
			name_jp: "魔法攻撃ブースト",
			details: "Increases elemental damage.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 4.5}
		},
		TheGatesofHell: 
		{
			name_en: "Gates of Hell",
			name_jp: "地獄門",
			details: "Deals ranged bash damage to one enemy.<br>Summons a Wraith with HP equal to damage dealt.<br>Has an 80% speed modifier and 150 base accuracy at all levels.",
			dep: {PoisonBomb:5,FireBomb:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 5.5}
		},
		TPBoost: 
		{
			name_en: "TP Up",
			name_jp: "ＴＰブースト",
			details: "Increases the Necromancer's maximum TP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 0}
		},
		GhostExplosion: 
		{
			name_en: "Wraith Explosion",
			name_jp: "死霊大爆発",
			details: "Destroys all Wraiths.<br>Deals ranged bash+fire damage to all enemies. Damage is based on the number of Wraiths destroyed.<br>Has no speed modifier and 150 base accuracy at all levels.",
			dep: {EquivalentExchange:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 2.5}
		},
		NegativeEnergy: 
		{
			name_en: "Negative Energy",
			name_jp: "負の力",
			details: "Deals ranged almighty damage to one enemy.<br>The damage is increased by 150% for every party member killed, enemy killed, and Wraith killed before use.<br>There is no cap on how many times Negative Energy can have its damage increased.<br>Has a -100% speed modifier.<br>Does not check for accuracy.",
			dep: {Sacrifice:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 3.5}
		},
		ZombiePowder: 
		{
			name_en: "Zombie Powder",
			name_jp: "ゾンビパウダー",
			details: "Attempts to instantly kill one enemy.<br>If the instant death is successful, summons one Wraith equal to the current HP of that enemy.<br>Has a 50% speed modifier at all levels.",
			dep: {TheGatesofHell:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 5.5}
		}
	},
	hound:
	{
		BowMastery: 
		{
			name_en: "Bow Mastery",
			name_jp: "弓マスタリー",
			details: "Increases damage dealt with Bows.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 0}
		},
		HawkWhistle: 
		{
			name_en: "Hawk Whistle",
			name_jp: "鷹笛",
			details: "Summons a Hawk. The Hawk's base stats (HP, STR, INT, VIT, WIS, AGI, LUC) are multiplied by a level-dependent factor.<br>Can be used in the labyrinth.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 1.5}
		},
		DogWhistle: 
		{
			name_en: "Hound Whistle",
			name_jp: "犬笛",
			details: "Summons a Hound. The Hound's base stats (HP, STR, INT, VIT, WIS, AGI, LUC) are multiplied by a level-dependent factor.<br>Can be used in the labyrinth.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 3.5}
		},
		Brushing: 
		{
			name_en: "Brushing",
			name_jp: "ブラッシング",
			details: "Restores the Hound/Hawk's HP at the end of each turn.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 5}
		},
		AnimalTherapy: 
		{
			name_en: "Animal Therapy",
			name_jp: "獣の癒し",
			details: "When a Hound/Hawk is present, restores HP to all allies at the end of each turn.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 0}
		},
		HawkArrow: 
		{
			name_en: "Hawk Arrow",
			name_jp: "ホークアロー",
			details: "Requires a Hawk.<br>Deals ranged, STR-based Stab damage to one enemy with splash damage.<br>Afterward, the Hawk will attack the enemies adjacent to the target with a ranged, STR-based Cut attack.<br>The initial attack has a 75% speed modifier and 97% base accuracy.<br>The Hawk's follow-up attack has 99% base accuracy.",
			dep: {HawkWhistle:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 1}
		},
		FlashofBothWings: 
		{
			name_en: "Wing Thrash",
			name_jp: "双翼閃",
			details: "Requires a Hawk.<br>Deals ranged, STR-based Stab damage to one enemy.<br>Afterward, the Hawk will attack the target's Line with a ranged, STR-based cut attack.<br>The initial attack has a 200% speed modifier and 97% base accuracy.<br>The Hawk's follow-up attack has 99% base accuracy.",
			dep: {HawkWhistle:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 2}
		},
		AidCommand: 
		{
			name_en: "Aid Command",
			name_jp: "救護指示",
			details: "Requires a Hound.<br>Commands the Hound to heal one ally, also curing the target's Ailments.<br>The heal is a static amount plus a percentage of the target's maximum HP.<br>Has an 85% speed modifier.",
			dep: {DogWhistle:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 3}
		},
		HunterShot: 
		{
			name_en: "Hunter Shot",
			name_jp: "ハンターショット",
			details: "Requires a Hound.<br>Deals ranged, STR-based Stab damage to one enemy.<br>Afterward, the Hound will attempt to Arm and Leg Bind the target.<br>The Rover's attack has a 75% speed modifier and 97% base accuracy.",
			dep: {DogWhistle:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 4}
		},
		TargetArrow: 
		{
			name_en: "Target Arrow",
			name_jp: "ターゲットアロー",
			details: "Deals ranged, STR-based Stab damage to one enemy.<br>Lowers the target's physical defense for a set amount of turns.<br>The Rover's active Hound/Hawk will attack enemies with the Target Arrow Debuff.<br>Has 117% base accuracy.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 5}
		},
		SkyPatrol: 
		{
			name_en: "Sky Patrol",
			name_jp: "高度巡回",
			details: "While a Hawk is summoned, there is a chance to find Food when exploring the labyrinth.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		FlyingTalonStrike: 
		{
			name_en: "Aerial Talons",
			name_jp: "飛来爪撃",
			details: "Requires a Hawk.<br>Commands the Hawk to attack one target with a ranged, STR-based Cut attack.<br>This attack attempts to Head Bind the target.<br>The Hawk's attack has 120% base accuracy.",
			dep: {HawkArrow:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1}
		},
		IcePeck: 
		{
			name_en: "Ice Peck",
			name_jp: "氷嘴撃",
			details: "Requires a Hawk.<br>Deals ranged, STR-based Stab damage to all enemies.<br>Afterward, the Hawk will attack all enemies with ranged, STR-based Ice damage.<br>The Rover's attack has a 70% speed modifier 87% base accuracy.<br>The Hawk's attack has 95% base accuracy.",
			dep: {FlashofBothWings:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 2}
		},
		PhysicalAttackBoost: 
		{
			name_en: "Phys ATK Up",
			name_jp: "物理攻撃ブースト",
			details: "Increases Cut/Stab/Bash damage.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3}
		},
		SpeedBoost: 
		{
			name_en: "Speed Up",
			name_jp: "素早さブースト",
			details: "Increases speed, evasion, and accuracy.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 4}
		},
		PowerShot: 
		{
			name_en: "Power Shot",
			name_jp: "パワーショット",
			details: "Deals Line-piercing ranged, STR-based Stab damage to one enemy.<br>Has a 90% speed modifier and no base accuracy modifier.",
			dep: {TargetArrow:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 5}
		},
		ScatterFeathers: 
		{
			name_en: "Feather Storm",
			name_jp: "舞い散る羽",
			details: "Requires a Hawk.<br>Commands the Hawk to attempt to Blind an enemy Line.<br>Has a 120% speed modifier.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 6}
		},
		FinishingArrow: 
		{
			name_en: "Finishing Shot",
			name_jp: "仕留めの一矢",
			details: "When one of the Rover's attacks or skills brings an enemy's HP below a threshold, the Rover will follow up with an attack using their equipped weapon.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 0}
		},
		SkyDive: 
		{
			name_en: "Sky Dive",
			name_jp: "スカイダイブ",
			details: "Requires a Hawk.<br>Commands the Hawk to, three turns later, deal ranged, STR-based Cut damage to one target at the start of the turn.<br>This attack has a chance to Head Bind the target.<br>While the Hawk is in the air, the Hawk cannot perform any other actions.<br>The Hawk's attack has 130% base accuracy.",
			dep: {FlyingTalonStrike:5,IcePeck:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 1.5}
		},
		MillionShot: 
		{
			name_en: "Million Arrows",
			name_jp: "ミリオンショット",
			details: "At the beginning of the next turn, deals multiple, instances of ranged, STR-based Stab damage to random enemies.<br>Can hit the same target 4 times at most.<br>Has 47% base accuracy.",
			dep: {PowerShot:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 5}
		},
		GroundPatrol: 
		{
			name_en: "Ground Patrol",
			name_jp: "地表巡回",
			details: "When a Hound is summoned, while walking in the field, there's an unknown chance of finding materials.<br>The data block for this skill is completely empty -- specific numbers cannot be found.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		ConstraintAttackBoost: 
		{
			name_en: "Status ATK Up",
			name_jp: "抑制攻撃ブースト",
			details: "Increases the chance of inflicting Ailments and Binds.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1}
		},
		MenacingHowl: 
		{
			name_en: "Menacing Howl",
			name_jp: "威嚇の咆哮",
			details: "Requires a Hound.<br>Commands the Hound to attempt to Panic all enemies.<br>Has a 70% speed modifier.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 2}
		},
		DefenseCommand: 
		{
			name_en: "Guard Command",
			name_jp: "防衛指示",
			details: "Requires a Hound.<br>Commands the Hound to take all damage for one party member for the turn.<br>Additionally, at the end of the turn, the Hound will heal the target.",
			dep: {AidCommand:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3}
		},
		FootPierce: 
		{
			name_en: "Foot Pierce",
			name_jp: "足甲貫き",
			details: "Requires a Hound.<br>Deals ranged, STR-based Stab damage to an enemy Line.<br>Attempts to inflict Leg Bind on hit.<br>Afterward, the Hound will deal melee Bash damage to any enemies that are afflicted with Leg Binds.<br>The Hound's follow-up attack has 99% base accuracy.",
			dep: {HunterShot:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 4}
		},
		DropShot: 
		{
			name_en: "Arc Shot",
			name_jp: "ドロップショット",
			details: "Deals ranged, STR-based Stab damage to one enemy.<br>Deals 2.5x damage to targets in the back Line.<br>Has 97% base accuracy.",
			dep: {TargetArrow:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 5}
		},
		HealingBoost: 
		{
			name_en: "Healing Up",
			name_jp: "回復ブースト",
			details: "Increases both the amount of static healing and max HP percent healing from the Hound's healing skills.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 0}
		},
		TPBoost: 
		{
			name_en: "TP Up",
			name_jp: "ＴＰブースト",
			details: "Increases the Rover's maximum TP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 1}
		},
		MedicalLick: 
		{
			name_en: "Medicinal Lick",
			name_jp: "メディカルリック",
			details: "Requires a Hound.<br>The Hound will heal random party members a set number of times.<br>Each party member can be healed a maximum of 2 times.<br>Has a 50% speed modifier.",
			dep: {DefenseCommand:5,FootPierce:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 3.5}
		},
		StunShot: 
		{
			name_en: "Stun Shot",
			name_jp: "スタンショット",
			details: "Requires a Hound.<br>Deals ranged, STR-based Stab damage to one target.<br>Afterward, the Hound will attempt to Stun the target.<br>Has a 200% speed modifier and 97% base accuracy.",
			dep: {DropShot:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 5}
		}
	},
	masurao:
	{
		KatanaMastery: 
		{
			name_en: "Katana Mastery",
			name_jp: "刀マスタリー",
			details: "Increases damage dealt with Katanas.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 0}
		},
		PeerlessDemon: 
		{
			name_en: "Peerless Demon",
			name_jp: "鬼無双",
			details: "Increases damage dealt based on the number of hits an attack makes.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 1}
		},
		TotheDeath: 
		{
			name_en: "Duel",
			name_jp: "果し合い",
			details: "Increases the Masauro's damage when hitting the same target as last turn.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 2}
		},
		ArmorPenetrate: 
		{
			name_en: "Armor Pierce",
			name_jp: "鎧通し",
			details: "Deals melee, STR-based Stab damage to one enemy.<br>Reduces the target's physical defense for 4 turns.<br>Has a 75% speed modifier and 101% base accuracy.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 3}
		},
		VacuumBlade: 
		{
			name_en: "Air Blade",
			name_jp: "空刃",
			details: "Deals ranged, STR-based Cut damage to one enemy.<br>Has 96% base accuracy.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 4}
		},
		NewChallenger: 
		{
			name_en: "New Challenger",
			name_jp: "新たな強敵",
			details: "Immediately begins a battle.<br>Increases the chance of encountering rare breeds.<br>Upon ending one battle, there is a chance to start another.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 5,
			coords: {x:0, y: 5}
		},
		FlyingSparrow: 
		{
			name_en: "Swallow Soar",
			name_jp: "飛燕",
			details: "Deals melee, STR-based Cut damage to one enemy.<br>After the target has taken their turn, the Masurao will attack again.<br>Has a 500% speed modifier and +10 base accuracy.<br>If the target acts before this skill is used, the second attack will not be made.",
			dep: {TotheDeath:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 2}
		},
		MistSlice: 
		{
			name_en: "Haze Slash",
			name_jp: "霞斬り",
			details: "Deals melee, STR-based Cut damage to one enemy.<br>Attempts to inflict Sleep on the target.<br>Has a base accuracy of 96%.",
			dep: {ArmorPenetrate:2},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 3}
		},
		Kamaitachi: 
		{
			name_en: "Whirlwind",
			name_jp: "鎌鼬",
			details: "Deals several instances of melee Cut damage to random targets.<br>Can hit the same target once at most.<br>Has an 85% speed modifier.",
			dep: {VacuumBlade:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 4}
		},
		AdvantageousPosition: 
		{
			name_en: "High Ground",
			name_jp: "地の利",
			details: "Increases physical attack of the Masurao's Line for a set amount of turns.<br>Has a 60% speed modifier.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 5}
		},
		MultiSwordTechnique: 
		{
			name_en: "Multi-Katana",
			name_jp: "多刀術",
			details: "Lets the Masauro equip multiple katanas.<br>When using the Attack command, there is a chance that the Masauro will attack with all of their equipped weapons.<br>Every hit beyond the first has reduced power -- the second hit has 80%, the third hit has 65%, and the fourth hit has 50%.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		HPBoost: 
		{
			name_en: "HP Up",
			name_jp: "ＨＰブースト",
			details: "Increases the Masauro's maximum HP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1}
		},
		CrossingtheSanzu: 
		{
			name_en: "Hell Slash",
			name_jp: "三途渡し",
			details: "Chases all attacks made by allies and enemies this turn.<br>Deals melee, STR-based Cut damage to targets.<br>Number of max chases is (MaxChases * NumberOfKatanas).<br>Has a 1000% speed modifier and 96% base accuracy.",
			dep: {FlyingSparrow:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 2}
		},
		FourGods: 
		{
			name_en: "Sacred Tetrad",
			name_jp: "四神",
			details: "Deals melee cut damage to one enemy.<br>Performs a number of hits equal to the number of Katanas the Masauro has equipped.<br>Has 101% base accuracy.",
			dep: {Kamaitachi:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3.5}
		},
		LayeredBlossoms: 
		{
			name_en: "Layered Bloom",
			name_jp: "八重の華",
			details: "Deals 2-8 instances of melee, STR-based Cut damage to an enemy Line.<br>Can hit the same target multiple times.<br>If the Masurao has multiple Katanas equipped, the damage per hit increases.",
			dep: {Kamaitachi:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 4.5}
		},
		PhysicalAttackBoost: 
		{
			name_en: "Phys ATK Up",
			name_jp: "物理攻撃ブースト",
			details: "Increases physical damage.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 5.5}
		},
		BrinkofDeathResuscitation: 
		{
			name_en: "Reincarnation",
			name_jp: "仮死再生",
			details: "While dead, gives a chance for the Masauro to revive at 1 HP at the end of the turn.",
			dep: {HPBoost:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 1}
		},
		Reflower: 
		{
			name_en: "Reblossom",
			name_jp: "返り咲き",
			details: "If the Masurao multiple Katanas equipped, gives a chance to repeat Katana skills after use.<br>This chance increases with the number of equipped Katanas.<br>Repeat chance is listed as: 2 Katana/3 Katana/4 Katana",
			dep: {CrossingtheSanzu:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 2}
		},
		Hyakkaryouran: 
		{
			name_en: "Vast Flourish",
			name_jp: "百華繚乱",
			details: "Deals (NumberOfKatanas * NumberOfEnemies) instances of melee, STR-based Cut damage to random enemies.<br>Can hit the same target multiple times.<br>Has a 50% speed modifier and 88% base accuracy.",
			dep: {FourGods:3,LayeredBlossoms:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 4}
		},
		Tenryuuransei: 
		{
			name_en: "Meteor Rain",
			name_jp: "天流乱星",
			details: "Deals melee, STR-based random-element damage to random enemies.<br>Number of hits is equal to number of Katanas equipped.<br>Has 86% base accuracy.",
			dep: {PhysicalAttackBoost:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 5.5}
		},
		SwordGod: 
		{
			name_en: "Sword God",
			name_jp: "剣神",
			details: "Increases the Masauro's critical hit damage and chance.<br>Lets Katana skills crit.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		TPBoost: 
		{
			name_en: "TP Up",
			name_jp: "ＴＰブースト",
			details: "Increases the Masauro's maximum TP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1.5}
		},
		LegSweep: 
		{
			name_en: "Foot Sweep",
			name_jp: "裾払い",
			details: "Deals melee, STR-based Cut damage to an enemy Line.<br>On hit, reduces the targets' evasion for a set amount of turns.<br>Has a 120% speed modifier and 146% base accuracy.",
			dep: {MistSlice:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3}
		},
		SwordsVigor: 
		{
			name_en: "Spirit Sword",
			name_jp: "剣の気迫",
			details: "When the Masauro hits a target with a single-target attack, that target's damage is reduced for the rest of the turn.",
			dep: {AdvantageousPosition:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 5}
		},
		SpeedBoost: 
		{
			name_en: "Speed Up",
			name_jp: "素早さブースト",
			details: "Increases the Masurao's speed, evasion, and accuracy.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 0}
		},
		ThunderSlash: 
		{
			name_en: "Bolt Slash",
			name_jp: "雷切",
			details: "Deals melee, STR-based Cut+Volt damage to one enemy.",
			dep: {TPBoost:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 1}
		},
		Suigetsu: 
		{
			name_en: "Mirror Moon",
			name_jp: "水月",
			details: "On this turn, when the Masauro is attacked with physical damage, there is a chance they will nullify the damage and counterattack the source.<br>Each time the Masurao counters, the chance to counter again is reduced by 35%.<br>Counterattacks have 116% base accuracy.",
			dep: {TPBoost:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 2}
		},
		HelmDivide: 
		{
			name_en: "Helm Splitter",
			name_jp: "兜割り",
			details: "Deals melee, STR-based cut damage to one enemy.<br>Ignores the enemy's resistance to Cut damage.<br>Has a 70% speed modifier.",
			dep: {LegSweep:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 3}
		},
		ThreeStageStrike: 
		{
			name_en: "Triple Strike",
			name_jp: "三段討ち",
			details: "Deals 3 instances of melee, STR-based Cut damage to one enemy.<br>Each hit attempts to inflict head, arm, and leg bind.<br>If the target is bound by one of the attacks, the remaining attacks will not be made.",
			dep: {SwordsVigor:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 4.5}
		},
		Sange: 
		{
			name_en: "Petal Scatter",
			name_jp: "散華",
			details: "Deals ranged, STR-based cut damage to all enemies.<br>Damage decreases based on the number of enemies.<br>Does 65% damage for 2 enemies, 45% for 3 enemies, and 35% for 4+ enemies.<br>Has a 90% speed modifier and 96% base accuracy.",
			dep: {SwordsVigor:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 5.5}
		}
	},
	shaman:
	{
		PrayerMastery: 
		{
			name_en: "Prayer Mastery",
			name_jp: "祈祷マスタリー",
			details: "Increases the speed and reduces the TP cost of Prayer skills.<br>The TP cost reduction is calculated by subtracting a static amount from the base cost, then multiplying by a percentage.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 0}
		},
		PrayerEradication: 
		{
			name_en: "Ruinous Prayer",
			name_jp: "祈祷：討滅",
			details: "Increases all party members' attack for a set amount of turns.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 1}
		},
		PrayerGuardian: 
		{
			name_en: "Aegis Prayer",
			name_jp: "祈祷：鎮守",
			details: "Increase all party members' defense for a set amount of turns.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 2}
		},
		PrayerBullseye: 
		{
			name_en: "Focus Prayer",
			name_jp: "祈祷：適中",
			details: "Increases all party members' accuracy for a set amount of turns.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 3}
		},
		PrayerBlaze: 
		{
			name_en: "Blaze Prayer",
			name_jp: "祈祷：焔",
			details: "Increases all party members' resistance to Fire for a set number of turns.<br>Adds Fire to buffed allies' normal attacks for the same duration.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 4}
		},
		PrayerColdRain: 
		{
			name_en: "Hail Prayer",
			name_jp: "祈祷：氷雨",
			details: "Increases all party members' resistance to Ice for a set number of turns.<br>Adds Ice to buffed allies' normal attacks for the same duration.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 5}
		},
		PrayerPurpleLightning: 
		{
			name_en: "Bolt Prayer",
			name_jp: "祈祷：紫電",
			details: "Increases all party members' resistance to Volt for a set number of turns.<br>Adds Volt to buffed allies' normal attacks for the same duration.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 6}
		},
		Gospel: 
		{
			name_en: "Gospel",
			name_jp: "福音",
			details: "Party members that receive buffs from the Shaman will have a percentage of their max HP restored.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 0}
		},
		BlessingofHeaven: 
		{
			name_en: "Heaven's Gift",
			name_jp: "天恵",
			details: "Cancels one buff and one debuff on a party member.<br>Restores the target's HP and increases their speed for one turn.<br>The heal amount is doubled if both a buff and debuff are canceled.<br>Has a 2000% speed modifier.",
			dep: {PrayerEradication:2,PrayerGuardian:2,PrayerBullseye:2},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 2}
		},
		OracleDance: 
		{
			name_en: "Dance Oracle",
			name_jp: "神託：乱舞",
			details: "Cancels Blaze Prayer, Hail Prayer, or Bolt Prayer on the Shaman.<br>Deals ranged INT-based damage of the canceled Prayer's element to all enemies.<br>On hit, reduces targets' resistance to the element for a set number of turns.<br>Has a 200% speed modifier and 150% base accuracy.<br>The Prayer buff canceled will be the first one encountered on the first affected party member.",
			dep: {PrayerBlaze:3,PrayerColdRain:3,PrayerPurpleLightning:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 5}
		},
		MemoriesofaPreviousLife: 
		{
			name_en: "Ancient Memory",
			name_jp: "前世の記憶",
			details: "When a buff on the Shaman expires or is canceled, gives a chance to reapply it.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		PrayerfortheSoul: 
		{
			name_en: "Soul Grace",
			name_jp: "魂の祈り",
			details: "Gives a chance for the Shaman to survive fatal damage at 1 HP if they have a buff on, in exchange for losing their oldest applied buff.",
			dep: {BlessingofHeaven:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1.5}
		},
		ProtectionoftheOfferings: 
		{
			name_en: "Offering",
			name_jp: "神供の加護",
			details: "Cancels one buff and one debuff on the user.<br>Restores TP to other party members in the same Line.<br>The restore amount is doubled if both a buff and debuff are dispelled.<br>Has an 80% speed modifier.<br>Costs 40 TP.",
			dep: {BlessingofHeaven:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 2.5}
		},
		MagicAttackBoost: 
		{
			name_en: "Magic ATK Up",
			name_jp: "魔法攻撃ブースト",
			details: "Increases the Shaman's Magical damage dealt.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3.5}
		},
		OracleThreeRuns: 
		{
			name_en: "Mana Oracle",
			name_jp: "神託：三走り",
			details: "Cancels Blaze Prayer, Hail Prayer, or Bolt Prayer on all party members.<br>Deals 5 instances of ranged INT-based damage of the canceled Prayer's element to random targets.<br>Can hit the same target multiple times.<br>Has 150% base accuracy.<br>The Prayer buff canceled will be the first one encountered on the first affected party member.",
			dep: {OracleDance:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 4.5}
		},
		OracleHalo: 
		{
			name_en: "Aureole Oracle",
			name_jp: "神託：後光",
			details: "Cancels Blaze Prayer, Hail Prayer, or Bolt Prayer on all party members.<br>Until the end of the turn, affected party members will absorb all damage of the canceled Prayer's element.<br>The Prayer buff canceled will be the first one encountered on the first affected party member.",
			dep: {OracleDance:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 5,
			coords: {x:2, y: 5.5}
		},
		HPBoost: 
		{
			name_en: "HP Up",
			name_jp: "ＨＰブースト",
			details: "Increases the Shaman's maximum HP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 0}
		},
		Purification: 
		{
			name_en: "Purification",
			name_jp: "禊",
			details: "Cancels all buffs and debuffs on all party members and enemies.<br>Restores the Shaman's TP for an amount equal to the number of buff types cancelled times the base TP restore amount.<br>Buff types include: party member buff, party member debuff, enemy buff, enemy debuff.<br>Has a 200% speed modifier.<br>Costs 40 TP.",
			dep: {PrayerfortheSoul:5,ProtectionoftheOfferings:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 2}
		},
		TPBoost: 
		{
			name_en: "TP Up",
			name_jp: "ＴＰブースト",
			details: "Increases the Shaman's maximum TP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 3.5}
		},
		ChanneltheGods: 
		{
			name_en: "Invoke Gods",
			name_jp: "神降ろし",
			details: "Requires 3 buffs on the user.<br>Cancels all buffs on the Shaman.<br>In exchange, the Shaman will attack an enemy with their equipped weapon, dealing melee STR-based damage and reducing the target's damage until the end of the turn.",
			dep: {OracleThreeRuns:5,OracleHalo:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 5}
		},
		ConsolingtheDead: 
		{
			name_en: "Appease Spirits",
			name_jp: "慰霊",
			details: "When the Shaman is alive, party members with buffs will recover HP when they act.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		PrayerExorcism: 
		{
			name_en: "Exorcism Prayer",
			name_jp: "祈祷：破邪",
			details: "Increases all party members' resistance to Ailments and Binds for a set amount of turns.",
			dep: {BlessingofHeaven:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1}
		},
		PrayerEscape: 
		{
			name_en: "Haste Prayer",
			name_jp: "祈祷：脱兎",
			details: "Increases all party members' evasion for a set amount of turns.",
			dep: {BlessingofHeaven:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 2}
		},
		PrayerLongevity: 
		{
			name_en: "Vitality Prayer",
			name_jp: "祈祷：長寿",
			details: "Increases all party members' max HP for a set amount of turns.",
			dep: {BlessingofHeaven:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3}
		},
		PurifyingFlame: 
		{
			name_en: "Holy Flame",
			name_jp: "忌火",
			details: "Restores HP to all party members for every 3 steps taken in the Labyrinth.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 4}
		},
		Bunrei: 
		{
			name_en: "Split Spirits",
			name_jp: "分霊",
			details: "For one turn, all party members will recover HP based on a percentage of the damage they deal.",
			dep: {OracleDance:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 5}
		},
		MagicDefenseBoost: 
		{
			name_en: "Magic DEF Up",
			name_jp: "魔法防御ブースト",
			details: "Reduces Magical damage taken.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 6}
		},
		ConstraintDefenseBoost: 
		{
			name_en: "Status DEF Up",
			name_jp: "抑制防御ブースト",
			details: "Increases the Shaman's defense against Ailments and Binds.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 0}
		},
		Sanctuary: 
		{
			name_en: "Sanctuary",
			name_jp: "神域",
			details: "For one turn, when an ally with a buff is supposed to become afflicted with an Ailment or Bind, there is a chance they will lose a buff instead.",
			dep: {PrayerExorcism:5,PrayerEscape:5,PrayerLongevity:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 2}
		},
		Affection: 
		{
			name_en: "Benevolence",
			name_jp: "慈愛",
			details: "While the Shaman is alive, party members with buffs will recover HP when taking damage.",
			dep: {PurifyingFlame:2,Bunrei:2},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 4.5}
		}
	},
	herbalist:
	{		
		HerbMastery: 
		{
			name_en: "Herb Mastery",
			name_jp: "ハーブマスタリー",
			details: "Increases the amount of HP restored by Herb skills.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 0}
		},
		CureHerb: 
		{
			name_en: "Healing Herb",
			name_jp: "キュアハーブ",
			details: "Heals one ally.<br>Healing is based on the Herbalist's WIS.<br>Has a 150% speed modifier.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 1}
		},
		RefreshHerb: 
		{
			name_en: "Refreshing Herb",
			name_jp: "リフレシュハーブ",
			details: "Dispels Ailments from one ally.<br>Targets a line at max level.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 5,
			coords: {x:0, y: 2}
		},
		PoisonSmoke: 
		{
			name_en: "Toxic Smoke",
			name_jp: "ポイズンスモーク",
			details: "Attempts to Poison an enemy Line.<br>Lowers the targets' Poison resistance for a set amount of turns.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 5}
		},
		DarkSmoke: 
		{
			name_en: "Dark Smoke",
			name_jp: "ダークスモーク",
			details: "Attempts to Blind an enemy Line.<br>Lowers the targets' Blind resistance for a set amount of turns.",
			dep: {},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:0, y: 6}
		},
		LineHerb: 
		{
			name_en: "Sweeping Herb",
			name_jp: "ラインハーブ",
			details: "Heals one Line of allies.<br>Healing is based on the Herbalist's WIS.",
			dep: {CureHerb:5},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 1}
		},
		ResurrectionHerb: 
		{
			name_en: "Revival Herb",
			name_jp: "リザレクトハーブ",
			details: "Revives a dead ally.<br>Has a 70% speed modifier.",
			dep: {RefreshHerb:3},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 2}
		},
		Antibody: 
		{
			name_en: "Antibodies",
			name_jp: "抗体",
			details: "Increases the Herbalist's chance to recover from Ailments and Binds.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 3}
		},
		MedicinalKnowledge: 
		{
			name_en: "Herb Foraging",
			name_jp: "薬草知識",
			details: "The entire party recovers HP and TP when using a Take, Chop, or Mine point.<br>The restore amount is a static number plus a percentage of the party member's maximum HP/TP.",
			dep: {},
			active: false,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 4}	
		},
		SmokeRot: 
		{
			name_en: "Smokeblight",
			name_jp: "スモークロット",
			details: "Decreases one enemy Line's magic defense.<br>The MDEF reduction increases if the enemy is has a Smoke skill debuff.",
			dep: {PoisonSmoke:2,DarkSmoke:2},
			active: true,
			reqLevel: 0,
			level: 0,
			max: 10,
			coords: {x:1, y: 5.5}	
		},
		HerbBoost: 
		{
			name_en: "Herb Boost",
			name_jp: "ハーブブースト",
			details: "Allows Herb skills to increase the targets' HP beyond their maximum HP for the one turn.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		AreaHerb: 
		{
			name_en: "Bountiful Herb",
			name_jp: "エリアハーブ",
			details: "Heals the party.<br>Healing is based on the Herbalist's WIS.<br>Has a 70% speed modifier.",
			dep: {LineHerb:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1}
		},
		RecoveryHerb: 
		{
			name_en: "Freeing Herb",
			name_jp: "リカバリーハーブ",
			details: "Dispels Binds from one ally.<br>The number of binds removed depends on the level of Freeing Herb.<br>Targets a line at max level.",
			dep: {ResurrectionHerb:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 5,
			coords: {x:2, y: 2}
		},
		ConstraintDefenseBoost: 
		{
			name_en: "Status DEF Up",
			name_jp: "抑制防御ブースト",
			details: "Increases defense against Ailments and Binds.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3}
		},
		SecretRemedyCompound: 
		{
			name_en: "Shared Nostrum",
			name_jp: "秘薬調合",
			details: "Reduces the action speed and amount restored by Herb skills in exchange for increased coverage for a set number of turns.<br>Single target skills become Line target, and Line target skills become Party target.<br>Party target skills will still be affected by the negative effects.<br>Has a 70% speed modifier.",
			dep: {MedicinalKnowledge:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 4}
		},
		ChaseHerb: 
		{
			name_en: "Reflex Herb",
			name_jp: "チェイスハーブ",
			details: "During the current turn, any allies that take damage will be healed.<br>The chance of an ally being healed goes down with each heal.<br>Healing is based on the Herbalist's WIS.<br>Has a 300% speed modifier.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 5}
		},
		DelayHerb: 
		{
			name_en: "Delayed Herb",
			name_jp: "ディレイハーブ",
			details: "Heals the party at the beginning of the next turn.<br>Has a 1 turn cooldown after casting.<br>Healing is based on the Herbalist's WIS.<br>Has an 80% speed modifier.",
			dep: {},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 6}
		},
		HPBoost: 
		{
			name_en: "HP Up",
			name_jp: "ＨＰブースト",
			details: "Increases the Herbalist's maximum HP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 0}
		},
		AutoResurrection: 
		{
			name_en: "Auto-Revive",
			name_jp: "オートリザレクト",
			details: "When an ally dies, the Herbalist has a chance to automatically revive them.<br>Has a 70% speed modifier.",
			dep: {RecoveryHerb:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 2}
		},
		LingeringScent: 
		{
			name_en: "Lingering Scent",
			name_jp: "残り香",
			details: "For a set number of turns, the last used Herb skill will activate again at the end of the turn.<br>The effectiveness of the follow-up Herb will be reduced if it is a healing skill.<br>Has a 40% speed modifier.",
			dep: {ChaseHerb:3,DelayHerb:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 5.5}
		},
		SmokeBoost: 
		{
			name_en: "Smoke Boost",
			name_jp: "スモークブースト",
			details: "Increases the action speed and decreases the TP cost of Smoke skills.<br>The TP cost decrease is calculated by subtrating a static amount from the base cost, then multiplying by a percentage.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 0}
		},
		ConstraintAttackBoost: 
		{
			name_en: "Status ATK Up",
			name_jp: "抑制攻撃ブースト",
			details: "Increases the chance of inflicting Ailments and Binds.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 1}
		},
		ParalyzeSmoke: 
		{
			name_en: "Numbing Smoke",
			name_jp: "パラライスモーク",
			details: "Attempts to Paralyze an enemy line.<br>Lowers the targets' Paralysis resistance for a set amount of turns.",
			dep: {Antibody:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 2.5}
		},
		BunglingSmoke: 
		{
			name_en: "Chaos Smoke",
			name_jp: "マズルスモーク",
			details: "Attempts to Panic an enemy Line.<br>Lowers the targets' Panic resistance for a set amount of turns.",
			dep: {Antibody:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 3.5}
		},
		SmokeSolid: 
		{
			name_en: "Smokestone",
			name_jp: "スモークソリッド",
			details: "Attempts to Petrify one enemy that is affected by a Smoke debuff.",
			dep: {SmokeRot:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 5}
		},
		SmokeSpark: 
		{
			name_en: "Smokeflash",
			name_jp: "スモークスパーク",
			details: "Attempts to Stun one enemy if it is affected by a Smoke debuff.<br>Has a 300% speed modifier.",
			dep: {SmokeRot:5},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:2, y: 6}
		},
		TPBoost: 
		{
			name_en: "TP Up",
			name_jp: "ＴＰブースト",
			details: "Increases the Herbalist's maximum TP.",
			dep: {},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 0}
		},
		SmokeBomb: 
		{
			name_en: "Smoke Bomb",
			name_jp: "スモークボム",
			details: "Only effective on enemies with both an Ailment and Debuff applied.<br>Removes 1 Debuff and deals ranged INT-based Fire damage to target enemy.",
			dep: {ParalyzeSmoke:3,BunglingSmoke:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 3}
		},
		PersistingScent: 
		{
			name_en: "Passing Scent",
			name_jp: "移り香",
			details: "Inflicts a debuff on all enemies that, for a set number of turns, gives a chance to afflict enemies with an ailment based on the Smoke debuffs they are affected by at the end of the turn.<br>The strength of the applied Smoke and chance to apply are dependant on the level of Passing Scent rather than the Smoke skill.<br>Has a 70% speed modifier at all levels.",
			dep: {SmokeSolid:3,SmokeSpark:3},
			active: true,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 5}
		},
		PreemptiveSmoke: 
		{
			name_en: "Auto-Smoke",
			name_jp: "先制スモーク",
			details: "Has a chance to apply a random Smoke skill that the Herbalist knows to the enemy front line at the start of battle.<br>The chance to activate depends on the number of Smoke skills the Herbalist knows.",
			dep: {SmokeSolid:3,SmokeSpark:3},
			active: false,
			reqLevel: 20,
			level: 0,
			max: 10,
			coords: {x:3, y: 6}
		}
	}
}
