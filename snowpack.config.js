/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/dist',
    public: { url: '/', static: true }
  },
  plugins: ['@snowpack/plugin-typescript'],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    metaUrlPath: "snowpack",
    baseUrl: './'
  }
}
