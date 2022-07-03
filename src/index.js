const Chains = {
  polkadot: "polkadot",
  kusama: "kusama",
  statemine: "statemine",
  karura: "karura",
  acala: "acala",
  khala: "khala",
  basilisk: "basilisk",
  kabocha: "kabocha",
  bifrost: "bifrost",
  kintsugi: "kintsugi",
  westend: "westend",
  westmint: "westmint",
  statemint: "statemint",
  interlay: "interlay",
  crust: "crust",
};

const identityChainMap = Object.freeze({
  [Chains.kintsugi]: [Chains.kusama],
  [Chains.statemine]: [Chains.kusama],
  [Chains.karura]: [Chains.kusama],
  [Chains.interlay]: [Chains.polkadot],
  [Chains.acala]: [Chains.polkadot],
  [Chains.crust]: [Chains.crust],
  [Chains.westmint]: [Chains.westend],
});

const ChainSS58Format = Object.freeze({
  [Chains.polkadot]: 0,
  [Chains.kusama]: 2,
  [Chains.statemine]: 2,
  [Chains.karura]: 8,
  [Chains.khala]: 30,
  [Chains.bifrost]: 6,
  [Chains.kintsugi]: 2092,
  [Chains.westend]: 42,
  [Chains.crust]: 66,
});

const MOBILE_SIZE = 900;

const ChainSymbols = {
  polkadot: {
    symbol: "DOT",
    decimals: 10,
  },
  kusama: {
    symbol: "KSM",
    decimals: 12,
  },
  statemine: {
    symbol: "KSM",
    decimals: 12,
  },
  westend: {
    symbol: "WND",
    decimals: 12,
  },
  westmint: {
    symbol: "WND",
    decimals: 12,
  },
};

module.exports = {
  Chains,
  ChainSymbols,
  ChainSS58Format,
  MOBILE_SIZE,
  identityChainMap,
}
