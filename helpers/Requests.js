import axios from 'axios';

export const getUsers = axios.get('https://randomuser.me/api/', {
  params: {
    results: 30,
    inc: ['name', 'login', 'id', 'picture', 'nat']
  }
})
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
});