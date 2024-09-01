// src/boot/config.js
export default ({ app, $q }) => {
  // Объявляем глобальные переменные
  const mobileWidth = 1500;
  const mobileVersion = 750;

  // Регистрация переменных как глобальных свойств
  app.config.globalProperties.$mobileWidth = mobileWidth;
  app.config.globalProperties.$mobileVersion = mobileVersion;
};
