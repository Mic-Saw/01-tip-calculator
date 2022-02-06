const bill = document.querySelector('.bill')

const percent = document.querySelectorAll('.percent');

const custom = document.querySelector('.custom');

const people = document.querySelector('.people');
const zero = document.querySelector('.zero');



const amount = document.querySelector('.amount > .value');
const total = document.querySelector('.total > .value');

const btn = document.querySelector('button');


let b = 0,
    pr = 0,
    pe = 1;

bill.addEventListener('input', e => {
    b = +e.target.value;
    amount.textContent = `$${(pr*b / pe).toFixed(2)}`;
    total.textContent = `$${((1+pr)*b / pe).toFixed(2)}`;
});

percent.forEach(p => {
    p.addEventListener('click', e => {
        percent.forEach(a => a.classList.remove('clicked'));

        pr = Number.parseInt(e.target.textContent) * 0.01;
        amount.textContent = `$${(pr*b / pe).toFixed(2)}`;
        total.textContent = `$${((1+pr)*b / pe).toFixed(2)}`;
        if (!e.target.classList.contains('custom')) e.target.classList.add('clicked');

    });
});

custom.addEventListener('input', (e) => {
    pr = Number.parseInt(e.target.value) * 0.01;
    amount.textContent = `$${(pr*b / pe).toFixed(2)}`;
    total.textContent = `$${((1+pr)*b / pe).toFixed(2)}`;
});

people.addEventListener('input', e => {
    pe = +e.target.value;

    if (+e.target.value === 0) {
        zero.classList.remove('none');
        amount.textContent = `$0.00`;
        total.textContent = `$0.00`;
    } else {
        zero.classList.add('none');
        amount.textContent = `$${(pr*b / pe).toFixed(2)}`;
        total.textContent = `$${((1+pr)*b / pe).toFixed(2)}`;
    };
});


btn.addEventListener('click', () => {
    bill.value = 0;
    people.value = 0;
    amount.textContent = `$0.00`;
    total.textContent = `$0.00`;
});

console.log(zero.textContent)