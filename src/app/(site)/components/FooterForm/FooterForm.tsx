import React from "react";

interface FooterFormProps {
  textOne: string;
  textTwo: string;
  toggleVariant: () => void;
}

const FooterForm: React.FC<FooterFormProps> = ({
  textOne,
  textTwo,
  toggleVariant,
}) => {
  return (
    <div
      className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500"
    >
      <div>{textOne}</div>
      <div onClick={toggleVariant} className="underline cursor-pointer">
        {textTwo}
      </div>
    </div>
  );
};

export default FooterForm;
