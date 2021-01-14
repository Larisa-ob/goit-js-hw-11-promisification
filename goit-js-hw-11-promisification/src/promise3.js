const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        resolve([transaction.id, delay]);
      } else {
        reject([transaction.id, delay]);
      }
    }, delay);
  });
};
const logSuccess = id => {
  console.log(`Transaction ${id[0]} processed in ${id[1]} ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/* Должно работать так */
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
export default makeTransaction([]);
