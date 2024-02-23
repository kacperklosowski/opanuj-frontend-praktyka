import type {OperationButtonProps} from './types.ts';

export default function OperationButton({ label, onClick }: OperationButtonProps) {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
