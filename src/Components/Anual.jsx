import './Anual.css';
import Music from '../assets/icon-music.svg';
function App() {
    return (
      <div className="annual-plan">
        <div className="icon-container">
        <img className="card-image" src={Music}/>
        </div>
        <div className="text-container">
                <div className="annual-title">
                    <p className="annual">Annual Plan</p>
                </div>
                <div className="annual-price">
                    <p className="annual">$59.99/year</p>
                </div>
            </div>
            <div className="button-container">
                <button className="change-button">Change</button>
            </div>
      </div>
    );
}

export default App;
