export default function NavIcon({iconName, iconType = 'default', onClick, coming}) {
    if (iconType == 'logo') {
        return (
            <i className={'navIcon bx bxl-' + iconName + (coming ? ' coming' : '')} id={iconName} onClick={onClick} title={coming ? 'Próximamente' : ''}></i>
        )
    } else if (iconType == 'solid') {
        return (
            <i className={'navIcon bx bxs-' + iconName + (coming ? ' coming' : '')} id={iconName} onClick={onClick} title={coming ? 'Próximamente' : ''}></i>
        )
    } else {
        return (
            <i className={'navIcon bx bx-' + iconName + (coming ? ' coming' : '')} id={iconName} onClick={onClick} title={coming ? 'Próximamente' : ''}></i>
        )
    }
}