import React from 'react';
import styles from './StatusBadge.module.css';

const StatusBadge = ({ status }) => {
  // Map the database string to the specific CSS module class
  const getBadgeStyle = (currentStatus) => {
    switch (currentStatus) {
      case 'Pending Client':
        return styles['badge-pending'];
      case 'Needs Approval':
        return styles['badge-approval'];
      case 'Resolved':
        return styles['badge-resolved'];
      default:
        return styles['badge-default'];
    }
  };

  return (
    // Combine the base pill structure with the dynamic color class
    <span className={`${styles.badge} ${getBadgeStyle(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
