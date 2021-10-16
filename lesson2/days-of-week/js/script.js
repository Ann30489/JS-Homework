const arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

do {
  alert(`${arr[0]}`);
  arr.push(arr.shift());

} while (confirm("Do you want to see the next one?") == true);