const dev = {
  URL: {
    SERVER: "http://localhost:8000/api/v1/",
    BASE: "http://localhost:8000"
  }
};

// const prod = {
//   URL: {
//     SERVER: "https://atoyacci.com/api",
//     BASE: "https://atoyacci.com"
//   }
// };

let config = '';
if (process.env.REACT_APP_STAGE === 'prod') {
  config = dev
} else {
  config = dev
}

global.config = config;