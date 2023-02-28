import { Dialog } from '@headlessui/react';

export default function MyModal({ isModalOpen1, setModalState1 }) {
  return (
    <>
      <div className="current-needs-myModal">
        <Dialog open={isModalOpen1} onClose={() => setModalState1(false, 0)}>
          <div className="myModal__bg">
            <Dialog.Panel className="form-popap1">
              <button
                className="myModal__popap_close__position"
                onClick={() => setModalState1(false, 0)}
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
              <div className="form-popap1__text">
                Ваше повідомлення відправлено.<br/> Дякуємо за вашу підтримку!
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </>
  );
}
