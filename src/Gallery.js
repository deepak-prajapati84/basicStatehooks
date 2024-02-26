export default function Gallery(){
    return(
        <>
            <section>
                <h1>Images is Re-rendering</h1>
                <Img />
                <Img />
                <Img />
            </section>
        </>
    );
}


function Img(){
    return(
        <>
            <img 
                src="https://wallpapers.net/beautiful-water-house-nature/download/400x400.jpg" 
                alt="home" 
            />
        </>
    )
}