type AllowString<T extends string> = T
type AllowNumber<T extends number> = T;
type AllowFunction = (a : number) => void
type CreateLogger<CreateLoggerArgs extends AllowFunction> = {
	log : CreateLoggerArgs;
	exit : () => void
}

// @ts-expect-error invalid input
type error_AllowStringNumber = AllowString<number>;

// @ts-expect-error invalid input
type error_AllowStringBoolean = AllowString<boolean>;

// @ts-expect-error invalid input
type error_AllowNumberString = AllowNumber<string>;

type test_AllowNumberNumber = Expect<Equal<
  AllowNumber<number>,
  number
>>;

// @ts-expect-error invalid input
type error_AllowNumberBoolean = AllowNumber<boolean>;

type test_CreateLogger = Expect<Equal<
  CreateLogger<(a: number) => void>,
  {
    log: (a: number) => void;
    exit: () => void;
  }
>>;

// @ts-expect-error invalid input
type error_CreateLoggerString = CreateLogger<string>;

type error_CreateLoggerStringArg =
  // @ts-expect-error invalid input
  CreateLogger<(a: string) => void>;

type error_CreateLoggerTwoArgs =
  // @ts-expect-error invalid input
  CreateLogger<(a: number, b: number) => void>;
