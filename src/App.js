import Data from "./component/profile";
import Image from "photo.jpg"
function App() {
  return (
    <div className="App">
      <Data data={fun}>
        <img src={Image}/>
        </Data>
    </div>
  );
}

export default App;
