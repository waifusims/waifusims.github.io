var classSkillForwardReqs =
{
	fencer:
	{
		base:
		{
			RapierMastery: {},
			ChainFire: {ChainBoost:2, ChainBurst:2},
			ChainIce: {ChainBoost:2, ChainBurst:2},
			ChainVolt: {ChainBoost:2, ChainBurst:2},
			Predict: {WindCurtain:3},
			ChainBoost: {},
			ChainBurst: {},
			WindCurtain: {},
			VisionThrust: {},
			Sylphid: {}
		},
		specA:
		{
			RapierMastery: {},
			ChainFire: {ChainBoost:2, ChainBurst:2},
			ChainIce: {ChainBoost:2, ChainBurst:2},
			ChainVolt: {ChainBoost:2, ChainBurst:2},
			Predict: {WindCurtain:3},
			ChainBoost: {},
			ChainBurst: {},
			WindCurtain: {PreemptiveCurtain:3},
			VisionThrust: {SharpThrust:3},
			Sylphid: {CounterBoost:5},
			RayofLight: {},
			BewitchingSwordDance: {PileOn:3, AvoidAccel:3},
			PreemptiveCurtain: {DivineWind:3},
			SharpThrust: {RevengeThrust:5},
			CounterBoost: {},
			Unburdened: {},
			PileOn: {},
			AvoidAccel: {},
			DivineWind: {},
			RevengeThrust: {}
		},
		specB:
		{
			RapierMastery: {SpeedofSoundBlade:3},
			ChainFire: {ChainBoost:2, ChainBurst:2},
			ChainIce: {ChainBoost:2, ChainBurst:2},
			ChainVolt: {ChainBoost:2, ChainBurst:2},
			Predict: {WindCurtain:3},
			ChainBoost: {ChainKiller:3},
			ChainBurst: {ChainKiller:3},
			WindCurtain: {},
			VisionThrust: {RandomStab:3},
			Sylphid: {},
			SpeedofSoundBlade: {},
			ChainKiller: {ChainAll:5, ChainPlus:5, ChainDouble:5},
			SylphScreen: {},
			RandomStab: {Resonance:5},
			SpeedBoost: {},
			PhysicalAttackBoost: {},
			ChainAll: {},
			ChainPlus: {},
			ChainDouble: {},
			Resonance: {}
		}
	},
	dragoon: 
	{
		base:
		{
			ShieldMastery: {},
			LineGuard: {GunMount:2},
			MaterialGuard: {GunMount:2},
			HealingGuard: {GunMount:2},
			Bunker: {DefensivePosition:2},
			ArtilleryMastery: {},
			GunMount: {},
			BarrageWall: {},
			DragonsRoar: {},
			DefensivePosition: {}
		},
		specA:
		{
			ShieldMastery: {},
			LineGuard: {GunMount:2},
			MaterialGuard: {GunMount:2},
			HealingGuard: {GunMount:2},
			Bunker: {DefensivePosition:2},
			ArtilleryMastery: {},
			GunMount: {RecoveryGuard:3,CounterGuard:3,DivideGuard:3},
			BarrageWall: {},
			DragonsRoar: {PreemptiveRoar:3},
			DefensivePosition: {PreemptiveBunker:3},
			HPBoost: {},
			RecoveryGuard: {FullGuard:3,SoulGuard:3},
			CounterGuard: {FullGuard:3,SoulGuard:3},
			DivideGuard: {FullGuard:3,SoulGuard:3},
			ShieldThrow: {},
			PreemptiveRoar: {DragonForce:3},
			PreemptiveBunker: {},
			FullGuard: {},
			SoulGuard: {},
			DragonForce: {}
		},
		specB:
		{
			ShieldMastery: {},
			LineGuard: {GunMount:2},
			MaterialGuard: {GunMount:2},
			HealingGuard: {GunMount:2},
			Bunker: {DefensivePosition:2},
			ArtilleryMastery: {},
			GunMount: {},
			BarrageWall: {RapidCannon:3,CurseCannon:3,HypnoCannon:3},
			DragonsRoar: {},
			DefensivePosition: {Pillbox:3},
			GunRevenge: {},
			TPBoost: {BombardmentPrep:3},
			RapidCannon: {BusterCannon:3},
			CurseCannon: {BusterCannon:3},
			HypnoCannon: {BusterCannon:3},
			Pillbox: {GunSupport:3},
			PhysicalAttackBoost: {},
			BombardmentPrep: {},
			BusterCannon: {},
			GunSupport: {}
		}
	},
	cestus:
	{
		base:
		{
			GauntletMastery: {},
			Flicker: {OneTwo:3},
			ArmBreak: {OneTwo:3},
			LiverBlow: {OneTwo:3},
			RushingBlood: {GivingitEverything:1},
			ThunderGodFist: {DemonFist:2},
			PhysicalAttackBoost: {},
			OneTwo: {},
			GivingitEverything: {},
			DemonFist: {}
		},
		specA:
		{
			GauntletMastery: {},
			Flicker: {OneTwo:3},
			ArmBreak: {OneTwo:3},
			LiverBlow: {OneTwo:3},
			RushingBlood: {GivingitEverything:1},
			ThunderGodFist: {DemonFist:2},
			PhysicalAttackBoost: {},
			OneTwo: {LeadBlow:5},
			GivingitEverything: {CrossCounter:5},
			DemonFist: {},
			DoublePunch: {},
			Corkscrew: {LeadBlow:2},
			SpeedBoost: {RushOut:5},
			CrossCounter: {},
			Interval: {Clinch:3},
			ArmBlock: {Clinch:3},
			ConstraintAttackBoost: {},
			LeadBlow: {},
			RushOut: {},
			Clinch: {}
		},
		specB:
		{
			GauntletMastery: {},
			Flicker: {OneTwo:3},
			ArmBreak: {OneTwo:3},
			LiverBlow: {OneTwo:3},
			RushingBlood: {GivingitEverything:1},
			ThunderGodFist: {DemonFist:2},
			PhysicalAttackBoost: {},
			OneTwo: {},
			GivingitEverything: {BackFromtheDead:3},
			DemonFist: {DemonGodFist:3},
			Grit: {},
			VajraStance: {OugiRengokusatsu:5},
			SoulSmash: {OugiRengokusatsu:5},
			GiantKiller: {OugiTenchihaten:3},
			BackFromtheDead: {OugiTenchihaten:3},
			DemonGodFist: {},
			ConstraintDefenseBoost: {},
			HPBoost: {},
			OugiRengokusatsu: {},
			OugiTenchihaten: {}
		}
	},
	reaper:
	{
		base:
		{
			ScytheMastery: {},
			MiasmaWeapon: {PreemptiveWeapon:2,EndlessShroud:2,DeathsJudgment:2},
			FrailMiasma: {FeebleMiasma:3},
			ScytheofNumbStasis: {ScytheofExorcism:3},
			GatherSouls: {},
			PreemptiveWeapon: {},
			EndlessShroud: {},
			DeathsJudgment: {},
			FeebleMiasma: {},
			ScytheofExorcism: {}
		},
		specA:
		{
			ScytheMastery: {},
			MiasmaWeapon: {PreemptiveWeapon:2,EndlessShroud:2,DeathsJudgment:2},
			FrailMiasma: {FeebleMiasma:3},
			ScytheofNumbStasis: {ScytheofExorcism:3},
			GatherSouls: {},
			PreemptiveWeapon: {},
			EndlessShroud: {},
			DeathsJudgment: {FreshBloodSlash:3,GreateScytheofColdAsh:3},
			FeebleMiasma: {},
			ScytheofExorcism: {ScytheofCruelPoison:3,ScytheofWickedChaos:3},
			BlackBlade: {},
			TPBoost: {},
			FreshBloodSlash: {ShroudofReality:3},
			GreateScytheofColdAsh: {ShroudofReality:3},
			ScytheofCruelPoison: {ScytheofDeath:3},
			ScytheofWickedChaos: {ScytheofDeath:3},
			BlackShroud: {},
			ConstraintAttackBoost: {},
			ShroudofReality: {},
			ScytheofDeath: {}
		},
		specB:
		{
			ScytheMastery: {},
			MiasmaWeapon: {PreemptiveWeapon:2,EndlessShroud:2,DeathsJudgment:2},
			FrailMiasma: {FeebleMiasma:3},
			ScytheofNumbStasis: {ScytheofExorcism:3},
			GatherSouls: {},
			PreemptiveWeapon: {},
			EndlessShroud: {DeathResistance:5},
			DeathsJudgment: {},
			FeebleMiasma: {BrittleMiasma:3,DimMiasma:3},
			ScytheofExorcism: {},
			AbsorbVitality: {},
			MagicDefenseBoost: {},
			DeathResistance: {BloodofAtonement:5,WallofMiasma:5},
			BrittleMiasma: {ScytheofTransience:5,SoulTransfer:5},
			DimMiasma: {ScytheofTransience:5,SoulTransfer:5},
			HPBoost: {},
			BloodofAtonement: {},
			WallofMiasma: {},
			ScytheofTransience: {},
			SoulTransfer: {}
		}
	},
	warlock:
	{
		base:
		{
			MagiMastery: {HighSpeedIncantation:5},
			Amplifier: {MagicShield:2},
			Levitation: {},
			HighSpeedIncantation: {},
			Fireball: {},
			IcicleLance: {},
			Lightning: {},
			MagicShield: {},
			IncantationCompressionForm: {},
			Invisible: {}
		},
		specA:
		{
			MagiMastery: {HighSpeedIncantation:5},
			Amplifier: {MagicShield:2},
			Levitation: {},
			HighSpeedIncantation: {},
			Fireball: {Windstorm:3,EarthSpike:3,Rockfall:3},
			IcicleLance: {Windstorm:3,EarthSpike:3,Rockfall:3},
			Lightning: {Windstorm:3,EarthSpike:3,Rockfall:3},
			MagicShield: {AntiMagic:3},
			IncantationCompressionForm: {IncantationMultistrikeForm:5},
			Invisible: {},
			ReserveMagic: {},
			Windstorm: {Alter:5},
			EarthSpike: {Alter:5},
			Rockfall: {Alter:5},
			AntiMagic: {LifeDrain:3},
			IncantationMultistrikeForm: {},
			MagicDefenseBoost: {},
			TPBoost: {},
			Alter: {},
			LifeDrain: {}
		},
		specB:
		{
			MagiMastery: {HighSpeedIncantation:5},
			Amplifier: {MagicShield:2},
			Levitation: {},
			HighSpeedIncantation: {},
			Fireball: {Explode:5},
			IcicleLance: {IceStream:5},
			Lightning: {ThunderBreak:5},
			MagicShield: {MagicWeapon:3},
			IncantationCompressionForm: {IncantationReductionForm:5},
			Invisible: {},
			CommonMagic: {},
			Explode: {MagicLeak:3,CostCut:3},
			IceStream: {MagicLeak:3,CostCut:3},
			ThunderBreak: {MagicLeak:3,CostCut:3},
			MagicWeapon: {},
			IncantationReductionForm: {},
			ConstraintDefenseBoost: {},
			MagicAttackBoost: {},
			MagicLeak: {},
			CostCut: {}
		}
	},
	necromancer:
	{
		base:
		{
			GhostMastery: {},
			GhostSummoning: {ThePriceofLife:2},
			MoaningSpirits: {MercilessWall:2},
			SoulFood: {MercilessWall:2},
			GravekeepingKnowledge: {GhostReincarnation:3},
			ThePriceofLife: {},
			MercilessWall: {},
			GhostReincarnation: {},
			PoisonBomb: {},
			FireBomb: {}
		},
		specA:
		{
			GhostMastery: {},
			GhostSummoning: {ThePriceofLife:2},
			MoaningSpirits: {MercilessWall:2},
			SoulFood: {MercilessWall:2},
			GravekeepingKnowledge: {GhostReincarnation:3},
			ThePriceofLife: {CurseTransfer:5},
			MercilessWall: {OpenGrave:3},
			GhostReincarnation: {},
			PoisonBomb: {CurseBomb:3},
			FireBomb: {IceBomb:3},
			GhostSecretArts: {},
			CurseTransfer: {SoulTrade:5},
			OpenGrave: {GhostDance:5},
			ConstraintAttackBoost: {},
			CurseBomb: {GravestoneBinding:3},
			IceBomb: {GravestoneBinding:3},
			HPBoost: {},
			SoulTrade: {},
			GhostDance: {},
			GravestoneBinding: {}
		},
		specB:
		{
			GhostMastery: {},
			GhostSummoning: {ThePriceofLife:2},
			MoaningSpirits: {MercilessWall:2},
			SoulFood: {MercilessWall:2},
			GravekeepingKnowledge: {GhostReincarnation:3},
			ThePriceofLife: {PreemptiveGhostSummoning:3},
			MercilessWall: {EquivalentExchange:3},
			GhostReincarnation: {},
			PoisonBomb: {TheGatesofHell:5},
			FireBomb: {TheGatesofHell:5},
			TheBeckoningofHades: {},
			PreemptiveGhostSummoning: {},
			EquivalentExchange: {GhostExplosion:5},
			Sacrifice: {NegativeEnergy:3},
			MagicAttackBoost: {},
			TheGatesofHell: {ZombiePowder:5},
			TPBoost: {},
			GhostExplosion: {},
			NegativeEnergy: {},
			ZombiePowder: {}
		}
	},
	hound:
	{
		base:
		{
			BowMastery: {},
			HawkWhistle: {HawkArrow:3,FlashofBothWings:3},
			DogWhistle: {AidCommand:3,HunterShot:3},
			Brushing: {},
			AnimalTherapy: {},
			HawkArrow: {},
			FlashofBothWings: {},
			AidCommand: {},
			HunterShot: {},
			TargetArrow: {}
		},
		specA:
		{
			BowMastery: {},
			HawkWhistle: {HawkArrow:3,FlashofBothWings:3},
			DogWhistle: {AidCommand:3,HunterShot:3},
			Brushing: {},
			AnimalTherapy: {},
			HawkArrow: {FlyingTalonStrike:3},
			FlashofBothWings: {IcePeck:3},
			AidCommand: {},
			HunterShot: {},
			TargetArrow: {PowerShot:5},
			SkyPatrol: {},
			FlyingTalonStrike: {SkyDive:5},
			IcePeck: {SkyDive:5},
			PhysicalAttackBoost: {},
			SpeedBoost: {},
			PowerShot: {MillionShot:5},
			ScatterFeathers: {},
			FinishingArrow: {},
			SkyDive: {},
			MillionShot: {}
		},
		specB:
		{
			BowMastery: {},
			HawkWhistle: {HawkArrow:3,FlashofBothWings:3},
			DogWhistle: {AidCommand:3,HunterShot:3},
			Brushing: {},
			AnimalTherapy: {},
			HawkArrow: {},
			FlashofBothWings: {},
			AidCommand: {DefenseCommand:3},
			HunterShot: {FootPierce:3},
			TargetArrow: {DropShot:5},
			GroundPatrol: {},
			ConstraintAttackBoost: {},
			MenacingHowl: {},
			DefenseCommand: {MedicalLick:5},
			FootPierce: {MedicalLick:5},
			DropShot: {StunShot:5},
			HealingBoost: {},
			TPBoost: {},
			MedicalLick: {},
			StunShot: {}
		}
	},
	masurao:
	{
		base:
		{
			KatanaMastery: {},
			PeerlessDemon: {},
			TotheDeath: {FlyingSparrow:3},
			ArmorPenetrate: {MistSlice:2},
			VacuumBlade: {Kamaitachi:3},
			NewChallenger: {},
			FlyingSparrow: {},
			MistSlice: {},
			Kamaitachi: {},
			AdvantageousPosition: {}
		},
		specA:
		{
			KatanaMastery: {},
			PeerlessDemon: {},
			TotheDeath: {FlyingSparrow:3},
			ArmorPenetrate: {MistSlice:2},
			VacuumBlade: {Kamaitachi:3},
			NewChallenger: {},
			FlyingSparrow: {CrossingtheSanzu:3},
			MistSlice: {},
			Kamaitachi: {FourGods:3,LayeredBlossoms:3},
			AdvantageousPosition: {},
			MultiSwordTechnique: {},
			HPBoost: {BrinkofDeathResuscitation:3},
			CrossingtheSanzu: {Reflower:3},
			FourGods: {Hyakkaryouran:3},
			LayeredBlossoms: {Hyakkaryouran:3},
			PhysicalAttackBoost: {Tenryuuransei:3},
			BrinkofDeathResuscitation: {},
			Reflower: {},
			Hyakkaryouran: {},
			Tenryuuransei: {}
		},
		specB:
		{
			KatanaMastery: {},
			PeerlessDemon: {},
			TotheDeath: {FlyingSparrow:3},
			ArmorPenetrate: {MistSlice:2},
			VacuumBlade: {Kamaitachi:3},
			NewChallenger: {},
			FlyingSparrow: {},
			MistSlice: {LegSweep:3},
			Kamaitachi: {},
			AdvantageousPosition: {SwordsVigor:3},
			SwordGod: {},
			TPBoost: {ThunderSlash:5,Suigetsu:5},
			LegSweep: {HelmDivide:5},
			SwordsVigor: {ThreeStageStrike:5,Sange:5},
			SpeedBoost: {},
			ThunderSlash: {},
			Suigetsu: {},
			HelmDivide: {},
			ThreeStageStrike: {},
			Sange: {}
		}
	},
	shaman:
	{
		base:
		{
			PrayerMastery: {},
			PrayerEradication: {BlessingofHeaven:2},
			PrayerGuardian: {BlessingofHeaven:2},
			PrayerBullseye: {BlessingofHeaven:2},
			PrayerBlaze: {OracleDance:3},
			PrayerColdRain: {OracleDance:3},
			PrayerPurpleLightning: {OracleDance:3},
			Gospel: {},
			BlessingofHeaven: {},
			OracleDance: {}
		},
		specA:
		{
			PrayerMastery: {},
			PrayerEradication: {BlessingofHeaven:2},
			PrayerGuardian: {BlessingofHeaven:2},
			PrayerBullseye: {BlessingofHeaven:2},
			PrayerBlaze: {OracleDance:3},
			PrayerColdRain: {OracleDance:3},
			PrayerPurpleLightning: {OracleDance:3},
			Gospel: {},
			BlessingofHeaven: {PrayerfortheSoul:3,ProtectionoftheOfferings:3},
			OracleDance: {OracleThreeRuns:3,OracleHalo:3},
			MemoriesofaPreviousLife: {},
			PrayerfortheSoul: {Purification:5},
			ProtectionoftheOfferings: {Purification:5},
			MagicAttackBoost: {},
			OracleThreeRuns: {ChanneltheGods:5},
			OracleHalo: {ChanneltheGods:3},
			HPBoost: {},
			Purification: {},
			TPBoost: {},
			ChanneltheGods: {}
		},
		specB:
		{
			PrayerMastery: {},
			PrayerEradication: {BlessingofHeaven:2},
			PrayerGuardian: {BlessingofHeaven:2},
			PrayerBullseye: {BlessingofHeaven:2},
			PrayerBlaze: {OracleDance:3},
			PrayerColdRain: {OracleDance:3},
			PrayerPurpleLightning: {OracleDance:3},
			Gospel: {},
			BlessingofHeaven: {PrayerExorcism:3,PrayerEscape:3,PrayerLongevity:3},
			OracleDance: {Bunrei:3},
			ConsolingtheDead: {},
			PrayerExorcism: {Sanctuary:5},
			PrayerEscape: {Sanctuary:5},
			PrayerLongevity: {Sanctuary:5},
			PurifyingFlame: {Affection:2},
			Bunrei: {Affection:2},
			MagicDefenseBoost: {},
			ConstraintDefenseBoost: {},
			Sanctuary: {},
			Affection: {}
		}
	},
	herbalist:
	{
		base:
		{
			HerbMastery: {},
			CureHerb: {LineHerb:5},
			RefreshHerb: {ResurrectionHerb:3},
			PoisonSmoke: {SmokeRot:2},
			DarkSmoke: {SmokeRot:2},
			LineHerb: {},
			ResurrectionHerb: {},
			Antibody: {},
			MedicinalKnowledge: {},
			SmokeRot: {}
		},
		specA:
		{
			HerbMastery: {},
			CureHerb: {LineHerb:5},
			RefreshHerb: {ResurrectionHerb:3},
			PoisonSmoke: {SmokeRot:2},
			DarkSmoke: {SmokeRot:2},
			LineHerb: {AreaHerb:5},
			ResurrectionHerb: {RecoveryHerb:3},
			Antibody: {},
			MedicinalKnowledge: {SecretRemedyCompound:5},
			SmokeRot: {},
			HerbBoost: {},
			AreaHerb: {},
			RecoveryHerb: {AutoResurrection:3},
			ConstraintDefenseBoost: {},
			SecretRemedyCompound: {},
			ChaseHerb: {LingeringScent:3},
			DelayHerb: {LingeringScent:3},
			HPBoost: {},
			AutoResurrection: {},
			LingeringScent: {}
		},
		specB:
		{
			HerbMastery: {},
			CureHerb: {LineHerb:5},
			RefreshHerb: {ResurrectionHerb:3},
			PoisonSmoke: {SmokeRot:2},
			DarkSmoke: {SmokeRot:2},
			LineHerb: {},
			ResurrectionHerb: {},
			Antibody: {ParalyzeSmoke:3,BunglingSmoke:3},
			MedicinalKnowledge: {},
			SmokeRot: {SmokeSolid:5,SmokeSpark:5},
			SmokeBoost: {},
			ConstraintAttackBoost: {},
			ParalyzeSmoke: {SmokeBomb:3},
			BunglingSmoke: {SmokeBomb:3},
			SmokeSolid: {PersistingScent:3,PreemptiveSmoke:3},
			SmokeSpark: {PersistingScent:3,PreemptiveSmoke:3},
			TPBoost: {},
			SmokeBomb: {},
			PersistingScent: {},
			PreemptiveSmoke: {}
		}
	}
}