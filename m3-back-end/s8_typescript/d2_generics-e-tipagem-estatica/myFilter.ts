export default function myFilter<T>(arr: T[], callback: Function): T[] {
  const newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
}
