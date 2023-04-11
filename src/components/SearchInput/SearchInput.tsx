import React, { ChangeEventHandler, MouseEvent, memo } from 'react';
import './SearchInput.css';
import { SearchInputProps } from './SearchInput.types';

function SearchInputMemo({ onChange, value, onReset, disabled }: SearchInputProps) {
  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => onChange(evt.target.value);

  const onResetBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (onReset) onReset();
  };

  return (
    <div className="search-panel">
      <input
        disabled={disabled}
        className="form-control search-input"
        placeholder="search"
        onChange={onSearchInputChange}
        value={value}
      />
      <button disabled={disabled} className="close" onClick={onResetBtnClick}>
        <i className="fa fa-close"></i>
      </button>
    </div>
  );
}
export const SearchInput = memo(SearchInputMemo);
