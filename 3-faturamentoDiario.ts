import billings from './dados.json';

type billingData = {
    dia: number;
    valor: number
} 

const getLessbillings = (billings: billingData[]) => {
    let lessBilling = Infinity

    billings.forEach(billing => {
        if(billing.valor < lessBilling) lessBilling = billing.valor
    })

    return lessBilling
}

const getBiggestbillings = (billings: billingData[]) => {
    let biggestBilling = 0

    billings.forEach(billing => {
        if(billing.valor > biggestBilling) biggestBilling = billing.valor
    })

    return biggestBilling
}

const biggestThenAverage = (billings:  billingData[]) => {
    const billingsAverage = billings.reduce((acc, curr) => acc + curr.valor, 0) / billings.length;
    const billingsBiggerThenAverage = billings.filter(billing => billing.valor > billingsAverage);
    return billingsBiggerThenAverage.length;
}

console.log(`O menor valor de faturamento diário é: ${getLessbillings(billings)}`);
console.log(`O maior valor de faturamento diário é: ${getBiggestbillings(billings)}`);
console.log(`A quantidade de valores de faturamento que estão acima da média é: ${biggestThenAverage(billings)}`);

