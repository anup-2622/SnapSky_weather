
import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TempDetails from './components/TempDetails';
import TimeLocation from './components/TimeLocation';
import TopButton from './components/TopButton';
import getWeatherData from './services/weatherServices';
import getFormattedWeatherData from './services/weatherServices';

function App() {
  const fetchWeather = async()=>{
     const data = await getFormattedWeatherData({q:'delhi'});
     console.log(data);
    
  }
  fetchWeather();
  return (
    <div className="mx-auto  max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-600 to-blue-600 h-fit shadow-xl shadow-gray-400">
     <TopButton/>
     <Inputs/>
     <TimeLocation/>
     <TempDetails/>
     <Forecast title={'Horly Forecast'}/>
     <Forecast title={'Daily Forecast'}/>
    </div>
  );
}

export default App;
