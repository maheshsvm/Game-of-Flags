import nations from './Nations'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import './App.css';
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [options, setOptions] = useState([0, 0, 0, 0]);
  const [correct, setCorrect] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState({ "user": 0, "total": 0 });
  const [buttonDisabled, setButtonDisabled] = useState(false);



  // creating new game
  const createNextGame = () => {
    setButtonDisabled(false);
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(Math.floor(Math.random() * nations.length));
    }
    setOptions(arr);

    let correctOption = Math.floor(Math.random() * 4)
    setCorrect(correctOption);
  }

  useEffect(() => {
    createNextGame();
    // eslint-disable-next-line
  }, []);



  // declaring the result
  const handleAnswerClick = (e) => {
    setSelected(+(e.target.id));
  }
  const declareResult = () => {
    if (selected === correct) {
      setScore({
        "user": score.user + 1,
        "total": score.total + 1
      })
    }
    else {
      setScore({
        "user": score.user,
        "total": score.total + 1
      })
    }
  }

  useEffect(() => {
    if (selected === null) return;
    setButtonDisabled(true)
    declareResult();
    setTimeout(() => {
      setSelected(null)
      createNextGame();
    }, 5000);
    // eslint-disable-next-line
  }, [selected]);
  return (
    <>
      <Navbar />

      <div className="App m-auto flex justify-center gap-5 flex-col py-10 bg-purple-950 text-white min-h-[90vh] md:flex-row">
        <div className="container flex justify-center items-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg overflow-hidden">

              <span className={` flag fi fi-${nations[options[correct]]['alpha-2'].toLowerCase()}`}></span>
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Guess The country</h2>
            <div className="grid grid-cols-2 gap-0 space-x-2">
              {
                options && options.map((idx, i) => {
                  return <button key={i} disabled={buttonDisabled} id={`${i}`} className=" justify-center flex items-center mx-auto mt-6 text-white bg-indigo-800 border-0 py-2 px-5 focus:outline-none hover:bg-red-600 transtion-all ease-in-out duration-200 rounded hover:transition-all" onClick={(event) => handleAnswerClick(event)}>{nations[idx].name}</button>
                })
              }

            </div>
          </div>
        </div>

        <div className="container flex flex-col justify-center items-center">
        <p hidden={!buttonDisabled} className="leading-relaxed text-base my-5 text-red-400"> *** Next Game in few Seconds ***</p>
          <div className=" xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              </div>
              {
                selected == null ? '' : <div className='container'>
                  <h2 className="text-lg text-red-500 font-medium title-font mb-2">Your Answer: <span className='text-green-500'>{nations[options[selected]]['name']} </span></h2>
                  <h2 className="text-lg text-red-500 font-medium title-font mb-2">Correct Answer: <span className='text-green-500'>{nations[options[correct]]['name']} </span></h2></div>
              }
              <p className="leading-relaxed text-base">Your Score : {score.user}</p>
              <p className="leading-relaxed text-base">Total Score : {score.total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
