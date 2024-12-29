document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate");
    const phraseInput = document.getElementById("phrase");
    const responseDiv = document.getElementById("response");

    generateButton.addEventListener("click", async () => {
        const phrase = phraseInput.value.trim();

        if (!phrase) {
            responseDiv.textContent = "Please enter a phrase.";
            responseDiv.style.color = "red";
            return;
        }

        try {
            const response = await fetch("/generate_acronym", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phrase }),
            });

            const data = await response.json();

            if (response.ok) {
                responseDiv.textContent = `Acronym: ${data.acronym}`;
                responseDiv.style.color = "green";
            } else {
                responseDiv.textContent = data.error || "Something went wrong.";
                responseDiv.style.color = "red";
            }
        } catch (error) {
            responseDiv.textContent = "Error connecting to the server.";
            responseDiv.style.color = "red";
        }
    });
});
