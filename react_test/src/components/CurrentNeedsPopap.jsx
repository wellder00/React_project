import { Dialog } from '@headlessui/react';
import ButtonFunc from './ButtonFunc';
import { HashLink } from 'react-router-hash-link';

export default function MyModal({ isModalOpen, setModalState, selectedItem }) {
  return (
    <>
      <div className="current-needs-myModal">
        <Dialog open={isModalOpen} onClose={() => setModalState(false, 0)}>
          <div className="myModal__bg">
            <Dialog.Panel className="current_myModal__popap">
              <button
                className="myModal__popap_close__position"
                onClick={() => setModalState(false, 0)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7L17 17"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7L7 17"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="myModal__bg_content">
                <div className="myModal__bg_content__wrapper">
                  <div className="myModal__bg_content_left-block_img">
                    <img
                      className="current-needs-myModal_img"
                      src={selectedItem.src}
                      alt="selectedItem.img"
                    />
                  </div>
                  <div className="myModal__bg_content_right-block__scroll">
                    <h5 className="myModal__bg_content_right-block__title">{selectedItem.title}</h5>
                    <section className="myModal__bg_content_right-block__sum">
                      {selectedItem.sum}
                    </section>
                    <div>{selectedItem.longDesc}</div>
                    <HashLink smooth to="/#donate">
                      <ButtonFunc onClick={() => setModalState(false, 0)} class="current-need-popap-botton">Допомогти</ButtonFunc>
                    </HashLink>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </>
  );
}
