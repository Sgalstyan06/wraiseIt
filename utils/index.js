export const isEmpty = (object) => {
  return Object.keys(object).length === 0;
};
export const returnMessageType = (item = "", object) => {
  switch (object.type) {
    case "required":
      return `${item} ${object.message}`;
    case "maxLength":
      return `${object.message}`;
    case "minLength":
      return `${object.message}`;
    case "pattern":
      return `${item} is incorrect`;
    default:
      return;
  }
};

export const lockScroll = () => {
  document.body.style.overflow = "hidden";
};

export const unLockScroll = () => {
  document.body.style.overflow = "";
};
