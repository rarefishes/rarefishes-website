/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      src: '/dist',
      public: { url: '/', static: true }
    },
    packageOptions: {
      /* ... */
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      /* ... */
    }
  }