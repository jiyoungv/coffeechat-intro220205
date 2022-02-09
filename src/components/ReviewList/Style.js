import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';
import review_type3_bg from '../../assets/images/review_type3_bg.png';
import review_type3_tablet_bg from '../../assets/images/review_type3_tablet_bg.png';
import review_type3_mobile_bg from '../../assets/images/review_type3_mobile_bg.png';

const { mediaTablet, mediaMobile } = mediaQuery;

export const ReviewLists = styled.article`
    position: relative;
    
    .review-swiper {
        overflow: visible;
        margin: 0;
    }

    .review-swiper-slide {
    }

    .review-list-item {
        opacity: 0;
        transform: translateY(30px);        
        position: relative;
        width: 350px;
        height: 500px;
        padding: 39px 48px;
        border: 1px solid #2B51F1;
        border-radius: 16px;
        transition-property: opacity, transform;
        transition-duration: 0.5s;        

        &.on {
            opacity: 1;
            transform: translateY(0);
        }

        &.type1 {
            filter: drop-shadow(-22px 44px 88px #DDDDDD) drop-shadow(-22px 44px 88px #DDDDDD);
        }

        &.type2 {
            border-color: transparent;
            background: #2B51F1;

            .review-list-chip {
                i {
                    background: #fff;
                    color: #1A1F27;
                }
            }

            .review-list-txt, .review-list-foot {
                color: #fff;
            }
        }

        &.type3 {
            border-color: transparent;
            background: url(${review_type3_bg}) center/cover no-repeat;

            .review-list-chip {
                i {
                    background: rgba(43, 81, 241, 0.96);
                }
            }         
        }

        &.type4 {
            border-color: transparent;
            border-radius: 26px;
            background: linear-gradient(305.74deg, #2B50F1 -1.81%, #000000 146.85%, #000000 146.85%);

            .review-list-chip {
                i {
                    background: #fff;
                    color: #1A1F27;
                }
            }

            .review-list-txt, .review-list-foot {
                color: #fff;
            }            
        }
    }

    .review-list-item-inner {
        position: relative;
        height: 100%;
    }

    .review-list-chip {
        margin-bottom: 32px;

        i {
            display: inline-block;
            border-radius: 100px;
            padding: 4px 16px;
            background: #2B51F1;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: -0.02em;
        }
    }

    .review-list-txt {
        color: #2B51F1;

        h3 {
            margin-bottom: 16px;            
            font-size: 18px;
            font-weight: 700;
        }
        
        p {
            font-size: 14px;
        }
    }

    .review-list-foot {
        position: absolute;
        bottom: 0;
        left: 0;
        color: #2B51F1;

        h6 {
            font-size: 14px;
            font-weight: 700;
        }
    }

    ${mediaTablet} {
        .review-list-item {
            width: auto;
            height: auto;
            margin-bottom: 16px;
            padding: 39px;

            &:last-child {
                margin-bottom: 0;
            }

            &.type3 {
                background-image: url(${review_type3_tablet_bg});
            }
        }

        .review-list-chip {
            margin-bottom: 30px;

            i {
                font-size: 14px;
            }
        }

        .review-list-txt {
            h3 {
                margin-bottom: 10px;
            }
        }

        .review-list-foot {
            position: static;
            margin-top: 30px;
        }

        .review-btn {
            position: static;
            margin-top: 40px;
            text-align: center;
        }
    }

    ${mediaMobile} {
        .review-list-item {            
            z-index: 2;
            width: auto;
            height: auto;
            margin-bottom: 16px;
            padding: 23px;
            border-radius: 8px;

            &:last-child {
                margin-bottom: 0;
            }

            &.type2 {
                z-index: 1;
                box-shadow: -22px 44px 88px #DDDDDD, -22px 44px 88px #DDDDDD;
            }

            &.type3 {
                background-image: url(${review_type3_mobile_bg});
            }

            &.type4 {
                border-radius: 8px;
                background: linear-gradient(305.74deg, #2B50F1 -1.81%, #000000 146.85%, #000000 146.85%, #000000 146.85%), #2B51F1;
            }
        }

        .review-list-chip {
            margin-bottom: 20px;

            i {
                padding: 8px 16px;
                font-size: 12px;
            }
        }

        .review-list-txt {
            h3 {
                margin-bottom: 10px;
                font-size: 14px;
            }
        }

        .review-list-foot {
            position: static;
            margin-top: 20px;

            h6 {
                font-size: 13px;
            }
        }

        .review-btn {
            position: static;
            margin-top: 24px;
            text-align: center;

            a {
                border-color: #2B51F1;
                color: #2B51F1;
            }
        }       
    }
`;