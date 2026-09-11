import React from 'react';
import styles from './DataTable.module.css';
import StatusBadge from '../StatusBadge/StatusBadge';

const DataTable = ({ transactions = [] }) => {
  if (transactions.length === 0) {
    return <p className={styles['empty-state']}>No pending transactions require your review.</p>;
  }

  return (
    <div className={styles['table-responsive']}>
      <table className={styles['data-table']}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx._id} className={styles['table-row']}>
              <td>{new Date(tx.date).toLocaleDateString()}</td>
              <td>{tx.vendor}</td>
              <td>${tx.amount.toFixed(2)}</td>
              <td>
                <StatusBadge status={tx.status} />
              </td>
              <td>
                <button className={styles['action-btn']}>Review</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
