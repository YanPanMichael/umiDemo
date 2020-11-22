export default async () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(dataSource);
    }, 1000);
  }).then((data) => {
    return data;
  }).catch((err) => {
    throw err;
  })
}