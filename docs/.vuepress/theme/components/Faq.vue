<template>
  <div class="community_container">
    <div class="community_top">
      <div class="community_top_wrap">
        <div class="community_top_left">
          <span class="community_top_left_sub_title">
                        FAQ
          </span>
          <i class="community_top_left_border"></i>
        </div>
      </div>
    </div>
    <div class="community_bottom">
      <div class="community_bottom_wrap">
        <div class="community_bottom_content_article_container" v-show="activeTab === 1" v-if="$frontmatter">
          <div class="community_bottom_content_article_item"
               @click="handleArticleClick(item)"
               v-for="(item, index) in articleList">
            <div class="community_bottom_content_article_item_right">
                            <span class="community_bottom_content_article_item_right_title">
                                {{ item.title }}
                            </span>

            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name : 'Faq',
  data(){
    return {
      total:0,
      currentPage: 1,
    }
  },
  watch:{
    activeTab(){
      this.setTotal();
      this.currentPage = 1;
    },
  },
  computed:{
    activeTab(){
      return 1;
    },
    articleList(){
      if(this.$frontmatter && this.$frontmatter.articles && this.$frontmatter.articles.length > 0 && this.activeTab === 1){
        let articles = JSON.parse(JSON.stringify(this.$frontmatter.articles))
        return articles.splice((this.currentPage - 1) * 6, 6);
      }

    }
  },

  methods : {
    handleTabClick(tab){
      if (this.activeTab !== tab) {
        this.$store.commit('activeTab',tab);
        localStorage.setItem('activeTab',JSON.stringify(tab));
      }
    },
    setTotal(){
      if(this.activeTab === 0 && this.$frontmatter.blogs.length >= 0){
        this.total = this.$frontmatter.blogs.length;
      }else if(this.activeTab === 1 && this.$frontmatter.articles.length >= 0){
        this.total = this.$frontmatter.articles.length;
      }
    },
    handleArticleClick(article){
      this.$router.push({
        path: article.router
      })
    },
    handlePageClick(page){
      this.currentPage = page;
    }
  },
  mounted(){
    this.setTotal();
  },
}
</script>

<style lang="stylus">
@import url('../../public/iconfont/iconfont.css');
@import '../styles/adaptation.styl';
.community_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height:100%;
  overflow-y auto;
  span{
    line-height:1;
  }

  .community_top {
    width: 100%;
    height: 36rem;
    background url('../assets/faq_bg.png') no-repeat center / cover;
    // display: flex;
    // justify-content center;
    @media (max-width 768px){
      height: 28rem;
      background url('../assets/blog_bg_768.png') no-repeat center center;
      background-size cover
    }
    @media (max-width 375px){
      height: 27.2rem;
    }

    .community_top_wrap {
      box-sizing: border-box;
      padding: 10.7rem 0 17.3rem 8.1rem;
      margin: 0 auto;
      max-width: $contentWidth;
      @media (max-width: 768px){
        padding 8rem 2.4rem 12rem 4.8rem
      }
      .community_top_left {
        display: flex;
        flex-direction: column;
        align-items flex-start;

        .community_top_left_sub_title {
          font-size: 48px;
          font-weight: 400;
          color: #000000;
          line-height: 48px;
          letter-spacing: 1px;
          margin-bottom: 22px;
          @media (max-width: 487px){
            font-size: 28px;
            line-height: 36px;
          }
        }

        .community_top_left_border {
          width: 64px;
          height: 4px;
          background #7065FF;
          margin-bottom: 32px;
        }
      }
    }
  }

  .community_bottom {
    display: flex;
    justify-content center;
    align-items flex-start;
    padding-top:48px;
    @media (max-width:1200px){
      margin 0 2.4rem
    }
    @media (max-width:768px){
      margin 0 2.4rem
    }
    @media (max-width:375px){
      margin 0 1.6rem
    }
    .community_bottom_wrap {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      @media (max-width: 1200px) {
        padding: 0 4.8rem;
      }
      @media (max-width: 768px) {
        padding: 0 2.4rem;
      }
      @media (max-width: 375px) {
        padding: 0 1.6rem;
      }
      .community_bottom_tab_container {
        border-bottom: 2px solid #E8EBF5;
        display: flex;
        margin-bottom: 32px;

        .community_bottom_tab {
          font-size: 16px;
          font-weight: 400;
          color: rgba(0,0,0,0.65);
          margin-right: 32px;
          cursor: pointer;
          border-bottom: 4px solid transparent;
          padding-bottom: 8px;
          transition all .2s linear;
        }

        .active {
          border-bottom: 4px solid #7065FF;
          opacity 1;
        }
      }

      .community_bottom_content_container {
        width: 100%;
        display: grid;
        grid-template-columns repeat(3, 1fr)
        grid-row-gap: 2.4rem
        grid-column-gap: 2.4rem
        @media (max-width 1050px){
          grid-template-columns repeat(2, 1fr)
        }
        @media (max-width 715px) {
          grid-row-gap: 1.2rem
          grid-column-gap: 1.2rem
        }
        @media (max-width 700px){
          grid-template-columns repeat(1, 1fr)
        }
        @media (max-width 375px){
          width: 100%;
        }
        .community_bottom_content_item {
          height: auto;
          max-width: 320px;
          background: #FFFFFF;
          border-radius: 4px;
          border: 1px solid #E8EBF5;
          box-sizing border-box;
          display: flex;
          flex-direction column;
          cursor: pointer;
          transition: all .2s linear;
          @media (max-width: 375px) {
            max-width: 27.2rem;
          }

          &:hover {
            border-color: #7065FF;

            .community_bottom_content_item_detail {
              color: #ffffff;
              background #7065FF;
            }
          }

          .community_bottom_content_item_time_container {
            flex: 1;
            display: flex;
            flex-direction column;
            box-sizing border-box;
            padding: 16px;
            justify-content space-between;

            .community_bottom_content_item_title {
              width: 100%
              font-size: 18px;
              font-weight: 600;
              color: #545454;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              @media (max-width: 375px) {
                font-size: 16px;
              }
            }

            .community_bottom_content_item_wrap {
              display: flex;
              flex-wrap: wrap;
              justify-content space-between;
              align-items center;
              margin-top: 1rem;
              @media (max-width: 768px) {
                margin-top: 1.1rem;
              }
              @media (max-width: 375px) {
                margin-top: 1.6rem;
              }

              .community_bottom_content_item_owner_container {
                display: flex;
                align-items center;

                .community_bottom_content_item_icon {
                  width: 24px;
                  height: 24px;
                  margin-right: 4px;
                }

                .community_bottom_content_item_owner {
                  font-size: 14px;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 0.65);
                }
              }

              //.community_bottom_content_item_time {
              //  font-size: 14px;
              //  font-weight: 400;
              //  color: rgba(0, 0, 0, 0.65);
              //}
            }

          }

          .community_bottom_content_item_detail {
            height: 45px;
            flex: 0 0 45px;
            border-top: 1px solid #E8EBF5;
            box-sizing: border-box;
            display: flex;
            justify-content center;
            align-items center;
            font-size: 14px;
            font-weight: 400;
            color: #7065FF;
            transition: all .2s linear;
          }
        }
      }

      .community_bottom_content_article_container {
        width: 100%;
        display: flex;
        flex-direction: column;
        .community_bottom_content_article_item{
          box-sizing:border-box;
          width:100%;
          min-height:131px;
          border-bottom:1px solid #E8EBF5;
          display:flex;
          align-items center;
          cursor:pointer;
          &:hover{
            .community_bottom_content_article_item_right_title{
              color:#7065FF !important;
            }
          }
          .community_bottom_content_article_item_left{
            margin-right:24px;
            display:flex;
            flex-direction:column;
            width:36px;
            flex: 0 0 36px;
            .community_bottom_content_article_item_left_top{
              display flex;
              flex-direction column;
              width: 36px;
              height: 42px;
              border: 1px solid #7065FF;
              justify-content center;
              align-items center;
              box-sizing border-box;
              margin-bottom 2px;
              .community_bottom_content_article_item_left_top_month{
                font-size: 12px;
                font-weight: 400;
                color: #000000;
                margin-bottom 2px;
              }
              .community_bottom_content_article_item_left_top_date{
                font-size: 20px;
                font-weight: 600;
                color: #7065FF;
                letter-spacing: 1px;
              }

            }
            .community_bottom_content_article_item_left_bottom{
              width: 36px;
              min-height: 20px;
              background: #4A4A7F;
              display flex;
              flex-direction column;
              justify-content center;
              align-items center;
              font-size: 12px;
              font-weight: 400;
              color: #FFFFFF;
            }
          }
          .community_bottom_content_article_item_right{
            display flex;
            flex-direction column;
            flex:1;
            .community_bottom_content_article_item_right_title{
              width:100%;
              //display flex;
              //align-items center;
              font-size: 20px;
              font-weight: 600;
              color: #545454;
              word-break break-all;
              margin-bottom 12px;
              line-height:1.5;
              @media (max-width: 497px) {
                font-size: 16px;
              }
              .community_bottom_content_article_item_right_tag{
                width: 60px;
                height: 24px;
                border-radius: 12px;
                border: 1px solid #7065FF;
                font-style:normal;
                font-size: 16px;
                font-weight: 600;
                color: #7065FF;
                text-align center;
                line-height:20px;
                box-sizing border-box;
                margin-left:8px;
                display:inline-block;
                padding:0 5px;
                position:relative;
                top:-3px;
                @media (max-width: 497px) {
                  width: 50px;
                  font-size: 14px;
                }
              }
            }
            .community_bottom_content_article_item_right_content{
              font-size: 14px;
              font-weight: 400;
              color: rgba(0,0,0,0.65);
              line-height: 24px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              text-overflow: ellipsis;
              overflow: hidden;
            }

          }
        }
      }
      .community_pagination{
        width:100%;
        display:flex;
        justify-content center;
        margin-top:48px;
        margin-bottom: 8rem;
        @media (max-width: 768px) {
          margin-bottom: 4.8rem;
        }
        @media (max-width: 375px) {
          margin-bottom: 3.6rem;
        }
      }
    }


  }


  //pc
  @media screen and (min-width: $minPcWidth) {
    .community_top {
      height: 360px;
      flex:0 0 360px;
      .community_top_wrap {
        .community_top_left {
          // margin-right: 132px;
        }
      }
    }

    .community_bottom {

      .community_bottom_wrap {
        display: flex;
        flex-direction: column;
        justify-content center;
        max-width: 1008px;
      }
    }
  }
  //pad
  @media screen and (max-width: $maxPadWidth) and (min-width: $minPadWidth) {
  }
  //mobile
  @media screen and (max-width: $maxMobileWidth) and (min-width: $minMobileWidth) {
  }

}

</style>
