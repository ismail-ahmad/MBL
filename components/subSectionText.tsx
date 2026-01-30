export default function SubSectionText({children, styles, className = ''}: {children: React.ReactNode, styles?: React.CSSProperties, className?: string}) {
    return(
        <div className={`subSectionBodyTextWrapper ${className}`} style={styles}>
          {children}
        </div>
    );
}