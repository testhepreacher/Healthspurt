const togglebtn = document.querySelector(".toggle-btn")
const navbarlinks = document.querySelector(".navbar-links")

togglebtn.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})
//This JavaScript Code is optional to use
(function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = "EMAIL";
    ftypes[0] = "email";
    fnames[1] = "FNAME";
    ftypes[1] = "text";
  })(jQuery);
  var $mcj = jQuery.noConflict(true);

  function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }