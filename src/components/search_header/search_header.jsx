import React, { useRef, memo } from "react";
import styles from "./search_header.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          style={{ width: "40px" }}
          className={styles.img}
          src="/images/youtube.png"
        />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <BiSearchAlt2 className={styles.buttonImg} />
      </button>
    </header>
  );
});

export default SearchHeader;
