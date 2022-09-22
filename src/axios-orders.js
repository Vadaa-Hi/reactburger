import axios from 'axios';

const Instance = axios.create({
  baseURL:
    'https://reactburger-92767-default-rtdb.asia-southeast1.firebasedatabase.app/',
});

export default Instance;
