import { useEffect, useState } from "react";
import "./RockPaperScissor.css";
import ModalImage from "react-modal-image";
import Modal from "react-modal";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
//npm install @lottiefiles/dotlottie-react

function RockPaperScissor() {
  const [inc, setInc] = useState(0);
  const [sinc, setSinc] = useState(0);
  const [uc, setUC] = useState("");
  const [cc, setCC] = useState("");
  const [val, setVal] = useState([]);
  const [winner, setWinner] = useState("");
  const [youwin, setYouWin] = useState(0);
  const [compwin, setCompWin] = useState(0);
  const [yourImg, setYourImg] = useState("");
  const [compImg, setCompImg] = useState("");
  const [msg, setMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [handIcon, setHandIcon] = useState(false);
  // const [value, setValue] = useState(2);

  //   const rockImg = "./rock.png";
  //   const paperImg = "./paper.png";
  //   const scissorImg = "./scissor.png";

  const defImg = "./images/defaultRock.png";
  const rockImg = "./images/r1.png";
  const paperImg = "./images/p1.png";
  const scissorImg = "./images/s1.png";

  function handleOpt(op) {
    setVal(["rock", "paper", "scissor"]);
    setTimeout(() => {
      if (op === "rock") {
        setYourImg(defImg);
        setTimeout(() => {
          setYourImg(rockImg);
        }, 3000);
      }
      // if (op === "paper") setYourImg(paperImg);
      if (op === "paper") {
        setYourImg(defImg);
        setTimeout(() => {
          setYourImg(paperImg);
        }, 3000);
      }
      // if (op === "scissor") setYourImg(scissorImg);
      if (op === "scissor") {
        setYourImg(defImg);
        setTimeout(() => {
          setYourImg(scissorImg);
        }, 3000);
      }
      setUC(op);
      setInc((i) => i + 1);
    }, 500);
    setHandIcon(true);
  }
  useEffect(() => {
    if (val.length > 0) generateCompChoice(val);
  }, [uc, inc]);

  function generateCompChoice(val) {
    const ch = Math.trunc(Math.random() * 3);
    if (ch === 0) {
      //   setCC("");
      //   setCompImg("");
      //   setTimeout(() => {
      //     setCC(val[0]);
      //     setCompImg(rockImg);
      //   }, 1300);
      setCC(val[0]);
      setCompImg(defImg);
      // console.log("before setting comp choice as rock", rockImg);
      setTimeout(() => {
        setCompImg(rockImg);
      }, 3000);

      // console.log("after setting comp choice as rock", rockImg);
    }
    if (ch === 1) {
      //   setCC("");
      //   setCompImg("");
      //   setTimeout(() => {
      //     setCC(val[1]);
      //     setCompImg(paperImg);
      //   }, 1300);
      setCC(val[1]);
      setCompImg(defImg);
      // console.log("before setting comp choice as paper", paperImg);
      // setCompImg(paperImg);
      setTimeout(() => {
        setCompImg(paperImg);
      }, 3000);
      // console.log("after setting comp choice as paper", paperImg);
    }
    if (ch === 2) {
      //   setCC("");
      //   setCompImg("");
      //   setTimeout(() => {
      //     setCC(val[2]);
      //     setCompImg(scissorImg);
      //   }, 1300);
      setCC(val[2]);
      setCompImg(defImg);
      // console.log("before setting comp choice as scissor", scissorImg);

      // setCompImg(scissorImg);
      setTimeout(() => {
        setCompImg(scissorImg);
      }, 3000);
      // console.log("after setting comp choice as scissor", scissorImg);
    }
    setSinc((si) => si + 1);
  }

  useEffect(() => {
    // getWinner(uc, cc);
    setWinner("");
    setTimeout(() => {
      getWinner(uc, cc);
    }, 3000);
  }, [cc, sinc]);

  function getWinner(usr, cmp) {
    if (
      (cmp == "rock" && usr == "paper") ||
      (cmp == "paper" && usr == "scissor") ||
      (cmp == "scissor" && usr == "rock")
    ) {
      setWinner("You");
      setYouWin((w) => w + 1);
    }
    if (
      (cmp == "paper" && usr == "rock") ||
      (cmp == "scissor" && usr == "paper") ||
      (cmp == "rock" && usr == "scissor")
    ) {
      setWinner("Computer");
      setCompWin((w) => w + 1);
    }
    if (
      (cmp == "rock" && usr == "rock") ||
      (cmp == "paper" && usr == "paper") ||
      (cmp == "scissor" && usr == "scissor")
    ) {
      setWinner("draw");
      // setCompWin((w) => w + 1);
    }
  }

  // here charAt 0 picks first letter and toUpperCase makes it capital and then it is concatenated with the
  // sliced version from index 1(i.e. remaining words) which makes full word again.
  function Capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const resetGame = () => {
    setYouWin(0);
    setCompWin(0);
    setWinner("");
    setMsg("");
    setCC("");
    setCC("");
  };

  //REACT MODEL PACKAGE https://www.npmjs.com/package/react-modal#demos
  // Open modal when user or computer wins 3 points
  useEffect(() => {
    if (youwin === 3 && compwin < 3 && !msg) {
      // if (youwin === value && (youwin=youwin+1)) {
      setModalImg(
        "https://lottie.host/09be9720-a071-48ac-9b30-222e14f345bd/vGGC0PZVkN.lottie"
      );
      // document.body.style.backgroundColor = "black";
      setMsg(`You won 3 times. You made the chimp sad.`);
      setTimeout(() => setIsModalOpen(true), 1000);
    } else if (compwin === 3 && youwin < 3 && !msg) {
      // } else if (compwin === value && (compwin=compwin+1)) {
      setModalImg(
        "https://lottie.host/2fb57250-30e1-48fd-9634-a679cd87e7ad/iH43cSj0j2.lottie"
      );
      // document.body.style.backgroundColor = "black";
      setMsg(`Chimp won 3 times. Chimp is cool.`);
      setTimeout(() => setIsModalOpen(true), 1000);
    }
  }, [youwin, compwin]);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Game Over"
        // className="modalCard"
        style={{
          content: {
            width: "60%",
            height: "fit-content",
            margin: "auto",
            // textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            padding: "0px 0px 40px 0px",
            // backgroundColor: "#444444",
            borderRadius: "10px",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <img
            src={modalImg}
            alt="Game result"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          /> */}

          <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
            <DotLottieReact
              src={modalImg}
              loop
              autoplay
              // speed="1"
              // style="width: 300px; height: 300px"
            />
          </div>
          <p className="modal-msg">{msg}</p>
          <button className="close-btn" onClick={closeModal}>
            Continue
          </button>
        </div>
      </Modal>
      {cc && uc ? (
        <div className="main-container">
          <div className="whole-container">
            <div className="win-count">
              <p className="you-count">You: {youwin}</p>
              <p className="comp-count">Chimp: {compwin}</p>
            </div>
            <div className="interface-card">
              {cc ? (
                <div className="chosen-info">
                  {yourImg ? (
                    <div className="user-chosen">
                      <div className="rotate-img">
                        <img
                          className={`image-user-css ${
                            !winner ? "animate-user-img" : ""
                          }`}
                          src={yourImg}
                          alt="Image"
                        />
                      </div>
                      <p className="img-info-text">
                        {yourImg === defImg ? (
                          "Chimp"
                        ) : (
                          <span>Chimp: {Capitalize(uc)}</span>
                        )}
                      </p>{" "}
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="vs-div">
                    <p className="vs-text">Vs</p>
                  </div>
                  {compImg ? (
                    <div className="comp-chosen">
                      <div className="rotate-comp-img">
                        <img
                          className={`image-comp-css ${
                            !winner ? "animate-comp-img" : ""
                          }`}
                          src={compImg}
                          alt="Image"
                        />
                      </div>
                      {console.log("comp image is", compImg)}
                      {/* <p>{!winner ? "Wait" : Capitalize(cc)}</p>{" "} */}
                      <p className="img-info-text">
                        {compImg === defImg ? (
                          "You"
                        ) : (
                          <span>You: {Capitalize(cc)}</span>
                        )}
                      </p>{" "}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="result-card">
            {winner ? (
              winner === "draw" ? (
                <div className="status-msg">
                  <p className="main-text">Draw!</p>
                  <p className="info-text">You both chose {Capitalize(cc)}.</p>
                </div>
              ) : winner === "You" ? (
                <div className="status-msg">
                  <p className="main-text">You won!</p>
                  <p className="info-text">
                    {Capitalize(uc)} beats {Capitalize(cc)}.
                  </p>
                </div>
              ) : (
                <div className="status-msg">
                  <p className="main-text">Chimp won.</p>
                  <p className="info-text">
                    {Capitalize(cc)} beats {Capitalize(uc)}.
                  </p>
                  {/* {setTimeout(() => {
                    <>
                      <p className="main-text">Chimp won.</p>
                      <p className="info-text">
                        {Capitalize(cc)} wins over {Capitalize(uc)}.
                      </p>
                    </>;
                  }, 800)} */}
                </div>
              )
            ) : (
              <p></p>
            )}
          </div>
          {/* <div
            style={
              {
                // maxWidth: "100%",
                // maxHeight: "100%",
                // backgroundColor: "#969494",
              }
            }
          >
            <DotLottieReact
              // src="https://lottie.host/d7e0fd61-8ef4-42eb-99d6-918425ba34ca/7DiBwz0EQJ.lottie"
              src="https://lottie.host/c533c642-055a-49a6-99d9-6d7f8091862e/Bcqdo0ML2j.lottie"
              loop
              autoplay
              // speed="1"
              style={{
                width: "300px",
                height: "100px",
                // backgroundColor: "#8a3e00",
              }}
            />
          </div> */}
        </div>
      ) : (
        <div
          style={{
            height: "76.2vh",
            display: "flex",
            flexDirection: "column",
            // gap: "-10px",
            // justifyContent: "center",
            // alignContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <DotLottieReact
            src="https://lottie.host/dd42bf59-394f-47b7-9c23-3480ab773d61/KNdYoDMdUn.lottie"
            loop
            autoplay
            style={{
              width: "600px",
              height: "fit-content",
              // backgroundColor: "#8a3e00",
            }}
          />
          <h3 className="welcome-text">
            Welcome to Chimp's Rock, Paper, Scissor!
          </h3>
          <p className="welcome-info">
            Rock beats Scissors, Scissors beat Paper, and Paper beats Rock!
            {/* {console.log("the image of rock is", rockImg)}
            {console.log("the image of paper is", paperImg)}
            {console.log("the image of scissor is", scissorImg)}
            {console.log("the image of computer chosen is", compImg)}
            {console.log("the image you chose is", yourImg)} */}
          </p>
        </div>
      )}
      <div className="all-btns">
        <button className="btn-icon" onClick={() => handleOpt("rock")}>
          {/* ✊🏻 */}
          Rock
        </button>
        <button className="btn-icon" onClick={() => handleOpt("paper")}>
          {/* ✋🏻 */}
          Paper
        </button>
        <button className="btn-icon" onClick={() => handleOpt("scissor")}>
          {/* ✌🏻 */} Scissor
        </button>
        {/* <button className="btn-icon" onClick={() => setImgDisp(true)}>
        View model
      </button> */}
        <button className="btn-play-again" onClick={resetGame}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default RockPaperScissor;
