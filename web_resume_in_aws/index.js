const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://k2hgh73qtrlbmdi7cpupdxdaiq0dehki.lambda-url.eu-north-1.on.aws/"); // tf generated
        // let response = await fetch("https://rt5balwnxw2qyqqad33riq4ihi0dtydk.lambda-url.eu-north-1.on.aws/"); // manually generated
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
