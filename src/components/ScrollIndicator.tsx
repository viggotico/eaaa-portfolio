import scrollIntoView from 'scroll-into-view-if-needed';
import style from './ScrollIndicator.module.css';

export interface ScrollIndicatorProps {
    id: string;
    text?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const ScrollIndicator = ({ text, onClick }: Omit<ScrollIndicatorProps, 'id'>) => {
    return <div className={style.scrollIndicatorContainer} onClick={onClick}>
        <span>{text}</span>
        <div className={style.scrollIndicator}>
            <div className={style.scrollIndicatorItem}></div>
            <div className={style.scrollIndicatorItem}></div>
        </div>
    </div>;
}

export const ScrollIndicatorButton = ({ id, text }: Omit<ScrollIndicatorProps, 'onClick'>) => {
  const scrollToAbout = () => {
    const el = document.getElementById(id);
    if (!el) return;
    scrollIntoView(el, {
      scrollMode: 'if-needed',
      behavior: 'smooth',
    });
  }

  return <ScrollIndicator text={text} onClick={scrollToAbout} />;
}