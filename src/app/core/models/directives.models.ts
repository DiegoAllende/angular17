export const enum CharacterTypes {
  ALPHA = 'ALPHA',
  ALPHA_NUMERIC = 'ALPHA_NUMERIC',
  ALPHA_NUMERIC_DASH = 'ALPHA_NUMERIC_DASH',
  ALPHA_NUMERIC_SPECIAL = 'ALPHA_NUMERIC_SPECIAL',
  ALPHA_SPECIAL = 'ALPHA_SPECIAL',
  NUMERIC = 'NUMERIC',
}

export type CharacterType =
  | CharacterTypes.ALPHA
  | CharacterTypes.ALPHA_NUMERIC
  | CharacterTypes.ALPHA_NUMERIC_DASH
  | CharacterTypes.ALPHA_NUMERIC_SPECIAL
  | CharacterTypes.ALPHA_SPECIAL
  | CharacterTypes.NUMERIC;
