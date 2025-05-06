export const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10">
      © {currentYear}. Барлық құқықтар қорғалған
    </footer>
  );
};
