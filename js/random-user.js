const randomBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => loadBuddies(data))
}
randomBuddies();
const loadBuddies = buddies => {
    const ul = document.getElementById('buddyList');
    const buddiesList = buddies.results;
        for (const buddy of buddiesList) {
            const li = document.createElement('li');
            li.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Gender: ${buddy.gender} Email: ${buddy.email}`;
            ul.appendChild(li);
        }
}