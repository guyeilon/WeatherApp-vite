export interface CityData {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: Country;
  AdministrativeArea: Country;
}

interface Country {
  ID: string;
  LocalizedName: string;
}

export type HourlyForecast = {
  DateTime: Date;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  IsDaylight: boolean;
  Temperature: Values;
  RealFeelTemperature: Values;
  RealFeelTemperatureShade: Values;
  WetBulbTemperature: Values;
  DewPoint: Values;
  Wind: WindValues;
  WindGust: WindGust;
  RelativeHumidity: number;
  IndoorRelativeHumidity: number;
  Visibility: Values;
  Ceiling: Values;
  UVIndex: number;
  UVIndexText: string;
  PrecipitationProbability: number;
  ThunderstormProbability: number;
  RainProbability: number;
  SnowProbability: number;
  IceProbability: number;
  TotalLiquid: Values;
  Rain: Values;
  Snow: Values;
  Ice: Values;
  CloudCover: number;
  Evapotranspiration: Values;
  SolarIrradiance: Values;
};

interface Values {
  Value: number;
  Unit: string;
  UnitType: number;
  Phrase?: string;
}

interface WindValues {
  Speed: Values;
  Direction: Direction;
}

interface Direction {
  Degrees: number;
  Localized: string;
  English: string;
}
interface WindGust {
  Speed: Values;
}

export interface DailyForecasts {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}

interface DailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: Temperature;
  Day: Day;
  Night: Night;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

interface Night {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}

interface Day {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType?: string;
  PrecipitationIntensity?: string;
}

interface Temperature {
  Minimum: TempValues;
  Maximum: TempValues;
}

interface TempValues {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface Headline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}

export interface PositionData {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: Region;
  Country: Region;
  AdministrativeArea: AdministrativeArea;
  TimeZone: TimeZone;
  GeoPosition: GeoPosition;
  IsAlias: boolean;
  SupplementalAdminAreas: any[];
  DataSets: string[];
}

interface GeoPosition {
  Latitude: number;
  Longitude: number;
  Elevation: Elevation;
}

interface Elevation {
  Metric: Metric;
  Imperial: Metric;
}

interface Metric {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface TimeZone {
  Code: string;
  Name: string;
  GmtOffset: number;
  IsDaylightSaving: boolean;
  NextOffsetChange?: any;
}

interface AdministrativeArea {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
  Level: number;
  LocalizedType: string;
  EnglishType: string;
  CountryID: string;
}

interface Region {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}
