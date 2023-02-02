const usernameEle = document.getElementById('name');
let usernameValue = usernameEle.value;
if (usernameValue == '') {
    setError(usernameEle, 'Tên không được để trống');
    isCheck = false;
} else {
    setSuccess(usernameEle);
}
const passwordEle = document.getElementById('password');
let passwordValue = usernameEle.value;
if (passwordValue == '') {
    setError(passwordEle, 'Mật khẩu không được để trống');
    isCheck = false;
} else {
    setSuccess(passwordEle);
}