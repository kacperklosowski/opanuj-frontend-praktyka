import {useState} from 'react';
import NumberInput from './components/NumberInput';
import OperationButton from './components/OperationButton';
import {sum, subtract, multiply, divide} from './utils/math.ts';
import {getErrorMessage} from './utils/error.ts';
import {Operation} from './enums.ts';
import type {MathOperation} from './utils/math.ts';

export default function Calculator()  {
  const [operandA, setOperandA] = useState<number>(0);
  const [operandB, setOperandB] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const performCalculation = (operationFn: MathOperation) => {
    try {
      setErrorMessage('');
      const result = operationFn(operandA, operandB);
      setResult(result);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <NumberInput value={operandA} setValue={setOperandA} />
        <NumberInput value={operandB} setValue={setOperandB} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <OperationButton label={Operation.SUM} onClick={() => performCalculation(sum)} />
        <OperationButton label={Operation.SUBTRACT} onClick={() => performCalculation(subtract)} />
        <OperationButton label={Operation.MULTIPLY} onClick={() => performCalculation(multiply)} />
        <OperationButton label={Operation.DIVIDE} onClick={() => performCalculation(divide)} />
      </div>
      {errorMessage ? <span className="text-red-500 font-bold">{errorMessage}</span> : `Result: ${result}`}
    </div>
  );
};
