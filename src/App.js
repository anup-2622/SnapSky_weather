
import './App.css';
import Inputs from './components/Inputs';
import TimeLocation from './components/TimeLocation';
import TopButton from './components/TopButton';

function App() {
  return (
    <div className="mx-auto  max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-600 to-blue-600 h-fit shadow-xl shadow-gray-400">
     <TopButton/>
     <Inputs/>
     <TimeLocation/>
    </div>
  );
}

export default App;
