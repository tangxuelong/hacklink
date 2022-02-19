<template>
    <div class="share-div">
        <div class="share-item">
            <span>Category</span>
            <div>Guide</div>
        </div>
        <div class="share-item">
            <span>Share to</span>
            <div class="icons">
                <span class="iconfont icon-tuite"></span>
                <span class="iconfont icon-telegram"></span>
                <span class="iconfont icon-weixin-copy"></span>
                <span class="iconfont icon-lianjie"></span>
            </div>
        </div>
        <div class="share-item">
            <span>Last updated</span>
            <div>{{formateDate(ssrData.posts[0].published_at, 'yyyy/MM/dd')}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'share',
     props: ['ssrData'],
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

.share-div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    
}
.share-item {
    border-top: 1px solid rgba(14, 14, 17, 0.1);
    padding-top: 14px;
    font-family: SF Pro Text;
}
.share-item {
    width: calc(50% - 8px);
}
.share-item span {
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */


    /* ink-sub */

    color: rgba(14, 14, 17, 0.5);

}
.share-item div {
    color: rgba(14, 14, 17);
}
.share-item div.icons {
    margin-top: 16px;
}
.share-item div.icons span{
    font-size: 32px;
    color: #000;
}
</style>