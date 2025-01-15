const faturamentoMensalSP = 67836.43
const faturamentoMensalRJ = 36678.66
const faturamentoMensalMG = 29229.88
const faturamentoMensalES = 27165.48
const faturamentoMensalOutros = 19849.53

const faturamentoTotal = faturamentoMensalSP + faturamentoMensalRJ + 
    faturamentoMensalMG + faturamentoMensalES + faturamentoMensalOutros

const getPercentualDoFaturamento = ({faturamentoTotal, faturamento}: {
    faturamentoTotal: number, faturamento: number
}) => {
    return (faturamento / faturamentoTotal) * 100
}

console.log(`Percentual de representação do faturamento de SP: ${getPercentualDoFaturamento({faturamentoTotal, faturamento: faturamentoMensalSP}).toFixed(2)}%`);
console.log(`Percentual de representação do faturamento de RJ: ${getPercentualDoFaturamento({faturamentoTotal, faturamento: faturamentoMensalRJ}).toFixed(2)}%`);
console.log(`Percentual de representação do faturamento de MG: ${getPercentualDoFaturamento({faturamentoTotal, faturamento: faturamentoMensalMG}).toFixed(2)}%`);
console.log(`Percentual de representação do faturamento de ES: ${getPercentualDoFaturamento({faturamentoTotal, faturamento: faturamentoMensalES}).toFixed(2)}%`);
console.log(`Percentual de representação do faturamento de Outros: ${getPercentualDoFaturamento({faturamentoTotal, faturamento: faturamentoMensalOutros}).toFixed(2)}%`);