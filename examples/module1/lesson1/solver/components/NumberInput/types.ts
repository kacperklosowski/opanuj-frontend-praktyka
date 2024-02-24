import type {Dispatch, SetStateAction} from 'react';

export interface NumberInputProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}
