import { useRef, useState } from 'react';
import { Arrow } from './arrow';
import clsx from 'clsx';


const DEFAULT_TRANSLATE_VALUE = 460; //img width + margin of 32px;
const FIRST_EL_TRANSLATE_VALUE = 590;

const Slider = ({imgArr}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const onArrowClick = () => {

        const childrenArr = [...(sliderRef.current).children];
        const indexToSet = currentIndex === imgArr.length - 1 ? 0 : currentIndex + 1;
        const multiplyValue = currentIndex === imgArr.length - 1 ? 0 : imgArr.length - 1;
        const isNextElLast = indexToSet === imgArr.length - 1;
    
        childrenArr.forEach((item, index) => {
                if (index === currentIndex) {
                    /* El, which is positioned at the beginning of the slider,
                        should move to the end of slider when we're clicking on arrow
                    */
                    item.style.transform = `translateX(${FIRST_EL_TRANSLATE_VALUE * multiplyValue}px)`;
                }
                 else {
                    /*  initial arr: [1,2,3]
                        slider case: [3,1,2]
                        When we know, that first displayed el in the slider is actually the last one from initial arr (3),
                        we should set position of real first el of arr (1) to be the next after that "last" el (3).
                    */
                    if(index === 0 && isNextElLast) {
                        item.style.transform = `translateX(${FIRST_EL_TRANSLATE_VALUE}px)`;
                    } else {
                        // In other case just move elements to the left
                        item.style.transform = `translateX(${-DEFAULT_TRANSLATE_VALUE * (indexToSet)}px)`;
                    }
                }
        })
            setCurrentIndex(indexToSet);

    };
    return (
        <div className='slider-container'>
            <div className='slider-content' ref={sliderRef}>
                {imgArr.map((item, index) =>
                    <div
                        key={index}
                        className = {clsx('slider-item', index === currentIndex ? 'active' : 'default')}
                    >
                        <img src={item.src} alt = 'some img'/>
                    </div>
                )}
            </div>
            <div className='arrow' onClick={() => onArrowClick()}>
                <Arrow />
            </div>
        </div>
    );
};
export default Slider;
