import axios from "axios";

const fetchData = () => {
    return axios
        .get('http://localhost:4000/users')
        .then((response) => {
            console.log("response", response.data);
            return response.data;  // Return the fetched data
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            throw new Error('Something went wrong!');  // Throw an error to be handled by caller
        });
};

export { fetchData };
