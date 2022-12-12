import { useQuery } from "react-query";
// import {getHomepageFreelancers, getHomepageCategories, getHomepageFillterFreelancer} from "../../queries/getData";
import getData from "../../queries/getData";
import {HomepageCategoriesQuery, HomepageFilteredFreeQuery, freelancersQuery} from '../../queries/HomepagefreelancersQuery'
import FreelancersCard from "../FreelancersCard";
import Fillter from "./Fillter";
import {useEffect, useState} from 'react'
import _ from "lodash";


async function handleFreelancerFiltering({queryKey}) {
  console.log(queryKey);
  const [_] = queryKey
  if(_.length){
    return await getData(HomepageFilteredFreeQuery, 'freelancers', {categories:queryKey[0]})
  }
  return await getData(freelancersQuery,'freelancers')
}


function AllUser() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [get, setGet] = useState([])
  const { data: freelancers, isSuccess } = useQuery( [selectedCategories], handleFreelancerFiltering );
  const { data: categories, isSuccess: categoriesSuccess } = useQuery("categories",async () => await getData(HomepageCategoriesQuery, 'categories'));

    const getSelectedCategories = (category) => {
        // console.log(category);
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter(item => item !== category))
      }
        setSelectedCategories([...selectedCategories, category ])
    }

    useEffect(() => {
        console.log(selectedCategories)
    },[setSelectedCategories])

  return (
    <div className="flex w-full">
        <div className="flex flex-wrap ">
      {isSuccess &&
        freelancers.map((i) => (
          <FreelancersCard
            freelancer_name={i.freelancer_name}
            body={i.body}
            key={i.id}
            image={i.featured_image.id}
            category={i.freelancer_categories[0].categories_id}
            salary={i.salary}
            exp={i.Freelancers_Experience}
            slug={i.slug}
            time={i.time}
            time1={i.time1}
          />
        ))}
        </div>

        { categoriesSuccess && <Fillter
         category={categories}
         getSelectedCategories={getSelectedCategories}

         className="justify-end"
         />
         }
  </div>
  );
}

export default AllUser;
