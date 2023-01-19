window.onscroll = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById('nav').style.cssText = 'z-index: 1;box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;';
  }else {
    document.getElementById('nav').style.cssText = 'z-index: 0;box-shadow: none';
  }
}