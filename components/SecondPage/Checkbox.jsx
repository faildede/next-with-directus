function Checfbox({label, id, getSelectedCategories, getStartState}) {

    return ( 
        <div>
             <div class="form-check">
            <input
              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#F1DF6F] checked:border-[#F1DF6F] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              value={id}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={e => getSelectedCategories(+ e.target.value)}
            />
            <label>
            {label}
            </label>
          </div>
        </div>
     );
}

export default Checfbox;