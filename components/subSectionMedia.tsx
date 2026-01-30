export default function SubSectionMedia({children, styles, className = ''}: {children: React.ReactNode, styles?: React.CSSProperties, className?: string}) {
    return(
        <div className={`subSectionBodyMediaWrapper ${className}`} style={styles}>
          <div className="subSectionBodyMedia">
            {children}
          </div>
        </div>
    );
}