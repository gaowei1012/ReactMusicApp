import React, {Component} from 'react';
import Swiper from 'swiper';
import {getCarousel, getNewAlbum} from '../../api/recommend';
import {CODE_SUCCESS} from '../../api/config';
 
import './recommend.styl';
import 'swiper/dist/css/swiper.css';


class Reacommend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sliderList: [],
            newAlbums: []
        };
    };

    componentWillMount() {
        getCarousel().then((res) => {
            console.log('获取轮播图');
            if (res) {
                console.log(res);
                if (res.code === CODE_SUCCESS) {
                    this.setState({
                        sliderList: res.data.slider
                    }, () => {
                        if (!this.sliderSwiper) {
                            // 初始化轮播图
                            this.sliderSwiper = new Swiper(".slider-container", {
                                loop: true,
                                autoplay: 3000,
                                autoplayDisableOnInteraction: false,
                                pagination: '.swiper-pagination'
                            });
                        }
                    });
                }
            }
        })
    }
    toLink(linkUrl) {
        // 使用闭包把变量变为局部变量使用
        return () => {
            window.location.href = linkUrl;
        };
    };

    render() {
        return (
            <div className="music-recommend">
                <div className="slider-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.sliderList.map(slider => {
                                return (
                                    <div className="swiper-slide" key={slider.id}>
                                        <a className="slider-nav" onClick={this.toLink(slider.linkUrl)}>
                                            <img src={slider.picUrl} width="100%" height="100%" alt="推荐"/>
                                        </a>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}

export default Reacommend;