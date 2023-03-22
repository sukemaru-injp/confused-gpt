import React, { useCallback } from 'react';
import styled from 'styled-components';
import { spacings } from '../styles';

type Props<T extends string | number> = {
  defaultValue?: T;
  options: ReadonlyArray<{ label: string; value: T }>;
  onChange: (value: T) => void;
  width?: string;
};
export function Select<T extends string | number>({
  onChange,
  options,
  width = '100%',
}: Props<T>): JSX.Element {
  const handleChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>((e) => {
    const value = e.target.value;

    if (typeof options[0].value === 'number') {
      onChange(Number(value) as T);
    }

    onChange(value as T);
  }, []);

  return (
    <SelectStyle onChange={handleChange} width={width}>
      {options.map((o, idx) => {
        return (
          <option key={idx} value={o.value}>
            {o.label}
          </option>
        );
      })}
    </SelectStyle>
  );
}
const SelectStyle = styled.select<{ width: string }>`
  border-radius: 5px;
  padding: ${spacings.S};
  outline: none;
  border: none;
  appearance: none;
  cursor: pointer;
  width: ${({ width }) => width};
`;
