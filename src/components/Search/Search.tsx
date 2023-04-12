import { FC, useRef } from "react";

import { Button } from "components";

import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

import styles from "./Search.module.scss";

interface SearchProps {
  error?: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  search: HTMLInputElement;
};

export const Search: FC<SearchProps> = ({ onSubmit, error = false }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();

    const text = e.currentTarget.search.value;

    if (text.trim()) {
      onSubmit(text);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.Search} data-testid="Search" ref={searchRef}>
        <label htmlFor="search" className={styles.Label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.TextField}
          id="search"
          name="search"
          placeholder="Search GitHub username..."
          autoComplete="off"
        />
        {error && <div className={styles.Error}>No results</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
