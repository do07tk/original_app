window.addEventListener('load', function(){

  // const link = document.getElementById('link');

  // link.addEventListener('click', () => {
  //   const message = document.getElementById('message-content');
  //   if (message.style.display !== 'block') {
  //     message.style.display = 'block';
  //   }
  // });
  
    const link = document.getElementById('link');
    const message = document.getElementById('message-content');

    link.addEventListener('click', () => {
      if (message.style.display !== 'block') {
        message.style.display = 'block';
      } else {
        message.style.display = 'none';
      }
    });
})