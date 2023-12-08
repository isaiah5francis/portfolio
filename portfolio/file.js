document.addEventListener("DOMContentLoaded", function () {
    //Footer
    const footer = document.getElementById('my-footer');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `Copyright © ${currentYear} Your Name`;

    //Alert Button
    const alertButton = document.getElementById('btn-alert');
    alertButton.addEventListener('click', function () {
        alert('Hello world!');
    });

    //Hover Button
    const hoverButton = document.getElementById('btn-hover');
    hoverButton.addEventListener('mouseover', function () {
        hoverButton.innerText = 'New button label';
    });

    hoverButton.addEventListener('mouseleave', function () {
        hoverButton.innerText = 'Default button label';
    });

    //Incrementing Button
    let count = 1;
    const incrementButton = document.getElementById('btn-counter');
    const counterText = document.getElementById('txt-counter');
    incrementButton.addEventListener('click', function () {
        count++;
        counterText.innerHTML = `Number: ${count}`;

        //Check if the number is even or odd and update the class
        if (count % 2 === 0) {
            counterText.classList.remove('odd');
            counterText.classList.add('even');
        } else {
            counterText.classList.remove('even');
            counterText.classList.add('odd');
        }
    });

    //Loops
    const numbersList = document.getElementById('numbers');
    for (let i = 1; i <= 100; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
        numbersList.appendChild(listItem);
    }
});
