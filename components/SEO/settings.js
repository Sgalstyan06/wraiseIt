const settings = {
  meta: {
    rootUrl: "http://localhost:5000",
    title: "App",
    description: "The app description goes here.",
    social: {
      graphic: "",
      twitter: "",
      facebook: "",
      linkedin: "",
    },
  },
  routes: {
    authenticated: {
      pathAfterFailure: "/login",
    },
    public: {
      pathAfterFailure: "/documents",
    },
  },
};

export default settings;
