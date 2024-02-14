import React, { useRef } from "react";
import InputMask from "react-input-mask";

function InputCPF() {
  const inputRef = useRef(null);

  return (
    <div>
      <InputMask
        className="w-full shadow appearance-none border rounded-md lg:py-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        maskChar=""
        mask="999.999.999-99"
        placeholder="Digite o seu CPF"
        id="cpf"
        ref={inputRef}
      />
    </div>
  );
}

export default InputCPF;
