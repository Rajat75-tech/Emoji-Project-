let emojiContainer = document.querySelector(".emoji-container");
let searchInput = document.querySelector("#search");
let btns = document.querySelectorAll(".smal-btns"); // Select all filter buttons

function displayEmojis(filteredEmojis) {
    emojiContainer.innerHTML = ""; // Clear the container

    if (filteredEmojis.length === 0) {
        emojiContainer.innerHTML = "<p>No emoji's found</p>";
        return;
    }

    filteredEmojis.forEach((item) => {
        let div = document.createElement("div");
        div.innerHTML = `<p class="emojis-class">${item.emoji}</p>`;
        emojiContainer.appendChild(div);
    });
}

// Initial display of all emojis
displayEmojis(emojiList);

// Function to filter emojis based on search query
function filterEmojis(query) {
    const lowerCaseQuery = query.toLowerCase(); 

    return emojiList.filter((item) => {
        return (
            item.description.toLowerCase().includes(lowerCaseQuery) ||
            item.aliases.some((alias) => alias.toLowerCase().includes(lowerCaseQuery)) ||
            item.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery))
        );
    });
}

// Keyup event listener for search input
searchInput.addEventListener("keyup", (event) => {
    console.log(event.target);
    
    const query = event.target.value;               //click, keyup, mousemove, scroll
    const filteredEmojis = filterEmojis(query);
    displayEmojis(filteredEmojis);
});

// Event listeners for category buttons
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const category = btn.textContent.trim().toLowerCase();

        if (category === "all") {
            displayEmojis(emojiList); // Show all emojis
        } else {
            const filteredEmojis = emojiList.filter((item) => {
                return (
                    item.description.toLowerCase().includes(category) ||
                    item.tags.some((tag) => tag.toLowerCase().includes(category))
                );
            });
            displayEmojis(filteredEmojis);
        }
    });
});