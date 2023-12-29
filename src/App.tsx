import {Banner} from "./components/Banner";
import banner from "./assets/display-small.png"
import {Button} from "./components/Buttons";
import {AiOutlineClose} from "react-icons/ai";
import './components/Banner/Banner.scss'
import { motion,  useInView} from "framer-motion"
import {useEffect, useRef, useState} from "react";

function App() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [showBanner, setShowBanner] = useState(
        localStorage.getItem("showBanner") === null
            ? true
            : JSON.parse(localStorage.getItem("showBanner")!)
    );

    const handleClose = () => {
        setShowBanner(false);
    };

    // Update the local storage whenever the state changes
    useEffect(() => {
        localStorage.setItem("showBanner", JSON.stringify(showBanner));
    }, [showBanner]);


    useEffect(() => {

    }, [isInView])


  return (
      <>
          <div className='Container'>
              <div  className='Banner__content'>
                  <Banner size="small" type="info" >
                      <img src={banner}  alt='banner small'/>
                      <div className='flex justify-between'>
                          <p className="font-bold">Black Friday, <span className='font-normal ml-2'>24-27 Nov</span></p>
                          <span className="Banner__content-discount">10% OFF</span>
                          <p>Use code <span className="Banner__content-coupon">10FRIDAY</span> at checkout</p>
                      </div>
                      <div className='Banner__content-actions'>
                          <Button>Shop now</Button>
                          <Button size="small" type="icon" icon={<AiOutlineClose/>}/>
                      </div>
                  </Banner>
              </div>
          </div>
          {showBanner ?
              <motion.div className="Container"
                                     ref={ref}
                                     initial="hidden"
                                     whileInView="visible"
                                     viewport={{once: true, amount: .5}}
                                     transition={{duration: 2}}
                                     variants={{
                                         visible: {opacity: 1, scale: 1},
                                         hidden: {opacity: 0, scale: 0}
                                     }}
          >
              <div className="Banner__content-card">
                  <Banner size="medium" fullWidth={false}>
                      {/*<img src={banner} className="Banner__content-img" alt='banner small'/>*/}
                      <div className='Banner__content--info'>
                          <p className="Banner__content--info-title">Black Friday</p>
                          <span className="Banner__content--info-discount">10% OFF</span>
                          <p className="Banner__content--info-coupon">Use code <span
                              className="Banner__content--info-code">10FRIDAY</span> at checkout</p>

                          <div className='Banner__content-actions'>
                              <Button type="secondary" size="medium">Shop now through Monday</Button>
                          </div>
                      </div>
                      <Button size="small" type="icon" onClick={handleClose} icon={<AiOutlineClose/>}
                              className='Banner__content-close'/>

                  </Banner>
              </div>
          </motion.div> : null
          }
      </>
  )
}

export default App
