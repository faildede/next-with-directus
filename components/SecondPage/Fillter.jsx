import Image from "next/image";
import Checkbox from "./Checkbox";

function Fillter({ category, getSelectedCategories }) {
  return (
    <div className="container mx-auto w-1/4">
      <div className="bg-white container mx-auto rounded-xl px-2  p-4">
        <p className="text-center pt-6 pb-4 font-normal text-4xl">Фильтры</p>
        <div className=" border-y-2 text-gray-200 border-gray-200 p-4 place-content-center  ">
          <div className="flex justify-between mx-22">
            <div className="flex justify-between">
              <Image
                src="/assets/on.svg"
                width={20}
                height={20}
                className="text-center pl-2 mr-2"
              />
              <p className="text-[#374151]">4 Параметра</p>
            </div>
            |<p className="text-gray-500 cursor-pointer">Очистить всё</p>
          </div>
        </div>


        <div className="p-4 text-base">
         {category.map(category => <Checkbox 
         key={category.id} 
         label={category.category_name} 
         id={category.id} 
         getSelectedCategories={getSelectedCategories}
         />
         )}
        </div>

        <p className="text-lg container mx-auto cursor-pointer w-32 bg-[#F1DF6F] rounded-3xl text-center place-content-center px-6 py-2 mb-6 mt-6">
          Применить
        </p>
      </div>
    </div>
  );
}

export default Fillter;
