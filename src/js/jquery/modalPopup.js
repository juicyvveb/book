import Cookies from 'js-cookie';

export let initialize_Modal =  () => {
  if (Cookies.get('prompt')) {
    return false
  } else {
    setTimeout(() => {
      Cookies.set('prompt', 'ture', {
      expires: 1,
      path: '/'
    });
    }, 1)
    return true
  }
}