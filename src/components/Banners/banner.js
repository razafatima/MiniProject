import bannerdata from '../Banners/bannerdata'
import BannerComponent from "../Banners/banners";

const Banner = () =>{

    return(
        <div>
        {bannerdata.map((banner, index) => (
            <BannerComponent
              key={index}
              image={banner.image}
              title ={banner.title}
              link ={banner.links}
              subText = {banner.subText}
            /> 
        ))}
</div>
    );
}

export default Banner;
