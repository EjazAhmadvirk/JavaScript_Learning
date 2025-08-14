let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) resolve("Task completed!");
    else reject("Task failed!");
  });
  
  promise
    .then((msg) => console.log(msg))
    .catch((err) => console.error(err));
  