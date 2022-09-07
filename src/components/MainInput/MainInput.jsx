import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import "./index.scss";

const MainInput = ({ inputValue, setInputValue, isRendered, onFormsubmit }) => {
  // const inputRef = useRef(null);
  const [isInputVisibile, setInputVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 2100
        ? setInputVisibility(true)
        : setInputVisibility(false)
    );
  }, []);

  // console.log(inputRef.current.value)
  // inputRef.current.focus()
  // }, []);
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const onHandleSubmit = (e) => {e.preventDefault(); onFormsubmit(!isRendered);}

  const onHandleInput = (e) => setInputValue(e.target.value);

  // console.log(inputValue);

  return (
    <form className="MainInput"  onSubmit={onHandleSubmit}>
      {" "}
      {isInputVisibile && (
        <>
        <h1 className="search__title"> Search your movie</h1>
          <input
            value={inputValue}
            onChange={onHandleInput}
            maxLength="6"
            placeholder="search by ID: 324688"
            type="text"
            
          />
          <button type="submit">
            {" "}
            <RiSearchLine size={16} />
          </button>
        </>
      )}
    </form>
  );
};

export default MainInput;
