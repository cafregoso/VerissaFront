const dev = {
  URL: {
    SERVER: "http://192.168.2.150/api/v1/",
    BASE: "http://localhost:8000"
  }
};

const prod = {
  URL: {
    SERVER: "http://192.168.2.150/api/v1/",
    BASE: "http://3.86.96.55"
  }
};

let config = '';
if (process.env.REACT_APP_STAGE === 'prod') {
  config = prod
} else {
  config = dev
}

global.config = config;