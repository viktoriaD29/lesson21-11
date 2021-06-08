export const squaredNumbers = () => {
  const arr = Array.from(document.querySelectorAll('.number'));
  console.log(arr[0].dataset)
  console.log(arr[1].dataset)
  console.log(arr[2].dataset);
  arr[0].dataset.squaredNumber = '25';
  arr[1].dataset.squaredNumber = '49';
  arr[2].dataset.squaredNumber = '9';
};

