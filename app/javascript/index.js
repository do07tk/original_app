window.addEventListener('load', function(){

  const link = document.getElementById('link');
  const message = document.getElementById('message-content');
  const footer = document.getElementById('footer-content')
  // const newPost = this.document.getElementById('new-post')
  // const myPage = this.document.getElementById('my-page')
  // const logout = this.document.getElementById('logout')


  link.addEventListener('click', (event) => {
    event.preventDefault();
    const linkText = event.target.textContent;
    if (message.style.display !== 'none') {
      message.style.display = 'none';
      footer.textContent = '';
      event.target.style.color = 'white';
    } else {
      message.style.display = 'block';
      footer.textContent = linkText;
      event.target.style.color = 'red';
    }
  });

  // // 新規投稿の装飾
  // newPost.addEventListener('click', (event) => {
  //   const linkText = event.target.textContent;
  //   newPost.textContent = linkText;
  //   if (event.target.style.color !== 'red') {
  //     event.target.style.color = 'red';
  //   } else {
  //     event.target.style.color = 'black';
  //   }
  // });

})
