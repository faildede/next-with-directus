export const SingleFreelancerQuery = `
    query SingleFreelancer($freelancer_slug: String) {
        freelancers(filter: {slug: {_eq:$freelancer_slug}}){
            id
            freelancer_name
            slug
            years
            city
            work_API
            time
            time1
            resum
            featured_image {
                id
            }
            salary
            Freelancer_specialization
            Frelancers_phone
            Freelancers_description
            Freelancers_Experience
            freelancer_categories {
                categories_id {
                    id
                    category_name
                    slug
                }
            }
        }
    }
`