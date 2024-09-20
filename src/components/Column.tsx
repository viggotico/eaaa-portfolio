import styles from './Column.module.css';

interface ColumnProps {
    children: React.ReactNode;
    width?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const Column = ({ children, width, className, style } : ColumnProps) => {
    return <div className={[styles.column, className].join(' ')} style={{ width: width, ...style }}>
        {children}
    </div>;
}