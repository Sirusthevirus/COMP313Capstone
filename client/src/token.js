const token = {
  saveToken(userToken) {
      console.log(userToken);
      localStorage.setItem('token', JSON.stringify(userToken));
      
    },
  getToken(){
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
   
      return userToken;
    }
}
export default token;