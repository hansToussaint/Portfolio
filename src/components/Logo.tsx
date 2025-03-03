const Logo: React.FC = () => {
    return <>
    <img src={`${import.meta.env.BASE_URL}Hans.png`} alt="Logo Hans" loading="lazy"
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