const Copyrights = () => {
  const getFullYear = () => {
    const today = new Date();
    return today.getFullYear();
  };
  return <>&copy; {getFullYear()} Darek Mazur</>;
};

export default Copyrights;
