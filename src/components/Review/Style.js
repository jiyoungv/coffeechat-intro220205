import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';
import review_type4_bg from '../../assets/images/review_type4_bg.png';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Reviews = styled.section`
    padding: 160px 0;

    .review-tit {
        margin-bottom: 60px;

        h2 {
            font-size: 32px;
            font-weight: 700;
        }
    }

    .review-list {
        position: relative;
        padding-bottom: calc(80px + 16px);
    }

    .review-list-item {
        overflow: hidden;
        max-width: 529px;
        min-height: 700px;
        margin-bottom: 16px;
        padding: 39px 42px;
        border: 1px solid #2B51F1;
        border-radius: 16px;

        &:last-child {
            margin-bottom: 0;
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

            .review-list-txt {
                color: #fff;
            }
        }

        &.type3 {
            position: absolute;
            top: calc(80px + 16px);
            right: 0;
            border-color: transparent;
            border-radius: 26px;
            background: linear-gradient(305.74deg, #2B50F1 -1.81%, #000000 146.85%, #000000 146.85%);

            .review-list-chip {
                i {
                    background: #fff;
                    color: #1A1F27;
                }
            }

            .review-list-txt {
                color: #fff;
            }            
        }

        &.type4 {
            position: absolute;
            bottom: 0;
            right: 0;            
            border-color: transparent;
            background: url(${review_type4_bg}) center/cover no-repeat;

            .review-list-chip {
                i {
                    background: rgba(43, 81, 241, 0.96);
                }
            }         
        }
    }

    .review-list-chip {
        margin-bottom: 40px;

        i {
            display: inline-block;
            border-radius: 100px;
            padding: 10px 24px;
            background: #2B51F1;
            color: #fff;
            font-size: 20px;
            font-weight: 700;
        }
    }

    .review-list-txt {
        position: relative;
        height: calc(700px - 80px - 92px);
        color: #2B51F1;

        h3 {
            margin-bottom: 40px;            
            font-size: 24px;
            font-weight: 700;          
        }
        
        h6 {
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 20px;
            font-weight: 700;
        }

        p {
            font-size: 24px;
        }
    }    

    .review-btn {
        position: absolute;
        top: 23px;
        right: 0;
    }

    ${mediaTablet} {
        padding: 80px 0;
  
        .review-tit {
            margin-bottom: 40px;

            h2 {
                font-size: 24px;
            }
        }

        .review-list {
            padding-bottom: 0;
        }

        .review-list-item {
            max-width: none;
            min-height: 0;
            padding: 39px;

            &.type3 {
                position: static;
            }

            &.type4 {
                position: static;
            }
        }

        .review-list-chip {
            i {
                font-size: 16px;
                letter-spacing: -0.02em;
            }
        }

        .review-list-txt {
            height: auto;

            h3 {
                margin-bottom: 10px;
                font-size: 18px;
            }

            h6 {
                position: static;
                margin-top: 30px;
                font-size: 18px;
            }

            p {
                font-size: 18px;
            }
        }

        .review-btn {
            position: static;
            margin-top: 40px;
            text-align: center;
        }
    }

    ${mediaMobile} {
        padding: 56px 0;
  
        .review-tit {
            margin-bottom: 24px;

            h2 {
                font-size: 16px;
            }
        }

        .review-list {
            padding-bottom: 0;
        }

        .review-list-item {
            max-width: none;
            min-height: 0;
            padding: 15px;
            border-radius: 8px;

            &.type2 {
                box-shadow: -22px 44px 88px #DDDDDD, -22px 44px 88px #DDDDDD;
            }

            &.type3 {
                position: static;
                border-radius: 8px;
                background: linear-gradient(305.74deg, #2B50F1 -1.81%, #000000 146.85%, #000000 146.85%, #000000 146.85%), #1C339A;
                box-shadow: -22px 44px 88px #DDDDDD, -22px 44px 88px #DDDDDD;
            }

            &.type4 {
                position: static;
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
            height: auto;

            h3 {
                margin-bottom: 10px;
                font-size: 12px;
            }

            h6 {
                position: static;
                margin-top: 20px;
                font-size: 12px;
                font-weight: 400;
            }

            p {
                font-size: 12px;
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