import './App.css';
import getBaits from './tools/getBaits';
import fish from './fish.json'
import { useState } from 'react';

// const onDragEnd = (result) => {
//   console.log(result);
// };

const handleDesiredClick = (fish, fishWithProps, updateFishWithProps) => {
  updateFishWithProps(fishWithProps.map(thisFish => {
    if (thisFish === fish) {
      return { ...thisFish, desired: !thisFish.desired }
    }
    return thisFish
  }))
}

const handleNuisanceClick = (fish, fishWithProps, updateFishWithProps) => {
  updateFishWithProps(fishWithProps.map(thisFish => {
    if (thisFish === fish) {
      return { ...thisFish, nuisance: !thisFish.nuisance }
    }
    return thisFish
  }))
}

const App = () => {
  const [fishWithProps, updateFishWithProps] = useState(fish.map(fish => { return { ...fish, desired: false, nuisance: false } }))

  return (
    <div className="App">

      <div>
        <p>
          Desired Fish Toggle
        </p>
        {fishWithProps.map(fish => <button className={`${fish.desired ? 'on' : 'off'}`} key={`${fish.name} desired`} onClick={() => handleDesiredClick(fish, fishWithProps, updateFishWithProps)}>{fish.name}</button>)}
      </div>
      <div>
        <p>
          Nuisance Fish Toggle
        </p>
        {fishWithProps.map(fish => <button className={`${fish.nuisance ? 'on' : 'off'}`} key={`${fish.name} nuisance`} onClick={() => handleNuisanceClick(fish, fishWithProps, updateFishWithProps)}>{fish.name}</button>)}
      </div>
      <div>{
        getBaits(fishWithProps)
          .map(bait => <p>{bait}</p>)
      }</div>
      {/* <button onClick={console.log(getBaits(fishWithProps))}>Get Fish</button> */}
    </div>
  );
}

export default App;
