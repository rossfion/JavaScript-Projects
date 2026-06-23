const container = document.querySelector('.container');

const displayFollowers = (followers) => {
    const newFollowers = followers.map((person) => {
        // destructuring
        const { avatar_url, login, html_url } = person;
        // display within the container div
        return `<article class="card">
        <img src="${avatar_url}" alt="person" />
        <h4>${login}</h4>
        <a href="${html_url}" class="btn">view profile</a>        
        </article>`;
    }).join("");
    container.innerHTML = newFollowers;
}; // const display


export default displayFollowers;