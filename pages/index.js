import { ReactDOM, useState } from "react";
const Square = <div className="w-10 h-10 rounded-lg bg-gray-200 shadow-lg mt-4"></div>;
const SquareBlue = <div className="w-10 h-10 rounded-lg bg-blue-200 shadow-lg mt-4"></div>;

const Home = () => {

  // A state of component on the right side
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const addSquare = () => {
    setState({
      squares: state.squares.concat(Square),
    });
  };

  const addSquareBlue = () => {
    setState({
      squares: state.squares.concat(SquareBlue),
    });
  };


  return (
    <div className="flex flex-col md:justify-between md:flex-row mb-4">
      <div className="md:w-[30%] h-screen mb-6">
        {/* This is a container to drag and drop the components, have a shadow to the right. */}
        <div className="h-full rounded-r-xl shadow-md">
          <div className="p-4 flex flex-col">
            <h1 className="text-2xl font-bold">Drag and Drop Components</h1>
            <p className="text-gray-700">
              Drag and drop components from the left to the right.
            </p>
            <button
              className="w-10 h-10 rounded-lg bg-gray-200 shadow-lg mt-4"
              onClick={() => {
                // Add a square to the right screen.
                addSquare();
              }}
            >
            </button>
            <button
              className="w-10 h-10 rounded-lg bg-blue-200 shadow-lg mt-4"
              onClick={() => {
                // Add a square to the right screen.
                addSquareBlue();
              }}
            >
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-[70%] px-10">
        {/* This is the container for the right screen. */}
        <div className="h-full rounded-l-xl shadow-md" id="right">
          {
            state.squares.map((square, index) => {
              return (
                <div key={index}>
                  {square}
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;