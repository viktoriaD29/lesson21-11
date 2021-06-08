export const squaredNumbers = () => {
  const arr = Array.from(document.querySelectorAll('.number'));

  const arr1 = Object.values(arr[0].dataset);
  arr[0].dataset.squaredNumber = +arr1[0] * +arr1[0];

  const arr2 = Object.values(arr[1].dataset);
  arr[1].dataset.squaredNumber = +arr2[0] * +arr2[0];

  const arr3 = Object.values(arr[2].dataset);
  arr[2].dataset.squaredNumber = +arr3[0] * +arr3[0];
};

