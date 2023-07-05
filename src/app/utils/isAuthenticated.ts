export const isAuthenticated = () => {
  if(typeof window === 'undefined') {
    return false;
  }
  if(localStorage.getItem('formData')) {
    return JSON.parse(localStorage.getItem('formData') as any);
  }
  return false;
}
