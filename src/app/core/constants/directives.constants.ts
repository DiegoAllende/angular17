import { CharacterTypes } from "../models/directives.models";

export const INPUT_PATTERNS = [
  {
    type: CharacterTypes.ALPHA,
    pattern: /[a-zA-Z]/,
  },
  {
    type: CharacterTypes.NUMERIC,
    pattern: /[0-9]/,
  },
  {
    type: CharacterTypes.ALPHA_NUMERIC,
    pattern: /[a-zA-Z0-9]/,
  },
  {
    type: CharacterTypes.ALPHA_NUMERIC_DASH,
    pattern: /[a-zA-Z0-9-]/,
  },
  {
    type: CharacterTypes.ALPHA_NUMERIC_SPECIAL,
    pattern: /[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
  },
  {
    type: CharacterTypes.ALPHA_SPECIAL,
    pattern: /[a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
  },
];

export const ALLOWED_KEYS = [
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'Backspace',
  'Del',
  'Delete',
  'End',
  'Enter',
  'Home',
  'Tab',
];

export const CHARACTER_TYPES = {
  ALPHA: CharacterTypes.ALPHA,
  ALPHA_SPECIAL: CharacterTypes.ALPHA_SPECIAL,
  ALPHA_NUMERIC: CharacterTypes.ALPHA_NUMERIC,
  ALPHA_NUMERIC_DASH: CharacterTypes.ALPHA_NUMERIC_DASH,
  ALPHA_NUMERIC_SPECIAL: CharacterTypes.ALPHA_NUMERIC_SPECIAL,
  NUMERIC: CharacterTypes.NUMERIC,
};
