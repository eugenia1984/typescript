const identity = <T>(value: T) => value;

const mapArray = <T, K>(arr: T[], fn: (item: T, index?: number) => K) => arr.map(fn);

const expect = <T>(a: T) => ({
  toEqual: (b: T) => a === b
});

const identity_string = identity("this is a string");
expect(identity_string).toEqual("this is a string");
type test_identity_string = Expect<Equal<
  typeof identity_string,
  "this is a string"
>>;

const identity_number = identity(123.45);
expect(identity_number).toEqual(123.45);
type test_identity_number = Expect<Equal<
  typeof identity_number,
  123.45
>>;

const identity_boolean = identity(false);
expect(identity_boolean).toEqual(false);
type test_identity_boolean = Expect<Equal<
  typeof identity_boolean,
  false
>>;
