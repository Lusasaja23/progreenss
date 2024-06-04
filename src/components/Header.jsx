import Logo from "./header/Logo"
import NavIcon from "./header/NavIcon"

export default function Header({toggleMute, mute, toggleInfoDialog}) {
    const handleSound = () => {
        toggleMute(mute);
    }

    const handleShowInfoDialog = () => {
        toggleInfoDialog(true);
    }

    return (
        <header>
            <NavIcon iconName="palette" coming={true}></NavIcon>
            <a href="https://github.com/Lusasaja23/progreenss" target="_blank" rel="noopener noreferrer">
                <NavIcon iconName='github' iconType='logo'></NavIcon>
            </a>
            <Logo></Logo>
            <NavIcon iconName='info-circle' onClick={handleShowInfoDialog}></NavIcon>
            <NavIcon iconName={mute ? 'volume' : 'volume-full'} onClick={handleSound}></NavIcon>
        </header>
    )
}