import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from './ListStaff.module.scss'

const ListStaff = ({ staff }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
      };
    return (
        <>
            <h2 className={styled.title}>Актеры.</h2>
            <Slider className={styled.listStaff} {...settings}>
                {staff && staff.map((item, i ) => (
                    <div className={styled.staff} key={i}>
                        <div>
                            <img src={item.posterUrl} alt={item.nameRu} />
                        </div>
                        <p>{item.nameRu}</p>
                    </div>
                ))}
            </Slider>
        </>

    );
};

export default ListStaff;