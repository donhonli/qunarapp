<template>
    <div class="location">
        <div class="location-left">
            <i class="iconfont">&#xe683;</i>
            北京大兴
        </div>
        <div class="location-right">
            <i class="iconfont">&#xe844;</i>
            必游榜单
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .location{
        margin-top: .2rem;
        display: flex;
        font-size: .28rem;
        width: 100%;
        height: .98rem;
        justify-content: space-between;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
        
    }
    .location div{
        width: 50%;
        text-align: center;
        
        line-height: .98rem;
        box-sizing: border-box;
    }
    .location-left{
        border-right: 1px solid #f0f0f0;
    }
    .location-right{

    }
</style>