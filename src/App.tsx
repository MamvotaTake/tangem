import {Button} from "./components/Buttons";
import {AiOutlineClose} from "react-icons/ai";

function App() {

  return (
    <>
      <div className="border-4">
          {/*<Button size="small" type="primary">Shop Now</Button>*/}
          <Button  type="icon" icon={<AiOutlineClose />}/>
      </div>
    </>
  )
}

export default App
