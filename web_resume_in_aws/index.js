/*
// java script code
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://jhqdar4avn3zjoewoelniljgry0vabfr.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();




// improved version
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://jhqdar4avn3zjoewoelniljgry0vabfr.lambda-url.us-east-1.on.aws/");  // Replace with your actual API endpoint
        if (!response.ok) {
            throw new Error("Network response was not ok");  // Handle non-200 responses
        }
        let data = await response.json();
        counter.innerHTML = `Views: ${data.count}`;  // Adjust `data.count` based on your API's JSON structure
    } catch (error) {
        console.error("Error fetching counter data:", error);
        counter.innerHTML = "Couldn't read views";  // Display error message to user
    }
}

updateCounter();
*/


// working version
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://33pd4mlwv5t3ynredjb7ofnhau0wkltu.lambda-url.eu-north-1.on.aws/");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log("Data received:", data);  // Log data to verify
        counter.innerHTML = `Views: ${data}`;  // Update the views count on the page
    } catch (error) {
        console.error("Error fetching counter data:", error);
        counter.innerHTML = "Couldn't read views";  // Error message if there's an issue
    }
}

updateCounter();
