import styles from './Row.module.css';

interface RowProps {
    children: React.ReactNode;
    width?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const Row = ({ children, width, className, style } : RowProps) => {
    return <div className={[styles.row, className].join(' ')} style={{ width: width, ...style }}>
        {children}
    </div>;
}