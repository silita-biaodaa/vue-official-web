<template>
    <div class="publicInfo">
        <div class="dfrcb mb40">
            <div class="item_left bg-fff">
                <div class="fs20 f500 pl30 pr30 pt30 pb20">信息全面，你想查的这里都有</div>
                <div class="fs14 left_info pl30 pr30">招标、中标一目了然；是否在建，一查便知；资质+业绩+综合查询；查企业、人员、业绩、法务；海量联系方式</div>
            </div>
            <div class="item_right bg-fff">
                <div class="fs20 f500 pl30 pr30 pt30 pb20">海量数据，实时更新</div>
                <div class="fs14 right_info pl30 pr30">日均新增信息量上万条。 500w+建筑企业法务数据； 10W+湖南在建数据 50W+企业数据； 200w+业绩数据 ； 400w+建筑行业企业工商详情； 300w+建筑行业企业联系方式； 430w+企业注册人员； 400w+招标公告； 320w+中标公告。</div>
            </div>
        </div>
        <div class="pl30 pr30">
            <ul class="dfrcb">
                <li class="mb40" v-for="(item,i) in companyInfo" :key="i">
                    <div class="fs16 mb10 f600">{{item.title}}</div>
                    <div class="fs14">{{item.info}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            companyInfo: [
                {
                    title: "查招标",
                    info: "可根据地区、类型、招标金额、关键词筛选出您想要的招标公告"
                },
                {
                    title: "查企业",
                    info: "包含工商、法务、资质、人员、业绩、中标、诚信信息"
                },
                {
                    title: "查中标",
                    info: "可根据地区、中标金额、关键词筛选出您想要的中标公告"
                },
                {
                    title: "查人员",
                    info: "精准查询个人注册证书、个人业绩、不良记录、变更记录"
                },
                {
                    title: "查法务",
                    info: "涵盖全国建筑行业，输入企业名称即可查询公司是否有相关法务信息"
                },
                {
                    title: "查业绩",
                    info: "涵盖全国住建、水利、交通行业"
                },
                {
                    title: "查在建",
                    info: "1、涵盖湖南省内所有在建信息。 2、只需输入身份证号即可精准查询人员在建情况，数据真实可靠。3、在建信息实时更新，是否在建，一查便知。"
                },
            ]
        }
    }
}
</script>
<style scoped lang="less">
@import "../styles/global";
@fontColor: #424040;
.publicInfo {
    .item_left,.item_right {
        height: 180px;
        width: 580px;
    }
    .item_left {
        background: #ffffff url(../assets/src/images/bg5.png) no-repeat;
        .left_info {
            color: @fontColor;
        }
    }
    .item_right {
        background: #ffffff url(../assets/src/images/bg6.png) no-repeat;
        .right_info {
            color: @fontColor;
        }
    }
    ul {
        width: 100%;
        height: 100%;
        li {
            width: 340px;
        }
    }
}
</style>