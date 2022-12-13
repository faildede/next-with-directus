import Image from "next/image";
import Checkbox from "./Checkbox";
import { useRouter } from "next/router";

function Fillter({ category, getSelectedCategories }) {
  const router = useRouter();
  function getStartState() {
    category.id = null
  }

  return (
    <div className="hidden md:block container mx-auto w-1/4">
      <div className="bg-white container mx-auto rounded-xl px-2  p-4">
        <p className="text-center pt-6 pb-4 font-normal text-4xl">Фильтры</p>
        <div className=" border-y-2 text-gray-200 border-gray-200 p-4 place-content-center  ">
          <div className="flex justify-center mx-22">
            <div className="flex justify-between ">
              <Image
                src="/assets/on.svg"
                width={18}
                height={18}
                className="text-center pl-2 mr-2"
              />
              <p className="text-[#374151]">4 Параметра</p>
            </div>
          </div>
        </div>


        <div className="p-4 text-base">
         {category.map(category => <Checkbox 
         key={category.id} 
         label={category.category_name} 
         id={category.id} 
         getSelectedCategories={getSelectedCategories}
         getStartState={getStartState}
         />
         )}
        </div>
      </div>
    </div>
  );
}

export default Fillter;
