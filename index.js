export const squaredNumbers = () => {
  const arr = Array.from(document.querySelectorAll('.number'));
  arr[0].dataset.squaredNumber = '25';
  arr[1].dataset.squaredNumber = '49';
  arr[2].dataset.squaredNumber = '9';
};
