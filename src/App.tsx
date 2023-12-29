import {Banner} from "./components/Banner";
import banner from "./assets/display-small.png"
import {Button} from "./components/Buttons";

function App() {

  return (
    <>
      <div className="m-2">
            <Banner size="small">
                <img src={banner} alt='banner small'/>
                <p>
                    <span>Black Friday, 24-27 Nov</span>
                    <span>10% OFF</span>
                    <span>Use code 10FRIDAY at checkout</span>
                </p>
                <Button>Shop now</Button>
            </Banner>
      </div>
    </>
  )
}

export default App
