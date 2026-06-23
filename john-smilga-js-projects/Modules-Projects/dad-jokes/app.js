const url = 'https://icanhazdadjoke.com/';

//Select Elements
const btn = document.querySelector('.btn')
const result = document.querySelector('.result');

//listen for click events
btn.addEventListener('click', ()=>{
    // call the fetchDadJoke function
    fetchDadJoke();
});

// FetchDadJoke Function
// create async function
const fetchDadJoke = async () => {
    // Loading
    //set result equal to - 'Loading...'
    result.textContent = 'Loading...';

    // Error Handling
    // try/catch block
    try{
        // setup fetch
    const response = await fetch(url, {
        headers: {
            Accept: 'application/json',
            'User-Agent': 'learning app',
        },
    });
// if the response fails
if(!response.ok){
    throw new Error(' error');
}
// set result.textContent = joke
const data = await response.json();
result.textContent = data.joke;
    } catch(error){
        console.log(error.message);
        // set result equal to - 'There was an error..'
        result.textContent = 'There was an error..';
    }

}; // end const fetchDadJoke
// call the function
fetchDadJoke();


