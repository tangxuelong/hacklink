<!-- Please remove this file from your project -->
<template>
  <div class="" v-show="swiperInit">
    <Header></Header>
    <!-- siwper -->
    <div class="swiper-div">
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <template v-for="(post, p_index) of ssrData.posts">
            <div class="swiper-slide" :key="p_index" :id="post.id" v-if="p_index < 3">
              <div class="swiper-item">
                <div class="left-img">
                  <img :src="post.feature_image" alt="">
                </div>
                <div class="right-content">
                  <div class="content-title j-text-width-scope-2">{{post.title}}</div>
                  <div class="content-desc j-text-width-scope-3">{{post.excerpt}}</div>
                  <div class="content-time">
                    {{formateDate(post.published_at, 'yyyy/MM/dd')}}
                  </div>
                </div>
              </div>
            </div>
          </template>
         
      </div>

      
    </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <!-- Slider main container -->
    <!-- tab change  -->
    <div class="tab-change" id="tab-container">
      <div v-for="(item, item_index) in tabList" :class="{'active': active_tab_index == item_index}" :key="item_index" :id="'tab_tag_' + item_index" @click="tabChange(item_index)">
        {{item}}<span></span>
      </div>
    </div>
    <!-- posts list -->
    <div class="posts-list-div">
      <div class="posts-list" v-if="ssrData.posts">
        <div class="post-item" @click="linkPost(post.id)" v-for="(post, p_index) of ssrData.posts" :key="p_index" :id="post.id">
          <div class="image-cover">
            <img :src="post.feature_image" alt="">
          </div>
          <div class="post-content">
            <div class="post-title j-text-width-scope-2">{{post.title}}</div>
            <div class="post-desc j-text-width-scope-3">{{post.excerpt}}</div>
            <div class="post-time">{{formateDate(post.published_at, 'yyyy/MM/dd')}}</div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'PostsList',
  components: {
    Header: () => import('~/components/Header.vue'),
    Footer: () => import('~/components/Footer.vue')
  },
  data(){
    return {
      tabList: ['News','Announcements','Events','Guides'],
      active_tab_index: 0,
      swiperInit: false
    }
  },
  props: ['ssrData'],
  mounted() {
    this.$swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },

       autoplay: {
        delay: 3000,
      },
    }).then(()=>{
      this.swiperInit = true
    });
  },
  methods: {
    tabChange(index){
      this.active_tab_index = index;
      // tab切换滑动 把选中的tab滑到中间 避免看不到后面的标签
      const tab_tag_dom = document.getElementById('tab_tag_' + index);
      const recommend_title_dom = document.getElementById('tab-container');
      if (tab_tag_dom) {
        const clientWidth = recommend_title_dom.clientWidth;
        // const scrollLeft = recommend_title_dom.scrollLeft;
        const offsetLeft = tab_tag_dom.offsetLeft;
        recommend_title_dom.scrollLeft = (offsetLeft - (clientWidth / 2) + tab_tag_dom.clientWidth / 2);
      }
    },
    linkPost (id) {
      this.$router.push(`/post/${id}`)
    },
    formateDate (date, fmt = 'yyyy/MM/dd HH:mm:ss') {
      if (!date) return;
      date = new Date(date);
      var o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'H+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      return fmt;
    }
  }
}
</script>
<style scoped>
.swiper-div {
  width: 1056px;
  height: 240px;
  margin: 80px auto 0 auto;
  position: relative;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left-img {
  background: #efefef;
  border-radius: 8px;
  overflow: hidden;
  width: 480px;
  height: 240px;
  display: flex;
  flex: 0 0 480px;
  overflow: hidden;
  position: relative;
}
.left-img img {
  width: 100%;
  height: 100%;
}
.right-content {
  margin: 12px 0 12px 40px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.right-content .content-title {
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  /* identical to box height, or 131% */
  /* ink-main */
  color: #0E0E11;
}

.right-content .content-desc {
  margin-top: 16px;
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  /* ink-sub */
  color: rgba(14, 14, 17, 0.5);
}

.right-content .content-time {
  margin-top: auto;
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  /* ink-sub */
  color: rgba(14, 14, 17, 0.5);
}

.swiper-button-prev{
  left: -72px !important;
}
.swiper-button-next {
  right: -72px !important;
}

.swiper-button-next, .swiper-button-prev {
  color: #FF761C;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 118, 28, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-button-prev::after {
  font-size: 24px !important;
  font-weight: bold !important;
  margin-left: -3px;
}
.swiper-button-next::after {
  font-size: 24px !important;
  font-weight: bold !important;
  margin-right: -3px;
}


/* nav start */
.tab-change {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  margin-top: 110px;
}

.tab-change div {
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  /* ink-main */
  color: #0E0E11;
  padding: 0 8px;
  height: 32px;
  line-height: 32px;
  margin: 0 16px;
  position: relative;
}

.tab-change div.active {
  color: #FF761C;
}

.tab-change div.active span {
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  background: #FF761C;
  border-radius: 2px;
  left: 0;
}

/* posts-list */
.posts-list-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 48px auto 0 auto;
}
.posts-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1536px;
  margin: 48px auto 0 auto;
}
.post-item {
  width: 368px;
  height: 352px;

  /* line */

  border: 1px solid rgba(14, 14, 17, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 8px 16px 8px;
}
.image-cover {
  width: 368px;
  height: 184px;
  background: #efefef;
  border-radius: 8px;
  overflow: hidden;
}
.image-cover img {
  width: 100%;
  height: 100%;
}
.post-content {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  flex: 1;
}
.post-content .post-title {
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */


  /* ink-main */

  color: #0E0E11;
}
.post-desc {
  margin-top: 8px;
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  /* or 150% */


  /* ink-sub */

  color: rgba(14, 14, 17, 0.5);
}
.post-time {
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */


  /* ink-sub */

  color: rgba(14, 14, 17, 0.5);
  margin-top: auto;
}
.swiper-pagination {
  display: none;
};
@media screen and (min-width: 768px) and (max-width: 1152px) {
  .post-item:last-child {
    margin-right: auto !important;
  }
}
@media screen and (min-width: 1536px) {
  .post-item:last-child {
    margin-right: auto;
  }
}
@media screen and (max-width: 960px) {
  .swiper-div {
    width: 560px;
    height: 516px;
    margin: 80px auto 0 auto;
    position: relative;
  }
  .swiper-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .left-img {
    width: 560px;
    height: 280px;
    flex: 0 0 280px;
  }
  .right-content {
    margin: 24px 16px 0 16px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .swiper-button-prev{
    top: 140px;
    left: -72px !important;
  }
  .swiper-button-next {
    top: 140px;
    right: -72px !important;
  }

}


@media screen and (max-width: 750px) {
  .swiper-button-prev, .swiper-button-next{
    display: none;
  }
  .swiper-div {
    max-width: 100%;
    padding: 16px 8px;
    margin: 70px auto 0 auto;
    height: 458px;
  }
  .left-img {
    width: 100%;
    height: 187px;
    flex: 0 0 187px;
  }
  .tab-change {
    width: 100%;
    overflow-x: scroll;
    padding: 0 50px;
  }
  .tab-change div:first-child{
    margin-left: 100px;
  }
  .post-item {
    max-width: calc(100vw - 32px)
  }
  .image-cover {
    max-width: calc(100vw - 32px)
  }
  .swiper-pagination {
    display: block;
    text-align: right;
    bottom: 18px !important;
    padding-right: 18px !important;
    background: #FFF;
    right: 0 !important;
    left: auto !important;
    width: 50% !important;
  }
  .tab-change {
    border-bottom:1px solid #FAFAFA;
    padding-bottom: 10px;
    margin-top: 61px;
  }
  .posts-list-div {
    margin: 0;
  }
  .posts-list {
    margin-top: 16px;
  }
}
</style>
<style>
.swiper-pagination-bullet {
  background: rgba(255, 118, 28, 0.8) !important;
}

.swiper-pagination-bullet-active {
    background: #FF761C !important;
  }
</style>