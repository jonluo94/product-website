<template>
    <div class="developer_container">
        <div class="developer_top">
            <div class="developer_top_wrap">
                <div class="developer_top_left">
                    <span class="developer_top_left_content">
                        {{ previewContent.title }}
                    </span>
                    <i class="developer_top_left_border"></i>
                </div>
            </div>
        </div>
        <div class="developer_middle_top">
            <div class="developer_middle_top_wrap">
                <span class="developer_middle_top_top">
                    xibo bags co. ( c-boxbag co.)
                </span>
                <div class="developer_middle_top_bottom">
                    <div class="developer_middle_top_right">
                        <div class="developer_middle_top_right_top">
                            <div class="developer_middle_top_right_top_item">
                                <span
                                    class="developer_middle_top_right_top_content"
                                >
                                  We are the bag manufactuer with nearly 15 years making bags experience .
                        XIBO(C-BOXBAG) is a certified supplier of cusom, trend setting, eco-friendly, reusable bags, as one of the professional bag supplier in China.
                        We create highly customized reusable bag. Designed to your exact Specification. Supporting your unique vision.Choose your own fabric, shape, size, color, design.
                        We can offer the widest variety of option to help our client create fully branded.

                                </span>
                            </div>
                            <div class="developer_middle_top_right_top_item">
                              <img class="developer_middle_top_right_top_content"
                                  src="img/bg/us1.png"
                              />
                            </div>
                            <div class="developer_middle_top_right_top_item">
                              <img class="developer_middle_top_right_top_content"
                                   src="img/bg/us2.png"
                              />
                            </div>
                            <div class="developer_middle_top_right_top_item">
                                <span
                                    class="
                                        developer_middle_top_right_top_content
                                    "
                                >
                                     OEM & ODM are available, strict quality control excellent designs that always seize the market demand, fast delivery and certainly the competitive prices make us won the trust of customers and respected.
                        Established a good reputation, when you cooperate with us, you will own the whole resoruce of the most important bag production base on China.

                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Developer",
    computed: {
        previewContent() {
            return this.$frontmatter.previewContent;
        },
    },
};
</script>

<style lang="stylus">
@import url('../../public/iconfont/iconfont.css');
@import '../styles/adaptation.styl';

.developer_container {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;

    .developer_top {
        width: 100%;
        min-height: 36rem;
        background: url('../assets/blog_bg.png') no-repeat center / cover;

        @media (max-width: 768px) {
            min-height: 28rem;
            background: url('../assets/blog_bg_768.png') no-repeat center / cover;
            justify-content: flex-start;
        }

        @media (max-width: 375px) {
            min-height: 27.2rem;
        }

        .developer_top_wrap {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            margin: 0 auto;
            max-width: $contentWidth;
            padding-top: 10.3rem;
            padding-left: 8rem;

            @media (max-width: 768px) {
                padding: 6.2rem 4.8rem 5.2rem 4.8rem;
            }
            @media (max-width: 576px) {
                padding: 6.2rem 3.6rem 5.2rem 3.6rem;
            }

            @media (max-width: 375px) {
                padding: 8.6rem 1.6rem;
            }

            .developer_top_left {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                .developer_top_left_sub_title {
                    font-size: 24px;
                    font-weight: 400;
                    color: #000000;
                    margin-bottom: 22px;

                    @media (max-width: 576px) {
                        font-size: 1.6rem;
                    }
                }

                .developer_top_left_content {
                    font-size: 48px;
                    font-weight: 400;
                    color: #000000;
                    margin-bottom: 32px;
                    @media (max-width: 576px) {
                        font-size: 36px;
                        margin-bottom: 2.4rem;
                    }
                    @media (max-width: 430px) {
                        font-size: 2.4rem;
                    }
                }

                .developer_top_left_border {
                    width: 64px;
                    height: 4px;
                    background: #7065FF;
                }
            }

            .developer_top_right {
                height: 100%;
                display: flex;
                align-items: flex-end;

                .developer_top_right_img {
                    width: 432px;
                    height: 294px;

                    @media (max-width: 768px) {
                        display: none;
                    }
                }
            }
        }
    }

    .developer_wenchang_wrap {
        width: 100%;
        height: 72px;
        background: #FAFBFF;
        @media (max-width: 888px) {
            box-sizing: border-box;
            padding: 16px 0;
            flex-direction: column;
            height: auto;
        }
        .developer_wenchang_content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            max-width: 1040px;
            height: 100%;
            @media (max-width: 1040px) {
                box-sizing: border-box;
                padding: 0 48px;
            }
            @media (max-width: 888px) {
                flex-direction: column;
                height: auto;
            }
            .wenchang_logo {
                display: flex;
                align-items: center;
                img {
                    width: 38px;
                    height: 36px;
                }
                .title {
                    margin-left: 8px;
                    font-size: 16px;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.65);
                    line-height: 16px;
                }
            }
            .content {
                font-size: 16px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.65);
                line-height: 24px;
                text-align: center;
                @media (max-width: 888px) {
                    margin-top: 12px;
                }
            }
            .go {
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: 400;
                color: #7065FF;
                line-height: 16px;
                cursor: pointer;
                @media (max-width: 888px) {
                    margin-top: 20px;
                }
                .iconfont {
                    margin-left: 8px;
                }
            }
        }
    }

    .developer_middle_top {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 960px) {
            width: 100%;
            padding: 0 4.8rem;
        }

        @media (max-width: 560px) {
            width: 100%;
            justify-content: flex-start;
            padding: 0 4.8rem;
        }

        @media (max-width: 375px) {
            padding: 0 1.6rem;
        }

        .developer_middle_top_wrap {
            display: flex;
            flex-direction: column;
            padding-top: 8rem;

            .developer_middle_top_top {
                font-size: 28px;
                font-weight: 600;
                color: #000000;
                margin-bottom: 47px;
                width: 100%;
                text-align: center;

                @media (max-width: 768px) {
                    margin-bottom: 36px;
                    font-size: 24px;
                }

                @media (max-width: 375px) {
                    font-size: 20px;
                }
            }

            .developer_middle_top_bottom {
                display: flex;
                margin-bottom: 8rem;

                @media (max-width: 768px) {
                    margin-bottom: 4.8rem;
                }

                @media (max-width: 375px) {
                    margin-bottom: 3.6rem;
                }

                .developer_middle_top_left {
                    margin-right: 6rem;
                    width: 421px;
                    height: 404px;

                    @media (max-width: 960px) {
                        display: none;
                    }
                }

                .developer_middle_top_right {
                    max-width: 492px;
                    display: flex;
                    flex-direction: column;

                    @media (max-width: 560px) {
                        width: 100% !important;
                        justify-content: center;
                    }

                    .developer_middle_top_right_top {
                        width: 100%;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        // grid-row-gap: 1.6rem
				        grid-column-gap: 2.4rem

                        @media (max-width: 560px) {
                            grid-template-columns: repeat(1, 1fr);
                        }

                        .developer_middle_top_right_top_item {
                            width: 283px;
                            margin-bottom: 60px;
                            display: flex;
                            flex-direction: column;

                            .developer_middle_top_right_top_title {
                                font-size: 20px;
                                font-weight: 600;
                                color: #000000;
                                line-height: 24px;
                                padding-left: 8px;
                                border-left: 4px solid #8784FF;
                                margin-bottom: 20px;
                            }

                            .developer_middle_top_right_top_content {
                                max-width: 283px;
                                font-size: 14px;
                                font-weight: 400;
                                color: rgba(0, 0, 0, 0.65);
                                line-height: 28px;
                            }
                        }
                    }

                    .developer_middle_top_right_bottom {
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        margin: 0 auto;
                        padding: 0 4.8rem 4.8rem;

                        .developer_middle_top_right_know {
                            font-size: 16px;
                            font-weight: 400;
                            color: #7065FF;
                            line-height: 16px;
                        }

                        .developer_middle_top_right_iconfont {
                            cursor: pointer;
                            width: 16px;
                            height: 16px;
                            margin-left: 8px;
                        }
                    }
                }
            }
        }
    }

    .developer_bottom {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8rem 0 8rem 0;

        @media (max-width: 930px) {
            padding: 4.8rem 0;
        }

        .developer_bottom_top {
            width: 100%;
            max-width: 87rem;
            display: flex;
            justify-content: flex-start;
            text-align: left;

            @media (max-width: 922px) {
                max-width: 44.1rem;
            }

            @media (max-width: 560px) {
                max-width: none;
                padding-left: 9.5rem;
            }

            .developer_bottom_top_left {
                display: inline-bloc;
                font-size: 28px;
                font-weight: 600;
                color: #000000;

                @media (max-width: 768px) {
                    font-size: 24px;
                }
            }

            .developer_bottom_top_right {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                font-weight: 400;
                color: #7065FF;
                position: relative;

                .developer_bottom_top_right_title {
                }

                .developer_bottom_top_right_icon {
                }

                .developer_bottom_top_right_img_container {
                    width: 120px;
                    height: 120px;
                    background: #FFFFFF;
                    border: 1px solid #E8EBF5;
                    position: absolute;
                    bottom: -120px;
                    right: 0;
                    display: none;
                    z-index: 10;
                }

                &:hover {
                    .developer_bottom_top_right_img_container {
                        display: flex;
                    }
                }
            }
        }

        .developer_bottom_bottom {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 4.8rem;

            @media (max-width: 920px) {
                box-sizing: border-box;
                padding: 0 17%;
                justify-content: space-between;
            }

            @media (max-width: 768px) {
                padding: 0 10%;
            }

            @media (max-width: 560px) {
                flex-direction: column;
                padding: 0 4.8rem;
            }

            .developer_bottom_bottom_left, .developer_bottom_bottom_right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .developer_bottom_bottom_right {
                @media (max-width: 768px) {
                    // margin-top 2rem
                }

                @media (max-width: 560px) {
                    margin-top: 1.6em;
                }
            }

            .developer_bottom_bottom_item {
                width: 232px;
                height: 48px;
                border-radius: 24px;
                border: 1px solid #E8EBF5;
                display: flex;
                align-items: center;
                margin-bottom: 48px;
                font-size: 16px;
                font-weight: 400;
                color: #000000;
                overflow: hidden;
                box-sizing: border-box;
                cursor: pointer;
                transition: all 0.2s linear;

                &:hover {
                    color: #7065FF;
                    border-color: #7065FF;
                }

                @media (max-width: 768px) {
                    margin-bottom: 2.4rem;
                }

                .developer_bottom_bottom_item_iconfont {
                    height: 48px;
                    width: 48px;
                    margin-right: 20px;
                    position: relative;
                    left: -1px;
                }

                .developer_bottom_bottom_item_title {
                }

                .developer_bottom_bottom_item_bg {
                }
            }

            ._last_item {
                margin-bottom: 0;
            }

            .developer_bottom_bottom_center {
                width: 360px;
                height: 338px;
                margin: 0 2.5rem;

                @media (max-width: 920px) {
                    display: none;
                }
            }
        }
    }

    // pad
    @media screen and (max-width: $maxPadWidth) and (min-width: $minPadWidth) {
    }

    // mobile
    @media screen and (max-width: $maxMobileWidth) and (min-width: $minMobileWidth) {
    }
}
</style>
