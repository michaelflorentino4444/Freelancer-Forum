/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreelancer() {
  return {
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
    occupation: OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)],
    rate:
      PRICE_RANGE.min +
      Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min)),
  };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

function getAverageRate(freelancers) {
  if (freelancers.length === 0) return 0;

  const total = freelancers.reduce((sum, freelancer) => {
    return sum + freelancer.rate;
  }, 0);

  return total / freelancers.length;
}

const averages = Array.from({ length: NUM_FREELANCERS }, getAverageRate);

function Freelancer({ name, occupation, rate }) {
  const $li = document.createElement("li");
  $li.innerHTML = `
  <span>${name}</span>
  <span>${occupation}</span>
  <span>$${rate}</span>
  `;
  return $li;
}

function Freelancer() {
  const $ul = document.createElement("ul");

  const $Freelancers = $Freelancers.map(Freelancer);
  $ul.replaceChildren(...$Freelancers);

  return $ul;
}

function averageRate() {
  const $p = document.createElement("li");
  $p.innerHTML = `The average rate is $${averages}.`;
  return $p;
}

function render() {
  const $app = document.querySelector("$app");
  $app.innerHTML = `
  <h1>Freelancer Form</h1>
  <AverageRate></AverageRate>
  <Freelancer></Freelancer>
  `;
  $app.querySelector("AverageRate").replaceWith(averageRate());
  $app.querySelector("Freelancers").replaceWith(Freelancer());
}

render();
