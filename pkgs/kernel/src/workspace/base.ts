export const baseUUID = "4d946fd0-63bf-4f61-b7e8-3d67faec93be";
export const baseContents = `
type Angle = Real(units="rad", displayUnits="deg")

type SolidAngle = Real(units="sr")

type Length = Real(units="m")

type PathLength = Length

type Position = Length

type Distance = Length(min=0)

type Breadth = Length(min=0)

type Height = Length(min=0)

type Thickness = Length(min=0)

type Radius = Length(min=0)

type Diameter = Length(min=0)

type Area = Real(units="m2")

type Volume = Real(units="m3")

type Time = Real(units="s")

type Duration = Time

type AngularVelocity = Real(units="rad/s")

type AngularAcceleration = Real(units="rad/s2")

type Velocity = Real(units="m/s")

type Acceleration = Real(units="m/s2")

type Period = Real(units="s")

type Frequency = Real(units="Hz")

type AngularFrequency = Real(units="rad/s")

type Wavelength = Real(units="m")

type Wavelenght = Wavelength

type WaveNumber = Real(units="m-1")

type AngularWaveNumber = Real(units="rad/m")

type AmplitudeLevelDifference = Real(units="dB")

type PowerLevelDifference = Real(units="dB")

type DampingCoefficient = Real(units="s-1")

type LogarithmicDecrement = Real(units="1/S")

type AttenuationCoefficient = Real(units="m-1")

type PhaseCoefficient = Real(units="m-1")

type PropagationCoefficient = Real(units="m-1")

type Damping = DampingCoefficient

type Mass = Real(units="kg", min=0)

type Density = Real(units="kg/m3", displayUnits="g/cm3", min=0)

type RelativeDensity = Real(units="1", min=0)

type SpecificVolume = Real(units="m3/kg", min=0)

type LinearDensity = Real(units="kg/m", min=0)

type SurfaceDensity = Real(units="kg/m2", min=0)

type Momentum = Real(units="kg.m/s")

type Impulse = Real(units="N.s")

type AngularMomentum = Real(units="kg.m2/s")

type AngularImpulse = Real(units="N.m.s")

type MomentOfInertia = Real(units="kg.m2")

type Inertia = MomentOfInertia

type Force = Real(units="N")

type TranslationalSpringConstant = Real(units="N/m")

type TranslationalDampingConstant = Real(units="N.s/m")

type Weight = Force

type Torque = Real(units="N.m")

type ElectricalTorqueConstant = Real(units="N.m/A")

type MomentOfForce = Torque

type RotationalSpringConstant = Real(units="N.m/rad")

type RotationalDampingConstant = Real(units="N.m.s/rad")

type Pressure = Real(units="Pa", displayUnits="bar")

type AbsolutePressure = Pressure(min=0)

type BulkModulus = AbsolutePressure

type Stress = Real(units="Pa")

type NormalStress = Stress

type ShearStress = Stress

type Strain = Real(units="1")

type LinearStrain = Strain

type ShearStrain = Strain

type VolumeStrain = Real(units="1")

type PoissonNumber = Real(units="1")

type ModulusOfElasticity = Stress

type ShearModulus = Stress

type SecondMomentOfArea = Real(units="m4")

type SecondPolarMomentOfArea = SecondMomentOfArea

type SectionModulus = Real(units="m3")

type CoefficientOfFriction = Real(units="1")

type DynamicViscosity = Real(units="Pa.s", min=0)

type KinematicViscosity = Real(units="m2/s", min=0)

type SurfaceTension = Real(units="N/m")

type Work = Real(units="J")

type Energy = Real(units="J")

type EnergyDensity = Real(units="J/m3")

type PotentialEnergy = Energy

type KineticEnergy = Energy

type Power = Real(units="W")

type EnergyFlowRate = Power

type EnthalpyFlowRate = Real(units="W")

type Efficiency = Real(units="1", min=0)

type MassFlowRate = Real(units="kg/s")

type VolumeFlowRate = Real(units="m3/s")

type MomentumFlux = Real(units="N")

type AngularMomentumFlux = Real(units="N.m")

# Absolute temperature (use type TemperatureDifference for relative temperatures)
type ThermodynamicTemperature = Real(units="K", min=0, displayUnits="degC")

type Temp_K = ThermodynamicTemperature

type Temperature = ThermodynamicTemperature

type TemperatureDifference = Real(units="K")

type TemperatureSlope = Real(units="K/s")

type LinearTemperatureCoefficient = Real(units="1/K")

type QuadraticTemperatureCoefficient = Real(units="1/K2")

type LinearExpansionCoefficient = Real(units="1/K")

type CubicExpansionCoefficient = Real(units="1/K")

type RelativePressureCoefficient = Real(units="1/K")

type PressureCoefficient = Real(units="Pa/K")

type Compressibility = Real(units="1/Pa")

type IsothermalCompressibility = Compressibility

type IsentropicCompressibility = Compressibility

type Heat = Real(units="J")

type HeatFlowRate = Real(units="W")

type HeatFlux = Real(units="W/m2")

type DensityOfHeatFlowRate = Real(units="W/m2")

type ThermalConductivity = Real(units="W/(m.K)")

type CoefficientOfHeatTransfer = Real(units="W/(m2.K)")

type SurfaceCoefficientOfHeatTransfer = CoefficientOfHeatTransfer

type ThermalInsulance = Real(units="m2.K/W")

type ThermalResistance = Real(units="K/W")

type ThermalConductance = Real(units="W/K")

type ThermalDiffusivity = Real(units="m2/s")

type HeatCapacity = Real(units="J/K")

type SpecificHeatCapacity = Real(units="J/(kg.K)")

type SpecificHeatCapacityAtConstantPressure = SpecificHeatCapacity

type SpecificHeatCapacityAtConstantVolume = SpecificHeatCapacity

type SpecificHeatCapacityAtSaturation = SpecificHeatCapacity

type RatioOfSpecificHeatCapacities = Real(units="1")

type IsentropicExponent = Real(units="1")

type Entropy = Real(units="J/K")

type EntropyFlowRate = Real(units="J/(K.s)")

type SpecificEntropy = Real(units="J/(kg.K)")

type InternalEnergy = Heat

type Enthalpy = Heat

type HelmholtzFreeEnergy = Heat

type GibbsFreeEnergy = Heat

type SpecificEnergy = Real(units="J/kg")

type SpecificInternalEnergy = SpecificEnergy

type SpecificEnthalpy = SpecificEnergy

type SpecificHelmholtzFreeEnergy = SpecificEnergy

type SpecificGibbsFreeEnergy = SpecificEnergy

type MassieuFunction = Real(units="J/K")

type PlanckFunction = Real(units="J/K")

type DerDensityByEnthalpy = Real(units="kg.s2/m5")

type DerDensityByPressure = Real(units="s2/m2")

type DerDensityByTemperature = Real(units="kg/(m3.K)")

type DerEnthalpyByPressure = Real(units="J.m.s2/kg2")

type DerEnergyByDensity = Real(units="J.m3/kg")

type DerEnergyByPressure = Real(units="J.m.s2/kg")

type ElectricCurrent = Real(units="A")

type Current = ElectricCurrent

type CurrentSlope = Real(units="A/s")

type ElectricCharge = Real(units="C")

type Charge = ElectricCharge

type VolumeDensityOfCharge = Real(units="C/m3", min=0)

type SurfaceDensityOfCharge = Real(units="C/m2", min=0)

type ElectricFieldStrength = Real(units="V/m")

type ElectricPotential = Real(units="V")

type Voltage = ElectricPotential

type PotentialDifference = ElectricPotential

type ElectromotiveForce = ElectricPotential

type VoltageSlope = Real(units="V/s")

type ElectricFluxDensity = Real(units="C/m2")

type ElectricFlux = Real(units="C")

type Capacitance = Real(units="F", min=0)

type Permittivity = Real(units="F/m", min=0)

type PermittivityOfVacuum = Permittivity

type RelativePermittivity = Real(units="1")

type ElectricSusceptibility = Real(units="1")

type ElectricPolarization = Real(units="C/m2")

type Electrization = Real(units="V/m")

type ElectricDipoleMoment = Real(units="C.m")

type CurrentDensity = Real(units="A/m2")

type LinearCurrentDensity = Real(units="A/m")

type MagneticFieldStrength = Real(units="A/m")

type MagneticPotential = Real(units="A")

type MagneticPotentialDifference = Real(units="A")

type MagnetomotiveForce = Real(units="A")

type CurrentLinkage = Real(units="A")

type MagneticFluxDensity = Real(units="T")

type MagneticFlux = Real(units="Wb")

type MagneticVectorPotential = Real(units="Wb/m")

type Inductance = Real(units="H")

type SelfInductance = Inductance(min=0)

type MutualInductance = Inductance

type CouplingCoefficient = Real(units="1")

type LeakageCoefficient = Real(units="1")

type Permeability = Real(units="H/m")

type PermeabilityOfVacuum = Permeability

type RelativePermeability = Real(units="1")

type MagneticSusceptibility = Real(units="1")

type ElectromagneticMoment = Real(units="A.m2")

type MagneticDipoleMoment = Real(units="Wb.m")

type Magnetization = Real(units="A/m")

type MagneticPolarization = Real(units="T")

type ElectromagneticEnergyDensity = Real(units="J/m3")

type PoyntingVector = Real(units="W/m2")

type Resistance = Real(units="Ω")

type Resistivity = Real(units="Ω.m")

type Conductivity = Real(units="S/m")

type Reluctance = Real(units="H-1")

type Permeance = Real(units="H")

type PhaseDifference = Real(units="rad", displayUnits="deg")

type Impedance = Resistance

type ModulusOfImpedance = Resistance

type Reactance = Resistance

type QualityFactor = Real(units="1")

type LossAngle = Real(units="rad", displayUnits="deg")

type Conductance = Real(units="S")

type Admittance = Conductance

type ModulusOfAdmittance = Conductance

type Susceptance = Conductance

type InstantaneousPower = Real(units="W")

type ActivePower = Real(units="W")

type ApparentPower = Real(units="VA")

type ReactivePower = Real(units="var")

type PowerFactor = Real(units="1")

type Transconductance = Real(units="A/V2")

type InversePotential = Real(units="1/V")

type ElectricalForceConstant = Real(units="N/A")

type RadiantEnergy = Real(units="J")

type RadiantEnergyDensity = Real(units="J/m3")

type SpectralRadiantEnergyDensity = Real(units="J/m4")

type RadiantPower = Real(units="W")

type RadiantEnergyFluenceRate = Real(units="W/m2")

type RadiantIntensity = Real(units="W/sr")

type Radiance = Real(units="W/(sr.m2)")

type RadiantExtiance = Real(units="W/m2")

type Irradiance = Real(units="W/m2")

type Emissivity = Real(units="1")

type SpectralEmissivity = Real(units="1")

type DirectionalSpectralEmissivity = Real(units="1")

type LuminousIntensity = Real(units="cd")

type LuminousFlux = Real(units="lm")

type QuantityOfLight = Real(units="lm.s")

type Luminance = Real(units="cd/m2")

type LuminousExitance = Real(units="lm/m2")

type Illuminance = Real(units="lx")

type LightExposure = Real(units="lx.s")

type LuminousEfficacy = Real(units="lm/W")

type SpectralLuminousEfficacy = Real(units="lm/W")

type LuminousEfficiency = Real(units="1")

type SpectralLuminousEfficiency = Real(units="1")

type CIESpectralTristimulusValues = Real(units="1")

type ChromaticityCoordinates = Real(units="1")

type SpectralAbsorptionFactor = Real(units="1")

type SpectralReflectionFactor = Real(units="1")

type SpectralTransmissionFactor = Real(units="1")

type SpectralRadianceFactor = Real(units="1")

type LinearAttenuationCoefficient = Real(units="m-1")

type LinearAbsorptionCoefficient = Real(units="m-1")

type MolarAbsorptionCoefficient = Real(units="m2/mol")

type RefractiveIndex = Real(units="1")

type StaticPressure = Real(units="Pa", displayUnits="bar", min=0)

type SoundPressure = StaticPressure

type SoundParticleDisplacement = Real(units="m")

type SoundParticleVelocity = Real(units="m/s")

type SoundParticleAcceleration = Real(units="m/s2")

type VelocityOfSound = Real(units="m/s")

type SoundEnergyDensity = Real(units="J/m3")

type SoundPower = Real(units="W")

type SoundIntensity = Real(units="W/m2")

type AcousticImpedance = Real(units="Pa.s/m3")

type SpecificAcousticImpedance = Real(units="Pa.s/m")

type MechanicalImpedance = Real(units="N.s/m")

type SoundPressureLevel = Real(units="dB")

type SoundPowerLevel = Real(units="dB")

type DissipationCoefficient = Real(units="1")

type ReflectionCoefficient = Real(units="1")

type TransmissionCoefficient = Real(units="1")

type AcousticAbsorptionCoefficient = Real(units="1")

type SoundReductionIndex = Real(units="dB")

type EquivalentAbsorptionArea = Real(units="m2")

type ReverberationTime = Real(units="s")

type LoundnessLevel = Real(units="phon")

type Loundness = Real(units="sone")

type RelativeAtomicMass = Real(units="1")

type RelativeMolecularMass = Real(units="1")

type NumberOfMolecules = Real(units="1")

type AmountOfSubstance = Real(units="mol", min=0)

type MolarMass = Real(units="kg/mol", min=0)

type MolarVolume = Real(units="m3/mol", min=0)

type MolarInternalEnergy = Real(units="J/mol")

type MolarHeatCapacity = Real(units="J/(mol.K)")

type MolarEntropy = Real(units="J/(mol.K)")

type MolarFlowRate = Real(units="mol/s")

type NumberDensityOfMolecules = Real(units="m-3")

type MolecularConcentration = Real(units="m-3")

type MassConcentration = Real(units="kg/m3")

type MassFraction = Real(units="1")

type Concentration = Real(units="mol/m3")

type VolumeFraction = Real(units="1")

type MoleFraction = Real(units="1")

type ChemicalPotential = Real(units="J/mol")

type AbsoluteActivity = Real(units="1")

type PartialPressure = Real(units="Pa", displayUnits="bar", min=0)

type Fugacity = Real(units="Pa")

type StandardAbsoluteActivity = Real(units="1")

type ActivityCoefficient = Real(units="1")

type ActivityOfSolute = Real(units="1")

type ActivityCoefficientOfSolute = Real(units="1")

type StandardAbsoluteActivityOfSolute = Real(units="1")

type ActivityOfSolvent = Real(units="1")

type OsmoticCoefficientOfSolvent = Real(units="1")

type StandardAbsoluteActivityOfSolvent = Real(units="1")

type OsmoticPressure = Real(units="Pa", displayUnits="bar", min=0)

type StoichiometricNumber = Real(units="1")

type Affinity = Real(units="J/mol")

type MassOfMolecule = Real(units="kg")

type ElectricDipoleMomentOfMolecule = Real(units="C.m")

type ElectricPolarizabilityOfAMolecule = Real(units="C.m2/V")

type MicrocanonicalPartitionFunction = Real(units="1")

type CanonicalPartitionFunction = Real(units="1")

type GrandCanonicalPartitionFunction = Real(units="1")

type MolecularPartitionFunction = Real(units="1")

type StatisticalWeight = Real(units="1")

type MeanFreePath = Length

type DiffusionCoefficient = Real(units="m2/s")

type ThermalDiffusionRatio = Real(units="1")

type ThermalDiffusionFactor = Real(units="1")

type ThermalDiffusionCoefficient = Real(units="m2/s")

type ElementaryCharge = Real(units="C")

type ChargeNumberOfIon = Real(units="1")

type FaradayConstant = Real(units="C/mol")

type IonicStrength = Real(units="mol/kg")

type DegreeOfDissociation = Real(units="1")

type ElectrolyticConductivity = Real(units="S/m")

type MolarConductivity = Real(units="S.m2/mol")

type TransportNumberOfIonic = Real(units="1")

type ProtonNumber = Real(units="1")

type NeutronNumber = Real(units="1")

type NucleonNumber = Real(units="1")

type AtomicMassConstant = Real(units="kg")

type MassOfElectron = Real(units="kg")

type MassOfProton = Real(units="kg")

type MassOfNeutron = Real(units="kg")

type HartreeEnergy = Real(units="J")

type MagneticMomentOfParticle = Real(units="A.m2")

type BohrMagneton = MagneticMomentOfParticle

type NuclearMagneton = MagneticMomentOfParticle

type GyromagneticCoefficient = Real(units="A.m2/(J.s)")

type GFactorOfAtom = Real(units="1")

type GFactorOfNucleus = Real(units="1")

type LarmorAngularFrequency = Real(units="s-1")

type NuclearPrecessionAngularFrequency = Real(units="s-1")

type CyclotronAngularFrequency = Real(units="s-1")

type NuclearQuadrupoleMoment = Real(units="m2")

type NuclearRadius = Real(units="m")

type ElectronRadius = Real(units="m")

type ComptonWavelength = Real(units="m")

type MassExcess = Real(units="kg")

type MassDefect = Real(units="kg")

type RelativeMassExcess = Real(units="1")

type RelativeMassDefect = Real(units="1")

type PackingFraction = Real(units="1")

type BindingFraction = Real(units="1")

type MeanLife = Real(units="s")

type LevelWidth = Real(units="J")

type Activity = Real(units="Bq")

type SpecificActivity = Real(units="Bq/kg")

type DecayConstant = Real(units="s-1")

type HalfLife = Real(units="s")

type AlphaDisintegrationEnergy = Real(units="J")

type MaximumBetaParticleEnergy = Real(units="J")

type BetaDisintegrationEnergy = Real(units="J")

type ReactionEnergy = Real(units="J")

type ResonanceEnergy = Real(units="J")

type CrossSection = Real(units="m2")

type TotalCrossSection = Real(units="m2")

type AngularCrossSection = Real(units="m2/sr")

type SpectralCrossSection = Real(units="m2/J")

type SpectralAngularCrossSection = Real(units="m2/(sr.J)")

type MacroscopicCrossSection = Real(units="m-1")

type TotalMacroscopicCrossSection = Real(units="m-1")

type ParticleFluence = Real(units="m-2")

type ParticleFluenceRate = Real(units="s-1.m2")

type EnergyFluence = Real(units="J/m2")

type EnergyFluenceRate = Real(units="W/m2")

type CurrentDensityOfParticles = Real(units="m-2.s-1")

type MassAttenuationCoefficient = Real(units="m2/kg")

type MolarAttenuationCoefficient = Real(units="m2/mol")

type AtomicAttenuationCoefficient = Real(units="m2")

type HalfThickness = Real(units="m")

type TotalLinearStoppingPower = Real(units="J/m")

type TotalAtomicStoppingPower = Real(units="J.m2")

type TotalMassStoppingPower = Real(units="J.m2/kg")

type MeanLinearRange = Real(units="m")

type MeanMassRange = Real(units="kg/m2")

type LinearIonization = Real(units="m-1")

type TotalIonization = Real(units="1")

type Mobility = Real(units="m2/(V.s)")

type IonNumberDensity = Real(units="m-3")

type RecombinationCoefficient = Real(units="m3/s")

type NeutronNumberDensity = Real(units="m-3")

type NeutronSpeed = Real(units="m/s")

type NeutronFluenceRate = Real(units="s-1.m-2")

type TotalNeutronSourceDensity = Real(units="s-1.m-3")

type SlowingDownDensity = Real(units="s-1.m-3")

type ResonanceEscapeProbability = Real(units="1")

type Lethargy = Real(units="1")

type SlowingDownArea = Real(units="m2")

type DiffusionArea = Real(units="m2")

type MigrationArea = Real(units="m2")

type SlowingDownLength = Real(units="m")

type DiffusionLength = Length

type MigrationLength = Length

type NeutronYieldPerFission = Real(units="1")

type NeutronYieldPerAbsorption = Real(units="1")

type FastFissionFactor = Real(units="1")

type ThermalUtilizationFactor = Real(units="1")

type NonLeakageProbability = Real(units="1")

type Reactivity = Real(units="1")

type ReactorTimeConstant = Real(units="s")

type EnergyImparted = Real(units="J")

type MeanEnergyImparted = Real(units="J")

type SpecificEnergyImparted = Real(units="Gy")

type AbsorbedDose = Real(units="Gy")

type DoseEquivalent = Real(units="Sv")

type AbsorbedDoseRate = Real(units="Gy/s")

type LinearEnergyTransfer = Real(units="J/m")

type Kerma = Real(units="Gy")

type KermaRate = Real(units="Gy/s")

type MassEnergyTransferCoefficient = Real(units="m2/kg")

type Exposure = Real(units="C/kg")

type ExposureRate = Real(units="C/(kg.s)")

type ReynoldsNumber = Real(units="1")

type EulerNumber = Real(units="1")

type FroudeNumber = Real(units="1")

type GrashofNumber = Real(units="1")

type WeberNumber = Real(units="1")

type MachNumber = Real(units="1")

type KnudsenNumber = Real(units="1")

type StrouhalNumber = Real(units="1")

type FourierNumber = Real(units="1")

type PecletNumber = Real(units="1")

type RayleighNumber = Real(units="1")

type NusseltNumber = Real(units="1")

type BiotNumber = NusseltNumber

type StantonNumber = Real(units="1")

type FourierNumberOfMassTransfer = Real(units="1")

type PecletNumberOfMassTransfer = Real(units="1")

type GrashofNumberOfMassTransfer = Real(units="1")

type NusseltNumberOfMassTransfer = Real(units="1")

type StantonNumberOfMassTransfer = Real(units="1")

type PrandtlNumber = Real(units="1")

type SchmidtNumber = Real(units="1")

type LewisNumber = Real(units="1")

type MagneticReynoldsNumber = Real(units="1")

type AlfvenNumber = Real(units="1")

type HartmannNumber = Real(units="1")

type CowlingNumber = Real(units="1")

type BraggAngle = Angle

type OrderOfReflexion = Real(units="1")

type ShortRangeOrderParameter = Real(units="1")

type LongRangeOrderParameter = Real(units="1")

type DebyeWallerFactor = Real(units="1")

type CircularWaveNumber = Real(units="m-1")

type FermiCircularWaveNumber = Real(units="m-1")

type DebyeCircularWaveNumber = Real(units="m-1")

type DebyeCircularFrequency = Real(units="s-1")

type DebyeTemperature = ThermodynamicTemperature

type SpectralConcentration = Real(units="s/m3")

type GrueneisenParameter = Real(units="1")

type MadelungConstant = Real(units="1")

type DensityOfStates = Real(units="J-1/m-3")

type ResidualResistivity = Real(units="Ω.m")

type LorenzCoefficient = Real(units="V2/K2")

type HallCoefficient = Real(units="m3/C")

type ThermoelectromotiveForce = Real(units="V")

type SeebeckCoefficient = Real(units="V/K")

type PeltierCoefficient = Real(units="V")

type ThomsonCoefficient = Real(units="V/K")

type RichardsonConstant = Real(units="A/(m2.K2)")

type FermiEnergy = Real(units="eV")

type GapEnergy = Real(units="eV")

type DonorIonizationEnergy = Real(units="eV")

type AcceptorIonizationEnergy = Real(units="eV")

type FermiTemperature = ThermodynamicTemperature

type ElectronNumberDensity = Real(units="m-3")

type HoleNumberDensity = Real(units="m-3")

type IntrinsicNumberDensity = Real(units="m-3")

type DonorNumberDensity = Real(units="m-3")

type AcceptorNumberDensity = Real(units="m-3")

type EffectiveMass = Mass

type MobilityRatio = Real(units="1")

type RelaxationTime = Time

type CarrierLifeTime = Time

type ExchangeIntegral = Real(units="eV")

type CurieTemperature = ThermodynamicTemperature

type NeelTemperature = ThermodynamicTemperature

type LondonPenetrationDepth = Length

type CoherenceLength = Length

type LandauGinzburgParameter = Real(units="1")

type FluxiodQuantum = Real(units="Wb")

# This connector represents a real signal as an input to a component
connector RealInput = input Real metadata {
  "Dyad": {
    "icons": {
      "default": "dyad://Dyad/RealInput.svg"
    },
    "path": { "stroke": "blue" }
  }
}

# This connector represents a real signal as an output from a component
connector RealOutput = output Real metadata {
  "Dyad": {
    "icons": {
      "default": "dyad://Dyad/RealOutput.svg"
    },
    "path": { "stroke": "blue" }
  }
}

# This connector represents a boolean signal as an input to a component
connector BooleanInput = input Boolean metadata {
"Dyad": {
    "icons": {
      "default": "dyad://Dyad/BooleanInput.svg"
    },
    "path": { "stroke": "pink" }
  }
}

# This connector represents a boolean signal as an output from a component
connector BooleanOutput = output Boolean metadata {
"Dyad": {
    "icons": {
      "default": "dyad://Dyad/BooleanOutput.svg"
    },
    "path": { "stroke": "pink" }
  }
}
  
# This connector represents an electrical pin with voltage and current as the potential and flow variables, respectively.
connector Pin
  potential v::Voltage
  flow i::Current
metadata {
  "Dyad": {
    "labels": [
      { "label": "instance_name", "x": 0, "y": 750, "layer": "diagram" }
    ],
    "icons": {
      "default": "dyad://Dyad/PosElectricalPort.svg",
      "pos": "dyad://Dyad/PosElectricalPort.svg",
      "neg": "dyad://Dyad/NegElectricalPort.svg"
    },
    "path": { "stroke": "blue" }
  }
}
end

# This connector represents a thermal node with temperature and heat flow as the potential and flow variables, respectively.
connector Node
  potential T::Temperature
  flow Q::HeatFlowRate
metadata {
  "Dyad": {
    "labels": [
      { "label": "instance_name", "x": 0, "y": 750, "layer": "diagram" }
    ],
    "icons": {
      "default": "dyad://Dyad/NodeB.svg",
      "node_a": "dyad://Dyad/NodeA.svg",
      "node_b": "dyad://Dyad/NodeB.svg"
    },
    "path": { "stroke": "red" }
  }
}
end

# This connector represents a mechanical flange with position and force as the potential and flow variables, respectively.
connector Flange
  potential s::Position
  flow f::Force
metadata {
  "Dyad": {
    "labels": [
      { "label": "instance_name", "x": 0, "y": 750, "layer": "diagram" }
    ],
    "icons": {
      "default": "dyad://Dyad/FlangeA.svg",
      "flange_a": "dyad://Dyad/FlangeA.svg",
      "flange_b": "dyad://Dyad/FlangeB.svg"
    },
    "path": { "stroke": "#2a661f" }
  }
}
end

# This connector represents a rotational spline with angle and torque as the potential and flow variables, respectively.
connector Spline
  potential phi::Angle
  flow tau::Torque
metadata {
  "Dyad": {
    "labels": [
      { "label": "instance_name", "x": 0, "y": 750, "layer": "diagram" }
    ],
    "icons": {
      "default": "dyad://Dyad/HydraulicPortA.svg",
      "hydraulic_port_a": "dyad://Dyad/HydraulicPortA.svg",
      "hydraulic_port_b": "dyad://Dyad/HydraulicPortB.svg"
    },
    "path": { "stroke": "#aaa" }
  }
}
end

partial component EmptyComponent
end

# This is an analysis that performs a transient simulation of the specified \`model\`.
partial analysis TransientAnalysis
  extends Analysis
  parameter alg::String = "auto"
  parameter start::Time = 0
  parameter stop::Time
  parameter abstol::Real = 1e-6
  parameter reltol::Real = 1e-6
  parameter saveat::Real = 0
  parameter dtmax::Time = 0
  parameter IfLifting::Boolean = false

  model::Empty = EmptyComponent()
end`;

export const baseAssets: Record<string, string> = {
  "PosElectricalPort.svg": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000"
  shape-rendering="geometricPrecision" text-rendering="geometricPrecision" transform-origin="center center">
  <rect rx="0" ry="0" width="1000" height="1000" fill="blue" stroke="blue" stroke-width="3"
      vector-effect="non-scaling-stroke"></rect>
</svg>`,
  "NegElectricalPort.svg": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000"
  shape-rendering="geometricPrecision" text-rendering="geometricPrecision" transform-origin="center center">
  <rect rx="0" ry="0" width="1000" height="1000" fill="#d2dbed" stroke="blue" stroke-width="3"
      vector-effect="non-scaling-stroke"></rect>
</svg>`,
  "RealInput.svg": `<svg baseProfile="full" height="210" version="1.1" viewBox="0 0 210 210" width="210" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xlink="http://www.w3.org/1999/xlink"><defs /><polygon fill="rgb(0,0,127)" fill-opacity="1" points="5.0,5.0 205.0,105.0 5.0,205.0" stroke="rgb(0,0,127)" stroke-width="0.25mm" /><defs /></svg>`,
  "RealOutput.svg": `<svg baseProfile="full" height="210" version="1.1" viewBox="0 0 210 210" width="210" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xlink="http://www.w3.org/1999/xlink"><defs /><polygon fill="rgb(220,220,247)" fill-opacity="1" points="5.0,5.0 205.0,105.0 5.0,205.0" stroke="rgb(0,0,127)" stroke-width="0.25mm" /><defs /></svg>`,
  "BooleanInput.svg": `<svg baseProfile="full" height="210" version="1.1" viewBox="0 0 210 210" width="210" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xlink="http://www.w3.org/1999/xlink"><defs /><polygon fill="pink" fill-opacity="1" points="5.0,5.0 205.0,105.0 5.0,205.0" stroke="pink" stroke-width="0.25mm" /><defs /></svg>`,
  "BooleanOutput.svg": `<svg baseProfile="full" height="210" version="1.1" viewBox="0 0 210 210" width="210" xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xlink="http://www.w3.org/1999/xlink"><defs /><polygon fill="rgb(255,192,203)" fill-opacity="1" points="5.0,5.0 205.0,105.0 5.0,205.0" stroke="pink" stroke-width="0.25mm" /><defs /></svg>`,
  "NodeA.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  <path fill="red" d="M0 0h1000v1000H0z"/>
</svg>`,
  "NodeB.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  <path fill="white" stroke="red" stroke-width="29.016" d="M16.323 16.322h968.924v969.332H16.323Z"/>
</svg>`,
  "FlangeA.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  <path fill="#2a661f" d="M0 0h1000v1000H0z"/>
</svg>`,
  "FlangeB.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  <path fill="white" stroke="#2a661f" stroke-width="29.016" d="M16.323 16.322h968.924v969.332H16.323Z"/>
</svg>`,
  "HydraulicPortA.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  <circle cx="500" cy="500" r="500" fill="#00f"/>
</svg>`,
  "HydraulicPortB.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  <circle cx="500" cy="500" r="462.5" fill="white" stroke="blue" stroke-width="75"/>
</svg>`,
};
