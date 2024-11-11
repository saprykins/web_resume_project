const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        // let response = await fetch("https://33pd4mlwv5t3ynredjb7ofnhau0wkltu.lambda-url.eu-north-1.on.aws/");
        let response = await fetch("https://7rfw7c7y7qplhse6pgt64ft5si0uxduq.lambda-url.eu-north-1.on.aws/");
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
