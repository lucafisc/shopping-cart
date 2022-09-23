export const fetchItems = async (url, fn) => {
  const data = await fetch(url);
  const items = await data.json();
  console.log(items);
  fn(items);
};
