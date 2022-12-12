export const freelancersQuery = `
  query HomepageFreelancers {
        freelancers {
            id
            freelancer_name
            slug
            time
            time1
            featured_image {
                id
            }
            salary
            Freelancer_specialization
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

export const HomepageCategoriesQuery = `
    query HomepageCategories {
        categories {
            id
            category_name
        }
    }
`

export const HomepageFilteredFreeQuery = `
query HomepageFilter($categories: [GraphQLStringOrFloat]) {
    freelancers(filter: {freelancer_categories: {categories_id: {id: {_in: $categories}}}}) {
        id
        freelancer_name
        slug
        featured_image {
            id
        }
        salary
        Freelancer_specialization
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