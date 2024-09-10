import Hero from '../assets/illustration-hero.svg';
import PaymentButton from './buttonPaymenth';
import CancelButton from './buttonCancel';
import AnnualPlan from './Anual';
import './cardComponent.css';


function cardComponent() {
    return (
        <>
          <div className="card-container">
            <div className="card">
              <img className="card-image" src={Hero}/>
              <div className="card-body">
                <h2 className="card-title">Order Summary</h2>
                  <p className="card-text">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                    <div className="plan-details">
                      <AnnualPlan />
                      <br />
                      <div className="action-buttons">
                      <PaymentButton />
                      <CancelButton />
                      </div>
                      </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default cardComponent;

