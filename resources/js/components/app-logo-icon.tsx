import AppLogo from '../assets/logo/logo.png';

export default function AppLogoIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    return <img src={AppLogo} alt="App Logo" {...props} />;
}
