export const validationRules = {
  name: {
    required: "is required",
    maxLength: {
      value: 20,
      message: "Only 20 characters allowed.",
    },
    pattern: /[a-zA-Z][a-zA-Z ]{2,}/,
  },
  email: {
    required: "is required",
    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
  },
  companyName: {
    required: false,
    maxLength: {
      value: 30,
      message: "Only 30 characters allowed.",
    },
  },
  message: {
    required: "is required",
    minLength: {
      value: 10,
      message: "Required minimum 10 characters.",
    },
  },
};
