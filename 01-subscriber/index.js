import { from, Subscriber } from "rxjs";

const observable$ = from([1, 2, 3, 4, 5]);

const subscriber = {
  next: value => {
    console.log(value);
  },
  complete: () => {
    console.log("done");
  },
  error: value => {
    console.log(value);
  }
};

class TripleSubscriber extends Subscriber {
  _next(value) {
    console.log(value);
    this.destination.next(value * 3);
  }
}

observable$.subscribe(new TripleSubscriber());
