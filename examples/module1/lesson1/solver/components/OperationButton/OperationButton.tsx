import clsx from 'clsx';
import type {OperationButtonProps} from './types.ts';

export default function OperationButton({ label, onClick, disabled=false }: OperationButtonProps) {
  const buttonClasses = clsx(
    'bg-blue-200 px-2 py-4 text-lg rounded-md disabled:opacity-50 disabled:cursor-not-allowed',
    {
      'hover:bg-blue-500 hover:text-white': !disabled
    }
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
