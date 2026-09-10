import React, { useState, useEffect } from 'react';
import DataTable from '../../components/DataTable/DataTable';
import styles from './TransactionDashboard.module.css';

const TransactionDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Proxied to your Express backend via the Vite config
        const response = await fetch('/api/transactions');

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setTransactions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (isLoading) {
    return <div className={styles['loading-state']}>Syncing with ledger...</div>;
  }

  if (error) {
    return (
      <div className={styles['error-state']}>
        <p>Failed to load transactions: {error}</p>
        <button onClick={() => window.location.reload()} className={styles['retry-btn']}>
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <section className={styles['dashboard-container']}>
      <header className={styles['dashboard-header']}>
        <h2>Action Required</h2>
        <p>Review and resolve flagged expenses with your accounting team.</p>
      </header>

      <DataTable transactions={transactions} />
    </section>
  );
};

export default TransactionDashboard;
