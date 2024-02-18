// xử lý ng dùng ở navbar
function getUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
}
export default getUser;
