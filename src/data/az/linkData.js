const linkData = [
  { name: "Əsas səhifə", link: "/" },
  { name: "Haqqımızda", link: "about" },
  {
    name: "Texnikalar",
    link: "techniques",
    subCategories: [
      { name: "Avtokranlar", link: "autoCranes" },
      { name: "Traktorlar", link: "tractors" },
      { name: "Qaldırıcı səbətlər", link: "liftingBaskets" },
      { name: "Forkliftlər", link: "forklifts" },
      { name: "Katok", link: "katok" },
      { name: "Shacman", link: "shacman" },
      { name: "Bobcat", link: "bobcat" },
      { name: "Pompa", link: "pump" },
    ],
  },
  { name: "İcarə şərtləri", link: "termsLease" },
  { name: "Blog", link: "blog" },
  { name: "Əlaqə", link: "contact" },
];
export default linkData;
