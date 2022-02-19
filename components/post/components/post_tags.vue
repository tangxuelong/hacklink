<template>
    <div class="tag-list" :class="{'no-border-top': !showTags}">
        <div class="tags-title" v-if="showTags">tags</div>
        <div class="tags-div">
            <div class="tag-item" v-for="(tag,_tag_idex) in ssrData.posts[0].tags" :key="_tag_idex">
                {{tag.name}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'share',
     props: ['ssrData','showTags'],
     methods: {
     }
}
</script>

<style scoped>

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