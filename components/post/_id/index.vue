<template>
   <div>
        <Header></Header>
        <div class="backToBlog" @click="backToBlog">
            « <span>Back to blog</span>
        </div>
        <div class="post-container">
            <!-- share & tags -->
            <div class="left-share-tags">
                <!-- share -->
                <PostShare :ssrData="ssrData"></PostShare>
                <!-- tags -->
                <PostTags :showTags="true" :ssrData="ssrData"></PostTags>
            </div>
            <!-- aticle -->
            <div class="aticle-content">
                <PostTags :showTags="false" class="content-top-post-tags" :ssrData="ssrData"></PostTags>
                <div class="aticle-title">
                    {{ssrData.posts[0].title}}
                </div>
                <div class="aticle-content-conent" v-html="ssrData.posts[0].html"></div>
                <!-- share -->
                <PostShare class="content-bottom-share" :ssrData="ssrData"></PostShare>
            </div>
            <!-- related -->
            <div class="right-related-share">
                <PostShare class="right-share" :ssrData="ssrData"></PostShare>
                <PostRelated :ssrData="ssrData"></PostRelated>
            </div>
            
        </div>
        <PostRelated class="post-related-bottom" :ssrData="ssrData"></PostRelated>
        <Footer></Footer>
   </div>
</template>
<script>
export default {
    name: 'POST_INDEX',
    components: {
        Header: () => import('~/components/Header.vue'),
        Footer: () => import('~/components/Footer.vue'),
        PostShare: () => import('../components/post_share.vue'),
        PostTags: () => import('../components/post_tags.vue'),
        PostRelated: () => import('../components/post_related.vue'),
    },
    props: ['ssrData'],
    mounted(){},
    methods: {
        backToBlog(){
            this.$router.push('/')
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
.backToBlog {
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    /* identical to box height, or 200% */


    /* ink-main */

    color: #0E0E11;
    margin-top: 102px;
    margin-left: 136px;
}
.backToBlog span {
    text-decoration: underline;
}
.post-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 56px;
}
.left-share-tags {
    width: 368px;
    flex: 0 0 368px;
    margin-right: 79px;
}
.aticle-content {
    max-width: 722px;
}

/* article */
.aticle-content >>> .aticle-content-conent p{
    /* OS-like/List - SF */

    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */


    /* ink-main */

    color: #0E0E11;
    margin-top: 18px;
}
.aticle-content >>>.aticle-content-conent img {
    width: 100%;
    margin: 28px 0;
}
.aticle-content >>>.aticle-content-conent a {
    color: #FF761C;
    text-decoration: underline;
}
.aticle-content >>>.aticle-content-conent h1 {
    /* Plex Sans/P */

    font-family: SF Pro Text;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    /* or 127% */


    /* ink-main */

    color: #0E0E11;
    margin-top: 28px;
}
.aticle-content >>>.aticle-content-conent h2 {
    /* Plex Sans/P */

    font-family: SF Pro Text;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    /* or 127% */


    /* ink-main */

    color: #0E0E11;
    margin-top: 28px;
}

.aticle-content >>>.aticle-content-conent h3 {
    /* Plex Sans/P */

    font-family: SF Pro Text;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    /* or 127% */


    /* ink-main */

    color: #0E0E11;
    margin-top: 28px;
}
.aticle-content >>>.aticle-content-conent h4 {
    /* Plex Sans/P */

    font-family: SF Pro Text;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* or 127% */


    /* ink-main */

    color: #0E0E11;
    margin-top: 28px;
}
.aticle-content >>>.aticle-content-conent h5 {
    /* Plex Sans/P */

    font-family: SF Pro Text;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    /* or 127% */


    /* ink-main */

    color: #0E0E11;
    margin-top: 28px;
}

.aticle-title {
    /* OS-like/H1 - SF */

    font-family: SF Pro Text;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 56px;
    /* or 124% */


    /* ink-main */

    color: #0E0E11;
    margin-bottom: 50px;
}

.right-related-share {
    width: 368px;
    flex: 0 0 368px;
    margin-left: 79px;
}

.right-share, .content-top-post-tags,.content-bottom-share,.post-related-bottom {
    display: none !important;
}

@media screen and (max-width: 1700px) {
    .left-share-tags {
        display: none;
    }
    .right-share {
        display: flex !important;
        margin: 74px 0 56px 0;
    }
    
    .content-top-post-tags {
        display: block !important;
        margin-bottom: 24px;
    }
}
@media screen and (max-width: 1250px) {
    .right-related-share {
        display: none;
    }
    .content-bottom-share {
        display: flex !important;
        margin-top: 70px;
    }
    .post-related-bottom {
        display: block !important;
        max-width: 896px !important;
        margin: 56px auto;
    }
    .post-related-bottom >>> .related-list {
        justify-content: flex-start !important;
    }
    .post-related-bottom >>> .related-items {
        margin: 8px 0;
        display: flex;
        flex-direction: column;
        width: 288px;
        flex:  0 0 288px;
    }
    .post-related-bottom >>> .related-items:first-child+div {
        margin: 8px 8px;
    }
    .post-related-bottom >>> .time {
        margin-bottom: 0 !important;
    }
}
@media screen and (max-width: 788px) {
    .post-container {
        padding: 0 10px;
    }
    .post-container >>>.tag-list {
        margin-top: 0;
    }
    .backToBlog {
        margin-left: 10px;
    }
    .post-related-bottom {
        margin: 30px 10px;
    }
    .post-related-bottom >>> .related-items {
        flex: 1 !important;
        width: 100%;
    }
    .post-related-bottom >>> .related-list {
        flex-direction: column !important;
        align-items: center !important;
        width: 100% !important;
        flex-wrap: nowrap;
    }

    .aticle-content >>>.aticle-content-conent h1 {
        /* Plex Sans/P */

        font-family: SF Pro Text;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        /* or 127% */


        /* ink-main */

        color: #0E0E11;
        margin-top: 22px;
    }
    .aticle-content >>>.aticle-content-conent h2 {
        /* Plex Sans/P */

        font-family: SF Pro Text;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        /* or 127% */


        /* ink-main */

        color: #0E0E11;
        margin-top: 22px;
    }

    .aticle-content >>>.aticle-content-conent h3 {
        /* Plex Sans/P */

        font-family: SF Pro Text;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        /* or 127% */


        /* ink-main */

        color: #0E0E11;
        margin-top: 22px;
    }
    .aticle-content >>>.aticle-content-conent h4 {
        /* Plex Sans/P */

        font-family: SF Pro Text;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        /* or 127% */


        /* ink-main */

        color: #0E0E11;
        margin-top: 22px;
    }
    .aticle-content >>>.aticle-content-conent h5 {
        /* Plex Sans/P */

        font-family: SF Pro Text;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 22px;
        /* or 127% */


        /* ink-main */

        color: #0E0E11;
        margin-top: 22px;
    }

    .aticle-title {
        /* Mobile/H1 - Mobile */

        font-family: SF Pro Text;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
        /* or 120% */


        /* ink-main */

        color: #0E0E11;
        margin-bottom: 24px;
    }
    /* article */
    .aticle-content >>> .aticle-content-conent p{
        /* Mobile/List - Mobile */

        font-family: SF Pro Text;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */


        /* ink-main */

        color: #0E0E11;
    }
}
</style>