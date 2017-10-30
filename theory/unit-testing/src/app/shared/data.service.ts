export class DataService {
  getDetails() {
    const resulPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });

    return resulPromise;
  }
}
