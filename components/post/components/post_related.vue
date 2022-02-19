<template>
    <div class="right-related">
        <div class="tags-title">Related</div>
        <div class="related-list">
            <div class="related-items" v-for="(related_post, related_posts_index) in ssrData.related_posts" :key="related_posts_index" v-if="related_posts_index<3">
                <div class="img">
                    <img :src="related_post.feature_image" alt="">
                </div>
                <div class="title j-text-width-scope-2">
                    {{related_post.title}}
                </div>
                <div class="time">
                    {{formateDate(related_post.published_at, 'yyyy/MM/dd')}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'share',
     props: ['ssrData','showTags'],
     methods: {
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
.right-related {
    border-top: 1px solid rgba(14, 14, 17, 0.1);
    max-width: 368px;
}

.related-list {
    display: flex;
    flex-wrap: wrap;
}

.related-items {
    border: 1px solid rgba(14, 14, 17, 0.1);
    box-sizing: border-box;
    border-radius: 8px;
    margin-top: 16px;
    padding-bottom: 16px;
    width: 100%;
    flex: 0 0 368px;
}
.related-items .img {
    width: 100%;
    height: 184px;
    border-radius: 8px;
    overflow: hidden;
}
.related-items .img img {
    width: 100%;
    height: 100%;
}

.related-items .title {
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */


    /* ink-main */

    color: #0E0E11;
    margin: 16px 16px 0 16px;
}
.related-items .time {
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */


    /* ink-sub */

    color: rgba(14, 14, 17, 0.5);
    margin: 4px 0 0 16px;
}
.tag-list {
    width: 100%;
    border-top: 1px solid rgba(14, 14, 17, 0.1);
    margin-top: 56px;
}
.tags-title {
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */


    /* ink-sub */

    color: rgba(14, 14, 17, 0.5);
    margin-top: 14px;
}
.tags-div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
}
.tag-item {
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    /* identical to box height, or 200% */


    /* accent-main */

    color: #FF761C;
    padding: 0 6px;
    /* accent-bg */

    background: rgba(255, 118, 28, 0.08);
    border-radius: 4px;
    margin-top: 6px;
    margin-right: 6px;
}
.no-border-top {
    border-top: none
}
</style>