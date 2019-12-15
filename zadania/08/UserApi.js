export const userApi = () => {
  return Date.now() % 2 ? Promise.resolve('Działa') : Promise.reject('nieparzysta')
}
