const linkData = [
  { name: "Главная страница", link: "/" },
  { name: "О нас", link: "about" },
  {
    name: "Техника",
    link: "techniques",
    subCategories: [
      { name: "Автокраны", link: "autoCranes" },
      { name: "Тракторы", link: "tractors" },
      { name: "Подъемные корзины", link: "liftingBaskets" },
      { name: "Вилочные погрузчики", link: "forklifts" },
      { name: "Каток", link: "katok" },
      { name: "Шахман", link: "shacman" },
      { name: "Бобкэт", link: "bobcat" },
      { name: "Насос", link: "pump" },
    ],
  },
  { name: "Условия аренды", link: "termsLease" },
  { name: "Блог", link: "blog" },
  { name: "Контакт", link: "contact" },
];
export default linkData;
