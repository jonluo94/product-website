<template>
    <div class="footer_content_wrapper">
        <div class="footer_content_top">
            <div class="top_content">
                <div class="content">
                    <div class="content_left">
                        <div class="left_img">
                            <img
                                src="/logo_white.png"
                                alt=""
                                class="img"
                            />
                        </div>
                        <p class="img_desc">
                          the bag manufactuer with nearly 15 years making bags experience, trend setting, eco-friendly, reusable bags
                        </p>
                    </div>
                    <div class="content_right">
                        <div class="line"></div>
                        <div class="contact">
                            <span class="contact_title">Contacts</span>
                            <span class="email"><AcceptEmail />cboxbag2005@vip.163.com</span>
                            <span class="email"><PhoneAndroid />8613710740039</span>
                            <span class="email"><PhoneAndroid />8613928886938</span>
                        </div>
                        <div class="focus">
                            <span class="focus_title">Follow Us</span>
                          <div>
                            <a href="https://web.whatsapp.com/"
                               target="_blank"
                               rel="noopener noreferrer">
                              <LogosWhatsappIcon style="font-size: 4.0rem;"/>
                            </a>
                            <a href="https://wx.qq.com"
                               target="_blank"
                               rel="noopener noreferrer">
                              <Weixin style="font-size: 4.0rem;"/>
                            </a>
                          </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_content_bottom">
            <div class="bottom_content">
              <span class="police_content"></span>
              <span class="copyright_content">{{`Copyright ©2022-${new Date().getFullYear()} XIBO(C-BOXBAG)` }}</span>
              <span class="police_content"></span>
            </div>
        </div>
    </div>
</template>

<script>
import LogosFacebook from "../global-components/LogosFacebook";
import LogosTwitter from "../global-components/LogosTwitter";
import LogosLinkedinIcon from "../global-components/LogosLinkedinIcon";
import LogosWhatsappIcon from "../global-components/LogosWhatsappIcon";
import Weixin from "../global-components/Weixin";
import AcceptEmail from "../global-components/AcceptEmail";
import PhoneAndroid from "../global-components/PhoneAndroid";
export default {
  name: "Footer",
  data() {
    return {
    };
  },
  components: {
    LogosFacebook,
    LogosTwitter,
    LogosLinkedinIcon,
    AcceptEmail,
    PhoneAndroid,
    LogosWhatsappIcon,
    Weixin,
  },

};
</script>

<style lang="stylus">
.footer_content_wrapper {
    width: 100%;
    height: 37.4rem;
    flex: 0 0 37.4rem;

    @media (max-width: 768px) {
        margin-top: 0;
    }

    .footer_content_top {
        width: 100%;
        height: 31.4rem;
        background: $footerTopColor;

        @media (max-width: 768px) {
            height: auto;
        }
    }

    .top_content {
        margin: 0 auto;
        padding: 6rem 2.4rem;
        max-width: $footerTopContentWidth;
        height: 19.4rem;

        @media (max-width: 768px) {
            padding: 3.6rem 0;
            height: auto;
        }

        .content {
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            margin: 0 auto;
            width: 100%;
            height: 100%;

            @media (max-width: 768px) {
                flex-direction: column;
                align-items: center;
            }

            .content_left {
                .left_img {
                    height: 6rem;

                    @media (max-width: 768px) {
                        display: flex;
                        justify-content: center;
                    }

                    .img {
                        height: 6rem;
                    }
                }

                .img_desc {
                    margin-top: 2.4rem;
                    line-height: 2.4rem;
                    font-size: $fontSize16;
                    font-weight: $fontWeight400;
                    color: $whiteColorOpacity1;
                    box-sizing: border-box;
                    padding-right: 1.6rem;

                    @media (max-width: 768px) {
                        padding-right: 0;
                        max-width: 22rem;
                        text-align: center;
                    }
                }
            }

            .content_right {
                display: flex;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                -webkit-justify-content: space-between;
                justify-content: space-between;

                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-top: 3.6rem;
                    text-align: center;
                }

                .line {
                    width: 0.1rem;
                    height: 19.5rem;
                    background: #515071;

                    @media (max-width: 768px) {
                        display: none;
                    }
                }

                .contact {
                    display: flex;
                    flex-direction: column;
                    -webkit-box-orient: vertical;
                    -ms-flex-direction: column;
                    -webkit-flex-direction: column;
                    margin: 0 2rem;

                    .contact_title {
                        height: 2.4rem;
                        line-height: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: $whiteColor;
                    }

                    .email {
                        margin: 1.0rem 0;
                        height: 2.4rem;
                        line-height: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight400;
                        color: $whiteColorOpacity;

                        &:hover {
                            color: $whiteColor;
                            cursor: pointer;
                        }
                    }

                    .official {
                        height: 2.4rem;
                        line-height: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight400;
                        color: $whiteColorOpacity;

                        &:hover {
                            color: $whiteColor;
                        }
                    }
                }

                .focus {
                    display: flex;
                    flex-direction: column;

                    @media (max-width: 768px) {
                        margin-top: 4.4rem;
                    }

                    .focus_title {
                        height: 2.4rem;
                        line-height: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: $whiteColor;
                    }

                    .qr_code {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 2.4rem 0 0.8rem;
                        width: 11.4rem;
                        height: 11.4rem;

                        .qr_code_img {
                            width: 11.4rem;
                            height: 11.4rem;
                            vertical-align: middle;
                        }
                    }

                    .desc {
                        height: 2.4rem;
                        line-height: 2.4rem;
                        font-size: $fontSize12;
                        font-weight: $fontWeight400;
                        color: $whiteColorOpacity;
                    }
                }
            }
        }
    }

    .footer_content_bottom {
        width: 100%;
        height: 6rem;
        background: $footerBottomColor;
        @media (max-width 1200px) {
            box-sizing: border-box;
            padding-left: 4.8rem;
            padding-right: 4.8rem;
        }
    }

    font-size: $fontSize14;
    font-weight: $fontWeight400;

    .bottom_content {
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;
        @media (max-width: 420px) {
            text-align: center;
        }

        .copyright_content {
            color: $whiteColorOpacity;
        }

        a {
            color: $whiteColorOpacity;
            cursor: pointer;
        }
    }
}

@media (max-width: 730px) {
    .footer_content_wrapper {
        .footer_content_bottom {
            height: auto;
            line-height: 3rem;

            .bottom_content {
                flex-direction: column;
            }
        }
    }
}
</style>
