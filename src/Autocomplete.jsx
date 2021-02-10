import React, { useEffect, useState, useRef } from "react";
import {
  customStyles,
  StyledButton,
  StyledInput,
  StyledMenu,
  StyledItem
} from "./Autocomplete.styles";
import "./styles.css";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

function ArrowIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={16}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
      transform={isOpen ? "rotate(180)" : undefined}
    >
      <path d="M1,6 L10,15 L19,6" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={12}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
    >
      <path d="M1,1 L19,19" />
      <path d="M19,1 L1,19" />
    </svg>
  );
}

const Autocomplete = () => {
  const ref = useRef();

  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  const clearSelection = () => {
    setDisplay(false);
    setSearch("");
  };

  useOnClickOutside(ref, () => setDisplay(false));

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`).then((data) =>
      data.json().then(({ results }) => {
        setOptions(results);
      })
    );
  }, []);

  const onOptionsSelect = (selection) => {
    setSearch(selection);
    setDisplay(false);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);

    if (!display) {
      setDisplay(true);
    }
  };

  const handleEsc = ({ keyCode }) => {
    if (display && keyCode === 27) {
      setDisplay(false);
    }
  };

  return (
    <div ref={ref} {...customStyles({ width: 250, margin: "auto" })}>
      <div {...customStyles({ position: "relative" })}>
        <StyledInput
          id="auto"
          onClick={() => setDisplay(!display)}
          onChange={handleChange}
          onKeyUp={handleEsc}
          value={search}
          placeholder="Type to search"
        />
        {search ? (
          <StyledButton onClick={clearSelection}>
            <XIcon />
          </StyledButton>
        ) : (
          <StyledButton onClick={() => setDisplay(!display)}>
            <ArrowIcon isOpen={display} />
          </StyledButton>
        )}
      </div>
      <div {...customStyles({ position: "relative" })}>
        {display && (
          <StyledMenu isOpen={display}>
            {options
              .filter(({ name }) => name.includes(search.toLowerCase()))
              .map((value) => {
                return (
                  <StyledItem
                    key={value.name}
                    onClick={() => onOptionsSelect(value.name)}
                    tabIndex="0"
                  >
                    <span>{value.name}</span>
                  </StyledItem>
                );
              })}
          </StyledMenu>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
