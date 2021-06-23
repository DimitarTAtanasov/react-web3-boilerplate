import * as React from 'react';

interface ITransactionDetailsProps {
    transactionHash: string;
  }

function TransactionDetails(prop: ITransactionDetailsProps) {
    const transactionLink = `https://ropsten.etherscan.io/tx/${prop.transactionHash}`
    return (
        <div>
            <span>Transaction in progres:</span>
            <a href={transactionLink} target="_blank">Check your transaction</a>
        </div>
    )
  }

  export default TransactionDetails;