const apis = {
  getTodos: '/todos',
};

if (process.env.NODE_ENV === 'development') {
  Object.keys(apis).forEach((key) => {
    apis[key] = `/api${apis[key]}`;
  });
}

export default apis;
