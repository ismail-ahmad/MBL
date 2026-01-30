import type { CSSProperties } from "react";

export default function SubSection({children, heading, styles, h = 1, className = '', subSectionClassName = ''}: {children: React.ReactNode, heading: string, styles?: CSSProperties, h?: 1 | 2 | 3 | 4 | 5 | 6, className?: string, subSectionClassName?: string}) {
  const HeadingTag = `h${h}` as `h${1 | 2 | 3 | 4 | 5 | 6}`;
    return(
        <section className={`subSection ${subSectionClassName}`}>
      <div className='subSectionHeadingWrapper'>
        <HeadingTag className='subSectionHeading'>{heading}</HeadingTag>
        <div className='seperator'></div>
      </div>
      <div className={`subSectionBodyWrapper ${className}`} style={styles}>
        {children}
      </div>
    </section>
    );
}