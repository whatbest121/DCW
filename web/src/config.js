const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

const config = {
  isProd,
  apiUrlPrefix: isProd ? '/api' : 'http://localhost:8000/api',
  loginUrlPrefix: isProd ? '/login' : 'http://localhost:8000/login'
}

export default config;
