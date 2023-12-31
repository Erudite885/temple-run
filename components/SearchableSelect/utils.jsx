import isFunction from "./utils/isFunction";

/**
 * Utility function to check validity of Select props
 */
export function checkSelectProps(props) {
  const { optionTemplate, emptyTemplate, loadingTemplate } = props;

  if (optionTemplate && isFunction(optionTemplate)) {
    console.warn(`optionTemplate must be a function`);
    return;
  }

  if (emptyTemplate && isFunction(emptyTemplate)) {
    console.warn(`emptyTemplate must be a function`);
    return;
  }

  if (loadingTemplate && isFunction(loadingTemplate)) {
    console.warn(`loadingTemplate must be a function`);
    return;
  }

  return props;
}
