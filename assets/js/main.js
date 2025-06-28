
/*=============== HIỆN/ẨN MẬT KHẨU TRONG FORM ĐĂNG NHẬP ===============*/
const passwordAccess = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
       // Đổi kiểu từ mật khẩu sang văn bản và ngược lại
      input.type === 'password' ? input.type = 'text'
						              : input.type = 'password'

       // Đổi biểu tượng con mắt (hiện/ẩn mật khẩu)
      iconEye.classList.toggle('ri-eye-fill')
      iconEye.classList.toggle('ri-eye-off-fill')
   })
}
passwordAccess('password','loginPassword')

/*=============== HIỆN/ẨN MẬT KHẨU TRONG FORM ĐĂNG KÝ ===============*/
const passwordRegister = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
       // Đổi kiểu từ mật khẩu sang văn bản và ngược lại
      input.type === 'password' ? input.type = 'text'
						              : input.type = 'password'

      // Đổi biểu tượng con mắt (hiện/ẩn mật khẩu)
      iconEye.classList.toggle('ri-eye-fill')
      iconEye.classList.toggle('ri-eye-off-fill')
   })
}
passwordRegister('passwordCreate','loginPasswordCreate')

/*=============== CHUYỂN ĐỔI GIỮA GIAO DIỆN ĐĂNG NHẬP VÀ ĐĂNG KÝ ===============*/
const loginAcessRegister = document.getElementById('loginAccessRegister'),
      buttonRegister = document.getElementById('loginButtonRegister'),
      buttonAccess = document.getElementById('loginButtonAccess')

buttonRegister.addEventListener('click', () => {
   loginAcessRegister.classList.add('active')
})

buttonAccess.addEventListener('click', () => {
   loginAcessRegister.classList.remove('active')
})
