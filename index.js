function main(data) {
  const weekday = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const d = new Date();
  let day = weekday[d.getDay()];
  const maxA = () => {
    let max = 0;
    data.forEach((element) => {
      if (element.amount > max) {
        max = element.amount;
      }
    });
    return max;
  };

  const higest = maxA();

  const days = document.getElementById('days').children;

  for (var i = 0; i < days.length; i++) {
    const calculation = (data[i].amount / higest) * 100;

    // days[i].lastElementChild.style.background = '#ec755d';
    days[i].lastElementChild.style.height = `${calculation}px`;
    days[i].firstElementChild.style.marginTop = `${110 - calculation}px`;
    days[i].firstElementChild.innerText = data[i].amount;
    console.log(days[i].firstElementChild);
    days[i].lastElementChild.style.width = '30px';
    days[i].lastElementChild.addEventListener('mouseover', (eve) => {
      // days[i].lastElementChild.classList.remove('hidden');
      eve.path[1].firstElementChild.classList.remove('hidden');
    });
    days[i].lastElementChild.addEventListener('mouseleave', (eve) => {
      // days[i].lastElementChild.classList.remove('hidden');
      console.log(eve.path[1].firstElementChild.classList.add('hidden'));
    });

    // console.log(days[i].lastElementChild.classList);
    // console.log(data[i].day === day);
    if (data[i].day === day) {
      days[i].lastElementChild.classList.add('current');
    }
  }
}

const data = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];
main(data);
