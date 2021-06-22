export interface IdentityData {
  name: string;
  email: string;
}

export interface DetailsData {
  age: string;
  gender: string;
}

export interface FavoritesData {
  book: string;
  colors: string[];
}

export interface SurveyData extends IdentityData, DetailsData, FavoritesData {}
