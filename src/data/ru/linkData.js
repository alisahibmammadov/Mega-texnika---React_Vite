const linkData = [
  { name: "Главная страница", link: "/" },
  { name: "О нас", link: "about" },
  {
    name: "Техника",
    link: "techniques",
    subCategories: [
      { name: "Автокраны", link: "Автокраны" },
      { name: "Тракторы", link: "Тракторы" },
      { name: "Подъемные корзины", link: "Подъемные-корзины" },
      { name: "Вилочные погрузчики", link: "Вилочные-погрузчики" },
      { name: "Каток", link: "Каток" },
      { name: "Шахман", link: "Шахман" },
      { name: "Бобкэт", link: "Бобкэт" },
      { name: "Насос", link: "Насос" },
    ],
  },
  { name: "Условия аренды", link: "termsLease" },
  { name: "Блог", link: "blog" },
  { name: "Контакт", link: "contact" },
];
export default linkData;
