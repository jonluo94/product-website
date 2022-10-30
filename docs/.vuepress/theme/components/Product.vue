<template>
  <div class="community_container">
    <div class="community_top_p">
      <el-carousel class="community_top_wrap_p" :interval="3000" direction="vertical" :autoplay="true">
        <el-carousel-item v-for="item in carousels" :key="item">
          <img style="height: 100%; width: 100%;" :src="$withBase(item)">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="community_bottom">
      <div class="community_bottom_wrap">
        <div class="community_bottom_tab_container">
                    <span class="community_bottom_tab" @click="handleTabClick(0)"
                          :class="activeTab === 0 ? 'active' : ''">
                        diaper bag
                    </span>
          <span class="community_bottom_tab" @click="handleTabClick(1)"
                :class="activeTab === 1 ? 'active' : ''">
                        laptop backpack
                    </span>
          <span class="community_bottom_tab" @click="handleTabClick(2)"
                :class="activeTab === 2 ? 'active' : ''">
                        laptop bag
                    </span>
        </div>

        <div class="community_bottom_content_container" v-show="activeTab === 0" v-if="$frontmatter">
          <div class="community_bottom_content_item"
               v-for="(item,index) in diaperbagsList">
            <img ref="diaperbag"  :src="item.src" @click="handleRouterClick(item)" class="community_bottom_content_item_img">
            <div class="community_bottom_content_item_time_container">
                            <span class="community_bottom_content_item_title">
                                {{ item.title }}
                            </span>
              <div style="width: 100%;margin-top: -16px;">
                <span class="community_bottom_content_item_time">{{ item.price }}</span>
              </div>
              <div class="community_bottom_content_item_wrap1">
                <div class="community_bottom_content_item_owner_container" v-for="icon in item.icons">
                  <img :src="$withBase(icon)" class="community_bottom_content_item_icon"  @click="handleIconClick(icon,index)">
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="community_bottom_content_container" v-show="activeTab === 1" v-if="$frontmatter">
          <div class="community_bottom_content_item"
               v-for="(item,index) in laptopbackpacksList">
            <img ref="laptopbackpack"  :src="item.src" @click="handleRouterClick(item)" class="community_bottom_content_item_img">
            <div class="community_bottom_content_item_time_container">
                            <span class="community_bottom_content_item_title">
                                {{ item.title }}
                            </span>
              <div style="width: 100%;margin-top: -16px;">
                <span class="community_bottom_content_item_time">{{ item.price }}</span>
              </div>
              <div class="community_bottom_content_item_wrap1">
                <div class="community_bottom_content_item_owner_container" v-for="icon in item.icons">
                  <img :src="$withBase(icon)" class="community_bottom_content_item_icon"  @click="handleIconClick1(icon,index)">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="community_bottom_content_container" v-show="activeTab === 2" v-if="$frontmatter">
          <div class="community_bottom_content_item"
               v-for="(item,index) in laptopbagsList">
            <img ref="laptopbag"  :src="item.src" @click="handleRouterClick(item)" class="community_bottom_content_item_img">
            <div class="community_bottom_content_item_time_container">
                            <span class="community_bottom_content_item_title">
                                {{ item.title }}
                            </span>
              <div style="width: 100%;margin-top: -16px;">
                <span class="community_bottom_content_item_time">{{ item.price }}</span>
              </div>
              <div class="community_bottom_content_item_wrap1">
                <div class="community_bottom_content_item_owner_container" v-for="icon in item.icons">
                  <img :src="$withBase(icon)" class="community_bottom_content_item_icon"  @click="handleIconClick2(icon,index)">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="community_pagination">
          <el-pagination
              background
              layout="prev, pager, next"
              :page-size="6"
              :pager-count="3"
              @current-change="handlePageClick"
              :current-page="currentPage"
              :total="total">
          </el-pagination>
        </div>

      </div>
    </div>
    <div class="community_bottom">
      <div class="community_bottom_wrap">
        <div class="community_bottom_tab_container">
                    <span class="community_bottom_tab" @click="handleTabClick2(0)"
                          :class="activeTab2 === 0 ? 'active' : ''">
                        school bag
                    </span>
          <span class="community_bottom_tab" @click="handleTabClick2(1)"
                :class="activeTab2 === 1 ? 'active' : ''">
                        shoulder bag
                    </span>
          <span class="community_bottom_tab" @click="handleTabClick2(2)"
                :class="activeTab2 === 2 ? 'active' : ''">
                        sport bag
                    </span>
        </div>

        <div class="community_bottom_content_container" v-show="activeTab2 === 0" v-if="$frontmatter">
          <div class="community_bottom_content_item"
               v-for="(item,index) in schoolbagsList">
            <img ref="schoolbag"  :src="item.src" @click="handleRouterClick(item)" class="community_bottom_content_item_img">
            <div class="community_bottom_content_item_time_container">
                            <span class="community_bottom_content_item_title">
                                {{ item.title }}
                            </span>
              <div style="width: 100%;margin-top: -16px;">
                <span class="community_bottom_content_item_time">{{ item.price }}</span>
              </div>
              <div class="community_bottom_content_item_wrap1">
                <div class="community_bottom_content_item_owner_container" v-for="icon in item.icons">
                  <img :src="$withBase(icon)" class="community_bottom_content_item_icon"  @click="handleIconClick3(icon,index)">
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="community_bottom_content_container" v-show="activeTab2 === 1" v-if="$frontmatter">
          <div class="community_bottom_content_item"
               v-for="(item,index) in shoulderbagsList">
            <img ref="shoulderbag"  :src="item.src" @click="handleRouterClick(item)" class="community_bottom_content_item_img">
            <div class="community_bottom_content_item_time_container">
                            <span class="community_bottom_content_item_title">
                                {{ item.title }}
                            </span>
              <div style="width: 100%;margin-top: -16px;">
                <span class="community_bottom_content_item_time">{{ item.price }}</span>
              </div>
              <div class="community_bottom_content_item_wrap1">
                <div class="community_bottom_content_item_owner_container" v-for="icon in item.icons">
                  <img :src="$withBase(icon)" class="community_bottom_content_item_icon"  @click="handleIconClick4(icon,index)">
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="community_bottom_content_container" v-show="activeTab2 === 2" v-if="$frontmatter">
          <div class="community_bottom_content_item"
               v-for="(item,index) in sportbagsList">
            <img ref="sportbag"  :src="item.src" @click="handleRouterClick(item)" class="community_bottom_content_item_img">
            <div class="community_bottom_content_item_time_container">
                            <span class="community_bottom_content_item_title">
                                {{ item.title }}
                            </span>
              <div style="width: 100%;margin-top: -16px;">
                <span class="community_bottom_content_item_time">{{ item.price }}</span>
              </div>
              <div class="community_bottom_content_item_wrap1">
                <div class="community_bottom_content_item_owner_container" v-for="icon in item.icons">
                  <img :src="$withBase(icon)" class="community_bottom_content_item_icon"  @click="handleIconClick5(icon,index)">
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="community_pagination">
          <el-pagination
              background
              layout="prev, pager, next"
              :page-size="6"
              :pager-count="3"
              @current-change="handlePageClick2"
              :current-page="currentPage2"
              :total="total2">
          </el-pagination>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name : 'Community',
  data(){
    return {
      total:0,
      currentPage: 1,
      total2:0,
      currentPage2: 1,
      carousels:[
        "/img/carousel/1.jpeg",
        "/img/carousel/2.jpeg",
        "/img/carousel/3.jpeg",
        "/img/carousel/4.jpeg",
        "/img/carousel/5.jpeg",
      ],
    }
  },
  watch:{
    activeTab(){
      this.setTotal();
      this.currentPage = 1;
    },
    activeTab2(){
      this.setTotal();
      this.currentPage2 = 1;
    },
  },
  computed:{
    activeTab(){
      return +this.$store.state.activeTab;
    },
    activeTab2(){
      return +this.$store.state.activeTab2;
    },
    diaperbagsList(){
      if(this.$frontmatter && this.$frontmatter.diaperbags && this.$frontmatter.diaperbags.length > 0 && this.activeTab === 0){
        let diaperbags = JSON.parse(JSON.stringify(this.$frontmatter.diaperbags))
        return diaperbags.splice((this.currentPage - 1) * 6, 6);
      }
    },
    laptopbackpacksList(){
      if(this.$frontmatter && this.$frontmatter.laptopbackpacks && this.$frontmatter.laptopbackpacks.length > 0 && this.activeTab === 1){
        let laptopbackpacks = JSON.parse(JSON.stringify(this.$frontmatter.laptopbackpacks))
        return laptopbackpacks.splice((this.currentPage - 1) * 6, 6);
      }
    },
    laptopbagsList(){
      if(this.$frontmatter && this.$frontmatter.laptopbags && this.$frontmatter.laptopbags.length > 0 && this.activeTab === 2){
        let laptopbags = JSON.parse(JSON.stringify(this.$frontmatter.laptopbags))
        return laptopbags.splice((this.currentPage - 1) * 6, 6);
      }
    },
    schoolbagsList(){
      if(this.$frontmatter && this.$frontmatter.schoolbags && this.$frontmatter.schoolbags.length > 0 && this.activeTab2 === 0){
        let schoolbags = JSON.parse(JSON.stringify(this.$frontmatter.schoolbags))
        return schoolbags.splice((this.currentPage2 - 1) * 6, 6);
      }
    },
    shoulderbagsList(){
      if(this.$frontmatter && this.$frontmatter.shoulderbags && this.$frontmatter.shoulderbags.length > 0 && this.activeTab2 === 1){
        let shoulderbags = JSON.parse(JSON.stringify(this.$frontmatter.shoulderbags))
        return shoulderbags.splice((this.currentPage2 - 1) * 6, 6);
      }
    },
    sportbagsList(){
      if(this.$frontmatter && this.$frontmatter.sportbags && this.$frontmatter.sportbags.length > 0 && this.activeTab2 === 2){
        let sportbags = JSON.parse(JSON.stringify(this.$frontmatter.sportbags))
        return sportbags.splice((this.currentPage2 - 1) * 6, 6);
      }
    },
  },

  methods : {
    handleTabClick(tab){
      if (this.activeTab !== tab) {
        this.$store.commit('activeTab',tab);
        localStorage.setItem('activeTab',JSON.stringify(tab));
      }
    },
    handleTabClick2(tab){
      if (this.activeTab2 !== tab) {
        this.$store.commit('activeTab2',tab);
        localStorage.setItem('activeTab2',JSON.stringify(tab));
      }
    },
    setTotal(){
      if(this.activeTab === 0 && this.$frontmatter.diaperbags.length >= 0){
        this.total = this.$frontmatter.diaperbags.length;
      }else if(this.activeTab === 1 && this.$frontmatter.laptopbackpacks.length >= 0){
        this.total = this.$frontmatter.laptopbackpacks.length;
      } else if(this.activeTab === 2 && this.$frontmatter.laptopbags.length >= 0){
        this.total = this.$frontmatter.laptopbags.length;
      }
      if(this.activeTab2 === 0 && this.$frontmatter.schoolbags.length >= 0){
        this.total2 = this.$frontmatter.schoolbags.length;
      }else if(this.activeTab2 === 1 && this.$frontmatter.shoulderbags.length >= 0){
        this.total2 = this.$frontmatter.shoulderbags.length;
      } else if(this.activeTab2 === 2 && this.$frontmatter.sportbags.length >= 0){
        this.total2 = this.$frontmatter.sportbags.length;
      }
    },
    handleRouterClick(article){
      this.$router.push({
        path: article.router
      })
    },
    handleIconClick(icon,index){
       this.$refs.diaperbag[index].src=icon
    },
    handleIconClick1(icon,index){
      this.$refs.laptopbackpack[index].src=icon
    },
    handleIconClick2(icon,index){
      this.$refs.laptopbag[index].src=icon
    },
    handleIconClick3(icon,index){
      this.$refs.schoolbag[index].src=icon
    },
    handleIconClick4(icon,index){
      this.$refs.shoulderbag[index].src=icon
    },
    handleIconClick5(icon,index){
      this.$refs.sportbag[index].src=icon
    },
    handlePageClick(page){
      this.currentPage = page;
    },
    handlePageClick2(page){
      this.currentPage2= page;
    },
  },
  mounted(){
    this.setTotal();
  },
}
</script>

<style lang="stylus">
@import url('../../public/iconfont/iconfont.css');
@import '../styles/adaptation.styl';

.el-carousel__container {
  height: 360px;
  @media (max-width 768px){
    height: 28rem;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.community_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height:100%;
  overflow-y auto;
  span{
    line-height:1;
  }

  .community_top_p {
    width: 100%;
    height: 36rem;
    background url('../assets/product_bg.png') no-repeat center / cover;
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

    .community_top_wrap_p {
      box-sizing: border-box;
      margin: 0 auto;
      max-width: 90rem;
      @media (max-width: 768px){
        //padding 8rem 2.4rem 12rem 4.8rem
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

          .community_bottom_content_item_img {
            width: 100%;
            height: 280px;
            flex: 0 0 200px;
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
              color: #000000;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              @media (max-width: 375px) {
                font-size: 16px;
              }
            }

            .community_bottom_content_item_wrap1 {
              display: flex;
              flex-wrap: wrap;
              justify-content: left;
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
                  margin-right: 1px;
                }

                .community_bottom_content_item_owner {
                  font-size: 14px;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 0.65);
                }
              }
            }
            .community_bottom_content_item_time {
              font-size: 14px;
              font-weight: 400;
              float:right;
              color: rgba(0, 0, 0, 0.65);
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
              color: #000000;
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
    .community_top_p {
      height: 360px;
      flex:0 0 360px;
      .community_top_wrap_p {
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
