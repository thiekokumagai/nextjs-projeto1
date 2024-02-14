import React from "react";
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;

interface Modal {
  isOpen: boolean;
  onClose: any;
}

const ModalComponent = (data: Modal) => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  if (!data.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative p-4  w-full lg:max-w-xl max-w-md max-h-full">
        <div className="relative bg-[#272727] rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between  rounded-t dark:border-gray-600 gap-2">
            <button
              type="button"
              onClick={data.onClose}
              className="text-gray-400 bg-transparent rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center"
              data-modal-toggle="select-modal"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4 15L10 11.4L13.6 15L15 13.6L11.4 10L15 6.4L13.6 5L10 8.6L6.4 5L5 6.4L8.6 10L5 13.6L6.4 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                  fill="white"
                />
              </svg>

              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="px-14">
            <div className="inline-flex w-full justify-center ">
              <div className="rounded-md w-[250px] h-[230px]  overflow-hidden">
                {/*<Webcam
                  audio={false}
                  height={500}
                  screenshotFormat="image/jpeg"
                  width={500}
                  videoConstraints={videoConstraints}
  ></Webcam>*/}
                <img
                  className="object-cover h-full w-full "
                  src="https://f.i.uol.com.br/fotografia/2019/08/03/15648360425d4580ca9c3a6_1564836042_1x1_md.jpg"
                />
              </div>
            </div>
            <div className="inline-flex w-full justify-center text-center  text-sm font-book font-normal text-white lg:px-8  px-0">
              <p>
                Procure um ambiente bem iluminado, centralize seu rosto na
                moldura e clique em <strong>"Capturar"</strong>. Logo após,
                verifique se a imagem está adequada e clique em{" "}
                <strong>"Enviar"</strong>
              </p>
              {/*
              <p className="">
                Procure um ambiente bem iluminado, centralize
                <div className="text-center ">
                  seu rosto na moldura e clique em <b>“Capturar”</b>.
                </div>
                <div className="text-center ">
                  <p>Logo após, verifique se a imagem está adequada</p>
                </div>
                <div className="text-center">
                  <p>
                    e clique em <b>“Enviar”</b>
                  </p>
                </div>
              </p>
          */}
            </div>
          </div>
          <div className="lg:px-28 px-14 py-4 pb-8">
            <button className=" text-white text-md font-bold font-book inline-flex w-full justify-center bg-principal-claro focus:ring-4 focus:outline-none  rounded-[5px] px-5 py-2.5 text-center ">
              Capturar
            </button>
            <button className="mt-4 text-white text-md font-bold font-book inline-flex w-full justify-center  border-2 border-principal-escuro focus:ring-4 focus:outline-none rounded-[5px] px-5 py-2.5 text-center ">
              Enviar
            </button>
            <button className="mt-4 text-white text-md font-bold font-book inline-flex w-full justify-center  border-2 border-principal-escuro focus:ring-4 focus:outline-none rounded-[5px]  px-5 py-2.5 text-center ">
              Capturar novamente
            </button>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
