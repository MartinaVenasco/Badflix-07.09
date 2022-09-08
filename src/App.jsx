import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import "./App.scss";
import { useState, useRef } from "react";

function App() {
  const [inputValue, setInputValue] = useState("324668");
  const [isRendered, setRendered] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);
  const TopRated = useRef(null);
  const UpComing = useRef(null);
  const ScrollTop = useRef(null);
  const InputRef = useRef(null);

  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };
  console.log(inputValue);



  return (
    <div className="App">
      <div className="topContent" ref={ScrollTop}>
        {" "}
       
        <Navbar TopRated={TopRated} UpComing={UpComing} InputRef={InputRef}/>
      </div>

      <div className="Main_section">
        <MainSection modalVisibility={onHandleModal} ScrollTop={ScrollTop} UpComing={UpComing} TopRated={TopRated} />
      </div>
      <div className="inputSection" inputref={InputRef} ref={InputRef}>
      <MainInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        isRendered={isRendered}
        onFormsubmit={setRendered}
       
      /></div>
      <MovieEntity
        movieID={inputValue}
        setInputValue={setInputValue}
        isRendered={isRendered}
        ScrollTop={ScrollTop}
      />
      <Modal
        data={modalData}
        isVisibile={isModalVisibile}
        onModalClick={setModalVisibility}
      />
    </div>
  );
}

export default App;
