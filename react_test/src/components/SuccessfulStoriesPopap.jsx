import { Dialog } from '@headlessui/react';
import SuccessfulStoriesPopapSwiper from './SuccessfulStoriesPopapSwiper';


export default function MyModal({isModalOpen, setModalState, selectedItem}) {

  return (
    <>
      <div className="myModal">
        <Dialog open={isModalOpen} onClose={() => setModalState(false, 0)}>
          <div className="myModal__bg">
            <Dialog.Panel className="myModal__popap">             
              <button className="myModal__popap_close" onClick={() => setModalState(false, 0)}><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7L17 17"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 7L7 17"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg></button>
                
                <div className="myModal__bg_content">
                  <div className="myModal__bg_content_left-block">
                    <div className="myModal__bg_content_left-block_img">
                    <SuccessfulStoriesPopapSwiper/>
                    </div>
                  </div>
                  <div className="myModal__bg_content_right-block">
                    <h5>{selectedItem.title}</h5>
                    <div>
                    <>{selectedItem.longDesc}</>
                    </div>
                    <span>{selectedItem.date}</span>
                  </div>
                </div>
              
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </>
  );
}
