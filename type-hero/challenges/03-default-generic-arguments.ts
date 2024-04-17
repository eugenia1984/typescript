type TData = string | number;

type ApiRequest<TData, TMethod = 'GET'> = {
	data: TData;
	method: TMethod;
};

type TSConfig <T = {strict: true}> = T;

type test_ApiRequest_explicitPost =  { data: string; method: 'POST' };
type test_ApiRequest_implicitGet = { data: number; method: 'GET' };

type test_TSConfig_default = { strict: true };
type test_TSConfig_true = { strict: true };
type test_TSConfig_false =  { strict: false };
type test_TSConfig_boolean = { strict: boolean };
