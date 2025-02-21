const Logo: React.FC = () => {
    return <>
    {/* <img src="/logo.png" alt="Logo Grenier"  */}
    <img src="/Hans.png" alt="Logo Grenier" 
      style={{
        display: "block",
        // width: "13rem",
        height: "4rem",
        objectFit:"cover",
        objectPosition: "center",
      }} />
    </>
}

export default Logo;