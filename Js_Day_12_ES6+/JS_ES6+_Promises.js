// Promise example
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) resolve("Data fetched successfully!");
        else reject("Error fetching data.");
      }, 1000);
    });
  };
  
  // Using .then and .catch
  fetchData()
    .then(result => console.log("Promise result:", result))
    .catch(error => console.log("Promise error:", error));
  
  // Using async/await
  const getData = async () => {
    try {
      const result = await fetchData();
      console.log("Async/Await result:", result);
    } catch (error) {
      console.log("Async/Await error:", error);
    }
  };
  
  getData();
  