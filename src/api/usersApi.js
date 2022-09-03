import axios from 'axios';

axios.defaults.baseURL =
    'https://frontend-test-assignment-api.abz.agency/api/v1';

export const fetchUsers = (page = 1) =>
    axios
        .get(`/users?page=${page}&count=6`)

        .then(({ data }) => ({
            total_pages: data.total_pages,
            users: data.users,
            page: data.page,
        }))
        .catch(console.error);

export const signUpUser = async formData => {
    const { data } = await axios.get('/token');
    const config = {
        headers: { Token: data.token },
    };

    axios.post('/users', formData, config).catch(console.error);
};
