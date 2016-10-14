// const fact = (a) => a == 0 ? 1 : fact(a - 1) * a;

const compose = (f, g) => (k) => ((n) => f(g(n)))(k);
const add1 = (a) => a + 10;
const sub1 = (a) => a - 1;


const error = (n) => {
  throw "error"
};

const improver = (partial) => (a) => a == 0 ? 1 : partial(a - 1) * a;

const fact_improver = (partial) => (n) => n == 0 ? 1 : partial(n - 1) * n;

// Applicative Order Y Combinator
// Z-combinator
// Fixpoint Combinator
const y = ((f) => ((x) => f(((v) => x(x)(v))))(
  (x) => f(((v) => x(x)(v)))
));

var fact = y(fact_improver);

fact = fact_improver(fact);

const result = fact(5);
console.log('result', result);
console.log('compose', compose(add1, sub1)(199));

console.log('error', error);

const f0 = improver(error);
const f1 = improver(f0);
const f2 = improver(f1);
const f6 = improver(improver(improver(improver(improver(improver(f1))))));
console.log('improver f0', f0);
console.log('improver f1', f1(1));
console.log('improver f6', f6(5));
console.log('improver fact', fact(5));
