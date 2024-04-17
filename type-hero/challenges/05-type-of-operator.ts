const height = 500;
const width = 700;

type Width = typeof width;
type Margin = typeof margin;
type Data = (typeof d3ChartConfig)["data"];
type YScale = (typeof d3ChartConfig)["yScale"];

type D3ChartConfig = typeof d3ChartConfig;

const margin = {
  top: 20,
  right: 30,
  bottom: 40,
  left: 50,
};

const d3ChartConfig = {
  width,
  height,
  margin,
  data: [
    { category: "A", value: 30 },
    { category: "B", value: 45 },
    { category: "C", value: 60 },
    { category: "D", value: 25 },
    { category: "E", value: 50 },
  ],
  xScale: {
    type: "band",
    domain: [0, 100],
    range: [0, width - margin.right - margin.left],
  },
  yScale: {
    type: "linear",
    domain: [0, 100],
    range: [height - margin.bottom, margin.top],
  },
  xAxis: {
    label: "Categories",
    tickSize: 5,
  },
  yAxis: {
    label: "Values",
    tickSize: 5,
  },
  bar: {
    fill: "rebeccapurple",
  },
};

interface Idata {
  category: string;
  value: number;
}

interface IYScale {
  type: string;
  domain: number[];
  range: number[];
}

interface ID3ChartConfig {
  width: number;
  height: number;
  margin: Margin;
  data: Data;
  xScale: {
    type: string;
    domain: number[];
    range: number[];
  };
  yScale: {
    type: string;
    domain: number[];
    range: number[];
  };
  xAxis: {
    label: string;
    tickSize: number;
  };
  yAxis: {
    label: string;
    tickSize: number;
  };
  bar: {
    fill: string;
  };
}
