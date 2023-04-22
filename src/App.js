import reaction from './images/icon-reaction.svg';
import memory from './images/icon-memory.svg';
import verbal from './images/icon-verbal.svg';
import visual from './images/icon-visual.svg';

function App() {
  return (
    <div className="result">
      <div className="result-score">
        <div className='result-container'>
          <div className="result-score-title">Your Result
          </div>
          <div className="result-score-value">
            <span className="result-score-value-number">76</span>
            <span className="result-score-value-percentage"> of 100</span>
          </div>
          <div className='result-title'> Great
          </div>
          <div className='result-description'>You scored higher than 65% of the people who have taken these tests
          </div>
        </div>
      </div>
      <div className="result-info">
        <div className='result-info-container '>
          <div className='result-info-title'>Summary</div>
          <div className='result-detail'>
            <div className='result-item-container reaction'>
              <div className='result-item'>
                <div className="item-title">
                  <img src={reaction} alt='reaction'/>
                  <div>Reaction
                  </div>
                </div> 
                <div className='colorblack'>80<span className='opacitylow' > / 100</span>
                </div>
              </div>
            </div>
            <div className='result-item-container memory'>
            <div className='result-item'>
                <div className="item-title">
                  <img src={memory} alt='reaction'/>
                  <div>Memory
                  </div>
                </div> 
                <div className='colorblack'>92<span className='opacitylow' > / 100</span>
                </div>
              </div>
            </div>
            <div className='result-item-container verbal'>
            <div className='result-item'>
                <div className="item-title">
                  <img src={verbal} alt='reaction'/>
                  <div>Verbal
                  </div>
                </div> 
                <div className='colorblack'>61<span className='opacitylow' > / 100</span>
                </div>
              </div>
            </div>
            <div className='result-item-container visual'>
            <div className='result-item'>
                <div className="item-title">
                  <img src={visual} alt='reaction'/>
                  <div>Visual
                  </div>
                </div> 
                <div className='colorblack'>72<span className='opacitylow' > / 100</span>
                </div>
              </div>
            </div>
          </div>
          <button className='continue-btn'>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
