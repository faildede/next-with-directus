export const createNewUser = `
mutation createNewUser($data: create_directus_users_input!){
    create_user_item(data: $data) 
 
}
`

export const getCurrentUser = `
    query {
        users_me{
            email
            first_name
            last_name
        }
    }
`