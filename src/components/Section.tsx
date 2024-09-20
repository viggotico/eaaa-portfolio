import { Animator, ScrollPage, Sticky } from 'react-scroll-motion';
import style from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    refObj?: React.RefObject<HTMLElement>;
    margin?: string;
    id?: string;
    scrollPage?: boolean;
}

export const Section = ({ children, refObj, id, margin, scrollPage }: SectionProps) => {
    const section = <section
        ref={refObj}
        id={id}
        className={style.section}
        style={{ margin: margin }}
    >
        {children}
    </section>;
    return (scrollPage ?? true) ?
        <ScrollPage style={{ width: '100vw' }}>
            <Animator animation={Sticky()}>
                {section}
            </Animator>
        </ScrollPage> :
        <>{section}</>;
}