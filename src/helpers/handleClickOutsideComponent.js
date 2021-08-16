export const handleClickOutsideComponent = (event, ref, func) => {
  if (ref.current && !ref.current.contains(event.target)) {
    func();
  }
};
