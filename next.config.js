module.exports = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Cross-Origin-Opener-Policy",
              value: "same-origin-allow-popups",
            },
            // {
            //   key: "Cross-Origin-Opener-Policy",
            //   value: "same-origin",
            // },
          ],
        },
      ]
    },
  }