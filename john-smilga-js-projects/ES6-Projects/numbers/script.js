const items = [...document.querySelectorAll('.number')];

const updateCount = (e1) => {
    const value = parseInt(e1.dataset.value)
    const increment = Math.ceil(value/1000);

    let initialValue = 0;

    const increaseCount = setInterval(() => {
        initialValue += increment;
        

        if(initialValue > value){
            e1.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }
        e1.textContent = `${initialValue}+`;
    }, 1);
}
items.forEach((item) => {
    updateCount(item);
});
