const url =
    'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

// Initial Setup
// select form, input, results
const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

// listen for submit events from the form
formDOM.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = inputDOM.value;

    //if empty value, display error
    if (!value) {
        resultsDOM.innerHTML = '<div class="error">please enter a valid search term</div>';
        return;
    }
    // create fetchPages()
    // pass valid input value into the fetchPages()
    fetchPages(value);
});

// Fetch Pages

const fetchPages = async (searchValue) => {
    // display loading while fetching
    resultsDOM.innerHTML = '<div class="loading"></div>';
    try {
        // construct dynamic url
        const response = await fetch(`${url}${searchValue}`); // Bob Marley
        const data = await response.json();
        const results = data.query.search;
        //console.log(results)

        if (results.length < 1) {
            // display error no items
            resultsDOM.innerHTML = '<div class="error">no matching results. Please try again.</div>';
            return;
        }
        // create renderResults()
        // pass valid results into renderResults()
        renderResults(results);
    } catch (error) {
        // display if error
        resultsDOM.innerHTML = '<div class="error">there was an error...</div>';
        return;
    }
}; // end const fetchPages

// Render Results
const renderResults = (list) => {
    //console.log(list)
    // iterate over the list
    const cardsList = list.map((item) => {
        // destructuring - pull out title, snippet, pageid
        const { title, snippet, pageid } = item;
        //setup a card
        return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
        <h4>${title}</h4>
        <p>
          ${snippet}
        </p>
      </a>`;
    }).join("");
    // set results with div.articles and list inside
    resultsDOM.innerHTML = `<div class="articles">
    ${cardsList}
    </div>`;

}; // end const renderResults