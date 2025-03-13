import Image from "next/image";

const BackgroundImage = ({src}) => {
    return ( 
        <div className="background-img-container">
            <Image 
            src={src} 
            alt="background-image" 
            fill 
            className="object-cover object-center opacity-60" 
            />
        </div> 
    )
}

export default BackgroundImage