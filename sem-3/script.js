const specials = [
    "Grilled Salmon - $15.99",
    "Steak - $18.99",
    "Lobster - $24.99"
];

function showSpecial() {
    const specialItem = document.getElementById("special-item");
    const randomSpecial = specials[Math.floor(Math.random() * specials.length)];
    specialItem.innerText = `Today's Special: ${randomSpecial}`;
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
});
