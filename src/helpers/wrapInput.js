export const wrapInput = (obj, value, field, tag = 'span') => {
  const re = new RegExp(value, 'gi');
  const wrappedInput = obj[field].replace(re, `<${tag}>$&</${tag}>`);
  return { ...obj, [field]: wrappedInput };
};
