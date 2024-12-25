// Fetch data from the API
function fetchdata() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    //This allows the caller of fetchData to handle the asynchronous operation using .then() or await
    .then((response) => {
      return response.json() //converting into json formats
    })
  // .then((data) => {
  //   console.log("Fetched Data  ---->:", data); // Logs the fetched data
  // })
  // .catch((error) => { //logs if there is an error
  //   console.error("Error fetching data:", error);
  // });
}

// Create a promise that generates a random number and resolves/rejects
function randomNumberPromise() {
  return new Promise((resolve, reject) => {
    // return this promise then only JS know it is a asyn function
    const randomNumber = Math.floor(Math.random() * 10);
    console.log("Random Number  ---->  ", randomNumber);

    if (randomNumber < 2) {
      resolve("Operation Success");
    } else {
      reject("Operation Failed");
    }
    
  });
}


// Async/Await function
async function fetchdataAsync() {
  try {
    const resultFetch = await fetchdata() // Wait for fetch to complete
    console.log("Fetched Data (Async/Await) ---->:", resultFetch); // Logs the fetched data (Async/Await)
    const output3 = document.getElementById('output3')
    output3.innerText = 'Successfully Fetched the API (Async)'
    output3.style.color = 'green'
    output3.style.fontWeight = 'bold'
  } catch (error) {
    console.error("Error fetching data (Async/Await):", error);
    output3.innerText = 'An error has occurred while fetching the API (Async)'
    output3.style.color = 'red'
    output3.style.fontWeight = 'bold'
  }
}

async function randomNumberAsync() {
  try {
    const resultNumber = await randomNumberPromise(); // Wait for promise
    console.log('Random Number Operation (Async/Await): Success'); // Logs success with the number

    const output4 = document.getElementById('output4')
    output4.innerText = 'Operation is Successfull'
    output4.style.color = 'green'
    output4.style.fontWeight = 'bold'
  } catch (error) {
    console.log('Random Number Operation (Async/Await): Failed') // Logs failure with the number
    
    output4.innerText = 'Operation  failed'
    output4.style.color = 'red'
    output4.style.fontWeight = 'bold'
  }
}


document.getElementById('fetchButton').addEventListener('click', () => {
  console.log('_____________________________________________________________________________');

  //API Funtion
  const output = document.getElementById('output')
  fetchdata().then((data) => {
      output.innerText = 'Successfully Fetchde the API'
      console.log("Fetched Data through fetchdata() ---->:", data); // Logs the fetched data
      output.classList.add('green')
    })
    .catch((error) => {
      output.innerText = 'An error has occurred while fetching the API'
      console.error("Error fetching data:", error);
      output.classList.add('red')

    })

  //Random Number Funtion
  const output2 = document.getElementById('output2')
  randomNumberPromise().then(() => {
      output2.innerText = 'Operation is Successfull'
      output2.style.color = 'green'
      output2.style.fontWeight = 'bold'

    })
    .catch(() => {
      output2.innerText = 'Operation  failed'
      output2.style.color = 'red'
      output2.style.fontWeight = 'bold'
    })
  fetchdataAsync()
  randomNumberAsync()
})